import {
  ArrowUpFromLine,
  Building2,
  Columns2,
  Layers,
  LayoutGrid,
  PanelTop,
  type LucideIcon,
} from "lucide-react"
import type { ServiceIconName } from "../data/services"

const ICONS: Record<ServiceIconName, LucideIcon> = {
  elevation: Building2,
  frame: Layers,
  internal: LayoutGrid,
  deck: PanelTop,
  tower: Columns2,
  scissor: ArrowUpFromLine,
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
