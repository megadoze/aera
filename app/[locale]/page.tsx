/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import MarsCapsuleLanding from "./marsCapsule";

const SITE_NAME = "AERA CAPSULE MARS";
const CANONICAL = "/";
const siteUrl = process.env.SITE_URL ?? "";

function normalizeBaseUrl(url: string) {
  return url.replace(/\/+$/, "");
}

export const metadata: Metadata = (() => {
  const base = normalizeBaseUrl(siteUrl);
  const metadataBase = new URL(base || "http://localhost:3000");
  const canonicalAbs = base ? `${base}${CANONICAL}` : CANONICAL;
  const ogImage = "/img/aeracapsule.jpg";

  return {
    metadataBase,
    title: "Mars Capsule — футуристическая капсула для premium stay и glamping",
    description:
      "Концепт футуристической капсулы для глэмпинга, retreat-проектов и уникального short-stay формата. Mars Capsule продаёт не просто ночёвку, а редкий визуальный опыт.",
    alternates: {
      canonical: canonicalAbs,
    },
    openGraph: {
      type: "website",
      title:
        "Mars Capsule — футуристическая капсула для premium stay и glamping",
      description:
        "Концепт футуристической капсулы для глэмпинга, retreat-проектов и уникального short-stay формата.",
      url: canonicalAbs,
      siteName: SITE_NAME,
      locale: "ru_RU",
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: SITE_NAME,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title:
        "Mars Capsule — футуристическая капсула для premium stay и glamping",
      description:
        "Mars Capsule — концепт капсулы для wow-опыта, глэмпинга и premium short-stay.",
      images: [ogImage],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
})();

export default function Page() {
  return <MarsCapsuleLanding />;
}
