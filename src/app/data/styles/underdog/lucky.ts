import { Style } from "../../types/Style";

export const lucky: Style = {
    name: "Lucky",
    minRange: 1,
    maxRange: 2,
    abilities: [{ desc: "Add d4 to your Action Dice." }, { desc: "You have Armor." }],
    actions: [
        {
            name: "Slip Up",
            cost: "1 HP or 2 HP or 3 HP",
            desc: "Move 2.\n2 HP: Push 2 to someone within range, then Move 1.\n3 HP: Deal 1 damage to someone within range, then Move 1.\nUsable once per turn.",
        },
    ],
};
