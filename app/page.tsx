"use client";

import { InventoryTable } from "@/components/InventoryTable";

export default function Home() {
  // const [ acceptedToast, setAcceptedToast ] = useLocalStorage('acceptedToast', false);
  // const { toasts } = useSonner();

  // useEffect(() => {
  //   if (!acceptedToast && toasts.length === 0) {
  //     toast('Cookie Policy', {
  //       description: 'This site uses Preference Cookies to enhance your browsing experience by remembering what you have selected. By clicking "Accept" you consent to this.',
  //       duration: Infinity,
  //       action: {
  //         label: 'Accept',
  //         onClick: () => setAcceptedToast(true)
  //       },
  //       cancel: {
  //         label: 'Deny',
  //         onClick: () => setAcceptedToast(false)
  //       }
  //     })
  //   }
  // }, [])

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 overflow-hidden">
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
        Void Trader
      </h1>
      <h2 className="text-muted-foreground">My shopping list for Baro</h2>
      <div className="container mx-auto py-10">
        <InventoryTable />
      </div>
    </main>
  );
}
