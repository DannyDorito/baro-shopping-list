"use client";

import {
  ColumnDef,
  ColumnFiltersState,
  SortDirection,
  SortingState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { ArrowDown, ArrowUp, ArrowUpDown, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
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
import { JSX, useEffect, useState } from "react";
import {
  BaseItem,
  CosmeticType,
  DecorationType,
  EquipmentType,
  ModSubType,
  ModType,
  OtherType,
  SentinelType,
  WeaponType,
} from "@/types/BaseItem";
import { inventoryList as data } from "@/data/InventoryData";
import Image from "next/image";
import Ducats from "../public/images/Ducats.png";
import Credits from "../public/images/Credits.png";
import Link from "next/link";
import useLocalStorage from "@/lib/uselocalstorage";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuPortal,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

const getSortingArrow = (sorting: false | SortDirection): JSX.Element => {
  if (sorting === "asc") return <ArrowUp />;
  else if (sorting === "desc") return <ArrowDown />;
  else return <ArrowUpDown />;
};

const columns: ColumnDef<BaseItem>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
        className="align-middle"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
        className="align-middle"
      />
    ),
    enableSorting: false,
    enableHiding: false,
    enableResizing: false,
  },
  {
    accessorKey: "name",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Name
          {getSortingArrow(column.getIsSorted())}
        </Button>
      );
    },
    cell: ({ row }) => (
      <Link
        href={`https://wiki.warframe.com/?search=${row.getValue("name")}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <p className="underline decoration-(--muted)">{row.getValue("name")}</p>
      </Link>
    ),
  },
  {
    accessorKey: "ducats",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          <Image
            src={Ducats}
            alt={"Ducats"}
            width={20}
            height={20}
            priority={true}
          />
          Ducats
          {getSortingArrow(column.getIsSorted())}
        </Button>
      );
    },
    cell: ({ row }) => (
      <div className="text-right">
        {parseInt(row.getValue("ducats")).toLocaleString(undefined)}
      </div>
    ),
  },
  {
    accessorKey: "credits",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          <Image
            src={Credits}
            alt={"Credits"}
            width={20}
            height={20}
            priority={true}
          />
          Credits
          {getSortingArrow(column.getIsSorted())}
        </Button>
      );
    },
    cell: ({ row }) => (
      <div className="text-right">
        {parseInt(row.getValue("credits")).toLocaleString(undefined)}
      </div>
    ),
  },
  {
    accessorKey: "decorationType",
  },
  {
    accessorKey: "cosmeticType",
  },
  {
    accessorKey: "equipmentType",
  },
  {
    accessorKey: "sentinelType",
  },
  {
    accessorKey: "weaponType",
  },
  {
    accessorKey: "modType",
  },
  {
    accessorKey: "modSubType",
  },
  {
    accessorKey: "otherType",
  },
];

export const InventoryTable = () => {
  const [sorting, setSorting] = useState<SortingState>([
    {
      id: "name",
      desc: false,
    },
  ]);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);

  const [rowSelection, setRowSelection] = useLocalStorage("rowSelection", {});

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
        decorationType: false,
        cosmeticType: false,
        equipmentType: false,
        sentinelType: false,
        weaponType: false,
        modType: false,
        modSubType: false,
        otherType: false,
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

  // useEffect(() => {
  //   if (acceptedToast) {
  //     const savedSelection = window.localStorage.getItem("rowSelection");
  //     if (savedSelection) {
  //       const deserialized = JSON.parse(savedSelection) as object;
  //       setRowSelection(deserialized);
  //     }
  //   }
  // }, [acceptedToast])

  const setFilter = (
    type:
      | "otherType"
      | "equipmentType"
      | "cosmeticType"
      | "sentinelType"
      | "weaponType"
      | "modType"
      | "modSubType"
      | "decorationType",
    value: string
  ) => {
    let filterValue = "";
    switch (type) {
      case "otherType":
        filterValue = OtherType[value as keyof typeof OtherType].toString();
        break;
      case "equipmentType":
        filterValue =
          EquipmentType[value as keyof typeof EquipmentType].toString();
        break;
      case "cosmeticType":
        filterValue =
          CosmeticType[value as keyof typeof CosmeticType].toString();
        break;
      case "sentinelType":
        filterValue =
          SentinelType[value as keyof typeof SentinelType].toString();
        break;
      case "weaponType":
        filterValue = WeaponType[value as keyof typeof WeaponType].toString();
        break;
      case "modType":
        filterValue = ModType[value as keyof typeof ModType].toString();
        break;
      case "modSubType":
        filterValue = ModSubType[value as keyof typeof ModSubType].toString();
        break;
      case "decorationType":
        filterValue =
          DecorationType[value as keyof typeof DecorationType].toString();
        break;
      default:
        break;
    }
    setColumnFilters([]);
    table.getColumn(type)?.setFilterValue(filterValue);
  };

  return (
    <div className="w-full">
      <div className="flex items-center py-4">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="ml-auto mr-3">
              Filter <ChevronDown />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuSub>
              <DropdownMenuSubTrigger>Equipment</DropdownMenuSubTrigger>
              <DropdownMenuPortal>
                <DropdownMenuSubContent>
                  {Object.keys(EquipmentType)
                    .filter(
                      (key) =>
                        !isNaN(
                          EquipmentType[key as keyof typeof EquipmentType]
                        ) && key !== "None"
                    )
                    .map((e) => (
                      <DropdownMenuCheckboxItem
                        key={e}
                        onCheckedChange={() => setFilter("equipmentType", e)}
                      >
                        {e.replace("_", " ")}
                      </DropdownMenuCheckboxItem>
                    ))}
                </DropdownMenuSubContent>
              </DropdownMenuPortal>
            </DropdownMenuSub>
            <DropdownMenuSub>
              <DropdownMenuSubTrigger>Cosmetics</DropdownMenuSubTrigger>
              <DropdownMenuPortal>
                <DropdownMenuSubContent>
                  {Object.keys(CosmeticType)
                    .filter(
                      (key) =>
                        !isNaN(
                          CosmeticType[key as keyof typeof CosmeticType]
                        ) && key !== "None"
                    )
                    .map((e) => (
                      <DropdownMenuCheckboxItem
                        key={e}
                        onCheckedChange={() => setFilter("cosmeticType", e)}
                      >
                        {e.replace("_", " ")}
                      </DropdownMenuCheckboxItem>
                    ))}
                </DropdownMenuSubContent>
              </DropdownMenuPortal>
            </DropdownMenuSub>
            <DropdownMenuSub>
              <DropdownMenuSubTrigger>Weapon</DropdownMenuSubTrigger>
              <DropdownMenuPortal>
                <DropdownMenuSubContent>
                  {Object.keys(WeaponType)
                    .filter(
                      (key) =>
                        !isNaN(WeaponType[key as keyof typeof WeaponType]) &&
                        key !== "None"
                    )
                    .map((e) => (
                      <DropdownMenuCheckboxItem
                        key={e}
                        onCheckedChange={() => setFilter("weaponType", e)}
                      >
                        {e.replace("_", " ")}
                      </DropdownMenuCheckboxItem>
                    ))}
                </DropdownMenuSubContent>
              </DropdownMenuPortal>
            </DropdownMenuSub>
            <DropdownMenuSub>
              <DropdownMenuSubTrigger>Mod</DropdownMenuSubTrigger>
              <DropdownMenuPortal>
                <DropdownMenuSubContent>
                  {Object.keys(ModType)
                    .filter(
                      (key) =>
                        !isNaN(ModType[key as keyof typeof ModType]) &&
                        key !== "None"
                    )
                    .map((e) => (
                      <DropdownMenuCheckboxItem
                        key={e}
                        onCheckedChange={() => setFilter("modType", e)}
                      >
                        {e.replace("_", " ")}
                      </DropdownMenuCheckboxItem>
                    ))}
                </DropdownMenuSubContent>
              </DropdownMenuPortal>
            </DropdownMenuSub>
            <DropdownMenuSub>
              <DropdownMenuSubTrigger>Decoration</DropdownMenuSubTrigger>
              <DropdownMenuPortal>
                <DropdownMenuSubContent>
                  {Object.keys(DecorationType)
                    .filter(
                      (key) =>
                        !isNaN(
                          DecorationType[key as keyof typeof DecorationType]
                        ) && key !== "None"
                    )
                    .map((e) => (
                      <DropdownMenuCheckboxItem
                        key={e}
                        onCheckedChange={() => setFilter("decorationType", e)}
                      >
                        {e.replace("_", " ")}
                      </DropdownMenuCheckboxItem>
                    ))}
                </DropdownMenuSubContent>
              </DropdownMenuPortal>
            </DropdownMenuSub>
            <DropdownMenuSub>
              <DropdownMenuSubTrigger>Other</DropdownMenuSubTrigger>
              <DropdownMenuPortal>
                <DropdownMenuSubContent>
                  {Object.keys(OtherType)
                    .filter(
                      (key) =>
                        !isNaN(OtherType[key as keyof typeof OtherType]) &&
                        key !== "None"
                    )
                    .map((e) => (
                      <DropdownMenuCheckboxItem
                        key={e}
                        onCheckedChange={() => setFilter("otherType", e)}
                      >
                        {e.replace("_", " ")}
                      </DropdownMenuCheckboxItem>
                    ))}
                </DropdownMenuSubContent>
              </DropdownMenuPortal>
            </DropdownMenuSub>
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
        <Button className="ml-3" onClick={() => setColumnFilters([])}>
          Clear
        </Button>
        <Button className="ml-3" onClick={() => setRowSelection({})}>
          Deselect All
        </Button>
      </div>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
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
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
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
                    priority={true}
                  />
                  {ducats === 0 ? ducats : ducats.toLocaleString(undefined)}
                </div>
              </TableCell>
              <TableCell className="text-right">
                <div className="flex flex-row justify-end font-bold">
                  <Image
                    src={Credits}
                    alt={"Credits"}
                    width={20}
                    height={20}
                    priority={true}
                  />
                  {credits === 0 ? credits : credits.toLocaleString(undefined)}
                </div>
              </TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </div>
      <div className="flex items-center justify-end space-x-2 py-4">
        <div className="flex-1 text-sm text-muted-foreground">
          {table.getFilteredSelectedRowModel().rows.length} of&nbsp;
          {table.getFilteredRowModel().rows.length} row(s) selected.
        </div>
        <div className="space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            Previous
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
};
