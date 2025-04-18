import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const NotFound = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center md:p-24 p-0">
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
        Not Found
      </h1>
      <h2 className="text-muted-foreground">
        Could not find requested resource
      </h2>
      <div className="container mx-auto pt-8">
        <div className="w-full flex flex-col items-center justify-center space-x-3 py-10">
          <Link href="/" hrefLang="en-gb" aria-label="Return Home">
            <Button className="cursor-pointer">Return Home</Button>
          </Link>
        </div>
      </div>
      <Footer hideFeedback />
    </main>
  );
}

export default NotFound;
