import { Style } from "../../types/Style";

export const artistic: Style = {
    name: "Artistic",
    minRange: 1,
    maxRange: 2,
    abilities: [
        "At the start of your turn, you gain 2 Iron tokens.",
        "After you deal damage to, or Reduce a Hit from, an enemy, you may spend 1 Iron token to give them 1 Status token of your choice.",
    ],
    actions: [
        {
            name: "Poetry In Motion",
            cost: "2+ or 4+ or 7+",
            desc: "Move 1 and gain 1 Iron token.\n4+: Move up to 2, gain 1 Iron token, and gain 1 Power token.\n7+: Move up to 3, gain 1 Iron token, and gain 1 Power token.",
        },
    ],
};
