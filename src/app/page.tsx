"use client";

import { useState } from "react";
import { archetypes } from "./data/archetypes";
import { forms } from "./data/forms";
import { Style } from "./data/types/Style";

export default function CharacterBuilder() {
    const [heroType, setHeroType] = useState<
        "Focused" | "Fused" | "Frantic" | null
    >(null);
    const [selectedArchetypes, setSelectedArchetypes] = useState<string[]>([]);
    const [selectedStyles, setSelectedStyles] = useState<string[]>([]);
    const [selectedForm, setSelectedForm] = useState<string | null>(null);

    // Handle Hero Type selection
    const handleHeroTypeChange = (type: "Focused" | "Fused" | "Frantic") => {
        setHeroType(type);
        setSelectedArchetypes([]); // Reset Archetypes when Hero Type changes
    };

    // Handle Archetype selection
    const handleArchetypeChange = (archetype: string) => {
        if (selectedArchetypes.includes(archetype)) {
            setSelectedArchetypes(
                selectedArchetypes.filter((a) => a !== archetype)
            );
        } else {
            if (heroType === "Focused" && selectedArchetypes.length >= 1)
                return;
            if (heroType === "Fused" && selectedArchetypes.length >= 2) return;
            if (heroType === "Frantic" && selectedArchetypes.length >= 3)
                return;
            setSelectedArchetypes([...selectedArchetypes, archetype]);
        }
    };

    // Handle Style selection
    const handleStyleChange = (style: string) => {
        if (selectedStyles.includes(style)) {
            setSelectedStyles(selectedStyles.filter((s) => s !== style));
        } else {
            setSelectedStyles([...selectedStyles, style]);
        }
    };

    // Handle Form selection
    const handleFormChange = (form: string) => {
        setSelectedForm(form);
    };

    // Get available Styles based on selected Archetypes
    const availableStyles = archetypes
        .filter((archetype) => selectedArchetypes.includes(archetype.name))
        .flatMap((archetype) => archetype.styles);

    // Combine Abilities and Actions for the selected Stance
    const combinedAbilities = [
        ...selectedArchetypes.flatMap(
            (archetype) =>
                archetypes.find((a) => a.name === archetype)
                    ?.focusedAbilities || []
        ),
        ...(selectedForm
            ? forms.find((f) => f.name === selectedForm)?.abilities || []
            : []),
    ];

    const combinedActions = [
        ...selectedArchetypes.flatMap(
            (archetype) =>
                archetypes.find((a) => a.name === archetype)?.actions || []
        ),
        ...(selectedForm
            ? forms.find((f) => f.name === selectedForm)?.actions || []
            : []),
    ];

    return (
        <div className="container mx-auto p-4">
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
                    <div className="grid grid-cols-3 gap-4">
                        {archetypes.map((archetype) => (
                            <div
                                key={archetype.name}
                                className="bg-gray-100 p-4 rounded-lg"
                            >
                                <label className="flex items-center">
                                    <input
                                        type="checkbox"
                                        checked={selectedArchetypes.includes(
                                            archetype.name
                                        )}
                                        onChange={() =>
                                            handleArchetypeChange(
                                                archetype.name
                                            )
                                        }
                                        className="mr-2"
                                    />
                                    {archetype.name}
                                </label>
                            </div>
                        ))}
                    </div>
                </section>
            )}

            {/* Style Selection */}
            {selectedArchetypes.length > 0 && (
                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4">Styles</h2>
                    <div className="grid grid-cols-3 gap-4">
                        {availableStyles.map((style: Style) => (
                            <div
                                key={style.name}
                                className="bg-gray-100 p-4 rounded-lg"
                            >
                                <label className="flex items-center">
                                    <input
                                        type="checkbox"
                                        checked={selectedStyles.includes(
                                            style.name
                                        )}
                                        onChange={() =>
                                            handleStyleChange(style.name)
                                        }
                                        className="mr-2"
                                    />
                                    {style.name}
                                </label>
                            </div>
                        ))}
                    </div>
                </section>
            )}

            {/* Form Selection */}
            {selectedStyles.length > 0 && (
                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4">Form</h2>
                    <div className="grid grid-cols-3 gap-4">
                        {forms.map((form) => (
                            <div
                                key={form.name}
                                className="bg-gray-100 p-4 rounded-lg"
                            >
                                <label className="flex items-center">
                                    <input
                                        type="radio"
                                        checked={selectedForm === form.name}
                                        onChange={() =>
                                            handleFormChange(form.name)
                                        }
                                        className="mr-2"
                                    />
                                    {form.name}
                                </label>
                            </div>
                        ))}
                    </div>
                </section>
            )}

            {/* Combined Stance Information */}
            {selectedForm && (
                <section>
                    <h2 className="text-2xl font-semibold mb-4">Stance</h2>
                    <div className="bg-gray-100 p-4 rounded-lg">
                        <h3 className="text-xl font-medium mb-2">Abilities</h3>
                        <ul className="list-disc list-inside">
                            {combinedAbilities.map((ability, index) => (
                                <li key={index}>{ability}</li>
                            ))}
                        </ul>
                        <h3 className="text-xl font-medium mt-4 mb-2">
                            Actions
                        </h3>
                        <ul className="list-disc list-inside">
                            {combinedActions.map((action, index) => (
                                <li key={index}>
                                    <strong>{action.name}</strong> (
                                    {action.cost}): {action.desc}
                                </li>
                            ))}
                        </ul>
                    </div>
                </section>
            )}
        </div>
    );
}
