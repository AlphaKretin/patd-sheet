import { Style } from "../../types/Style";

export const crystal: Style = {
    name: "Crystal",
    minRange: 1,
    maxRange: 2,
    abilities: [
        {
            desc: "After you perform an Action with exactly one target, you deal 1 damage to all enemies adjacent to that target.",
        },
        {
            desc: "The first time each turn one of your Copies is destroyed, you may place a Copy within range of your Original.",
        },
    ],
    actions: [
        {
            name: "Splintered Mirror",
            cost: "3+",
            desc: "Place a Copy into an empty space within range. You may swap spaces with that Copy.",
        },
        {
            name: "Crystal Spike",
            cost: "3+ or 7+",
            desc: "Target one enemy within range. Deal 1 damage to them and give them 1 Weakness token.\n7+: Deal 2 more damage and give 2 more Weakness tokens.",
        },
    ],
};
