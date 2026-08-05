import { Section } from "@/components/layout/Section";
import { SystemGraph } from "@/components/hero/SystemGraph";

const THEMES = [
  "Human–AI collaboration",
  "Generative interfaces",
  "Agent design",
  "Prompt-shaped UI",
  "Adaptive components",
  "Future interfaces",
];

export default function AI() {
  return (
    <div className="pt-40">
      <Section>
        <h1 className="max-w-2xl font-display text-display-lg">
          Interfaces for intelligent systems
        </h1>
        <p className="mt-4 max-w-prose text-body-lg text-ink-60">
          Where product design meets AI: what happens to interface
          conventions when the content, and sometimes the layout, is
          generated rather than fixed.
        </p>
      </Section>

      <Section eyebrow="Themes" className="border-t border-line">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[1fr_1fr]">
          <div className="flex flex-wrap gap-3">
            {THEMES.map((theme) => (
              <span
                key={theme}
                className="rounded-full border border-line px-4 py-2 font-mono text-caption uppercase tracking-[0.08em] text-ink-60"
              >
                {theme}
              </span>
            ))}
          </div>
          <SystemGraph />
        </div>
      </Section>

      {/* TODO: interactive demos go here — good candidates from the brief:
          a small live prompt→UI playground, or an agent-state visualizer.
          Both should be client components under components/ai/. */}
      <Section eyebrow="Demos" className="border-t border-line">
        <p className="max-w-prose text-body text-ink-40">
          Interactive demos in progress.
        </p>
      </Section>
    </div>
  );
}
