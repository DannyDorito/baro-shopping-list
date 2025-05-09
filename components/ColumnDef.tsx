"use client";

import { ColumnDef, Row, SortDirection, Table } from "@tanstack/react-table";
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
  enableResizing: false,
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
        <div>
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
            aria-label="Sort by name"
            className="cursor-pointer"
          >
            Name
            {getSortingArrow(column.getIsSorted())}
          </Button>
        </div>
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
    enableResizing: false,
  },
  {
    accessorKey: "ducats",
    header: ({ column }) => {
      return (
        <div className="flex justify-center">
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
            aria-label="Sort by ducats"
            className="cursor-pointer"
          >
            <Image
              src={Ducats}
              alt={"Ducats image"}
              width={20}
              height={20}
              loading="lazy"
            />
            Ducats
            {getSortingArrow(column.getIsSorted())}
          </Button>
        </div>
      );
    },
    cell: ({ row }) => (
      <div className="text-center">
        {parseInt(row.getValue("ducats")).toLocaleString(undefined)}
      </div>
    ),
  },
  {
    accessorKey: "credits",
    header: ({ column }) => {
      return (
        <div className="flex justify-center">
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
            aria-label="Sort by credits"
            className="cursor-pointer"
          >
            <Image
              src={Credits}
              alt={"Credits image"}
              width={20}
              height={20}
              loading="lazy"
            />
            Credits
            {getSortingArrow(column.getIsSorted())}
          </Button>
        </div>
      );
    },
    cell: ({ row }) => (
      <div className="text-center">
        {parseInt(row.getValue("credits")).toLocaleString(undefined)}
      </div>
    ),
  },
  {
    accessorKey: "lastSeen",
    header: ({ column }) => {
      return (
        <div className="flex justify-center">
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
            aria-label="Sort by last seen"
            className="cursor-pointer"
          >
            Last Seen
            {getSortingArrow(column.getIsSorted())}
          </Button>
        </div>
      );
    },
    cell: ({ row }) => {
      const date = new Date(row.getValue("lastSeen"));
      let lastSeen: string | JSX.Element;

      if (date.toISOString() === "0001-01-01T00:00:00.000Z") {
        const name = row.getValue("name") as string;
        if (name === "Sands of Inaros Blueprint") {
          lastSeen = <span>Always Available</span>;
        } else if (name === "Fae Path Ephemera") {
          lastSeen = (
            <span>
              Always Available <em>(Console)</em>
            </span>
          );
        } else {
          lastSeen = <em>See Wiki</em>;
        }
      } else {
        lastSeen = date.toLocaleDateString();
      }
      return <div className="text-center">{lastSeen}</div>;
    },
  },
  ...typeColumnDefs,
];

export type tableDef = Table<{
  name: string;
  credits: number;
  ducats: number;
  lastSeen: string;
  otherType: number;
  equipmentType: number;
  cosmeticType: number;
  sentinelType: number;
  weaponType: number;
  modType: number;
  modSubType: number;
  decorationType: number;
}>;
