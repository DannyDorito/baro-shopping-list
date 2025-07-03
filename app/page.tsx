"use client";

import { Footer } from "@/components/Footer";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Skeleton } from "@/components/ui/skeleton";
import { useLocal } from "@/lib/useLocal";
import { AlertCircleIcon } from "lucide-react";
import dynamic from "next/dynamic";
import { useEffect } from "react";
import { toast, useSonner } from "sonner";

const InventoryTable = dynamic(() => import("@/components/InventoryTable"), {
  ssr: false,
  loading: () => (
    <>
      <div className="py-4 flex items-center justify-between">
        <Skeleton className="w-full h-[40px] rounded-xl" />
      </div>
      <Skeleton className="w-full h-[446px] rounded-xl" />
      <div className="flex justify-center items-center space-x-3 py-4">
        <Skeleton className="w-[30%] h-[36px] rounded-xl" />
      </div>
    </>
  ),
});
export default function Home() {
  const [acceptedToast, setAcceptedToast] = useLocal("acceptedToast", false);
  const { toasts } = useSonner();

  useEffect(() => {
    if (!acceptedToast && toasts.length === 0) {
      toast("Cookie Policy", {
        description:
          'This site uses Preference Cookies to enhance your browsing experience by remembering what you have selected. By clicking "Accept" you consent to this.',
        duration: Infinity,
        action: {
          label: "Accept",
          onClick: () => setAcceptedToast(true),
        },
        cancel: {
          label: "Deny",
          onClick: () => setAcceptedToast(false),
        },
      });
    }
  }, [acceptedToast, setAcceptedToast, toasts.length]);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center md:p-24 p-0">
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
        Void Trader Observer
      </h1>
      <h2>Baro Item Checklist</h2>
      <div className="container mx-auto pt-8">
        <Alert variant="destructive">
          <AlertCircleIcon />
          <AlertTitle>This website is currently under development and subject to change</AlertTitle>
          <AlertDescription>
            <p>Currently under development:</p>
            <ul className="list-inside list-disc text-sm">
              <li>Filters</li>
              <li>Search by type</li>
            </ul>
          </AlertDescription>
        </Alert>
      </div>
      <div className="container mx-auto pt-8">
        <InventoryTable acceptedToast={acceptedToast} />
      </div>
      <Footer />
    </main>
  );
}
