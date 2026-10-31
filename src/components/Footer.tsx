import { Link } from "react-router-dom"
import { SERVICES, servicePath } from "../data/services"
import { NAV, SITE, fullAddress, whatsappHref } from "../data/site"
import WhatsAppIcon from "./WhatsAppIcon"
import { Container } from "./ui"

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-line bg-paper">
      <Container className="grid gap-12 py-14 sm:grid-cols-2 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <Link to="/">
            <img src="/logo.png" alt="" className="h-16 w-auto" width={313} height={246} />
          </Link>
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-ink/75">
            Scaffold engineering from Salasala. We erect the access, alter it as the job moves, and strike it when that part of the work is finished.
          </p>
        </div>

        <div className="lg:col-span-2">
          <h2 className="text-xs font-bold uppercase tracking-[0.16em] text-ember">Pages</h2>
          <ul className="mt-4 space-y-2 text-sm font-semibold">
            {NAV.map((item) => (
              <li key={item.to}>
                <Link to={item.to} className="text-navy hover:text-ember">
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link to="/privacy" className="text-navy hover:text-ember">
                Privacy
              </Link>
            </li>
          </ul>
        </div>

        <div className="lg:col-span-3">
          <h2 className="text-xs font-bold uppercase tracking-[0.16em] text-ember">Services</h2>
          <ul className="mt-4 space-y-2 text-sm font-semibold">
            {SERVICES.map((service) => (
              <li key={service.slug}>
                <Link to={servicePath(service.slug)} className="text-navy hover:text-ember">
                  {service.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-3">
          <h2 className="text-xs font-bold uppercase tracking-[0.16em] text-ember">Talk to us</h2>
          <address className="mt-4 space-y-2 text-sm not-italic text-ink/80">
            <p className="font-semibold text-navy">{fullAddress()}</p>
            {SITE.phones.map((phone) => (
              <p key={phone.tel}>
                <a href={`tel:${phone.tel}`} className="font-semibold text-navy hover:text-ember">
                  {phone.display}
                </a>
                <span className="text-ink/60"> · WhatsApp</span>
              </p>
            ))}
            <p>
              <a href={`mailto:${SITE.email}`} className="font-semibold text-navy hover:text-ember">
                {SITE.email}
              </a>
            </p>
            <p>
              <a href={SITE.url} className="hover:text-ember">
                www.bhproscaffeng.com
              </a>
            </p>
          </address>
        </div>
      </Container>

      <div className="border-t border-line">
        <Container className="flex flex-col gap-2 py-5 pb-24 text-xs text-ink/60 sm:flex-row sm:items-center sm:justify-between sm:pb-5">
          <p>
            © {year} {SITE.name}. All rights reserved.
          </p>
          <p>Scaffolding and scissor platform hire · Dar es Salaam</p>
        </Container>
      </div>
    </footer>
  )
}

export function WhatsAppFloat() {
  return (
    <a
      href={whatsappHref("Hello B&H Proscaff, I would like to enquire about scaffold access.")}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float fixed bottom-5 right-5 z-40 inline-flex items-center gap-2 bg-navy px-3 py-3 text-sm font-bold text-paper shadow-lift hover:bg-navy-deep"
    >
      <WhatsAppIcon className="h-5 w-5 text-[#FFD7AE]" />
      <span>WhatsApp</span>
    </a>
  )
}
