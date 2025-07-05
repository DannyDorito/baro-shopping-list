import { InventoryType } from "@/enums/Type";
import { Row } from "@tanstack/react-table";

export default interface ExportProps {
  count: number;
  open: boolean;
  setOpen: (open: boolean) => void;
  rowSelection: Row<{
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
}>[]
}
