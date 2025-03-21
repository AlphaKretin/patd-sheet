import { Style } from "../../types/Style";

export const zombie: Style = {
    name: "Zombie",
    minRange: 1,
    maxRange: 2,
    abilities: [
        "After an enemy destroys any of your Copies, you deal 1 damage to them.",
        "At the start of your turn and when you Bleed, place a Copy into a space within range of you or your Copies.",
        "At the end of your turn, you deal 1 damage to each enemy adjacent to any of your Copies.",
    ],
    actions: [
        {
            name: "Hunger",
            cost: "4+",
            desc: "One target within range discards 3 tokens of their choice (or all of their tokens, if they have less). For each token they discarded, place a Copy into an empty space adjacent to them.",
        },
        {
            name: "Raise The Dead",
            cost: "4+",
            desc: "Give 2 Fatigue tokens to an enemy within range, then place 2 Copies in empty spaces adjacent to that enemy.",
        },
    ],
};
