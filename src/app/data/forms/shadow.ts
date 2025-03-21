import { Form } from "../types/Form";

export const shadow: Form = {
    name: "Shadow",
    greenDice: [4, 4, 4],
    purpleDice: [4, 4, 4],
    abilities: [
        "At the start and end of your turn, you gain 2 Speed tokens.",
        "At the start of each Movement Phase, you may Move 1.",
        "You do not discard any Speed tokens during the End Phase.",
    ],
    actions: [
        {
            name: "Stunt",
            cost: "3 Speed Tokens",
            desc: "Place one Fog, Copy, Pit or Trap obstacle into an adjacent space, then teleport 2.\nDuring enemy turns: usable once per turn.",
        },
    ],
    skill: {
        name: "Shadow Walker",
        desc: "If you don't want to draw attention to yourself, no one will ever notice you sneaking around, even in plain sight.",
    },
};
