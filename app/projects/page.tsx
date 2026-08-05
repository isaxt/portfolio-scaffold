import { Section } from "@/components/layout/Section";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { projectCategories } from "@/lib/data/projects";

export default function Projects() {
  return (
    <div className="pt-40">
      <Section>
        <h1 className="max-w-2xl font-display text-display-lg italic text-signal">Work</h1>
        <p className="mt-4 max-w-prose text-body-lg text-ink-60">
          Digital product design, web design, book design, and interactive
          installations — process shown alongside the final work.
        </p>
      </Section>

      {projectCategories.map((category, i) => (
        <Section
          key={category.name}
          eyebrow={category.name}
          eyebrowVariant="category"
          className={i === 0 ? "border-t border-line" : "border-t border-line pt-0"}
        >
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {category.projects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </Section>
      ))}
    </div>
  );
}
