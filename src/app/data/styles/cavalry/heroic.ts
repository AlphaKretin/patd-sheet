import { Style } from "../../types/Style";

export const heroic: Style = {
    name: "Heroic",
    minRange: 1,
    maxRange: 2,
    abilities: [
        "At the start of your turn, you heal 1.",
        "Whenever an ally within range takes damage, they take half that damage (rounded down) and you take the other half (rounded up).",
    ],
    actions: [
        {
            name: "Burning Heart",
            cost: "3 HP",
            desc: "Each ally within range gains 2 Iron tokens and 2 Power tokens.\nUsable once per turn, only while you hold no Power tokens.",
        },
        {
            name: "Hero's Moment",
            cost: "7+",
            desc: "Deal 4 damage to an adjacent enemy and Push them X. X is equal to 2, or to half the damage on your current health bar, rounded up, whichever is higher.",
        },
    ],
};
