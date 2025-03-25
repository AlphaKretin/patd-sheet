import { Freestyle } from "../../types/Style";

export const secret: Freestyle = {
    bannedForm: "Blaster",
    dice: [8],
    name: "Secret",
    minRange: 1,
    maxRange: 2,
    abilities: [
        {
            desc: "At the start of your turn, add 6 to your Action Pool, gain Shield 4, and you gain +3 maximum Range until the start of your next turn.\nThis Ability triggers only once per fight.\nThis Ability cannot trigger on Round 1.",
        },
    ],
    actions: [
        {
            name: "Say Hello To My Secret Weapon",
            cost: "3+",
            desc: "Deal 4 damage to an enemy within range.\nUsable once per fight.",
        },
    ],
};
