import { Style } from "../../types/Style";

export const ogres: Style = {
    name: "Ogre's",
    minRange: 1,
    maxRange: 2,
    abilities: [
        "Your Throws may target any number of enemies within range.",
        "After you perform an Action that inflicted Forced Movement on any enemies, you deal 1 damage to each enemy moved by that Action.",
    ],
    actions: [
        {
            name: "Gate Guardian",
            cost: "4+",
            desc: "Pull 2 to all enemies you can see, then deal 1 damage to each enemy within range.",
        },
        {
            name: "Watch Your Step",
            cost: "4+",
            desc: "Target an enemy you can see that moved during this turn.\nYou Push 1 and deal 2 damage to them.",
        },
    ],
};
