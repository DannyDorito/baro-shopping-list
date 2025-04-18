"use client";

import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { BaseItem } from "@/types/BaseItem";
import { Table } from "@tanstack/react-table";
import {
  ChevronsLeft,
  ChevronLeft,
  ChevronRight,
  ChevronsRight,
} from "lucide-react";

const InventoryPagination = ({ table }: { table: Table<BaseItem> }) => (
  <div className="space-x-3 flex items-center">
    <Button
      variant="outline"
      size="icon"
      onClick={() => table.setPageIndex(0)}
      disabled={!table.getCanPreviousPage()}
      aria-label="First Page"
      className="cursor-pointer"
    >
      <ChevronsLeft />
    </Button>
    <Button
      variant="outline"
      size="icon"
      onClick={() => table.previousPage()}
      disabled={!table.getCanPreviousPage()}
      aria-label="Previous Page"
      className="cursor-pointer"
    >
      <ChevronLeft />
    </Button>
    <Select onValueChange={(value) => table.setPageSize(Number(value))}>
      <SelectTrigger className="w-30">
        <SelectValue
          placeholder={`Show ${table.getState().pagination.pageSize}`}
        />
      </SelectTrigger>
      <SelectContent>
        {[10, 25, 50, 100].map((pageSize, index) => (
          <SelectItem
            key={`size-${pageSize}-${index}`}
            value={pageSize.toString()}
          >
            Show {pageSize}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
    <Button
      variant="outline"
      size="icon"
      onClick={() => table.nextPage()}
      disabled={!table.getCanNextPage()}
      aria-label="Next Page"
      className="cursor-pointer"
    >
      <ChevronRight />
    </Button>
    <Button
      variant="outline"
      size="icon"
      onClick={() => table.setPageIndex(table.getPageCount() - 1)}
      disabled={!table.getCanNextPage()}
      aria-label="Last Page"
      className="cursor-pointer"
    >
      <ChevronsRight />
    </Button>
  </div>
);

export default InventoryPagination;
