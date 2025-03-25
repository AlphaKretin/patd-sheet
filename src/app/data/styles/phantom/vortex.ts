import { Style } from "../../types/Style";

export const vortex: Style = {
    name: "Vortex",
    minRange: 1,
    maxRange: 4,
    abilities: [
        { desc: "You do not take damage from Pits." },
        {
            desc: "When you are standing on a Pit, every other Pit counts as an adjacent space you can move to. Your range is still calculated only from the space you are currently standing in.",
        },
    ],
    actions: [
        {
            name: "Wormhole",
            cost: "1+ or 4+",
            desc: "Place a Pit into your own space. 4+: Place 1 Pit into an empty space you can see",
        },
        {
            name: "Black Hole",
            cost: "3+",
            desc: "Target 1 empty space within range. Place a Pit into that space, then target someone within range and Pull them 2 towards the Pit.",
        },
    ],
};
