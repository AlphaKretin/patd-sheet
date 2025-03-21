import { Ability } from "./Ability";
import { Action } from "./Action";
import { Style } from "./Style";
import { SuperMove } from "./Super";

export interface Archetype {
    name: string;
    focusedAbilities: Ability[];
    fusedAbilities: Ability[];
    franticAbilities: Ability[];
    actions: Action[];
    styles: Style[];
    alphaSuper: SuperMove;
    deltaSuper: SuperMove;
}
