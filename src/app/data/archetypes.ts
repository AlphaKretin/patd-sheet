import angel from "public/data/archetypes/angel.json";
import cavalry from "public/data/archetypes/cavalry.json";
import cyborg from "public/data/archetypes/cyborg.json";
import demon from "public/data/archetypes/demon.json";
import flametongue from "public/data/archetypes/flametongue.json";
import gunkata from "public/data/archetypes/gunkata.json";
import phantom from "public/data/archetypes/phantom.json";
import punk from "public/data/archetypes/punk.json";
import teacher from "public/data/archetypes/teacher.json";
import trickster from "public/data/archetypes/trickster.json";
import underdog from "public/data/archetypes/underdog.json";
import wardancer from "public/data/archetypes/wardancer.json";
import winterblossom from "public/data/archetypes/winterblossom.json";

import halcyon from "public/data/styles/angel/halcyon.json";
import judgment from "public/data/styles/angel/judgment.json";
import shining from "public/data/styles/angel/shining.json";
import singing from "public/data/styles/angel/singing.json";
import winged from "public/data/styles/angel/winged.json";
import charging from "public/data/styles/cavalry/charging.json";
import heroic from "public/data/styles/cavalry/heroic.json";
import jumping from "public/data/styles/cavalry/jumping.json";
import rallying from "public/data/styles/cavalry/rallying.json";
import unbreakable from "public/data/styles/cavalry/unbreakable.json";
import armored from "public/data/styles/cyborg/armored.json";
import incinerator from "public/data/styles/cyborg/incinerator.json";
import machine from "public/data/styles/cyborg/machine.json";
import rocket from "public/data/styles/cyborg/rocket.json";
import syphon from "public/data/styles/cyborg/syphon.json";
import dark from "public/data/styles/demon/dark.json";
import ogres from "public/data/styles/demon/ogres.json";
import slasher from "public/data/styles/demon/slasher.json";
import vampire from "public/data/styles/demon/vampire.json";
import zombie from "public/data/styles/demon/zombie.json";
import blazing from "public/data/styles/flametongue/blazing.json";
import explosion from "public/data/styles/flametongue/explosion.json";
import inferno from "public/data/styles/flametongue/inferno.json";
import phoenix from "public/data/styles/flametongue/phoenix.json";
import volcanic from "public/data/styles/flametongue/volcanic.json";
import chaotic from "public/data/styles/free/chaotic.json";
import circular from "public/data/styles/free/circular.json";
import dangerous from "public/data/styles/free/dangerous.json";
import ego from "public/data/styles/free/ego.json";
import eternal from "public/data/styles/free/eternal.json";
import feral from "public/data/styles/free/feral.json";
import grave from "public/data/styles/free/grave.json";
import mountainous from "public/data/styles/free/mountainous.json";
import mythical from "public/data/styles/free/mythical.json";
import persistent from "public/data/styles/free/persistent.json";
import secret from "public/data/styles/free/secret.json";
import silent from "public/data/styles/free/silent.json";
import akimbo from "public/data/styles/gunkata/akimbo.json";
import crosshair from "public/data/styles/gunkata/crosshair.json";
import fullmetal from "public/data/styles/gunkata/fullmetal.json";
import quickdraw from "public/data/styles/gunkata/quickdraw.json";
import ricochet from "public/data/styles/gunkata/ricochet.json";
import aura from "public/data/styles/phantom/aura.json";
import crying from "public/data/styles/phantom/crying.json";
import puppets from "public/data/styles/phantom/puppets.json";
import spirit from "public/data/styles/phantom/spirit.json";
import vortex from "public/data/styles/phantom/vortex.json";
import brawling from "public/data/styles/punk/brawling.json";
import flashy from "public/data/styles/punk/flashy.json";
import knockdown from "public/data/styles/punk/knockdown.json";
import mad from "public/data/styles/punk/mad.json";
import taunting from "public/data/styles/punk/taunting.json";
import decoy from "public/data/styles/teacher/decoy.json";
import elder from "public/data/styles/teacher/elder.json";
import mastermind from "public/data/styles/teacher/mastermind.json";
import patient from "public/data/styles/teacher/patient.json";
import training from "public/data/styles/teacher/training.json";
import caged from "public/data/styles/trickster/caged.json";
import hidden from "public/data/styles/trickster/hidden.json";
import mirrored from "public/data/styles/trickster/mirrored.json";
import parkour from "public/data/styles/trickster/parkour.json";
import whip from "public/data/styles/trickster/whip.json";
import collateral from "public/data/styles/underdog/collateral.json";
import distracting from "public/data/styles/underdog/distracting.json";
import lucky from "public/data/styles/underdog/lucky.json";
import misfortunes from "public/data/styles/underdog/misfortunes.json";
import scrambling from "public/data/styles/underdog/scrambling.json";
import artistic from "public/data/styles/wardancer/artistic.json";
import overwhelming from "public/data/styles/wardancer/overwhelming.json";
import relentless from "public/data/styles/wardancer/relentless.json";
import swift from "public/data/styles/wardancer/swift.json";
import weightless from "public/data/styles/wardancer/weightless.json";
import avalanche from "public/data/styles/winterblossom/avalanche.json";
import crystal from "public/data/styles/winterblossom/crystal.json";
import frozen from "public/data/styles/winterblossom/frozen.json";
import heartless from "public/data/styles/winterblossom/heartless.json";
import pressure from "public/data/styles/winterblossom/pressure.json";

import { Archetype } from "./types/Archetype";
import { Style } from "./types/Style";
export interface SavableArchetype extends Omit<Archetype, "styles"> {
    styles: string[];
}
const baseArchetypes: SavableArchetype[] = [
    angel,
    cavalry,
    cyborg,
    demon,
    flametongue,
    gunkata,
    phantom,
    punk,
    teacher,
    trickster,
    underdog,
    wardancer,
    winterblossom,
];

const styleMap: Record<string, Style> = {
    halcyon: halcyon,
    judgment: judgment,
    shining: shining,
    singing: singing,
    winged: winged,
    charging: charging,
    heroic: heroic,
    jumping: jumping,
    rallying: rallying,
    unbreakable: unbreakable,
    armored: armored,
    incinerator: incinerator,
    machine: machine,
    rocket: rocket,
    syphon: syphon,
    dark: dark,
    ogres: ogres,
    slasher: slasher,
    vampire: vampire,
    zombie: zombie,
    blazing: blazing,
    explosion: explosion,
    inferno: inferno,
    phoenix: phoenix,
    volcanic: volcanic,
    chaotic: chaotic,
    circular: circular,
    dangerous: dangerous,
    ego: ego,
    eternal: eternal,
    feral: feral,
    grave: grave,
    mountainous: mountainous,
    mythical: mythical,
    persistent: persistent,
    secret: secret,
    silent: silent,
    akimbo: akimbo,
    crosshair: crosshair,
    fullmetal: fullmetal,
    quickdraw: quickdraw,
    ricochet: ricochet,
    aura: aura,
    crying: crying,
    puppets: puppets,
    spirit: spirit,
    vortex: vortex,
    brawling: brawling,
    flashy: flashy,
    knockdown: knockdown,
    mad: mad,
    taunting: taunting,
    decoy: decoy,
    elder: elder,
    mastermind: mastermind,
    patient: patient,
    training: training,
    caged: caged,
    hidden: hidden,
    mirrored: mirrored,
    parkour: parkour,
    whip: whip,
    collateral: collateral,
    distracting: distracting,
    lucky: lucky,
    misfortunes: misfortunes,
    scrambling: scrambling,
    artistic: artistic,
    overwhelming: overwhelming,
    relentless: relentless,
    swift: swift,
    weightless: weightless,
    avalanche: avalanche,
    crystal: crystal,
    frozen: frozen,
    heartless: heartless,
    pressure: pressure,
};

function loadArchetypeStyles(archetype: SavableArchetype): Archetype {
    const styles = archetype.styles.map((style) => styleMap[style]);
    return { ...archetype, styles };
}

export const archetypes: Archetype[] = baseArchetypes.map(loadArchetypeStyles);
