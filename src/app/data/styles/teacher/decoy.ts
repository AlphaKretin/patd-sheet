import { Style } from "../../types/Style";

export const decoy: Style = {
    name: "Decoy",
    minRange: 1,
    maxRange: 2,
    abilities: [
        "At the start of each enemy turn, you may pay 1 HP to Challenge the active character.",
        "After you Challenge an enemy, you deal 2 damage to them.",
        "If an enemy discards your Challenge token using an enemy Action or Ability, heal your nearest ally to them, other than yourself.",
    ],
    actions: [
        {
            name: "Leave My Student Alone",
            cost: "2 HP",
            desc: "Pull 2 and Challenge an enemy you can see. Usable once per turn.",
        },
    ],
};
