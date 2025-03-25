import { Style } from "../../types/Style";

export const machine: Style = {
    name: "Machine",
    minRange: 1,
    maxRange: 2,
    abilities: [
        { desc: "At the start of your turn, you gain 1 Iron token." },
        { desc: "You may spend your Iron Tokens as if they were Power tokens or Speed tokens." },
    ],
    actions: [
        {
            name: "High Efficiency",
            cost: "1+ or 4+ or 8+",
            desc: "Choose two: You heal 1; -or- you gain 1 Iron token; -or- you gain 1 Power token; -or- you gain 1 Speed token; -or- you deal 1 damage to an enemy within range.\n4+: Choose all five instead.\n8+: Replace all 1’s in High Efficiency with 2’s.",
        },
    ],
};
