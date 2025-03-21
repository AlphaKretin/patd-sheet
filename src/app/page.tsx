"use client";

import { useState } from "react";
import { archetypes } from "./data/archetypes";
import { forms } from "./data/forms";
import { freestyles } from "./data/freestyles";
import { Archetype } from "./data/types/Archetype";
import { Form } from "./data/types/Form";
import { Freestyle, Style } from "./data/types/Style";

const NUM_ARCHETYPES = 3;

export default function CharacterBuilder() {
    const [heroType, setHeroType] = useState<"Focused" | "Fused" | "Frantic" | null>(null);
    const [selectedArchetypes, setSelectedArchetypes] = useState<Archetype[]>([]);
    const [selectedStyles, setSelectedStyles] = useState<Style[]>(Array(NUM_ARCHETYPES).fill({}));
    const [selectedForms, setSelectedForms] = useState<Form[]>(Array(NUM_ARCHETYPES).fill({}));
    const [currentStance, setCurrentStance] = useState<{
        archetype: Archetype;
        style: Style;
        form: Form;
    } | null>(null);
    const [franticArchetype, setFranticArchetype] = useState<Archetype>();
    const [franticStyle, setFranticStyle] = useState<Style>();
    const [franticForm, setFranticForm] = useState<Form>();

    // Handle Hero Type selection
    const handleHeroTypeChange = (type: "Focused" | "Fused" | "Frantic") => {
        setHeroType(type);
        setSelectedArchetypes([]); // Reset Archetypes when Hero Type changes
        setSelectedStyles(Array(NUM_ARCHETYPES).fill({})); // Reset Styles
        setSelectedForms(Array(NUM_ARCHETYPES).fill({})); // Reset Forms
        setCurrentStance(null); // Reset Stance
    };

    function isDefined<T>(arg: T | undefined): arg is T {
        return arg !== undefined;
    }

    // Handle Archetype selection
    const handleArchetypeChange = (archetype: string, index: number) => {
        const newArchetypes = [...selectedArchetypes];
        const newArchetype = archetypes.find((a) => a.name === archetype);
        if (isDefined(newArchetype)) {
            // Check if the archetype is already selected
            if (newArchetypes.some((a, i) => a.name === newArchetype.name && i !== index)) {
                alert(`Cannot select ${newArchetype.name} more than once.`);
                return;
            }
            newArchetypes[index] = newArchetype;
        }
        setSelectedArchetypes(newArchetypes);
    };

    // Handle Style selection
    const handleStyleChange = (style: string, index: number) => {
        const newStyles = [...selectedStyles];
        const allStyles = [...archetypes.flatMap((a) => a.styles), ...freestyles];
        const newStyle = allStyles.find((s) => s.name === style);
        if (isDefined(newStyle)) {
            // Check if the selected style is a Freestyle and its bannedForm is selected
            if (isFreestyle(newStyle) && selectedForms.some((form) => form.name === newStyle.bannedForm)) {
                alert(`Cannot select ${newStyle.name} because it bans ${newStyle.bannedForm}.`);
                return;
            }
            // Check if the style is already selected
            if (newStyles.some((s, i) => s.name === newStyle.name && i !== index)) {
                alert(`Cannot select ${newStyle.name} more than once.`);
                return;
            }
            // Check if more than one Freestyle is selected
            if (isFreestyle(newStyle) && newStyles.some((s, i) => i !== index && isFreestyle(s))) {
                alert(`Cannot select more than one Freestyle.`);
                return;
            }
            newStyles[index] = newStyle;
        }
        setSelectedStyles(newStyles);

        // Validate that at least one style from each selected archetype is included if three archetypes are selected
        if (newStyles.filter((s) => "name" in s && s.name.length > 0).length > NUM_ARCHETYPES - 1) {
            const missingArchetypeStyles = selectedArchetypes.filter(
                (archetype) => !newStyles.some((style) => archetype.styles.includes(style))
            );
            if (missingArchetypeStyles.length > 0) {
                alert(`You must include at least one style from each selected archetype.`);
                newStyles[index] = selectedStyles[index]; // Revert the change
                setSelectedStyles(newStyles);
            }
        }
    };

    // Handle Form selection
    const handleFormChange = (form: string, index: number) => {
        const newForms = [...selectedForms];
        const newForm = forms.find((a) => a.name === form);
        if (isDefined(newForm)) {
            // Check if the selected form is banned by any selected Freestyle
            const banForms = selectedStyles.find((style) => isFreestyle(style) && style.bannedForm === newForm.name);
            if (banForms !== undefined) {
                alert(`Cannot select ${newForm.name} because it is banned by the ${banForms.name} Freestyle.`);
                return;
            }
            // Check if the form is already selected
            if (newForms.some((f, i) => f.name === newForm.name && i !== index)) {
                alert(`Cannot select ${newForm.name} more than once.`);
                return;
            }
            newForms[index] = newForm;
        }
        setSelectedForms(newForms);
    };

    // Handle Stance selection
    const handleStanceSelection = (index: number) => {
        setCurrentStance({
            archetype: selectedArchetypes[index], // unused but for Frantic
            style: selectedStyles[index],
            form: selectedForms[index],
        });
    };

    const handleFranticArchetypeSelection = (index: number) => {
        setFranticArchetype(selectedArchetypes[index]);
        if (franticStyle && franticForm) {
            setCurrentStance({
                archetype: selectedArchetypes[index],
                style: franticStyle,
                form: franticForm,
            });
        }
    };

    const handleFranticStyleSelection = (index: number) => {
        setFranticStyle(selectedStyles[index]);
        if (franticArchetype && franticForm) {
            setCurrentStance({
                archetype: franticArchetype,
                style: selectedStyles[index],
                form: franticForm,
            });
        }
    };

    const handleFranticFormSelection = (index: number) => {
        setFranticForm(selectedForms[index]);
        if (franticArchetype && franticStyle) {
            setCurrentStance({
                archetype: franticArchetype,
                style: franticStyle,
                form: selectedForms[index],
            });
        }
    };

    // Remove duplicate archetypes from dropdowns, unless in same dropdown where it's selected
    function availableArchetypes(i: number) {
        return archetypes.filter((a) => {
            // if archetype is currently selected in *this* box, allow it
            if (selectedArchetypes[i] && selectedArchetypes[i].name === a.name) {
                return true;
            }
            // if archetype is currently selected in another box, disallow it
            if (selectedArchetypes.some((ar) => ar.name === a.name)) {
                return false;
            }
            return true;
        });
    }

    // Get available Styles based on selected Archetypes
    function availableStyles(i: number) {
        let aStyles = [
            ...selectedArchetypes.flatMap((archetype) => archetype.styles),
            ...freestyles.filter((freestyle) => !selectedForms.some((form) => form.name === freestyle.bannedForm)),
        ];
        aStyles = aStyles.filter((s) => {
            // if style is currently selected in *this* box, allow it
            if (selectedStyles[i] && selectedStyles[i].name === s.name) {
                return true;
            }
            // if style is currently selected in another box, disallow it
            if (selectedStyles.some((st) => st.name === s.name)) {
                return false;
            }
            // if style is a freestyle and we already have a freestyle selected in a different box, disallow it
            if (isFreestyle(s)) {
                // allow choosing freestyle if a freestyle is already chosen in this slot
                if (selectedStyles[i] && isFreestyle(selectedStyles[i])) {
                    return true;
                }
                if (selectedStyles.some((st) => isFreestyle(st))) {
                    return false;
                }
            }
            return true;
        });

        return aStyles;
    }

    function availableForms(i: number) {
        let aForms = forms.filter(
            (form) => !selectedStyles.some((style) => isFreestyle(style) && style.bannedForm === form.name)
        );
        aForms = aForms.filter((f) => {
            // if form is currently selected in *this* box, allow it
            if (selectedForms[i] && selectedForms[i].name === f.name) {
                return true;
            }
            // if form is currently selected in another box, disallow it
            if (selectedForms.some((fo) => fo.name === f.name)) {
                return false;
            }
            return true;
        });
        return aForms;
    }

    const archetypeAbilities =
        heroType === "Frantic"
            ? currentStance?.archetype.franticAbilities || []
            : selectedArchetypes.flatMap((archetype) => {
                  switch (heroType) {
                      case "Focused":
                          return archetype.focusedAbilities;
                      case "Fused":
                          return archetype.fusedAbilities;
                      default:
                          return [];
                  }
              });

    // Combine Abilities and Actions for the selected Stance
    const combinedAbilities = [
        ...archetypeAbilities,
        ...(currentStance ? [...currentStance.form.abilities] : []),
        ...(currentStance ? [...currentStance.style.abilities] : []),
    ].sort();

    const archetypeActions =
        heroType === "Frantic"
            ? currentStance?.archetype.actions || []
            : selectedArchetypes.flatMap((archetype) => archetype.actions);

    const combinedActions = [
        ...archetypeActions,
        ...(currentStance ? [...currentStance.form.actions, ...currentStance.style.actions] : []),
    ].sort((a, b) => {
        if (a.cost < b.cost) return -1;
        if (a.cost > b.cost) return 1;
        return 0;
    });

    function isFreestyle(style: Style): style is Freestyle {
        return "bannedForm" in style;
    }

    const allDice = currentStance
        ? isFreestyle(currentStance.style)
            ? currentStance.form.purpleDice.concat(currentStance.style.dice)
            : currentStance.form.purpleDice.concat(currentStance.form.greenDice)
        : null;

    const diceList = allDice
        ? [...allDice.map((die) => (die > 0 ? `d${die}` : `<${Math.abs(die)}>`))].sort(
              (a, b) => parseInt(b.replace(/\D/g, "")) - parseInt(a.replace(/\D/g, ""))
          )
        : [];

    return (
        <div className="container mx-auto p-4 max-w-4xl">
            <h1 className="text-3xl font-bold mb-6">Character Builder</h1>

            {/* Hero Type Selection */}
            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Hero Type</h2>
                <select
                    onChange={(e) => handleHeroTypeChange(e.target.value as "Focused" | "Fused" | "Frantic")}
                    className="w-full p-2 border rounded bg-gray-800 text-white"
                >
                    <option value="">Select Hero Type</option>
                    <option value="Focused">Focused</option>
                    <option value="Fused">Fused</option>
                    <option value="Frantic">Frantic</option>
                </select>
            </section>

            {/* Archetype Selection */}
            {heroType && (
                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4">Archetypes</h2>
                    <div className="grid grid-cols-1 gap-4">
                        {Array.from({
                            length: heroType === "Focused" ? 1 : heroType === "Fused" ? 2 : 3,
                        }).map((_, index) => (
                            <div key={index} className="p-4 rounded-lg">
                                <label className="block text-sm font-medium mb-2">Archetype {index + 1}</label>
                                <select
                                    value={selectedArchetypes[index]?.name || ""}
                                    onChange={(e) => handleArchetypeChange(e.target.value, index)}
                                    className="w-full p-2 border rounded bg-gray-800 text-white"
                                >
                                    <option value="">Select Archetype</option>
                                    {availableArchetypes(index).map((archetype) => (
                                        <option key={archetype.name} value={archetype.name}>
                                            {archetype.name}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        ))}
                    </div>
                </section>
            )}

            {/* Style and Form Selection */}
            {heroType && selectedArchetypes.length > 0 && (
                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4">Styles and Forms</h2>
                    {Array.from({ length: 3 }).map((_, index) => (
                        <div key={index} className="mb-6">
                            <h3 className="text-xl font-medium mb-2">Stance {index + 1}</h3>
                            <div className="grid grid-cols-2 gap-4">
                                {/* Style Dropdown */}
                                <div>
                                    <label className="block text-sm font-medium mb-2">Style</label>
                                    <select
                                        value={selectedStyles[index]?.name || ""}
                                        onChange={(e) => handleStyleChange(e.target.value, index)}
                                        className="w-full p-2 border rounded bg-gray-800 text-white"
                                    >
                                        <option value="">Select Style</option>
                                        {availableStyles(index).map((style) => (
                                            <option key={style.name} value={style.name}>
                                                {style.name}
                                            </option>
                                        ))}
                                    </select>
                                </div>

                                {/* Form Dropdown */}
                                <div>
                                    <label className="block text-sm font-medium mb-2">Form</label>
                                    <select
                                        value={selectedForms[index]?.name || ""}
                                        onChange={(e) => handleFormChange(e.target.value, index)}
                                        className="w-full p-2 border rounded bg-gray-800 text-white"
                                    >
                                        <option value="">Select Form</option>
                                        {availableForms(index).map((form) => (
                                            <option key={form.name} value={form.name}>
                                                {form.name}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                        </div>
                    ))}
                </section>
            )}

            {/* Stance Selection Dropdown */}
            {heroType && selectedArchetypes.length > 0 && (
                <section className="mb-8">
                    <label className="block text-sm font-medium mb-2">Select Stance to View</label>
                    {heroType === "Frantic" ? (
                        <div className="grid grid-cols-3 gap-4">
                            <select
                                onChange={(e) => handleFranticArchetypeSelection(parseInt(e.target.value))}
                                className="w-full p-2 border rounded bg-gray-800 text-white"
                            >
                                <option value="">Select Archetype</option>
                                {selectedArchetypes.map(
                                    (archetype, index) =>
                                        archetype && (
                                            <option key={index} value={index}>
                                                {archetype.name}
                                            </option>
                                        )
                                )}
                            </select>
                            <select
                                onChange={(e) => handleFranticStyleSelection(parseInt(e.target.value))}
                                className="w-full p-2 border rounded bg-gray-800 text-white"
                            >
                                <option value="">Select Style</option>
                                {selectedStyles.map(
                                    (style, index) =>
                                        style && (
                                            <option key={index} value={index}>
                                                {style.name}
                                            </option>
                                        )
                                )}
                            </select>
                            <select
                                onChange={(e) => handleFranticFormSelection(parseInt(e.target.value))}
                                className="w-full p-2 border rounded bg-gray-800 text-white"
                            >
                                <option value="">Select Form</option>
                                {selectedForms.map(
                                    (form, index) =>
                                        form && (
                                            <option key={index} value={index}>
                                                {form.name}
                                            </option>
                                        )
                                )}
                            </select>
                        </div>
                    ) : (
                        <select
                            onChange={(e) => handleStanceSelection(parseInt(e.target.value))}
                            className="w-full p-2 border rounded bg-gray-800 text-white"
                        >
                            <option value="">Select Stance</option>
                            {selectedStyles.map(
                                (style, index) =>
                                    style &&
                                    selectedForms[index] && (
                                        <option key={index} value={index}>
                                            {selectedStyles[index].name} {selectedForms[index].name}
                                        </option>
                                    )
                            )}
                        </select>
                    )}
                </section>
            )}

            {/* Combined Stance Information */}
            {currentStance && (
                <section>
                    <h2 className="text-2xl font-semibold mb-4">
                        {heroType === "Frantic" ? currentStance.archetype.name + "'s " : ""}
                        {currentStance.style.name} {currentStance.form.name}
                    </h2>
                    <div className="p-4 rounded-lg">
                        <div>
                            <strong>Range: </strong>{" "}
                            {currentStance.style.minRange === currentStance.style.maxRange
                                ? currentStance.style.minRange
                                : `${currentStance.style.minRange}-${currentStance.style.maxRange}`}{" "}
                            <strong>Dice: {diceList.join(", ")}</strong>
                        </div>
                        <div>
                            {combinedAbilities.map((ability, index) => (
                                <div key={index}>
                                    {ability.split("\n").map((line, i) => (
                                        <div key={i}>{line}</div>
                                    ))}
                                </div>
                            ))}
                        </div>
                        <div>
                            {combinedActions.map((action, index) => (
                                <div key={index}>
                                    <h3 className="text-xl font-medium mt-4 mb-2">
                                        {action.cost}: {action.name}
                                    </h3>
                                    <div>
                                        {action.desc.split("\n").map((line, i) => (
                                            <div key={i} className="pl-4">
                                                {line.includes(":")
                                                    ? line
                                                          .split(":")
                                                          .map((part, j) =>
                                                              j === 0 ? <strong key={j}>{part}:</strong> : part
                                                          )
                                                    : line}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            )}
        </div>
    );
}
