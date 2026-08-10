"use client";

import Image from "next/image";
import { motion } from "framer-motion";

type FunThing = {
  src: string;
  alt: string;
  caption?: string;
};

// Drop images into /public/fun/ and swap these in — placeholders for now.
const ITEMS: FunThing[] = [
  { src: "/fun/placeholder-1.jpg", alt: "Fun thing 1", caption: "Add a caption" },
  { src: "/fun/placeholder-2.jpg", alt: "Fun thing 2", caption: "Add a caption" },
  { src: "/fun/placeholder-3.jpg", alt: "Fun thing 3", caption: "Add a caption" },
  { src: "/fun/placeholder-4.jpg", alt: "Fun thing 4", caption: "Add a caption" },
];

export function FunThings() {
  return (
    <div className="flex gap-4 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
      {ITEMS.map((item, i) => (
        <motion.div
          key={item.src}
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ duration: 0.4, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
          className="group relative aspect-[4/5] w-[70vw] flex-none snap-start overflow-hidden rounded-sm bg-cream sm:w-[280px]"
          data-cursor="view"
          data-cursor-label="View"
        >
          <Image
            src={item.src}
            alt={item.alt}
            fill
            sizes="(min-width: 640px) 280px, 70vw"
            className="object-cover transition-transform duration-500 ease-signature group-hover:scale-[1.04]"
          />
          {item.caption && (
            <div className="absolute inset-x-0 bottom-0 translate-y-2 bg-gradient-to-t from-ink/70 to-transparent p-4 opacity-0 transition-all duration-400 group-hover:translate-y-0 group-hover:opacity-100">
              <p className="font-mono text-caption uppercase tracking-[0.08em] text-white/85">
                {item.caption}
              </p>
            </div>
          )}
        </motion.div>
      ))}
    </div>
  );
}