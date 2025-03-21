import { Form } from "../types/Form";

export const wild: Form = {
    name: "Wild",
    greenDice: [10, 6],
    purpleDice: [10, 6],
    abilities: [
        "After each Action you perform, if you are not Bleeding, you pay 1 HP.",
        "At the start of your turn, you gain 2 Power tokens.",
        "When you Bleed, add a 4 to your Action Pool.",
    ],
    actions: [
        {
            name: "Pounce",
            cost: "Free",
            desc: "Pull yourself 3 towards an enemy you can see.\nUsable once per turn.",
        },
        {
            name: "Howl",
            cost: "4+",
            desc: "Gain 1 Power token, then heal 4, then give 1 Weakness token to each enemy you can see.\nUsable once per turn.",
        },
    ],
    skill: {
        name: "Wind Runner",
        desc: "You can leap to anywhere you can see, run along walls, run as fast as a car, and, if you have an explanation, fly",
    },
};
