import { ArrowRight } from "lucide-react"
import type { ReactNode } from "react"
import { Link } from "react-router-dom"
import { SITE, whatsappHref } from "../data/site"

export function Container({
  className = "",
  children,
}: {
  className?: string
  children: ReactNode
}) {
  return <div className={`mx-auto w-full max-w-page px-5 sm:px-8 ${className}`}>{children}</div>
}

type ButtonProps = {
  children: ReactNode
  to?: string
  href?: string
  variant?: "navy" | "orange" | "ghost" | "cream"
  className?: string
  onClick?: () => void
  type?: "button" | "submit"
}

const buttonStyles = {
  navy: "bg-navy text-paper hover:bg-navy-deep",
  orange: "bg-orange text-navy-deep hover:bg-navy hover:text-paper",
  ghost: "bg-transparent text-navy ring-1 ring-navy/25 hover:bg-white",
  cream: "bg-paper text-navy hover:bg-white",
} as const

export function Button({
  children,
  to,
  href,
  variant = "navy",
  className = "",
  onClick,
  type = "button",
}: ButtonProps) {
  const classes = `inline-flex items-center justify-center gap-2 px-5 py-3 text-base font-bold transition-colors ${buttonStyles[variant]} ${className}`

  if (to) {
    return (
      <Link to={to} className={classes} onClick={onClick}>
        {children}
      </Link>
    )
  }

  if (href) {
    const external = href.startsWith("http")
    return (
      <a
        href={href}
        className={classes}
        onClick={onClick}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {children}
      </a>
    )
  }

  return (
    <button type={type} className={classes} onClick={onClick}>
      {children}
    </button>
  )
}

export function TextLink({
  to,
  children,
  className = "",
}: {
  to: string
  children: ReactNode
  className?: string
}) {
  return (
    <Link
      to={to}
      className={`inline-flex items-center gap-2 font-bold text-navy underline decoration-orange decoration-2 underline-offset-[6px] transition-colors hover:text-ember ${className}`}
    >
      {children}
      <ArrowRight className="h-4 w-4" aria-hidden="true" />
    </Link>
  )
}

export function EnquiryBand() {
  return (
    <section className="bg-navy text-paper" aria-labelledby="enquiry-heading">
      <Container className="grid gap-10 py-16 sm:py-20 lg:grid-cols-[1.4fr_0.8fr] lg:items-end">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#FFD7AE]">Next step</p>
          <h2 id="enquiry-heading" className="mt-4 font-serif text-4xl font-semibold leading-[1.08] sm:text-5xl">
            Send the address. We will tell you what should stand there.
          </h2>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-paper/80">
            A photograph of the elevation or the ground is enough to start. Both lines are on WhatsApp.
          </p>
        </div>
        <div className="flex flex-col items-start gap-4">
          {SITE.phones.map((phone) => (
            <a
              key={phone.tel}
              href={`tel:${phone.tel}`}
              className="font-serif text-3xl font-semibold tracking-tight text-paper hover:text-[#FFD7AE]"
            >
              {phone.display}
            </a>
          ))}
          <a href={`mailto:${SITE.email}`} className="text-sm font-semibold text-paper/80 hover:text-paper">
            {SITE.email}
          </a>
          <Button to="/contact" variant="orange" className="mt-2">
            Write the enquiry
          </Button>
          <a
            href={whatsappHref()}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-bold text-[#FFD7AE] underline decoration-[#FFD7AE]/40 underline-offset-4"
          >
            Or open WhatsApp
          </a>
        </div>
      </Container>
    </section>
  )
}
