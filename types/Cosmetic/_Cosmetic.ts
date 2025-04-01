import { BaseItem } from "../_BaseItem";

export class Cosmetic extends BaseItem
{
  cosmeticType: CosmeticType;

  constructor( name: string, ducats: number, credits: number, cosmeticType: CosmeticType )
  {
    super( name, ducats, credits );
    this.cosmeticType = cosmeticType;
  }
}

export enum CosmeticType
{
  Warframe,
  Armour,
  Syandana,
  Ephemera,
  Weapon,
  Sugatra,
  Operator,
  Companion,
  Archwing,
  KDrive,
  LandingCraft,
  Orbiter,
  Decoration,
  Emblems,
  Sigils,
  Glyphs
}
