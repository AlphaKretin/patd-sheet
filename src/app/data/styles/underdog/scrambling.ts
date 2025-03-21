import { Style } from "../../types/Style";

export const scrambling: Style = {
    name: "Scrambling",
    minRange: 1,
    maxRange: 2,
    abilities: [
        "At the start of your turn, you gain 1 Power token and 1 Iron token.",
        "After you spend Power tokens, you gain 1 Speed token.",
        "After you spend Iron tokens, you gain 1 Speed token.",
        "When you discard Speed tokens at the end of each turn, you do not discard below 2 Speed tokens.",
    ],
    actions: [
        {
            name: "Think Fast!",
            cost: "3 or 4 or 5 Basic Tokens",
            desc: "Target an enemy within range and Choose one: Give them 1 Weakness token; -or- give them 1 Fatigue token; -or- Push 3. Then, you may Move 2.\n4 Basic Tokens: Choose two instead.\n5 Basic Tokens: Choose three instead.",
        },
    ],
};
