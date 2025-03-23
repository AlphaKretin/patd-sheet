import { Archetype } from "./types/Archetype";
import { Form } from "./types/Form";
import { Skill } from "./types/Skill";
import { Style } from "./types/Style";
import { SuperMove } from "./types/Super";

export const nullSuper: SuperMove = {
    name: "",
    desc: "",
};

export const nullArchetype: Archetype = {
    name: "",
    focusedAbilities: [],
    fusedAbilities: [],
    franticAbilities: [],
    actions: [],
    styles: [],
    alphaSuper: nullSuper,
    deltaSuper: nullSuper,
};

export const nullStyle: Style = {
    name: "",
    minRange: 0,
    maxRange: 0,
    abilities: [],
    actions: [],
};

export const nullSkill: Skill = {
    name: "",
    desc: "",
};

export const nullForm: Form = {
    name: "",
    greenDice: [],
    purpleDice: [],
    abilities: [],
    actions: [],
    skill: nullSkill,
};
