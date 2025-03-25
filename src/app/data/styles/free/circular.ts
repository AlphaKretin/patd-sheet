import { Freestyle } from "../../types/Style";

export const circular: Freestyle = {
    bannedForm: "Dance",
    dice: [10, 6],
    name: "Circular",
    minRange: 1,
    maxRange: 1,
    abilities: [
        { desc: "After you take damage, pay HP, or are healed, you gain 1 Speed token." },
        { desc: "When you Bleed, gain 3 Speed tokens." },
        {
            desc: "After each Dice Action you perform, if it applied Forced Movement to an enemy, they must discard 1 Basic token, if they have any. If it applied Forced Movement to an ally, they heal 1. If it moved, swapped, or teleported you, you heal 1.",
        },
    ],
    actions: [
        {
            name: "Dance Together",
            cost: "3 Speed Tokens",
            desc: "Choose someone within range. Pull them 1, then you Move 1, then you Pull them 1 more.\nUsable once per turn.",
        },
        {
            name: "Tango",
            cost: "3+ or 6+ or 10+",
            desc: "Swap space with an adjacent enemy, then Push them 1.\n6+: Pull then 2, then deal 2 damage to them.\n10+: Push them 4, then deal 3 damage to them.",
        },
        {
            name: "Dance Apart",
            cost: "4+ or 7+",
            desc: "Push 3 to someone within range, then Move 1\n7+: Move 2 more, then heal.",
        },
    ],
};
