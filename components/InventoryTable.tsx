"use client";

import {
  ColumnFiltersState,
  SortingState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ChangeEvent, useEffect, useMemo, useState } from "react";
import { InventoryType } from "@/types/BaseItem";
import { data } from "@/data/InventoryData";
import Image from "next/image";
import Ducats from "../public/images/Ducats.png";
import Credits from "../public/images/Credits.png";
import { columns, tableDef } from "./ColumnDef";
import { InventoryPagination } from "./InventoryPagination";
import { InventoryTableProps } from "@/interfaces/InventoryTableProps";
import { debug } from "@/lib/utils";
import { ActionBar } from "./ActionBar";

export const InventoryTable = (props: InventoryTableProps) => {
  const [sorting, setSorting] = useState<SortingState>([
    {
      id: "name",
      desc: false,
    },
  ]);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);

  const [rowSelection, setRowSelection] = useState({});

  const [ducats, setDucats] = useState<number>(0);
  const [credits, setCredits] = useState<number>(0);

  const [openDeselectAll, setOpenDeselectAll] = useState(false);

  const table: tableDef = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onRowSelectionChange: setRowSelection,
    enableColumnFilters: true,
    state: {
      sorting,
      columnFilters,
      rowSelection,
    },
    initialState: {
      columnVisibility: {
        name: true,
        ducats: true,
        credits: true,
        decorationType: debug,
        cosmeticType: debug,
        equipmentType: debug,
        sentinelType: debug,
        weaponType: debug,
        modType: debug,
        modSubType: debug,
        otherType: debug,
      },
    },
  });

  const { ducats: memoizedDucats, credits: memoizedCredits } = useMemo(() => {
    const selectedRows = table
      .getSelectedRowModel()
      .rows.map((r) => r.original);
    let ducats = 0;
    let credits = 0;

    selectedRows.forEach((sr) => {
      ducats += sr.ducats;
      credits += sr.credits;
    });

    return { ducats, credits };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [rowSelection, table]);

  useEffect(() => {
    setDucats(memoizedDucats);
    setCredits(memoizedCredits);
  }, [memoizedDucats, memoizedCredits]);

  useEffect(() => {
    if (props.acceptedToast) {
      const savedSelection = window.localStorage.getItem("rowSelection");
      if (savedSelection) {
        const deserialized = JSON.parse(savedSelection) as object;
        setRowSelection(deserialized);
      }
    }
  }, [props.acceptedToast]);

  useEffect(() => {
    if (props.acceptedToast) {
      const serialized = JSON.stringify(rowSelection);
      window.localStorage.setItem("rowSelection", serialized);
    }
  }, [props.acceptedToast, rowSelection]);

  const setFilter = (
    type: InventoryType,
    column: string,
    value: string,
    checked: boolean,
    subType?: InventoryType,
    subColumn?: string,
    subValue?: string
  ) => {
    table.resetColumnFilters();
    const filterValue = checked
      ? type[value as keyof typeof type].toString()
      : undefined;
    table.getColumn(column)?.setFilterValue(filterValue);

    if (subColumn && subValue && subType) {
      const filterSubValue = checked
        ? subType[subValue as keyof typeof subType].toString()
        : undefined;
      table.getColumn(subColumn)?.setFilterValue(filterSubValue);
    }
  };

  const getChecked = (
    type: InventoryType,
    column: string,
    value: string,
    subType?: InventoryType,
    subColumn?: string,
    subValue?: string
  ) => {
    const filterType = type[value as keyof typeof type].toString();
    const filterValue = table.getColumn(column)?.getFilterValue() as string;

    if (subType && subColumn && subValue) {
      const filterSubType =
        subType[subValue as keyof typeof subType].toString();
      const filterSubValue = table
        .getColumn(subColumn)
        ?.getFilterValue() as string;

      if (filterType === filterValue && !filterSubValue) {
        return true;
      }
      return filterType === filterValue && filterSubType === filterSubValue;
    }

    return filterType === filterValue;
  };

  const handleDeselectAll = (table: tableDef) => () => {
    if (table.getFilteredSelectedRowModel().rows.length === 0) return;
    setOpenDeselectAll(false);
    table.resetRowSelection();
  };

  const handleSearchChange =
    (table: tableDef) => (event: ChangeEvent<HTMLInputElement>) => {
      table.getColumn("name")?.setFilterValue(event.target.value);
    };

  const handleClearFilters = (table: tableDef) => () => {
    table.resetColumnFilters();
  };

  return (
    <div className="w-full">
      <ActionBar
        setFilter={setFilter}
        getChecked={getChecked}
        handleDeselectAll={handleDeselectAll}
        handleSearchChange={handleSearchChange}
        handleClearFilters={handleClearFilters}
        table={table}
        setOpenDeselectAll={setOpenDeselectAll}
        openDeselectAll={openDeselectAll}
        setRowSelection={setRowSelection}
        columnFilters={columnFilters}
      />
      <div className="rounded-md border">
        <Table className="w-full">
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup, index) => (
              <TableRow key={`row-${headerGroup.id}-${index}`}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={`${header.id}-${index}`}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row, index) => (
                <TableRow
                  key={`${row.id}-${index}`}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell, index) => (
                    <TableCell key={`${cell.id}-${index}`}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results found.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TableCell></TableCell>
              <TableCell className="font-bold">Total</TableCell>
              <TableCell className="text-right">
                <div className="flex flex-row justify-end font-bold">
                  <Image
                    src={Ducats}
                    alt={"Total Ducats image"}
                    width={20}
                    height={20}
                    priority={false}
                  />
                  {ducats.toLocaleString(undefined)}
                </div>
              </TableCell>
              <TableCell className="text-right">
                <div className="flex flex-row justify-end font-bold">
                  <Image
                    src={Credits}
                    alt={"Total Credits image"}
                    width={20}
                    height={20}
                    priority={false}
                  />
                  {credits.toLocaleString(undefined)}
                </div>
              </TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </div>
      <div className="flex items-center flex-col justify-end space-x-3 py-4">
        <InventoryPagination table={table} />
        <div className="text-sm text-muted-foreground pt-4">
          {table.getFilteredSelectedRowModel().rows.length} of&nbsp;
          {table.getFilteredRowModel().rows.length} row(s) selected.
        </div>
      </div>
    </div>
  );
};
