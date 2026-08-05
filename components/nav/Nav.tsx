"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import clsx from "clsx";
import { Command } from "lucide-react";
import { CommandPalette } from "./CommandPalette";

const LINKS = [
  { href: "/projects", label: "Work" },
  { href: "/art", label: "Art" },
  { href: "/about", label: "About" },
  { href: "/research", label: "Research" },
  { href: "/ai", label: "AI" },
];

export function Nav() {
  const pathname = usePathname();
  const [paletteOpen, setPaletteOpen] = useState(false);

  return (
    <>
      <motion.nav
        initial={{ y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
        className="fixed left-1/2 top-6 z-50 -translate-x-1/2"
        aria-label="Primary"
      >
        <div className="flex items-center gap-1 rounded-full border border-line bg-paper/80 px-2 py-2 shadow-[0_1px_0_rgba(20,24,27,0.04)] backdrop-blur">
          <Link
            href="/"
            className="px-3 font-display italic text-body-lg text-signal hover:text-signal-dark"
          >
            Isabella Tedesco
          </Link>
          <span className="h-4 w-px bg-line" />
          {LINKS.map((link) => {
            const active = pathname?.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={clsx(
                  "relative rounded-full px-3 py-1.5 font-mono text-label uppercase tracking-[0.12em] transition-colors duration-400",
                  active ? "text-ink" : "text-ink-60 hover:text-ink"
                )}
              >
                {active && (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute inset-0 rounded-full bg-panel"
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  />
                )}
                <span className="relative">{link.label}</span>
              </Link>
            );
          })}
          <span className="h-4 w-px bg-line" />
          <button
            onClick={() => setPaletteOpen(true)}
            className="flex items-center gap-1.5 rounded-full px-3 py-1.5 text-ink-60 hover:text-ink"
            aria-label="Open command palette"
          >
            <Command size={13} strokeWidth={1.75} />
            <span className="font-mono text-label uppercase tracking-[0.12em]">K</span>
          </button>
        </div>
      </motion.nav>

      <CommandPalette open={paletteOpen} onOpenChange={setPaletteOpen} links={LINKS} />
    </>
  );
}
