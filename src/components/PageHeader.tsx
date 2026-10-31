import { Link } from "react-router-dom"
import { Container } from "./ui"

type Crumb = { label: string; to?: string }

export default function PageHeader({
  eyebrow,
  title,
  lede,
  crumbs,
}: {
  eyebrow: string
  title: string
  lede: string
  crumbs: Crumb[]
}) {
  return (
    <header className="border-b border-line">
      <Container className="py-12 sm:py-16">
        <nav aria-label="Breadcrumb">
          <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm font-semibold text-ink/60">
            {crumbs.map((crumb, index) => {
              const last = index === crumbs.length - 1
              return (
                <li key={`${crumb.label}-${index}`} className="flex items-center gap-2">
                  {index > 0 ? <span aria-hidden="true">/</span> : null}
                  {crumb.to && !last ? (
                    <Link to={crumb.to} className="hover:text-navy">
                      {crumb.label}
                    </Link>
                  ) : (
                    <span className={last ? "text-navy" : undefined} aria-current={last ? "page" : undefined}>
                      {crumb.label}
                    </span>
                  )}
                </li>
              )
            })}
          </ol>
        </nav>
        <p className="eyebrow mt-8">{eyebrow}</p>
        <h1 className="h-display mt-4 max-w-4xl text-4xl leading-[1.08] sm:text-6xl">{title}</h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink/75">{lede}</p>
      </Container>
    </header>
  )
}
