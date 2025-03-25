import { Style } from "../../types/Style";

export const overwhelming: Style = {
    name: "Overwhelming",
    minRange: 1,
    maxRange: 1,
    abilities: [
        { desc: "Your Actions and Abilities are Unblockable by Armor." },
        { desc: "At the start of your turn, you gain 2 Power tokens." },
        {
            desc: "After an enemy deals damage to you with an Action, you may spend a Power token to deal 1 damage and Push 1 to your attacker.",
        },
    ],
    actions: [
        {
            name: "Power Strike",
            cost: "4+ or 8+",
            desc: "Deal 2 damage to an enemy within range, then you gain 2 Power tokens.\n8+: Deal 4 damage and gain 4 Power tokens instead.",
        },
    ],
};
