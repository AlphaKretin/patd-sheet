import { Freestyle } from "../../types/Style";

export const grave: Freestyle = {
    bannedForm: "Control",
    dice: [8, 6],
    name: "Grave",
    minRange: 3,
    maxRange: 3,
    abilities: [
        "After you spend Control tokens, you may Push 1 or Pull 1 to the enemy whose Action you controlled.",
        "At the start of your turn, choose one:\n• Set your Range to 3-6 until your next turn.\n• Set your range to 0-3 until your next turn.",
    ],
    actions: [
        {
            name: "Suppression",
            cost: "3+ or 6+ or 9+",
            desc: "You gain 1 Control token and may Move 1.\n6+: You gain 1 Control token and may Move 1.\n9+: You gain 1 Control token and may Move 1",
        },
    ],
};
