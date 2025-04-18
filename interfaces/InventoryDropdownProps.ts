import { InventoryType } from "@/types/BaseItem";

export default interface InventoryDropdownProps {
  setFilter: (
    type: InventoryType,
    column: string,
    value: string,
    checked: boolean,
    subType?: InventoryType,
    subColumn?: string,
    subValue?: string
  ) => void;
  getChecked: (
    type: InventoryType,
    column: string,
    value: string,
    subType?: InventoryType,
    subColumn?: string,
    subValue?: string
  ) => boolean;
  type: InventoryType;
  subType?: InventoryType;
  name: string;
  subName?: string;
}
