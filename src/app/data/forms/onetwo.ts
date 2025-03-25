import { Form } from "../types/Form";

export const onetwo: Form = {
    name: "One-Two",
    greenDice: [6, 4],
    purpleDice: [6, 4],
    abilities: [
        { desc: "Before each Action you perform, you may Move 1." },
        { desc: "After your first Action on your turn, Move 1, then deal 2 damage to an enemy within range." },
        {
            desc: "At the end of each turn where you performed any Actions, you may deal 1 damage to an enemy within range, then Move 2.",
        },
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
            desc: "Deal 1 damage to an enemy within range, then deal 2 damage to a different enemy within range.",
        },
    ],
    skill: {
        name: "Think Fast",
        desc: "You can come up with plans and act on them in an instant. You never lose in games of skill, and you can fast talk anyone into seeing things your way.",
    },
};
