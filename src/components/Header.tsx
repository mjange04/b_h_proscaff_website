import { Menu, X } from "lucide-react"
import { useEffect, useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { NAV, SITE } from "../data/site"
import { Button, Container } from "./ui"

function isActive(pathname: string, to: string) {
  return pathname === to || pathname.startsWith(`${to}/`)
}

export default function Header() {
  const { pathname } = useLocation()
  const [open, setOpen] = useState(false)

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : ""
    document.documentElement.dataset.nav = open ? "open" : "closed"
    return () => {
      document.body.style.overflow = ""
      delete document.documentElement.dataset.nav
    }
  }, [open])

  useEffect(() => {
    if (!open) return
    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false)
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [open])

  return (
    <header className="sticky top-0 z-50 border-b border-line/80 bg-paper/95 backdrop-blur-md">
      <div className="hidden bg-navy text-paper sm:block">
        <Container className="flex items-center justify-between gap-6 py-2 text-xs font-semibold">
          <p>Salasala, Dar es Salaam, Tanzania</p>
          <div className="flex items-center gap-5">
            {SITE.phones.map((phone) => (
              <a key={phone.tel} href={`tel:${phone.tel}`} className="hover:text-[#FFD7AE]">
                {phone.display}
              </a>
            ))}
            <a href={`mailto:${SITE.email}`} className="hover:text-[#FFD7AE]">
              {SITE.email}
            </a>
          </div>
        </Container>
      </div>

      <Container className="flex h-20 items-center justify-between gap-6 sm:h-28">
        <Link to="/" className="shrink-0">
          <img
            src="/logo.png"
            alt="B&H Proscaff Engineering Limited"
            className="h-16 w-auto sm:h-24"
            width={313}
            height={246}
          />
        </Link>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
          {NAV.map((item) => {
            const active = isActive(pathname, item.to)
            return (
              <Link
                key={item.to}
                to={item.to}
                aria-current={active ? "page" : undefined}
                className={`text-sm font-bold ${
                  active
                    ? "text-navy shadow-[inset_0_-2px_0_0_#ED7004]"
                    : "text-navy/70 hover:text-navy"
                }`}
              >
                {item.label}
              </Link>
            )
          })}
        </nav>

        <Button to="/contact" className="hidden lg:inline-flex">
          Request a crew
        </Button>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center border border-line bg-white text-navy lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((value) => !value)}
        >
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </Container>

      {open ? (
        <div id="mobile-nav" className="border-t border-line bg-paper lg:hidden">
          <nav className="px-5" aria-label="Mobile">
            {NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="block border-b border-line py-4 font-serif text-3xl font-semibold text-navy"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="space-y-2 px-5 py-5 text-sm font-semibold text-navy">
            {SITE.phones.map((phone) => (
              <a key={phone.tel} href={`tel:${phone.tel}`} className="block">
                {phone.display}
              </a>
            ))}
            <a href={`mailto:${SITE.email}`} className="block text-ink/70">
              {SITE.email}
            </a>
          </div>
        </div>
      ) : null}
    </header>
  )
}
