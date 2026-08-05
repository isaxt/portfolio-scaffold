import { Section } from "@/components/layout/Section";

const INTERESTS = [
  {
    title: "Mental models of adaptive interfaces",
    body: "How people form and revise expectations when a UI's behavior changes based on context or generated content.",
  },
  {
    title: "Trust calibration in agentic tools",
    body: "What interface signals help people trust an AI system the right amount — not too much, not too little.",
  },
  {
    title: "Design systems as shared language",
    body: "Tokens and components as a communication layer between designers, engineers, and increasingly, AI collaborators.",
  },
];

export default function Research() {
  return (
    <div className="pt-40">
      <Section>
        <h1 className="max-w-2xl font-display text-display-lg">Research</h1>
        <p className="mt-4 max-w-prose text-body-lg text-ink-60">
          HCI and AI-interaction research, kept interactive rather than
          filed away as static PDFs.
        </p>
      </Section>

      <Section eyebrow="Interests" className="border-t border-line">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          {INTERESTS.map((item) => (
            <div key={item.title}>
              <h2 className="font-display text-display-sm">{item.title}</h2>
              <p className="mt-3 text-body text-ink-60">{item.body}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section eyebrow="Publications & experiments" className="border-t border-line">
        {/* TODO: replace with real entries; consider an interactive
            timeline component here once there are 4+ items to place. */}
        <p className="max-w-prose text-body text-ink-40">
          Publications, prototypes, and write-ups go here as they're ready —
          each rendered as its own interactive artifact rather than a linked
          PDF, per the brief.
        </p>
      </Section>
    </div>
  );
}
