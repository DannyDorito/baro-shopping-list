import { InventoryType } from "@/enums/Type";
import { Row } from "@tanstack/react-table";

export default interface ExportProps {
  count: number;
  open: boolean;
  setOpen: (open: boolean) => void;
  rowSelection: Row<{
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
  }>[];
}
