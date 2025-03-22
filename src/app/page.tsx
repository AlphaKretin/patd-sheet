"use client";

import { useEffect, useState } from "react";
import { archetypes } from "./data/archetypes";
import { bleedAbilities, heroType } from "./data/bleed";
import { bonusDice } from "./data/bonusdice";
import { Build, builds } from "./data/builds";
import { forms } from "./data/forms";
import { freestyles } from "./data/freestyles";
import { Archetype } from "./data/types/Archetype";
import { Form } from "./data/types/Form";
import { Skill } from "./data/types/Skill";
import { Freestyle, Style } from "./data/types/Style";

const DEFAULT_STANCE_COUNT = 3;

export default function CharacterBuilder() {
    const [characterName, setCharacterName] = useState<string>("");
    const [selectedBuild, setBuild] = useState<Build | null>(null);
    const [heroType, setHeroType] = useState<heroType | null>(null);
    const [selectedArchetypes, setSelectedArchetypes] = useState<Archetype[]>([]);
    const [selectedStyles, setSelectedStyles] = useState<Style[]>(Array(DEFAULT_STANCE_COUNT).fill({}));
    const [selectedForms, setSelectedForms] = useState<Form[]>(Array(DEFAULT_STANCE_COUNT).fill({}));
    const [currentStance, setCurrentStance] = useState<{
        archetype: Archetype;
        style: Style;
        form: Form;
    } | null>(null);
    const [franticArchetype, setFranticArchetype] = useState<Archetype>();
    const [franticStyle, setFranticStyle] = useState<Style>();
    const [franticForm, setFranticForm] = useState<Form>();
    const [selectedSkills, setSelectedSkills] = useState<Skill[]>(Array(3).fill(""));
    const [customSkill, setCustomSkill] = useState<Skill>({
        name: "",
        desc: "",
    });
    const [defaultSkills, setDefaultSkills] = useState<Skill[]>(Array(3).fill(""));
    const [savedCharacters, setSavedCharacters] = useState<string[]>([]);
    const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);
    const [characterLevel, setCharacterLevel] = useState<number>(1);

    useEffect(() => {
        if (typeof window !== "undefined") {
            setSavedCharacters(Object.keys(localStorage));
        }
    }, []);

    useEffect(() => {
        if (selectedForms.every((form) => form.name)) {
            const newDefaultSkills = selectedForms.map((form) => form.skill);
            setDefaultSkills(newDefaultSkills);
            setSelectedSkills(newDefaultSkills);
        }
    }, [selectedForms]);

    const handleBuildChange = (build: string) => {
        const newBuild = builds.find((b) => b.name === build);
        if (isDefined(newBuild)) {
            setBuild(newBuild);
        }
    };

    // Handle Hero Type selection
    const handleHeroTypeChange = (type: heroType) => {
        setHeroType(type);
        setSelectedArchetypes([]); // Reset Archetypes when Hero Type changes
        setSelectedStyles(Array(DEFAULT_STANCE_COUNT).fill({})); // Reset Styles
        setSelectedForms(Array(DEFAULT_STANCE_COUNT).fill({})); // Reset Forms
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
        if (newStyles.filter((s) => "name" in s && s.name.length > 0).length > DEFAULT_STANCE_COUNT - 1) {
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

    const handleSkillChange = (skill: string, index: number) => {
        const newSkills = [...selectedSkills];
        const newSkill = forms.map((f) => f.skill).find((s) => s.name === skill);
        if (isDefined(newSkill)) {
            newSkills[index] = newSkill;
        }
        const changedSkills = defaultSkills.filter((s) => !newSkills.some((sk) => sk.name === s.name)).length;
        if (changedSkills > 1) {
            alert("You can only change one of your skills!");
            return;
        }
        setSelectedSkills(newSkills);
    };

    const handleCustomSkillChange = (field: "name" | "desc", value: string) => {
        setCustomSkill({ ...customSkill, [field]: value });
    };

    // Save current selections to localStorage
    const saveCharacter = () => {
        if (!characterName) {
            alert("Please enter a character name before saving.");
            return;
        }
        const characterData = {
            selectedBuild,
            heroType,
            selectedArchetypes,
            selectedStyles,
            selectedForms,
            currentStance,
            franticArchetype,
            franticStyle,
            franticForm,
            selectedSkills,
            customSkill,
        };
        localStorage.setItem(characterName, JSON.stringify(characterData));
        setSavedCharacters(Object.keys(localStorage));
        alert("Character saved successfully!");
    };

    // Load saved character selections from localStorage
    const loadCharacter = (name: string) => {
        const characterData = localStorage.getItem(name);
        if (characterData) {
            const {
                selectedBuild,
                heroType,
                selectedArchetypes,
                selectedStyles,
                selectedForms,
                currentStance,
                franticArchetype,
                franticStyle,
                franticForm,
                selectedSkills,
                customSkill,
            } = JSON.parse(characterData);
            setCharacterName(name);
            setBuild(selectedBuild);
            setHeroType(heroType);
            setSelectedArchetypes(selectedArchetypes);
            setSelectedStyles(selectedStyles);
            setSelectedForms(selectedForms);
            setCurrentStance(currentStance);
            setFranticArchetype(franticArchetype);
            setFranticStyle(franticStyle);
            setFranticForm(franticForm);
            setSelectedSkills(selectedSkills);
            setCustomSkill(customSkill);
        } else {
            alert("No saved data found for this character.");
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

    function availableSkillForms(i: number): Form[] {
        // if user has already swapped out a skill in a different box, disallow all other skills not associated with forms
        let baseFormList: Form[] = [];
        const changedSkills = selectedSkills.filter((s) => !defaultSkills.some((sk) => sk.name === s.name));
        if (changedSkills.length > 0) {
            const changedSkill = changedSkills[0];
            const changedIndex = selectedSkills.findIndex((s) => s.name === changedSkill.name);
            if (changedIndex !== i) {
                baseFormList = defaultSkills
                    .map((s) => forms.find((f) => f.skill.name === s.name))
                    .filter((f) => isDefined(f));
            }
        }
        if (baseFormList.length < 1) {
            baseFormList = [...forms];
        }
        const aForms = baseFormList.filter((f) => {
            // if skill is currently selected in this box, allow it
            if (selectedSkills[i].name === f.skill.name) {
                return true;
            }
            // if skill is currently selected in another box, disallow it
            if (selectedSkills.some((s) => f.skill.name === s.name)) {
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
        ...(heroType ? [bleedAbilities[heroType]] : []),
        ...(selectedBuild ? selectedBuild.abilities : []),
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

    if (allDice && characterLevel in bonusDice) {
        allDice.push(bonusDice[characterLevel]);
    }

    const diceList = allDice
        ? [...allDice.map((die) => (die > 0 ? `d${die}` : `<${Math.abs(die)}>`))].sort(
              (a, b) => parseInt(b.replace(/\D/g, "")) - parseInt(a.replace(/\D/g, ""))
          )
        : [];

    return (
        <div className="container mx-auto p-4 max-w-4xl relative">
            {/* Hamburger Menu */}
            <button className="p-2 bg-gray-800 text-white rounded" onClick={() => setSidebarOpen(!sidebarOpen)}>
                ☰
            </button>

            {/* Sidebar */}
            <div
                className={`fixed top-0 left-0 h-full bg-gray-800 p-4 transition-transform transform ${
                    sidebarOpen ? "translate-x-0" : "-translate-x-full"
                }`}
                style={{ width: "250px" }}
            >
                <button className="p-2 bg-red-500 text-white rounded mb-4" onClick={() => setSidebarOpen(false)}>
                    Close
                </button>
                <h2 className="text-2xl font-semibold mb-4">About</h2>
                <p className="text-white">
                    This app allows you to record the details for a character in Panic At The Dojo 2nd Edition, and
                    review the data for a chosen stance all at once, including abilities and actions from all sources.
                </p>
                <br />
                <p className="text-white">
                    Created by LunaFlare. This app is not associated with or endorsed by the authors or publishers of
                    Panic At The Dojo.
                </p>
                <br />
                <p className="text-white">
                    This app is a work in progress. See future features, leave feedback, and contribute at{" "}
                    <a href="https://github.com/AlphaKretin/patd-sheet">https://github.com/AlphaKretin/patd-sheet</a>
                </p>
            </div>

            <h1 className="text-3xl font-bold mb-6">Panic At The Dojo 2e Digital Character Sheet</h1>

            {/* Character Name and Level Input */}
            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Character Name and Level</h2>
                <div className="flex space-x-4">
                    <input
                        type="text"
                        value={characterName}
                        onChange={(e) => setCharacterName(e.target.value)}
                        className="w-3/4 p-2 border rounded bg-gray-800 text-white"
                        placeholder="Enter your character's name"
                    />
                    <input
                        type="number"
                        value={characterLevel}
                        onChange={(e) => setCharacterLevel(Math.max(1, Math.min(10, parseInt(e.target.value))))}
                        className="w-1/4 p-2 border rounded bg-gray-800 text-white"
                        placeholder="Level"
                        min="1"
                        max="10"
                    />
                </div>
            </section>

            {/* Save and Load Buttons */}
            <section className="mb-8">
                <button onClick={saveCharacter} className="p-2 bg-blue-500 text-white rounded mr-2">
                    Save Character
                </button>
                <select
                    onChange={(e) => loadCharacter(e.target.value)}
                    className="p-2 border rounded bg-gray-800 text-white"
                >
                    <option value="">Load Character</option>
                    {savedCharacters.map((name) => (
                        <option key={name} value={name}>
                            {name}
                        </option>
                    ))}
                </select>
            </section>

            {/* Build Selection */}
            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Build</h2>
                <select
                    value={selectedBuild?.name || ""}
                    onChange={(e) => handleBuildChange(e.target.value)}
                    className="w-full p-2 border rounded bg-gray-800 text-white"
                >
                    <option value="">Select Build</option>
                    {builds.map((build) => (
                        <option key={build.name} value={build.name}>
                            {build.name}
                        </option>
                    ))}
                </select>
            </section>

            {/* Hero Type Selection */}
            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Hero Type</h2>
                <select
                    value={heroType || ""}
                    onChange={(e) => handleHeroTypeChange(e.target.value as heroType)}
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
                                    "name" in style &&
                                    "name" in selectedForms[index] && (
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

            {/* Skills Selection */}
            {selectedForms.every((form) => form.name) && (
                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4">Skills</h2>
                    <div className="grid grid-cols-1 gap-4">
                        {Array.from({ length: 3 }).map((_, index) => (
                            <div key={index} className="p-4 rounded-lg">
                                <label className="block text-sm font-medium mb-2">Skill {index + 1}</label>
                                <select
                                    value={selectedSkills[index].name || ""}
                                    onChange={(e) => handleSkillChange(e.target.value, index)}
                                    className="w-full p-2 border rounded bg-gray-800 text-white"
                                >
                                    <option value="">Select Skill</option>
                                    {availableSkillForms(index).map((f) => {
                                        const skill = f.skill;
                                        return (
                                            <option key={skill.name} value={skill.name}>
                                                {skill.name} ({f.name})
                                            </option>
                                        );
                                    })}
                                </select>
                                <p className="text-sm text-gray-400 mt-2">{selectedSkills[index].desc || ""}</p>
                            </div>
                        ))}
                    </div>
                    <div className="p-4 rounded-lg mt-4">
                        <label className="block text-sm font-medium mb-2">Custom Skill</label>
                        <input
                            type="text"
                            value={customSkill.name}
                            onChange={(e) => handleCustomSkillChange("name", e.target.value)}
                            className="w-full p-2 border rounded bg-gray-800 text-white mb-2"
                            placeholder="Enter custom skill name"
                        />
                        <textarea
                            value={customSkill.desc}
                            onChange={(e) => handleCustomSkillChange("desc", e.target.value)}
                            className="w-full p-2 border rounded bg-gray-800 text-white"
                            placeholder="Enter custom skill description"
                        />
                    </div>
                </section>
            )}
        </div>
    );
}
