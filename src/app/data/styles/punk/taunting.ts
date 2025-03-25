import { Style } from "../../types/Style";

export const taunting: Style = {
    name: "Taunting",
    minRange: 1,
    maxRange: 1,
    abilities: [
        { desc: "After you take damage, you gain 1 Iron token." },
        { desc: "After you take damage from an enemy with your Challenge, you may Move 1." },
    ],
    actions: [
        {
            name: "Is That All You Got?",
            cost: "1+ or 6+ or 12+",
            desc: "Challenge an enemy you can see. You gain 1 Iron token.\n6+: Challenge another enemy you can see, then gain 2 Iron tokens and heal 2.\n12+: Challenge a third enemy you can see, then give each of those enemies 3 Weakness tokens and Push 2.",
        },
        {
            name: "Not Good Enough",
            cost: "Your Challenge Token",
            desc: "Not Good Enough targets the enemy who held the Challenge Token you spent to pay for Not Good Enough. Give them 2 Weakness tokens.\nUsable once per turn.",
        },
    ],
};
