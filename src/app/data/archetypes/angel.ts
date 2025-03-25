import { halcyon } from "../styles/angel/halcyon";
import { judgment } from "../styles/angel/judgment";
import { shining } from "../styles/angel/shining";
import { singing } from "../styles/angel/singing";
import { winged } from "../styles/angel/winged";
import { Archetype } from "../types/Archetype";

export const angel: Archetype = {
    name: "Angel",
    focusedAbilities: [
        { desc: "Your Challenges are Unblockable By Shields." },
        {
            desc: "At the start of your turn, you may heal, then if you did, Challenge an enemy you can see and deal 1 damage to them.",
        },
        { desc: "After you challenge an enemy, deal 1 damage to them and heal 1." },
    ],
    fusedAbilities: [
        { desc: "Your Challenges are Unblockable by Shields." },
        { desc: "At the start of your turn, you may heal 2, then if you did, Challenge an enemy you can see." },
        { desc: "After you Challenge an enemy, you deal 1 damage to them." },
    ],
    franticAbilities: [
        { desc: "Your Challenges are Unblockable by Shields." },
        {
            desc: "At the start of this turn, you may heal, then if you did, Challenge an enemy you can see and deal 1 damage to them.",
        },
        { desc: "Until your next turn, after you Challenge an enemy, deal 1 damage to them and heal 1." },
    ],
    actions: [
        {
            name: "Siren Song",
            cost: "2+ or 5+",
            desc: "Challenge one enemy you can see. You may Pull them up to 3.\n5+: Challenge every enemy adjacent to the initial target, then Pull 1 to everyone Challenged by Siren Song.",
        },
    ],
    styles: [halcyon, judgment, shining, singing, winged],
    alphaSuper: {
        name: "Heaven's Piledriver",
        desc: "Deal 6 damage to an adjacent enemy. That enemy cannot use Free Movement until after the end of their next turn.",
    },
    deltaSuper: {
        name: "Siren's Scream",
        desc: "Challenge and deal 2 damage to all enemies. Then, you gain an 8-point Shield.",
    },
};
