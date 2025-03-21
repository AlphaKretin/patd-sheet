import { Freestyle } from "../../types/Style";

export const feral: Freestyle = {
    bannedForm: "Wild",
    dice: [10, 6],
    name: "Feral",
    minRange: 1,
    maxRange: 1,
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
};
