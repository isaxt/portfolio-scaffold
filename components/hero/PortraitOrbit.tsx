"use client";

import Image from "next/image";
import { motion } from "framer-motion";

/**
 * Ports the original site's "perimeter floating icons" hero interaction:
 * a low-poly portrait with five gadget icons revealed one by one around its
 * edge. The original (script.js) spawned each icon via setInterval at
 * fixed compass-style positions — same five assets, same angles, same
 * order — just driven by Framer Motion's stagger instead of a JS timer,
 * and a bit snappier than the original 1s-per-icon pace so it doesn't
 * delay the page from feeling settled.
 */

const ASSETS = [
  { src: "/photos/arduino.png", angle: 0, alt: "Arduino" },
  { src: "/photos/ipod.png", angle: 72, alt: "iPod" },
  { src: "/photos/meta_headset.png", angle: 144, alt: "Meta headset" },
  { src: "/photos/old_mac.png", angle: 216, alt: "Old Macintosh" },
  { src: "/photos/projector.png", angle: 288, alt: "Projector" },
];

const RADIUS = 42; // percent, matches original's rx/ry of 55 scaled in for a tighter frame

export function PortraitOrbit() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-md">
      {/* Portrait */}
      <motion.div
        initial={{ opacity: 0, scale: 0.94 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="absolute inset-[12%] overflow-hidden rounded-full bg-cream"
      >
        <Image
          src="/photos/isa_low_poly.png"
          alt="Isabella Tedesco"
          fill
          sizes="400px"
          className="object-cover"
          priority
        />
      </motion.div>

      {/* Orbiting gadgets */}
      {ASSETS.map((asset, i) => {
        const angleRad = ((asset.angle - 90) * Math.PI) / 180;
        const x = 50 + RADIUS * Math.cos(angleRad);
        const y = 50 + RADIUS * Math.sin(angleRad);
        return (
          <motion.div
            key={asset.src}
            initial={{ opacity: 0, scale: 0.4 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.5,
              delay: 0.5 + i * 0.18,
              ease: [0.16, 1, 0.3, 1],
            }}
            style={{ left: `${x}%`, top: `${y}%` }}
            className="absolute h-12 w-12 -translate-x-1/2 -translate-y-1/2 sm:h-16 sm:w-16"
          >
            <Image src={asset.src} alt={asset.alt} fill sizes="64px" className="object-contain" />
          </motion.div>
        );
      })}
    </div>
  );
}
