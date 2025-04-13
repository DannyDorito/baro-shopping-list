"use client";

import { Footer } from "@/components/Footer";
import { InventoryTable } from "@/components/InventoryTable";
import { useLocal } from "@/lib/useLocal";
import { useEffect } from "react";
import { toast, useSonner } from "sonner";

export default function Home() {
  const [acceptedToast, setAcceptedToast] = useLocal(
    "acceptedToast",
    false
  );
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
        Void Trader
      </h1>
      <h2 className="text-muted-foreground">My shopping list for Baro</h2>
      <div className="container mx-auto pt-8">
        <InventoryTable acceptedToast={acceptedToast} />
      </div>
      <Footer />
    </main>
  );
}
