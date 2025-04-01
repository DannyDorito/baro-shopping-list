import { Equipment, EquipmentType } from "./_Equipment";

export class Weapon extends Equipment
{
  weaponType: WeaponType;

  constructor( name: string, ducats: number, credits: number, equipmentType: EquipmentType, weaponType: WeaponType )
  {
    super( name, ducats, credits, equipmentType );
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
