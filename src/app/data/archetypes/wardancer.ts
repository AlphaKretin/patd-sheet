import { artistic } from "../styles/wardancer/artistic";
import { overwhelming } from "../styles/wardancer/overwhelming";
import { relentless } from "../styles/wardancer/relentless";
import { swift } from "../styles/wardancer/swift";
import { weightless } from "../styles/wardancer/weightless";
import { Archetype } from "../types/Archetype";

export const wardancer: Archetype = {
    name: "Wardancer",
    focusedAbilities: [
        "At the start of the Action Phase of your turn, increase one of your numbers by 3, a different one of your numbers by 2, and one of your remaining numbers by 1. This can only increase a number to a maximum value of 9.",
    ],
    fusedAbilities: [
        "At the start of the Action Phase of your turn, increase one of your numbers by 2, and one of your other numbers by 1. This can only increase a number to a maximum value of 5.",
    ],
    franticAbilities: [
        "At the start of the Action Phase of this turn, increase one of your numbers by 3, a different one of your numbers by 2, and one of your remaining numbers by 1. This can only increase a number to a maximum value of 9.",
    ],
    actions: [
        {
            name: "War Dance",
            cost: "2+ or 5+ or 9+",
            desc: "Move 1, then deal 1 damage to an enemy within range.\n5+: Move 2, then deal 2 damage to an enemy within range.\n9+: Move 3, then deal 2 damage to an enemy within range.",
        },
    ],
    styles: [artistic, overwhelming, relentless, swift, weightless],
    alphaSuper: {
        name: "Become My Canvas",
        desc: "Deal 2 damage to an enemy within range, ignoring Armor and Shields. Then, deal 2 damage to an enemy within range, ignoring Armor and Shields. Then, deal 3 damage to an enemy within range, ignoring Armor and Shields",
    },
    deltaSuper: {
        name: "Lightning Drop",
        desc: "Teleport to any space on the map. Then, deal 4 damage to an adjacent enemy. Then, deal 2 damage to all enemies within Range 1-4.",
    },
};
