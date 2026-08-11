import Image from "next/image";
import { Section } from "@/components/layout/Section";
import { Tag } from "@/components/ui/Tag";

const DETAILS = [
  { label: "Based in", value: "New York City" },
  { label: "School", value: "Parsons School of Design" },
  { label: "Major", value: "Design & Technology" },
  { label: "Minors", value: "Communication Design, STM" },
  { label: "Originally", value: "Bay Area, CA" },
];

const SKILLS = [
  "Web Design",
  "HCI",
  "Design Systems",
  "Creative Coding",
  "AI / ML",
  "Interactive Systems",
  "Visual Communication",
  "Multimedia Art",
];

const RIGHT_NOW = [
  { label: "Building", value: "This portfolio, iteratively + textile installation" },
  { label: "Exploring", value: "Trust calibration in agentic interfaces + corporate web design" },
  { label: "Reading", value: "Anything by Jasmine Sun" },
  { label: "Listening to", value: "6arelyhuman, asteria, or kets4eki" },
];

export default function About() {
  return (
    <div className="pt-40">
      <Section>
        <p className="label-caps mb-6">About</p>
        <h1 className="max-w-2xl font-display text-display-lg italic">
          I&rsquo;m <span className="text-signal">Isa</span>—designer,
          technologist, maker of things.
        </h1>
      </Section>

      <Section className="border-t border-line">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-[1.4fr_1fr]">
          {/* Long-form prose, carried over from the original about.html */}
          <div className="space-y-7 text-body text-prose leading-[1.9]">
            <p>
              I&rsquo;m Isabella— Isa for short! I am a <em className="not-italic text-ink">self-proclaimed</em>{" "}
              creative technologist, interdisciplinary designer, and
              multimedia artist. Originally from the Bay Area, I am
              currently based in New York City, where I study at Parsons
              School of Design. I&rsquo;m majoring in{" "}
              <span className="cursor-pointer border-b border-signal text-signal transition-opacity hover:opacity-65">
                Design and Technology
              </span>
              , and minoring in{" "}
              <span className="cursor-pointer border-b border-signal text-signal transition-opacity hover:opacity-65">
                Communication Design
              </span>{" "}
              and{" "}
              <span className="cursor-pointer border-b border-signal text-signal transition-opacity hover:opacity-65">
                Society, Technology, and Management
              </span>
              .
            </p>
            <p>
              My path to design wasn&rsquo;t linear. I was originally headed
              towards medicine, treating creative work as a hobby. But I
              couldn&rsquo;t ignore the pull towards making. Creating is how
              I make sense of the world, and I had to follow it.
            </p>
            <p>
              Today, my work sits at the intersection of front-end web
              design, HCI research, and AI-informed design systems. I am
              interested in how interfaces are built and how they are
              experienced, the architecture underneath and the human on the
              other side. I approach design both as craft and inquiry:
              attentive about systems, curious about people, and committed
              to building things that are not only functional and
              beautiful, but genuinely useful.
            </p>
            <p>
              I work across the full arc of a project, from early research
              and design strategy through implementation and interaction. I
              am drawn to the complexity of designing at scale, how a
              design system holds together across contexts, how AI shifts
              the conditions of creative and collaborative work, and how
              small interaction decisions accumulate into the feeling of a
              product.
            </p>
            <p>
              My process tends to be hybrid by nature. I move between
              coding and conceptual work, prototyping and research, visual
              systems and written thinking. That range informs how I
              approach project management and cross-functional
              collaboration. I am comfortable in the space between
              disciplines, and I find that is often where the most
              interesting problems live.
            </p>
          </div>

          {/* Sidebar */}
          <aside className="border-t border-line pt-8 lg:border-t-0 lg:pt-0">
            {/* TODO: swap in the real photo at /public/photos/isa.jpg */}
            <div className="relative mb-8 aspect-[4/5] w-full overflow-hidden bg-cream">
              <Image
                src="/photos/isa.jpg"
                alt="Isabella Tedesco"
                fill
                sizes="(min-width: 1024px) 400px, 100vw"
                className="object-cover"
              />
            </div>

            <dl>
              {DETAILS.map((d) => (
                <div
                  key={d.label}
                  className="flex items-baseline justify-between gap-4 border-b border-line py-4"
                >
                  <dt className="whitespace-nowrap font-mono text-label uppercase tracking-[0.1em] text-ink-60">
                    {d.label}
                  </dt>
                  <dd className="text-right text-body">{d.value}</dd>
                </div>
              ))}
            </dl>

            <div className="mt-8 flex flex-wrap gap-2">
              {SKILLS.map((skill) => (
                <Tag key={skill}>{skill}</Tag>
              ))}
            </div>
          </aside>
        </div>
      </Section>

      <Section eyebrow="Right now" className="border-t border-line">
        <div className="grid grid-cols-1 gap-x-12 gap-y-6 sm:grid-cols-2">
          {RIGHT_NOW.map((item) => (
            <div key={item.label} className="flex items-start gap-3">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-signal" />
              <div>
                <p className="font-mono text-label uppercase tracking-[0.1em] text-ink-60">
                  {item.label}
                </p>
                <p className="mt-1 text-body text-prose">{item.value}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
}
