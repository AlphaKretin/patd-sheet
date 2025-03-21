import { Style } from "../../types/Style";

export const dark: Style = {
    name: "Dark",
    minRange: 2,
    maxRange: 4,
    abilities: [
        "You can see and target enemies through Fog.",
        "At the end of your turn, place a Fog obstacle into your space.",
    ],
    actions: [
        {
            name: "Darkness Dawns",
            cost: "4+",
            desc: "Place one or two Fog obstacles into empty spaces within range. You may teleport to an empty space within those Fog obstacles.",
        },
        {
            name: "Twilight Sorrow",
            cost: "4+",
            desc: "Each enemy standing within Fog gains 1 Weakness token and 1 Fatigue token. Then, you gain 3 Speed tokens.",
        },
    ],
};
