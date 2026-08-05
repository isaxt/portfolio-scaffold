"use client";

import { useRef, useState, type ReactNode } from "react";
import { motion } from "framer-motion";
import clsx from "clsx";

type MagneticButtonProps = {
  children: ReactNode;
  onClick?: () => void;
  href?: string;
  className?: string;
  strength?: number; // 0–1, how far it travels toward the cursor
  cursorLabel?: string;
};

/**
 * A button that leans gently toward the cursor within its bounds, then
 * springs back on leave. Strength is deliberately conservative by default —
 * this should read as "responsive," not "wobbly."
 */
export function MagneticButton({
  children,
  onClick,
  href,
  className,
  strength = 0.35,
  cursorLabel,
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const relX = e.clientX - (rect.left + rect.width / 2);
    const relY = e.clientY - (rect.top + rect.height / 2);
    setOffset({ x: relX * strength, y: relY * strength });
  }

  function handleMouseLeave() {
    setOffset({ x: 0, y: 0 });
  }

  const Tag = href ? "a" : "button";

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: offset.x, y: offset.y }}
      transition={{ type: "spring", stiffness: 150, damping: 12, mass: 0.3 }}
      className="inline-block"
      data-cursor={cursorLabel ? "view" : undefined}
      data-cursor-label={cursorLabel}
    >
      <Tag
        href={href}
        onClick={onClick}
        className={clsx(
          "inline-flex items-center gap-2 rounded-lg border border-ink px-6 py-3",
          "font-mono text-label uppercase tracking-[0.1em]",
          "transition-colors duration-400 ease-signature hover:bg-ink hover:text-cream",
          className
        )}
      >
        {children}
      </Tag>
    </motion.div>
  );
}
