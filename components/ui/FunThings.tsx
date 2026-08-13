"use client";

import Image from "next/image";
import { motion } from "framer-motion";

type FunImage = {
  src: string;
  alt: string;
};

type FunGroup = {
  id: string;
  title: string;
  credit?: string;
  images: FunImage[];
};

// Each group renders as its own horizontal strip with a small title/credit
// line above it — good fit for a set of photos from one event or piece,
// as opposed to a single unrelated snapshot (which can just be a
// one-image group with no credit).
const GROUPS: FunGroup[] = [
  {
    id: "guggenheim-float",
    title: "Guggenheim Late Shift: FLOAT",
    credit:
      "Photos: Madison Jaet, Marc Parroquin, and Filip Wolak © Solomon R. Guggenheim Foundation",
    images: [
      { src: "/fun/guggenheim-float/float-01.jpg", alt: "Inflatable sculptures on view in the rotunda" },
      { src: "/fun/guggenheim-float/float-02.jpg", alt: "Inflatable sculptures viewed from below the museum's spiral" },
      { src: "/fun/guggenheim-float/float-03.jpg", alt: "Attendee holding an event program in the rotunda" },
      { src: "/fun/guggenheim-float/float-04.jpg", alt: "Visitors seated, viewing the installation" },
      { src: "/fun/guggenheim-float/float-05.jpg", alt: "Visitors talking beside two crossed inflatable forms" },
      { src: "/fun/guggenheim-float/float-06.jpg", alt: "Looking up through the museum's spiral toward the skylight" },
      { src: "/fun/guggenheim-float/float-07.jpg", alt: "Aerial view of the rotunda floor during the event" },
      { src: "/fun/guggenheim-float/float-08.jpg", alt: "Aerial view of the installation and museum ramps" },
      { src: "/fun/guggenheim-float/float-09.jpg", alt: "Close-up of three inflatable sculptural forms" },
      { src: "/fun/guggenheim-float/float-10.jpg", alt: "View across the museum's spiral galleries" },
      { src: "/fun/guggenheim-float/float-11.jpg", alt: "Event signage for Late Shift: Float" },
      { src: "/fun/guggenheim-float/float-poster.png", alt: "FLOAT event poster" },
      { src: "/fun/guggenheim-float/float-12.jpg", alt: "Attendees at the museum railing during the kite procession" },
    ],
  },
];

function ImageStrip({ images }: { images: FunImage[] }) {
  return (
    <div className="flex gap-4 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
      {images.map((item, i) => (
        <motion.div
          key={item.src}
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ duration: 0.4, delay: i * 0.04, ease: [0.16, 1, 0.3, 1] }}
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
        </motion.div>
      ))}
    </div>
  );
}

export function FunThings() {
  return (
    <div className="space-y-14">
      {GROUPS.map((group) => (
        <div key={group.id}>
          <div className="mb-5">
            <h3 className="font-display text-display-sm italic text-signal">{group.title}</h3>
            {group.credit && (
              <p className="mt-1.5 font-mono text-caption text-ink-40">{group.credit}</p>
            )}
          </div>
          <ImageStrip images={group.images} />
        </div>
      ))}
    </div>
  );
}