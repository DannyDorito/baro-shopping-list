import { Heart } from "lucide-react";
import Link from "next/link";
import { Feedback } from "./Feedback";
import { useState } from "react";

export const Footer = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex min-h-fit flex-col items-center overflow-hidden">
      <Feedback open={open} setOpen={setOpen} />
      <p className="leading-7 [&:not(:first-child)]:mt-6 text-center">
        Created in&nbsp;
        <Link
          href="https://code.visualstudio.com"
          target="_blank"
          hrefLang="en-gb"
          rel="noopener noreferrer"
          className="underline"
          aria-label="VS Code"
        >
          VS Code
        </Link>
        , built in&nbsp;
        <Link
          href="https://nextjs.org"
          target="_blank"
          hrefLang="en-gb"
          rel="noopener noreferrer"
          className="underline"
          aria-label="Next.js"
        >
          Next.js
        </Link>
        &nbsp;and&nbsp;
        <Link
          href="https://ui.shadcn.com"
          target="_blank"
          hrefLang="en-gb"
          rel="noopener noreferrer"
          className="underline"
          aria-label="shadcn UI"
        >
          shadcn/ui
        </Link>
        ,&nbsp;deployed to&nbsp;
        <Link
          href="https://www.cloudflare.com"
          target="_blank"
          hrefLang="en-gb"
          rel="noopener noreferrer"
          className="underline"
          aria-label="Cloudflare"
        >
          Cloudflare
        </Link>
        .
      </p>
      <p className="flex items-center">
        <Heart size={18} />
        &nbsp;John Allison.
      </p>
    </div>
  );
};
