import { InventoryType } from "@/types/BaseItem";

export interface InventoryDropdownProps {
  setFilter: (
    type: InventoryType,
    column: string,
    value: string,
    checked: boolean
  ) => void;
  getChecked: (type: InventoryType, column: string, value: string) => boolean;
  type: InventoryType;
  name: string;
}
