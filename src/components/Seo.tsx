import { useLayoutEffect } from "react"

type JsonLd = Record<string, unknown>

type SeoProps = {
  title: string
  description: string
  path: string
  image?: string
  noindex?: boolean
  jsonLd?: JsonLd[]
}

const SITE_URL = "https://www.bhproscaffeng.com"

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

function upsertLink(rel: string, href: string) {
  let element = document.head.querySelector(`link[rel="${rel}"]`)
  if (!element) {
    element = document.createElement("link")
    element.setAttribute("rel", rel)
    document.head.appendChild(element)
  }
  element.setAttribute("href", href)
}

export default function Seo({
  title,
  description,
  path,
  image = "/images/internal-grid.jpg",
  noindex = false,
  jsonLd = [],
}: SeoProps) {
  const jsonKey = JSON.stringify(jsonLd)

  useLayoutEffect(() => {
    document.title = title
    const url = `${SITE_URL}${path}`
    const imageUrl = image.startsWith("http") ? image : `${SITE_URL}${image}`
    const robots = noindex ? "noindex, follow" : "index, follow, max-image-preview:large"

    upsertMeta("name", "description", description)
    upsertMeta("name", "robots", robots)
    upsertMeta("name", "author", "B&H Proscaff Engineering Limited")
    upsertMeta("name", "geo.region", "TZ-02")
    upsertMeta("name", "geo.placename", "Dar es Salaam")
    upsertMeta("name", "geo.position", "-6.689;39.194")
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
    upsertLink("canonical", url)

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
  }, [title, description, path, image, noindex, jsonKey])

  return null
}
