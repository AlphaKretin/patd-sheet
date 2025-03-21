import { Freestyle } from "../../types/Style";

export const persistent: Freestyle = {
    bannedForm: "Reversal",
    dice: [8, 4],
    name: "Persistent", // inconsistently typoed as "Persistant" in the PDF,
    minRange: 1,
    maxRange: 1,
    abilities: [
        "At the start of your turn and when you Bleed, add a 3 to your Action Pool.",
        "When you discard numbers from your Action Pool during the End Phase, you may keep up to two of them with a total value of 5 or less.",
    ],
    actions: [
        {
            name: "Strut Your Stuff",
            cost: "3+",
            desc: "Pull yourself 4 towards the active character. Then, if they are an enemy, deal 1 damage to them. If they are an ally, give them 1 Iron token.\nCannot be used on your own turn.",
        },
        {
            name: "Palm Strike",
            cost: "3+",
            desc: "Push 3 and deal 1 damage to an adjacent enemy.",
        },
    ],
};
