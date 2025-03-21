import { Style } from "../../types/Style";

export const training: Style = {
    name: "Training",
    minRange: 1,
    maxRange: 1,
    abilities: [
        "At the start of your turn, you gain 1 Training Token, then one ally you can see (other than yourself) heals 2 and gains 2 Power tokens.",
        "After you spend a Training Token, give 1 Training Token to an ally you can see, other than yourself.",
    ],
    actions: [
        {
            name: "Watch Closely",
            cost: "3+ or 6+ or 9+",
            desc: "You gain 1 Training Token.\n6+: You gain 1 Training Token.\n9+: You gain 1 Training Token",
        },
    ],
};
