import { Form } from "../types/Form";

export const vigilance: Form = {
    name: "Vigilance",
    greenDice: [-4, -2, -1],
    purpleDice: [-5, -3],
    abilities: [
        {
            desc: "At the start of your turn, discard up to 2 Status tokens you hold; then, if you are Bleeding, you heal.",
        },
        { desc: "At the end of your turn, choose up to two enemies within range and give them each 1 Weakness token." },
    ],
    actions: [
        {
            name: "Bow Down",
            cost: "2+ or 4+",
            desc: "Give 1 Weakness token to an enemy within range.\n4+: Give 1 Weakness token to each enemy within range.",
        },
        {
            name: "Stand Strong",
            cost: "1+ or 3+ or 5+",
            desc: "1+: Give 1 Power token to an ally within range.\n3+: Heal that ally.\n5+: Heal and give 1 Power token to a different ally within range.\nUsable once per turn.",
        },
    ],
    skill: {
        name: "Eyes Wide Open",
        desc: "Your senses are unusually strong. You cannot be surprised by anything, and always have a chance to react first.",
    },
};
