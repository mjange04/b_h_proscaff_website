import { Mail, MapPin, Phone, Share2 } from "lucide-react"
import { useState, type FormEvent, type ReactNode } from "react"
import Seo from "../components/Seo"
import PageHeader from "../components/PageHeader"
import SocialLinks from "../components/SocialLinks"
import WhatsAppIcon from "../components/WhatsAppIcon"
import { Button, Container } from "../components/ui"
import { SERVICES } from "../data/services"
import { SITE, breadcrumbNode, fullAddress, localBusinessNode, webPageNode, whatsappHref } from "../data/site"

const TITLE = "Call or WhatsApp Salasala | B&H Proscaff Contact"
const DESCRIPTION =
  "Two Dar es Salaam lines on WhatsApp — +255 798 472 769 and +255 798 486 837 — plus info@bhproscaffeng.com. Send a photograph of the elevation or the ground."

type Fields = {
  name: string
  phone: string
  email: string
  site: string
  need: string
  details: string
}

const EMPTY: Fields = {
  name: "",
  phone: "",
  email: "",
  site: "",
  need: "Not sure — advise me",
  details: "",
}

function digits(value: string) {
  return value.replace(/\D/g, "")
}

function buildMessage(fields: Fields) {
  return [
    "B&H Proscaff enquiry",
    `Name: ${fields.name}`,
    `Phone: ${fields.phone}`,
    `Email: ${fields.email || "—"}`,
    `Site: ${fields.site || "—"}`,
    `Need: ${fields.need}`,
    "",
    fields.details,
  ].join("\n")
}

export default function ContactPage() {
  const [fields, setFields] = useState<Fields>(EMPTY)
  const [errors, setErrors] = useState<Partial<Record<keyof Fields, string>>>({})
  const [notice, setNotice] = useState("")

  function update<K extends keyof Fields>(key: K, value: Fields[K]) {
    setFields((current) => ({ ...current, [key]: value }))
    setErrors((current) => ({ ...current, [key]: undefined }))
  }

  function validate() {
    const next: Partial<Record<keyof Fields, string>> = {}
    if (fields.name.trim().length < 2) next.name = "Tell us who to ask for."
    if (digits(fields.phone).length < 9) next.phone = "Enter a phone number we can reply to."
    if (fields.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email)) {
      next.email = "That email does not look complete."
    }
    if (fields.details.trim().length < 12) {
      next.details = "A sentence on the building, the height, or the ground is enough."
    }
    return next
  }

  function submitWhatsApp(event: FormEvent) {
    event.preventDefault()
    const next = validate()
    setErrors(next)
    if (Object.keys(next).length > 0) {
      setNotice("")
      return
    }
    const href = whatsappHref(buildMessage(fields))
    window.open(href, "_blank", "noopener,noreferrer")
    setNotice(`WhatsApp should open a chat with ${SITE.phones[0].display}. Press send there to reach the crew.`)
  }

  function submitEmail() {
    const next = validate()
    setErrors(next)
    if (Object.keys(next).length > 0) {
      setNotice("")
      return
    }
    const subject = encodeURIComponent("Scaffold enquiry")
    const body = encodeURIComponent(buildMessage(fields))
    window.location.href = `mailto:${SITE.email}?subject=${subject}&body=${body}`
    setNotice("Your email app should open with the enquiry ready to send.")
  }

  const mapSrc = SITE.map.embed

  return (
    <>
      <Seo
        title={TITLE}
        description={DESCRIPTION}
        path="/contact"
        image="/images/deck-day.jpg"
        jsonLd={[
          localBusinessNode(),
          webPageNode(TITLE, DESCRIPTION, "/contact"),
          breadcrumbNode([
            { name: "Home", path: "/" },
            { name: "Contact", path: "/contact" },
          ]),
          {
            "@type": "ContactPage",
            name: TITLE,
            url: `${SITE.url}/contact`,
            mainEntity: { "@id": `${SITE.url}/#business` },
          },
        ]}
      />
      <PageHeader
        eyebrow="Contact"
        title="Call Salasala, or send the site."
        lede="Both numbers are telephone and WhatsApp. A photograph of the elevation or the ground saves a round of questions."
        crumbs={[
          { label: "Home", to: "/" },
          { label: "Contact" },
        ]}
      />

      <section className="py-14 sm:py-16">
        <Container className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <h2 className="h-display text-3xl">B&H Proscaff Engineering Limited</h2>
            <ul className="mt-6 space-y-5">
              <li className="flex gap-3">
                <MapPin className="mt-1 h-5 w-5 shrink-0 text-ember" aria-hidden="true" />
                <div>
                  <p className="text-sm font-bold text-navy">Base</p>
                  <p className="text-ink/80">{fullAddress()}</p>
                </div>
              </li>
              {SITE.phones.map((phone) => (
                <li key={phone.tel} className="flex gap-3">
                  <Phone className="mt-1 h-5 w-5 shrink-0 text-ember" aria-hidden="true" />
                  <div>
                    <a href={`tel:${phone.tel}`} className="font-serif text-2xl font-semibold text-navy hover:text-ember">
                      {phone.display}
                    </a>
                    <a
                      href={whatsappHref(undefined, SITE.phones.indexOf(phone))}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-1 flex items-center gap-2 text-sm font-bold text-navy"
                    >
                      <WhatsAppIcon className="h-4 w-4" />
                      WhatsApp this number
                    </a>
                  </div>
                </li>
              ))}
              <li className="flex gap-3">
                <Mail className="mt-1 h-5 w-5 shrink-0 text-ember" aria-hidden="true" />
                <div>
                  <a href={`mailto:${SITE.email}`} className="font-semibold text-navy hover:text-ember">
                    {SITE.email}
                  </a>
                  <p className="text-sm text-ink/70">www.bhproscaffeng.com</p>
                </div>
              </li>
              <li className="flex gap-3">
                <Share2 className="mt-1 h-5 w-5 shrink-0 text-ember" aria-hidden="true" />
                <div>
                  <p className="text-sm font-bold text-navy">@{SITE.socialHandle}</p>
                  <SocialLinks className="mt-2" />
                </div>
              </li>
            </ul>
            <p className="mt-8 text-sm leading-relaxed text-ink/70">
              The map is our Google listing: B&H Proscaff Engineering LTD in Salasala. Call either number if you need a landmark on the way in, or we will come to the site.
            </p>
          </div>

          <form className="border border-line bg-white p-6 sm:p-8 lg:col-span-7" onSubmit={submitWhatsApp} noValidate>
            <h2 className="font-serif text-3xl font-semibold text-navy">Write it once.</h2>
            <p className="mt-2 text-sm leading-relaxed text-ink/70">
              Nothing is stored on this website. The message opens in WhatsApp or in your email app, and you send it yourself.
            </p>

            <div className="mt-6 grid gap-5 sm:grid-cols-2">
              <Field label="Your name" error={errors.name} required>
                <input
                  value={fields.name}
                  onChange={(event) => update("name", event.target.value)}
                  autoComplete="name"
                  className={inputClass}
                />
              </Field>
              <Field label="Phone" error={errors.phone} required>
                <input
                  value={fields.phone}
                  onChange={(event) => update("phone", event.target.value)}
                  autoComplete="tel"
                  inputMode="tel"
                  className={inputClass}
                />
              </Field>
              <Field label="Email" error={errors.email} hint="Optional">
                <input
                  value={fields.email}
                  onChange={(event) => update("email", event.target.value)}
                  autoComplete="email"
                  inputMode="email"
                  className={inputClass}
                />
              </Field>
              <Field label="Site area or address" hint="Optional">
                <input
                  value={fields.site}
                  onChange={(event) => update("site", event.target.value)}
                  autoComplete="street-address"
                  className={inputClass}
                />
              </Field>
              <Field label="What you need" className="sm:col-span-2">
                <select
                  value={fields.need}
                  onChange={(event) => update("need", event.target.value)}
                  className={inputClass}
                >
                  <option>Not sure — advise me</option>
                  {SERVICES.map((service) => (
                    <option key={service.slug}>{service.title}</option>
                  ))}
                </select>
              </Field>
              <Field
                label="What is happening on site"
                error={errors.details}
                className="sm:col-span-2"
                required
              >
                <textarea
                  value={fields.details}
                  onChange={(event) => update("details", event.target.value)}
                  rows={5}
                  className={inputClass}
                  placeholder="Height, building type, and whether people are still using the ground floor."
                />
              </Field>
            </div>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Button type="submit" variant="orange">
                <WhatsAppIcon className="h-5 w-5" />
                Continue on WhatsApp
              </Button>
              <Button type="button" variant="ghost" onClick={submitEmail}>
                Open an email instead
              </Button>
            </div>
            <p className="mt-3 text-xs leading-relaxed text-ink/60">
              WhatsApp opens a chat with {SITE.phones[0].display}. Email opens a message to {SITE.email}.
            </p>
            {notice ? (
              <p role="status" className="mt-4 border-l-2 border-orange bg-paper px-3 py-3 text-sm font-semibold text-navy">
                {notice}
              </p>
            ) : null}
          </form>
        </Container>
      </section>

      <section className="border-t border-line" aria-label="Map of B&H Proscaff Engineering LTD, Salasala">
        <iframe
          title="B&H Proscaff Engineering LTD on Google Maps"
          src={mapSrc}
          className="h-[420px] w-full border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
      </section>
    </>
  )
}

const inputClass =
  "w-full border border-line bg-paper px-3 py-3 text-base text-ink outline-none focus-visible:border-navy"

function Field({
  label,
  hint,
  error,
  required,
  className = "",
  children,
}: {
  label: string
  hint?: string
  error?: string
  required?: boolean
  className?: string
  children: ReactNode
}) {
  return (
    <label className={`block ${className}`}>
      <span className="mb-2 flex items-baseline justify-between gap-3 text-sm font-bold text-navy">
        {label}
        {required ? <span className="text-xs font-semibold uppercase tracking-wider text-ember">Required</span> : null}
        {hint ? <span className="text-xs font-semibold text-ink/50">{hint}</span> : null}
      </span>
      {children}
      {error ? <span className="mt-2 block text-sm font-semibold text-[#9F1239]">{error}</span> : null}
    </label>
  )
}
