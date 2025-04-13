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
          <InventoryDropdown
            setFilter={props.setFilter}
            getChecked={props.getChecked}
            type={EquipmentType}
            name="Equipment"
          />
          <InventoryDropdown
            setFilter={props.setFilter}
            getChecked={props.getChecked}
            type={CosmeticType}
            name="Cosmetic"
          />
          <InventoryDropdown
            setFilter={props.setFilter}
            getChecked={props.getChecked}
            type={WeaponType}
            name="Weapon"
          />
          <InventoryDropdown
            setFilter={props.setFilter}
            getChecked={props.getChecked}
            type={ModType}
            subType={ModSubType}
            name="Mod"
            subName="Mod Sub Type"
          />
          <InventoryDropdown
            setFilter={props.setFilter}
            getChecked={props.getChecked}
            type={DecorationType}
            name="Decoration"
          />
          <InventoryDropdown
            setFilter={props.setFilter}
            getChecked={props.getChecked}
            type={OtherType}
            name="Other"
          />
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
