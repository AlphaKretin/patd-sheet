import { Form } from "../types/Form";

export const iron: Form = {
    name: "Iron",
    greenDice: [6, 6],
    purpleDice: [8, 6],
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
    skill: {
        name: "Immovable",
        desc: "When you plant your feet and stand your ground, nothing can get past you or hurt you, not even vehicles or gunfire.",
    },
};
