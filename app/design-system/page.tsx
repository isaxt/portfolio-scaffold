import { Section } from "@/components/layout/Section";

const COLORS = [
  { name: "Paper", cls: "bg-paper border border-line", var: "#FFFDFD" },
  { name: "Panel", cls: "bg-panel", var: "#FCF0F9" },
  { name: "Cream", cls: "bg-cream", var: "#F7F4EF" },
  { name: "Ink", cls: "bg-ink", var: "#1A1714" },
  { name: "Accent", cls: "bg-signal", var: "#9D3A72" },
];

const TYPE_SCALE = [
  { name: "Display XL", cls: "text-display-xl font-display" },
  { name: "Display LG", cls: "text-display-lg font-display" },
  { name: "Display MD", cls: "text-display-md font-display" },
  { name: "Body LG", cls: "text-body-lg font-body" },
  { name: "Body", cls: "text-body font-body" },
  { name: "Label", cls: "text-label font-mono uppercase tracking-[0.1em]" },
];

export default function DesignSystem() {
  return (
    <div className="pt-40">
      <Section>
        <h1 className="max-w-2xl font-display text-display-lg">
          Design system
        </h1>
        <p className="mt-4 max-w-prose text-body-lg text-ink-60">
          This site's own token system, shown live — the same values that
          power every component on the page. Source: tailwind.config.ts.
        </p>
      </Section>

      <Section eyebrow="Color" className="border-t border-line">
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-5">
          {COLORS.map((c) => (
            <div key={c.name}>
              <div className={`h-20 w-full rounded-md ${c.cls}`} />
              <p className="mt-3 font-mono text-caption text-ink">{c.name}</p>
              <p className="font-mono text-caption text-ink-40">{c.var}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section eyebrow="Type scale" className="border-t border-line">
        <div className="space-y-6">
          {TYPE_SCALE.map((t) => (
            <div key={t.name} className="flex items-baseline gap-6 border-b border-line pb-6">
              <p className="w-32 shrink-0 font-mono text-caption text-ink-40">{t.name}</p>
              <p className={t.cls}>Design engineering</p>
            </div>
          ))}
        </div>
      </Section>

      <Section eyebrow="Motion" className="border-t border-line">
        <p className="max-w-prose text-body text-ink-60">
          Motion tokens live in{" "}
          <code className="font-mono text-caption text-signal">
            components/motion/tokens.ts
          </code>{" "}
          — a signature easing curve for entrances, a symmetric curve for
          state toggles, and named durations tied to purpose rather than
          milliseconds picked by feel.
        </p>
      </Section>
    </div>
  );
}
