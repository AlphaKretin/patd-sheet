import { aura } from "../styles/phantom/aura";
import { crying } from "../styles/phantom/crying";
import { puppets } from "../styles/phantom/puppets";
import { spirit } from "../styles/phantom/spirit";
import { vortex } from "../styles/phantom/vortex";
import { Archetype } from "../types/Archetype";

export const phantom: Archetype = {
    name: "Phantom",
    focusedAbilities: [{ desc: "At the start of your turn, you gain 4 Poltergeist Tokens." }],
    fusedAbilities: [{ desc: "At the start of your turn, you gain 2 Poltergeist Tokens." }],
    franticAbilities: [{ desc: "At the start of this turn, you gain 4 Poltergeist Tokens." }],
    actions: [
        {
            name: "Telekinesis",
            cost: "1 Poltergeist Token",
            desc: "Choose one: Push 3 to an enemy or obstacle within range; -or- Pull 3 to an enemy or obstacle within range. If this movement ends with an enemy and an obstacle sharing a space, you deal 1 damage to that enemy.\nUsable once per turn.",
        },
    ],
    styles: [aura, crying, puppets, spirit, vortex],
    alphaSuper: {
        name: "Poltergeist Panic",
        desc: "You may move each Rubble or Trap you can see, up to three spaces each. Each must be moved into a different space - you cannot stack obstacles on top of each other. After you’ve finished moving obstacles, every enemy standing on an obstacle takes 3 damage, even if it wasn’t an obstacle you moved onto them.",
    },
    deltaSuper: {
        name: "Arcana Install",
        desc: "You gain 6 Poltergeist Tokens.\nUntil the end of this Round, you can spend up to 3 Poltergeist Tokens per Action, instead of only 2 per Action.\nUntil the end of this combat, at the start of your turn, you gain 2 Poltergeist Tokens.",
    },
};
