import { BaseItem } from "../_BaseItem";

export class Equipment extends BaseItem
{
  equipmentType: EquipmentType;

  constructor( name: string, ducats: number, credits: number, equipmentType: EquipmentType )
  {
    super( name, ducats, credits );
    this.equipmentType = equipmentType;
  }
}

export enum EquipmentType
{
  Weapons,
  Sentinels
}
