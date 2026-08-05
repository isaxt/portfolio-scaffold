"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { Command } from "cmdk";
import { AnimatePresence, motion } from "framer-motion";

type Link = { href: string; label: string };

export function CommandPalette({
  open,
  onOpenChange,
  links,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  links: Link[];
}) {
  const router = useRouter();

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        onOpenChange(!open);
      }
      if (e.key === "Escape") onOpenChange(false);
    }
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [open, onOpenChange]);

  function go(href: string) {
    router.push(href);
    onOpenChange(false);
  }

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-ink/20 backdrop-blur-sm"
            onClick={() => onOpenChange(false)}
          />
          <motion.div
            initial={{ opacity: 0, y: 12, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.98 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="fixed left-1/2 top-[22vh] z-[101] w-[min(560px,92vw)] -translate-x-1/2 overflow-hidden rounded-lg border border-line bg-paper shadow-2xl"
          >
            <Command label="Command palette">
              <div className="flex items-center border-b border-line px-4">
                <span className="font-mono text-ink-40 text-body">/</span>
                <Command.Input
                  autoFocus
                  placeholder="Jump to a section…"
                  className="w-full bg-transparent px-3 py-4 font-body text-body outline-none placeholder:text-ink-40"
                />
              </div>
              <Command.List className="max-h-[50vh] overflow-y-auto p-2">
                <Command.Empty className="px-3 py-6 text-center font-mono text-caption text-ink-40">
                  No matches.
                </Command.Empty>
                <Command.Group heading="Navigate" className="px-1 py-1 font-mono text-label uppercase tracking-[0.1em] text-ink-40">
                  {links.map((link) => (
                    <Command.Item
                      key={link.href}
                      onSelect={() => go(link.href)}
                      className="cursor-pointer rounded-md px-3 py-2.5 font-body text-body text-ink aria-selected:bg-panel"
                    >
                      {link.label}
                    </Command.Item>
                  ))}
                </Command.Group>
              </Command.List>
            </Command>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
