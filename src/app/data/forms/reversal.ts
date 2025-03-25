import { Form } from "../types/Form";

export const reversal: Form = {
    name: "Reversal",
    greenDice: [10],
    purpleDice: [10],
    abilities: [
        { desc: "You have Armor." },
        { desc: "Unblockable by Control Tokens and Iron Tokens." },
        {
            desc: "The first time your Armor triggers each turn, you may Teleport 2. Then, if your Action Pool is empty, add a 3 to your Action Pool.",
        },
    ],
    actions: [
        {
            name: "Palm Strike",
            cost: "3+",
            desc: "Push 3 and deal 1 damage to an adjacent enemy.",
        },
        {
            name: "Deep Breathing",
            cost: "X",
            desc: "Move up to 2. This movement ignores obstacles. At the start of your next turn, add X to your Action Pool.\n Usable once per turn. Unblockable.",
        },
        {
            name: "Rupture",
            cost: "X",
            desc: "An enemy within range gains X Burning Tokens.\nThis can only target the active character.",
        },
    ],
    skill: {
        name: "Perfect Timing",
        desc: "You are always in the right place at the right time. You can perfectly catch or stop anything coming directly at you with a single, well-placed motion.",
    },
};
