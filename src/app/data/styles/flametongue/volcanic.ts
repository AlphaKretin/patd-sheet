import { Style } from "../../types/Style";

export const volcanic: Style = {
    name: "Volcanic",
    minRange: 1,
    maxRange: 3,
    abilities: [
        "At the start and end of your turn, you may place a Trap into a space within range.",
        "After an enemy within range takes damage from a Trap, give that enemy 1 Burning token.",
        "You do not take damage from Traps.",
    ],
    actions: [
        {
            name: "Lava Walk",
            cost: "1 Speed Token",
            desc: "Move 1, then place a Trap into the space you left.\nUsable twice per turn.",
        },
        {
            name: "Pyroclasm",
            cost: "3+",
            desc: "Place 3 Traps into spaces within range.",
        },
    ],
};
