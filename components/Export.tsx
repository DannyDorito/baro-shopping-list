import ExportProps from "@/interfaces/ExportProps";
import { useMediaQuery } from "react-responsive";
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
import { Button } from "./ui/button";
import { Download, Loader2Icon } from "lucide-react";
import { toast } from "sonner";
import { useState } from "react";

export const Export = (props: ExportProps) => {
  const isSm = useMediaQuery({ query: "(max-width: 1224px)" });
  const [exporting, setExporting] = useState<"" | "export" | "copy">("");

  const copyToClipboard = () => {
    setExporting("copy");
    if (!navigator.clipboard) {
      toast.error("Clipboard not supported in this browser.", {
        description:
          "Please use a modern browser that supports the Clipboard API.",
      });
    }
    navigator.clipboard
      .writeText(JSON.stringify(props.rowSelection, null, 2))
      .then(
        () => {
          toast.success("Copied to clipboard!", {
            description: "Selected items have been copied to your clipboard.",
          });
        },
        (err) => {
          toast.error("Failed to copy!", {
            description: err,
          });
        }
      );
    setExporting("");
    props.setOpen(false);
  };

  const exportAsJson = () => {
    setExporting("export");

    try {
      const jsonData = JSON.stringify(props.rowSelection, null, 2);
      const blob = new Blob([jsonData], { type: "application/json" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "selected_items.json";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
      toast.success("Exported as JSON!", {
        description: "Selected items have been exported as a JSON file.",
      });
    } catch (error) {
      toast.error("Failed to export!", {
        description:
          typeof error === "object" && error !== null && "message" in error
            ? (error as { message: string }).message
            : String(error),
      });
    }

    setExporting("");
  };

  return (
    <Dialog open={props.open} onOpenChange={props.setOpen}>
      <DialogTrigger disabled={props.count === 0} asChild>
        <Button
          className="ml-3 cursor-pointer"
          aria-label="Export Selected Items"
          disabled={props.count === 0}
        >
          <Download />
          {!isSm && " Export Selected"}
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Export Selected Items</DialogTitle>
          <DialogDescription>
            How would you like to export the selected items? You can choose to
            export them as a JSON file or copy them to your clipboard.
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
              variant="default"
              className="cursor-pointer"
              onClick={copyToClipboard}
              disabled={exporting === "copy"}
            >
              {exporting === "copy" && <Loader2Icon className="animate-spin" />}
              Copy To Clipboard
            </Button>
            <Button
              variant="default"
              className="cursor-pointer"
              onClick={exportAsJson}
              disabled={exporting === "export"}
            >
              {exporting === "export" && (
                <Loader2Icon className="animate-spin" />
              )}
              Export as JSON
            </Button>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
