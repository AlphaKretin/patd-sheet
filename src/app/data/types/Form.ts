import { Ability } from "./Ability";
import { Action } from "./Action";
import { Skill } from "./Skill";

export interface Form {
    name: string;
    greenDice: number[];
    purpleDice: number[];
    abilities: Ability[];
    actions: Action[];
    skill: Skill;
}
