import { Style } from "../../types/Style";

export const syphon: Style = {
    name: "Syphon",
    minRange: 1,
    maxRange: 2,
    abilities: [
        "At the start and end of your turn, you may choose 1 token you hold. Either replace it with a Power token, or gain another copy of it.",
    ],
    actions: [
        {
            name: "Power Converter",
            cost: "2+ or 6+",
            desc: "Target a single token held by you or someone within range.\nChoose one or both: You steal the targeted token(s) from them; and/or replace the targeted token(s) with Power tokens.\n6+: Power Converter instead applies to every token they hold of the targeted token's type.",
        },
    ],
};
