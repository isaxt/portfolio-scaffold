"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import type { Project } from "@/lib/data/projects";

/**
 * Mirrors the original site's project-card interaction: a full-bleed image
 * well with a caption that rises in on hover. Renders the real project
 * image when `cardImage` is set; otherwise falls back to a labeled
 * placeholder well (drop a file into /public/projects/<slug>/ and set
 * cardImage to wire it in).
 */
export function ProjectCard({ project }: { project: Project }) {
  return (
    <Link href={`/projects/${project.slug}`} data-cursor="view" data-cursor-label="View">
      <motion.article
        whileHover={{ y: -4 }}
        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
        className="group relative h-[280px] overflow-hidden bg-cream"
      >
        {project.cardImage ? (
          <Image
            src={project.cardImage}
            alt={project.title}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover transition-transform duration-500 ease-signature group-hover:scale-[1.04]"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="font-mono text-label uppercase tracking-[0.1em] text-ink-40">
              {project.slug}.jpg
            </span>
          </div>
        )}

        <div className="absolute inset-0 bg-gradient-to-t from-ink/75 via-transparent to-transparent opacity-0 transition-opacity duration-400 group-hover:opacity-100" />

        <div className="absolute inset-x-0 bottom-0 translate-y-2 p-6 opacity-0 transition-all duration-400 group-hover:translate-y-0 group-hover:opacity-100">
          <h3 className="font-display text-display-sm italic text-white">{project.title}</h3>
          <p className="mt-1 font-mono text-caption uppercase tracking-[0.08em] text-white/65">
            {project.role}
          </p>
        </div>
      </motion.article>
    </Link>
  );
}
