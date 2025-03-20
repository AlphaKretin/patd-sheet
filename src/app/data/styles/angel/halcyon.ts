import { Style } from "../../types/Style";

export const halcyon: Style = {
    name: "Halcyon",
    minRange: 1,
    maxRange: 2,
    abilities: [
        "At the start of your turn, you may discard one token you hold.",
        "After you discard tokens using an Action or Ability, you gain an equal number of Iron tokens.",
    ],
    actions: [
        {
            name: "Purify",
            cost: "1+ or 3+ or 6+",
            desc: "Discard one token from an ally within range.\n3+: Discard up to two tokens from someone within range.\n6+: Discard up to two tokens from someone within range.",
        },
    ],
};
