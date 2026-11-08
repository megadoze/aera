/* eslint-disable @next/next/no-img-element */

import type { Metadata } from "next";
import PresentationPage from "./presentation";

export const metadata: Metadata = {
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
    },
  },
};

export default function Page() {
  return <PresentationPage />;
}
