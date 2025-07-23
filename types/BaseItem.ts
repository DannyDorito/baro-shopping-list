import { InventoryType } from "@/enums/Type";

export interface BaseItem {
  name: string;
  ducats: number;
  credits: number;
  link: string;
  image: string;
  itemType: InventoryType;
  latestOfferingDate: string;
  consoleOfferingDates: string[];
  pCOfferingDates: string[];
  offeringsDates: string[];
}
