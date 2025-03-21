import { Freestyle } from "../../types/Style";

export const mythical: Freestyle = {
    bannedForm: "Song",
    dice: [12],
    name: "Mythical",
    minRange: 2,
    maxRange: 3,
    abilities: [
        "Whenever you roll a 3 or less on the mythical d12 , re-roll it.",
        "After you roll your Action Dice during your turn, you may re-roll one die. Keep the new result, even if it is worse.",
    ],
    actions: [
        {
            name: "Beyond Human",
            cost: "3+ or 6+ or 9+ or 11+",
            desc: "Choose one: You Heal 2; -or- you gain 2 Power tokens; -or- discard up to 4 Status tokens among allies within range; -or- you gain Shield 3.\n6+: Choose two instead.\n9+: Choose three instead.\n11+: Choose all four instead.",
        },
    ],
};
