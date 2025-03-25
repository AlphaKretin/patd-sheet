import { Style } from "../../types/Style";

export const crying: Style = {
    name: "Crying",
    minRange: 1,
    maxRange: 4,
    abilities: [
        { desc: "At the start of your turn, give 1 Weakness token to all enemies within range." },
        { desc: "At the end of your turn, Challenge an enemy within range and give them 1 Weakness token." },
        {
            desc: "If an enemy discards your Challenge token using an enemy Action or Ability, the enemy who held it gains 3 Burning tokens.",
        },
    ],
    actions: [
        {
            name: "Banshee's Wail",
            cost: "6+",
            desc: "All enemies within range gain 1 Weakness token and take 2 damage. All Traps, Pits, and Walls within range become Rubble.",
        },
    ],
};
