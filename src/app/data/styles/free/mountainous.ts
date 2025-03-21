import { Freestyle } from "../../types/Style";

export const mountainous: Freestyle = {
    bannedForm: "Iron",
    dice: [8, 6],
    name: "Mountainous",
    minRange: 1, //no range provided in PDF, noted as 1 on the discord
    maxRange: 1,
    abilities: [
        "You have Armor.",
        "When your Armor triggers, you gain 1 Iron token.",
        "When you gain Speed tokens, replace half of them (rounded down) with Iron tokens.",
        "You may spend 1 Iron token to take 1 less damage from any source (even Reduced Hits).",
    ],
    actions: [
        {
            name: "Secure",
            cost: "3+",
            desc: "Choose two: Gain 2 Iron tokens -or- an ally within range other than yourself gains 2 Iron tokens; -or- give Shield 2 to an ally within range.",
        },
        {
            name: "Contain",
            cost: "3+",
            desc: "Target an enemy within range, then Choose two: Challenge them; -or- Give them 2 Fatigue tokens; -or- place a Trap into their space.",
        },
        {
            name: "Protect",
            cost: "6+",
            desc: "Choose four from the Secure and Contain lists. Options from the Contain list must target an enemy within range.",
        },
    ],
};
