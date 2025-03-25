import { Style } from "../../types/Style";

export const aura: Style = {
    name: "Aura",
    minRange: 1,
    maxRange: 3,
    abilities: [
        { desc: "At the start of your turn, you gain Shield 3." },
        {
            desc: "After an enemy within range damages or breaks an ally’s Shield, or has their own Shield damaged or broken, you may Push 1 or Pull 1 to that enemy.",
        },
        { desc: "After a Shield within range breaks, you gain 1 Power token." },
    ],
    actions: [
        {
            name: "Aura Surge",
            cost: "4+ -or- 1 Poltergeist Token",
            desc: "Choose one: 1 ally within range gains Shield 3; -or- Remove up to 4 points of Shield from 1 enemy within range. If this breaks their Shield, deal 2 damage to them.",
        },
    ],
};
