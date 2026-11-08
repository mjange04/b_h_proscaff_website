import Seo from "../components/Seo"
import PageHeader from "../components/PageHeader"
import { Container, EnquiryBand } from "../components/ui"
import { breadcrumbNode, fullAddress, localBusinessNode, webPageNode } from "../data/site"

const TITLE = "About B&H Proscaff Engineering Limited | Salasala"
const DESCRIPTION =
  "B&H Proscaff Engineering Limited is based in Salasala, Dar es Salaam. Scaffolding hire and sales, scaffold event stages, cradles, scissor platforms, sandblasting and coatings, and formwork hire and sales."

const EXPECTATIONS = [
  {
    title: "A straight recommendation",
    body: "Scaffold, formwork, a cradle, or a scissor platform. We name one, and we say why the others are the wrong hire.",
  },
  {
    title: "Steel matched to the elevation",
    body: "The delivery is for the layout we agreed. It is not a surplus of fittings for the site to invent with after we leave.",
  },
  {
    title: "The same crew for alterations",
    body: "When the frame rises or a bay has to open, you call us. The people who stood the scaffold are the people who change it.",
  },
  {
    title: "Lines that are also WhatsApp",
    body: "Both Dar es Salaam numbers take a call and a message. Send a photo of the face or the ground with the address.",
  },
]

export default function AboutPage() {
  return (
    <>
      <Seo
        title={TITLE}
        description={DESCRIPTION}
        path="/about"
        image="/images/mobile-tower.jpg"
        jsonLd={[
          localBusinessNode(),
          webPageNode(TITLE, DESCRIPTION, "/about"),
          breadcrumbNode([
            { name: "Home", path: "/" },
            { name: "About", path: "/about" },
          ]),
        ]}
      />
      <PageHeader
        eyebrow="About"
        title="Scaffold engineering, based in Salasala."
        lede="We put up the temporary structure other trades stand on. The office is in Salasala, Dar es Salaam. The scaffold is wherever the call takes the truck."
        crumbs={[
          { label: "Home", to: "/" },
          { label: "About" },
        ]}
      />

      <section className="py-16 sm:py-20">
        <Container className="grid items-start gap-12 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <h2 className="h-display text-3xl sm:text-4xl">The company is the work.</h2>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-ink/80">
              <p>
                B&H Proscaff Engineering Limited stands scaffolds, and the work that sits beside them: scaffold event stages, cradles, sandblasting and coatings, and formwork hire. A house being finished, a block still in frame, a hall under a roof, a yard that needs a deck: those are still the jobs. The rest of the list is what those jobs usually pull in next.
              </p>
              <p>
                We do not leave a bundle of tubes and hope the site sorts the ties. The layout is agreed, a crew erects it, and the same crew dismantles it. If the programme is in Dar es Salaam, Salasala is a short run for the truck. If the site is further out in Tanzania, say so when you call and we will tell you whether we can man it properly.
              </p>
              <p>
                The address is {fullAddress()}. There is no need to invent a longer story than that. The photographs are the record of the steel.
              </p>
            </div>
          </div>
          <figure className="lg:col-span-6">
            <img
              src="/images/mobile-tower.jpg"
              alt="B&H Proscaff crew in hard hats working from a mobile scaffold tower beside column formwork"
              className="aspect-[3/4] w-full object-cover"
              width={1400}
              height={1867}
            />
            <figcaption className="mt-3 text-sm text-ink/65">
              Mobile tower beside column formwork. Helmets on, platform boarded, castors on the slab.
            </figcaption>
          </figure>
        </Container>
      </section>

      <section className="border-y border-line bg-paper-deep py-16 sm:py-20">
        <Container className="grid gap-10 lg:grid-cols-12">
          <blockquote className="border-l-4 border-orange pl-6 lg:col-span-5">
            <p className="font-serif text-3xl font-semibold leading-snug text-navy sm:text-4xl">
              The scaffold is there for someone else’s trade. It has to be ready before they climb, and dismantled when they finish.
            </p>
          </blockquote>
          <dl className="grid gap-8 sm:grid-cols-2 lg:col-span-7">
            {EXPECTATIONS.map((item) => (
              <div key={item.title}>
                <dt className="font-serif text-2xl font-semibold text-navy">{item.title}</dt>
                <dd className="mt-2 text-sm leading-relaxed text-ink/75">{item.body}</dd>
              </div>
            ))}
          </dl>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container className="grid items-center gap-10 lg:grid-cols-2">
          <img
            src="/images/block-run.jpg"
            alt="Tied scaffold along a block wall with a boarded working lift and a steel beam in the run"
            className="aspect-[3/4] w-full object-cover"
            loading="lazy"
          />
          <div>
            <p className="eyebrow">Who calls</p>
            <h2 className="h-display mt-4 text-4xl">Main contractors, owners, and the trade that needs the height.</h2>
            <p className="mt-5 leading-relaxed text-ink/80">
              We work with people who would rather have the access arranged than improvised on the morning the plaster starts. If you are the site agent, send the elevation. If you are the owner of a house, send the front of the building. Either way the first answer is which arrangement belongs there.
            </p>
            <p className="mt-4 leading-relaxed text-ink/80">
              Read the sequence we actually follow, from the walk-round to the lorry leaving with the steel, on the method page.
            </p>
          </div>
        </Container>
      </section>

      <EnquiryBand />
    </>
  )
}
