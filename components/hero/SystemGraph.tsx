"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

/**
 * Signature hero element.
 *
 * A schematic of labeled nodes and the lines between them — read as a
 * systems/variables diagram from a design tool (think Figma's variable
 * graph or a dependency map), not a "neural network" cliché. Nodes drift
 * gently and lean toward the cursor within a radius, which is the one piece
 * of "alive" behavior earned by the brief's emphasis on systems thinking.
 *
 * Deliberately built in plain SVG + Framer Motion rather than Three.js:
 * a WebGL canvas would outweigh the payload for six labeled points, and
 * this stays perfectly legible to screen readers and reduced-motion users.
 */

type Node = { id: string; label: string; x: number; y: number };
type Edge = [string, string];

const NODES: Node[] = [
  { id: "design", label: "Design", x: 18, y: 28 },
  { id: "systems", label: "Systems", x: 46, y: 12 },
  { id: "research", label: "Research", x: 78, y: 24 },
  { id: "interaction", label: "Interaction", x: 24, y: 68 },
  { id: "code", label: "Code", x: 58, y: 60 },
  { id: "ai", label: "AI", x: 86, y: 72 },
];

const EDGES: Edge[] = [
  ["design", "systems"],
  ["systems", "research"],
  ["design", "interaction"],
  ["systems", "code"],
  ["research", "ai"],
  ["interaction", "code"],
  ["code", "ai"],
];

export function SystemGraph() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [pointer, setPointer] = useState<{ x: number; y: number } | null>(null);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    setReduced(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, []);

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    setPointer({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
    });
  }

  function nodePosition(node: Node) {
    if (reduced || !pointer) return node;
    const dx = pointer.x - node.x;
    const dy = pointer.y - node.y;
    const dist = Math.sqrt(dx * dx + dy * dy);
    const radius = 26;
    if (dist > radius) return node;
    const pull = (1 - dist / radius) * 4; // max 4% lean toward cursor
    return { ...node, x: node.x + (dx / dist) * pull, y: node.y + (dy / dist) * pull };
  }

  const resolved = NODES.map(nodePosition);
  const byId = Object.fromEntries(resolved.map((n) => [n.id, n]));

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setPointer(null)}
      role="img"
      aria-label="Schematic diagram connecting design, systems, research, interaction, code, and AI"
      className="relative aspect-[4/3] w-full max-w-xl select-none"
    >
      <svg viewBox="0 0 100 80" className="h-full w-full overflow-visible">
        {EDGES.map(([a, b], i) => {
          const from = byId[a];
          const to = byId[b];
          if (!from || !to) return null;
          return (
            <motion.line
              key={`${a}-${b}`}
              x1={from.x}
              y1={from.y}
              x2={to.x}
              y2={to.y}
              stroke="var(--edge-color, #9D3A7255)"
              strokeWidth={0.25}
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 + i * 0.08, ease: [0.16, 1, 0.3, 1] }}
            />
          );
        })}
        {resolved.map((node, i) => (
          <motion.g
            key={node.id}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1, cx: node.x, cy: node.y }}
            transition={{ duration: 0.5, delay: 0.2 + i * 0.06, ease: [0.16, 1, 0.3, 1] }}
          >
            <motion.circle
              animate={{ cx: node.x, cy: node.y }}
              transition={{ type: "spring", stiffness: 120, damping: 14 }}
              r={1.6}
              fill="#FFFDFD"
              stroke="#9D3A72"
              strokeWidth={0.35}
            />
          </motion.g>
        ))}
      </svg>

      {resolved.map((node) => (
        <motion.span
          key={node.id}
          animate={{ left: `${node.x}%`, top: `${node.y}%` }}
          transition={{ type: "spring", stiffness: 120, damping: 14 }}
          className="pointer-events-none absolute -translate-x-1/2 translate-y-3 whitespace-nowrap font-mono text-[10px] uppercase tracking-[0.12em] text-ink-60"
        >
          {node.label}
        </motion.span>
      ))}
    </div>
  );
}
