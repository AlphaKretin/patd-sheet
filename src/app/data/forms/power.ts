import { Form } from "../types/Form";

export const power: Form = {
    name: "Power",
    greenDice: [10],
    purpleDice: [10, 4],
    abilities: [
        { desc: "When you gain Speed tokens, replace half of them (rounded down) with Power tokens." },
        { desc: "You can Enhance a Hit two additional times." },
    ],
    actions: [
        {
            name: "Yell",
            cost: "X",
            desc: "You gain Power tokens equal to half of X (rounded up), then you gain a Shield with a value equal to half of X (rounded down)",
        },
        {
            name: "Crush",
            cost: "6+ or 9+",
            desc: "Unblockable by Abilities and Tokens.\nDeal 3 damage to an enemy within range.\n9+: Deal 5 damage instead, and Crush is Unblockable.",
        },
    ],
    skill: {
        name: "Unstoppable",
        desc: "You can smash through any door, wall or vehicle.",
    },
};
