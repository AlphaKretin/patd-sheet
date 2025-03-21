import { Style } from "../../types/Style";

export const unbreakable: Style = {
    name: "Unbreakable",
    minRange: 1,
    maxRange: 2,
    abilities: [
        "Your allies within range may spend your tokens",
        "At the start and end of your turn, give 1 Iron token to each ally within range.",
    ],
    actions: [
        {
            name: "Eyes Open",
            cost: "5+",
            desc: "You gain 4 Iron Tokens and may Move 1.",
        },
        {
            name: "Stay Out Of This",
            cost: "4 Iron Tokens",
            desc: "Give 3 Weakness tokens and Push 3 to an enemy within range.",
        },
    ],
};
