import { Freestyle } from "../../types/Style";

export const silent: Freestyle = {
    bannedForm: "Shadow",
    dice: [4, 4, 4],
    name: "Silent",
    minRange: 1,
    maxRange: 2,
    abilities: [
        { desc: "At the start and end of your turn, you gain 2 Speed tokens." },
        { desc: "At the start of each Movement Phase, you may Move 1." },
        { desc: "You do not discard any Speed tokens during the End Phase." },
    ],
    actions: [
        {
            name: "Stunt",
            cost: "3 Speed Tokens",
            desc: "Place one Fog, Copy, Pit or Trap obstacle into an adjacent space, then teleport 2.\nDuring enemy turns: usable once per turn.",
        },
    ],
};
