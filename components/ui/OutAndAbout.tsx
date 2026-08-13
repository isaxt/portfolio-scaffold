"use client";

import { ImageStrip, type StripImage } from "./ImageStrip";

// Drop photos into /public/out-and-about/ and list them here.
const PHOTOS: StripImage[] = [
  { src: "/out-and-about/photo-01.jpg", alt: "Add a description" },
  { src: "/out-and-about/photo-02.jpg", alt: "Add a description" },
  { src: "/out-and-about/photo-03.jpg", alt: "Add a description" },
  { src: "/out-and-about/photo-04.jpg", alt: "Add a description" },
];

export function OutAndAbout() {
  return <ImageStrip images={PHOTOS} />;
}