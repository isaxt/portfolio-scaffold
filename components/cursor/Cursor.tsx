"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

type CursorState = {
  variant: "default" | "view" | "drag" | "text";
  label?: string;
};

/**
 * A single global cursor that morphs based on what it's hovering.
 * Any element can opt in via:
 *   <div data-cursor="view" data-cursor-label="View project">
 *
 * Hidden automatically on touch/coarse-pointer devices (see globals.css,
 * which restores the native cursor there) and skips the spring entirely
 * under prefers-reduced-motion.
 */
export function Cursor() {
  const [state, setState] = useState<CursorState>({ variant: "default" });
  const [isCoarse, setIsCoarse] = useState(true); // default hidden until confirmed fine-pointer
  const [reduced, setReduced] = useState(false);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const springX = useSpring(x, { stiffness: 900, damping: 50, mass: 0.2 });
  const springY = useSpring(y, { stiffness: 900, damping: 50, mass: 0.2 });

  useEffect(() => {
    setIsCoarse(!window.matchMedia("(pointer: fine)").matches);
    setReduced(window.matchMedia("(prefers-reduced-motion: reduce)").matches);

    function handleMove(e: PointerEvent) {
      x.set(e.clientX);
      y.set(e.clientY);

      const target = (e.target as HTMLElement)?.closest("[data-cursor]") as HTMLElement | null;
      if (target) {
        const variant = (target.dataset.cursor as CursorState["variant"]) ?? "default";
        setState({ variant, label: target.dataset.cursorLabel });
      } else {
        setState({ variant: "default" });
      }
    }

    window.addEventListener("pointermove", handleMove);
    return () => window.removeEventListener("pointermove", handleMove);
  }, [x, y]);

  if (isCoarse) return null;

  const size = state.variant === "view" ? 72 : state.variant === "drag" ? 88 : state.variant === "text" ? 4 : 10;

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-[999] flex items-center justify-center rounded-full mix-blend-difference"
      style={{
        x: reduced ? x : springX,
        y: reduced ? y : springY,
        translateX: "-50%",
        translateY: "-50%",
      }}
      animate={{
        width: size,
        height: size,
        backgroundColor: "#FFFDFD",
      }}
      transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
    >
      {state.label && (
        <span className="font-mono text-[10px] uppercase tracking-[0.1em] text-ink whitespace-nowrap">
          {state.label}
        </span>
      )}
    </motion.div>
  );
}
