import { Form } from "../types/Form";

export const control: Form = {
    name: "Control",
    greenDice: [10, 4],
    purpleDice: [8, 6],
    abilities: [
        { desc: "After you spend Control tokens, you may Push 1 or Pull 1 to the enemy whose Action you controlled." },
        {
            desc: "When you add Control Form to a Style, choose one:\n• Increase that Style's maximum range by 3.\n• Set that Style's minimum range to 0.",
        },
    ],
    actions: [
        {
            name: "Suppression",
            cost: "3+ or 6+ or 9+",
            desc: "You gain 1 Control token and may Move 1.\n6+: You gain 1 Control token and may Move 1.\n9+: You gain 1 Control token and may Move 1",
        },
    ],
    skill: {
        name: "Professional",
        desc: "You always look stylish, cool, and in control. People listen when you make demands of them, and you have some lackeys or followers who will do what you say.",
    },
};
