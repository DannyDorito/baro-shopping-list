import { InventoryType } from "@/types/BaseItem";

import {
  DropdownMenuCheckboxItem,
  DropdownMenuPortal,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
} from "./ui/dropdown-menu";

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

export const InventoryDropdown = (props: InventoryDropdownProps) => {
  const getItems = (type: InventoryType): string[] => {
    return Object.keys(type).filter(
      (key) => !isNaN(type[key as keyof typeof type]) && key !== "None"
    );
  };

  return (
    <DropdownMenuSub>
      <DropdownMenuSubTrigger>{props.name}</DropdownMenuSubTrigger>
      <DropdownMenuPortal>
        <DropdownMenuSubContent>
          {getItems(props.type).map((item) => (
            <DropdownMenuCheckboxItem
              key={item}
              checked={props.getChecked(
                props.type,
                `${props.name.toLowerCase()}Type`,
                item
              )}
              onCheckedChange={(checked) =>
                props.setFilter(
                  props.type,
                  `${props.name.toLowerCase()}Type`,
                  item,
                  checked
                )
              }
            >
              {item.replace("_", " ")}
            </DropdownMenuCheckboxItem>
          ))}
        </DropdownMenuSubContent>
      </DropdownMenuPortal>
    </DropdownMenuSub>
  );
};
