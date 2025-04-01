import { Equipment, EquipmentType } from "./_Equipment";

export class Sentinel extends Equipment
{
  sentinelType: SentinelType;

  constructor( name: string, ducats: number, credits: number, equipmentType: EquipmentType, sentinelType: SentinelType )
  {
    super( name, ducats, credits, equipmentType );
    this.sentinelType = sentinelType
  }
}

export enum SentinelType
{
  Prisma
}
