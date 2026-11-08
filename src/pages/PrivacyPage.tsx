import { Link } from "react-router-dom"
import Seo from "../components/Seo"
import PageHeader from "../components/PageHeader"
import { Container } from "../components/ui"
import { SITE, breadcrumbNode, webPageNode } from "../data/site"

const TITLE = "Privacy of Enquiries | B&H Proscaff Engineering"
const DESCRIPTION =
  "bhproscaffeng.com does not store your message. If you send an enquiry, it leaves by WhatsApp or email and we use it to answer you."

export default function PrivacyPage() {
  return (
    <>
      <Seo
        title={TITLE}
        description={DESCRIPTION}
        path="/privacy"
        jsonLd={[
          webPageNode(TITLE, DESCRIPTION, "/privacy"),
          breadcrumbNode([
            { name: "Home", path: "/" },
            { name: "Privacy", path: "/privacy" },
          ]),
        ]}
      />
      <PageHeader
        eyebrow="Privacy"
        title="What this website keeps."
        lede="Short version: the site itself does not store your enquiry. If you choose to send it, it goes by WhatsApp or email, and we use it to answer you."
        crumbs={[
          { label: "Home", to: "/" },
          { label: "Privacy" },
        ]}
      />
      <section className="py-14">
        <Container className="max-w-3xl space-y-8 text-base leading-relaxed text-ink/80">
          <div>
            <h2 className="h-display text-3xl">Who we are</h2>
            <p className="mt-3">
              This website is operated by {SITE.name}, based in Salasala, Dar es Salaam, Tanzania. Questions about a message you sent us go to{" "}
              <a href={`mailto:${SITE.email}`} className="font-semibold text-navy underline decoration-orange decoration-2 underline-offset-4">
                {SITE.email}
              </a>{" "}
              or either telephone number on the <Link to="/contact" className="font-semibold text-navy underline decoration-orange decoration-2 underline-offset-4">contact page</Link>.
            </p>
          </div>
          <div>
            <h2 className="h-display text-3xl">Enquiries</h2>
            <p className="mt-3">
              The enquiry form does not post your details to a database on this website. “Continue on WhatsApp” opens a chat in WhatsApp with the message you wrote. “Open an email instead” opens your email application, addressed to {SITE.email}. You send the message yourself. Until you do, we do not receive it.
            </p>
            <p className="mt-3">
              Once you send a message, we use your name, number, email, site location, and the description of the work to reply and to arrange a visit. We do not sell those details, and we do not use them for a mailing list.
            </p>
          </div>
          <div>
            <h2 className="h-display text-3xl">Calls and WhatsApp</h2>
            <p className="mt-3">
              Telephone and WhatsApp are services run by your network and by WhatsApp. Their own terms apply once you leave this site or open a chat. We keep the conversation long enough to price the job, do the work, and answer a question about it afterwards.
            </p>
          </div>
          <div>
            <h2 className="h-display text-3xl">The map</h2>
            <p className="mt-3">
              The contact page embeds a map from OpenStreetMap so you can see Salasala. Loading that map can send your IP address to OpenStreetMap’s servers. You can use the page without the map: the telephone numbers and email are written above it.
            </p>
          </div>
          <div>
            <h2 className="h-display text-3xl">Photographs</h2>
            <p className="mt-3">
              Site photographs published here are of our scaffolds and equipment. We remove location data from the image files before they are placed on the site.
            </p>
          </div>
          <div>
            <h2 className="h-display text-3xl">Changes</h2>
            <p className="mt-3">
              If this page changes, the new version replaces this one at the same address. The current text was published on 26 October 2026.
            </p>
          </div>
        </Container>
      </section>
    </>
  )
}
