import { Ability } from "./types/Ability";

export type HeroType = "Focused" | "Fused" | "Frantic";

export const bleedAbilities: Record<HeroType, Ability> = {
    Focused: {
        name: "Focused Bleed",
        desc: "At the start of your turn, if you are Bleeding, then when you roll your Action Dice for this turn, re-roll each die with a value of 2 or less. Keep rolling until none of your dice have a value below 3.\n( For any pre-set numbers, set any 1 and 2 values to 3. )\nUsable once per fight.",
        trigger: "at the start of your turn",
        triggerCategory: "start of your turn",
    },
    Fused: {
        name: "Fused Bleed",
        desc: "At the start of your turn, if you are Bleeding, then you heal, gain 2 Power tokens, gain 2 Iron tokens, gain Shield 2, and may Move 2.\nUsable once per fight.",
        trigger: "at the start of your turn",
        triggerCategory: "start of your turn",
    },
    Frantic: {
        name: "Frantic Bleed",
        desc: "At the start of your turn, if you are Bleeding, then choose one: Add d10 to your Action Dice this turn; -or- add d6 d4 to your Action Dice this turn.\nUsable once per fight.",
        trigger: "at the start of your turn",
        triggerCategory: "start of your turn",
    },
};
