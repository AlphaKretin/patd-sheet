import { Style } from "../../types/Style";

export const misfortunes: Style = {
    name: "Misfortune's",
    minRange: 1,
    maxRange: 3,
    abilities: [
        "After you take damage from anything other than an Action or an Ability, choose one: You deal 1 damage to an enemy within range; -or- you heal 2.",
    ],
    actions: [
        {
            name: "Bad Luck",
            cost: "X HP",
            desc: "Place X Traps into empty spaces within range.\nUsable once per turn. X cannot be greater than 4.",
        },
        {
            name: "Karma",
            cost: "7 Basic Tokens",
            desc: "Deal X damage and give 4 Weakness tokens to the active character. X is equal to the amount of HP you have lost this turn.\nUsable once per turn. Usable only during enemy turns.",
        },
    ],
};
