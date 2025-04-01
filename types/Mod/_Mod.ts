import { BaseItem } from "../_BaseItem";

export class Mod extends BaseItem
{
  modType: ModType;
  modSubType: ModSubType;

  constructor( name: string, ducats: number, credits: number, modType: ModType, modSubType: ModSubType )
  {
    super( name, ducats, credits );
    this.modType = modType;
    this.modSubType = modSubType;
  }
}

export enum ModType
{
  Warframe,
  Rifle,
  Pistol,
  Shotgun,
  Melee,
  Stance,
  Archwing,
  Archgun,
  Companion
}

export enum ModSubType
{
  Prime,
  Regular
}
