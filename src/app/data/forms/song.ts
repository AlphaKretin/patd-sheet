import { Form } from "../types/Form";

export const song: Form = {
    name: "Song",
    greenDice: [6, 6],
    purpleDice: [8, 4],
    abilities: [
        {
            desc: "At the start of your turn, choose your song: Iron, Power, or Speed. You gain 3 tokens of the chosen type, and each ally (other than yourself) gains 1 token of the chosen type.",
        },
    ],
    actions: [
        {
            name: "Sing Along",
            cost: "2+ or 4+ or 6+",
            desc: "Target an ally you can see. Choose one: They discard one token; -or- they heal 2; -or- they gain 2 tokens from your song.\n4+: They also choose one from the list.\n6+: Add a 4 to their Action Pool.\nUsable once per turn.",
        },
        {
            name: "Diss Track",
            cost: "3+ or 5+ or 6+",
            desc: "Target an enemy you can see. Choose one to give them: 2 Burning tokens; -or- 2 Fatigue tokens; -or- 2 Weakness Tokens.\n5+: They also choose one from the list.\n6+: Pull 2 and Challenge them.",
        },
    ],
    skill: {
        name: "Natural Charisma",
        desc: "People naturally like you. Anyone who is not your enemy is your friend, even if you've just met them.",
    },
};
