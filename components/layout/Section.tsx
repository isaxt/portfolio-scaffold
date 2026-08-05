"use client";

import { motion } from "framer-motion";
import clsx from "clsx";
import type { ReactNode } from "react";
import { Container } from "./Container";
import { revealUp } from "@/components/motion/tokens";

export function Section({
  children,
  eyebrow,
  eyebrowVariant = "label",
  className,
  id,
}: {
  children: ReactNode;
  eyebrow?: string;
  /** "label": mono uppercase caption. "category": italic serif accent, matching .work-category labels. */
  eyebrowVariant?: "label" | "category";
  className?: string;
  id?: string;
}) {
  return (
    <motion.section
      id={id}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-15% 0px" }}
      variants={revealUp}
      className={clsx("py-section", className)}
    >
      <Container>
        {eyebrow && eyebrowVariant === "category" && (
          <p className="mb-8 font-display text-display-sm italic text-signal">{eyebrow}</p>
        )}
        {eyebrow && eyebrowVariant === "label" && <p className="label-caps mb-6">{eyebrow}</p>}
        {children}
      </Container>
    </motion.section>
  );
}
