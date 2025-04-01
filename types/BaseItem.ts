export interface BaseItem {
  name: string;
  ducats: number;
  credits: number;
  otherType: OtherType;
  equipmentType: EquipmentType;
  cosmeticType: CosmeticType;
  sentinelType: SentinelType;
  weaponType: WeaponType;
  modType: ModType;
  modSubType: ModSubType;
  decorationType: DecorationType;
}

export enum OtherType {
  None,
  Booster,
  Capturer_Scene,
  Colour_Palette,
  Consumable,
  Mission_Locator,
  ModPack,
  Quest,
  Relic,
  Somachord,
}

export enum EquipmentType {
  None,
  Weapons,
  Sentinels,
}

export enum CosmeticType {
  None,
  Warframe,
  Armour,
  Syandana,
  Ephemera,
  Weapon,
  Sugatra,
  Operator,
  Companion,
  Archwing,
  K_Drive,
  Landing_Craft,
  Orbiter,
  Decoration,
  Emblems,
  Sigils,
  Glyphs,
}

export enum SentinelType {
  None,
  Prisma,
}

export enum WeaponType {
  None,
  Prisma,
  Vandal,
  Wraith,
  Mara,
  Regular,
  Prime,
}

export enum ModType {
  None,
  Warframe,
  Rifle,
  Pistol,
  Shotgun,
  Melee,
  Stance,
  Archwing,
  Archgun,
  Companion,
}

export enum ModSubType {
  None,
  Prime,
  Regular,
}

export enum DecorationType {
  None,
  Display,
  Poster,
  Noggle_Statue,
  Miscellaneous,
}
