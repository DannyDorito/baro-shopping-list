import { tableDef } from "@/components/ColumnDef";
import { InventoryType } from "@/enums/Type";
import { ColumnFiltersState } from "@tanstack/react-table";
import { ChangeEvent } from "react";

export default interface ActionBarProps {
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
  handleDeselectAll: (table: tableDef) => () => void;
  handleSearchChange: (
    table: tableDef
  ) => (event: ChangeEvent<HTMLInputElement>) => void;
  handleClearFilters: (table: tableDef) => () => void;
  table: tableDef;
  setOpenDeselectAll: (open: boolean) => void;
  openDeselectAll: boolean;
  setRowSelection: (rowSelection: object) => void;
  columnFilters: ColumnFiltersState;
}
