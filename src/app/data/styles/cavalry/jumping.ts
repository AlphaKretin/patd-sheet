import { Style } from "../../types/Style";

export const jumping: Style = {
    name: "Jumping",
    minRange: 1,
    maxRange: 1,
    abilities: [
        "At the start and end of your turn, you may Teleport 3.",
        "When you Bleed, you may Teleport 3.",
    ],
    actions: [
        {
            name: "Leap In",
            cost: "3+",
            desc: "Teleport 3. Then, deal 2 damage to an enemy within range.",
        },
        {
            name: "Leap Out",
            cost: "5+",
            desc: "Deal 2 damage to an enemy within range, then teleport 3. Then, choose one: Deal 2 damage to a different enemy within range; -or- heal 2; -or- gain 2 Power tokens.",
        },
    ],
};
