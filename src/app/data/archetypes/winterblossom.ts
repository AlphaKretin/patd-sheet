import { avalanche } from "../styles/winterblossom/avalanche";
import { crystal } from "../styles/winterblossom/crystal";
import { frozen } from "../styles/winterblossom/frozen";
import { heartless } from "../styles/winterblossom/heartless";
import { pressure } from "../styles/winterblossom/pressure";
import { Archetype } from "../types/Archetype";

export const winterblossom: Archetype = {
    name: "Winterblossom",
    focusedAbilities: [
        { desc: "At the start of each turn, give 1 Weakness token to one enemy within range of you or your Copies." },
    ],
    fusedAbilities: [
        {
            desc: "At the start of each allied turn, give 1 Weakness token to one enemy within range of you or your Copies.",
        },
    ],
    franticAbilities: [
        {
            desc: "At the start of each turn until your next turn, give 1 Weakness token to one enemy within range of you or your Copies.",
        },
    ],
    actions: [
        {
            name: "Frostbite",
            cost: "1+ or 3+ or 5+ or 8+",
            desc: "Give 1 Weakness token to an enemy within range.\n3+: Give 1 Weakness token to a different enemy within range.\n5+: Give 1 Weakness token to up to two enemies within range.\n8+: Give 1 Weakness token to up to three enemies within range.",
        },
    ],
    styles: [avalanche, crystal, frozen, heartless, pressure],
    alphaSuper: {
        name: "You Are Nothing.",
        desc: "Deal 4 damage to an enemy within range, Pull them up to 3, then give them Weakness tokens until they hold 6.",
    },
    deltaSuper: {
        name: "Blizzard",
        desc: "Until the end of this Round, increase your maximum range by 2. Also until the end of this Round, at the end of every turn, you give 1 Fatigue token and 1 Weakness token to every enemy within range, then you may move 1 space.",
    },
};
