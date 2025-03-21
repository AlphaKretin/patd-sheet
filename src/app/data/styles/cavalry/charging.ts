import { Style } from "../../types/Style";

export const charging: Style = {
    name: "Charging",
    minRange: 1,
    maxRange: 1,
    abilities: [
        "At the start of your turn, you gain temporary Armor and may Move up to 2.",
        "At the start of each ally's turn, that ally may Move up to 2.",
    ],
    actions: [
        {
            name: "Follow My Lead",
            cost: "3+ or 6+",
            desc: "You may move 1, then deal 1 damage to an enemy within range. An ally you can see (other than yourself) may move 1, then deal 1 damage to an enemy within their range.\n6+: You may move 1, then deal 1 damage to an enemy within range. An ally you can see (other than yourself) may move 1, then deal 1 damage to an enemy within their range.",
        },
    ],
};
