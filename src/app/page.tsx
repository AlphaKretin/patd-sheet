"use client";

import { useEffect, useState } from "react";
import { archetypes } from "./data/archetypes";
import { bleedAbilities, HeroType } from "./data/bleed";
import { Build, builds } from "./data/builds";
import { forms } from "./data/forms";
import { freestyles } from "./data/freestyles";
import {
    bonusAbilities,
    bonusDice,
    numArchetypes,
    numFranticForms,
    numFranticStyles,
    numStances,
} from "./data/levelbonuses";
import { nullArchetype, nullForm, nullSkill, nullStyle, nullSuper } from "./data/nulls";
import { Ability } from "./data/types/Ability";
import { Action } from "./data/types/Action";
import { Archetype } from "./data/types/Archetype";
import { Form } from "./data/types/Form";
import { Skill } from "./data/types/Skill";
import { Freestyle, Style } from "./data/types/Style";
import { SuperMove } from "./data/types/Super";

const DEFAULT_STANCE_COUNT = 3;

function isNull(o: Archetype | Style | Form | Skill | SuperMove) {
    return o.name === "";
}

function isDefined<T>(arg: T | undefined): arg is T {
    return arg !== undefined;
}

export default function CharacterBuilder() {
    const [characterName, setCharacterName] = useState<string>("");
    const [selectedBuild, setBuild] = useState<Build | null>(null);
    const [heroType, setHeroType] = useState<HeroType | null>(null);
    const [selectedArchetypes, setSelectedArchetypes] = useState<Archetype[]>([nullArchetype]);
    const [selectedStyles, setSelectedStyles] = useState<Style[]>(Array(DEFAULT_STANCE_COUNT).fill(nullStyle));
    const [selectedForms, setSelectedForms] = useState<Form[]>(Array(DEFAULT_STANCE_COUNT).fill(nullForm));
    const [currentStance, setCurrentStance] = useState<{
        archetype: Archetype;
        style: Style;
        form: Form;
        index: number;
    } | null>(null);
    const [franticArchetype, setFranticArchetype] = useState<Archetype>();
    const [franticStyle, setFranticStyle] = useState<Style>();
    const [franticForm, setFranticForm] = useState<Form>();
    const [selectedSkills, setSelectedSkills] = useState<Skill[]>(Array(3).fill(nullSkill));
    const [customSkill, setCustomSkill] = useState<Skill>({
        name: "",
        desc: "",
    });
    const [defaultSkills, setDefaultSkills] = useState<Skill[]>(Array(3).fill(nullSkill));
    const [savedCharacters, setSavedCharacters] = useState<string[]>([]);
    const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);
    const [characterLevel, setCharacterLevel] = useState<number>(1);
    const [superMoves, setSuperMoves] = useState<SuperMove[]>(Array(3).fill(nullSuper));
    const [customSort, setCustomSort] = useState<boolean>(true);

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
        } else {
            setBuild(null);
        }
    };

    // Handle Hero Type selection
    const handleHeroTypeChange = (type: HeroType | null) => {
        setHeroType(type);
        resetArchetypes(type, characterLevel);
    };

    function resetArchetypes(type: HeroType | null, level: number) {
        if (type) {
            setSelectedArchetypes(Array(numArchetypes[type][level]).fill(nullArchetype));
        } else {
            setSelectedArchetypes([nullArchetype]);
        }
        resetStylesForms(type, level);
    }

    function resetStylesForms(type: HeroType | null, level: number) {
        if (type) {
            if (type === "Frantic") {
                setSelectedStyles(Array(numFranticStyles[level]).fill(nullStyle));
                setSelectedForms(Array(numFranticForms[level]).fill(nullForm));
            } else {
                setSelectedStyles(Array(numStances[type][level]).fill(nullStyle));
                setSelectedForms(Array(numStances[type][level]).fill(nullForm));
            }
        } else {
            setSelectedStyles(Array(DEFAULT_STANCE_COUNT).fill(nullStyle));
            setSelectedForms(Array(DEFAULT_STANCE_COUNT).fill(nullForm));
        }
        setCurrentStance(null);
    }

    function handleLevelChange(levelInput: string) {
        let level = Math.max(1, Math.min(10, parseInt(levelInput)));
        if (isNaN(level)) {
            level = 1;
        }
        setCharacterLevel(level);
        resetArchetypes(heroType, level);
    }

    // Handle Archetype selection
    const handleArchetypeChange = (archetype: string, index: number) => {
        const newArchetypes = [...selectedArchetypes];
        const newArchetype = archetypes.find((a) => a.name === archetype);
        if (isDefined(newArchetype)) {
            newArchetypes[index] = newArchetype;
        } else {
            newArchetypes[index] = nullArchetype;
        }
        setSelectedArchetypes(newArchetypes);
        resetStylesForms(heroType, characterLevel);
    };

    // Handle Style selection
    const handleStyleChange = (style: string, index: number) => {
        const newStyles = [...selectedStyles];
        const allStyles = [...archetypes.flatMap((a) => a.styles), ...freestyles];
        const newStyle = allStyles.find((s) => s.name === style);
        if (isDefined(newStyle)) {
            newStyles[index] = newStyle;
        } else {
            newStyles[index] = nullStyle;
        }
        setSelectedStyles(newStyles);
        setCurrentStance(null);
    };

    // Handle Form selection
    const handleFormChange = (form: string, index: number) => {
        const newForms = [...selectedForms];
        const newForm = forms.find((a) => a.name === form);
        if (isDefined(newForm)) {
            newForms[index] = newForm;
        } else {
            newForms[index] = nullForm;
        }
        setSelectedForms(newForms);
        setCurrentStance(null);
    };

    // Handle Stance selection
    const handleStanceSelection = (index: number) => {
        setCurrentStance({
            archetype: selectedArchetypes[index], // unused but for Frantic
            style: selectedStyles[index],
            form: selectedForms[index],
            index,
        });
    };

    const handleFranticArchetypeSelection = (archetype: string) => {
        const newArchetype = archetypes.find((a) => a.name === archetype);
        if (isDefined(newArchetype)) {
            setFranticArchetype(newArchetype);
            if (franticStyle && franticForm) {
                setCurrentStance({
                    archetype: newArchetype,
                    style: franticStyle,
                    form: franticForm,
                    index: -1,
                });
            }
        } else {
            setFranticArchetype(undefined);
        }
    };

    const handleFranticStyleSelection = (style: string) => {
        const allStyles = [...archetypes.flatMap((a) => a.styles), ...freestyles];
        const newStyle = allStyles.find((s) => s.name === style);
        if (isDefined(newStyle)) {
            setFranticStyle(newStyle);
            if (franticArchetype && franticForm) {
                setCurrentStance({
                    archetype: franticArchetype,
                    style: newStyle,
                    form: franticForm,
                    index: -1,
                });
            }
        } else {
            setFranticStyle(undefined);
        }
    };

    const handleFranticFormSelection = (form: string) => {
        const newForm = forms.find((f) => f.name === form);
        if (isDefined(newForm)) {
            setFranticForm(newForm);
            if (franticArchetype && franticStyle) {
                setCurrentStance({
                    archetype: franticArchetype,
                    style: franticStyle,
                    form: newForm,
                    index: -1,
                });
            }
        } else {
            setFranticForm(undefined);
        }
    };

    const handleSkillChange = (skill: string, index: number) => {
        const newSkills = [...selectedSkills];
        const newSkill = forms.map((f) => f.skill).find((s) => s.name === skill);
        if (isDefined(newSkill)) {
            newSkills[index] = newSkill;
        } else {
            newSkills[index] = nullSkill;
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
            characterLevel,
            superMoves,
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
                characterLevel,
                superMoves,
            } = JSON.parse(characterData);
            if (name) setCharacterName(name);
            if (selectedBuild) setBuild(selectedBuild);
            if (heroType) setHeroType(heroType);
            if (selectedArchetypes) setSelectedArchetypes(selectedArchetypes);
            if (selectedStyles) setSelectedStyles(selectedStyles);
            if (selectedForms) setSelectedForms(selectedForms);
            if (currentStance) setCurrentStance(currentStance);
            if (franticArchetype) setFranticArchetype(franticArchetype);
            if (franticStyle) setFranticStyle(franticStyle);
            if (franticForm) setFranticForm(franticForm);
            if (selectedSkills) setSelectedSkills(selectedSkills);
            if (customSkill) setCustomSkill(customSkill);
            if (characterLevel) setCharacterLevel(characterLevel);
            if (superMoves) setSuperMoves(superMoves);
        } else {
            alert("No saved data found for this character.");
        }
    };

    // Remove duplicate archetypes from dropdowns, unless in same dropdown where it's selected
    function availableArchetypes(i: number) {
        return archetypes.filter((a) => {
            // null entires can appear in duplicate, we don't want them messing things up
            if (isNull(a)) {
                return true;
            }
            // if archetype is currently selected in *this* box, allow it
            if (selectedArchetypes[i] && selectedArchetypes[i].name === a.name) {
                return true;
            }
            // if archetype is currently selected in another box, disallow it
            if (selectedArchetypes.some((ar) => ar && ar.name === a.name)) {
                return false;
            }
            return true;
        });
    }

    // Get available Styles based on selected Archetypes
    function availableStyles(i: number) {
        let aStyles = [
            ...selectedArchetypes.filter((a) => !isNull(a)).flatMap((archetype) => archetype.styles),
            ...freestyles.filter((freestyle) => !selectedForms.some((form) => form.name === freestyle.bannedForm)),
        ];
        aStyles = aStyles.filter((s) => {
            // null entires can appear in duplicate, we don't want them messing things up
            if (isNull(s)) {
                return true;
            }
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
            // null entires can appear in duplicate, we don't want them messing things up
            if (isNull(f)) {
                return true;
            }
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
            // null entires can appear in duplicate, we don't want them messing things up
            if (isNull(f)) {
                return true;
            }
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

    function getArchetypeAbilities(): Ability[] {
        if (selectedArchetypes.length === 0) {
            return [];
        }
        const aAbilities: Ability[] = [];
        if (heroType === "Frantic") {
            if (currentStance) {
                aAbilities.push(...currentStance.archetype.franticAbilities);
            }
            if (4 in selectedArchetypes) {
                aAbilities.push(...selectedArchetypes[4].fusedAbilities);
            }
            if (6 in selectedArchetypes) {
                aAbilities.push(...selectedArchetypes[6].fusedAbilities);
            }
        }
        if (heroType === "Focused") {
            aAbilities.push(...selectedArchetypes[0].focusedAbilities);
            if (1 in selectedArchetypes) {
                if (characterLevel < 9) {
                    aAbilities.push(...selectedArchetypes[1].fusedAbilities);
                } else {
                    aAbilities.push(...selectedArchetypes[1].focusedAbilities);
                }
            }
        }
        if (heroType === "Fused") {
            if (characterLevel > 6) {
                aAbilities.push(...selectedArchetypes[0].focusedAbilities);
                aAbilities.push(...selectedArchetypes.slice(1).flatMap((a) => a.fusedAbilities));
            } else {
                aAbilities.push(...selectedArchetypes.flatMap((a) => a.fusedAbilities));
            }
        }
        return aAbilities;
    }

    const archetypeAbilities = getArchetypeAbilities();

    const levelAbilities = heroType
        ? Object.entries(bonusAbilities[heroType])
              .filter((pair) => characterLevel >= parseInt(pair[0]))
              .map((pair) => pair[1])
        : [];

    // Combine Abilities and Actions for the selected Stance
    const combinedAbilities = [
        ...(heroType ? [bleedAbilities[heroType]] : []),
        ...(levelAbilities ? levelAbilities : []),
        ...(selectedBuild ? selectedBuild.abilities : []),
        ...archetypeAbilities,
        ...(currentStance ? [...currentStance.form.abilities] : []),
        ...(currentStance ? [...currentStance.style.abilities] : []),
    ];

    // if user enables, sort by text to put triggers near each other
    // otherwise, will remain in its order, based on the source of the ability
    if (customSort) {
        combinedAbilities.sort();
    }

    const archetypeActions =
        heroType === "Frantic"
            ? currentStance?.archetype.actions || []
            : selectedArchetypes.flatMap((archetype) => archetype.actions);

    const superMoveActions: Action[] = superMoves
        .filter((s) => !isNull(s))
        .map((s) => {
            const alphaSupers = archetypes.map((a) => a.alphaSuper.name);
            let cost = "";
            if (alphaSupers.includes(s.name)) {
                cost = "Alpha Super";
            } else {
                cost = "Delta Super";
            }
            return {
                name: s.name,
                cost,
                desc: s.desc,
            };
        });

    const combinedActions = [
        ...archetypeActions,
        ...(currentStance ? [...currentStance.style.actions, ...currentStance.form.actions] : []),
        ...superMoveActions,
    ].sort((a, b) => {
        if (customSort) {
            if (a.cost < b.cost) return -1;
            if (a.cost > b.cost) return 1;
        }
        return 0;
    });

    function isFreestyle(style: Style): style is Freestyle {
        return style && "bannedForm" in style;
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

    const handleSuperMoveChange = (move: string, index: number) => {
        const newSuperMoves = [...superMoves];
        const newMove = archetypes.flatMap((a) => [a.alphaSuper, a.deltaSuper]).find((m) => m.name === move);
        if (isDefined(newMove)) {
            newSuperMoves[index] = newMove;
        }
        setSuperMoves(newSuperMoves);
    };

    function archetypeHeader(heroType: HeroType, index: number): string {
        if (heroType === "Focused") {
            if (index === 0) {
                return "Focused Archetype";
            }
            // second archetype
            if (characterLevel < 9) {
                return "Fused Archetype";
            }
            return "Improved Fused Archetype";
        }
        if (heroType === "Fused") {
            if (characterLevel > 6 && index == 0) {
                return "Greater Fused Archetype";
            }
            return `Fused Archetype ${index + 1}`;
        }
        // Frantic
        if (index < 3) {
            return `Frantic Ability ${index + 1}`;
        }
        if (index === 3) {
            return "Improved Frenzy Ability";
        }
        if (index === 4) {
            return "Fused Archetype 1";
        }
        if (index === 5) {
            return "Greater Frenzy Ability";
        }
        return `Fused Archetype 2`;
    }

    const handleSortToggle = () => {
        setCustomSort(!customSort);
    };

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
                    To ensure data doesn not get into an invalid state, editing any selections further up the page will
                    reset everything below. Please try to build your character top down to avoid this inconvenience.
                    Apologies, I am hoping to find a better solution in the future.
                </p>
                <br />
                <p className="text-white">
                    This app is a work in progress. See future features, leave feedback, and contribute at{" "}
                    <a href="https://github.com/AlphaKretin/patd-sheet">https://github.com/AlphaKretin/patd-sheet</a>
                </p>
            </div>

            <h1 className="text-3xl font-bold mb-6">Panic At The Dojo 2e Digital Character Sheet</h1>

            {/* Character Name and Level Input */}
            <section className="card">
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
                        onChange={(e) => handleLevelChange(e.target.value)}
                        className="w-1/4 p-2 border rounded bg-gray-800 text-white"
                        placeholder="Level"
                        min="1"
                        max="10"
                    />
                </div>
            </section>

            {/* Save and Load Buttons */}
            <section className="card">
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
            <section className="card">
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
            <section className="card">
                <h2 className="text-2xl font-semibold mb-4">Hero Type</h2>
                <select
                    value={heroType || ""}
                    onChange={(e) => handleHeroTypeChange(e.target.value as HeroType)}
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
                <section className="card">
                    <h2 className="text-2xl font-semibold mb-4">Archetypes</h2>
                    <div className="grid grid-cols-1 gap-4">
                        {Array.from({
                            length: numArchetypes[heroType][characterLevel],
                        }).map((_, index) => (
                            <div key={index} className="p-4 rounded-lg">
                                <label className="block text-sm font-medium mb-2">
                                    {archetypeHeader(heroType, index)}
                                </label>
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
            {heroType && selectedArchetypes.filter((a) => !isNull(a)).length > 0 && (
                <section className="card">
                    <h2 className="text-2xl font-semibold mb-4">Styles and Forms</h2>
                    {heroType === "Frantic" ? (
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <h3 className="text-xl font-medium mb-2">Styles</h3>
                                {Array.from({ length: numFranticStyles[characterLevel] }).map((_, index) => (
                                    <div key={index} className="mb-6">
                                        <label className="block text-sm font-medium mb-2">Style {index + 1}</label>
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
                                ))}
                            </div>
                            <div>
                                <h3 className="text-xl font-medium mb-2">Forms</h3>
                                {Array.from({ length: numFranticForms[characterLevel] }).map((_, index) => (
                                    <div key={index} className="mb-6">
                                        <label className="block text-sm font-medium mb-2">Form {index + 1}</label>
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
                                ))}
                            </div>
                        </div>
                    ) : (
                        Array.from({ length: numStances[heroType][characterLevel] }).map((_, index) => (
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
                        ))
                    )}
                </section>
            )}

            {/* Stance Selection Dropdown */}
            {heroType && selectedArchetypes.filter((a) => !isNull(a)).length > 0 && (
                <section className="card">
                    <label className="block text-sm font-medium mb-2">Select Stance to View</label>
                    {heroType === "Frantic" ? (
                        <div className="grid grid-cols-3 gap-4">
                            <select
                                value={franticArchetype?.name || ""}
                                onChange={(e) => handleFranticArchetypeSelection(e.target.value)}
                                className="w-full p-2 border rounded bg-gray-800 text-white"
                            >
                                <option value="">Select Archetype</option>
                                {selectedArchetypes
                                    .filter((a, i) => !isNull(a) && ![4, 6].includes(i)) // cannot use Fused archetypes for Frantic ability
                                    .map(
                                        (archetype) =>
                                            archetype && (
                                                <option key={archetype.name} value={archetype.name}>
                                                    {archetype.name}
                                                </option>
                                            )
                                    )}
                            </select>
                            <select
                                value={franticStyle?.name || ""}
                                onChange={(e) => handleFranticStyleSelection(e.target.value)}
                                className="w-full p-2 border rounded bg-gray-800 text-white"
                            >
                                <option value="">Select Style</option>
                                {selectedStyles
                                    .filter((a) => !isNull(a))
                                    .map(
                                        (style) =>
                                            style && (
                                                <option key={style.name} value={style.name}>
                                                    {style.name}
                                                </option>
                                            )
                                    )}
                            </select>
                            <select
                                value={franticForm?.name || ""}
                                onChange={(e) => handleFranticFormSelection(e.target.value)}
                                className="w-full p-2 border rounded bg-gray-800 text-white"
                            >
                                <option value="">Select Form</option>
                                {selectedForms
                                    .filter((a) => !isNull(a))
                                    .map(
                                        (form) =>
                                            form && (
                                                <option key={form.name} value={form.name}>
                                                    {form.name}
                                                </option>
                                            )
                                    )}
                            </select>
                        </div>
                    ) : (
                        <select
                            value={currentStance?.index}
                            onChange={(e) => handleStanceSelection(parseInt(e.target.value))}
                            className="w-full p-2 border rounded bg-gray-800 text-white"
                        >
                            <option value="">Select Stance</option>
                            {selectedStyles.map(
                                (style, index) =>
                                    !isNull(style) &&
                                    !isNull(selectedForms[index]) && (
                                        <option key={index} value={index}>
                                            {selectedStyles[index].name} {selectedForms[index].name}
                                        </option>
                                    )
                            )}
                        </select>
                    )}
                    <label className="block text-sm font-medium mb-2">
                        <input type="checkbox" checked={customSort} onChange={handleSortToggle} className="mr-2" />
                        Custom Sorting
                    </label>
                </section>
            )}

            {/* Super Move Selection */}
            {characterLevel >= 2 && (
                <section className="card">
                    <h2 className="text-2xl font-semibold mb-4">Super Moves</h2>
                    <div className="grid grid-cols-1 gap-4">
                        {Array.from({ length: characterLevel >= 6 ? 2 : 1 }).map((_, index) => (
                            <div key={index} className="p-4 rounded-lg">
                                <label className="block text-sm font-medium mb-2">Super Move {index + 1}</label>
                                <select
                                    value={superMoves[index].name || ""}
                                    onChange={(e) => handleSuperMoveChange(e.target.value, index)}
                                    className="w-full p-2 border rounded bg-gray-800 text-white"
                                >
                                    <option value="">Select Super Move</option>
                                    {selectedArchetypes
                                        .filter((a) => !isNull(a))
                                        .flatMap((archetype) =>
                                            [archetype.alphaSuper, archetype.deltaSuper].map((move) => (
                                                <option key={move.name} value={move.name}>
                                                    {move.name}
                                                </option>
                                            ))
                                        )}
                                </select>
                            </div>
                        ))}
                    </div>
                </section>
            )}

            {/* Combined Stance Information */}
            {currentStance && (
                <section className="card">
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
                            {combinedActions
                                .sort((a, b) => {
                                    if (customSort) {
                                        if (a.cost < b.cost) return -1;
                                        if (a.cost > b.cost) return 1;
                                    }
                                    return 0;
                                })
                                .map((action, index) => (
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
                <section className="card">
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
