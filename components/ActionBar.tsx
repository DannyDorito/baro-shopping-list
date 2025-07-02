"use client";

import { ListFilter, SearchX } from "lucide-react";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import InventoryDropdown from "./InventoryDropdown";
import { Input } from "./ui/input";
import DeselectAll from "./DeselectAll";
import { useMediaQuery } from "react-responsive";
import ActionBarProps from "@/interfaces/ActonBarProps";
import { InventoryType } from "@/enums/Type";

const dropdownConfigs = [
  { type: InventoryType.Booster, name: "Booster" },
  { type: InventoryType.Captura_Scene, name: "Captura Scene" },
  { type: InventoryType.Color_Palette, name: "Color Palette" },
  { type: InventoryType.Consumable, name: "Consumable" },
  { type: InventoryType.Cosmetic_Archwing, name: "Archwing" },
  { type: InventoryType.Cosmetic_Armor, name: "Armor" },
  { type: InventoryType.Cosmetic_Emblem, name: "Emblem" },
  { type: InventoryType.Cosmetic_Ephemera, name: "Ephemera" },
  { type: InventoryType.Cosmetic_KDrive, name: "K-Drive" },
  { type: InventoryType.Cosmetic_Kavat, name: "Kavat" },
  { type: InventoryType.Cosmetic_Kubrow, name: "Kubrow" },
  {
    type: InventoryType.Cosmetic_Landing_Craft,
    name: "Landing Craft",
  },
  { type: InventoryType.Cosmetic_MOA, name: "MOA" },
  { type: InventoryType.Cosmetic_Operator, name: "Operator" },
  { type: InventoryType.Cosmetic_Orbiter, name: "Orbiter" },
  { type: InventoryType.Cosmetic_Sentinel, name: "Sentinel" },
  { type: InventoryType.Cosmetic_Sigil, name: "Sigil" },
  { type: InventoryType.Cosmetic_Syandana, name: "Syandana" },
  {
    type: InventoryType.Cosmetic_Warframe_Skin,
    name: "Warframe Skin",
  },
  { type: InventoryType.Cosmetic_Weapon, name: "Weapon" },
  { type: InventoryType.Decoration, name: "Decoration" },
  { type: InventoryType.Emote, name: "Emote" },
  { type: InventoryType.Glyph, name: "Glyph" },
  { type: InventoryType.Mod, name: "Mod" },
  { type: InventoryType.Mod_Prime, name: "Prime Mod" },
  { type: InventoryType.Mod_Stance, name: "Stance Mod" },
  { type: InventoryType.Pack, name: "Mod Pack" },
  { type: InventoryType.Quest, name: "Quest" },
  { type: InventoryType.Sentinel, name: "Sentinel" },
  { type: InventoryType.Somachord, name: "Somachord" },
  { type: InventoryType.Void_Relic, name: "Void Relic" },
  { type: InventoryType.Weapon, name: "Weapon" },
  { type: InventoryType.Weapon_Archwing, name: "Archwing" },
];

const ActionBar = (props: ActionBarProps) => {
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
          (props.table.getColumn("Name")?.getFilterValue() as string) ?? ""
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

export default ActionBar;
