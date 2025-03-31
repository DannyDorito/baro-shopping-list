
import { Equipment, EquipmentType } from "./_Equipment";

export class Weapon extends Equipment
{
  weaponType: WeaponType;

  constructor( id: string, name: string, ducats: number, credits: number, equipmentType: EquipmentType, weaponType: WeaponType )
  {
    super( id, name, ducats, credits, equipmentType );
    this.weaponType = weaponType
  }
}

export enum WeaponType
{
  Prisma,
  Vandal,
  Wraith,
  Mara,
  Regular,
  Prime
}
