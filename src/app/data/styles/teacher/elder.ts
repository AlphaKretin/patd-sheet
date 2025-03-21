import { Style } from "../../types/Style";

export const elder: Style = {
    name: "Elder",
    minRange: 1,
    maxRange: 2,
    abilities: [
        "The cost of all Actions you perform are reduced by 1 (to a minimum of 1+ or 2 tokens/HP/Shield).",
        "The damage values of all Actions you perform are reduced by 1 (to a minimum of zero).",
    ],
    actions: [
        {
            name: "Show You How It's Done",
            cost: "5+",
            desc: "Target a Unique Dice Action available to someone’s current Stance in this fight, other than Show You How It’s Done or an Action you targeted earlier during this turn.\nPerform that Action. For the purposes of Gates or the value of X, use a value of 4.",
        },
    ],
};
