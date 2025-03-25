import { Style } from "../../types/Style";

export const knockdown: Style = {
    name: "Knockdown",
    minRange: 1,
    maxRange: 1,
    abilities: [
        {
            desc: "After you take damage from an Action, you deal 1 damage to each enemy that dealt damage to you. If that enemy holds your Challenge, you deal 2 damage to them instead.",
        },
    ],
    actions: [
        {
            name: "Slugfest",
            cost: "Free",
            desc: "Move 1, then Challenge an enemy within range, then they deal 1 damage to you.\nUsable once per turn",
        },
    ],
};
