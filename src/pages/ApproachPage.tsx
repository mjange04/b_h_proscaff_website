import { ClipboardCheck, HardHat, Ruler, Truck, Undo2, type LucideIcon } from "lucide-react"
import Seo from "../components/Seo"
import PageHeader from "../components/PageHeader"
import { Container, EnquiryBand } from "../components/ui"
import { CONDUCT, STEPS } from "../data/approach"
import { breadcrumbNode, localBusinessNode, webPageNode } from "../data/site"

const TITLE = "How We Erect and Dismantle Scaffold | B&H Proscaff"
const DESCRIPTION =
  "How B&H Proscaff plans a scaffold in Dar es Salaam: site walk, agreed layout, erection, handover, alteration, and dismantling. One crew from start to finish."

const ICONS: LucideIcon[] = [Ruler, ClipboardCheck, Truck, HardHat, Undo2]

export default function ApproachPage() {
  return (
    <>
      <Seo
        title={TITLE}
        description={DESCRIPTION}
        path="/approach"
        image="/images/house-finish.jpg"
        jsonLd={[
          localBusinessNode(),
          webPageNode(TITLE, DESCRIPTION, "/approach"),
          breadcrumbNode([
            { name: "Home", path: "/" },
            { name: "How we work", path: "/approach" },
          ]),
        ]}
      />
      <PageHeader
        eyebrow="How we work"
        title="From the walk-round to dismantling."
        lede="A scaffold is a sequence, not a pile of steel. This is the order we follow on a Dar es Salaam site, whether the job is a house front or a hall full of grid."
        crumbs={[
          { label: "Home", to: "/" },
          { label: "How we work" },
        ]}
      />

      <section className="py-14 sm:py-20">
        <Container className="space-y-12">
          {STEPS.map((step, index) => {
            const Icon = ICONS[index]
            return (
              <article key={step.number} className="grid gap-6 border-t border-line pt-10 lg:grid-cols-12">
                <div className="flex items-start gap-4 lg:col-span-4">
                  <span className="font-serif text-5xl leading-none text-ember">{step.number}</span>
                  <Icon className="mt-2 h-6 w-6 text-navy" aria-hidden="true" strokeWidth={1.75} />
                </div>
                <div className="lg:col-span-8">
                  <h2 className="h-display text-3xl sm:text-4xl">{step.title}</h2>
                  <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink/80">{step.body}</p>
                </div>
              </article>
            )
          })}
        </Container>
      </section>

      <section className="bg-navy py-16 text-paper sm:py-20">
        <Container className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#FFD7AE]">On site</p>
            <h2 className="mt-4 font-serif text-4xl font-semibold leading-tight">Rules we actually keep.</h2>
          </div>
          <ul className="space-y-5 lg:col-span-8">
            {CONDUCT.map((rule, index) => (
              <li key={rule} className="grid grid-cols-[auto_1fr] gap-4 border-t border-white/15 pt-5">
                <span className="font-serif text-2xl text-[#FFD7AE]">{String(index + 1).padStart(2, "0")}</span>
                <p className="text-lg leading-relaxed text-paper/90">{rule}</p>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="py-16">
        <Container className="grid items-center gap-10 lg:grid-cols-2">
          <img
            src="/images/house-finish.jpg"
            alt="Finishing scaffold on a two-storey house, with a worker standing on the balcony lift"
            className="aspect-[3/4] w-full object-cover"
            loading="lazy"
          />
          <div>
            <h2 className="h-display text-4xl">If the next lift is wrong, we stop.</h2>
            <p className="mt-5 leading-relaxed text-ink/80">
              Weather, a base that has washed out, or a tie into something that will not hold: those are reasons to pause, not to “finish today anyway”. The person who called us would rather hear that in the afternoon than hear it from someone else later.
            </p>
            <p className="mt-4 leading-relaxed text-ink/80">
              Send the address when you are ready. The walk-round is the first thing we do, not a formality after the steel is already on the ground.
            </p>
          </div>
        </Container>
      </section>

      <EnquiryBand />
    </>
  )
}
