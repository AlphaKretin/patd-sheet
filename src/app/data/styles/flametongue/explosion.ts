import { Style } from "../../types/Style";

export const explosion: Style = {
    name: "Explosion",
    minRange: 1,
    maxRange: 2,
    abilities: [
        {
            desc: "After you perform an Action that destroyed any obstacles, deal 1 damage to all enemies on or adjacent to any of those obstacles.",
        },
    ],
    actions: [
        {
            name: "Demolition",
            cost: "3+ or 5+ or 7+",
            desc: "Choose one: Place a Pit into a space within range; -or- place 2 Traps into spaces within range; -or- destroy up to 3 obstacles within range.\n5+: Choose two instead.\n7+: Choose three instead.",
        },
        {
            name: "Ka-Boom!",
            cost: "2+ or 4+ or 6+",
            desc: "Place Rubble into an adjacent space, then destroy it. Push yourself 2 spaces away from that Rubble.\n4+: Place Rubble into an adjacent space, then destroy it. Push yourself 2 or 3 spaces away from that Rubble.\n6+: Place Rubble into an adjacent space, then destroy it. Push yourself up to 3 spaces away from that Rubble.",
        },
    ],
};
