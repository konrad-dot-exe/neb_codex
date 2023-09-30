// this file contains all of our data in the form of object arrays

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


// every object in an array needs have an ID

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

{ id: 9, image: virovore, name: "VIROVORE", hp: "1", pts: "4", dngr: "MED",
desc: "These things come out of the walls and chase after you. Get out of their line of sight if you want to escape."},
  { id: 10, image: giant_virovore, name: "GIANT VIROVORE", hp: "3", pts: "24", dngr: "XTR",
desc: "If you aren’t powered up, your best bet is to run or hide when you see this thing."},
   { id: 11, image: quantoid, name: "QUANTOID", hp: "5", pts: "24", dngr: "XTR",
desc: "This thing teleports and hunts you relentlessly with homing bullets. Kill it before it kills you."},
  { id: 12, image: executor, name: "EXECUTOR", hp: "8", pts: "48", dngr: "XTR",
desc: "You’ll need some serious firepower if you’re going to face down one of these. Watch out - its bullets create deadly explosions on impact."},

];

