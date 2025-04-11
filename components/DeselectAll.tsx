import { FunnelX } from "lucide-react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { DeselectAllProps } from "@/interfaces/DeselectAllProps";
import { Button } from "./ui/button";

export const DeselectAll = (props: DeselectAllProps) => {
  return (
    <Dialog open={props.open} onOpenChange={props.setOpen}>
      <DialogTrigger disabled={props.count === 0} asChild>
        <Button
          className="ml-3"
          aria-label="Clear Row Selection"
          disabled={props.count === 0}
        >
          <FunnelX /> Deselect All
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Deselect All</DialogTitle>
          <DialogDescription>
            Are you sure you want to deselect {props.count} items? This action
            cannot be undone.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <div className="flex flex-row justify-between w-full">
            <DialogClose asChild>
              <Button
                variant="secondary"
                className="cursor-pointer"
                onClick={() => props.setOpen(false)}
              >
                Cancel
              </Button>
            </DialogClose>
            <Button
              variant="destructive"
              className="cursor-pointer"
              onClick={props.onDeselectAll}
            >
              Deselect All
            </Button>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
