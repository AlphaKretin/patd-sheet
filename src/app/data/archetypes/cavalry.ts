import { charging } from "../styles/cavalry/charging";
import { heroic } from "../styles/cavalry/heroic";
import { jumping } from "../styles/cavalry/jumping";
import { rallying } from "../styles/cavalry/rallying";
import { unbreakable } from "../styles/cavalry/unbreakable";
import { Archetype } from "../types/Archetype";

export const cavalry: Archetype = {
    name: "Cavalry",
    focusedAbilities: [
        "At the start and end of your turn, you may Move up to 2, then you and each ally within range gains Shield 2.",
    ],
    fusedAbilities: [
        "At the start of your turn, you may Move up to 2, then you and each ally within range gains Shield 2.",
    ],
    franticAbilities: [
        "At the start and end of this turn, you may Move up to 2, then you and each ally within range gains Shield 2.",
    ],
    actions: [
        {
            name: "First Aid",
            cost: "1+ or 4+ or 6+",
            desc: "Target an ally within Range 1-5. Pull yourself towards them, 1 space at a time, until you are adjacent to that ally.\n4+: Heal that ally.\n6+: Give that ally Shield 4.\nFirst Aid can only target an ally once per turn.",
        },
    ],
    styles: [charging, heroic, jumping, rallying, unbreakable],
    alphaSuper: {
        name: "Call In The Cavalry",
        desc: "Deal 2 damage to all enemies, then deal 2 damage to all enemies.",
    },
    deltaSuper: {
        name: "Inspire Perfection",
        desc: "Remove up to 4 Status tokens from yourself and each ally you can see. Heal, give 2 Power tokens, and give 2 Iron tokens to each ally you can see, including yourself.",
    },
};
