export const SITE = {
  name: "B&H Proscaff Engineering Limited",
  shortName: "B&H Proscaff",
  url: "https://www.bhproscaffeng.com",
  email: "info@bhproscaffeng.com",
  locale: "en_TZ",
  phones: [
    { display: "+255 798 472 769", tel: "+255798472769", whatsapp: "255798472769" },
    { display: "+255 798 486 837", tel: "+255798486837", whatsapp: "255798486837" },
  ],
  socialHandle: "bhproscaffengltd",
  social: [
    { name: "Instagram", href: "https://www.instagram.com/bhproscaffengltd/" },
    { name: "Threads", href: "https://www.threads.net/@bhproscaffengltd" },
    { name: "Facebook", href: "https://www.facebook.com/profile.php?id=61596206787900" },
  ],
  address: {
    line: "Salasala",
    city: "Dar es Salaam",
    country: "Tanzania",
    region: "East Africa",
  },
  map: {
    lat: -6.689,
    lng: 39.194,
    label: "Salasala, Dar es Salaam",
  },
} as const

export const NAV = [
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/projects", label: "Projects" },
  { to: "/approach", label: "How we work" },
  { to: "/contact", label: "Contact" },
] as const

export function fullAddress() {
  const { line, city, country, region } = SITE.address
  return `${line}, ${city}, ${country}, ${region}`
}

export function pageUrl(path: string) {
  const clean = (path || "/").split("?")[0].split("#")[0].trim()
  if (!clean || clean === "/") return `${SITE.url}/`
  const prefixed = clean.startsWith("/") ? clean : `/${clean}`
  return `${SITE.url}${prefixed.replace(/\/+$/, "")}`
}

export function whatsappHref(text?: string, index = 0) {
  const phone = SITE.phones[index]?.whatsapp ?? SITE.phones[0].whatsapp
  const base = `https://wa.me/${phone}`
  if (!text) return base
  return `${base}?text=${encodeURIComponent(text)}`
}

export function localBusinessNode() {
  return {
    "@type": ["GeneralContractor", "LocalBusiness"],
    "@id": `${SITE.url}/#business`,
    name: SITE.name,
    alternateName: SITE.shortName,
    url: SITE.url,
    image: `${SITE.url}/images/internal-grid.jpg`,
    logo: `${SITE.url}/logo.png`,
    email: SITE.email,
    telephone: SITE.phones.map((phone) => phone.tel),
    sameAs: SITE.social.map((profile) => profile.href),
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE.address.line,
      addressLocality: SITE.address.city,
      addressCountry: "TZ",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: SITE.map.lat,
      longitude: SITE.map.lng,
    },
    areaServed: [
      { "@type": "City", name: "Dar es Salaam" },
      { "@type": "Country", name: "Tanzania" },
    ],
    knowsAbout: [
      "Scaffolding hire and sales",
      "Tied scaffold",
      "Internal scaffold",
      "Mobile towers",
      "Scaffold erection and dismantling",
    ],
    description:
      "B&H Proscaff Engineering Limited erects, alters, and dismantles scaffolding in Dar es Salaam from a base in Salasala.",
  }
}

export function breadcrumbNode(items: { name: string; path: string }[]) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: pageUrl(item.path),
    })),
  }
}

export function webPageNode(title: string, description: string, path: string) {
  const url = pageUrl(path)
  return {
    "@type": "WebPage",
    "@id": `${url}#webpage`,
    name: title,
    description,
    url,
    isPartOf: {
      "@type": "WebSite",
      name: SITE.name,
      url: SITE.url,
    },
    about: { "@id": `${SITE.url}/#business` },
  }
}
