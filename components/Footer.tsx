"use client";

import Link from "next/link";
import Feedback from "./Feedback";
import { useState } from "react";

export const Footer = ({ hideFeedback }: { hideFeedback?: boolean }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex min-h-fit flex-col items-center overflow-hidden">
      {!hideFeedback && <Feedback open={open} setOpen={setOpen} />}
      <p className="leading-7 [&:not(:first-child)]:mt-6 text-center">
        Created By&nbsp;
        <Link
          href="https://github.com/DannyDorito"
          target="_blank"
          hrefLang="en-gb"
          rel="noopener noreferrer"
          className="underline"
          aria-label="Danny Dorito's GitHub"
        >
          Danny_Dorito
        </Link>
        .&nbsp;Using&nbsp;
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
      <p className="text-center">
        This site is not affiliated with Digital Extremes.
      </p>
    </div>
  );
};
