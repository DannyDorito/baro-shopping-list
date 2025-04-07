import { InventoryType } from "@/types/BaseItem";

import {
  DropdownMenuCheckboxItem,
  DropdownMenuPortal,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
} from "./ui/dropdown-menu";
import { InventoryDropdownProps } from "@/interfaces/InventoryDropdownProps";

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
          {getItems(props.type).map((item, index) => (
            <DropdownMenuCheckboxItem
              key={`dropdown-${item}-${index}`}
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
