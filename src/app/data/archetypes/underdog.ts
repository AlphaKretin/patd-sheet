import { collateral } from "../styles/underdog/collateral";
import { distracting } from "../styles/underdog/distracting";
import { lucky } from "../styles/underdog/lucky";
import { misfortunes } from "../styles/underdog/misfortunes";
import { scrambling } from "../styles/underdog/scrambling";
import { Archetype } from "../types/Archetype";

export const underdog: Archetype = {
    name: "Underdog",
    focusedAbilities: [
        "At the start of your turn, you gain 2 Luck Tokens.",
        "The first two times you take damage each turn, you gain 1 Basic token of your choice.",
    ],
    fusedAbilities: [
        "At the start of your turn, you gain 1 Luck Token.",
        "The first time you take damage each turn, you gain 1 Basic token of your choice.",
    ],
    franticAbilities: [
        "At the start of this turn, you gain 2 Luck Tokens.",
        "Until your next turn, the first two times you take damage each turn, you gain 1 Basic token of your choice.",
    ],
    actions: [
        {
            name: "Just What I Needed",
            cost: "3 Basic Tokens",
            desc: "Choose one: Teleport 3; -or- Push 2 and deal 2 damage to an enemy within range; -or- you gain temporary Armor.\nUsable once per turn.",
        },
    ],
    styles: [collateral, distracting, lucky, misfortunes, scrambling],
    alphaSuper: {
        name: "Lucky Hit",
        desc: "Deal 4 damage to an adjacent enemy. Then, that enemy discards all Basic tokens they hold, discards all Shields they hold, and cannot have Armor or Shields for the rest of this Round.",
    },
    deltaSuper: {
        name: "Hyper Install",
        desc: "You gain 3 Luck tokens and you heal.\nFor the rest of this Round, you gain a benefit at the start of every single turn, depending on whose turn it is.\nIf it is an enemy turn, you gain 1 Iron token and 1 Speed token.\nIf it is an allied turn, you gain 1 Power token and heal 1.\nIf it is your turn, you gain both effects: gain 1 Iron token, 1 Power token, 1 Speed token, and you heal 1",
    },
};
