import { Style } from "../../types/Style";

export const spirit: Style = {
    name: "Spirit",
    minRange: 1,
    maxRange: 3,
    abilities: [
        "You and your Copies do not take damage from Pits or Traps.",
        "You and your Copies treat Walls as if they were Rubble.",
        "After each space of Free Movement you do, any number of your Copies may Move 1.",
    ],
    actions: [
        {
            name: "Now You See Me...",
            cost: "1+ or 3+ or 5+ or 7+",
            desc: "Place a Copy into an empty space within range.\n3+: Place a Copy into an empty space within range.\n5+: Place a Copy into an empty space within range.\n7+: Each of your Copies may Move up to 3.",
        },
        {
            name: "...Now You Don't",
            cost: "Free",
            desc: "Swap spaces with one of your Copies.\nUsable once per turn.",
        },
    ],
};
