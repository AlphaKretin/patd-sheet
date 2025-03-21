import { Style } from "../../types/Style";

export const judgment: Style = {
    name: "Judgment",
    minRange: 1,
    maxRange: 1,
    abilities: [
        "When an enemy with your Challenge token starts their turn, they do not roll their lowest Action Die. It is discarded and unused. If they are in a Stance that does not roll Action Dice, they get rid of their bonus die, if they have one, or their smallest number, if they do not.",
        "If an enemy discards your Challenge token using an enemy Action or Ability, all numbers currently in their Action Pool are reduced by 2 (to a minimum of 1).",
    ],
    actions: [
        {
            name: "Denial",
            cost: "4+",
            desc: "Teleport into an empty space adjacent to an enemy you can see, then Challenge them.",
        },
    ],
};
