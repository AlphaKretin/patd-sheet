import { Style } from "../../types/Style";

export const avalanche: Style = {
    name: "Avalanche",
    minRange: 2,
    maxRange: 3,
    abilities: [
        "At the start of your turn, you may place up to three Walls into empty adjacent spaces.",
        "You can see and target enemies through Walls.",
    ],
    actions: [
        {
            name: "Walled In",
            cost: "3+ or 6+",
            desc: "Place up to 3 Walls into empty spaces within Range 1-3.\n6+: Place up to 3 Walls into empty spaces within Range 1-3, then you may swap spaces with one Wall placed by Walled In.",
        },
        {
            name: "Icicle Fall",
            cost: "3+ or 7+",
            desc: "Deal 1 damage to each enemy adjacent to any Walls.\n7+: Deal 2 damage instead, then give 1 Weakness token to each enemy dealt damage by Icicle Fall.",
        },
    ],
};
