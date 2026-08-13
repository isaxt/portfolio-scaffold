import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { PortraitOrbit } from "@/components/hero/PortraitOrbit";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { projectCategories } from "@/lib/data/projects";
import { FunThings } from "@/components/ui/FunThings";

export default function Home() {
  return (
    <>
      <section className="relative flex min-h-[92vh] items-center pt-32">
        <Container className="grid grid-cols-1 items-center gap-16 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="label-caps mb-6">Frontend Designer — HCI Researcher</p>
            <h1 className="font-display italic text-display-xl text-signal">
              Hi, I&rsquo;m Isa!
            </h1>
            <p className="mt-6 max-w-prose text-body-lg text-ink-60">
              I&rsquo;m a designer crafting thoughtful, digital experiences —
              working across product design, HCI research, and AI/ML x
              design systems.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <MagneticButton href="/projects" cursorLabel="Explore">
                View work
              </MagneticButton>
              <MagneticButton
                href="/about"
                className="border-transparent bg-transparent hover:bg-panel hover:text-ink"
              >
                About me
              </MagneticButton>
            </div>
          </div>
          <PortraitOrbit />
        </Container>
      </section>

      {projectCategories.map((category) => (
        <Section
          key={category.name}
          eyebrow={category.name}
          eyebrowVariant="category"
          className="border-t border-line"
        >
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {category.projects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </Section>
      ))}
      <Section eyebrow="Fun Things" eyebrowVariant="category" className="border-t border-line">
        <p className="mb-8 max-w-prose text-body text-ink-60">
          Cool projects I&rsquo;ve been a part of!
        </p>
        <FunThings />
      </Section>
    </>
  );
}
