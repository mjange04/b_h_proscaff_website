import { ChevronLeft, ChevronRight, X } from "lucide-react"
import { useEffect, useId, useState } from "react"
import { Link } from "react-router-dom"
import Seo from "../components/Seo"
import PageHeader from "../components/PageHeader"
import { Container, EnquiryBand } from "../components/ui"
import { PROJECTS, type Project } from "../data/projects"
import { servicePath } from "../data/services"
import { breadcrumbNode, localBusinessNode, webPageNode } from "../data/site"

const TITLE = "Photographs from B&H Proscaff Sites | Dar es Salaam"
const DESCRIPTION =
  "Tied elevations, event stages, cradles, sandblasting, formwork, and a scissor platform — captions of the work, not invented project names."

export default function ProjectsPage() {
  const [active, setActive] = useState<number | null>(null)

  return (
    <>
      <Seo
        title={TITLE}
        description={DESCRIPTION}
        path="/projects"
        image="/images/frame-front.jpg"
        jsonLd={[
          localBusinessNode(),
          webPageNode(TITLE, DESCRIPTION, "/projects"),
          breadcrumbNode([
            { name: "Home", path: "/" },
            { name: "Projects", path: "/projects" },
          ]),
        ]}
      />
      <PageHeader
        eyebrow="Projects"
        title="Photographs from the scaffold."
        lede="A record of the arrangements we stand: tied elevations, formwork and falsework, scaffold event stages, sandblasting and coatings, cradles, mobile towers, and a scissor platform. No invented project names — the caption describes the work."
        crumbs={[
          { label: "Home", to: "/" },
          { label: "Projects" },
        ]}
      />

      <section className="py-12 sm:py-16">
        <Container>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-12">
            {PROJECTS.map((project, index) => (
              <figure key={project.id} className={project.span}>
                <button
                  type="button"
                  className="block w-full text-left"
                  aria-label={`Open photograph: ${project.title}`}
                  onClick={() => setActive(index)}
                >
                  <img
                    src={project.image}
                    alt={project.alt}
                    className={`w-full object-cover ${project.aspect === "portrait" ? "aspect-[3/4]" : "aspect-[4/3]"}`}
                    loading="lazy"
                  />
                </button>
                <figcaption className="pt-4">
                  <h2 className="font-serif text-2xl font-semibold text-navy">{project.title}</h2>
                  <p className="mt-2 text-sm leading-relaxed text-ink/75">{project.caption}</p>
                  <Link
                    to={servicePath(project.serviceSlug)}
                    className="mt-3 inline-block text-sm font-bold text-navy underline decoration-orange decoration-2 underline-offset-4 hover:text-ember"
                  >
                    The service this belongs to
                  </Link>
                </figcaption>
              </figure>
            ))}
          </div>
        </Container>
      </section>

      {active !== null ? (
        <Lightbox
          project={PROJECTS[active]}
          onClose={() => setActive(null)}
          onPrev={() => setActive((active - 1 + PROJECTS.length) % PROJECTS.length)}
          onNext={() => setActive((active + 1) % PROJECTS.length)}
        />
      ) : null}

      <EnquiryBand />
    </>
  )
}

function Lightbox({
  project,
  onClose,
  onPrev,
  onNext,
}: {
  project: Project
  onClose: () => void
  onPrev: () => void
  onNext: () => void
}) {
  const titleId = useId()

  useEffect(() => {
    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") onClose()
      if (event.key === "ArrowRight") onNext()
      if (event.key === "ArrowLeft") onPrev()
    }
    const previous = document.body.style.overflow
    document.body.style.overflow = "hidden"
    window.addEventListener("keydown", onKey)
    return () => {
      document.body.style.overflow = previous
      window.removeEventListener("keydown", onKey)
    }
  }, [onClose, onNext, onPrev])

  return (
    <div
      className="fixed inset-0 z-[60] flex flex-col bg-navy-deep p-4 sm:p-8"
      role="dialog"
      aria-modal="true"
      aria-labelledby={titleId}
    >
      <div className="flex items-center justify-between text-paper">
        <p id={titleId} className="font-serif text-xl font-semibold sm:text-2xl">
          {project.title}
        </p>
        <button
          type="button"
          onClick={onClose}
          className="inline-flex h-11 w-11 items-center justify-center border border-white/20"
        >
          <span className="sr-only">Close photograph</span>
          <X className="h-5 w-5" />
        </button>
      </div>
      <div className="relative flex min-h-0 flex-1 items-center justify-center py-4">
        <button
          type="button"
          onClick={onPrev}
          className="absolute left-0 z-10 inline-flex h-11 w-11 items-center justify-center bg-paper text-navy sm:left-2"
          aria-label="Previous photograph"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <img
          src={project.image}
          alt={project.alt}
          className="max-h-full max-w-[calc(100%-5.5rem)] object-contain"
        />
        <button
          type="button"
          onClick={onNext}
          className="absolute right-0 z-10 inline-flex h-11 w-11 items-center justify-center bg-paper text-navy sm:right-2"
          aria-label="Next photograph"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>
      <p className="mx-auto max-w-2xl text-center text-sm leading-relaxed text-paper/80">{project.caption}</p>
    </div>
  )
}
