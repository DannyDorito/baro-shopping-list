import { InventoryType } from "@/enums/Type";

export default interface InventoryDropdownProps {
  setFilterOld: (
    type: InventoryType,
    column: string,
    value: string,
    checked: boolean,
    subType?: InventoryType,
    subColumn?: string,
    subValue?: string
  ) => void;
  getCheckedOld: (
    type: InventoryType,
    column: string,
    value: string,
    subType?: InventoryType,
    subColumn?: string,
    subValue?: string
  ) => boolean;
}
