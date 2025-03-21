import { Ability } from "./types/Ability";

export interface Build {
    name: string;
    abilities: Ability[];
}

export const builds: Build[] = [
    {
        name: "Brute",
        abilities: [
            "When you Bleed, you discard up to 6 Status Tokens you hold.",
            "Once per turn, after you move into an obstacle’s space, destroy all obstacles in that space and ignore their effects.",
        ],
    },
    {
        name: "Cryptid",
        abilities: [
            "At the start of each Round and when you Bleed, you may place Fog into your space or an adjacent space.",
        ],
    },
    {
        name: "Fool",
        abilities: ["At the start of each Round and when you Bleed, you may Move 3."],
    },
    {
        name: "Freak",
        abilities: [
            "When you Bleed, you may Pull yourself 2 towards an enemy you can see, then give 3 Fatigue tokens to an enemy within range.",
        ],
    },
    {
        name: "Grim",
        abilities: [
            "When you Bleed, you gain temporary Armor.",
            "Once per turn, after your Armor was triggered by an enemy Action, you may Push 2 to that enemy.",
        ],
    },
    {
        name: "Guardian",
        abilities: [
            "When you Bleed, up to three allies you can see each gain 1 Iron token. You may pay HP equal to the Heal Value to give them each 2 Iron Tokens instead.",
        ],
    },
    {
        name: "Hero",
        abilities: ["When you Bleed, you and one ally you can see each gain Shield 2."],
    },
    {
        name: "Leader",
        abilities: [
            "At the start of each Round, you may place up to 2 Copies into empty spaces within Range.",
            "When you Bleed, place a Copy within range, then teleport into an empty space adjacent to one of your Copies that you can see.",
        ],
    },
    {
        name: "Lightfoot",
        abilities: ["At the start of each Round and when you Bleed, you gain 2 Speed tokens and may Move 1."],
    },
    {
        name: "Monster",
        abilities: [
            "When you Bleed, give 3 Burning tokens to the enemy that made you Bleed. If this was triggered by damage that was not dealt by an enemy, give these Burning tokens to an enemy you can see.",
        ],
    },
    {
        name: "Powerhouse",
        abilities: [
            "When you Bleed, you gain 2 Power tokens. At the start of each Round, you may place Rubble within range.",
        ],
    },
    {
        name: "Rat",
        abilities: [
            "At the start of each Round, you may place a Trap within range.",
            "When you Bleed, you may place a Pit into an adjacent space.",
        ],
    },
    {
        name: "Scarred",
        abilities: [
            "At the start of each Round, you give 1 Weakness token to up to two enemies you can see.",
            "When you Bleed, give 1 Weakness token to each enemy you can see.",
        ],
    },
    {
        name: "Temple",
        abilities: ["When you Bleed, you heal.", "Your first Health Bar has additional HP equal to the Bleed Value."],
    },
];
