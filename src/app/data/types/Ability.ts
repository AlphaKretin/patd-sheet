type TriggerCategory =
    | "after action"
    | "after dice"
    | "before action"
    | "bleed"
    | "character creation"
    | "end of turn"
    | "start of other turns"
    | "start of your turn"
    | "start of round";

export const triggerSort: Array<undefined | TriggerCategory> = [
    undefined, // passive
    "start of round",
    "bleed",
    "start of your turn",
    "after dice",
    "start of other turns",
    "before action",
    "after action",
    "end of turn",
    "character creation",
];

export interface Ability {
    desc: string;
    trigger?: string;
    triggerCategory?: TriggerCategory;
    name?: string;
    bonusDice?: number[];
    bonusMaxRange?: number;
}
