import { armored } from "../styles/cyborg/armored";
import { incinerator } from "../styles/cyborg/incinerator";
import { machine } from "../styles/cyborg/machine";
import { rocket } from "../styles/cyborg/rocket";
import { syphon } from "../styles/cyborg/syphon";
import { Archetype } from "../types/Archetype";

export const cyborg: Archetype = {
    name: "Cyborg",
    focusedAbilities: [
        "At the start of your turn, you gain 3 Basic Tokens of one type, 2 Basic tokens of a different type, and 1 Basic token of the final type.",
    ],
    fusedAbilities: [
        "At the start of your turn, you gain 2 Basic Tokens of one type, and 1 Basic token of each other type.",
    ],
    franticAbilities: [
        "At the start of this turn, you gain 3 Basic Tokens of one type, 2 Basic tokens of a different type, and 1 Basic token of the final type.",
    ],
    actions: [
        {
            name: "XYZ-BURST",
            cost: "2 to 5 Basic Tokens",
            desc: "You heal X, then teleport Y, then deal Z damage to an enemy within range.\nX is equal to the number of Iron tokens spent to pay for this.\nY is equal to twice the number of Speed tokens spent.\nZ is equal to the number of Power tokens spent.\nUsable once per turn, only during your own turn.",
        },
    ],
    styles: [armored, incinerator, machine, rocket, syphon],
    alphaSuper: {
        name: "Draining Knuckle",
        desc: "Deal 3 damage to an adjacent enemy, and they discard all Basic Tokens they hold. Then, you gain 2 Power tokens, 2 Iron tokens, and 3 Speed tokens.",
    },
    deltaSuper: {
        name: "Drive Install",
        desc: "You gain 6 Power tokens, 6 Iron tokens, and 6 Speed tokens. For the rest of this fight, you can spend 1 more Power token and 1 more Iron token per hit. For the rest of this fight, you only discard 1 Speed token at the end of each turn, instead of 3 of them.",
    },
};
