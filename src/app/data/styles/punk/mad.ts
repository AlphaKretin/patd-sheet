import { Style } from "../../types/Style";

export const mad: Style = {
    name: "Mad",
    minRange: 1,
    maxRange: 2,
    abilities: [
        {
            desc: "At the start of your turn, choose a Weapon: Club, Knife, or Pistol. You have the chosen Weapon’s effect until your next turn.\nClub: After each damage-dealing Action you perform, give each enemy dealt damage by that Action one Fatigue token.\nKnife: Your Actions and Abilities are Unblockable by Armor and Tokens.\nPistol: You have +3 maximum Range.",
        },
    ],
    actions: [
        {
            name: "Weapon Throw",
            cost: "2+",
            desc: "Deal 1 damage and give 1 Burning Token to an enemy you can see, then Disable your current Weapon until your next turn and choose a new one to take effect.",
        },
        {
            name: "Slice & Smash",
            cost: "2+ or 5+ or 8+ or 11+",
            desc: "Deal 1 damage to up to 2 enemies within range.\n5+: Deal 2 damage and Push 1 instead.\n8+: Deal 3 damage and Push 2 instead.\n11+: Deal 4 damage and Push 3 instead.",
        },
    ],
};
