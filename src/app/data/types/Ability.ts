type TriggerCategory =
    | "after action"
    | "after dice"
    | "before action"
    | "bleed"
    | "character creation"
    | "end of turn"
    | "start of other turns"
    | "start of your turn";

export interface Ability {
    desc: string;
    trigger?: string;
    triggerCategory: TriggerCategory;
    name?: string;
    bonusDice?: number[];
    bonusMaxRange?: number;
}
