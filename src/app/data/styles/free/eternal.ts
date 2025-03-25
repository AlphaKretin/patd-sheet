import { Freestyle } from "../../types/Style";

export const eternal: Freestyle = {
    bannedForm: "Vigilance",
    dice: [-5, -3],
    name: "Eternal",
    minRange: 1,
    maxRange: 1,
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
};
