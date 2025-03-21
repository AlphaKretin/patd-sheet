import { Style } from "../../types/Style";

export const quickdraw: Style = {
    name: "Quickdraw",
    minRange: 2,
    maxRange: 3,
    abilities: [
        "Add d6 to your Action Dice.",
        "If an enemy discards your Challenge token using an enemy Action or Ability, the enemy who held the token gains 2 Fatigue tokens.",
    ],
    actions: [
        {
            name: "Point Blank Shot",
            cost: "1+ or 4+",
            desc: "Push 1 and deal 1 damage to an adjacent enemy.\n4+: Instead, Push 3 and deal 3 damage.",
        },
        {
            name: "Showdown",
            cost: "4+",
            desc: "This is a Gunslinger Action.\nChallenge an enemy within range. If they take the next turn for their side, they cannot discard your Challenge before the end of that turn. If they do not, you deal 3 damage to them.\nUsable once per turn. Unblockable by Shields.",
        },
    ],
};
