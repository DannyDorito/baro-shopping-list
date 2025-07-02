import { InventoryType } from "@/enums/Type";

export interface BaseItem {
  Name: string;
  Ducats: number;
  Credits: number;
  Link: string;
  Image: string;
  ItemType: InventoryType;
  LatestOfferingDate: string;
  ConsoleOfferingDates: string[];
  PCOfferingDates: string[];
  OfferingsDates: string[];
}
