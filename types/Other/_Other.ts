import { BaseItem } from "../_BaseItem";

export class Other extends BaseItem
{
  otherType: OtherType;

  constructor( name: string, ducats: number, credits: number, otherType: OtherType )
  {
    super( name, ducats, credits );
    this.otherType = otherType;
  }
}

export enum OtherType
{
  Booster,
  CapturerScene,
  ColourPalette,
  Consumable,
  MissionLocator,
  ModPack,
  Quest,
  Relic,
  Somachord
}
