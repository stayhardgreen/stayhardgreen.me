import { Html, Head, Main, NextScript } from "next/document";

// components
import { Overlay } from "@/components";

export default function Document() {
  return (
    <Html lang="en" className="h-full antialiased js-focus-visible">
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body className="flex h-full flex-col bg-zinc-50 dark:bg-black">
        <Overlay />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
