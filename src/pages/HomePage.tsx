import { ArrowUpRight, Check } from "lucide-react"
import { Link } from "react-router-dom"
import GoogleReviews from "../components/GoogleReviews"
import Seo from "../components/Seo"
import ServiceGlyph from "../components/ServiceGlyph"
import { Button, Container, EnquiryBand, TextLink } from "../components/ui"
import { STEPS } from "../data/approach"
import { PROJECTS } from "../data/projects"
import { SERVICES, serviceNumber, servicePath } from "../data/services"
import { SITE, breadcrumbNode, localBusinessNode, webPageNode } from "../data/site"

const TITLE = "Scaffold Engineering from Salasala | B&H Proscaff Dar es Salaam"
const DESCRIPTION =
  "Scaffolding hire and sales in Dar es Salaam. B&H Proscaff Engineering Limited erects, alters, and dismantles tied access, internal grids, decks, and towers from Salasala."

const HOME_SERVICE_SLUGS = ["scaffolding", "cradle", "scissor-platforms"] as const

const FACTS = [
  { label: "Base", value: "Salasala, Dar es Salaam" },
  { label: "The cycle", value: "Erect, alter, and dismantle" },
  { label: "On the same call", value: "Hire or sales" },
]

const featured = ["block-run", "warehouse-tower", "block-end"].flatMap((id) => {
  const project = PROJECTS.find((item) => item.id === id)
  return project ? [project] : []
})

export default function HomePage() {
  return (
    <>
      <Seo
        title={TITLE}
        description={DESCRIPTION}
        path="/"
        image="/images/internal-grid.jpg"
        jsonLd={[
          localBusinessNode(),
          webPageNode(TITLE, DESCRIPTION, "/"),
          breadcrumbNode([{ name: "Home", path: "/" }]),
        ]}
      />

      <section className="pb-6 pt-12 sm:pt-16">
        <Container>
          <p className="eyebrow">Scaffold engineering · Dar es Salaam</p>
          <h1
            className="h-display mt-5 max-w-5xl text-[2.5rem] leading-[1.05] sm:text-6xl lg:text-7xl"
            aria-label="We stand the scaffold. Your trades do the work."
          >
            <span className="block">We stand the scaffold.</span>
            <span className="block">Your trades do the work.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink/80">
            B&H Proscaff Engineering Limited is the Salasala crew for{" "}
            <Link to="/about" className="font-semibold text-navy underline decoration-orange decoration-2 underline-offset-4 hover:text-ember">
              scaffolding hire in Dar es Salaam
            </Link>
            . We walk the site, erect the steel, alter it as the job moves, and dismantle it when that part of the work is finished.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button to="/contact">Request a crew</Button>
            <Button to="/projects" variant="ghost">
              View site photographs
            </Button>
          </div>
        </Container>
      </section>

      <section className="relative" aria-label="Internal scaffold photograph">
        <div className="relative bg-navy">
          <img
            src="/images/internal-grid.jpg"
            alt="Dense internal scaffold filling a hall, with working levels set high under the roof"
            className="aspect-[3/4] w-full object-cover object-[center_30%] sm:aspect-[16/9] sm:max-h-[680px]"
            width={1600}
            height={2134}
            fetchPriority="high"
          />
          <p className="bg-navy px-5 py-3 text-sm font-semibold text-paper sm:absolute sm:bottom-24 sm:left-8">
            Internal grid scaffold for overhead work
          </p>
        </div>
      </section>

      <section aria-label="Company facts" className="relative z-10 pb-4 sm:-mt-16">
        <Container>
          <dl className="grid border border-line bg-paper shadow-lift sm:grid-cols-3">
            {FACTS.map((fact) => (
              <div key={fact.label} className="border-b border-line px-5 py-5 last:border-b-0 sm:border-b-0 sm:border-r sm:last:border-r-0">
                <dt className="text-xs font-bold uppercase tracking-[0.16em] text-ember">{fact.label}</dt>
                <dd className="mt-2 font-serif text-2xl font-semibold text-navy">{fact.value}</dd>
              </div>
            ))}
          </dl>
        </Container>
      </section>

      <section className="py-16 sm:py-24" aria-labelledby="services-heading">
        <Container className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="eyebrow">Services</p>
            <h2 id="services-heading" className="h-display mt-4 text-4xl sm:text-5xl">
              The access we stand.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-ink/75">
              Tied elevations, internal grids, decks, and towers. Hire the steel for the job, or buy the stock.
            </p>
            <TextLink to="/services" className="mt-6">
              All services
            </TextLink>
          </div>
          <ol className="divide-y divide-line border-y border-line lg:col-span-8">
            {HOME_SERVICE_SLUGS.flatMap((slug) => {
              const service = SERVICES.find((item) => item.slug === slug)
              return service ? [service] : []
            }).map((service, index) => (
              <li key={service.slug}>
                <Link
                  to={servicePath(service.slug)}
                  className="group grid grid-cols-[auto_1fr] items-center gap-4 py-5 sm:grid-cols-[auto_1fr_7.5rem]"
                >
                  <span className="w-10 font-serif text-2xl text-ember">{serviceNumber(index)}</span>
                  <span>
                    <span className="flex items-center gap-2 font-serif text-2xl font-semibold text-navy">
                      <ServiceGlyph name={service.icon} className="hidden h-5 w-5 sm:block" />
                      {service.title}
                    </span>
                    <span className="mt-1 block text-sm leading-relaxed text-ink/70">{service.summary}</span>
                  </span>
                  <img
                    src={service.image}
                    alt=""
                    className="hidden h-16 w-full object-cover sm:block"
                    loading="lazy"
                  />
                </Link>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section className="bg-paper-deep py-16 sm:py-24" aria-labelledby="work-heading">
        <Container>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="eyebrow">Site record</p>
              <h2 id="work-heading" className="h-display mt-4 text-4xl sm:text-5xl">
                Photographs from the steel.
              </h2>
            </div>
            <TextLink to="/projects">All photographs</TextLink>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {featured.map((project) => (
              <figure key={project.id} className="bg-paper">
                <Link to="/projects" className="group block overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.alt}
                    className="aspect-[3/4] w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                    loading="lazy"
                  />
                </Link>
                <figcaption className="px-1 pt-4">
                  <h3 className="font-serif text-2xl font-semibold text-navy">{project.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink/75">{project.caption}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </Container>
      </section>

      <GoogleReviews />

      <section className="py-16 sm:py-24" aria-labelledby="method-heading">
        <Container>
          <p className="eyebrow">Method</p>
          <div className="mt-4 flex flex-wrap items-end justify-between gap-6">
            <h2 id="method-heading" className="h-display max-w-xl text-4xl sm:text-5xl">
              From the walk-round to dismantling.
            </h2>
            <TextLink to="/approach">How a job runs</TextLink>
          </div>
          <ol className="mt-12 grid gap-px bg-line sm:grid-cols-2 lg:grid-cols-5">
            {STEPS.map((step) => (
              <li key={step.number} className="bg-paper p-5">
                <span className="font-serif text-3xl text-ember">{step.number}</span>
                <h3 className="mt-4 font-serif text-2xl font-semibold text-navy">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/75">{step.short}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section className="bg-paper-deep" aria-labelledby="scissor-heading">
        <Container className="grid items-center gap-10 py-16 lg:grid-cols-2 lg:py-0">
          <img
            src="/images/scissor-lift.jpg"
            alt="Green scissor lift with a guarded platform, ready for hire on firm level ground"
            className="aspect-[4/5] w-full object-cover lg:aspect-auto lg:h-full lg:max-h-[640px]"
            loading="lazy"
            width={982}
            height={1280}
          />
          <div className="lg:py-20">
            <p className="eyebrow">Hire</p>
            <h2 id="scissor-heading" className="h-display mt-4 text-4xl sm:text-5xl">
              A scissor platform, when steel would be too slow.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-ink/80">
              For a firm, level surface and a task that fits the machine’s height, we hire the platform and brief the person who will use it. If the ground or the duration says scaffold, we will tell you that before the machine leaves Salasala.
            </p>
            <ul className="mt-6 space-y-3">
              {["Handover on travel, descent, and exclusion", "Not for soft ground or a slope", "Both phone lines are WhatsApp"].map((item) => (
                <li key={item} className="flex gap-3 text-sm font-semibold text-navy">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-ember" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
            <TextLink to="/services/scissor-platforms" className="mt-8">
              Scissor platform hire and sales
            </TextLink>
          </div>
        </Container>
      </section>

      <section className="border-t border-line py-14">
        <Container className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
          <p className="max-w-xl font-serif text-2xl font-semibold text-navy sm:text-3xl">
            {SITE.name}. Based in Salasala. Working where the site is.
          </p>
          <Link
            to="/about"
            className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.14em] text-navy"
          >
            Who stands the scaffold in Salasala
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </Container>
      </section>

      <EnquiryBand />
    </>
  )
}
