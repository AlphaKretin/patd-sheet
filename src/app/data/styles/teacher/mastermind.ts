import { Style } from "../../types/Style";

export const mastermind: Style = {
    name: "Mastermind",
    minRange: 1,
    maxRange: 1,
    abilities: [
        "You cannot perform Actions. Instead, you pay their costs, but make your allies perform them for you.\nEach Action you take uses an ally's current location, range, and Stance bonuses as if they'd taken that Action themselves. You can only give Actions to allies you can see.",
        "After each Action an ally performs during your turn, you may Move 1.",
    ],
    actions: [
        {
            name: "Diabolical Plan",
            cost: "5+ or 9+",
            desc: "You teleport 2 and gain 1 Chaos Token.\n9+: You teleport 2 and gain 1 more Chaos Token.",
        },
    ],
};
