import { Style } from "../../types/Style";

export const singing: Style = {
    name: "Singing",
    minRange: 2,
    maxRange: 4,
    abilities: [
        "At the start of your turn, choose a Mood: Despair, Sorrow, or Rage.\nIf you picked Despair, give 1 Fatigue token to all enemies.\nIf you picked Sorrow, give 1 Weakness token to all enemies.\nIf you picked Rage, give 1 Burning token to all enemies",
    ],
    actions: [
        {
            name: "Rip Chord",
            cost: "2+ or 5+ or 8+",
            desc: "Give one of your Mood’s tokens to an enemy within Range.\n5+: Give one of your Mood’s tokens to each enemy within Range.\n8+: Give one of your Mood’s tokens to each enemy you can see.",
        },
        {
            name: "Mood Shift",
            cost: "6+",
            desc: "Apply all of your Start Effects as this Action’s effects.\nUsable once per turn, only during your own turn",
        },
    ],
};
