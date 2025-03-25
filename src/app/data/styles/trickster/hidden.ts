import { Style } from "../../types/Style";

export const hidden: Style = {
    name: "Hidden",
    minRange: 1,
    maxRange: 2,
    abilities: [
        { desc: "At the start of your turn, place Fog into your space." },
        { desc: "While you stand in Fog, you have Armor and your maximum range is increased by 3." },
    ],
    actions: [
        {
            name: "Ghost Walk",
            cost: "3 Basic Tokens",
            desc: "Place a Fog obstacle into an empty space within range. Then, teleport to an empty space both within Fog and within range.",
        },
    ],
};
