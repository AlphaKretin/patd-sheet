import { Style } from "../../types/Style";

export const incinerator: Style = {
    name: "Incinerator",
    minRange: 1,
    maxRange: 3,
    abilities: [
        "After you use a Power token to Enhance a Hit, give 1 Burning token to the target of that hit.",
        "After you take damage from Burning Tokens, gain 1 Power token.",
    ],
    actions: [
        {
            name: "Overclock",
            cost: "1+ or 5+",
            desc: "Gain 2 Power tokens and 1 Burning token.\n5+: Gain 2 more Power tokens and 1 more Burning token.\nUsable once per turn.",
        },
        {
            name: "Flamethrower",
            cost: "2 Power Tokens or 4 Power Tokens",
            desc: "Deal 1 damage and give 1 Burning token to an enemy within range.\n4 Power: Instead, deal 2 damage and give 2 Burning tokens, and also, Flamethrower now applies to each target adjacent to the initial target(s).\nUsable once per turn.",
        },
    ],
};
