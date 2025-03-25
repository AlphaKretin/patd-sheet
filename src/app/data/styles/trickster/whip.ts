import { Style } from "../../types/Style";

export const whip: Style = {
    name: "Whip",
    minRange: 2,
    maxRange: 5,
    abilities: [
        { desc: "Your Throw Actions may target within range." },
        { desc: "After you Throw or Grapple an enemy, you deal 2 damage to them." },
    ],
    actions: [
        {
            name: "Grapple Hook",
            cost: "5+ or 4 Basic Tokens",
            desc: "Choose one or both: An ally within range teleports to an empty space within your range of their choice; -and/or- you teleport to an empty space within range.",
        },
    ],
};
