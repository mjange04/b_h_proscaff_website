import { Check } from "lucide-react"
import { Link, Navigate, useParams } from "react-router-dom"
import Seo from "../components/Seo"
import PageHeader from "../components/PageHeader"
import ServiceGlyph from "../components/ServiceGlyph"
import { Button, Container, TextLink } from "../components/ui"
import { RETIRED_SERVICE_SLUGS, SERVICE_ALIASES, getService, relatedServices, servicePath } from "../data/services"
import { SITE, breadcrumbNode, localBusinessNode, pageUrl, webPageNode, whatsappHref } from "../data/site"
import NotFoundPage from "./NotFoundPage"

export default function ServiceDetailPage() {
  const { slug } = useParams()
  if (slug && RETIRED_SERVICE_SLUGS.has(slug)) {
    return <Navigate to="/services" replace />
  }
  if (slug && SERVICE_ALIASES[slug]) {
    return <Navigate to={servicePath(SERVICE_ALIASES[slug])} replace />
  }
  const service = getService(slug)

  if (!service) return <NotFoundPage />

  const path = `/services/${service.slug}`
  const related = relatedServices(service.slug)
  const gallery = service.gallery ?? []

  return (
    <>
      <Seo
        title={service.seoTitle}
        description={service.description}
        path={path}
        image={service.image}
        jsonLd={[
          localBusinessNode(),
          webPageNode(service.seoTitle, service.description, path),
          breadcrumbNode([
            { name: "Home", path: "/" },
            { name: "Services", path: "/services" },
            { name: service.title, path },
          ]),
          {
            "@type": "Service",
            name: service.title,
            serviceType: service.title,
            description: service.description,
            url: pageUrl(path),
            image: `${SITE.url}${service.image}`,
            areaServed: { "@type": "City", name: "Dar es Salaam" },
            provider: { "@id": `${SITE.url}/#business` },
          },
        ]}
      />
      <PageHeader
        eyebrow="Service"
        title={service.title}
        lede={service.summary}
        crumbs={[
          { label: "Home", to: "/" },
          { label: "Services", to: "/services" },
          { label: service.title },
        ]}
      />

      <article className="py-12 sm:py-16">
        <Container className="grid gap-12 lg:grid-cols-12">
          <div className="order-1 lg:col-span-7">
            <img src={service.image} alt={service.imageAlt} className="aspect-[4/5] w-full object-cover sm:aspect-[4/3]" />
            {service.imageCredit ? (
              <p className="mt-2 text-xs text-ink/55">{service.imageCredit}</p>
            ) : null}
            <p className="mt-8 text-lg leading-relaxed text-ink/85">{service.intro}</p>
          </div>

          <aside className="order-2 lg:col-span-5">
            <div className="border border-line bg-white p-6 sm:p-8 lg:sticky lg:top-44">
              <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-ember">
                <ServiceGlyph name={service.icon} />
                On this job
              </p>
              <ul className="mt-5 space-y-3">
                {service.points.map((point) => (
                  <li key={point} className="flex gap-3 text-sm leading-relaxed text-ink/85">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-ember" aria-hidden="true" />
                    {point}
                  </li>
                ))}
              </ul>
              <h2 className="mt-8 font-serif text-2xl font-semibold text-navy">Tell us before we come</h2>
              <ul className="mt-4 space-y-2 text-sm leading-relaxed text-ink/80">
                {service.needs.map((need) => (
                  <li key={need} className="border-l-2 border-orange pl-3">
                    {need}
                  </li>
                ))}
              </ul>
              <Button to="/contact" className="mt-8 w-full">
                Request this work
              </Button>
              <a
                href={whatsappHref(`Hello B&H Proscaff. I need ${service.title.toLowerCase()}.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 block text-center text-sm font-bold text-navy underline decoration-orange decoration-2 underline-offset-4"
              >
                WhatsApp {SITE.phones[0].display}
              </a>
            </div>
          </aside>

          <div className="order-3 lg:col-span-7">
            {service.sections.map((section) => (
              <section key={section.heading} className="mt-10 first:mt-0">
                <h2 className="h-display text-3xl">{section.heading}</h2>
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph} className="mt-4 leading-relaxed text-ink/80">
                    {paragraph}
                  </p>
                ))}
              </section>
            ))}
          </div>

          {gallery.length > 0 ? (
            <section className="order-4 lg:col-span-12">
              <h2 className="h-display text-3xl">From our sites</h2>
              <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {gallery.map((photo, index) => {
                  const spanLast = index === gallery.length - 1 && gallery.length % 2 === 1
                  return (
                    <img
                      key={photo.src}
                      src={photo.src}
                      alt={photo.alt}
                      className={`w-full object-cover ${spanLast ? "aspect-[16/9] sm:col-span-2" : "aspect-[4/3]"}`}
                      loading="lazy"
                    />
                  )
                })}
              </div>
            </section>
          ) : null}
        </Container>
      </article>

      <section className="border-t border-line bg-paper-deep py-14">
        <Container>
          <h2 className="h-display text-3xl">Other arrangements</h2>
          <ul className="mt-6 grid gap-4 sm:grid-cols-2">
            {related.map((item) => (
              <li key={item.slug}>
                <Link to={`/services/${item.slug}`} className="block border border-line bg-paper p-5 hover:border-navy">
                  <span className="flex items-center gap-2 font-serif text-2xl font-semibold text-navy">
                    <ServiceGlyph name={item.icon} />
                    {item.title}
                  </span>
                  <span className="mt-2 block text-sm text-ink/70">{item.summary}</span>
                </Link>
              </li>
            ))}
          </ul>
          <TextLink to="/services" className="mt-8">
            Back to all services
          </TextLink>
        </Container>
      </section>
    </>
  )
}
