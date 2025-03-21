import { Style } from "../../types/Style";

export const blazing: Style = {
    name: "Blazing",
    minRange: 1,
    maxRange: 3,
    abilities: [
        "At the start of each allied turn, give 1 Burning token to each enemy within range.",
    ],
    actions: [
        {
            name: "Blazing Speed",
            cost: "1 HP",
            desc: "Target an enemy you can see that has Burning Tokens. Pull yourself up to X spaces towards them, where X is the number of Burning Tokens they hold.\nUsable once per enemy turn.",
        },
        {
            name: "Ignition",
            cost: "6+",
            desc: "Deal X damage to an adjacent enemy. X = the number of Burning tokens they hold.\nUsable once per turn",
        },
    ],
};
