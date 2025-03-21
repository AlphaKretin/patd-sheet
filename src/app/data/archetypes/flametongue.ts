import { blazing } from "../styles/flametongue/blazing";
import { explosion } from "../styles/flametongue/explosion";
import { inferno } from "../styles/flametongue/inferno";
import { phoenix } from "../styles/flametongue/phoenix";
import { volcanic } from "../styles/flametongue/volcanic";
import { Archetype } from "../types/Archetype";

export const flametongue: Archetype = {
    name: "Flametongue",
    focusedAbilities: [
        "Three times per turn, after you deal damage to an enemy, give them 2 Burning tokens.",
    ],
    fusedAbilities: [
        "Three times per turn, after you deal damage to an enemy, give them 1 Burning token.",
    ],
    franticAbilities: [
        "Until your next turn, three times per turn, after you deal damage to an enemy, give them 2 Burning tokens.",
    ],
    actions: [
        {
            name: "Incinerate",
            cost: "2+ or 5+ or 8+",
            desc: "Deal 1 damage and give 1 Burning token to an enemy within range.\n5+: Deal 2 damage and give 2 Burning tokens instead.\n8+: Deal 3 damage and give 3 Burning tokens instead.",
        },
    ],
    styles: [blazing, explosion, inferno, phoenix, volcanic],
    alphaSuper: {
        name: "Erupting Burning Fist",
        desc: "Deal 4 damage and Push 4 to an adjacent enemy, then give them Burning Tokens until they hold 6.",
    },
    deltaSuper: {
        name: "Watch The World Burn",
        desc: "Place a Trap under each enemy you can see, then give each of those enemies 2 Burning tokens and 3 Fatigue tokens.",
    },
};
