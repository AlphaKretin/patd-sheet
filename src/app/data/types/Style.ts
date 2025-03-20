import { Ability } from "./Ability";
import { Action } from "./Action";

export interface Style {
    name: string;
    minRange: number;
    maxRange: number;
    abilities: Ability[];
    actions: Action[];
}
