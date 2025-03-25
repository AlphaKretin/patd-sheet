import { Style } from "../../types/Style";

export const relentless: Style = {
    name: "Relentless",
    minRange: 1,
    maxRange: 1,
    abilities: [
        { desc: "Enemies holding your Challenge are within your range." },
        { desc: "After you deal damage, Push 1." },
    ],
    actions: [
        {
            name: "Hey.",
            cost: "Free",
            desc: "Challenge an enemy within range.\nUsable once per turn.",
        },
        {
            name: "Nothing Personal",
            cost: "Your Challenge Token",
            desc: "Nothing Personal targets the enemy who held the Challenge Token you spent to pay for Nothing Personal. Teleport to an empty space adjacent to that target, then deal 1 damage to them.\nUsable once per turn.",
        },
    ],
};
