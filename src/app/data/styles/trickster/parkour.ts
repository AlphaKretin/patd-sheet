import { Style } from "../../types/Style";

export const parkour: Style = {
    name: "Parkour",
    minRange: 1,
    maxRange: 2,
    abilities: [
        "You may move through and stand on top of Walls as though they were empty spaces. You can see and target enemies through Walls.",
        "After you end movement within a Wall’s space, you may Move 1.",
    ],
    actions: [
        {
            name: "Take Cover",
            cost: "1+ or 5+",
            desc: "Place a Wall into an empty adjacent space.\n5+: Place up to three more Walls into empty spaces within range, then gain 2 Iron tokens.",
        },
        {
            name: "From Above!",
            cost: "3 Iron Tokens",
            desc: "Deal 2 damage to an enemy within range.\nUsable once per turn.",
        },
    ],
};
