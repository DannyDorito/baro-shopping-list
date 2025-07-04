import { InventoryType } from "@/enums/Type";

export default interface InventoryDropdownProps {
  setFilter: (
    type: InventoryType | InventoryType[],
    column: string,
    checked: boolean
  ) => void;
  getChecked: (
    type: InventoryType | InventoryType[],
    column: string
  ) => boolean;
}
