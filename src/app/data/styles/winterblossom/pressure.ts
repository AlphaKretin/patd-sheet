import { Style } from "../../types/Style";

export const pressure: Style = {
    name: "Pressure",
    minRange: 1,
    maxRange: 2,
    abilities: [
        "At the start and end of your turn, each enemy within range must pay 1 HP, then gain 1 Weakness token.",
    ],
    actions: [
        {
            name: "Build Pressure",
            cost: "3+",
            desc: "Give an enemy within range 1 each of three different Status tokens of your choice (Burning, Challenge, Fatigue, or Weakness).",
        },
        {
            name: "Apply Pressure",
            cost: "7+",
            desc: "Target an enemy within range. Deal damage to them equal to the number of Status tokens they hold, to a max of 12 damage.\nUsable once per turn.",
        },
    ],
};
