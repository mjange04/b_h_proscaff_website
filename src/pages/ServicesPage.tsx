import { Link } from "react-router-dom"
import Seo from "../components/Seo"
import PageHeader from "../components/PageHeader"
import ServiceGlyph from "../components/ServiceGlyph"
import { Container, EnquiryBand } from "../components/ui"
import { SERVICES, serviceNumber, servicePath } from "../data/services"
import { breadcrumbNode, localBusinessNode, webPageNode } from "../data/site"

const TITLE = "Scaffolding Services in Dar es Salaam | B&H Proscaff"
const DESCRIPTION =
  "Scaffolding hire and sales, formwork hire and sales, event stages, sandblasting and coatings, scissor platforms, and cradles from B&H Proscaff in Dar es Salaam."

export default function ServicesPage() {
  return (
    <>
      <Seo
        title={TITLE}
        description={DESCRIPTION}
        path="/services"
        image="/images/frame-side.jpg"
        jsonLd={[
          localBusinessNode(),
          webPageNode(TITLE, DESCRIPTION, "/services"),
          breadcrumbNode([
            { name: "Home", path: "/" },
            { name: "Services", path: "/services" },
          ]),
          {
            "@type": "ItemList",
            name: "Scaffolding hire and sales services",
            itemListElement: SERVICES.map((service, index) => ({
              "@type": "ListItem",
              position: index + 1,
              name: service.title,
              url: `https://www.bhproscaffeng.com${servicePath(service.slug)}`,
            })),
          },
        ]}
      />
      <PageHeader
        eyebrow="Services"
        title="The work we take on."
        lede="Six lines of site work. Pick the one that sounds like your job, or send a photograph and we will pick it with you."
        crumbs={[
          { label: "Home", to: "/" },
          { label: "Services" },
        ]}
      />

      <div className="divide-y divide-line">
        {SERVICES.map((service, index) => {
          const flipped = index % 2 === 1
          return (
            <section key={service.slug} className="py-14 sm:py-20" aria-labelledby={service.slug}>
              <Container className="grid items-center gap-10 lg:grid-cols-2">
                <img
                  src={service.image}
                  alt={service.imageAlt}
                  className={`aspect-[4/5] w-full object-cover ${flipped ? "lg:order-2" : ""}`}
                  loading={index === 0 ? "eager" : "lazy"}
                />
                <div>
                  <p className="font-serif text-3xl text-ember">{serviceNumber(index)}</p>
                  <h2 id={service.slug} className="h-display mt-2 flex items-center gap-3 text-4xl">
                    <ServiceGlyph name={service.icon} className="h-7 w-7" />
                    {service.title}
                  </h2>
                  <p className="mt-4 text-lg leading-relaxed text-ink/80">{service.summary}</p>
                  <ul className="mt-6 space-y-2 text-sm leading-relaxed text-ink/80">
                    {service.points.slice(0, 3).map((point) => (
                      <li key={point} className="border-l-2 border-orange pl-3">
                        {point}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to={servicePath(service.slug)}
                    className="mt-6 inline-flex font-bold text-navy underline decoration-orange decoration-2 underline-offset-[6px] hover:text-ember"
                  >
                    Read this service
                  </Link>
                </div>
              </Container>
            </section>
          )
        })}
      </div>

      <EnquiryBand />
    </>
  )
}
