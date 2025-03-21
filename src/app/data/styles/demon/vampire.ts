import { Style } from "../../types/Style";

export const vampire: Style = {
    name: "Vampire",
    minRange: 1,
    maxRange: 1,
    abilities: [
        "After you deal damage with an Action or Ability, you heal 1. This Ability cannot heal you more than the Bleed Value in a single turn.",
        "After you give Weakness tokens to an enemy, you gain 1 Power token, to a maximum of 4 Power tokens per turn.",
    ],
    actions: [
        {
            name: "Life Steal",
            cost: "4+",
            desc: "Deal 2 damage and give 1 Weakness token to an enemy within range.",
        },
        {
            name: "Hypnotic Gaze",
            cost: "4+",
            desc: "Target an enemy you can see. Pull them up to 4, then if they are now within your range, give them 2 Weakness tokens.",
        },
    ],
};
