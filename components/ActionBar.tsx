"use client";

import { ListFilter, SearchX } from "lucide-react";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { InventoryDropdown } from "./InventoryDropdown";
import { Input } from "./ui/input";
import { DeselectAll } from "./DeselectAll";
import { EquipmentType } from "@/enums/EquipmentType";
import { CosmeticType } from "@/enums/CosmeticType";
import { WeaponType } from "@/enums/WeaponType";
import { ModSubType } from "@/enums/ModSubType";
import { ModType } from "@/enums/ModType";
import { DecorationType } from "@/enums/DecorationType";
import { OtherType } from "@/enums/OtherType";
import { useMediaQuery } from "react-responsive";
import { ActionBarProps } from "@/interfaces/ActonBarProps";

const dropdownConfigs = [
  { type: EquipmentType, name: "Equipment" },
  { type: CosmeticType, name: "Cosmetic" },
  { type: WeaponType, name: "Weapon" },
  { type: ModType, subType: ModSubType, name: "Mod", subName: "Mod Sub Type" },
  { type: DecorationType, name: "Decoration" },
  { type: OtherType, name: "Other" },
];
export const ActionBar = (props: ActionBarProps) => {
  const isSm = useMediaQuery({ query: "(max-width: 1224px)" });

  return (
    <div className="flex items-center py-4">
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
        <DropdownMenuContent align="end">
        {dropdownConfigs.map((config, index) => (
          <InventoryDropdown
            key={index}
            setFilter={props.setFilter}
            getChecked={props.getChecked}
            {...config}
          />
        ))}
        </DropdownMenuContent>
      </DropdownMenu>
      <Input
        placeholder="Search"
        value={
          (props.table.getColumn("name")?.getFilterValue() as string) ?? ""
        }
        onChange={props.handleSearchChange(props.table)}
        className="min-w-24"
      />
      <Button
        className="ml-3 cursor-pointer"
        onClick={props.handleClearFilters(props.table)}
        aria-label="Clear Filters"
        disabled={props.columnFilters.length === 0}
      >
        <SearchX />
        {!isSm && " Clear"}
      </Button>
      <DeselectAll
        onDeselectAll={props.handleDeselectAll(props.table)}
        count={props.table.getFilteredSelectedRowModel().rows.length}
        open={props.openDeselectAll}
        setOpen={props.setOpenDeselectAll}
      />
    </div>
  );
};
