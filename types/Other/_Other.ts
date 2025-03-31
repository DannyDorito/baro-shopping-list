
import { BaseItem } from "../_BaseItem";

export class Other extends BaseItem
{
  otherType: OtherType;

  constructor( id: string, name: string, ducats: number, credits: number, otherType: OtherType )
  {
    super( id, name, ducats, credits );
    this.otherType = otherType;
  }
}

export enum OtherType
{
  Booster,
  CapturaScene,
  ColourPalette,
  Consumable,
  MissionLocator,
  ModPack,
  Quest,
  Relic,
  Somachord
}
