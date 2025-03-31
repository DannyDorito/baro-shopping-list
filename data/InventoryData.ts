import { BaseItem } from "@/types/_BaseItem";
import { Equipment, EquipmentType } from "@/types/Equipment/_Equipment";
import { Sentinel, SentinelType } from "@/types/Equipment/Sentinel";
import { Weapon, WeaponType } from "@/types/Equipment/Weapon";
import { v4 as uuid } from "uuid";

export const equipmentSentinels: Sentinel[] = [ {
  id: uuid(),
  name: 'Prisma Shade',
  ducats: 500,
  credits: 300000,
  equipmentType: EquipmentType.Sentinels,
  sentinelType: SentinelType.Prisma,
} ]

export const equipmentWeapons: Weapon[] = [ {
  id: uuid(),
  name: 'Gotva Prime',
  ducats: 675,
  credits: 625000,
  equipmentType: EquipmentType.Weapons,
  weaponType: WeaponType.Prime
},
{
  id: uuid(),
  name: 'Vastilok',
  ducats: 550,
  credits: 325000,
  equipmentType: EquipmentType.Weapons,
  weaponType: WeaponType.Regular
} ]

export const equipmentList: Equipment[] = [ ...equipmentSentinels, ...equipmentWeapons ];

export const inventoryList: BaseItem[] = [ ...equipmentList ];

