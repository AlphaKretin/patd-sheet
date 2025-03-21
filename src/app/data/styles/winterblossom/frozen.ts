import { Style } from "../../types/Style";

export const frozen: Style = {
    name: "Frozen",
    minRange: 1,
    maxRange: 1,
    abilities: [
        "At the start of your turn, you gain 2 Iron tokens.",
        "After you Reduce a Hit, give 1 Weakness token to your attacker.",
    ],
    actions: [
        {
            name: "Exploit Weakness",
            cost: "3+ or 7+",
            desc: "Deal 2 damage to an enemy within range. You may spend Weakness tokens they hold as if they were Power tokens you hold.\n7+: Deal 2 damage to an enemy within range. You may spend Weakness tokens they hold as if they were Power tokens you hold.",
        },
        {
            name: "Ice Block",
            cost: "4+",
            desc: "Gain 3 Iron tokens, then give 1 Weakness token to all adjacent enemies.",
        },
    ],
};
