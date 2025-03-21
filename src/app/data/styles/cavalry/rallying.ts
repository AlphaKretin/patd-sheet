import { Style } from "../../types/Style";

export const rallying: Style = {
    name: "Rallying",
    minRange: 1,
    maxRange: 3,
    abilities: [
        "At the start of each ally's turn, if they are within Range of you or your Copies, they may heal.",
        "At the end of your turn, choose an ally you can see other than yourself. They heal and gain Shield 2.",
    ],
    actions: [
        {
            name: "Group Up",
            cost: "2+ or 3+ or 5+",
            desc: "Pull up to 3 to one ally you can see.\n3+: Pull up to 3 to one ally you can see.\n5+, Once per turn: Choose one to apply to each ally within range: Heal; -or- Gain 2 Power tokens; -or- Gain Shield 3.",
        },
    ],
};
