import { Style } from "../../types/Style";

export const slasher: Style = {
    name: "Slasher",
    minRange: 1,
    maxRange: 2,
    abilities: [
        "After an effect Pushes you, you may Pull yourself up to 2 towards the source of that Push.",
        "At the end of every turn, you may Move 1, then you deal 1 damage to an enemy within range.",
    ],
    actions: [
        {
            name: "Suddenly...",
            cost: "4+",
            desc: "Teleport into an empty space adjacent to someone who is alone, then if they are an enemy, you deal 1 damage to them.\nSomeone is alone if nobody is adjacent to them.",
        },
    ],
};
