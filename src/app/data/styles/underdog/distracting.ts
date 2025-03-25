import { Style } from "../../types/Style";

export const distracting: Style = {
    name: "Distracting",
    minRange: 1,
    maxRange: 2,
    abilities: [
        { desc: "After an enemy deals damage to you with an Action, give that enemy 1 Weakness token." },
        { desc: "Your Challenge tokens cannot be discarded by enemy Actions or Abilities." },
    ],
    actions: [
        {
            name: "Flare",
            cost: "1+ or 5+ -or- 3 or 6 Basic Tokens",
            desc: "Move 2, then give 1 Weakness token to an enemy within range.\n5+ -or- 6 Basic Tokens: Give them 2 more Weakness tokens, give them 2 Burning tokens, then Challenge them.",
        },
    ],
};
