import { CosmeticType } from "@/enums/CosmeticType";
import { DecorationType } from "@/enums/DecorationType";
import { EquipmentType } from "@/enums/EquipmentType";
import { ModSubType } from "@/enums/ModSubType";
import { ModType } from "@/enums/ModType";
import { OtherType } from "@/enums/OtherType";
import { SentinelType } from "@/enums/SentinelType";
import { WeaponType } from "@/enums/WeaponType";

export interface BaseItem {
  name: string;
  ducats: number;
  credits: number;
  lastSeen: string;
  otherType: OtherType;
  equipmentType: EquipmentType;
  cosmeticType: CosmeticType;
  sentinelType: SentinelType;
  weaponType: WeaponType;
  modType: ModType;
  modSubType: ModSubType;
  decorationType: DecorationType;
  hash: string;
}

export type InventoryType =
  | typeof OtherType
  | typeof EquipmentType
  | typeof CosmeticType
  | typeof SentinelType
  | typeof WeaponType
  | typeof ModType
  | typeof ModSubType
  | typeof DecorationType;
