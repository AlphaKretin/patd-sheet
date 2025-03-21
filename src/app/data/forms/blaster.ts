import { Form } from "../types/Form";

export const blaster: Form = {
    name: "Blaster",
    greenDice: [8, 8],
    purpleDice: [8],
    abilities: [
        "Your Actions may apply to one extra target within range.",
        "When you add Blaster Form to as Style, increase that Style's maximum range by 1.",
    ],
    actions: [
        {
            name: "Amplify",
            cost: "Pay 2 HP",
            desc: "Your next Action this turn has its maximum range increased by 3, and may apply to one additional target.",
        },
        {
            name: "Shockwave",
            cost: "3+ or 6+",
            desc: "Unblockable by Armor and Shields.\nDeal 1 damage to each enemy within range.\n6+: Deal 2 damage to one enemy within range.",
        },
    ],
    skill: {
        name: "Basically Magic",
        desc: "You have an ability that's beyond normal, like lycanthropy, telekinesis, firem agic, ghost powers, or something else. When you take this skill, write down what kind of power you have.",
    },
};
