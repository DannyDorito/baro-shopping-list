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
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useEffect, useState } from "react";
import {
  CosmeticType,
  DecorationType,
  EquipmentType,
  InventoryType,
  ModType,
  OtherType,
  WeaponType,
} from "@/types/BaseItem";
import { data } from "@/data/InventoryData";
import Image from "next/image";
import Ducats from "../public/images/Ducats.png";
import Credits from "../public/images/Credits.png";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { InventoryDropdown } from "./InventoryDropdown";
import { columns } from "./ColumnDef";
import { InventoryPagination } from "./InventoryPagination";
import { InventoryTableProps } from "@/interfaces/InventoryTableProps";
import { debug } from "@/lib/utils";

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

  const table = useReactTable({
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

  useEffect(() => {
    const selectedRows = table
      .getSelectedRowModel()
      .rows.map((r) => r.original);
    let ducats = 0;
    let credits = 0;

    selectedRows.forEach((sr) => {
      ducats += sr.ducats;
      credits += sr.credits;
    });

    setDucats(ducats);
    setCredits(credits);
  }, [rowSelection, table]);

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
  }, [rowSelection]);

  const setFilter = (
    type: InventoryType,
    column: string,
    value: string,
    checked: boolean
  ) => {
    const filterValue = checked
      ? type[value as keyof typeof type].toString()
      : undefined;
    table.getColumn(column)?.setFilterValue(filterValue);
  };

  const getChecked = (type: InventoryType, column: string, value: string) => {
    const filterType = type[value as keyof typeof type].toString();
    const filterValue = table.getColumn(column)?.getFilterValue() as string;
    return filterType === filterValue;
  };

  return (
    <div className="w-full">
      <div className="flex items-center py-4">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="ml-auto mr-3">
              Filter&nbsp;
              <ChevronDown />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <InventoryDropdown
              setFilter={setFilter}
              getChecked={getChecked}
              type={EquipmentType}
              name={"Equipment"}
            />
            <InventoryDropdown
              setFilter={setFilter}
              getChecked={getChecked}
              type={CosmeticType}
              name={"Cosmetic"}
            />
            <InventoryDropdown
              setFilter={setFilter}
              getChecked={getChecked}
              type={WeaponType}
              name={"Weapon"}
            />
            <InventoryDropdown
              setFilter={setFilter}
              getChecked={getChecked}
              type={ModType}
              name={"Mod"}
            />
            <InventoryDropdown
              setFilter={setFilter}
              getChecked={getChecked}
              type={DecorationType}
              name={"Decoration"}
            />
            <InventoryDropdown
              setFilter={setFilter}
              getChecked={getChecked}
              type={OtherType}
              name={"Other"}
            />
          </DropdownMenuContent>
        </DropdownMenu>
        <Input
          placeholder="Search"
          value={(table.getColumn("name")?.getFilterValue() as string) ?? ""}
          onChange={(event) =>
            table.getColumn("name")?.setFilterValue(event.target.value)
          }
          className="max-w-full"
        />
        <Button className="ml-3" onClick={() => table.resetColumnFilters()}>
          Clear
        </Button>
        <Button className="ml-3" onClick={() => table.resetRowSelection()}>
          Deselect All
        </Button>
      </div>
      <div className="rounded-md border">
        <Table>
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
                  No results.
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
                    alt={"Ducats"}
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
                    alt={"Credits"}
                    width={20}
                    height={20}
                    priority={false}
                  />
                  {credits.toLocaleString(undefined)}
                </div>
              </TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </div>
      <div className="flex items-center justify-end space-x-3 py-4">
        <div className="flex-1 text-sm text-muted-foreground">
          {table.getFilteredSelectedRowModel().rows.length} of&nbsp;
          {table.getFilteredRowModel().rows.length} row(s) selected.
        </div>
        <InventoryPagination table={table} />
      </div>
    </div>
  );
};
