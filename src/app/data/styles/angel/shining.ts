import { Style } from "../../types/Style";

export const shining: Style = {
    name: "Shining",
    minRange: 1,
    maxRange: 1,
    abilities: [
        { desc: "At the start of your turn, Push 1 to all obstacles and enemies adjacent to you." },
        { desc: "Enemies cannot use Action Movement, Free Movement, or teleports to enter a space adjacent to you." },
        {
            desc: "If an enemy discards your Challenge token using an enemy Action or Ability, the enemy who held the token takes 3 damage.",
        },
    ],
    actions: [
        {
            name: "Beacon",
            cost: "1+ or 4+",
            desc: "Pull up to 4 to an ally you can see, other than yourself.\n4+, Once per turn: You and that ally heal.",
        },
        {
            name: "Blinding Light",
            cost: "2+ or 5+",
            desc: "Challenge an adjacent enemy, then Push 1 and give them 1 Burning token.\n5+: Instead, Push 3 and give them 3 Burning tokens.",
        },
    ],
};
