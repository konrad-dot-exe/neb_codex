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

import screenshot from './assets/screenshot.png'
import screenshot2 from './assets/screenshot2.png'
import screenshot3 from './assets/screenshot3.png'

export const markersData = [
  {
    id: 'shredonia',
    name: 'SHREDONIA',
    left: '37.75%',
    top: '11.75%',
    size: 'large',
    image: screenshot,
    leveldifficulty: 'HARD',
    leveldesc: 'This level is super hard and you will die over and over again. You should just not even try.',
    additionalData: '...',
    
  },

  {
    id: 'warpgate-yellow',
    name: 'YELLOW WARPGATE',
    left: '31.75%',
    top: '12%',
    size: '',
    image: screenshot2,
    leveldifficulty: 'N/A',
    leveldesc: 'This warpgate leads to the eastern edge of Cyber Zone.',
    additionalData: '...',
    
  },

  {
    id: 'shrine-chrono',
    name: 'CHRONO SHRINE',
    left: '43.75%',
    top: '12%',
    size: '',
    image: screenshot3,
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
    image: screenshot,
    leveldifficulty: 'MEDIUM',
    leveldesc: `There are gnarly meteor showers in this void. Sometimes it's best to just dodge meteors because they break into fragments when destroyed.`,
    additionalData: '...',
    
  },

   {
    id: 'fluvious-falls',
    name: 'FLUVIOUS FALLS',
    left: '41.5%',
    top: '35%',
    size: 'large',
    image: screenshot,
    leveldifficulty: 'MEDIUM',
    leveldesc: `There are lots of Explodos and Sentires here, so you may want to shoot strategically rather than going in guns blazing.`,
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
desc: "This thing mimics your firing patterns."},
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