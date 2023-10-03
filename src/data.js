// ENEMIES

import spikeball from './assets/spike_ball.png'
import rotar from './assets/flippy.png'
import jelly from './assets/jelly.png'
import explodo from './assets/explodo.png'

import sentry from './assets/sentry.png'
import purple_worm from './assets/purp-worm.png'
import giant_spikeball from './assets/spikeball_giant.png'
import trilobyte from './assets/trilobyte.png'

import cyberball from './assets/cyber_spikeball.png'
import blasto from './assets/blasto.png'
import giant_cyberball from './assets/giant_cyber_spikeball.png'
import delto from './assets/delto.png'

import virovore from './assets/virovore.png'
import giant_virovore from './assets/virovore_giant.png'
import quantoid from './assets/quantoid.png'
import executor from './assets/executor.png'

// GUITARS

import guitar_rapid from './assets/Guitar_Rapid.png'
import bullet_rapid from './assets/bullet_rapid.png'

import guitar_spread from './assets/Guitar_Spread.png'
import bullet_spread from './assets/bullet_spread.png'

import guitar_sonic from './assets/Guitar_Sonic.png'
import bullet_sonic from './assets/bullet_sonic.png'

import guitar_helix from './assets/Guitar_Helix.png'
import bullet_helix from './assets/bullet_helix.png'

import guitar_electro from './assets/Guitar_Electro.png'
import bullet_electro from './assets/bullet_electro.png'

import guitar_laser from './assets/Guitar_Laser.png'
import bullet_laser from './assets/bullet_laser.png'

// MASKS

import mask_monkey from './assets/mask_monkey.png'
import mask_chrono from './assets/mask_chrono.png'
import mask_dragon from './assets/mask_dragon.png'
import mask_paladin from './assets/mask_paladin.png'
import mask_kahuna from './assets/mask_kahuna.png'
import mask_demon from './assets/mask_demon.png'

// PICKUPS

import mana_packet from './assets/mana.png'
import crush_rune from './assets/rune.png'
import guitar from './assets/guitar.png'
import mask from './assets/mask.png'
import mana_relic from './assets/mana_relic.png'
import extra_continue from './assets/continue.png'
import mana_recharge from './assets/infinite_mana.png'
import double_guitar from './assets/double_guitar.png'

// WORLDMAP

import noise from './assets/screenshots/noise.png'
import shredonia from './assets/screenshots/shredonia.png'
import meteorvoid from './assets/screenshots/meteor_void_1.png'
import fluviousA from './assets/screenshots/fluvious-falls-a.png'
import shrineChrono from './assets/screenshots/shrine-chrono.png'
import warpgateYellow from './assets/screenshots/warpgate-yellow.png'
import blokoCavern from './assets/screenshots/bloko_cavern.png'
import gnarnia from './assets/screenshots/gnarnia.png'
import warpgateBlue from './assets/screenshots/warpgate-blue.png'
import guitarBlue from './assets/screenshots/guitar-blue.png'

export const markersData = [
  {

// SHREDONIA ISLAND

    id: 'shredonia',
    name: 'SHREDONIA',
    left: '37.75%',
    top: '11.75%',
    size: 'large',
    image: shredonia,
    leveldifficulty: 'HARD',
    leveldesc: 'This is a fast level with a focus on dodging obstacles such as spikes which shoot off the walls.',
    additionalData: '...',
    
  },

  {
    id: 'warpgate-yellow',
    name: 'YELLOW WARPGATE',
    left: '31.75%',
    top: '12%',
    size: '',
    image: warpgateYellow,
    leveldifficulty: 'N/A',
    leveldesc: 'This warpgate leads to the eastern edge of Cyber Zone where you will find the Cyan Guitar.',
    additionalData: '...',
    
  },

  {
    id: 'shrine-chrono',
    name: 'CHRONO MASK',
    left: '43.75%',
    top: '12%',
    size: '',
    image: shrineChrono,
    leveldifficulty: 'N/A',
    leveldesc: 'This shrine unlocks the Chrono Mask, granting you time warping powers.',
    additionalData: '...',
  },

  {
    id: 'astroid-void-1',
    name: 'METEOR VOID',
    left: '37.75%',
    top: '20%',
    size: '',
    image: meteorvoid,
    leveldifficulty: 'MEDIUM',
    leveldesc: `There are gnarly meteor showers in this void. Sometimes it's best to just avoid 'em because they break into fragments when destroyed.`,
    additionalData: '...',
  },

// CYAN ZONE

   {
    id: 'fluvious-falls',
    name: 'FLUVIOUS FALLS',
    left: '41.5%',
    top: '35%',
    size: 'large',
    image: fluviousA,
    leveldifficulty: 'MEDIUM',
    leveldesc: `There are lots of Explodos and Sentries here, so you may want to shoot strategically rather than going in guns blazing.`,
    additionalData: '...',
    
  },

  {
    id: 'bloko-cavern',
    name: 'BLOKO CAVERN',
    left: '48%',
    top: '40%',
    size: 'large',
    image: blokoCavern,
    leveldifficulty: 'MEDIUM',
    leveldesc: `This is a large cavern to explore. Unlike most levels, this one actually scrolls vertically rather than wrapping on the edges of the screen.`,
    additionalData: '...',
  },

  {
    id: 'gnarnia',
    name: 'GNARIA',
    left: '56.5%',
    top: '31.5%',
    size: 'large',
    image: gnarnia,
    leveldifficulty: 'MEDIUM',
    leveldesc: `This is a fast level with a focus on dodging obstacles such as spikes which shoot off the walls.`,
    additionalData: '...',
  },

  {
    id: 'warpgate-blue',
    name: 'BLUE WARPGATE',
    left: '45.75%',
    top: '30%',
    size: '',
    image: warpgateBlue,
    leveldifficulty: 'N/A',
    leveldesc: `This warpgate leads to a weird area known as Flux Zone.`,
    additionalData: '...',
  },

  {
    id: 'guitar-blue',
    name: 'BLUE GUITAR',
    left: '51.75%',
    top: '29.25%',
    size: '',
    image: guitarBlue,
    leveldifficulty: 'N/A',
    leveldesc: `This shrine unlocks the Helix Guitar.`,
    additionalData: '...',
  },

// GREEN ZONE

  {
    id: 'digitemple-1',
    name: 'DIGITEMPLE 1',
    left: '53.5%',
    top: '69.5%',
    size: '',
    image: noise,
    leveldifficulty: 'EASY',
    leveldesc: `The first level in the game. Even a drunken one-armed monkey could beat this one.`,
    additionalData: '...',
  },

  {
    id: 'digitemple-2',
    name: 'DIGITEMPLE 2',
    left: '48%',
    top: '69.5%',
    size: '',
    image: noise,
    leveldifficulty: 'EASY',
    leveldesc: `Here's a witty description of this level.`,
    additionalData: '...',
  },

  {
    id: 'digitemple-3',
    name: 'DIGITEMPLE 3',
    left: '51.75%',
    top: '59.5%',
    size: '',
    image: noise,
    leveldifficulty: 'EASY',
    leveldesc: `The first level in the game. Even a drunken one-armed monkey could beat this one.`,
    additionalData: '...',
  },

  {
    id: 'guitar-yellow',
    name: 'YELLOW GUITAR',
    left: '54.75%',
    top: '59.5%',
    size: '',
    image: noise,
    leveldifficulty: 'N/A',
    leveldesc: `This shrine unlocks the Spread Guitar.`,
    additionalData: '...',
  },

   {
    id: 'bloko-reef',
    name: 'BLOKO REEF',
    left: '41%',
    top: '66%',
    size: 'large',
    image: noise,
    leveldifficulty: 'EASY',
    leveldesc: `Here's a witty description of this level.`,
    additionalData: '...',
  },

  {
    id: 'nebular-void',
    name: 'NEBULAR VOID',
    left: '48%',
    top: '56%',
    size: '',
    image: noise,
    leveldifficulty: 'MED',
    leveldesc: `Here's a witty description of this level.`,
    additionalData: '...',
  },

  {
    id: 'shrine-monkey',
    name: 'MONKEY MASK',
    left: '37.25%',
    top: '64%',
    size: '',
    image: noise,
    leveldifficulty: 'N/A',
    leveldesc: 'This shrine unlocks the Monkey Mask, granting you a savage boost to your speed.',
    additionalData: '...',
  },
  
  {
    id: 'guitar-red',
    name: 'RED GUITAR',
    left: '59.75%',
    top: '74%',
    size: '',
    image: noise,
    leveldifficulty: 'N/A',
    leveldesc: `This shrine unlocks the Rapid Guitar.`,
    additionalData: '...',
  },
  
// GREEN ZONE EXT

   {
    id: 'cybergate',
    name: 'CYBERGATE',
    left: '48.75%',
    top: '84%',
    size: 'large',
    image: noise,
    leveldifficulty: 'N/A',
    leveldesc: `This gate will activate once you have collected the 5 cryptogems. Use it to transport to the final zone and beat the game!`,
    additionalData: '...',
  }, 

  {
    id: 'shrine-dragon',
    name: 'DRAGON MASK',
    left: '36%',
    top: '75.5%',
    size: '',
    image: noise,
    leveldifficulty: 'N/A',
    leveldesc: 'This shrine unlocks the Dragon Mask which sprays nearby enemies with fire.',
    additionalData: '...',
  },
  
// BLOKOPOLIS

  {
    id: 'blokopolis-1',
    name: 'BLOKOPOLIS 1',
    left: '33.75%',
    top: '50%',
    size: '',
    image: noise,
    leveldifficulty: 'MED',
    leveldesc: `Here's a witty description of this level.`,
    additionalData: '...',
  },

  {
    id: 'blokohub',
    name: 'BLOKOHUB',
    left: '30%',
    top: '52.5%',
    size: '',
    image: noise,
    leveldifficulty: 'MED',
    leveldesc: `Here's a witty description of this level.`,
    additionalData: '...',
  },

  {
    id: 'blokopolis-2',
    name: 'BLOKOPOLIS 2',
    left: '24%',
    top: '52.5%',
    size: '',
    image: noise,
    leveldifficulty: 'MED',
    leveldesc: `Here's a witty description of this level.`,
    additionalData: '...',
  },

  {
    id: 'blokopolis-3',
    name: 'BLOKOPOLIS 3',
    left: '18%',
    top: '52.5%',
    size: '',
    image: noise,
    leveldifficulty: 'MED',
    leveldesc: `Here's a witty description of this level.`,
    additionalData: '...',
  },

  {
    id: 'fractopolis',
    name: 'FRACTOPOLIS 1',
    left: '24%',
    top: '42.25%',
    size: 'large',
    image: noise,
    leveldifficulty: 'HARD',
    leveldesc: `Here's a witty description of this level.`,
    additionalData: '...',
  },

  {
    id: 'fractoplex',
    name: 'FRACTOPLEX',
    left: '21%',
    top: '36.5%',
    size: 'large',
    image: noise,
    leveldifficulty: 'HARD',
    leveldesc: `Here's a witty description of this level.`,
    additionalData: '...',
  },

  {
    id: 'blokoplex',
    name: 'BLOKOPLEX',
    left: '15%',
    top: '48.25%',
    size: '',
    image: noise,
    leveldifficulty: 'HARD',
    leveldesc: `Here's a witty description of this level.`,
    additionalData: '...',
  },

  {
    id: 'nucleus',
    name: 'NUCLEUS',
    left: '13.5%',
    top: '38%',
    size: 'large',
    image: noise,
    leveldifficulty: 'BOSS',
    leveldesc: `Here's a witty description of this level.`,
    additionalData: '...',
  },

  {
    id: 'guitar-green',
    name: 'GREEN GUITAR',
    left: '27.5%',
    top: '40%',
    size: '',
    image: noise,
    leveldifficulty: 'N/A',
    leveldesc: `This shrine unlocks the Laser Guitar.`,
    additionalData: '...',
  },

  {
    id: 'warpgate-green-bloko',
    name: 'GREEN WARPGATE',
    left: '27.5%',
    top: '32.5%',
    size: '',
    image: noise,
    leveldifficulty: 'N/A',
    leveldesc: `This warpgate leads to somewhere.`,
    additionalData: '...',
  },

  {
    id: 'warpgate-cyan',
    name: 'CYAN WARPGATE',
    left: '33.25%',
    top: '42.25%',
    size: '',
    image: noise,
    leveldifficulty: 'N/A',
    leveldesc: `This warpgate leads to somewhere.`,
    additionalData: '...',
  },

  {
    id: 'astroid-void-2',
    name: 'METEOR VOID',
    left: '30%',
    top: '64.5%',
    size: '',
    image: meteorvoid,
    leveldifficulty: 'MEDIUM',
    leveldesc: `There are gnarly meteor showers in this void. Sometimes it's best to just avoid 'em because they break into fragments when destroyed.`,
    additionalData: '...',
  },

  {
    id: 'aurora-digitalis',
    name: 'AURORA DIGITALIS',
    left: '24%',
    top: '72%',
    size: 'large',
    image: noise,
    leveldifficulty: 'HARD',
    leveldesc: `Here's a witty description of this level.`,
    additionalData: '...',
  },

  {
    id: 'fractopolis-2',
    name: 'FRACTOPOLIS 2',
    left: '13%',
    top: '72%',
    size: 'large',
    image: noise,
    leveldifficulty: 'HARD',
    leveldesc: `Here's a witty description of this level.`,
    additionalData: '...',
  },

  {
    id: 'warpgate-orange',
    name: 'ORANGE WARPGATE',
    left: '9.5%',
    top: '57.5%',
    size: '',
    image: noise,
    leveldifficulty: 'N/A',
    leveldesc: `This warpgate leads to somewhere.`,
    additionalData: '...',
  },


// CYAN ZONE EXT

  {
    id: 'guitar-purple',
    name: 'PURPLE GUITAR',
    left: '64.5%',
    top: '38%',
    size: '',
    image: noise,
    leveldifficulty: 'N/A',
    leveldesc: `This shrine unlocks the Sonic Guitar.`,
    additionalData: '...',
  },

  {
    id: 'buboid-void',
    name: 'BUBOID VOID',
    left: '64.5%',
    top: '46%',
    size: '',
    image: noise,
    leveldifficulty: 'MED',
    leveldesc: `Here's a witty description of this level.`,
    additionalData: '...',
  },

  {
    id: 'buboid-cavern',
    name: 'BUBOID CAVERN',
    left: '78.5%',
    top: '31.5%',
    size: 'large',
    image: noise,
    leveldifficulty: 'HARD',
    leveldesc: `Here's a witty description of this level.`,
    additionalData: '...',
  },

  {
    id: 'warpgate-purple',
    name: 'PURPLE WARPGATE',
    left: '84.5%',
    top: '37.25%',
    size: '',
    image: noise,
    leveldifficulty: 'N/A',
    leveldesc: `This warpgate leads to somewhere.`,
    additionalData: '...',
  },
  


// CRYSTAL ZONE

  {
    id: 'krystal-zone-1',
    name: 'KRYSTAL ZONE 1',
    left: '61.5%',
    top: '50%',
    size: '',
    image: noise,
    leveldifficulty: 'MED',
    leveldesc: `Here's a witty description of this level.`,
    additionalData: '...',
  },

  {
    id: 'krystal-zone-2',
    name: 'KRYSTAL ZONE 2',
    left: '66.25%',
    top: '54%',
    size: '',
    image: noise,
    leveldifficulty: 'MED',
    leveldesc: `Here's a witty description of this level.`,
    additionalData: '...',
  },

  {
    id: 'krystal-zone-3',
    name: 'KRYSTAL ZONE 3',
    left: '71.75%',
    top: '54%',
    size: '',
    image: noise,
    leveldifficulty: 'MED',
    leveldesc: `Here's a witty description of this level.`,
    additionalData: '...',
  },

  {
    id: 'krystoplex',
    name: 'KRYSTOPLEX',
    left: '73%',
    top: '66%',
    size: 'large',
    image: noise,
    leveldifficulty: 'HARD',
    leveldesc: `Here's a witty description of this level.`,
    additionalData: '...',
  },

  {
    id: 'krysallix',
    name: 'KRYSALLIX',
    left: '67.5%',
    top: '66%',
    size: 'large',
    image: noise,
    leveldifficulty: 'BOSS',
    leveldesc: `Here's a witty description of this level.`,
    additionalData: '...',
  },

  {
    id: 'shrine-paladin',
    name: 'PALADIN MASK',
    left: '87.5%',
    top: '54%',
    size: '',
    image: noise,
    leveldifficulty: 'N/A',
    leveldesc: 'This shrine unlocks the Paladin Mask, surrounding you in deadly protective orbs.',
    additionalData: '...',
  },

  {
    id: 'warpgate-green-krystal',
    name: 'GREEN WARPGATE',
    left: '76%',
    top: '49%',
    size: '',
    image: noise,
    leveldifficulty: 'N/A',
    leveldesc: `This warpgate leads to somewhere.`,
    additionalData: '...',
  },



];
















// ENEMIES

export const enemyData = [

  { id: 1, image: spikeball, name: "SPIKEBALL", hp: "2", pts: "2", dngr: "LOW", 
desc: "One of the most common enemies you'll encounter. Watch out because it'll change direction to try and intercept you."},
  { id: 2, image: rotar, name: "ROTAR", hp: "1", pts: "2", dngr: "LOW", 
desc: "Floats around minding it’s own business. Will try to fly away from your bullets."},
  { id: 3, image: jelly, name: "JELLY", hp: "2", pts: "4", dngr: "LOW",
desc: "Watch out, this guy will charge at you if you get too close."},
  { id: 4, image: explodo, name: "EXPLODO", hp: "1", pts: "8", dngr: "MED",
desc: "Think twice before blasting this guy. It fires bullets in all directions when it dies."},

   { id: 5, image: sentry, name: "SENTRY", hp: "2", pts: "8", dngr: "MED",
desc: "This thing mimics your firing patterns so don't spray to many bullets around it"},
  { id: 6, image: purple_worm, name: "PURPLE WORM", hp: "2", pts: "16", dngr: "LOW",
desc: "It’s big but dopey. It just wanders around and bumps into things. Aim for the head."},
   { id: 7, image: giant_spikeball, name: "GIANT SPIKEBALL", hp: "5", pts: "12", dngr: "MED",   
desc: "It’s a Spikeball, but bigger."},
  { id: 8, image: trilobyte, name: "TRILOBYTE", hp: "3", pts: "12", dngr: "MED",
desc: "These things are somewhat rare. They fire lots of bullets, so it’s best to take em out quickly."},

{ id: 9, image: cyberball, name: "CYBERBALL", hp: "2", pts: "4", dngr: "MED",
desc: "Enhanced Spikeballs that fire bullets."},
  { id: 10, image: blasto, name: "BLASTO", hp: "1", pts: "16", dngr: "MED",
desc: "Stand clear! This thing detonates when it dies, destroying anything near it."},
   { id: 11, image: giant_cyberball, name: "GIANT CYBERBALL", hp: "5", pts: "14", dngr: "HI",
desc: "This is the biggest, baddest Spikeball around. You’ve been warned."},
  { id: 12, image: delto, name: "DELTO", hp: "1", pts: "12", dngr: "LOW",
desc: "Fast moving little guys that fire. They tend to come in fleets."},

{ id: 13, image: virovore, name: "VIROVORE", hp: "1", pts: "4", dngr: "MED",
desc: "These things come out of the walls and chase after you. Get out of their line of sight if you want to escape."},
  { id: 14, image: giant_virovore, name: "GIANT VIROVORE", hp: "3", pts: "24", dngr: "XTR",
desc: "If you aren’t powered up, your best bet is to run or hide when you see this thing."},
   { id: 15, image: quantoid, name: "QUANTOID", hp: "5", pts: "24", dngr: "XTR",
desc: "This thing teleports and hunts you relentlessly with homing bullets. Kill it before it kills you."},
  { id: 16, image: executor, name: "EXECUTOR", hp: "8", pts: "48", dngr: "XTR",
desc: "You’ll need some serious firepower if you’re going to face down one of these. Watch out - its bullets create deadly explosions on impact."},

];

// GUITARS

export const guitarData = [

  { id: 1, image: guitar_rapid, bulletImage: bullet_rapid, name: "RAPID", dmg: "1", rate: "4", ammo: "24", 
desc: "Standard-issue rapid-fire guitar. It fires your default bullets at a quicker rate."},
{ id: 2, image: guitar_spread, bulletImage: bullet_spread, name: "SPREAD", dmg: "1x3", rate: "2", ammo: "20", 
desc: "A favorite guitar of people who don’t like aiming, it fires three default bullets at once in a spread formation. "},
{ id: 3, image: guitar_sonic, bulletImage: bullet_sonic, name: "SONIC", dmg: "2", rate: "2", ammo: "16", 
desc: "Fires a wave of large slow moving bullets that can blast through groups of smaller enemies. Sonic bullets lose power the further they travel."},
{ id: 4, image: guitar_helix, bulletImage: bullet_helix, name: "HELIX", dmg: "2*", rate: "2", ammo: "16", 
desc: "Launches a fast moving bullet orbited by two smaller bullets. * Orbiter bullets do an additional 1 damage each."},
{ id: 5, image: guitar_electro, bulletImage: bullet_electro, name: "ELECTRO", dmg: "3*", rate: "1.5", ammo: "12", 
desc: "Electro bullets create explosions on impact. Great for blasting groups. * Explosions deal up to an additional 2 damage."},
{ id: 6, image: guitar_laser, bulletImage: bullet_laser, name: "LASER", dmg: "4", rate: "1", ammo: "10", 
desc: "The laser instaneously deals massive damage to anything in its path. The best weapon for dealing with tougher enemies."},

];

// MASKS

export const maskData = [

  { id: 1, image: mask_monkey, name: "MONKEY", manaUsage: "0.2 / SEC", 
desc: "This mask gives you a savage boost to your firing and movement speed while it's active."},
  { id: 2, image: mask_chrono, name: "CHRONO", manaUsage: " 12 + 0.3 / SEC", 
desc: "Activating this mask slows down time itself, allowing you to easily avoid danger. "},
  { id: 3, image: mask_dragon, name: "DRAGON", manaUsage: "0.3 / SEC", 
desc: "Fry nearby enemies with this mask’s firey attack. It locks on to anything in your vacinity. "},
  { id: 4, image: mask_paladin, name: "PALADIN", manaUsage: "0.3 / SEC", 
desc: "This mask surrounds you with protective orbs which destroy enemies and incoming bullets."},
  { id: 5, image: mask_kahuna, name: "KAHUNA", manaUsage: "5 + 0.5 / SEC", 
desc: "Activating this mask generates a forcefield which protects you from enemies and deflects their bullets. "},
  { id: 6, image: mask_demon, name: "DEMON", manaUsage: "0.3 / SEC", 
desc: "Unleash a wave of destruction with this mask’s attack. The longer you charge it, the bigger the bullet."},

];

// PICKUPS

export const pickupData = [

  { id: 1, image: mana_packet, name: "MANA PACKET", pts: "8", 
desc: "These things are everywhere. Each one recharges your mana by 4 points."},
  { id: 2, image: crush_rune, name: "CRUSH RUNE", pts: "16", 
desc: "These grant you Crush Power. Try to collect all 5 of them to spell the word ‘CRUSH’. The more you have, the greater the effect. Each one also recahrges your mana by 6 points. "},
  { id: 3, image: guitar, name: "GUITAR", pts: "8", 
desc: "Collect guitars to increase your firepower. Each pick-up gives you a limited amount of ammo."},
  { id: 4, image: mask, name: "MASK", pts: "16", 
desc: "Masks protect you by absorbing one hit. There are 6 different masks and each grants you a unique special ability."},
  { id: 5, image: mana_relic, name: "MANA RELIC", pts: "96", 
desc: "This item increases your overall mana capacity, as well as recharging your mana to its maximum."},
  { id: 6, image: extra_continue, name: "EXTRA CONTINUE", pts: "128", 
desc: "Only appears in aracade mode. Your going to want to collect these if you plan on dying a lot."},
  { id: 7, image: mana_recharge, name: "MANA RECHARGE", pts: "96", 
desc: "This power-up slowly recharges your mana over time."},
  { id: 8, image: double_guitar, name: "DOUBLE GUITAR", pts: "96", 
desc: "This power-up transforms your standard guitar into a two-necked guitar, increasing your firing rate."},

];