"use client";

import { Checkbox } from "@/components/ui/checkbox";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { inventoryList } from "@/data/InventoryData";
import { BaseItem } from "@/types/_BaseItem";
import { CheckedState } from "@radix-ui/react-checkbox";
import { useState } from "react";
import Image from "next/image";
import Ducats from "../public/images/Ducats.png";
import Credits from "../public/images/Credits.png";
export default function Home() {
  const [selected, setSelected] = useState<BaseItem[]>([]);
  const [ducats, setDucats] = useState<number>(0);
  const [credits, setCredits] = useState<number>(0);

  const updateSelected = (checked: CheckedState, id: string) => {
    if (checked === true) {
      const updatedSelected = selected;
      const item = inventoryList.filter((item) => item.id === id)[0];
      setDucats(ducats + item.ducats);
      setCredits(credits + item.credits);

      updatedSelected.push(item);
      setSelected(updatedSelected);
    } else {
      const item = inventoryList.filter((item) => item.id === id)[0];
      setDucats(ducats - item.ducats);
      setCredits(credits - item.credits);

      setSelected(selected.filter((item) => item.id !== id));
    }
  };

  const selectAll = (checked: CheckedState) => {
    if (checked === true) {
      setSelected(inventoryList);
      setDucats(
        inventoryList
          .map((item) => item.ducats)
          .reduce((partialSum, a) => partialSum + a, 0)
      );
      setCredits(
        inventoryList
          .map((item) => item.credits)
          .reduce((partialSum, a) => partialSum + a, 0)
      );
    } else {
      setSelected([]);
      setDucats(0);
      setCredits(0);
    }
  };

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
          Void Trader
        </h1>
        <div className="container mx-auto py-10">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>
                  <Checkbox
                    disabled
                    onCheckedChange={(checked) => selectAll(checked)}
                  ></Checkbox>
                </TableHead>
                <TableHead>Name</TableHead>
                <TableHead className="text-right">Ducats</TableHead>
                <TableHead className="text-right">Credits</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {inventoryList.map((item, index) => (
                <TableRow key={`${item.name}-${index}`}>
                  <TableCell>
                    <Checkbox
                      onCheckedChange={(checked) =>
                        updateSelected(checked, item.id)
                      }
                    ></Checkbox>
                  </TableCell>
                  <TableCell>{item.name}</TableCell>
                  <TableCell className="text-right">{item.ducats}</TableCell>
                  <TableCell className="text-right">{item.credits}</TableCell>
                </TableRow>
              ))}
            </TableBody>
            <TableFooter>
              <TableRow>
                <TableCell></TableCell>
                <TableCell>Total</TableCell>
                <TableCell className="text-right">
                  <div className="flex flex-row justify-end">
                    <Image
                      src={Ducats}
                      alt={"Ducats"}
                      width={20}
                      height={20}
                      priority={true}
                    />
                    <p>
                      {ducats === 0 ? ducats : ducats.toLocaleString(undefined)}
                    </p>
                  </div>
                </TableCell>
                <TableCell className="text-right">
                  <div className="flex flex-row justify-end">
                    <Image
                      src={Credits}
                      alt={"Credits"}
                      width={20}
                      height={20}
                      priority={true}
                    />
                    <p>
                      {credits === 0
                        ? credits
                        : credits.toLocaleString(undefined)}
                    </p>
                  </div>
                </TableCell>
              </TableRow>
            </TableFooter>
            <TableCaption>My Shopping List For Baro</TableCaption>
          </Table>
        </div>
      </main>
    </div>
  );
}
