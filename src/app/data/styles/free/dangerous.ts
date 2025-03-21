import { Freestyle } from "../../types/Style";

export const dangerous: Freestyle = {
    bannedForm: "Thorns",
    dice: [-5, 6],
    name: "Dangerous",
    minRange: 1,
    maxRange: 1,
    abilities: [
        "At the start and end of your turn, you gain Shield 2.",
        "After your Shield absorbs from an enemy Action, you deal 1 damage to them. If it broke your Shield, you deal 2 damage instead.",
    ],
    actions: [
        {
            name: "Blossoms",
            cost: "3+ or 6+",
            desc: "You gain Shield 2 and choose one: Gain 1 Power token; -or- Move 1; -or- heal 1.\n6+: Instead, gain Shield 4 and choose two.",
        },
        {
            name: "Brambles",
            cost: "Destroy Your Shield",
            desc: "Deal 1 damage to up to X enemies within Range 1-X, then gain 1 Power token. X is equal to the value of the destroyed Shield.\nUsable twice per turn.",
        },
    ],
};
