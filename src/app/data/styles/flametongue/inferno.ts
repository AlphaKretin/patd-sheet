import { Style } from "../../types/Style";

export const inferno: Style = {
    name: "Inferno",
    minRange: 1,
    maxRange: 2,
    abilities: [
        "You have Armor against damage from Burning tokens.",
        "After you Reduce a Hit, give 1 Burning token to your attacker.",
    ],
    actions: [
        {
            name: "Flame Guard",
            cost: "Pay 1 HP",
            desc: "You can only use Flame Guard while you hold no Iron tokens.\nYou gain 2 Iron tokens.\nUsable once per turn.",
        },
        {
            name: "Heat Beam",
            cost: "4+",
            desc: "Unblockable.\nDeal 3 damage to an enemy you can see that is holding at least 2 Burning tokens, then they discard 2 Burning tokens.",
        },
    ],
};
