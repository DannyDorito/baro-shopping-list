"use client";

import { ColumnDef, SortDirection, Table } from "@tanstack/react-table";
import { ArrowDown, ArrowUp, ArrowUpDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { JSX } from "react";
import { BaseItem } from "@/types/BaseItem";
import Image from "next/image";
import Ducats from "../public/images/Ducats.png";
import Credits from "../public/images/Credits.png";
import Link from "next/link";
import { InventoryType } from "@/enums/Type";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "./ui/hover-card";
import { ScrollArea, ScrollBar } from "./ui/scroll-area";

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

export const getSortedDatesDecending = (
  ConsoleOfferingDates: string[],
  PCOfferingDates: string[],
  OfferingsDates: string[]
): string[] => {
  const allDates = [
    ...ConsoleOfferingDates,
    ...PCOfferingDates,
    ...OfferingsDates,
  ];
  return allDates.sort((a, b) => new Date(b).getTime() - new Date(a).getTime());
};

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
    accessorKey: "Name",
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
        href={`https://wiki.warframe.com/w/${(
          row.getValue("Link") as string
        ).replace(" ", "_")}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <p className="underline decoration-(--muted-foreground)">{row.getValue("Name")}</p>
      </Link>
    ),
    enableResizing: false,
  },
  {
    accessorKey: "Ducats",
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
        {parseInt(row.getValue("Ducats")).toLocaleString(undefined)}
      </div>
    ),
  },
  {
    accessorKey: "Credits",
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
        {parseInt(row.getValue("Credits")).toLocaleString(undefined)}
      </div>
    ),
  },
  {
    accessorKey: "LatestOfferingDate",
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
      const date = new Date(row.getValue("LatestOfferingDate"));
      let latestOfferingDate: string | JSX.Element;
      const isStaticDate = date.toISOString() === "0001-01-01T00:00:00.000Z";
      if (isStaticDate) {
        const name = row.getValue("Name") as string;
        if (["Sands of Inaros Blueprint", 'Void Surplus'].includes(name)) {
          latestOfferingDate = <span>Always Available</span>;
        } else if (name === "Fae Path Ephemera") {
          latestOfferingDate = (
            <span>
              Always Available <em>(Console)</em>
            </span>
          );
        } else {
          latestOfferingDate = <em>See Wiki</em>;
        }
      } else {
        latestOfferingDate = date.toLocaleDateString();
      }
      return isStaticDate ? (
        <div className="text-center">{latestOfferingDate}</div>
      ) : (
        <HoverCard>
          <HoverCardTrigger>
            <div className="text-center underline decoration-(--muted-foreground) cursor-pointer">{latestOfferingDate}</div>
          </HoverCardTrigger>
          <HoverCardContent>
            <span className="text-center underline decoration-(--muted-foreground)">All Dates</span>
            <ScrollArea className="">
              <ul className="list-inside list-disc text-sm">
                {getSortedDatesDecending(
                  row.getValue("ConsoleOfferingDates") as string[],
                  row.getValue("PCOfferingDates") as string[],
                  row.getValue("OfferingsDates") as string[]
                ).map((date, index) => (
                  <li key={date}>
                    {new Date(date).toLocaleDateString()}
                    {index === 0 ? <em>&nbsp;(Latest)</em> : ""}
                  </li>
                ))}
              </ul>
              <ScrollBar orientation="vertical" />
            </ScrollArea>
          </HoverCardContent>
        </HoverCard>
      );
    },
  },
  {
    accessorKey: "ItemType",
    filterFn: (row, columnId, filterValue) => {
      const value = row.getValue(columnId);
      if (Array.isArray(filterValue)) {
        return filterValue.includes(value?.toString());
      }
      return value?.toString() === filterValue;
    },
    header: ({ column }) => {
      return (
        <div className="flex justify-center">
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
            aria-label="Sort by item type"
            className="cursor-pointer"
          >
            Item Type
            {getSortingArrow(column.getIsSorted())}
          </Button>
        </div>
      );
    },
    cell: ({ row }) => {
      const itemType = row.getValue("ItemType") as InventoryType;
      return <div className="text-center">{InventoryType[itemType]}</div>;
    },
  },
  {
    accessorKey: "Link",
    header: ({ column }) => {
      return (
        <div className="flex justify-center">
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
            aria-label="Sort by link"
            className="cursor-pointer"
          >
            Link
            {getSortingArrow(column.getIsSorted())}
          </Button>
        </div>
      );
    },
    cell: ({ row }) => {
      return <div className="text-center">{row.getValue("Link")}</div>;
    },
  },
  {
    accessorKey: "Image",
    header: ({ column }) => {
      return (
        <div className="flex justify-center">
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
            aria-label="Sort by image"
            className="cursor-pointer"
          >
            Image
            {getSortingArrow(column.getIsSorted())}
          </Button>
        </div>
      );
    },
    cell: ({ row }) => {
      return <div className="text-center">{row.getValue("Image")}</div>;
    },
  },
  {
    accessorKey: "ConsoleOfferingDates",
    header: ({ column }) => {
      return (
        <div className="flex justify-center">
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
            aria-label="Sort by ConsoleOfferingDates"
            className="cursor-pointer"
          >
            ConsoleOfferingDates
            {getSortingArrow(column.getIsSorted())}
          </Button>
        </div>
      );
    },
    cell: ({ row }) => {
      return (
        <div className="text-center">
          {row.getValue("ConsoleOfferingDates")}
        </div>
      );
    },
  },
  {
    accessorKey: "PCOfferingDates",
    header: ({ column }) => {
      return (
        <div className="flex justify-center">
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
            aria-label="Sort by PCOfferingDates"
            className="cursor-pointer"
          >
            PCOfferingDates
            {getSortingArrow(column.getIsSorted())}
          </Button>
        </div>
      );
    },
    cell: ({ row }) => {
      return (
        <div className="text-center">{row.getValue("PCOfferingDates")}</div>
      );
    },
  },
  {
    accessorKey: "OfferingsDates",
    header: ({ column }) => {
      return (
        <div className="flex justify-center">
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
            aria-label="Sort by OfferingsDates"
            className="cursor-pointer"
          >
            OfferingsDates
            {getSortingArrow(column.getIsSorted())}
          </Button>
        </div>
      );
    },
    cell: ({ row }) => {
      return (
        <div className="text-center">{row.getValue("OfferingsDates")}</div>
      );
    },
  },
];

export type tableDef = Table<{
  Name: string;
  Ducats: number;
  Credits: number;
  Link: string;
  Image: string;
  ItemType: InventoryType;
  LatestOfferingDate: string;
  ConsoleOfferingDates: string[];
  PCOfferingDates: string[];
  OfferingsDates: string[];
}>;
