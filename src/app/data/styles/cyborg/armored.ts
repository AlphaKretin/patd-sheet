import { Style } from "../../types/Style";

export const armored: Style = {
    name: "Armored",
    minRange: 1,
    maxRange: 2,
    abilities: [
        {
            desc: "After you spend Iron tokens or trigger your Armor, you heal 1. This can heal a maximum of 3 HP per turn.",
        },
        {
            desc: "If an enemy discards your Challenge token using an enemy Action or Ability, the enemy who held the token gains 2 Weakness tokens.",
        },
    ],
    actions: [
        {
            name: "Hard Body",
            cost: "2+ or 6+",
            desc: "You gain temporary Armor.\n6+: You gain 4 Iron tokens.",
        },
        {
            name: "You, Stay",
            cost: "2 Iron Tokens or 5 Iron Tokens",
            desc: "Challenge an enemy within range. Give that enemy 2 Fatigue tokens. \n5 Iron: Instead give them 4 Fatigue tokens. You gain Shield 3.\nUsable once per turn.",
        },
    ],
};
