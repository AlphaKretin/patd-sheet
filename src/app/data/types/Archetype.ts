import { Ability } from "./Ability";
import { Action } from "./Action";
import { Style } from "./Style";

export interface Archetype {
    name: string;
    focusedAbilities: Ability[];
    fusedAbilities: Ability[];
    franticAbilities: Ability[];
    actions: Action[];
    styles: Style[];
}
