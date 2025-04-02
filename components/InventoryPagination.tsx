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

export const InventoryPagination = ({ table }: { table: Table<BaseItem> }) => (
  <div className="space-x-3 flex items-center">
    <Button
      variant="outline"
      size="icon"
      onClick={() => table.setPageIndex(0)}
      disabled={!table.getCanPreviousPage()}
    >
      <ChevronsLeft />
    </Button>
    <Button
      variant="outline"
      size="icon"
      onClick={() => table.previousPage()}
      disabled={!table.getCanPreviousPage()}
    >
      <ChevronLeft />
    </Button>
    <Select onValueChange={(value) => table.setPageSize(Number(value))}>
      <SelectTrigger className="w-[180px]">
        <SelectValue
          placeholder={`Show ${table.getState().pagination.pageSize}`}
        />
      </SelectTrigger>
      <SelectContent>
        {[10, 20, 30, 40, 50].map((pageSize) => (
          <SelectItem key={pageSize} value={pageSize.toString()}>
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
    >
      <ChevronRight />
    </Button>
    <Button
      variant="outline"
      size="icon"
      onClick={() => table.setPageIndex(table.getPageCount() - 1)}
      disabled={!table.getCanNextPage()}
    >
      <ChevronsRight />
    </Button>
  </div>
);
