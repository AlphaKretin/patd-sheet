import { dark } from "../styles/demon/dark";
import { ogres } from "../styles/demon/ogres";
import { slasher } from "../styles/demon/slasher";
import { vampire } from "../styles/demon/vampire";
import { zombie } from "../styles/demon/zombie";
import { Archetype } from "../types/Archetype";

export const demon: Archetype = {
    name: "Demon",
    focusedAbilities: [
        "At the end of your turn, you gain 2 Chaos Tokens.",
        "At the start of each enemy turn, you may Pull yourself up to X spaces towards the active character, where X is the number of Chaos Tokens you hold.",
    ],
    fusedAbilities: [
        "At the end of your turn, you gain 1 Chaos Token.",
        "At the start of each enemy turn, you may Pull yourself up to X spaces towards the active character, where X is the number of Chaos Tokens you hold.",
    ],
    franticAbilities: [
        "At the end of this turn, you gain 2 Chaos Tokens.",
        "Until your next turn, at the start of each enemy turn, you may Pull yourself up to X spaces towards the active character, where X is the number of Chaos Tokens you hold.",
    ],
    actions: [
        {
            name: "Devil Dive",
            cost: "4+",
            desc: "Teleport 3, then deal 2 damage to an enemy within range.",
        },
    ],
    styles: [dark, ogres, slasher, vampire, zombie],
    alphaSuper: {
        name: "Unending Despair",
        desc: "Target an adjacent enemy. Give them 4 Burning tokens, 3 Fatigue tokens, and 2 Weakness tokens. You gain 2 Iron tokens, 2 Power tokens, 2 Speed tokens, and 2 Chaos tokens.",
    },
    deltaSuper: {
        name: "Dancing Mad",
        desc: "Teleport 3, then deal 2 damage to an adjacent enemy. You may repeat this as many times as you like. After you damage the same enemy twice, you deal 1 damage to all enemies within Range 1-3, then this Super Move ends.",
    },
};
