import { HeroType } from "./bleed";
import { Ability } from "./types/Ability";

// in the current version, all three hero types have the same bonus die tables
export const bonusDice: Record<number, number> = {
    2: 4,
    3: 4,
    4: 6,
    5: 6,
    6: 8,
    7: 8,
    8: 10,
    9: 10,
    10: 12,
};

export const bonusAbilities: Record<HeroType, Record<number, Ability>> = {
    Focused: {
        3: {
            name: "Improved Focus",
            desc: "Once per Round, after you see the results of any Action Dice you have rolled, you may re-roll up to three of them. You must take the new results, even if they are worse.",
        },
        10: {
            name: "Focused Mastery",
            desc: "After you roll your Action Dice for the turn, select one number in your Action Pool and change it to any number you wish, between 1 and 9.",
        },
    },
    Fused: {
        3: {
            name: "Improved Fusion",
            desc: "Once per Round, after you see the results of your Action Dice, you may either add a 2 to your Action Pool, or increase the value of one number in your Action Pool by 1.",
        },
        10: {
            name: "Fusion Mastery",
            desc: "After you roll your Action Dice for your turn, select one number in your Action Pool with a value of 6 or less, and add a copy of that number to your Action Pool.",
        },
    },
    Frantic: {
        3: {
            name: "Improved Frenzy",
            desc: "Once per Round, after you see the results of your Action Dice, you may change your Style or your Archetype.",
        },
        7: {
            name: "Greater Frenzy",
            desc: "Once per fight, you may choose to use two Frantic Abilities on the same turn.",
        },
        10: {
            name: "Frenzy Mastery",
            desc: "After you roll your Action Dice for your turn, roll the mythical d12 and you may replace one number in your Action Pool with the result.",
        },
    },
};

export const numArchetypes: Record<HeroType, Record<number, number>> = {
    Focused: {
        1: 1,
        2: 1,
        3: 1,
        4: 1,
        5: 2,
        6: 2,
        7: 2,
        8: 2,
        9: 2,
        10: 2,
    },
    Fused: {
        1: 2,
        2: 2,
        3: 2,
        4: 2,
        5: 3,
        6: 3,
        7: 3,
        8: 3,
        9: 4,
        10: 4,
    },
    Frantic: {
        1: 3,
        2: 3,
        3: 4,
        4: 4,
        5: 5,
        6: 5,
        7: 6,
        8: 6,
        9: 7,
        10: 7,
    },
};

export const numStances: Record<"Focused" | "Fused", Record<number, number>> = {
    Focused: {
        1: 3,
        2: 3,
        3: 3,
        4: 4,
        5: 4,
        6: 5,
        7: 5,
        8: 6,
        9: 6,
        10: 6,
    },
    Fused: {
        1: 3,
        2: 3,
        3: 3,
        4: 4,
        5: 4,
        6: 5,
        7: 5,
        8: 6,
        9: 6,
        10: 7,
    },
};

export const numFranticStyles: Record<number, number> = {
    1: 3,
    2: 3,
    3: 3,
    4: 4,
    5: 4,
    6: 4,
    7: 4,
    8: 5,
    9: 5,
    10: 5,
};

export const numFranticForms: Record<number, number> = {
    1: 3,
    2: 4,
    3: 4,
    4: 4,
    5: 4,
    6: 5,
    7: 5,
    8: 5,
    9: 5,
    10: 5,
};
