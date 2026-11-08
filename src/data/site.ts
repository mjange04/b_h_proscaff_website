import { GOOGLE_RATING, GOOGLE_REVIEWS } from "./reviews"

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
    postalCode: "8989",
  },
  hours: {
    display: "Daily 7 a.m.–midnight",
    openingHours: "Mo-Su 07:00-24:00",
    specification: [
      {
        days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        opens: "07:00",
        closes: "24:00",
      },
    ],
  },
  map: {
    lat: -6.7149448,
    lng: 39.1802744,
    label: "B&H Proscaff Engineering LTD, Salasala, Dar es Salaam",
    google:
      "https://www.google.com/maps/place/B%26H+Proscaff+Engineering+LTD/@-6.7149448,39.1802744,17z/data=!3m1!4b1!4m6!3m5!1s0x185c4dede2d3dbc1:0x1cef05cb94ca0797!8m2!3d-6.7149448!4d39.1802744!16s%2Fg%2F11z25qy_3w",
    reviews:
      "https://www.google.com/maps/place/B%26H+Proscaff+Engineering+LTD/@-6.7149448,39.1802744,17z/data=!4m8!3m7!1s0x185c4dede2d3dbc1:0x1cef05cb94ca0797!8m2!3d-6.7149448!4d39.1802744!9m1!1b1!16s%2Fg%2F11z25qy_3w",
    embed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3967.9!2d39.1802744!3d-6.7149448!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x185c4dede2d3dbc1%3A0x1cef05cb94ca0797!2sB%26H%20Proscaff%20Engineering%20LTD!5e0!3m2!1sen!2stz!4v0!5m2!1sen!2stz",
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
      addressRegion: SITE.address.city,
      postalCode: SITE.address.postalCode,
      addressCountry: "TZ",
    },
    openingHours: SITE.hours.openingHours,
    openingHoursSpecification: SITE.hours.specification.map((slot) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: slot.days,
      opens: slot.opens,
      closes: slot.closes,
    })),
    geo: {
      "@type": "GeoCoordinates",
      latitude: SITE.map.lat,
      longitude: SITE.map.lng,
    },
    hasMap: SITE.map.google,
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
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: String(GOOGLE_RATING.value),
      reviewCount: String(GOOGLE_RATING.count),
      bestRating: String(GOOGLE_RATING.best),
      worstRating: "1",
    },
    review: GOOGLE_REVIEWS.map((item) => ({
      "@type": "Review",
      author: { "@type": "Person", name: item.author },
      reviewRating: {
        "@type": "Rating",
        ratingValue: String(item.rating),
        bestRating: "5",
      },
      reviewBody: item.body,
    })),
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
