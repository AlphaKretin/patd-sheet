import { Style } from "../../types/Style";

export const patient: Style = {
    name: "Patient",
    minRange: 1,
    maxRange: 1,
    abilities: [
        "You have Armor.",
        "At the end of each allied turn, you gain 1 Iron token.",
        "After you use Armor or Iron tokens to reduce the damage you would take, one ally you can see other than yourself may heal 1.",
    ],
    actions: [
        {
            name: "Take Your Time",
            cost: "5+",
            desc: "You gain 2 Iron tokens and 1 Mentor Token. Other Actions cannot be used to perform Take Your Time.",
        },
    ],
};
