import { brawling } from "../styles/punk/brawling";
import { flashy } from "../styles/punk/flashy";
import { knockdown } from "../styles/punk/knockdown";
import { mad } from "../styles/punk/mad";
import { taunting } from "../styles/punk/taunting";
import { Archetype } from "../types/Archetype";

export const punk: Archetype = {
    name: "Punk",
    focusedAbilities: [
        {
            desc: "At the start of your turn, add X to your Action Pool.\nX is equal to the damage on your current health bar, to a maximum of 13. If your health bar is full, X = 3.",
        },
    ],
    fusedAbilities: [
        {
            desc: "At the start of your turn, add X to your Action Pool.\nX is equal to half the damage on your current health bar, rounded up, to a maximum of 9. If your health bar is full, X = 2.",
        },
    ],
    franticAbilities: [
        {
            desc: "At the start of this turn, add X to your Action Pool.\nX is equal to the damage on your current health bar, to a maximum of 13. If your health bar is full, X = 3.",
        },
    ],
    actions: [
        {
            name: "I'm Still Here",
            cost: "7+ or 13+",
            desc: "Push 4 and deal 4 damage to an enemy within range.\n13+: Push 7 and deal 7 damage instead.",
        },
    ],
    styles: [brawling, flashy, knockdown, mad, taunting],
    alphaSuper: {
        name: "Knuckle Sandwich",
        desc: "Deal 5 damage to an adjacent enemy, then give them 4 Weakness tokens and your Challenge token. Then, Push them 3.",
    },
    deltaSuper: {
        name: "Everybody, Get 'Em!",
        desc: "Deal 3 damage to an adjacent enemy. Then, each of your allies in play (other than yourself) may each deal 3 damage to one enemy within their range.",
    },
};
