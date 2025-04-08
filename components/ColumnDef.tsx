"use client";

import { ColumnDef, Row, SortDirection } from "@tanstack/react-table";
import { ArrowDown, ArrowUp, ArrowUpDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { JSX } from "react";
import { BaseItem } from "@/types/BaseItem";
import Image from "next/image";
import Ducats from "../public/images/Ducats.png";
import Credits from "../public/images/Credits.png";
import Link from "next/link";

export const getSortingArrow = (
  sorting: false | SortDirection
): JSX.Element => {
  const icons = {
    asc: <ArrowUp />,
    desc: <ArrowDown />,
    false: <ArrowUpDown />,
  };
  return icons[sorting || "false"];
};

const defaultFilterFn = (
  row: Row<BaseItem>,
  columnId: string,
  filterValue: unknown[]
) => {
  const rowValue = row.getValue(columnId);
  return filterValue.includes(rowValue);
};

const typeColumns = [
  "decorationType",
  "cosmeticType",
  "equipmentType",
  "sentinelType",
  "weaponType",
  "modType",
  "modSubType",
  "otherType",
];

const typeColumnDefs = typeColumns.map((type) => ({
  accessorKey: type,
  filterFn: defaultFilterFn,
}));

export const columns: ColumnDef<BaseItem>[] = [
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
    filterFn: defaultFilterFn,
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
            loading="lazy"
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
            loading="lazy"
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
  ...typeColumnDefs,
];
