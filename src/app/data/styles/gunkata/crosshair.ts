import { Style } from "../../types/Style";

export const crosshair: Style = {
    name: "Crosshair",
    minRange: 4,
    maxRange: 5,
    abilities: [
        "Whenever you deal 3 or more damage to an enemy in a single hit, they gain 1 Weakness token and you gain 1 Power token.",
    ],
    actions: [
        {
            name: "Take Aim",
            cost: "1+",
            desc: "This is a Gunslinger Action.\nYour next damage-dealing Action is Unblockable by Armor, Iron Tokens, and Shields.",
        },
        {
            name: "Headshot",
            cost: "6+",
            desc: "Deal 5 damage to an enemy within range.\nUsable once per Round.",
        },
    ],
};
