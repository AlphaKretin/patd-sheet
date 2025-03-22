import { heroType } from "./bleed";
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

export const bonusAbilities: Record<heroType, Record<number, Ability>> = {
    Focused: {
        3: "Once per Round, after you see the results of any Action Dice you have rolled, you may re-roll up to three of them. You must take the new results, even if they are worse.",
        10: "After you roll your Action Dice for the turn, select one number in your Action Pool and change it to any number you wish, between 1 and 9.",
    },
    Fused: {
        3: "Once per Round, after you see the results of your Action Dice, you may either add a 2 to your Action Pool, or increase the value of one number in your Action Pool by 1.",
        10: "After you roll your Action Dice for your turn, select one number in your Action Pool with a value of 6 or less, and add a copy of that number to your Action Pool.",
    },
    Frantic: {
        3: "Once per Round, after you see the results of your Action Dice, you may change your Style or your Archetype.",
        7: "Once per fight, you may choose to use two Frantic Abilities on the same turn.",
        10: "After you roll your Action Dice for your turn, roll the mythical d12 and you may replace one number in your Action Pool with the result.",
    },
};
