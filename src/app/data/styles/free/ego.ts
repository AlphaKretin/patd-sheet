import { Freestyle } from "../../types/Style";

export const ego: Freestyle = {
    bannedForm: "Power",
    dice: [8, 8],
    name: "Ego",
    minRange: 1,
    maxRange: 1,
    abilities: [
        "Once per turn, when an enemy you can see gains Basic tokens, you gain 1 Power token.",
        "You can Enhance a Hit one additional time.",
    ],
    actions: [
        {
            name: "Confident Smirk",
            cost: "1+",
            desc: "Unblockable.\nGain 1 Power token and heal 1.",
        },
        {
            name: "Burning Fist",
            cost: "5+",
            desc: "Deal 2 damage to an enemy within range, then give them Burning Tokens equal to the damage dealt to them by Burning Fist.",
        },
    ],
};
