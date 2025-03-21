import { Style } from "../../types/Style";

export const weightless: Style = {
    name: "Weightless",
    minRange: 0,
    maxRange: 1,
    abilities: [
        "You do not take Fall Damage.",
        "Rubble does not give you Fatigue.",
        "All spaces are Empty spaces to you. You can move into and share a space with Copies, Walls, and other units.",
        "All spaces cost 1 Speed token to enter using Free Movement. Ignore all additional Speed token costs, from leaving Pits or moving diagonally or any other source.",
    ],
    actions: [
        {
            name: "Effortless",
            cost: "3+ or 6+",
            desc: "Teleport to an empty space you can see.\n6+: Choose an ally within range. They may teleport to an empty space they can see.",
        },
    ],
};
