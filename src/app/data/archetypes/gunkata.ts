import { akimbo } from "../styles/gunkata/akimbo";
import { crosshair } from "../styles/gunkata/crosshair";
import { fullmetal } from "../styles/gunkata/fullmetal";
import { quickdraw } from "../styles/gunkata/quickdraw";
import { richochet } from "../styles/gunkata/ricochet";
import { Archetype } from "../types/Archetype";

export const gunkata: Archetype = {
    name: "Gunkata",
    focusedAbilities: [
        {
            desc: "At the start and end of your turn, you perform one Gunslinger Action of your choice without paying its cost, from among those available to you in your current Stance.",
        },
    ],
    fusedAbilities: [
        {
            desc: "At the start -or- end of your turn, you perform one Gunslinger Action of your choice without paying its cost, from among those available to you in your current Stance.",
        },
    ],
    franticAbilities: [
        {
            desc: "At the start and end of this turn, you perform one Gunslinger Action of your choice without paying its cost, from among those available to you in your current Stance.",
        },
    ],
    actions: [
        {
            name: "Grape Shot",
            cost: "4+",
            desc: "This is a Gunslinger Action.\nDeal 1 damage to up to four enemies within range. Any target that takes 0 damage from Grape Shot is pushed 1 space.",
        },
        {
            name: "Slug Shot",
            cost: "5+",
            desc: "This is a Gunslinger Action.\nPush 4 and deal 2 damage to an enemy within range.",
        },
    ],
    styles: [akimbo, crosshair, fullmetal, quickdraw, richochet],
    alphaSuper: {
        name: "Sniping Point",
        desc: "Your maximum range is infinite, until the end of this Round. Then, deal 7 damage to an enemy within range.",
    },
    deltaSuper: {
        name: "Bullet Time",
        desc: "Choose an enemy within range. Deal 1 damage to that enemy and all adjacent enemies, then deal 1 damage to that enemy and all adjacent enemies, then deal 1 damage to that enemy and all adjacent enemies, then deal 1 damage to that enemy and all adjacent enemies, then deal 1 damage to that enemy and all adjacent enemies.",
    },
};
