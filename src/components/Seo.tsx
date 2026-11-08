import { useLayoutEffect } from "react"
import { SITE, pageUrl } from "../data/site"

type JsonLd = Record<string, unknown>

type SeoProps = {
  title: string
  description: string
  path: string
  image?: string
  noindex?: boolean
  jsonLd?: JsonLd[]
}

function upsertMeta(attr: "name" | "property", key: string, content: string) {
  const selector = `meta[${attr}="${key}"]`
  let element = document.head.querySelector(selector)
  if (!element) {
    element = document.createElement("meta")
    element.setAttribute(attr, key)
    document.head.appendChild(element)
  }
  element.setAttribute("content", content)
}

function setCanonical(href: string) {
  const links = Array.from(document.head.querySelectorAll('link[rel="canonical"]'))
  const primary = links[0] ?? document.createElement("link")
  if (!links[0]) {
    primary.setAttribute("rel", "canonical")
    document.head.appendChild(primary)
  }
  primary.setAttribute("href", href)
  links.slice(1).forEach((element) => element.remove())
}

export default function Seo({
  title,
  description,
  path,
  image = "/images/internal-grid.jpg",
  noindex = false,
  jsonLd = [],
}: SeoProps) {
  const url = pageUrl(path)
  const jsonKey = JSON.stringify(jsonLd)

  useLayoutEffect(() => {
    document.title = title
    const imageUrl = image.startsWith("http") ? image : `${SITE.url}${image}`
    const robots = noindex ? "noindex, follow" : "index, follow, max-image-preview:large"

    upsertMeta("name", "description", description)
    upsertMeta("name", "robots", robots)
    upsertMeta("name", "author", "B&H Proscaff Engineering Limited")
    upsertMeta("name", "geo.region", "TZ-02")
    upsertMeta("name", "geo.placename", "Dar es Salaam")
    upsertMeta("name", "geo.position", `${SITE.map.lat};${SITE.map.lng}`)
    upsertMeta("property", "og:title", title)
    upsertMeta("property", "og:description", description)
    upsertMeta("property", "og:url", url)
    upsertMeta("property", "og:image", imageUrl)
    upsertMeta("property", "og:image:alt", "Scaffold erected by B&H Proscaff Engineering Limited")
    upsertMeta("property", "og:type", "website")
    upsertMeta("property", "og:locale", "en_TZ")
    upsertMeta("property", "og:site_name", "B&H Proscaff Engineering Limited")
    upsertMeta("name", "twitter:card", "summary_large_image")
    upsertMeta("name", "twitter:title", title)
    upsertMeta("name", "twitter:description", description)
    upsertMeta("name", "twitter:image", imageUrl)
    setCanonical(url)

    const data = JSON.parse(jsonKey) as JsonLd[]
    let script = document.getElementById("page-jsonld")
    if (data.length === 0) {
      script?.remove()
      return
    }
    if (!script) {
      script = document.createElement("script")
      script.id = "page-jsonld"
      script.setAttribute("type", "application/ld+json")
      document.head.appendChild(script)
    }
    script.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@graph": data,
    })
  }, [title, description, url, image, noindex, jsonKey])

  return null
}
