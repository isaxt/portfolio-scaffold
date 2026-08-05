"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Container } from "@/components/layout/Container";

// Ported directly from the original art.html — same groupings (some pieces
// are shown as a multi-image series), same captions, same order.
type Piece = {
  id: string;
  images: string[]; // paths under /public/art
  caption: string;
};

const PIECES: Piece[] = [
  {
    id: "perception",
    images: ["/art/eyes_series.jpg", "/art/ears_series.jpg", "/art/mouth_series.jpg"],
    caption: "Perception — 2022",
  },
  {
    id: "implanted",
    images: ["/art/Arm_Series.jpg"],
    caption: "implanted (flesh circuit) — 2022",
  },
  {
    id: "organs",
    images: ["/art/body_case.jpg", "/art/body_inside.jpg"],
    caption: "sorry i left my organs at home i need to go back",
  },
  {
    id: "slipper",
    images: ["/art/shoe_print.jpg"],
    caption: "Piccola Pantofola (Little Slipper) — 2021",
  },
  {
    id: "entangled",
    images: ["/art/fish_1.jpg", "/art/fish_2.jpg", "/art/fish_3.jpg"],
    caption: "Entangled — 2022",
  },
  {
    id: "sicut-et-nos",
    images: ["/art/skull.jpg"],
    caption: "Sicut Et Nos Aetate — 2022",
  },
  {
    id: "relief-print",
    images: ["/art/red_print.jpg"],
    caption: "Relief Print — 2022",
  },
  {
    id: "still-life",
    images: ["/art/still_life.jpg"],
    caption: "Untitled — 2021",
  },
];

// Flattened, in display order, for lightbox next/prev navigation.
const FLAT = PIECES.flatMap((piece) =>
  piece.images.map((src) => ({ src, caption: piece.caption }))
);

export default function Art() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (activeIndex === null) return;
      if (e.key === "Escape") setActiveIndex(null);
      if (e.key === "ArrowRight") setActiveIndex((i) => (i === null ? i : (i + 1) % FLAT.length));
      if (e.key === "ArrowLeft")
        setActiveIndex((i) => (i === null ? i : (i - 1 + FLAT.length) % FLAT.length));
    }
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [activeIndex]);

  return (
    <div className="pt-40">
      <Container className="border-b border-line pb-16">
        <p className="label-caps mb-4">Art</p>
        <h1 className="font-display text-display-lg italic text-signal">Art Gallery</h1>
        <p className="mt-3 text-body-lg text-ink-60">
          Drawings, paintings, mixed media + visual experiments.
        </p>
      </Container>

      <Container className="py-20">
        <div className="columns-1 gap-5 sm:columns-2 lg:columns-3">
          {PIECES.map((piece) => {
            const flatStart = FLAT.findIndex((f) => f.src === piece.images[0]);
            return (
              <div key={piece.id} className="mb-5 break-inside-avoid">
                <div
                  className={
                    piece.images.length > 1
                      ? "grid grid-cols-3 gap-1 overflow-hidden rounded-sm"
                      : "overflow-hidden rounded-sm"
                  }
                >
                  {piece.images.map((src, i) => (
                    <button
                      key={src}
                      onClick={() => setActiveIndex(flatStart + i)}
                      data-cursor="view"
                      data-cursor-label="View"
                      className={
                        piece.images.length > 1
                          ? "relative aspect-[3/4]"
                          : "relative block w-full"
                      }
                      style={
                        piece.images.length === 1
                          ? { aspectRatio: "4 / 5" }
                          : undefined
                      }
                    >
                      <Image
                        src={src}
                        alt={piece.caption}
                        fill
                        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                        className="object-cover transition-transform duration-500 ease-signature hover:scale-[1.03]"
                      />
                    </button>
                  ))}
                </div>
                <p className="mt-3 font-mono text-caption uppercase tracking-[0.08em] text-ink-60">
                  {piece.caption}
                </p>
              </div>
            );
          })}
        </div>
      </Container>

      <AnimatePresence>
        {activeIndex !== null && FLAT[activeIndex] && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveIndex(null)}
            className="fixed inset-0 z-[200] flex items-center justify-center bg-ink/95 p-8"
          >
            <div
              className="relative flex max-h-[80vh] w-full max-w-3xl items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={FLAT[activeIndex].src}
                alt={FLAT[activeIndex].caption}
                width={1200}
                height={1500}
                className="max-h-[80vh] w-auto object-contain"
              />
            </div>
            <p className="absolute bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap font-mono text-caption uppercase tracking-[0.1em] text-white/80">
              {FLAT[activeIndex].caption}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
