import {
  ArrowUpFromLine,
  Building2,
  Cable,
  Layers,
  Music,
  SprayCan,
  type LucideIcon,
} from "lucide-react"
import type { ServiceIconName } from "../data/services"

const ICONS: Record<ServiceIconName, LucideIcon> = {
  scaffold: Building2,
  formwork: Layers,
  events: Music,
  coatings: SprayCan,
  scissor: ArrowUpFromLine,
  cradle: Cable,
}

export default function ServiceGlyph({
  name,
  className = "h-5 w-5",
}: {
  name: ServiceIconName
  className?: string
}) {
  const Icon = ICONS[name]
  return <Icon className={className} aria-hidden="true" strokeWidth={1.75} />
}
