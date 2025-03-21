import { Freestyle } from "../../types/Style";

export const chaotic: Freestyle = {
    bannedForm: "One-Two",
    dice: [6, 4],
    name: "Chaotic",
    minRange: 1,
    maxRange: 1,
    abilities: [
        "Before each Action you perform, you may Move 1.",
        "After your first Action on your turn, Move 1, then deal 2 damage to an enemy within range.",
        "At the end of each turn where you performed any Actions, you may deal 1 damage to an enemy within range, then Move 2.",
    ],
    actions: [
        {
            name: "Slide In",
            cost: "1+ or 4+",
            desc: "Teleport 2.\n4+: Teleport 2 more, then you may deal 1 damage to an enemy within range.",
        },
        {
            name: "Left, Right!",
            cost: "4+",
            desc: "Deal 1 damage to an enemy within range, then you may Move 1, then you deal 2 more damage to that enemy.",
        },
    ],
};
