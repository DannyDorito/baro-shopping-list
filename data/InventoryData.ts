import { BaseItem } from "@/types/_BaseItem";
import { Cosmetic, CosmeticType } from "@/types/Cosmetic/_Cosmetic";
import { Equipment, EquipmentType } from "@/types/Equipment/_Equipment";
import { Sentinel, SentinelType } from "@/types/Equipment/Sentinel";
import { Weapon, WeaponType } from "@/types/Equipment/Weapon";
import { Mod, ModSubType, ModType } from "@/types/Mod/_Mod";
import { Other, OtherType } from "@/types/Other/_Other";

const equipmentSentinels: Sentinel[] = [ {
  name: 'Prisma Shade',
  ducats: 500,
  credits: 300000,
  equipmentType: EquipmentType.Sentinels,
  sentinelType: SentinelType.Prisma,
} ]

const equipmentWeapons: Weapon[] = [ {
  name: 'Gotva Prime',
  ducats: 675,
  credits: 625000,
  equipmentType: EquipmentType.Weapons,
  weaponType: WeaponType.Prime
},
{
  name: 'Vastilok',
  ducats: 550,
  credits: 325000,
  equipmentType: EquipmentType.Weapons,
  weaponType: WeaponType.Regular
},
{
  name: 'Vericres',
  ducats: 410,
  credits: 200000,
  equipmentType: EquipmentType.Weapons,
  weaponType: WeaponType.Regular
},
{
  name: 'Zylok',
  ducats: 500,
  credits: 200000,
  equipmentType: EquipmentType.Weapons,
  weaponType: WeaponType.Regular
},
{
  name: 'Mara Detron',
  ducats: 500,
  credits: 200000,
  equipmentType: EquipmentType.Weapons,
  weaponType: WeaponType.Mara
},
{
  name: 'Halikar Wraith',
  ducats: 450,
  credits: 350000,
  equipmentType: EquipmentType.Weapons,
  weaponType: WeaponType.Wraith
},
{
  name: 'Ignis Wraith',
  ducats: 550,
  credits: 250000,
  equipmentType: EquipmentType.Weapons,
  weaponType: WeaponType.Wraith
},
{
  name: 'Machete Wraith',
  ducats: 410,
  credits: 250000,
  equipmentType: EquipmentType.Weapons,
  weaponType: WeaponType.Wraith
},
{
  name: 'Viper Wraith',
  ducats: 400,
  credits: 75000,
  equipmentType: EquipmentType.Weapons,
  weaponType: WeaponType.Wraith
},
{
  name: 'Vulkar Wraith',
  ducats: 450,
  credits: 300000,
  equipmentType: EquipmentType.Weapons,
  weaponType: WeaponType.Wraith
},
{
  name: 'Glaxion Vandal',
  ducats: 475,
  credits: 250000,
  equipmentType: EquipmentType.Weapons,
  weaponType: WeaponType.Vandal
},
{
  name: 'Opticor Vandal',
  ducats: 650,
  credits: 550000,
  equipmentType: EquipmentType.Weapons,
  weaponType: WeaponType.Vandal
},
{
  name: 'Prova Vandal',
  ducats: 410,
  credits: 250000,
  equipmentType: EquipmentType.Weapons,
  weaponType: WeaponType.Vandal
},
{
  name: 'Quanta Vandal',
  ducats: 450,
  credits: 300000,
  equipmentType: EquipmentType.Weapons,
  weaponType: WeaponType.Vandal
},
{
  name: 'Supra Vandal',
  ducats: 500,
  credits: 275000,
  equipmentType: EquipmentType.Weapons,
  weaponType: WeaponType.Vandal
},
{
  name: 'Prisma Angstrum',
  ducats: 475,
  credits: 210000,
  equipmentType: EquipmentType.Weapons,
  weaponType: WeaponType.Prisma
},
{
  name: 'Prisma Dual Cleavers',
  ducats: 490,
  credits: 200000,
  equipmentType: EquipmentType.Weapons,
  weaponType: WeaponType.Prisma
},
{
  name: 'Prisma Gorgon',
  ducats: 600,
  credits: 50000,
  equipmentType: EquipmentType.Weapons,
  weaponType: WeaponType.Prisma
},
{
  name: 'Prisma Grakata',
  ducats: 610,
  credits: 100000,
  equipmentType: EquipmentType.Weapons,
  weaponType: WeaponType.Prisma
},
{
  name: 'Prisma Grinlok',
  ducats: 500,
  credits: 220000,
  equipmentType: EquipmentType.Weapons,
  weaponType: WeaponType.Prisma
},
{
  name: 'Prisma Lenz',
  ducats: 575,
  credits: 200000,
  equipmentType: EquipmentType.Weapons,
  weaponType: WeaponType.Prisma
},
{
  name: 'Prisma Machete',
  ducats: 400,
  credits: 200000,
  equipmentType: EquipmentType.Weapons,
  weaponType: WeaponType.Prisma
},
{
  name: 'Prisma Obex',
  ducats: 500,
  credits: 175000,
  equipmentType: EquipmentType.Weapons,
  weaponType: WeaponType.Prisma
},
{
  name: 'Prisma Ohma',
  ducats: 450,
  credits: 175000,
  equipmentType: EquipmentType.Weapons,
  weaponType: WeaponType.Prisma
},
{
  name: 'Prisma Skana',
  ducats: 510,
  credits: 175000,
  equipmentType: EquipmentType.Weapons,
  weaponType: WeaponType.Prisma
},
{
  name: 'Prisma Tetra',
  ducats: 400,
  credits: 50000,
  equipmentType: EquipmentType.Weapons,
  weaponType: WeaponType.Prisma
},
{
  name: 'Prisma Twin Gremlins',
  ducats: 500,
  credits: 220000,
  equipmentType: EquipmentType.Weapons,
  weaponType: WeaponType.Prisma
},
{
  name: 'Prisma Dual Decurions',
  ducats: 525,
  credits: 175000,
  equipmentType: EquipmentType.Weapons,
  weaponType: WeaponType.Prisma
},
{
  name: 'Prisma Veritux',
  ducats: 550,
  credits: 150000,
  equipmentType: EquipmentType.Weapons,
  weaponType: WeaponType.Prisma
} ]

const equipmentList: Equipment[] = [ ...equipmentSentinels, ...equipmentWeapons ];

const boosterList: Other[] = [ {
  name: '3 Day Affinity Booster',
  ducats: 450,
  credits: 200000,
  otherType: OtherType.Booster,
},
{
  name: '3 Day Credit Booster',
  ducats: 450,
  credits: 200000,
  otherType: OtherType.Booster,
},
{
  name: '3 Day Mod Drop Chance Booster',
  ducats: 450,
  credits: 200000,
  otherType: OtherType.Booster,
},
{
  name: '3 Day Resource Booster',
  ducats: 450,
  credits: 200000,
  otherType: OtherType.Booster,
} ]

const capturaSceneList: Other[] = [ {
  name: 'Inaros Tomb Captura Scene',
  ducats: 325,
  credits: 175000,
  otherType: OtherType.CapturerScene,
},
{
  name: 'Orokin Tower Extraction Captura Scene',
  ducats: 325,
  credits: 175000,
  otherType: OtherType.CapturerScene,
} ]

const colourPalletList: Other[] = [ {
  name: 'Eminence Colour Pallet',
  ducats: 220,
  credits: 220000,
  otherType: OtherType.ColourPalette,
},
{
  name: `Ki'teer Colour Pallet`,
  ducats: 150,
  credits: 300000,
  otherType: OtherType.ColourPalette,
},
{
  name: 'Void Trader Colour Pallet',
  ducats: 200,
  credits: 250000,
  otherType: OtherType.ColourPalette,
} ]

const consumableList: Other[] = [ {
  name: 'Grustrag Three Beacon',
  ducats: 200,
  credits: 125000,
  otherType: OtherType.Consumable,
},
{
  name: 'Stalker Beacon',
  ducats: 200,
  credits: 125000,
  otherType: OtherType.Consumable,
},
{
  name: 'Zanuka Hunter Beacon',
  ducats: 200,
  credits: 125000,
  otherType: OtherType.Consumable,
},
{
  name: `Ki'Teer Fireworks`,
  ducats: 50,
  credits: 100000,
  otherType: OtherType.Consumable,
},
{
  name: 'Corrupted Heavy Gunner Specter',
  ducats: 100,
  credits: 50000,
  otherType: OtherType.Consumable,
},
{
  name: 'Corrupted Bombard Specter',
  ducats: 100,
  credits: 40000,
  otherType: OtherType.Consumable,
} ]

const missionLocatorList: Other[] = [ {
  name: 'Baro Void-Signal',
  ducats: 100,
  credits: 25000,
  otherType: OtherType.MissionLocator,
} ]

const questList: Other[] = [ {
  name: 'Sands of Inaros Blueprint',
  ducats: 100,
  credits: 25000,
  otherType: OtherType.Quest,
} ]

const relicList: Other[] = [ {
  name: 'Axi A2 Relic',
  ducats: 125,
  credits: 55000,
  otherType: OtherType.Quest,
},
{
  name: 'Axi A5 Relic',
  ducats: 125,
  credits: 55000,
  otherType: OtherType.Quest,
},
{
  name: 'Axi M5 Relic',
  ducats: 125,
  credits: 55000,
  otherType: OtherType.Quest,
},
{
  name: 'Axi V8 Relic',
  ducats: 125,
  credits: 55000,
  otherType: OtherType.Quest,
},
{
  name: 'Neo O1 Relic',
  ducats: 125,
  credits: 55000,
  otherType: OtherType.Quest,
} ]

const somachordList: Other[] = [ {
  name: '10th Anniversary Login Music',
  ducats: 145,
  credits: 165000,
  otherType: OtherType.Somachord,
},
{
  name: 'Dante Unbound Login Music',
  ducats: 150,
  credits: 150000,
  otherType: OtherType.Somachord,
},
{
  name: 'Railjack Retrofit Login Music',
  ducats: 150,
  credits: 165000,
  otherType: OtherType.Somachord,
},
{
  name: 'Angels of the Zariman Login Music',
  ducats: 160,
  credits: 180000,
  otherType: OtherType.Somachord,
},
{
  name: 'Whispers in the Walls Login Music',
  ducats: 165,
  credits: 170000,
  otherType: OtherType.Somachord,
},
{
  name: 'Empyrean Login Music',
  ducats: 160,
  credits: 155000,
  otherType: OtherType.Somachord,
},
{
  name: 'Abyss of Dagath Login Music',
  ducats: 150,
  credits: 155000,
  otherType: OtherType.Somachord,
},
{
  name: 'The Lotus Eaters Login Music',
  ducats: 165,
  credits: 150000,
  otherType: OtherType.Somachord,
} ]

const otherList: Other[] = [ ...boosterList, ...capturaSceneList, ...colourPalletList,
                             ...consumableList, ...missionLocatorList, ...questList,
                             ...relicList, ...somachordList ];

const warframeModList: Mod[] = [ {
  name: 'Primed Continuity',
  ducats: 350,
  credits: 100000,
  modType: ModType.Warframe,
  modSubType: ModSubType.Prime
},
{
  name: 'Primed Flow',
  ducats: 350,
  credits: 110000,
  modType: ModType.Warframe,
  modSubType: ModSubType.Prime
},
{
  name: 'Primed Redirection',
  ducats: 350,
  credits: 225000,
  modType: ModType.Warframe,
  modSubType: ModSubType.Prime
},
{
  name: 'Peculiar Audience',
  ducats: 250,
  credits: 200000,
  modType: ModType.Warframe,
  modSubType: ModSubType.Regular
} ]

const rifleModList: Mod[] = [ {
  name: 'Primed Bane of Corpus',
  ducats: 400,
  credits: 140000,
  modType: ModType.Rifle,
  modSubType: ModSubType.Prime
},
{
  name: 'Primed Bane of Orokin',
  ducats: 400,
  credits: 140000,
  modType: ModType.Rifle,
  modSubType: ModSubType.Prime
},
{
  name: 'Primed Bane of Grineer',
  ducats: 400,
  credits: 140000,
  modType: ModType.Rifle,
  modSubType: ModSubType.Prime
},
{
  name: 'Primed Bane of Infested',
  ducats: 400,
  credits: 140000,
  modType: ModType.Rifle,
  modSubType: ModSubType.Prime
},
{
  name: 'Primed Cryo Rounds',
  ducats: 350,
  credits: 110000,
  modType: ModType.Rifle,
  modSubType: ModSubType.Prime
},
{
  name: 'Primed Fast Hands',
  ducats: 375,
  credits: 120000,
  modType: ModType.Rifle,
  modSubType: ModSubType.Prime
},
{
  name: 'Primed Firestorm',
  ducats: 350,
  credits: 175000,
  modType: ModType.Rifle,
  modSubType: ModSubType.Prime
},
{
  name: 'Primed Magazine Warp',
  ducats: 280,
  credits: 200000,
  modType: ModType.Rifle,
  modSubType: ModSubType.Prime
},
{
  name: 'Primed Rifle Ammo Mutation',
  ducats: 400,
  credits: 140000,
  modType: ModType.Rifle,
  modSubType: ModSubType.Prime
},
{
  name: 'Primed Sniper Ammo Mutation',
  ducats: 400,
  credits: 140000,
  modType: ModType.Rifle,
  modSubType: ModSubType.Prime
},
{
  name: 'High Voltage',
  ducats: 300,
  credits: 150000,
  modType: ModType.Rifle,
  modSubType: ModSubType.Regular
},
{
  name: 'Thermite Rounds',
  ducats: 300,
  credits: 150000,
  modType: ModType.Rifle,
  modSubType: ModSubType.Regular
},
{
  name: 'Crash Course',
  ducats: 330,
  credits: 200000,
  modType: ModType.Rifle,
  modSubType: ModSubType.Regular
},
{
  name: 'Fanged Fusillade',
  ducats: 375,
  credits: 150000,
  modType: ModType.Rifle,
  modSubType: ModSubType.Regular
},
{
  name: 'Split Flights',
  ducats: 300,
  credits: 200000,
  modType: ModType.Rifle,
  modSubType: ModSubType.Regular
},
{
  name: 'Primed Chamber',
  ducats: 2995,
  credits: 1000000,
  modType: ModType.Rifle,
  modSubType: ModSubType.Regular
} ];

const pistolModList: Mod[] = [ {
  name: 'Primed Convulsion',
  ducats: 350,
  credits: 175000,
  modType: ModType.Pistol,
  modSubType: ModSubType.Prime
},
{
  name: 'Primed Expel Corpus',
  ducats: 350,
  credits: 140000,
  modType: ModType.Pistol,
  modSubType: ModSubType.Prime
},
{
  name: 'Primed Expel Orokin',
  ducats: 350,
  credits: 140000,
  modType: ModType.Pistol,
  modSubType: ModSubType.Prime
},
{
  name: 'Primed Expel Grineer',
  ducats: 350,
  credits: 140000,
  modType: ModType.Pistol,
  modSubType: ModSubType.Prime
},
{
  name: 'Primed Expel Infested',
  ducats: 350,
  credits: 140000,
  modType: ModType.Pistol,
  modSubType: ModSubType.Prime
},
{
  name: 'Primed Fulmination',
  ducats: 350,
  credits: 175000,
  modType: ModType.Pistol,
  modSubType: ModSubType.Prime
},
{
  name: 'Primed Heated Charge',
  ducats: 350,
  credits: 175000,
  modType: ModType.Pistol,
  modSubType: ModSubType.Prime
},
{
  name: 'Primed Pistol Gambit',
  ducats: 400,
  credits: 220000,
  modType: ModType.Pistol,
  modSubType: ModSubType.Prime
},
{
  name: 'Primed Pistol Ammo Mutation',
  ducats: 400,
  credits: 140000,
  modType: ModType.Pistol,
  modSubType: ModSubType.Prime
},
{
  name: 'Primed Quickdraw',
  ducats: 375,
  credits: 120000,
  modType: ModType.Pistol,
  modSubType: ModSubType.Prime
},
{
  name: 'Primed Slip Magazine',
  ducats: 280,
  credits: 200000,
  modType: ModType.Pistol,
  modSubType: ModSubType.Prime
},
{
  name: 'Primed Target Cracker',
  ducats: 400,
  credits: 150000,
  modType: ModType.Pistol,
  modSubType: ModSubType.Prime
},
{
  name: 'Pummel',
  ducats: 300,
  credits: 150000,
  modType: ModType.Pistol,
  modSubType: ModSubType.Regular
},
{
  name: 'Scorch',
  ducats: 300,
  credits: 150000,
  modType: ModType.Pistol,
  modSubType: ModSubType.Regular
},
{
  name: 'Jolt',
  ducats: 300,
  credits: 150000,
  modType: ModType.Pistol,
  modSubType: ModSubType.Regular
},
{
  name: 'Maim',
  ducats: 375,
  credits: 150000,
  modType: ModType.Pistol,
  modSubType: ModSubType.Regular
} ];

const shotgunMods: Mod[] = [ {
  name: 'Primed Ammo Stock',
  ducats: 280,
  credits: 200000,
  modType: ModType.Shotgun,
  modSubType: ModSubType.Prime
},
{
  name: 'Primed Charged Shell',
  ducats: 350,
  credits: 200000,
  modType: ModType.Shotgun,
  modSubType: ModSubType.Prime
},
{
  name: 'Primed Chilling Grasp',
  ducats: 350,
  credits: 125000,
  modType: ModType.Shotgun,
  modSubType: ModSubType.Prime
},
{
  name: 'Primed Cleanse Corpus',
  ducats: 350,
  credits: 140000,
  modType: ModType.Shotgun,
  modSubType: ModSubType.Prime
},
{
  name: 'Primed Cleanse Orokin',
  ducats: 350,
  credits: 140000,
  modType: ModType.Shotgun,
  modSubType: ModSubType.Prime
},
{
  name: 'Primed Cleanse Grineer',
  ducats: 350,
  credits: 140000,
  modType: ModType.Shotgun,
  modSubType: ModSubType.Prime
},
{
  name: 'Primed Cleanse Infested',
  ducats: 350,
  credits: 140000,
  modType: ModType.Shotgun,
  modSubType: ModSubType.Prime
},
{
  name: 'Primed Ravage',
  ducats: 280,
  credits: 100000,
  modType: ModType.Shotgun,
  modSubType: ModSubType.Prime
},
{
  name: 'Primed Shotgun Ammo Mutation',
  ducats: 400,
  credits: 140000,
  modType: ModType.Shotgun,
  modSubType: ModSubType.Prime
},
{
  name: 'Primed Tactical Pump',
  ducats: 300,
  credits: 140000,
  modType: ModType.Shotgun,
  modSubType: ModSubType.Prime
},
{
  name: 'Scattering Inferno',
  ducats: 300,
  credits: 150000,
  modType: ModType.Shotgun,
  modSubType: ModSubType.Regular
},
{
  name: 'Shell Shock',
  ducats: 300,
  credits: 150000,
  modType: ModType.Shotgun,
  modSubType: ModSubType.Regular
},
{
  name: 'Sweeping Serration',
  ducats: 375,
  credits: 150000,
  modType: ModType.Shotgun,
  modSubType: ModSubType.Regular
},
{
  name: 'Full Contact',
  ducats: 365,
  credits: 220000,
  modType: ModType.Shotgun,
  modSubType: ModSubType.Regular
} ]

const meleeModList: Mod[] = [ {
  name: 'Primed Fever Strike',
  ducats: 350,
  credits: 200000,
  modType: ModType.Shotgun,
  modSubType: ModSubType.Prime
},
{
  name: 'Primed Heavy Trauma',
  ducats: 350,
  credits: 100000,
  modType: ModType.Shotgun,
  modSubType: ModSubType.Prime
},
{
  name: 'Primed Pressure Point',
  ducats: 385,
  credits: 300000,
  modType: ModType.Shotgun,
  modSubType: ModSubType.Prime
},
{
  name: 'Primed Reach',
  ducats: 300,
  credits: 220000,
  modType: ModType.Shotgun,
  modSubType: ModSubType.Prime
},
{
  name: 'Primed Smite Corpus',
  ducats: 350,
  credits: 140000,
  modType: ModType.Shotgun,
  modSubType: ModSubType.Prime
},
{
  name: 'Primed Smite Orokin',
  ducats: 350,
  credits: 140000,
  modType: ModType.Shotgun,
  modSubType: ModSubType.Prime
},
{
  name: 'Primed Smite Grineer',
  ducats: 350,
  credits: 140000,
  modType: ModType.Shotgun,
  modSubType: ModSubType.Prime
},
{
  name: 'Primed Smite Infested',
  ducats: 350,
  credits: 140000,
  modType: ModType.Shotgun,
  modSubType: ModSubType.Prime
},
{
  name: 'Buzz Kill',
  ducats: 375,
  credits: 150000,
  modType: ModType.Shotgun,
  modSubType: ModSubType.Regular
},
{
  name: 'Collision Force',
  ducats: 400,
  credits: 250000,
  modType: ModType.Shotgun,
  modSubType: ModSubType.Regular
},
{
  name: 'Volcanic Edge',
  ducats: 300,
  credits: 150000,
  modType: ModType.Shotgun,
  modSubType: ModSubType.Regular
},
{
  name: 'Voltaic Strike',
  ducats: 300,
  credits: 150000,
  modType: ModType.Shotgun,
  modSubType: ModSubType.Regular
},
{
  name: 'Combo Fury',
  ducats: 300,
  credits: 115000,
  modType: ModType.Shotgun,
  modSubType: ModSubType.Regular
},
{
  name: 'Combo Killer',
  ducats: 300,
  credits: 115000,
  modType: ModType.Shotgun,
  modSubType: ModSubType.Regular
},
{
  name: 'Mark of the Beast',
  ducats: 300,
  credits: 115000,
  modType: ModType.Shotgun,
  modSubType: ModSubType.Regular
} ]

const stancesModList: Mod[] = [ {
  name: 'Astral Twilight',
  ducats: 385,
  credits: 175000,
  modType: ModType.Stance,
  modSubType: ModSubType.Regular
},
{
  name: 'Tempo Royale',
  ducats: 385,
  credits: 175000,
  modType: ModType.Stance,
  modSubType: ModSubType.Regular
},
{
  name: 'Vermillion Storm',
  ducats: 385,
  credits: 175000,
  modType: ModType.Stance,
  modSubType: ModSubType.Regular
} ]

const archwingModList: Mod[] = [ {
  name: 'Primed Morphic Transformer',
  ducats: 350,
  credits: 150000,
  modType: ModType.Archwing,
  modSubType: ModSubType.Prime
} ]

const archgunModList: Mod[] = [ {
  name: 'Primed Rubedo-Lined Barrel',
  ducats: 350,
  credits: 175000,
  modType: ModType.Archgun,
  modSubType: ModSubType.Prime
},
{
  name: 'Primed Deadly Efficiency',
  ducats: 375,
  credits: 300000,
  modType: ModType.Archgun,
  modSubType: ModSubType.Prime
},
{
  name: 'Primed Dual Rounds',
  ducats: 400,
  credits: 250000,
  modType: ModType.Archgun,
  modSubType: ModSubType.Prime
} ]

const companionModList: Mod[] = [ {
  name: 'Primed Animal Instinct',
  ducats: 300,
  credits: 200000,
  modType: ModType.Companion,
  modSubType: ModSubType.Prime
},
{
  name: 'Primed Pack Leader',
  ducats: 300,
  credits: 200000,
  modType: ModType.Companion,
  modSubType: ModSubType.Prime
},
{
  name: 'Primed Regen',
  ducats: 300,
  credits: 220000,
  modType: ModType.Companion,
  modSubType: ModSubType.Prime
} ];

const modList: Mod[] = [ ...warframeModList, ...rifleModList, ...pistolModList,
                         ...shotgunMods, ...meleeModList, ...stancesModList,
                         ...archwingModList, ...archgunModList, ...companionModList ];

const warframeCosmeticList: Cosmetic[] = [];

const armourCosmeticList: Cosmetic[] = [];

const syandanaCosmeticList: Cosmetic[] = [];

const ephemeraCosmeticList: Cosmetic[] = [];

const weaponCosmeticList: Cosmetic[] = [];

const sugatraCosmeticList: Cosmetic[] = [];

const operatorCosmeticList: Cosmetic[] = [];

const companionCosmeticList: Cosmetic[] = [];

const archwingCosmeticList: Cosmetic[] = [];

const kdriveCosmeticList: Cosmetic[] = [];

const landingcraftCosmeticList: Cosmetic[] = [];

const orbiterCosmeticList: Cosmetic[] = [];

const decorationsCosmeticList: Cosmetic[] = [];

const emblemsCosmeticList: Cosmetic[] = [];

const sigilsCosmeticList: Cosmetic[] = [];

const glyphsCosmeticList: Cosmetic[] = [];

const cosmeticsList: Cosmetic[] = [ ...warframeCosmeticList, ...armourCosmeticList, ...syandanaCosmeticList,
                                    ...ephemeraCosmeticList, ...weaponCosmeticList, ...sugatraCosmeticList,
                                    ...operatorCosmeticList, ...companionCosmeticList, ...archwingCosmeticList,
                                    ...kdriveCosmeticList, ...landingcraftCosmeticList, ...orbiterCosmeticList,
                                    ...decorationsCosmeticList, ...emblemsCosmeticList, ...sigilsCosmeticList,
                                    ...glyphsCosmeticList ];

export const inventoryList: BaseItem[] = [ ...equipmentList, ...otherList, ...modList,
                                           ...cosmeticsList ];
