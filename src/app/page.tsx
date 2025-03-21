"use client";

import { useState } from "react";
import { archetypes } from "./data/archetypes";
import { forms } from "./data/forms";

export default function CharacterBuilder() {
    const [heroType, setHeroType] = useState<
        "Focused" | "Fused" | "Frantic" | null
    >(null);
    const [selectedArchetypes, setSelectedArchetypes] = useState<string[]>([]);
    const [selectedStyles, setSelectedStyles] = useState<string[]>(
        Array(3).fill("")
    );
    const [selectedForms, setSelectedForms] = useState<string[]>(
        Array(3).fill("")
    );
    const [currentStance, setCurrentStance] = useState<{
        style: string;
        form: string;
    } | null>(null);

    // Handle Hero Type selection
    const handleHeroTypeChange = (type: "Focused" | "Fused" | "Frantic") => {
        setHeroType(type);
        setSelectedArchetypes([]); // Reset Archetypes when Hero Type changes
        setSelectedStyles(Array(3).fill("")); // Reset Styles
        setSelectedForms(Array(3).fill("")); // Reset Forms
        setCurrentStance(null); // Reset Stance
    };

    // Handle Archetype selection
    const handleArchetypeChange = (archetype: string, index: number) => {
        const newArchetypes = [...selectedArchetypes];
        newArchetypes[index] = archetype;
        setSelectedArchetypes(newArchetypes);
    };

    // Handle Style selection
    const handleStyleChange = (style: string, index: number) => {
        const newStyles = [...selectedStyles];
        newStyles[index] = style;
        setSelectedStyles(newStyles);
    };

    // Handle Form selection
    const handleFormChange = (form: string, index: number) => {
        const newForms = [...selectedForms];
        newForms[index] = form;
        setSelectedForms(newForms);
    };

    // Handle Stance selection
    const handleStanceSelection = (style: string, form: string) => {
        setCurrentStance({ style, form });
    };

    // Get available Styles based on selected Archetypes
    const availableStyles = archetypes
        .filter((archetype) => selectedArchetypes.includes(archetype.name))
        .flatMap((archetype) => archetype.styles);

    // Combine Abilities and Actions for the selected Stance
    const combinedAbilities = [
        ...selectedArchetypes.flatMap((archetype) => {
            const archetypeData = archetypes.find((a) => a.name === archetype);
            if (!archetypeData) return [];
            switch (heroType) {
                case "Focused":
                    return archetypeData.focusedAbilities;
                case "Fused":
                    return archetypeData.fusedAbilities;
                case "Frantic":
                    return archetypeData.franticAbilities;
                default:
                    return [];
            }
        }),
        ...(currentStance
            ? [
                  ...(forms.find((f) => f.name === currentStance.form)
                      ?.abilities || []),
              ]
            : []),
    ].sort();

    const combinedActions = [
        ...selectedArchetypes.flatMap(
            (archetype) =>
                archetypes.find((a) => a.name === archetype)?.actions || []
        ),
        ...(currentStance
            ? [
                  ...(forms.find((f) => f.name === currentStance.form)
                      ?.actions || []),
                  ...(archetypes
                      .find((a) =>
                          a.styles
                              .map((s) => s.name)
                              .includes(currentStance.style)
                      )
                      ?.styles.find((s) => s.name === currentStance.style)
                      ?.actions || []),
              ]
            : []),
    ].sort((a, b) => {
        if (a.cost < b.cost) return -1;
        if (a.cost > b.cost) return 1;
        return 0;
    });

    const currentStyle = currentStance
        ? archetypes
              .flatMap((archetype) => archetype.styles)
              .find((style) => style.name === currentStance.style)
        : null;

    const currentForm = currentStance
        ? forms.find((form) => form.name === currentStance.form)
        : null;

    const allDice = currentForm?.greenDice.concat(currentForm.purpleDice);

    const diceList = allDice
        ? [
              ...allDice.map((die) =>
                  die > 0 ? `d${die}` : `<${Math.abs(die)}>`
              ),
          ].sort(
              (a, b) =>
                  parseInt(b.replace(/\D/g, "")) -
                  parseInt(a.replace(/\D/g, ""))
          )
        : [];

    return (
        <div className="container mx-auto p-4 max-w-4xl">
            <h1 className="text-3xl font-bold mb-6">Character Builder</h1>

            {/* Hero Type Selection */}
            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Hero Type</h2>
                <select
                    onChange={(e) =>
                        handleHeroTypeChange(
                            e.target.value as "Focused" | "Fused" | "Frantic"
                        )
                    }
                    className="w-full p-2 border border-gray-300 rounded"
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
                            length:
                                heroType === "Focused"
                                    ? 1
                                    : heroType === "Fused"
                                    ? 2
                                    : 3,
                        }).map((_, index) => (
                            <div
                                key={index}
                                className="bg-gray-100 p-4 rounded-lg"
                            >
                                <label className="block text-sm font-medium mb-2">
                                    Archetype {index + 1}
                                </label>
                                <select
                                    value={selectedArchetypes[index] || ""}
                                    onChange={(e) =>
                                        handleArchetypeChange(
                                            e.target.value,
                                            index
                                        )
                                    }
                                    className="w-full p-2 border border-gray-300 rounded"
                                >
                                    <option value="">Select Archetype</option>
                                    {archetypes.map((archetype) => (
                                        <option
                                            key={archetype.name}
                                            value={archetype.name}
                                        >
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
                    <h2 className="text-2xl font-semibold mb-4">
                        Styles and Forms
                    </h2>
                    {Array.from({ length: 3 }).map((_, index) => (
                        <div key={index} className="mb-6">
                            <h3 className="text-xl font-medium mb-2">
                                Stance {index + 1}
                            </h3>
                            <div className="grid grid-cols-2 gap-4">
                                {/* Style Dropdown */}
                                <div>
                                    <label className="block text-sm font-medium mb-2">
                                        Style
                                    </label>
                                    <select
                                        value={selectedStyles[index] || ""}
                                        onChange={(e) =>
                                            handleStyleChange(
                                                e.target.value,
                                                index
                                            )
                                        }
                                        className="w-full p-2 border border-gray-300 rounded"
                                    >
                                        <option value="">Select Style</option>
                                        {availableStyles.map((style) => (
                                            <option
                                                key={style.name}
                                                value={style.name}
                                            >
                                                {style.name}
                                            </option>
                                        ))}
                                    </select>
                                </div>

                                {/* Form Dropdown */}
                                <div>
                                    <label className="block text-sm font-medium mb-2">
                                        Form
                                    </label>
                                    <select
                                        value={selectedForms[index] || ""}
                                        onChange={(e) =>
                                            handleFormChange(
                                                e.target.value,
                                                index
                                            )
                                        }
                                        className="w-full p-2 border border-gray-300 rounded"
                                    >
                                        <option value="">Select Form</option>
                                        {forms.map((form) => (
                                            <option
                                                key={form.name}
                                                value={form.name}
                                            >
                                                {form.name}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            </div>

                            {/* Stance Selection Button */}
                            {selectedStyles[index] && selectedForms[index] && (
                                <button
                                    onClick={() =>
                                        handleStanceSelection(
                                            selectedStyles[index],
                                            selectedForms[index]
                                        )
                                    }
                                    className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
                                >
                                    View Stance {index + 1}
                                </button>
                            )}
                        </div>
                    ))}
                </section>
            )}

            {/* Combined Stance Information */}
            {currentStance && (
                <section>
                    <h2 className="text-2xl font-semibold mb-4">
                        Stance Details
                    </h2>
                    <div className="bg-gray-100 p-4 rounded-lg">
                        <h3 className="text-xl font-medium mb-2">Abilities</h3>
                        <ul className="list-none list-inside">
                            {combinedAbilities.map((ability, index) => (
                                <li key={index}>
                                    {ability.split("\n").map((line, i) => (
                                        <div key={i}>{line}</div>
                                    ))}
                                </li>
                            ))}
                        </ul>
                        <h3 className="text-xl font-medium mt-4 mb-2">
                            Actions
                        </h3>
                        <ul className="list-none list-inside">
                            {combinedActions.map((action, index) => (
                                <li key={index}>
                                    <h4 className="text-xl font-medium mt-4 mb-2">
                                        {action.cost}: {action.name}
                                    </h4>
                                    <div>
                                        {action.desc
                                            .split("\n")
                                            .map((line, i) => (
                                                <div key={i} className="pl-4">
                                                    {line.includes(":")
                                                        ? line
                                                              .split(":")
                                                              .map((part, j) =>
                                                                  j === 0 ? (
                                                                      <strong
                                                                          key={
                                                                              j
                                                                          }
                                                                      >
                                                                          {part}
                                                                          :
                                                                      </strong>
                                                                  ) : (
                                                                      part
                                                                  )
                                                              )
                                                        : line}
                                                </div>
                                            ))}
                                    </div>
                                </li>
                            ))}
                        </ul>
                        {currentStyle && (
                            <div className="mt-4">
                                <h3 className="text-xl font-medium mb-2">
                                    Range
                                </h3>
                                <p>
                                    {currentStyle.minRange}-
                                    {currentStyle.maxRange}
                                </p>
                            </div>
                        )}
                        {currentForm && (
                            <div className="mt-4">
                                <h3 className="text-xl font-medium mb-2">
                                    Dice
                                </h3>
                                <p>{diceList.join(", ")}</p>
                            </div>
                        )}
                    </div>
                </section>
            )}
        </div>
    );
}
