"use client";

import { InventoryType, InventoryTypeNames } from "@/enums/Type";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuPortal,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import InventoryDropdownProps from "@/interfaces/InventoryDropdownProps";
import { ParentType, ParentTypeMap } from "@/enums/ParentType";
import { Button } from "./ui/button";
import { ListFilter, Check } from "lucide-react";
import { Fragment, useState } from "react";

const InventoryDropdown = (props: InventoryDropdownProps) => {
  const [open, setOpen] = useState(false);

  const getItems = () => {
    const items: { parentType: ParentType; types: InventoryType[] }[] = [];
    Object.entries(ParentTypeMap).forEach(([key, value]) => {
      if (Number(key) !== ParentType.None) {
        items.push({
          parentType: Number(key) as ParentType,
          types: value,
        });
      }
    });
    return items;
  };

  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger asChild>
        <Button
          size="icon"
          className="ml-auto mr-3 cursor-pointer"
          aria-label="Filter Inventory"
        >
          <ListFilter />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {getItems().map((parentItem, parentIndex) => (
          <Fragment
            key={`ParentTypeFragment-${
              ParentType[parentItem.parentType]
            }-${parentIndex}`}
          >
            {parentItem.types.length > 1 ? (
              <DropdownMenuSub
                key={`ParentType-${
                  ParentType[parentItem.parentType]
                }-${parentIndex}`}
              >
                <DropdownMenuSubTrigger>
                  <span
                    className="focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg]:size-4 w-full"
                    onClick={() => {
                      props.setFilter(
                        parentItem.types,
                        "ItemType",
                        !props.getChecked(parentItem.types, "ItemType")
                      );
                      setOpen(false);
                    }}
                  >
                    <span className="pointer-events-none absolute left-2 flex size-3.5 items-center justify-center">
                      {props.getChecked(parentItem.types, "ItemType") && (
                        <Check className="size-4 text-primary" />
                      )}
                    </span>
                    {ParentType[parentItem.parentType].replace(/_/g, " ")}
                  </span>
                </DropdownMenuSubTrigger>
                <DropdownMenuPortal>
                  <DropdownMenuSubContent>
                    {parentItem.types.map((inventoryType, inventoryIndex) => (
                      <DropdownMenuCheckboxItem
                        key={`InventoryType-${inventoryType}-${inventoryIndex}`}
                        checked={props.getChecked(inventoryType, "ItemType")}
                        onCheckedChange={(checked) =>
                          props.setFilter(inventoryType, "ItemType", checked)
                        }
                      >
                        {InventoryTypeNames[inventoryType]}
                      </DropdownMenuCheckboxItem>
                    ))}
                  </DropdownMenuSubContent>
                </DropdownMenuPortal>
              </DropdownMenuSub>
            ) : (
              <DropdownMenuCheckboxItem
                className="w-full"
                checked={props.getChecked(parentItem.types[0], "ItemType")}
                onCheckedChange={(checked) =>
                  props.setFilter(parentItem.types[0], "ItemType", checked)
                }
              >
                {InventoryTypeNames[parentItem.types[0]]}
              </DropdownMenuCheckboxItem>
            )}
          </Fragment>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default InventoryDropdown;
