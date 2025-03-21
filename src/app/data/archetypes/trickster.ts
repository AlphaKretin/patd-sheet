import { caged } from "../styles/trickster/caged";
import { hidden } from "../styles/trickster/hidden";
import { mirrored } from "../styles/trickster/mirrored";
import { parkour } from "../styles/trickster/parkour";
import { whip } from "../styles/trickster/whip";
import { Archetype } from "../types/Archetype";

export const trickster: Archetype = {
    name: "Trickster",
    focusedAbilities: [
        "At the start of each turn, you may target 1 non-Unique token held by someone within range of you or your Copies, then choose one or both:\nSteal the chosen token; -and/or-\nConvert the chosen token into an Iron token.",
    ],
    fusedAbilities: [
        "At the start of each allied turn, you may target 1 non-Unique token held by someone within range of you or your Copies, then choose one or both:\nSteal the chosen token; -and/or-\nConvert the chosen token into an Iron token.",
    ],
    franticAbilities: [
        "Until your next turn, at the start of each turn, you may target 1 non-Unique token held by someone within range of you or your Copies, then choose one or both:\nSteal the chosen token; -and/or-\nConvert the chosen token into an Iron token.",
    ],
    actions: [
        {
            name: "Bag of Tricks",
            cost: "???",
            desc: "Bag of Tricks can be used as either a Dice Action or a Token Action.\nTo pay for Bag of Tricks, choose one or more: Spend a 2+ and 1 HP; -or- Spend a 3+; -or- spend 2 Iron tokens; -or- spend 3 Speed tokens; -or- pay 3 HP.\nX is equal to the number of costs paid. Choose X: Create a Copy within range and swap spaces with it; -or- Create a Pit Trap in an empty space within range; -or- Move up to 2, then swap spaces with an obstacle within range; -or- Pull 3 to an enemy you can see and they discard 1 token; -or- Give 2 Weakness tokens to an enemy within range.\nUsable once per turn.",
        },
    ],
    styles: [caged, hidden, mirrored, parkour, whip],
    alphaSuper: {
        name: "Funny Little Box Of Pain",
        desc: "Target an enemy at Range 2. Push everyone adjacent to the target one space. Then, place Walls into each space adjacent to the target, place a Deadly Trap beneath them, and give them 5 Fatigue tokens.",
    },
    deltaSuper: {
        name: "Steal Strength",
        desc: "Target an adjacent character. They discard all tokens they hold, and you gain Iron tokens equal to the number of tokens discarded.",
    },
};
