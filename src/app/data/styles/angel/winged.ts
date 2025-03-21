import { Style } from "../../types/Style";

export const winged: Style = {
    name: "Winged",
    minRange: 1,
    maxRange: 2,
    abilities: [
        "You do not take Fall Damage.",
        "Rubble does not give you Fatigue tokens",
        "At the end of every turn, you may move 1 space.",
        "After you give an enemy your Challenge token, you may Move 2.",
    ],
    actions: [
        {
            name: "As The Crow Flies",
            cost: "1+ or 4+",
            desc: "Teleport 4.\n4+: Challenge an enemy within range, then Teleport 2.",
        },
    ],
};
