import { Style } from "../../types/Style";

export const phoenix: Style = {
    name: "Phoenix",
    minRange: 1,
    maxRange: 1,
    abilities: [
        "At the start of your turn, you gain Shield 2, then if you are Bleeding, you heal.",
        "When you Bleed, you heal and gain Shield 3.",
        "You do not take damage from Burning Tokens.",
    ],
    actions: [
        {
            name: "Cleansing Fire",
            cost: "4+",
            desc: "Choose two: Give 2 Burning tokens to an enemy within range; -or- heal an ally within range; -or- discard up to 3 status tokens from an ally within range.\nUsable once per turn.",
        },
        {
            name: "Firebird's Flight",
            cost: "4+",
            desc: "Teleport 3, then give 2 Burning tokens to all adjacent enemies.",
        },
    ],
};
