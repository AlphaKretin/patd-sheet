import { Style } from "../../types/Style";

export const brawling: Style = {
    name: "Brawling",
    minRange: 1,
    maxRange: 1,
    abilities: [
        { desc: "At the end of each turn you took damage, you gain Shield 2." },
        { desc: "After your Shield absorbs, you gain 1 Power token." },
    ],
    actions: [
        {
            name: "Tough It Out",
            cost: "3+ or 11+",
            desc: "Pay 1 HP, then gain a 3 point Shield.\n9+: You instead pay 2 HP and instead gain a 7-point Shield.",
        },
        {
            name: "Jab",
            cost: "Reduce your Shield's Value by 2",
            desc: "Push 1 and deal 1 damage to an adjacent enemy.\nUsable once per turn.",
        },
    ],
};
