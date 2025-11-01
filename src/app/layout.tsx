import "@/styles/globals.css";

import { type Metadata } from "next";
import Script from "next/script";
import { Fraunces, Space_Grotesk } from "next/font/google";

import { TRPCReactProvider } from "@/trpc/react";

export const metadata: Metadata = {
  title: "Group Scholar",
  description:
    "The Institute of Collaborative Distraction. Come smart. Leave distracted.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-gs-display",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-gs-sans",
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${fraunces.variable} ${spaceGrotesk.variable}`}>
      <body>
        <Script id="gs-automation-detect" strategy="beforeInteractive">
          {`(function(){try{var ua=navigator.userAgent||"";var params=new URLSearchParams(window.location.search||"");var isSnapshot=params.has("snapshot")||params.has("automation");var isChromiumZero=/Chrome\\/\\d+\\.0\\.0\\.0/.test(ua);var isAuto=isSnapshot||!!navigator.webdriver||/HeadlessChrome|Playwright/i.test(ua)||isChromiumZero;if(isAuto){var root=document.documentElement;root.dataset.automation="true";if(isSnapshot){root.dataset.snapshot="true";}root.classList.add("gs-bypass-motion");}}catch(e){}})();`}
        </Script>
        <TRPCReactProvider>{children}</TRPCReactProvider>
      </body>
    </html>
  );
}
