// This file configures the initialization of Sentry on the server.
// The config you add here will be used whenever the server handles a request.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "https://72b6d26bc6bcb75d4b832e0f96cc779a@o4509691783086080.ingest.de.sentry.io/4509691784396880",

  // Setting this option to true will print useful information to the console while you're setting up Sentry.
  debug: false,
});
