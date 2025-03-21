import { Style } from "../../types/Style";

export const rocket: Style = {
    name: "Rocket",
    minRange: 1,
    maxRange: 1,
    abilities: [
        "After you Push, you may Teleport to an empty space adjacent to the target of that Push.",
        "At the start of your turn, you may Push 3 to an obstacle, ally, or enemy within range.",
    ],
    actions: [
        {
            name: "Nitro Boost",
            cost: "3+ or 6+",
            desc: "Teleport 2, then gain 2 Speed tokens.\n6+: Teleport 2, then gain 3 Speed tokens",
        },
        {
            name: "Rocket Tackle",
            cost: "3 Speed Tokens or 5 Speed Tokens",
            desc: "Push 2 to someone within range.\n5 Speed: If they are an ally, they Move up to 3. If they are an enemy, Push 2 and deal 2 damage to them.\nUsable once per turn.",
        },
    ],
};
