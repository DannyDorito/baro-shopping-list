
import { BaseItem } from "../_BaseItem";

export class Equipment extends BaseItem
{
  equipmentType: EquipmentType;

  constructor( id: string, name: string, ducats: number, credits: number, equipmentType: EquipmentType )
  {
    super( id, name, ducats, credits );
    this.equipmentType = equipmentType;
  }
}

export enum EquipmentType
{
  Weapons,
  Sentinels
}
