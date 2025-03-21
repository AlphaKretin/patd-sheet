import { Style } from "../../types/Style";

export const swift: Style = {
    name: "Swift",
    minRange: 1,
    maxRange: 1,
    abilities: [
        "Before each Reactive Action you perform, you may Move 1.",
        "After each Action you perform, you gain 1 Speed token.",
    ],
    actions: [
        {
            name: "Deadly Dance",
            cost: "2+ or 4+ or 6+ or 8+",
            desc: "Teleport 2, then deal 1 damage to an enemy within range.\n4+: Teleport 2, then deal 1 damage to an enemy within range.\n6+: Teleport 2, then deal 1 damage to an enemy within range.\n8+: Teleport 2, then deal 1 damage to an enemy within range.",
        },
        {
            name: "Swift Strike",
            cost: "2 Basic Tokens",
            desc: "Deal 1 damage to an enemy within range.\nUsable once per turn, only during enemy turns.",
        },
    ],
};
