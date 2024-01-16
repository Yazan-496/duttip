"use client";
import { useEffect } from "react";
import NextError from "next/error";

export default function GlobalError({ error }) {
  console.log("0000000000");
  useEffect(() => {
    // console.log(`${error}`, error, "sdsad");
    // Sentry.captureException(`${error}`, {
    //   user: {
    //     id: "102",
    //     username: "Kinan",
    //   },
    //   tags: {
    //     user_role: "admin",
    //   },
    // });
  }, [error]);

  return (
    <html>
      <body>
        sdasd
        {/* This is the default Next.js error component but it doesn't allow omitting the statusCode property yet. */}
        <NextError />
      </body>
    </html>
  );
}
