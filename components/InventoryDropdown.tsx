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
import { ListFilter } from "lucide-react";

const InventoryDropdown = (props: InventoryDropdownProps) => {
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
    <DropdownMenu>
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
          <div
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
                  <DropdownMenuCheckboxItem className="w-full">
                    {ParentType[parentItem.parentType].replace(/_/g, " ")}
                  </DropdownMenuCheckboxItem>
                </DropdownMenuSubTrigger>
                <DropdownMenuPortal>
                  <DropdownMenuSubContent>
                    {parentItem.types.map((inventoryType, inventoryIndex) => (
                      <DropdownMenuCheckboxItem
                        key={`InventoryType-${inventoryType}-${inventoryIndex}`}
                      >
                        {InventoryTypeNames[inventoryType]}
                      </DropdownMenuCheckboxItem>
                    ))}
                  </DropdownMenuSubContent>
                </DropdownMenuPortal>
              </DropdownMenuSub>
            ) : (
              <DropdownMenuCheckboxItem className="w-full">
                {InventoryTypeNames[parentItem.types[0]]}
              </DropdownMenuCheckboxItem>
            )}
          </div>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default InventoryDropdown;
