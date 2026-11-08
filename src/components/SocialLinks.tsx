import { Facebook, Instagram } from "lucide-react"
import type { SVGProps } from "react"
import { SITE } from "../data/site"

function ThreadsIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
      <path d="M19.062 8.782C18.988 5.705 16.61 4 13.464 4 9.35 4 6.75 6.548 6.75 12s2.6 8 6.714 8c3.146 0 5.524-1.705 5.598-4.782" />
      <path d="M9.75 9.5c.9-1.1 2.15-1.6 3.7-1.6 2.45 0 4.05 1.35 4.05 4.1 0 .55-.05 1.05-.15 1.5-1.35.2-4.85.55-6.85-.35-1.45-.65-2.1-1.85-2.1-3.15 0-2.05 1.7-3.5 4.15-3.5 1.55 0 2.75.55 3.5 1.55" />
    </svg>
  )
}

const ICONS = {
  Instagram,
  Threads: ThreadsIcon,
  Facebook,
} as const

export default function SocialLinks({ className = "" }: { className?: string }) {
  return (
    <ul className={`flex flex-wrap gap-x-4 gap-y-2 ${className}`}>
      {SITE.social.map((profile) => {
        const Icon = ICONS[profile.name]
        return (
          <li key={profile.name}>
            <a
              href={profile.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-semibold text-navy hover:text-ember"
            >
              <Icon className="h-4 w-4 shrink-0" />
              <span>{profile.name}</span>
              <span className="sr-only">{` @${SITE.socialHandle}`}</span>
            </a>
          </li>
        )
      })}
    </ul>
  )
}
