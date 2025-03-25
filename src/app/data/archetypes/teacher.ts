import { decoy } from "../styles/teacher/decoy";
import { elder } from "../styles/teacher/elder";
import { mastermind } from "../styles/teacher/mastermind";
import { patient } from "../styles/teacher/patient";
import { training } from "../styles/teacher/training";
import { Archetype } from "../types/Archetype";

export const teacher: Archetype = {
    name: "Teacher",
    focusedAbilities: [{ desc: "At the start of your turn, you gain 2 Mentor Tokens." }],
    fusedAbilities: [{ desc: "At the start of your turn, you gain 1 Mentor Token." }],
    franticAbilities: [{ desc: "At the start of this turn, you gain 2 Mentor Tokens." }],
    actions: [
        {
            name: "Remember Your Training",
            cost: "1 Mentor Token",
            desc: "The active character heals 1, then performs a Unique Action available to their current Stance, without paying its cost. For the purposes of Gates or the value of X, use a value of 4.\nUsable once per turn, only during allies’ turns.\nUsable while you are Taken Out.",
        },
    ],
    styles: [decoy, elder, mastermind, patient, training],
    alphaSuper: {
        name: "My Final Technique",
        desc: "Deal 99 damage to an enemy within range, then remove yourself from play for the rest of combat. You cannot come back.",
    },
    deltaSuper: {
        name: "Transcendant Spirit",
        desc: "When you pass on your Heroic Spirit, you may declare you are using this Super Move. If you do, instead of rolling your Action Dice this turn, give them the maximum number each of those dice could have generated. Then, add an 8 to their Action Pool, give them a 4-point Shield, and they heal.",
    },
};
