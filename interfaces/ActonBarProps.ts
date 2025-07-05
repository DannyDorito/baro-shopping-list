import { tableDef } from "@/components/ColumnDef";
import { InventoryType } from "@/enums/Type";
import { ColumnFiltersState } from "@tanstack/react-table";
import { ChangeEvent } from "react";

export default interface ActionBarProps {
  setFilter: (
    type: InventoryType | InventoryType[],
    column: string,
    checked: boolean
  ) => void;
  getChecked: (
    type: InventoryType | InventoryType[],
    column: string
  ) => boolean;
  handleDeselectAll: (table: tableDef) => () => void;
  handleSearchChange: (
    table: tableDef
  ) => (event: ChangeEvent<HTMLInputElement>) => void;
  handleClearFilters: (table: tableDef) => () => void;
  table: tableDef;
  setOpenDeselectAll: (open: boolean) => void;
  openDeselectAll: boolean;
  setOpenExport: (open: boolean) => void;
  openExport: boolean;
  setRowSelection: (rowSelection: object) => void;
  columnFilters: ColumnFiltersState;
}
