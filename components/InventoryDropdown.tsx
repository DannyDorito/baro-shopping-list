"use client";

import { InventoryType } from "@/types/BaseItem";
import {
  DropdownMenuCheckboxItem,
  DropdownMenuPortal,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
} from "./ui/dropdown-menu";
import InventoryDropdownProps from "@/interfaces/InventoryDropdownProps";
import { toCamelCase } from "@/lib/utils";

const InventoryDropdown = (props: InventoryDropdownProps) => {
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
          {getItems(props.type).map((item, index) => {
            if (props.subType === undefined) {
              return (
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
              );
            } else {
              return (
                <DropdownMenuSub key={`dropdown-${item}-${index}`}>
                  <DropdownMenuSubTrigger id="tr">
                    <DropdownMenuCheckboxItem
                      className="pt-0 pb-0"
                      key={`dropdown-${item}-${index}`}
                      checked={props.getChecked(
                        props.type,
                        `${toCamelCase(props.name)}Type`,
                        item
                      )}
                      onCheckedChange={(checked) =>
                        props.setFilter(
                          props.type,
                          `${toCamelCase(props.name)}Type`,
                          item,
                          checked
                        )
                      }
                    >
                      {item.replace("_", " ")}
                    </DropdownMenuCheckboxItem>
                  </DropdownMenuSubTrigger>
                  <DropdownMenuPortal>
                    <DropdownMenuSubContent>
                      {getItems(props.subType).map((subItem, subIndex) => {
                        return (
                          <DropdownMenuCheckboxItem
                            key={`dropdown-${item}-${subItem}-${subIndex}`}
                            checked={props.getChecked(
                              props.type,
                              `${toCamelCase(props.name)}Type`,
                              item,
                              props.subType as InventoryType,
                              toCamelCase(props.subName as string),
                              subItem
                            )}
                            onCheckedChange={(checked) =>
                              props.setFilter(
                                props.type as InventoryType,
                                `${toCamelCase(props.name)}Type`,
                                item,
                                checked,
                                props.subType as InventoryType,
                                toCamelCase(props.subName as string),
                                subItem
                              )
                            }
                          >
                            {subItem.replace("_", " ")}
                          </DropdownMenuCheckboxItem>
                        );
                      })}
                    </DropdownMenuSubContent>
                  </DropdownMenuPortal>
                </DropdownMenuSub>
              );
            }
          })}
        </DropdownMenuSubContent>
      </DropdownMenuPortal>
    </DropdownMenuSub>
  );
};

export default InventoryDropdown;
