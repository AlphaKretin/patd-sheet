import { Style } from "../../types/Style";

export const flashy: Style = {
    name: "Flashy",
    minRange: 1,
    maxRange: 1,
    abilities: [
        {
            desc: "After you roll your Action Dice, you may combine two of your numbers into a single, larger number. Then, you may split one of your numbers in half (one rounded up, the other rounded down). You cannot split a 1 - the split number must be 2 or higher.",
        },
    ],
    actions: [
        {
            name: "Show Off",
            cost: "X",
            desc: "Choose X: Move 1; -or- Pull 1 to an enemy you can see; -or- deal 1 damage to an enemy within range; -or- give 1 Burning token to an enemy within range; -or- give 1 Weakness token to an enemy within range; -or- give 1 Fatigue token to an enemy within range; -or- Challenge an enemy within range; -or- push 1 to an enemy within range; -or- gain 1 Iron token; -or- gain 1 Power token; -or- gain 1 Speed token; -or- heal 1; -or- gain Shield 1.\nUsable once per turn.",
        },
    ],
};
