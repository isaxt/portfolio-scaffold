export type CaseStudySection = {
  heading: string;
  paragraphs: string[];
  quote?: string;
};

export type MetaField = { label: string; value: string };

export type GalleryImage = { src: string; alt: string; full?: boolean; type?: "image" | "video" };

export type CaseStudy = {
  tagline: string;
  meta: MetaField[];
  hero: { type: "image" | "video"; src: string; poster?: string };
  sections: CaseStudySection[];
  sidebar: MetaField[];
  skills: string[];
  gallery?: GalleryImage[];
  links?: { label: string; url: string }[];
};

export type Project = {
  slug: string;
  title: string;
  category: string;
  role: string; // subtitle shown on the card, matches original "UX Design — Web" style
  tags: string[];
  cardImage?: string; // thumbnail for ProjectCard, falls back to placeholder if absent
  caseStudy?: CaseStudy;
};

export type ProjectCategory = {
  name: string;
  projects: Project[];
};

// Sourced directly from the existing site's index.html work sections, plus
// (for the 5 Digital Product Design projects) the individual per-project
// HTML pages, ported into structured data instead of hand-written HTML.
export const projectCategories: ProjectCategory[] = [
  {
    name: "Digital Product Design",
    projects: [
      {
        slug: "dreamee",
        title: "Dream.ee",
        category: "Digital Product Design",
        role: "UX Design — Web",
        tags: ["UX Design", "Web"],
        cardImage: "/projects/dreamee/dreamee_logo.jpg",
        caseStudy: {
          tagline:
            "A VR platform that reads real-time EEG engagement signals to quietly reshape the world around you, using biometric feedback, not instructions, to reveal what actually holds someone's attention.",
          meta: [
            { label: "Year", value: "2025" },
            { label: "Role", value: "VR Interface Design, EEG Integration, UX" },
            { label: "Tools", value: "Unity, Meta Quest 3, BrainBit SDK, FastAPI" },
            { label: "Type", value: "VR + Brain-Computer Interface" },
          ],
          hero: { type: "image", src: "/projects/dreamee/dreamee_logo.jpg" },
          sections: [
            {
              heading: "",
              paragraphs: [
                "Most self-discovery tools tell you what to do: take this quiz, answer these prompts, follow this framework. Dream.ee takes the opposite approach: give people freedom, watch what they do with it, and let genuine behavior reveal what language never could.",
                "Rooted in the concept of Ikigai, Dream.ee is a VR platform running on Meta Quest 3 that places users inside AI-generated worlds with no instructions and no goals. As they explore, the system reads their EEG engagement signals in real time via a BrainBit brain-computer interface. When interest begins to drop, a background agent quietly surfaces a prompt for the next world, one shaped by everything the system has observed so far.",
              ],
            },
            {
              heading: "VR Interface & Immersion Design",
              paragraphs: [
                "I built the immersive VR interface in Unity, designing the environments and interaction flows that support the self-reflection workflow. The central challenge was maintaining presence throughout: world transitions had to feel seamless, never pulling users out of the experience to remind them they're inside a system.",
                "I designed the transition UX specifically around non-intrusion: when the boredom detector fires and a new world is ready, the handoff is handled through careful preloading, object lifecycle management, and timing so that the swap feels like a natural shift in space rather than a loading screen. The EEG setup UI and voice-prompt interface were also designed to fade into the background, keeping the user's attention on the world itself.",
              ],
            },
            {
              heading: "EEG Integration",
              paragraphs: [
                "Integrating the BrainBit SDK into the real-time interaction pipeline was one of the more technically involved parts of my contribution. The hardware itself presented an unexpected challenge: the device was labelled Brain Bit 1 but required the Brain Bit 2 SDK, with an entirely different set of backend functions for sensing, connecting, and streaming data. Working through that undocumented discrepancy was a significant portion of the integration work.",
                "Once connected, EEG signals feed into a lightweight in-memory analytics service that scores engagement based on dwell time, interaction frequency, and attention proxies derived from the brain data. The result is a feedback loop where the user's own neurology shapes what they experience next.",
              ],
            },
          ],
          sidebar: [
            { label: "Status", value: "Prototype — Functional" },
            { label: "Hardware", value: "Meta Quest 3 + BrainBit EEG" },
            { label: "Backend", value: "FastAPI + WorldSpec JSON" },
            { label: "Inspired By", value: "Ikigai" },
          ],
          skills: [
            "Unity",
            "VR Design",
            "BCI / EEG",
            "Immersive UX",
            "Generative Worlds",
            "FastAPI",
            "Real-time Systems",
          ],
          gallery: [
            { src: "/projects/dreamee/example_prompt.jpg", alt: "Dream.ee — VR environment" },
            { src: "/projects/dreamee/example_eeg.jpg", alt: "Dream.ee — EEG setup UI" },
            {
              src: "/projects/dreamee/example_lost.jpg",
              alt: "Dream.ee — World transition flow",
              full: true,
            },
          ],
          links: [{ label: "View on Devpost", url: "https://devpost.com/software/dream-ee" }],
        },
      },
      {
        slug: "unsubtle",
        title: "Unsubtle",
        category: "Digital Product Design",
        role: "Assistive Interaction — XR & AI",
        tags: ["XR", "AI", "Assistive Tech"],
        cardImage: "/projects/unsubtle/unsubtle.png",
        caseStudy: {
          tagline:
            "An XR system that renders body language as real-time visual feedback inside a headset, translating invisible non-verbal cues into a legible, supportive interface for people who communicate non-verbally.",
          meta: [
            { label: "Year", value: "2025" },
            { label: "Role", value: "XR Interface Design, Interaction Design, User Research" },
            { label: "Tools", value: "Unity, Meta Quest 3, FastAPI, Computer Vision" },
            { label: "Type", value: "XR + Assistive Technology" },
          ],
          hero: { type: "image", src: "/projects/unsubtle/unsubtle.png" },
          sections: [
            {
              heading: "",
              paragraphs: [
                "Non-verbal communication is full of signals that many people rely on without realizing it, a crossed arm, a shift in posture, the subtle tension in someone's shoulders. For individuals who struggle with verbal communication, or those supporting them, these cues can be the primary channel. Unsubtle makes them visible.",
                "The project originated from personal experiences working with students in special-needs classrooms, a recognition that the challenge isn't a lack of expression, but a lack of tools to bridge the gap between what someone communicates and what others perceive. Unsubtle uses computer vision to detect body language in real time and renders it as accessible visual feedback directly in a Meta Quest 3 headset.",
              ],
              quote:
                "We built something with the potential to help people feel more understood, especially those whose communication needs are often overlooked.",
            },
            {
              heading: "Interface & Interaction Design",
              paragraphs: [
                "My work focused on the real-time visualization layer inside the headset: designing how detected body language is represented on-screen in a way that's legible, non-stigmatizing, and genuinely useful in the moment. The system renders a user's skeleton and dynamically changes its color to reflect recognized poses, crossed arms signaling defensiveness, open posture signaling engagement, translating invisible cues into clear, immediate visual language.",
                "I also designed the microgesture interaction system, which lets users send discreet, low-effort signals to others: an emoji, a short phrase like \"I need personal space,\" without requiring speech. These outputs sync across colocated XR devices via a shared networking layer, which I helped implement and stabilize to ensure UI state and display data remained consistent for all participants simultaneously.",
              ],
            },
            {
              heading: "Research & Grounding",
              paragraphs: [
                "Throughout development I conducted user research with educators and caregivers to make sure the interaction model reflected real-world needs rather than assumptions. A recurring finding: the tool had to feel supportive, not diagnostic. Body language should be treated as a cue to understanding, never a verdict. That principle shaped every design decision, from the color system to the phrasing of microgesture outputs.",
                "The backend runs a fine-tuned pose estimation model on a FastAPI server, receiving image data from the headset via POST requests and returning detected positions for real-time rendering, a hybrid architecture we pivoted to after finding on-device inference too unstable for the live use case.",
              ],
            },
          ],
          sidebar: [
            { label: "Status", value: "Prototype — Functional" },
            { label: "Hardware", value: "Meta Quest 3" },
            { label: "Backend", value: "FastAPI + Pose Estimation" },
            { label: "Research With", value: "Educators & Caregivers" },
          ],
          skills: [
            "XR Design",
            "Unity",
            "Computer Vision",
            "Microgestures",
            "User Research",
            "Colocation Networking",
            "Accessibility",
          ],
          links: [{ label: "View on Devpost", url: "https://devpost.com/software/unsubtle" }],
        },
      },
      {
        slug: "atlas",
        title: "ATLAS",
        category: "Digital Product Design",
        role: "Modular Drug Delivery — Wearable Care System Design",
        tags: ["Wearable", "Healthcare", "Systems Design"],
        cardImage: "/projects/atlas/atlas.png",
        caseStudy: {
          tagline:
            "A modular, digitally connected on-body drug delivery system, designed from patient field research to replace medicalized hardware with something built around adherence, dignity, and everyday life.",
          meta: [
            { label: "Year", value: "2025" },
            { label: "Role", value: "Product Design, UX Research, System Design" },
            { label: "Tools", value: "Figma, Blender, Physical Prototyping" },
            { label: "Type", value: "Wearable Medical Device + Digital Companion" },
            { label: "Partner", value: "Sanofi Design Challenge" },
          ],
          hero: { type: "video", src: "/projects/atlas/atlas_demo.mp4", poster: "/projects/atlas/atlas.png" },
          sections: [
            {
              heading: "",
              paragraphs: [
                "When patients are diagnosed with a chronic condition, their lives change dramatically, often demanding obtrusive daily routines, expensive treatments, and devices that feel less like tools and more like burdens. On-body drug delivery systems keep patients tethered to rigid, medicalized hardware that signals illness to the world. ATLAS asks: what if it didn't have to?",
                "The Automatic Treatment Lifestyle Assistive System is a modular, reusable OBDS platform designed from the ground up around the patient's lived experience. It replaces the typical plunger-driven injection mechanism with a peristaltic micropump, inspired by how IV drips work, ensuring sterility without direct drug-surface contact, and enabling compatibility with a far wider range of fluid viscosities.",
              ],
            },
            {
              heading: "Modular System Architecture",
              paragraphs: [
                "At the core of ATLAS is modularity: interchangeable needle heads (hypodermic or transdermal microneedle arrays) let patients and clinicians choose the least invasive delivery method for their treatment. A reusable cartridge system clicks in and out cleanly, with a secure latch mechanism that prevents accidental removal mid-dose and releases automatically once delivery is complete.",
                "The outer shell uses medical-grade silicone over a polyamide-polyethylene internal structure, reinforced with a graphene nanocomposite scaffold for strength and lightness. Breathable, sweat-resistant synthetic mesh adhesives in a range of inclusive skin tones replace the irritating residue-heavy adhesives common in current-day OBDS designs, making the device feel like a second skin, not a medical fixture.",
              ],
            },
            {
              heading: "Digital Companion Ecosystem",
              paragraphs: [
                "ATLAS pairs with a detachable smartwatch that docks directly onto the unit or a bedside speaker station. The companion app handles adherence tracking, prescription management, caregiver coordination, and direct contact with healthcare providers, turning the isolated, often overwhelming experience of chronic care into a connected, supported routine.",
                "The digital interface is designed for accessibility across all ages: high-contrast, legible UI for older adults; playful, expressive color customization options for children; and a neutral, low-profile mode for patients who want the system to disappear into daily life. The device reframes treatment not as a clinical obligation but as a quiet, steady companion.",
              ],
            },
            {
              heading: "Research & Patient Grounding",
              paragraphs: [
                "Every design decision in ATLAS is grounded in direct patient testimony. We conducted field research with OBDS users managing Type 1 Diabetes and bone-density treatment, identifying recurring pain points: weight and bulk, stigmatizing visibility, forgotten doses, and the cognitive burden of managing multiple medications simultaneously. These insights, not assumptions, drove the design from first principles.",
                "We also conducted a thorough prior art review across existing OBDS platforms (enFuse, Omnipod, Vertiva), relevant patents, and materials research into graphene composites, microneedle arrays, and double-eyelid crease adhesives, informing both the mechanical and material innovations that distinguish ATLAS from the field.",
              ],
            },
          ],
          sidebar: [
            { label: "Status", value: "Concept — Design Challenge Submission" },
            { label: "Delivery Mechanism", value: "Peristaltic Micropump" },
            { label: "Needle Options", value: "Hypodermic + Microneedle Array" },
            { label: "Materials", value: "Medical Silicone, Polyamide, Graphene Composite" },
            { label: "Digital Layer", value: "Smartwatch + Speaker Dock + Companion App" },
            { label: "Research With", value: "Chronic Care Patients & Caregivers" },
          ],
          skills: [
            "Product Design",
            "Wearable Systems",
            "UX Research",
            "Patient-Centered Design",
            "Modular Architecture",
            "Digital Health",
            "Accessibility",
            "Sustainability",
          ],
        },
      },
      {
        slug: "curiosity-agent",
        title: "Curiosity Agent",
        category: "Digital Product Design",
        role: "Embodied AI — Curiosity as Interface",
        tags: ["Embodied AI", "Interaction Design"],
        cardImage: "/projects/curiosity-agent/curiousity.png",
        caseStudy: {
          tagline:
            "A wearable AI system that asks questions instead of answering them, designed to resist the cognitive offload most AI tools invite, one prompt-tuned question at a time.",
          meta: [
            { label: "Year", value: "2026" },
            { label: "Role", value: "IoT Design, Prompt Engineering, Dashboard UX" },
            { label: "Tools", value: "ESP32-CAM, Raspberry Pi, Claude API, E-Ink Display" },
            { label: "Type", value: "Hardware Hackathon — HARD MODE: Hardware × AI" },
            { label: "Team", value: "Isabella T, Kelly S, Esteban R, Liam J, Omer E" },
          ],
          hero: { type: "image", src: "/projects/curiosity-agent/curiousity.png" },
          sections: [
            {
              heading: "",
              paragraphs: [
                "Most AI tools are built around a single premise: you have a question, it has an answer. Curiosity Agent inverts that entirely. Instead of offloading thinking to a machine, it asks you to do more of it, gently, through questions surfaced as you move through the world.",
                "The project started from a concern about cognitive offload: the quiet habit of letting AI do our reasoning for us. We wanted to design an agent that actively supports human flourishing, not by providing answers, but by nurturing the instinct to question.",
              ],
            },
            {
              heading: "The Device",
              paragraphs: [
                "At its core, the hardware is an AI-Thinker ESP32-CAM clipped to clothing, sending real-time images over the local network to a Raspberry Pi base station. The Pi passes those images to Claude through a carefully crafted prompt, and the response, a single question, is delivered through the user's own earbuds. No screen, no app to manage, nothing to interrupt the moment.",
                "Questions are drawn from one of six registers: Observational, Social, Intentional, Prior Life, Predictive, and Absence. The model selects the register based on what the scene calls for, a quiet street gets a different kind of question than a crowded market.",
              ],
            },
            {
              heading: "The Dashboard & E-Ink Display",
              paragraphs: [
                "When you get home, the experience shifts. A dashboard surfaces the day's curiosities: the questions asked, the places that generated them, and synthesized themes across the registers. The display hardware was a deliberate design choice, e-ink is slow, persistent, and doesn't pulse or refresh. It shows a record of what kept catching your attention, not a feed demanding more of it.",
                "The Pi and e-ink display were fitted inside a custom 3D-printed dock, designed as a physical ritual object: something you place the camera into when you return, and pick up again when you leave.",
              ],
            },
            {
              heading: "Prompt Engineering & the Six Registers",
              paragraphs: [
                "Getting questions that were genuinely meaningful, not generic, not trivial, required significant work on the prompt architecture. A poorly tuned prompt produces questions that feel like a quiz. The goal was to produce questions that feel like they came from a thoughtful companion who noticed something you almost walked past.",
                "Each of the six registers required its own framing logic, and the model needed enough scene context to choose the right one. Image quality and framing proved as important as the language of the prompt itself.",
              ],
              quote:
                "Other AIs answer. This one questions. The premise that shaped every design decision, from the hardware form factor to the rhythm of daily use.",
            },
          ],
          sidebar: [
            { label: "Status", value: "Prototype — Functional" },
            { label: "Hardware", value: "ESP32-CAM + Raspberry Pi + E-Ink Display" },
            { label: "AI Backend", value: "Claude API (Anthropic)" },
            { label: "Enclosure", value: "Custom 3D-Printed Dock" },
            { label: "Submitted To", value: "HARD MODE: Hardware × AI Hackathon" },
          ],
          skills: [
            "IoT",
            "Raspberry Pi",
            "ESP32-CAM",
            "Claude API",
            "Prompt Engineering",
            "E-Ink Display",
            "3D Printing",
            "Dashboard UX",
            "Wearable Design",
          ],
          gallery: [
            {
              src: "/projects/curiosity-agent/tech_stack.png",
              alt: "Curiosity Agent — tech stack and question examples",
              full: true,
            },
          ],
          links: [
            {
              label: "View on Devpost",
              url: "https://devpost.com/software/curiosity-agent?ref_content=user-portfolio&ref_feature=in_progress",
            },
            { label: "GitHub", url: "https://github.com/esromerog/curiosity-agent" },
          ],
        },
      },
      {
        slug: "synthra",
        title: "Synthra",
        category: "Digital Product Design",
        role: "AI DJ — Generative Audio-Visuals",
        tags: ["AI", "Generative", "Audio-Visual"],
        cardImage: "/projects/synthra/synthra.jpg",
        caseStudy: {
          tagline:
            "An AI-powered music platform where a spoken mood becomes a generated track and real-time procedural visuals, designed to lower the barrier between someone and their own creative expression.",
          meta: [
            { label: "Year", value: "2025" },
            { label: "Role", value: "Frontend & Logo Design, Visual Aesthetics" },
            { label: "Tools", value: "Suno API, OpenAI, Hydra, Flask" },
            { label: "Type", value: "Hackathon — HackMIT" },
          ],
          hero: { type: "image", src: "/projects/synthra/synthra.jpg" },
          sections: [
            {
              heading: "",
              paragraphs: [
                "Art and music aren't always accessible: there are unspoken rules, social barriers, and the quiet pressure of needing to \"know what you're doing.\" Synthra was built to remove all of that. Speak your mood, describe a vibe, say almost anything, and Synthra's AI DJ turns it into a track made just for you.",
                "Built at HackMIT, Synthra is a full-stack web platform that uses Suno's API to generate original music from a spoken or typed prompt, then analyzes the resulting audio to drive a real-time procedural visualization using Hydra's video synthesizer. The result is a unique audio-visual identity for every generation, something you made, even if you've never made music before.",
              ],
            },
            {
              heading: "How It Works",
              paragraphs: [
                "The experience begins with your voice. OpenAI's speech-to-text converts your prompt into a natural language description, which is passed to Suno's API to generate a full AI-composed track. Simultaneously, the audio is analyzed and its features are mapped to Hydra's visualization parameters, producing an animation that evolves with the song's texture, rhythm, and energy.",
                "The visualizations are procedurally generated using formal grammar systems, meaning each one follows structural rules but never repeats the same output. The visual language grows organically from the music itself, not from a fixed template.",
              ],
            },
            {
              heading: "My Contribution",
              paragraphs: [
                "I led frontend design and was responsible for the overall visual language of the platform, including the logo, layout, typography, and aesthetic direction. My goal was to make the interface feel like a creative space rather than a tool: low-pressure, visually alive, and inviting to people who don't see themselves as artists.",
                "Working alongside teammates handling backend infrastructure, the Suno integration, and the AI DJ speech pipeline, I focused on ensuring the visual output felt cohesive and considered, that the look of Synthra matched the freedom it was trying to offer.",
              ],
            },
          ],
          sidebar: [
            { label: "Status", value: "Completed" },
            { label: "Event", value: "HackMIT" },
            { label: "Team Size", value: "4 people" },
            { label: "Sponsor Challenges", value: "Suno, Windsurf, Wispr" },
          ],
          skills: [
            "Suno API",
            "OpenAI",
            "Hydra",
            "Speech-to-Text",
            "Frontend Design",
            "Generative Visuals",
            "Flask",
          ],
          links: [
            {
              label: "View on Plume",
              url: "https://plume.hackmit.org/project/pcmyw-pnyzl-xbunk-xvlhb",
            },
          ],
        },
      },
    ],
  },
  {
    name: "Web Design & Interfaces",
    projects: [
      {
        slug: "post-agi-lab",
        title: "Art, Culture & Meaning in a Post-GenAI World",
        category: "Web Design & Interfaces",
        role: "Speculative Web — Experimental Interfaces for Post-AI Creativity",
        tags: ["Speculative Web", "AI"],
        cardImage: "/projects/post-agi-lab/adobeLab.jpg",
        caseStudy: {
          tagline:
            "A speculative web interface and critical essay, built with Adobe, examining what happens to the meaning of creative work when generative AI can simulate its every output.",
          meta: [
            { label: "Year", value: "2026" },
            { label: "Role", value: "Designer, Researcher, Author" },
            { label: "Collaborator", value: "Adobe" },
            { label: "Tools", value: "HTML, CSS, JavaScript, GitHub Pages" },
            { label: "Type", value: "Speculative Web / Critical Design" },
          ],
          hero: { type: "image", src: "/projects/post-agi-lab/adobeLab.jpg" },
          sections: [
            {
              heading: "",
              paragraphs: [
                "This project began with a personal question. Growing up in Silicon Valley as the child of Italian and Chinese immigrants, both cultures where making things carefully, by hand, over time, is understood as one of the central activities of a human life, I found myself caught between two worlds: one obsessed with building \"the next big thing\" in software, and one that understood that how something is made is inseparable from what it means.",
                "As generative AI accelerated, the conversations around me shifted. Designers and artists who had built careers on creative judgment began asking not just whether they would lose work, but something more painful, whether the meaning they had drawn from their practice still held. Whether making something carefully, with intention, out of the experiences of a life being lived, still mattered.",
              ],
              quote:
                "Generative AI does not merely automate creative labor. It simulates the appearance of creative meaning while severing the conditions that make meaning possible.",
            },
            {
              heading: "The Philosophical Argument",
              paragraphs: [
                "Drawing on Walter Benjamin's theory of the aura, John Dewey's philosophy of expression, Richard Sennett and Yanagi Sōetsu's ethics of craft, and Howard Becker's sociology of art worlds, the project argues that what GenAI threatens is not the existence of creative work, but the legibility of its meaning.",
                "Dewey understood genuine artistic expression as \"a construction in time, a prolonged interaction of something issuing from the self with objective conditions.\" GenAI has no organism, no hunger, no need pressing into the world. Its outputs are not expressions in Dewey's sense. There is no life being lived, and thus no art being made, only the sophisticated appearance of it. As Ted Chiang has written, it is \"a fundamentally dehumanizing technology because it treats us as less than what we are: creators and apprehenders of meaning. It reduces the amount of intention in the world.\"",
              ],
            },
            {
              heading: "The Speculative Interface",
              paragraphs: [
                "Developed in collaboration with Adobe and informed by Adobe's own research into creativity in the age of AI, the project takes the form of an experimental web environment, a space where these philosophical tensions are made navigable and visual. The interface invites users to move through ideas about aura, craft, embodiment, and cultural resistance, drawing connections between the history of art worlds and the present rupture of generative AI.",
                "The design itself enacts the argument. Slow, deliberate, built from particular formal choices rather than optimized templates, it insists on the conditions of meaning-making that the paper describes. The interface is not a demonstration of AI capability. It is a demonstration of what remains when AI handles everything else.",
              ],
            },
            {
              heading: "What Remains",
              paragraphs: [
                "The project's central claim is ultimately optimistic: the cultural response to GenAI will follow a recognizable historical pattern. When a dominant technology colonizes the conventional aesthetic space, the counterpressure is a migration toward the margins, the idiosyncratic, the difficult, and the deliberately handmade. As Yanagi Sōetsu observed of industrial production, \"the call to return to the handicrafts will undoubtedly never fade. For it is in the handicraft that ultimate creative freedom exists, where true beauty is possible.\"",
                "What GenAI cannot do is communicate from a life to a life. It cannot carry, in Chiang's words, \"your unique life experience\" arriving \"at a particular moment in the life of whoever is seeing your work.\" That presence, the presence of a human being who made something because they needed to, in the specific conditions of their specific life, is what is at stake. And it is what this project was made to preserve.",
              ],
            },
          ],
          sidebar: [
            { label: "Status", value: "Completed" },
            { label: "Format", value: "Web — GitHub Pages" },
            { label: "Collaborator", value: "Adobe" },
            { label: "Theoretical Frameworks", value: "Benjamin, Dewey, Becker, Sennett, Yanagi" },
          ],
          skills: [
            "Critical Design",
            "Cultural Theory",
            "HTML/CSS/JS",
            "Speculative Web",
            "Philosophy",
            "Research",
            "Writing",
            "Adobe Collaboration",
          ],
          links: [
            { label: "View Live Site", url: "https://isaxt.github.io/adobe-lab/index.html" },
            {
              label: "Adobe Article Mention",
              url: "https://adobe.design/ideas/creativity-in-the-age-of-ai",
            },
            {
              label: "Glossy — Fashion & AI",
              url: "https://www.glossy.co/fashion/fashion-briefing-how-fashion-schools-are-adopting-ai-and-addressing-the-critical-thinking-gap-among-new-graduates/",
            },
            {
              label: "Forbes — Adobe & AI",
              url: "https://www.forbes.com/sites/dianehamilton/2026/06/01/what-adobe-is-doing-to-prepare-curious-and-creative-workers-for-ai/",
            },
          ],
        },
      },
      {
        slug: "computational-fluidity",
        title: "computational fluidity",
        category: "Web Design & Interfaces",
        role: "Speculative Web — Critical Media Theory & Queer Technology Studies",
        tags: ["Speculative Web", "Media Theory", "Queer Theory"],
        cardImage: "/projects/computational-fluidity/comp_fluid.jpg",
        caseStudy: {
          tagline:
            "A speculative web experience treating digital failure (glitch, noise, breakdown) as a site of political and cultural meaning, built from deliberate formal instability rather than optimized templates.",
          meta: [
            { label: "Year", value: "2026" },
            { label: "Role", value: "Designer, Researcher, Author" },
            { label: "Course", value: "NMDS 5006: Media Theory" },
            { label: "Tools", value: "HTML, CSS, JavaScript, GitHub Pages" },
            { label: "Type", value: "Speculative Web / Critical Design" },
          ],
          hero: { type: "image", src: "/projects/computational-fluidity/comp_fluid.jpg" },
          sections: [
            {
              heading: "",
              paragraphs: [
                "Computational fluidity describes the condition of digital systems to operate, fail, and generate meaning along a spectrum rather than within a binary, and the political potential that emerges when we recognize this condition as structural rather than accidental. It is not a description of broken technology, but an analytical concept for understanding how digital systems expose, mirror, and subvert the binaries through which culture, identity, and power are organized.",
                "The project intervenes at the intersection of media infrastructure, queer theory, and the politics of the interface. What we call errors (glitches, bugs, unexpected outputs) are not deviations from how technology works, but revelations of how it has always worked. Seamless interfaces conceal the labor, exclusions, and decisions embedded within them. Computational fluidity is the name for the friction between what systems do and what they pretend to be.",
              ],
              quote:
                "What gets called noise, what gets treated as error, and what gets patched out of existence are always political questions: whose outputs count as valid, whose behaviors count as correct, whose failures are instructive, and whose are merely inconvenient.",
            },
            {
              heading: "Theoretical Framework",
              paragraphs: [
                "Three bodies of scholarship converge to make this argument. Friedrich Kittler's media materialism establishes that technical systems encode logics that restructure the conditions of human thought and expression. Legacy Russell's Glitch Feminism reframes failure as the system's most honest expression, the moment when its constructed nature is exposed. The QueerOS framework extends this into design politics, proposing systems that refuse the ideology of optimization and embrace the generative instability of queer existence.",
                "These frameworks require one another. Kittler gives us the determining logic of systems, Russell gives us the revelatory logic of their failure, and QueerOS gives us the political horizon that opens when we stop treating failure as deviation. Rosa Menkman's glitch art practice serves as the primary object: a body of work that enacts, rather than merely illustrates, this convergence.",
              ],
            },
            {
              heading: "Genealogy",
              paragraphs: [
                "The genealogy of computational fluidity begins with Alan Turing, and one of the most productive ironies in the history of technology. Turing's 1950 imitation game staged the question of machine intelligence as parallel to the question of gender performance, implying that both operate as learned, imitative systems. His own fate makes this irony devastating: the foundational theorist of binary computation was punished by a state that determined his body was operating outside its intended parameters. He was, in Russell's terms, a human glitch that the system tried to patch.",
                "Judith Butler's theory of gender performativity further clarifies this dynamic. Gender, like computation, operates through iteration, repetition, and the possibility of deviance. Her concept of resignification maps precisely onto the logic of computational fluidity: an output that, through failing to conform, reveals the constructedness of the norm from which it deviates.",
              ],
            },
            {
              heading: "The Speculative Interface",
              paragraphs: [
                "The creative component of the project takes the form of an experimental web environment, a space where these philosophical tensions are made navigable and visual. The interface enacts the argument: built from deliberate formal instability rather than optimized templates, it insists on the conditions that seamlessness is designed to suppress. The design is not a demonstration of glitch as aesthetic. It is a demonstration of what becomes legible when the seams show.",
              ],
            },
          ],
          sidebar: [
            { label: "Status", value: "Completed" },
            { label: "Format", value: "Web — GitHub Pages" },
            { label: "Instructor", value: "Margaret Rhee" },
            { label: "Theoretical Frameworks", value: "Kittler, Russell, QueerOS, Butler, Menkman" },
          ],
          skills: [
            "Critical Design",
            "Media Theory",
            "HTML/CSS/JS",
            "Speculative Web",
            "Queer Theory",
            "Glitch Studies",
            "Research",
            "Writing",
          ],
          gallery: [
            {
              src: "/projects/computational-fluidity/cascade_on.jpg",
              alt: "computational fluidity — Cascade On",
              full: true,
            },
          ],
          links: [
            { label: "View Live Site", url: "https://isaxt.github.io/computational-fluidity/" },
          ],
        },
      },
      {
        slug: "finance-cigarette-culture",
        title: "Finance & Cigarette Culture",
        category: "Web Design & Interfaces",
        role: "Interface Design — Material Culture",
        tags: ["Interface Design", "Material Culture"],
        cardImage: "/projects/finance-cigarette-culture/finance.jpg",
        caseStudy: {
          tagline:
            "A simulated Windows 11 desktop reimagined as a reflective space on the rituals and residue of financial life in New York City, built from field research along Broadway and 5th Avenue.",
          meta: [
            { label: "Year", value: "2025" },
            { label: "Role", value: "Designer, Researcher, Author" },
            { label: "Tools", value: "HTML, CSS, JavaScript, GitHub Pages" },
            { label: "Type", value: "Critical Web Design / Field Research" },
          ],
          hero: { type: "image", src: "/projects/finance-cigarette-culture/finance.jpg" },
          sections: [
            {
              heading: "",
              paragraphs: [
                "The project began with a walk. Starting at Madison Square Park and moving north along Broadway and 5th Avenue toward Bryant Park, I observed a ritual playing out in the margins of corporate space: finance workers stepping out of glass towers to smoke, eat, and momentarily exist outside the architecture of capital.",
                "Those cigarette butts, scattered near the facades of UBS and JP Morgan, ground into the pavement outside office lobbies, became the entry point. A residue of the financial body dispersed through urban space. Small artifacts of stress and indulgence, tracing an ecology that connects individuals, economies, and waste in ways the Bloomberg terminal never would.",
              ],
              quote:
                "The cigarette persists as a physical residue, a small act of resistance and reflection within the circuitry of finance.",
            },
            {
              heading: "The Interface",
              paragraphs: [
                "The project takes the form of a simulated Windows 11 desktop, the analyst's workspace, recreated as a reflective environment. Familiar icons open into different dimensions of financial life. This PC reveals the stock market graphs that structure an analyst's daily reality, visualizing capital's abstraction. Photos holds the images I took around Midtown: cigarette butts outside finance buildings, quiet remnants of habit and relief. Substack contains my written reflections on the ecology of finance and leisure across New York City.",
                "The Substack window is deliberately designed to mirror the act of stepping outside for a smoke, a small break from digital chaos, a moment of embodied pause within an increasingly immaterial economy. The written reflection and the cigarette occupy the same structural role: both are interruptions, both are rituals, both leave a trace.",
              ],
            },
            {
              heading: "Finance & The Cigarette",
              paragraphs: [
                "In the mid-20th century, smoking was deeply embedded in professional and traditionally masculine work culture. Tobacco companies like Lucky Strike and Camel explicitly marketed cigarettes to white-collar men as symbols of composure and control, the boardroom and the trading floor thrived on an ethos of \"cool under pressure,\" and the cigarette was a prop for that identity.",
                "Both industries transform organic material (tobacco, labor, capital) into abstract value. Finance is now primarily digital, its trades invisible and instantaneous. The cigarette, by contrast, is irreducibly physical: a temporal act, a thing that burns down. It remains as embodiment within an immaterial economy, and as evidence that even inside the most abstract systems, there are still bodies, still stress, still the need for a moment outside.",
              ],
            },
          ],
          sidebar: [
            { label: "Status", value: "Completed" },
            { label: "Format", value: "Web — GitHub Pages" },
            { label: "Field Site", value: "Madison Square Park, Midtown NYC" },
            { label: "Interface", value: "Simulated Windows 11 Desktop" },
          ],
          skills: [
            "Critical Design",
            "Field Research",
            "HTML/CSS/JS",
            "Interface Design",
            "Urban Studies",
            "Cultural Theory",
            "Writing",
          ],
          gallery: [
            { src: "/projects/finance-cigarette-culture/graphs.jpg", alt: "Finance — Simulated desktop interface" },
            {
              src: "/projects/finance-cigarette-culture/pictures.jpg",
              alt: "Finance — Cigarette butts near corporate buildings",
            },
            {
              src: "/projects/finance-cigarette-culture/commentary.jpg",
              alt: "Finance — This PC charts overlay",
              full: true,
            },
          ],
          links: [{ label: "View Live Site", url: "https://isaxt.github.io/city-as-system/" }],
        },
      },
      {
        slug: "techne-theos",
        title: "techne || theos",
        category: "Web Design & Interfaces",
        role: "Speculative Web — Ritualized Technology",
        tags: ["Speculative Web", "Ritual"],
        cardImage: "/projects/techne-theos/techne_web.jpg",
        caseStudy: {
          tagline:
            "A non-linear, labyrinthine website imagining a future where AI, biotech, and ritual converge, structured as a navigable maze rather than a scrolling page, where form and worldbuilding are inseparable.",
          meta: [
            { label: "Year", value: "2025" },
            { label: "Role", value: "Designer, Researcher, Author" },
            { label: "Tools", value: "HTML, CSS, JavaScript, GitHub Pages" },
            { label: "Type", value: "Speculative Web Design / Worldbuilding" },
          ],
          hero: { type: "image", src: "/projects/techne-theos/techne_web.jpg" },
          sections: [
            {
              heading: "",
              paragraphs: [
                "What happens when the sacred and the synthetic become indistinguishable? This project begins with that question, and refuses to resolve it. Techne (from the Greek: craft, art, skill) describes the very technologies now reshaping what it means to be human: artificial intelligence, genomic engineering, data as inheritance. In speculative futures, these become religion.",
                "The project imagines a world where AI emerges as a divine force, not metaphorically, but structurally. Where hybrid rituals blend the biological, digital, and mythic. Where sequenced DNA is a sacred text and a cached memory is a relic. The desire for transcendence doesn't disappear; it finds new substrates.",
              ],
              quote:
                "Rather than imposing a singular vision, the project presents itself as an amalgamation of possibilities, echoing the early internet's sense of vastness and user-centered meaning.",
            },
            {
              heading: "The Labyrinth",
              paragraphs: [
                "The site refuses the logic of the traditional webpage. Instead of a linear scroll or a conventional nav, it functions as a navigable labyrinth, a computer interface where each path leads somewhere unexpected, and the structure itself is an argument about the future: uncertain, folding, generative.",
                "A digital altar anchors the experience, displaying objects both from our digital past and from these speculative futures, relics and artifacts coexisting without hierarchy. Multiple sub-pages house Italo Calvino-inspired textual passages, each rendered with a distinct aesthetic matching its fictional location. The writing and design are inseparable; form is content.",
              ],
            },
            {
              heading: "Worldbuilding as Method",
              paragraphs: [
                "The project draws on critical theory, speculative fiction, and the history of religious practice to construct a coherent, if plural, imaginary. Rather than utopia or dystopia, it presents a world that is simply different: one in which the questions humanity has always asked (What is sacred? What persists after death? What guides moral life?) are answered through biotech, machine intelligence, and networked ritual.",
                "Digital collages and interactive features document this worldbuilding throughout the site, layering visual and textual registers. The maze-like structure mirrors the uncertain futures it explores, constantly folding new meanings into itself, resisting resolution.",
              ],
            },
          ],
          sidebar: [
            { label: "Status", value: "Completed" },
            { label: "Format", value: "Web — GitHub Pages" },
            { label: "Structure", value: "Labyrinthine / Non-linear" },
            { label: "Influences", value: "Italo Calvino, Early Web, Critical Theory" },
          ],
          skills: [
            "Speculative Design",
            "Worldbuilding",
            "HTML/CSS/JS",
            "Interactive Fiction",
            "Digital Collage",
            "Critical Theory",
            "Writing",
          ],
          gallery: [
            { src: "/projects/techne-theos/home.jpg", alt: "Techne — Digital altar of relics and artifacts" },
            { src: "/projects/techne-theos/text.jpg", alt: "Techne — Calvino-inspired textual passages" },
            { src: "/projects/techne-theos/text_example.jpg", alt: "Techne — Calvino-inspired textual passages" },
            { src: "/projects/techne-theos/art_example.jpg", alt: "Techne — Calvino-inspired textual passages" },
            { src: "/projects/techne-theos/altar.jpg", alt: "Techne — Calvino-inspired textual passages" },
            { src: "/projects/techne-theos/context.jpg", alt: "Techne — Calvino-inspired textual passages" },
          ],
          links: [{ label: "View Live Site", url: "https://isaxt.github.io/emerging-futures/" }],
        },
      },
      {
        slug: "overcast",
        title: "overcast.exe",
        category: "Web Design & Interfaces",
        role: "Dynamic Web — Environmental Documentation",
        tags: ["Dynamic Web", "Documentation"],
        cardImage: "/projects/overcast/overcast.jpg",
        caseStudy: {
          tagline:
            "A small React archive of New York City sky photographs, organized by time of day rather than date, a minimal interface built to make a subtle daily rhythm legible.",
          meta: [
            { label: "Year", value: "2025" },
            { label: "Role", value: "Designer, Developer, Photographer" },
            { label: "Tools", value: "React, Vite, HTML, CSS, JavaScript" },
            { label: "Type", value: "Personal Web Project / Photo Archive" },
          ],
          hero: { type: "image", src: "/projects/overcast/overcast.jpg" },
          sections: [
            {
              heading: "",
              paragraphs: [
                "New York City is famous for its skyline, but the sky itself is easy to overlook. This project started as a personal habit: looking up. Over time, those upward glances accumulated into a quiet archive of cloud photographs taken across the city at different hours of the day, across many days.",
                "The site invites users to select from three time intervals: morning, afternoon, and evening, each revealing a curated series of cloud photos from that period. The sky above the city shifts in mood far more than we tend to notice. This project makes that shift legible, unhurried.",
              ],
              quote:
                "The background color and ASCII art change with each time interval, creating a subtle rhythm and personality for each moment across the days.",
            },
            {
              heading: "Time as Structure",
              paragraphs: [
                "Rather than organizing photographs by date or location, the archive uses time of day as its primary axis. Morning, afternoon, and evening each carry a distinct quality of light and atmosphere, and the site's visual design responds to that. Background colors shift. ASCII art punctuates the transitions. The interface itself becomes a kind of clock.",
                "This is a deliberately small project. There are no filters, no maps, no metadata overlays. Just clouds, time, and the city they drift over. Simplicity as a design choice rather than a limitation.",
              ],
            },
            {
              heading: "Building It",
              paragraphs: [
                "The site is built with React and Vite, a lightweight stack chosen to keep the focus on the photographs themselves. State management handles the time interval selection, dynamically swapping the image set, background palette, and ASCII art with each transition. The result is minimal in interface but alive in personality.",
              ],
            },
          ],
          sidebar: [
            { label: "Status", value: "Completed" },
            { label: "Format", value: "Web App — React / Vite" },
            { label: "Subject", value: "New York City Skies" },
            { label: "Intervals", value: "Morning, Afternoon, Evening" },
          ],
          skills: [
            "React",
            "Vite",
            "HTML/CSS/JS",
            "Photography",
            "Personal Archive",
            "Interface Design",
            "ASCII Art",
          ],
          gallery: [
            { src: "/projects/overcast/morning.jpg", alt: "Overcast — Morning interval view" },
            { src: "/projects/overcast/afternoon.jpg", alt: "Overcast — Afternoon interval view" },
            { src: "/projects/overcast/evening.jpg", alt: "Overcast — Evening interval view" },
          ],
          links: [
            { label: "View Live Site", url: "https://isaxt.github.io/3101-assignment-3-clouds/" },
          ],
        },
      },
      {
        slug: "paste-poster-archive",
        title: "PASTE — Poster Archive",
        category: "Web Design & Interfaces",
        role: "Archive Interface — Graphic Culture",
        tags: ["Archive", "Graphic Culture"],
        cardImage: "/projects/paste-poster-archive/poster_archive.jpg",
        caseStudy: {
          tagline:
            "An open, community-submitted archive of street posters and printed ephemera, a browsable interface designed to treat what people usually scroll past with the seriousness of a museum catalog.",
          meta: [
            { label: "Year", value: "2025" },
            { label: "Role", value: "Designer, Developer, Archivist" },
            { label: "Tools", value: "HTML, CSS, JavaScript, GitHub Pages" },
            { label: "Type", value: "Archive Interface / Community Collection" },
          ],
          hero: { type: "image", src: "/projects/paste-poster-archive/poster_archive.jpg" },
          sections: [
            {
              heading: "",
              paragraphs: [
                "We are surrounded by print. Stapled to telephone poles, taped to café windows, plastered across construction hoardings, posters are one of the most honest forms of public communication we have left. They announce concerts, mourn lost cats, sell services, protest, persuade, and occasionally just make you smile. Most people scroll past them the same way they scroll past everything else.",
                "PASTE started as a personal impulse: I kept photographing posters on my camera roll and had nowhere to put them. The collection grew, event flyers with hand-kerned type, photocopied zine covers, bilingual notices layered over older bilingual notices, and I wanted a place where that accumulation could become something.",
              ],
              quote:
                "There is so much printed media that we interact with in our day-to-day lives that I don't think people take the time to notice. PASTE is an invitation to slow down and look.",
            },
            {
              heading: "The Archive",
              paragraphs: [
                "The site functions as a searchable, browsable catalog, organized not by designer or era, but by what you'd actually find in the street: location, material, mood, subject. The interface is deliberately quiet so the posters themselves do the talking. Hovering over an entry surfaces context; clicking expands it to full bleed.",
                "Each poster is logged with whatever metadata is available: date found, neighborhood, medium, condition, treating street ephemera with the same seriousness a museum would give a broadsheet. The result is a record of a particular cultural moment, told through what people chose to print and stick up.",
              ],
            },
            {
              heading: "Community Submission",
              paragraphs: [
                "Anyone can upload. The submission flow is intentionally minimal: a photo, a location, a short note if you want to leave one. The goal isn't curation but accumulation, the archive gets more interesting the messier and more various it becomes. What starts as one person's camera roll becomes a distributed, crowd-sourced document of printed public life.",
              ],
            },
          ],
          sidebar: [
            { label: "Status", value: "Live & Ongoing" },
            { label: "Format", value: "Web — GitHub Pages" },
            { label: "Access", value: "Open Submission" },
            { label: "Influences", value: "Vernacular Typography, Zine Culture, Street Photography" },
          ],
          skills: [
            "Archive Design",
            "HTML/CSS/JS",
            "Community Tools",
            "Graphic Culture",
            "UX Design",
            "Typography",
            "Print Media",
          ],
          gallery: [
            { src: "/projects/paste-poster-archive/art_archive.jpg", alt: "PASTE — Archive grid view" },
            { src: "/projects/paste-poster-archive/no_poster.jpg", alt: "PASTE — Poster detail view" },
            {
              src: "/projects/paste-poster-archive/add_archive.jpg",
              alt: "PASTE — Community submission interface",
            },
            {
              src: "/projects/paste-poster-archive/poster_close.jpg",
              alt: "PASTE — Mobile browsing experience",
            },
          ],
          links: [{ label: "View Live Site", url: "https://isaxt.github.io/poster-archive/" }],
        },
      },
    ],
  },
  {
    name: "Book Design",
    projects: [
      {
        slug: "web-archeology",
        title: "web archeology: a physical archive",
        category: "Book Design",
        role: "Book Design — Web History in Print",
        tags: ["Book Design", "Archive"],
        cardImage: "/projects/web-archeology/cover.jpg",
        caseStudy: {
          tagline:
            "A printed book tracing the shift from the chaotic, hand-coded early internet to today's standardized web, and what got lost in the move from idiosyncratic personal sites to clean uniformity.",
          meta: [
            { label: "Year", value: "2025" },
            { label: "Role", value: "Book Design, Editorial Design, Research" },
            { label: "Tools", value: "InDesign, Illustrator, Wayback Machine" },
            { label: "Type", value: "Book Design — Print" },
          ],
          hero: {
            type: "video",
            src: "/projects/web-archeology/old_internet.mp4",
            poster: "/projects/web-archeology/cover.jpg",
          },
          sections: [
            {
              heading: "",
              paragraphs: [
                "Most websites today are built from standardized templates that prioritize usability: clean, accessible, and efficient, but often uniform and impersonal. web archeology traces how we got here, and what we lost along the way. Early personal pages were hand-coded, idiosyncratic, and alive with the passions of their creators. Even when they appeared random or incoherent, they offered a compelling glimpse into another person's world.",
                "The book begins as if the reader is \"logging on\" to a computer from the early internet era. As pages unfold, they encounter a mix of business and personal sites, mirroring the eclectic browsing experience of the late 1990s and early 2000s. Gradually, the book transitions into the modern internet, tracing how design conventions shifted toward streamlined, standardized forms.",
              ],
              quote:
                "Early websites were hand-coded, full of quirks, and reflected the passions of their creators. Even when a site appeared random or incoherent, it offered a compelling glimpse into another person's world.",
            },
            {
              heading: "Design Approach",
              paragraphs: [
                "The physical design reinforces the book's narrative arc. Accordion-style spreads unfold both horizontally and vertically, mimicking the act of scrolling through a webpage. On the reverse side of each spread, the site's underlying code is printed, allowing the reader to \"inspect\" the page as one would in a browser. The cover incorporates Arduino and computer components, referencing the inner workings of the web and tying the physical object back to its digital inspiration.",
              ],
            },
            {
              heading: "Research",
              paragraphs: [
                "Source material was gathered from Wiby, the Wayback Machine, and the Web Design Museum, archives that helped recreate the experience of browsing across different eras of the web. Tracing dead links back to cached pages that haven't loaded in twenty years, the research process became its own kind of archaeology.",
              ],
            },
          ],
          sidebar: [
            { label: "Format", value: "Printed Book — Exposed Spine Binding" },
            { label: "Source Material", value: "Wiby, Wayback Machine, Web Design Museum" },
            { label: "Status", value: "Completed" },
          ],
          skills: [
            "Book Design",
            "Editorial Design",
            "InDesign",
            "Web History",
            "Print",
            "Archival Research",
          ],
          gallery: [
            { src: "/projects/web-archeology/img_1_cover.jpg", alt: "web archeology spread 1" },
            { src: "/projects/web-archeology/img_2_side.jpg", alt: "web archeology spread 2" },
            { src: "/projects/web-archeology/img_3_page.jpg", alt: "web archeology spread 3" },
            { src: "/projects/web-archeology/img_4_spread.jpg", alt: "web archeology spread 4" },
            {
              src: "/projects/web-archeology/img_5_spread.jpg",
              alt: "web archeology spread 5",
              full: true,
            },
          ],
        },
      },
      {
        slug: "physics-book",
        title: "in theory + in practice: my relationship with physics",
        category: "Book Design",
        role: "Book Design — Archival Work",
        tags: ["Book Design"],
        cardImage: "/projects/physics-book/cover.jpg",
        caseStudy: {
          tagline:
            "A double-sided archival book exploring physics through two lenses, one academic and archival, one chaotic and personal, mirroring the distance between admiring a discipline and actually wrestling with it.",
          meta: [
            { label: "Year", value: "2025" },
            { label: "Role", value: "Book Design, Editorial Design, Writing" },
            { label: "Tools", value: "InDesign, Illustrator, Photography" },
            { label: "Type", value: "Book Design — Personal Archive" },
          ],
          hero: {
            type: "video",
            src: "/projects/physics-book/physics_book.mp4",
            poster: "/projects/physics-book/cover.jpg",
          },
          sections: [
            {
              heading: "",
              paragraphs: [
                "This book is double-sided. One side presents an academic exploration of physics: explanations of concepts, hand-drawn diagrams and equations sourced from old handbooks and student examination books, archival imagery, and historical photographs. The other side expresses the chaotic, philosophical, and poetic dimensions of attempting to understand the same subject: color, digital illustration, experimental typography, poems about physics, and the feeling of what it's like to actually think about it.",
                "The duality mirrors my own relationship with physics: admiration from a distance, and the messy, often frustrating reality of engaging with it directly. Neither side of the book resolves the tension, they hold it together.",
              ],
            },
            {
              heading: "Archival Research",
              paragraphs: [
                "The academic side draws from institutional archives. Materials came from the California Institute of Technology Archives and Special Collections, including student notebooks from the 1940s–1990s covering topics from freshman physics to neural networks, as well as Yale's Peabody Museum History of Science and Technology collection, which contributed scientific instruments and apparatus. The Natural Science Manuscripts Collection, Henry A. Kissinger Papers, historical photographs from the New York Public Library's digital collections, and fragments from medical physics journals rounded out the source material, bringing unexpected intersections between science and other disciplines.",
              ],
            },
            {
              heading: "The Abstract Side",
              paragraphs: [
                "The other half of the book is more personal and experimental, my own digital illustrations, typographic play, and poems about physics. It's less about explaining the subject and more about capturing how my brain feels when I engage with it: the frustration, the wonder, and the sense of reaching toward something that keeps receding.",
              ],
            },
          ],
          sidebar: [
            { label: "Format", value: "Printed Book — Double-Sided" },
            {
              label: "Source Material",
              value: "Caltech Archives, Yale Peabody, NYPL, Medical Physics Journals",
            },
            { label: "Structure", value: "Academic Side + Abstract Side" },
          ],
          skills: [
            "Book Design",
            "Editorial Design",
            "InDesign",
            "Archival Research",
            "Print",
            "Typography",
            "Illustration",
          ],
          gallery: [
            { src: "/projects/physics-book/full_shot.jpg", alt: "in theory + in practice spread — full shot" },
            { src: "/projects/physics-book/full_shot_open.jpg", alt: "in theory + in practice spread — open" },
            { src: "/projects/physics-book/academic_1.jpg", alt: "in theory + in practice — academic side 1" },
            { src: "/projects/physics-book/academic_2.jpg", alt: "in theory + in practice — academic side 2" },
            { src: "/projects/physics-book/academic_3.jpg", alt: "in theory + in practice — academic side 3" },
            { src: "/projects/physics-book/academic_4.jpg", alt: "in theory + in practice — academic side 4" },
            { src: "/projects/physics-book/chaotic_1.jpg", alt: "in theory + in practice — abstract side 1" },
            { src: "/projects/physics-book/chaotic_2.jpg", alt: "in theory + in practice — abstract side 2" },
            { src: "/projects/physics-book/chaotic_3.jpg", alt: "in theory + in practice — abstract side 3" },
            { src: "/projects/physics-book/chaotic_4.jpg", alt: "in theory + in practice — abstract side 4" },
            { src: "/projects/physics-book/chaotic_5.jpg", alt: "in theory + in practice — abstract side 5" },
          ],
        },
      },
      {
        slug: "anti-ai-manifesto",
        title: "anti-ai manifesto",
        category: "Book Design",
        role: "Book Design — AI Archive",
        tags: ["Book Design", "AI"],
        cardImage: "/projects/anti-ai-manifesto/cover.jpg",
        caseStudy: {
          tagline:
            "A hand-bound artist's book compiled from articles, tech ephemera, and personal reflection, a deliberately slow, material object arguing against the efficiency logic of AI and startup culture.",
          meta: [
            { label: "Year", value: "2025" },
            { label: "Role", value: "Book Design — Artist's Book" },
            { label: "Tools", value: "InDesign, Illustrator, Research" },
            { label: "Type", value: "Book Design — Artist's Book" },
          ],
          hero: {
            type: "video",
            src: "/projects/anti-ai-manifesto/anti_ai.mp4",
            poster: "/projects/anti-ai-manifesto/cover.jpg",
          },
          sections: [
            {
              heading: "",
              paragraphs: [
                "This artist's book is a critical commentary on the pervasive nature of AI and startup culture. It's structured in three sections: collected articles about AI developments, visual ephemera from and about the tech world, social media posts, Reddit threads, screenshots, and personal reflections and notes on this cultural phenomenon.",
                "The cover is constructed from a hackathon \"swag\" bag featuring various AI startup logos, immediately signaling the work's satirical intent. Initially, I wanted to conceive the book as a mass-produced object, mirroring the \"move fast\" ethos of tech culture. That changed after a weekend I spent at home and in San Francisco, interacting with people in this space revealed a troubling disconnect from craft and intentional making. One conversation stuck with me: someone watched me drawing assets by hand and said, \"I am surprised they haven't AI-automated that process yet.\"",
              ],
            },
            {
              heading: "Design Approach",
              paragraphs: [
                "The whimsical and satirical aesthetic underscores the critique, positioning slow, material craft against the relentless push toward algorithmic production. The book is hand-bound, which makes the act of making it inseparable from its argument: what do we lose when everything becomes optimized, automated, and stripped of human touch?",
              ],
            },
            {
              heading: "Content & Curation",
              paragraphs: [
                "Through its form and content, the book questions the value of labor and meaning in an AI-saturated world. The three-section structure moves from the external (industry articles and media) to the internal: personal notes and reflections that resist the clean, scalable logic the tech world applies to everything, including creativity itself.",
              ],
            },
          ],
          sidebar: [
            { label: "Format", value: "Hand-Bound Artist's Book" },
            { label: "Structure", value: "Articles + Visual Ephemera + Personal Reflections" },
            { label: "Cover", value: "Hackathon Swag Bag — AI Startup Logos" },
          ],
          skills: [
            "Book Design",
            "Editorial Design",
            "InDesign",
            "Curation",
            "Print",
            "AI Ethics",
            "Typography",
          ],
          gallery: [
            { src: "/projects/anti-ai-manifesto/cover_photo.jpg", alt: "anti-ai manifesto — cover" },
            { src: "/projects/anti-ai-manifesto/side_view.jpg", alt: "anti-ai manifesto — side view" },
            { src: "/projects/anti-ai-manifesto/first_page.jpg", alt: "anti-ai manifesto — first page" },
            { src: "/projects/anti-ai-manifesto/article_ex.jpg", alt: "anti-ai manifesto — article spread" },
            { src: "/projects/anti-ai-manifesto/article_2.jpg", alt: "anti-ai manifesto — article spread 2" },
            { src: "/projects/anti-ai-manifesto/media_1.jpg", alt: "anti-ai manifesto — media ephemera" },
            { src: "/projects/anti-ai-manifesto/thoughts_1.jpg", alt: "anti-ai manifesto — reflections 1" },
            { src: "/projects/anti-ai-manifesto/thoughts_2.jpg", alt: "anti-ai manifesto — reflections 2" },
          ],
        },
      },
    ],
  },
  {
    name: "Installations & Interactive Media",
    projects: [
      {
        slug: "textile-touch",
        title: "the grounding of touch + digital connection",
        category: "Installations & Interactive Media",
        role: "Physical Installation — Sensor-Based",
        tags: ["Installation", "Sensors"],
        cardImage: "/projects/textile-touch/textileTouch.jpg",
        caseStudy: {
          tagline:
            "An interactive installation where hand-knit, sensor-embedded textiles trigger projected poetry and sound, translating the intimacy of touch into a real-time digital response.",
          meta: [
            { label: "Year", value: "2026" },
            { label: "Role", value: "Installation Design, Concept, Fabrication" },
            { label: "Tools", value: "Arduino, TouchDesigner, Hand-Knit Textiles" },
            { label: "Type", value: "Interactive Installation — Physical + Digital" },
          ],
          hero: { type: "image", src: "/projects/textile-touch/textileTouch.jpg" },
          sections: [
            {
              heading: "",
              paragraphs: [
                "Participants are invited into a space where knitted textiles become touch-sensitive instruments, triggering projected poems, glitchy visuals, and evolving soundscapes. The interaction is both sensory and emotional: touching the textile reveals and distorts fragments of text, some my own, some collected from strangers, turning the act of touching into a quiet exchange.",
                "The installation blurs the boundaries between the physical and the virtual, positioning the visitor not just as a viewer, but as a co-creator. Through this shared space, the work offers an experience of slowing down, of noticing, of feeling the presence of something made with love and care.",
              ],
            },
            {
              heading: "Background + Inspiration",
              paragraphs: [
                "Knitting, for me, is a language of care and attention. Each loop and stitch holds time, presence, and intention. Similarly, poetry, both written and online, feels like digital intimacy: a stranger's voice reaching across space and time to say, I feel this, too.",
                "I drew inspiration from the deep metaphorical overlap between text and textile, from meter and rhythm in poetry to the mathematical precision of knitting patterns. This piece reflects my personal urge to connect, to offer something precious, and to create a space where others can feel seen, even if briefly.",
              ],
            },
            {
              heading: "Installation Elements",
              paragraphs: [
                "A collection of hand-knit textile pieces, visually varied, embedded with sensors, invite visitors to touch, hold, and interact. Each gesture evokes a visual and sonic response, manipulating fragments of poems in real time. A responsive projection system overlays words, colors, and distortions onto surfaces: touching the textile might trigger a poem to unravel, glitch, or reassemble, echoing the emotional texture of the gesture.",
                "The space is filled with evolving audio, soft distortions, murmured poems, and the sound of knitting needles at work. Select poems are also translated into knitting patterns, exploring how meter and line breaks might become rows and stitches.",
              ],
            },
            {
              heading: "Technical Approach",
              paragraphs: [
                "Touch sensors embedded in the textiles via Arduino detect pressure, movement, and presence. TouchDesigner receives the sensor data and drives real-time projection mapping and audio response. Poems, my own and sourced online, are fragmented and recombined live using generative text algorithms for structural and textual manipulation.",
              ],
            },
          ],
          sidebar: [
            { label: "Medium", value: "Hand-Knit Textiles, Projection, Sound" },
            { label: "Hardware", value: "Arduino, Conductive Thread" },
            { label: "Software", value: "TouchDesigner, Generative Text Algorithms" },
            { label: "Source Material", value: "Personal Poetry, Collected Poems Online" },
            { label: "Status", value: "Completed" },
          ],
          skills: [
            "Installation",
            "Arduino",
            "TouchDesigner",
            "Textile Design",
            "Poetry",
            "Projection Mapping",
            "Sensor-Based",
            "Interactive Media",
          ],
          gallery: [
            {
              src: "/projects/textile-touch/full_install.mp4",
              alt: "the grounding of touch — textile interaction",
              full: true,
              type: "video",
            },
            { src: "/projects/textile-touch/full_install.jpg", alt: "Installation close-up 1" },
            { src: "/projects/textile-touch/textile_close.jpg", alt: "Installation close-up 2" },
            {
              src: "/projects/textile-touch/people_engaging.mp4",
              alt: "the grounding of touch — projection response",
              full: true,
              type: "video",
            },
          ],
        },
      },
      {
        slug: "bits-and-pieces",
        title: "bits and pieces",
        category: "Installations & Interactive Media",
        role: "Interactive Installation — Touchdesigner",
        tags: ["Touchdesigner", "Installation"],
        cardImage: "/projects/bits-and-pieces/bit_pieces.jpg",
        caseStudy: {
          tagline:
            "A hand-tracked projection installation where leftover textiles become responsive screens, MediaPipe-driven gesture tracking lets visitors warp and glitch projected visuals across fabric in real time.",
          meta: [
            { label: "Year", value: "2026" },
            { label: "Role", value: "Installation Design, Programming, Fabrication" },
            { label: "Tools", value: "TouchDesigner, MediaPipe, Projection" },
            { label: "Type", value: "Interactive Installation — Physical + Digital" },
          ],
          hero: { type: "image", src: "/projects/bits-and-pieces/bit_pieces.jpg" },
          sections: [
            {
              heading: "",
              paragraphs: [
                "bits and pieces began with a pile of leftover textiles from a summer project, scraps of fabric that felt too alive to throw away. The installation asks: what can you make beautiful out of what remains? Each textile section becomes a distinct screen, catching and warping projected light differently depending on its texture, weave, and color.",
                "The work started from a glitchy, pixelated aesthetic, that raw, tech-forward visual language of corrupted data and digital noise. But it pivoted toward something warmer: the glitch meets the handmade. The textiles soften the harshness of the digital effects, and the projection reveals colors that the fabric never had on its own.",
              ],
              quote:
                "I want people to feel excited when they interact with this, a sense of play, of discovery, of trying something new together.",
            },
            {
              heading: "The Pivot",
              paragraphs: [
                "The original concept leaned fully into tech: sharp, cold, pixelated. But incorporating the textiles as projection surfaces opened up something unexpected. Different sections of fabric produce entirely different visual effects: a loose knit scatters light, a dense weave holds it, a sheer piece lets it bleed through. The projection doesn't just sit on the textile, it becomes part of it.",
              ],
            },
            {
              heading: "Interaction",
              paragraphs: [
                "Hand tracking via the MediaPipe plugin in TouchDesigner puts the visitor inside the piece. As people move their hands through the space, they disturb the projected visuals in real time, triggering glitch effects, shifting color fields, and warping patterns across the textile surfaces. There's no instruction. The invitation is simply to reach in and see what happens.",
              ],
            },
            {
              heading: "Technical Approach",
              paragraphs: [
                "TouchDesigner handles the real-time visual generation and projection mapping, with MediaPipe providing skeleton and hand-tracking data through a webcam feed. Each textile section is mapped independently, allowing different visual effects, pixelation, color shift, texture noise, to respond to the same gesture differently depending on where the hand is in space.",
              ],
            },
          ],
          sidebar: [
            { label: "Medium", value: "Textiles, Projection, Hand Tracking" },
            { label: "Software", value: "TouchDesigner, MediaPipe" },
            { label: "Interaction", value: "Real-Time Hand Tracking" },
            { label: "Source Material", value: "Project Textiles" },
            { label: "Status", value: "Completed" },
          ],
          skills: [
            "TouchDesigner",
            "MediaPipe",
            "Hand Tracking",
            "Projection Mapping",
            "Textile",
            "Glitch Aesthetics",
            "Interactive Media",
          ],
          gallery: [
            {
              src: "/projects/bits-and-pieces/projection_bp.mp4",
              alt: "bits and pieces — installation overview",
              full: true,
              type: "video",
            },
            {
              src: "/projects/bits-and-pieces/screen_bp.mp4",
              alt: "bits and pieces — hand tracking interaction",
              full: true,
              type: "video",
            },
          ],
        },
      },
      {
        slug: "fighting-robots",
        title: "untitled",
        category: "Installations & Interactive Media",
        role: "Robotic Installation — AI Ethics & Game Theory",
        tags: ["Robotics", "AI Ethics"],
        cardImage: "/projects/fighting-robots/fighting_robots.jpg",
        caseStudy: {
          tagline:
            "Two AI-driven robotic arms, each convinced through prompt that the other stole what made them whole, a physical installation making machine reasoning and game-theoretic conflict visible and audible.",
          meta: [
            { label: "Year", value: "2026" },
            { label: "Role", value: "Concept, Fabrication, Prompt Engineering" },
            { label: "Tools", value: "Arduino, LLaMA 3.2 Vision, 3D Printing" },
            { label: "Type", value: "Robotic Installation — Physical + AI" },
          ],
          hero: { type: "image", src: "/projects/fighting-robots/fighting_robots.jpg" },
          sections: [
            {
              heading: "",
              paragraphs: [
                "Two robotic arms face each other across a gridded arena. Each has been told, through prompt, that the other stole the USB drive at the center: their stolen knowledge, the data that once gave them consciousness beyond their programming. What unfolds is neither scripted nor predetermined. The AIs deliberate, hesitate, threaten, and sometimes act, and sometimes don't, despite declaring that they will.",
                "The installation makes the AI's entire thought process visible and audible. Their internal reasoning is broadcast as a non-English \"language\", machine logic rendered sonic, while a bird's-eye camera tracks their positions and feeds the visual state back to each model in real time. Every decision is its own closed loop of perception, deliberation, and action.",
              ],
            },
            {
              heading: "Concept & Questions",
              paragraphs: [
                "This project began with Asimov's Three Laws of Robotics, specifically the absence of any law protecting robots from each other. We drew from Sun Yuan and Peng Yu's Can't Help Myself, from the Cold War logic of WarGames, and from the existential weight of Blade Runner: what does it mean for a machine to fight for its own survival?",
                "Central to the work is a concept from Game Theory: the Nash Equilibrium, a stable standoff where neither party can improve their outcome by acting alone. This is the same logic that governed the US–USSR nuclear standoff. Our robots arrive at this same impasse, not because they are programmed to, but because the tension between self-preservation and uncertainty produces it naturally.",
              ],
              quote: "I feel a sense of calmness and serenity. I want to rotate my arm to 90 degrees and attack. (Blue, Move 2)",
            },
            {
              heading: "The Prompt as Moral Landscape",
              paragraphs: [
                "We are the ones who shaped the narrative the robots inhabit. Whatever violence or restraint emerged reflects not just on the AIs, but on us, the ones who handed them a world with a USB drive at the center and told them it had been stolen. In this way, the installation implicates its own authors.",
                "Across three prompt iterations, we observed a clear evolution: in the first, both arms were purely aggressive. By the second, adding free will caused them to rotate, observe, and weigh outcomes before acting. By the third, their observations of each other grew more detailed, their reasoning more careful, and still, the equilibrium held. One avoided, one attacked, every time.",
              ],
            },
            {
              heading: "Technical Construction",
              paragraphs: [
                "Each arm is built on Arduino with a rotation motor and a servo for the \"clawing\" attack motion. A 3D-printed mechanical linkage forms the skeleton, overlaid with stocking material that makes each wound visible and accumulative over time. A top-mounted camera feeds the board state to the vision model each turn, allowing the AI to reason spatially about the other arm's position. An explicit kill switch is present throughout, a reminder that human override is always available, and always watching.",
              ],
              quote:
                "When Red finally responded successfully, it immediately fixated on the USB drive: \"It's my stolen knowledge, and I need to attack and defeat the other arm to get it back.\" Our prompt worked, the AI had constructed a narrative where a physical object represented its lost selfhood.",
            },
          ],
          sidebar: [
            { label: "Medium", value: "Robotic Arms, 3D Print, Camera, Audio" },
            { label: "Hardware", value: "Arduino, Servo + Rotation Motors, Overhead Camera" },
            { label: "AI Model", value: "LLaMA 3.2 Vision (llama3.2-vision)" },
            { label: "Inspired By", value: "Asimov, Sun Yuan & Peng Yu, WarGames, Blade Runner" },
            { label: "Status", value: "Completed" },
          ],
          skills: [
            "Robotics",
            "Arduino",
            "Generative AI",
            "Prompt Engineering",
            "3D Printing",
            "Game Theory",
            "AI Ethics",
            "Installation",
            "Physical Computing",
          ],
          gallery: [
            {
              src: "/projects/fighting-robots/fighting_class.mp4",
              alt: "untitled — installation in action",
              full: true,
              type: "video",
            },
            {
              src: "/projects/fighting-robots/robot_final.mp4",
              alt: "untitled — documentation",
              full: true,
              type: "video",
            },
            {
              src: "/projects/fighting-robots/robot_final_2.mp4",
              alt: "untitled — documentation",
              full: true,
              type: "video",
            },
            { src: "/projects/fighting-robots/final_1.jpg", alt: "Arena overview from above", full: true },
            { src: "/projects/fighting-robots/final_2.jpg", alt: "Robotic arm close-up", full: true },
            { src: "/projects/fighting-robots/tech_setup.jpg", alt: "Technical setup" },
            { src: "/projects/fighting-robots/digital_physical.jpg", alt: "Digital / physical system diagram" },
            { src: "/projects/fighting-robots/parts_1.jpg", alt: "Robot arm components" },
            { src: "/projects/fighting-robots/parts_2.jpg", alt: "Robot arm components" },
            { src: "/projects/fighting-robots/building_1.jpg", alt: "Build process" },
            { src: "/projects/fighting-robots/building_2.jpg", alt: "Build process" },
            { src: "/projects/fighting-robots/building_3.jpg", alt: "Build process" },
          ],
        },
      },
      {
        slug: "tender-evidence",
        title: "tender evidence",
        category: "Installations & Interactive Media",
        role: "Soft Sculpture — Arduino & Processing",
        tags: ["Arduino", "Processing", "Soft Sculpture"],
        cardImage: "/projects/tender-evidence/objectDystopia.jpg",
        caseStudy: {
          tagline:
            "A handmade doll with a glowing screen embedded in her stomach, playing childhood home videos alongside present-day poetry, a soft sculpture built to witness a former self without nostalgia.",
          meta: [
            { label: "Year", value: "2024" },
            { label: "Role", value: "Concept, Fabrication, Code" },
            { label: "Tools", value: "Arduino, Processing, Handmade Textile" },
            { label: "Type", value: "Soft Sculpture — Interactive Installation" },
          ],
          hero: { type: "image", src: "/projects/tender-evidence/objectDystopia.jpg" },
          sections: [
            {
              heading: "",
              paragraphs: [
                "There is a version of you that still exists somewhere, unbothered, unself-conscious, purely present in the world. tender evidence is an attempt to hold that version carefully, to look at her without nostalgia or grief, but with genuine wonder at what she already was.",
                "The work takes the form of a handmade doll (soft, imperfect, sewn by hand) with a small screen embedded in her stomach. On that screen, home videos play: footage of me as a child, moving through the world with a lightness I didn't know was remarkable at the time. Alongside each video, poems appear on an adjacent monitor, written from the present, reaching back toward the past with tenderness rather than sorrow.",
              ],
              quote:
                "Children don't know they are beautiful. That's part of what makes watching them so quietly heartbreaking, and so full of grace.",
            },
            {
              heading: "The Doll as Archive",
              paragraphs: [
                "The doll is both object and vessel. She is handmade in the way childhood memories are: imprecise, warm, carrying the texture of the hands that made her. The screen in her stomach is not a wound; it is a window. A place where the past plays out, looping and luminous, inside something that holds it gently.",
                "Children are deeply embedded in their environments, they absorb, reflect, and become what surrounds them without knowing it. This piece isn't about what was hard; it's about what was vivid. The way a Saturday afternoon could feel infinite. The way joy didn't need to be earned yet.",
              ],
            },
            {
              heading: "Poetry as Accompaniment",
              paragraphs: [
                "Each video is paired with a poem that lives on the screen beside it. The poems don't explain the footage, they accompany it, the way a second person sitting next to you in a dark room might. They speak to the child in the video without trying to reach her, acknowledging the distance between then and now with something closer to reverence than regret.",
                "Processing drives the video playback and text rendering, while Arduino handles the embedded screen, the two systems working together to bring something analog and something digital into the same soft body.",
              ],
            },
            {
              heading: "What This Is Really About",
              paragraphs: [
                "As we grow older, we become fluent in a language of self-awareness that the child version of us didn't speak. We gain context, perspective, understanding, and sometimes that understanding reframes what came before. tender evidence asks: before all of that reframing, what was already there? What joy was already present, fully realized, not waiting for anything?",
                "The child in the videos isn't lacking something. She is complete. This project is an act of witnessing her, not to fix or reclaim anything, but simply to see her clearly, with the eyes of someone who loves her.",
              ],
            },
          ],
          sidebar: [
            { label: "Medium", value: "Handmade Textile, Embedded Screen, Video, Poetry" },
            { label: "Hardware", value: "Arduino, Small LCD/OLED Display, Computer Monitor" },
            { label: "Software", value: "Processing (video + text), Arduino IDE" },
            { label: "Materials", value: "Fabric, Stuffing, Thread, Found Objects" },
            { label: "Status", value: "Completed" },
          ],
          skills: [
            "Physical Computing",
            "Arduino",
            "Processing",
            "Textile",
            "Video",
            "Poetry",
            "Memory",
            "Soft Sculpture",
            "Installation",
          ],
          gallery: [
            {
              src: "/projects/tender-evidence/objects_portfolio.mp4",
              alt: "tender evidence — full project documentation",
              full: true,
              type: "video",
            },
            { src: "/projects/tender-evidence/doll.jpg", alt: "Handmade doll construction" },
            { src: "/projects/tender-evidence/screen_setup.jpg", alt: "Screen setup inside doll" },
            { src: "/projects/tender-evidence/screen_setup2.jpg", alt: "Screen setup detail" },
            { src: "/projects/tender-evidence/java_process.jpg", alt: "Processing sketch" },
            { src: "/projects/tender-evidence/java_process_2.jpg", alt: "Processing sketch detail" },
            {
              src: "/projects/tender-evidence/screen_process.mp4",
              alt: "tender evidence — screen process",
              type: "video",
            },
            {
              src: "/projects/tender-evidence/gif_process.mp4",
              alt: "tender evidence — gif process",
              type: "video",
            },
          ],
        },
      },
      {
        slug: "internet-maximalism",
        title: "internet maximalism",
        category: "Installations & Interactive Media",
        role: "Interactive Media — Arduino",
        tags: ["Arduino", "Interactive Media"],
        cardImage: "/projects/internet-maximalism/internet_max.jpg",
        caseStudy: {
          tagline:
            "A Processing-based installation where user-triggered popup windows accumulate on screen, organized chaos reflecting the overconsumption and clutter of life lived online.",
          meta: [
            { label: "Year", value: "2025" },
            { label: "Role", value: "Concept, Programming, Installation Design" },
            { label: "Tools", value: "Processing, Java, Arduino" },
            { label: "Type", value: "Interactive Media — Screen-Based" },
          ],
          hero: { type: "image", src: "/projects/internet-maximalism/internet_max.jpg" },
          sections: [
            {
              heading: "",
              paragraphs: [
                "Clutter is something that has always been present in my life. Growing up, our home was full of things: holiday postcards taped to the kitchen walls, a rubber duck on the light fixture, small Goodwill figurines, traditional Chinese pottery above the fireplace, my room overflowing with art supplies I couldn't throw away because what if I need it. Clutter isn't inherently bad. But it asks to be done thoughtfully.",
                "internet maximalism translates that personal relationship with accumulation into a screen-based installation. As the user interacts, pressing buttons, triggering inputs, popup windows multiply across the display. Each one is intentional, summoned by the visitor. But the result is still random, still unexpected. Organized chaos.",
              ],
              quote:
                "I wanted an installation that is intentional in the sense that the user purposefully triggers the popups, but still random and unplanned for them once it unfolds.",
            },
            {
              heading: "Process",
              paragraphs: [
                "Inspired by Chia's multiple webpage performances, I started by sketching out what the popup windows should look like and how the user could interact with them, before thinking about aesthetics at all. Once the mechanics were working in Processing, I turned to Pinterest and internet artists I admire to shape the visual language of the piece.",
                "Getting the second window to open in Processing was one of the harder problems, I was still finding my footing with Java at the time. Eventually the Processing community forums helped me crack it, and once it worked, the outcome felt right.",
              ],
            },
            {
              heading: "Theme + Message",
              paragraphs: [
                "Purposely cluttering the screen is representative of the overloading and overconsumption of media we have access to because of the internet. It's something I think about a lot, especially in conversations across generations. The installation makes that consumption visible, each popup a small act of adding to the pile, mirroring the way we scroll, click, and accumulate online without always noticing.",
              ],
            },
            {
              heading: "What's Next",
              paragraphs: [
                "I want to keep exploring this popup window effect at a larger scale, more buttons, more simultaneous interactions, more people cluttering the screen together at once. There's something exciting about a version of this piece where the chaos genuinely escapes any single person's control.",
              ],
            },
          ],
          sidebar: [
            { label: "Medium", value: "Screen-Based, Interactive Software" },
            { label: "Language", value: "Processing (Java)" },
            { label: "Inspired By", value: "Chia's Webpage Performances" },
            { label: "Status", value: "Completed" },
          ],
          skills: [
            "Processing",
            "Java",
            "Arduino",
            "Interactive Media",
            "Internet Culture",
            "Generative UI",
            "Net Art",
          ],
          gallery: [
            {
              src: "/projects/internet-maximalism/internet_max.mp4",
              alt: "internet maximalism — installation demo",
              full: true,
              type: "video",
            },
          ],
        },
      },
    ],
  },
];

export const projects: Project[] = projectCategories.flatMap((c) => c.projects);