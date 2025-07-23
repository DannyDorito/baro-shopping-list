"use client";

import { SearchX } from "lucide-react";
import { Button } from "./ui/button";
import InventoryDropdown from "./InventoryDropdown";
import { Input } from "./ui/input";
import DeselectAll from "./DeselectAll";
import { useMediaQuery } from "react-responsive";
import ActionBarProps from "@/interfaces/ActonBarProps";
import { Export } from "./Export";

const ActionBar = (props: ActionBarProps) => {
  const isSm = useMediaQuery({ query: "(max-width: 1224px)" });

  return (
    <div className="flex items-center py-4">
      <InventoryDropdown
        setFilter={props.setFilter}
        getChecked={props.getChecked}
      />
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
      <Export
        count={props.table.getFilteredSelectedRowModel().rows.length}
        open={props.openExport}
        setOpen={props.setOpenExport}
        rowSelection={props.table.getSelectedRowModel().flatRows}
      />
    </div>
  );
};

export default ActionBar;
