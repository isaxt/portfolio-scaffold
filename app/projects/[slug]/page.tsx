import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { Tag } from "@/components/ui/Tag";
import { projects } from "@/lib/data/projects";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export default function ProjectCaseStudy({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) notFound();

  const cs = project.caseStudy;

  // Fallback: no case-study content migrated yet for this project.
  if (!cs) {
    return (
      <article className="pt-40">
        <Section>
          <p className="label-caps mb-4">{project.category}</p>
          <h1 className="max-w-3xl font-display text-display-lg italic text-signal">
            {project.title}
          </h1>
          <p className="mt-6 max-w-prose text-body-lg text-prose">{project.role}</p>
          <div className="mt-6 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <Tag key={tag}>{tag}</Tag>
            ))}
          </div>
        </Section>

        {/* TODO: mirrors project.css's case-study layout. Fill in once the
            original per-project HTML/content for this piece is on hand. */}
        {[
          ["Overview", "What the project is and who it's for."],
          ["Process", "Research, sketches, and the decisions behind the final direction."],
          ["Outcome", "The final work, and what it demonstrates."],
        ].map(([heading, hint]) => (
          <Section key={heading} eyebrow={heading} className="border-t border-line">
            <p className="max-w-prose text-body text-ink-40">{hint}</p>
          </Section>
        ))}
      </article>
    );
  }

  return (
    <article className="pt-40">
      {/* Header */}
      <Section>
        <p className="label-caps mb-4">{project.role}</p>
        <h1 className="max-w-3xl font-display text-display-lg italic text-signal">
          {project.title}
        </h1>
        <p className="mt-6 max-w-prose text-body-lg text-prose">{cs.tagline}</p>

        <div className="mt-10 flex flex-wrap gap-x-12 gap-y-6">
          {cs.meta.map((m) => (
            <div key={m.label}>
              <p className="font-mono text-label uppercase tracking-[0.1em] text-ink-60">
                {m.label}
              </p>
              <p className="mt-1.5 text-body">{m.value}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Hero media */}
      <Container className="mb-4">
        <div className="overflow-hidden rounded-sm bg-cream">
          {cs.hero.type === "video" ? (
            <video
              controls
              autoPlay
              muted
              loop
              playsInline
              poster={cs.hero.poster}
              className="w-full"
            >
              <source src={cs.hero.src} type="video/mp4" />
            </video>
          ) : (
            <div className="relative aspect-[16/10] w-full">
              <Image
                src={cs.hero.src}
                alt={`${project.title} hero`}
                fill
                sizes="(min-width: 1024px) 1100px, 100vw"
                className="object-contain"
                priority
              />
            </div>
          )}
        </div>
      </Container>

      {/* Body: prose + sidebar */}
      <Section className="pt-8">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-[1.4fr_1fr]">
          <div className="space-y-10">
            {cs.sections.map((section, i) => (
              <div key={i}>
                {section.heading && (
                  <h2 className="mb-3 font-display text-display-sm italic text-signal">
                    {section.heading}
                  </h2>
                )}
                <div className="space-y-5 text-body text-prose leading-[1.9]">
                  {section.paragraphs.map((p, j) => (
                    <p key={j}>{p}</p>
                  ))}
                </div>
                {section.quote && (
                  <blockquote className="mt-6 border-l-2 border-signal bg-cream py-5 pl-6 pr-4 font-display text-display-sm italic text-ink">
                    {section.quote}
                  </blockquote>
                )}
              </div>
            ))}
          </div>

          <aside className="border-t border-line pt-8 lg:border-t-0 lg:pt-0">
            <dl>
              {cs.sidebar.map((d) => (
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
              {cs.skills.map((skill) => (
                <Tag key={skill}>{skill}</Tag>
              ))}
            </div>
            {cs.links && cs.links.length > 0 && (
              <div className="mt-8 flex flex-col gap-3">
                {cs.links.map((link) => (
                  <a
                    key={link.url}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg border border-ink px-5 py-2.5 font-mono text-label uppercase tracking-[0.1em] transition-colors duration-400 ease-signature hover:bg-ink hover:text-cream"
                  >
                    {link.label} ↗
                  </a>
                ))}
              </div>
            )}
          </aside>
        </div>
      </Section>

      {/* Gallery */}
      {cs.gallery && cs.gallery.length > 0 && (
        <Section eyebrow="Process & Design" className="border-t border-line">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {cs.gallery.map((img) => (
              <div
                key={img.src}
                className={`relative aspect-[4/3] overflow-hidden rounded-sm bg-cream ${
                  img.full ? "sm:col-span-2" : ""
                }`}
              >
                {img.type === "video" ? (
                  <video controls playsInline className="h-full w-full object-contain">
                    <source src={img.src} type="video/mp4" />
                  </video>
                ) : (
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    sizes="(min-width: 640px) 50vw, 100vw"
                    className="object-contain"
                  />
                )}
              </div>
            ))}
          </div>
        </Section>
      )}

      {/* Back to work */}
      <Container className="border-t border-line py-12">
        <Link
          href="/projects"
          className="font-mono text-label uppercase tracking-[0.1em] text-ink-60 hover:text-ink"
        >
          ← All work
        </Link>
      </Container>
    </article>
  );
}
