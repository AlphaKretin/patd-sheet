import { Style } from "../../types/Style";

export const collateral: Style = {
    name: "Collateral",
    minRange: 1,
    maxRange: 2,
    abilities: [
        "After you deal damage to an enemy with an Action, you may destroy 1 obstacle within range per enemy dealt damage.",
        "At the end of your turn, you gain 1 Power token per obstacle you destroyed during that turn.",
    ],
    actions: [
        {
            name: "Roughhousing",
            cost: "4+",
            desc: "As an additional cost, you may pay 2 or 4 Basic Tokens.\nChoose one: Place Rubble into up to 3 adjacent spaces; -or- Pull 1 and deal 1 damage to up to two enemies within range; -or- Move 3 and deal 1 damage to an adjacent enemy.\n2 Basic Tokens: Choose two instead.\n4 Basic Tokens: Choose three instead.",
        },
    ],
};
