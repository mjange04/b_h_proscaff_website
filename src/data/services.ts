export type ServiceIconName =
  | "scaffold"
  | "formwork"
  | "events"
  | "coatings"
  | "scissor"
  | "cradle"

export type ServiceSection = {
  heading: string
  paragraphs: string[]
}

export type ServicePhoto = {
  src: string
  alt: string
}

export type Service = {
  slug: string
  title: string
  seoTitle: string
  description: string
  summary: string
  image: string
  imageAlt: string
  imageCredit?: string
  icon: ServiceIconName
  points: string[]
  needs: string[]
  intro: string
  sections: ServiceSection[]
  gallery?: ServicePhoto[]
}

export const SERVICE_ALIASES: Record<string, string> = {
  "elevation-scaffolds": "scaffolding",
  "frame-access": "scaffolding",
  "internal-scaffolds": "scaffolding",
  "freestanding-decks": "scaffolding",
  "mobile-towers": "scaffolding",
  "event-structures": "event-stages",
  "suspended-access": "cradle",
}

export const RETIRED_SERVICE_SLUGS = new Set([
  "site-materials",
  "crew-training",
  "trusswork",
  "truss-support",
])

export const SERVICES: Service[] = [
  {
    slug: "scissor-platforms",
    title: "Scissor platform hire and sales",
    seoTitle: "Scissor Lift Hire and Sales in Dar es Salaam | B&H Proscaff",
    description:
      "Scissor platform hire and sales from Salasala. B&H Proscaff briefs the operator, or recommends a scaffold when the ground or the duration says so.",
    summary: "A maintained scissor platform for firm, level ground — hired or sold — with a briefing, not just a drop-off.",
    image: "/images/scissor-lift.jpg",
    imageAlt: "Green scissor lift with a guarded platform, black scissor stack, and wheels",
    icon: "scissor",
    points: [
      "Hire for work within the machine’s height, on ground we have looked at",
      "Sales of the same class of platform when owning it is the cheaper year",
      "Handover covering travel, descent, and the area people on foot must keep clear",
      "Not offered for soft soil, a slope, or a slab we have not seen",
      "A clear answer if a tied scaffold is the better tool",
      "Collection or delivery from our Salasala base",
    ],
    needs: [
      "The height of the work and how long you need the machine",
      "A photograph of the floor or hard standing",
      "Indoor or outdoor, and whether it must pass a doorway",
      "Whether you are hiring or asking about a purchase",
    ],
    intro:
      "A scissor platform is not a scaffold. It is the right machine when the ground is firm and level, the work sits within its reach, and you need to be up and down in the same shift. We hire it, we sell it when that is the better commercial answer, and we will tell you to use steel instead if the ground or the duration says so.",
    sections: [
      {
        heading: "Handover, not just delivery",
        paragraphs: [
          "Before the platform is used we agree the route and the height. The briefing is short: how it rises and comes down, what the ground must be like, and where people on foot should not stand. We would rather spend ten minutes there than collect a machine that has been driven onto a soft edge.",
        ],
      },
      {
        heading: "Buying when hire no longer pays",
        paragraphs: [
          "If you will need the same machine every month, ask about a sale. The briefing still happens. A platform that sits in a yard with nobody who has been shown the controls is not a saving.",
        ],
      },
    ],
  },
  {
    slug: "event-stages",
    title: "Event stages",
    seoTitle: "Event Stages in Dar es Salaam | B&H Proscaff",
    description:
      "Stage decks, roofs, speaker towers, and viewing platforms for events in Dar es Salaam, erected on a tight load-in and struck when the show is over.",
    summary: "Stages, roofs, and towers for a ceremony, a concert, or a brand day — up for the show, gone after the last encore.",
    image: "/images/event-stage.jpg",
    imageAlt: "Outdoor performance stage built from scaffold towers and truss, with lighting and a crowd in front",
    imageCredit: "Photograph: Pexels (free licence).",
    icon: "events",
    points: [
      "Stage decks and risers sized to the production, not to leftover scaffold bays",
      "Roof and canopy frames with hang points agreed with the lighting and sound crew",
      "Towers for speakers, screens, and scenic pieces",
      "Viewing stands and crew access that do not mix with the public route",
      "Load-in and strike that match the venue’s hours, not our convenience",
      "A walk-round with the producer before anyone hangs a lamp",
    ],
    needs: [
      "The date, the venue, and how many hours you have to get in",
      "A plan or a sketch of the stage, roof, and hang points",
      "Ground: grass, slab, or a slope",
      "Who is the on-site contact during load-in",
    ],
    intro:
      "An event is not a building programme. You get a few hours, a piece of ground, and a list of hang points. We stand the stage, the roof, and the towers so the technical crew can load in — and we take them down when the site has to be a field again.",
    sections: [
      {
        heading: "The show is the deadline",
        paragraphs: [
          "We work backwards from doors. If the roof cannot take the lamps you want, we say so before the truck is booked, not at dusk. Wind on a sheeted roof is a real limit. We would rather reduce the hang than leave a structure we will not stand under.",
        ],
      },
      {
        heading: "Then it comes down",
        paragraphs: [
          "Strike is part of the hire. Leaving a stage “until Monday” because the crew is tired is how venues lose their deposit. We plan the take-down with the same people who put it up.",
        ],
      },
    ],
  },
  {
    slug: "formwork",
    title: "Formwork hire and sales",
    seoTitle: "Formwork Hire and Sales in Dar es Salaam | B&H Proscaff",
    description:
      "Formwork hire and sales for reinforced-concrete walls, slabs, and columns in Dar es Salaam, coordinated with B&H Proscaff access so the pour and the scaffold are not fighting for the same bay.",
    summary: "Shutters and falsework for hire or purchase, planned with the access so the pour is not blocked by the steel.",
    image: "/images/formwork.jpg",
    imageAlt: "Concrete building under construction with wall formwork still in place on the upper storey",
    imageCredit: "Photograph: Wikimedia Commons, Brazil formwork (public domain).",
    icon: "formwork",
    points: [
      "Wall, column, and slab shutters sized to the pour, not leftover from the last job",
      "Falsework that carries the wet concrete until the member can take itself",
      "Strike and reuse planned so panels are not buried behind the next lift of scaffold",
      "Coordination with our access crew when the same elevation needs both",
      "A clear hold-point before anyone pours against a shutter we have not checked",
      "Short- and long-term hire, or a sale when the pour programme makes owning the panels cheaper",
    ],
    needs: [
      "Which members are pouring next, and in what order",
      "The storey height and the thickness of the slab or wall",
      "Whether our scaffold is already standing on that elevation",
      "How many days the shutter must stay before it can come off",
    ],
    intro:
      "Concrete does not wait for a tidy scaffold. Hire the shutters for the pours you have, or buy the panels if the programme will keep them turning. Either way we set the formwork so the pour can happen, then strike it in time for the next lift — including when our own scaffold is on the same face.",
    sections: [
      {
        heading: "The pour comes first on that day",
        paragraphs: [
          "A wall shutter that cannot be plumbed because a scaffold ledger is in the way is not a surprise we should discover at 6 a.m. We walk the elevation with the access layout in mind: which bays stay, which open for the pour, and who is allowed in the bay while the concrete is going in.",
          "Falsework is the part people forget until the slab is wet. Tell us the span and the load. We will not guess a prop centres from a photograph of a similar building.",
        ],
      },
      {
        heading: "Not a timber store",
        paragraphs: [
          "Panels, soldiers, and props leave Salasala for an agreed sequence. They are not a surplus for the site to invent with. If the pour list changes, we re-cut the hire. Leaving a stack of shutters “for later” is a different agreement.",
        ],
      },
    ],
  },
  {
    slug: "scaffolding",
    title: "Scaffolding hire and sales",
    seoTitle: "Scaffolding Hire and Sales in Dar es Salaam | B&H Proscaff",
    description:
      "B&H Proscaff hires and sells scaffolding in Dar es Salaam: tied elevations, frame access, internal grids, freestanding decks, and mobile towers, erected and struck by our crew.",
    summary: "Hire the steel for the job, or buy the stock — tied elevations, climbing frames, internal grids, decks, and towers.",
    image: "/images/internal-grid.jpg",
    imageAlt: "Dense internal scaffold filling a hall, with working levels set high under the roof",
    icon: "scaffold",
    points: [
      "Tied access along façades, balconies, and window lines",
      "External lifts that follow a concrete frame as the floors climb",
      "Internal grids for halls, shells, and overhead work",
      "Independent decks on hard ground when there is no wall to tie to",
      "Mobile towers for a column, a gate, or a task that moves during the day",
      "Short- and long-term hire, plus sales of tubes, fittings, boards, and towers",
      "Inspection, alteration, and strike by the same crew that put it up",
    ],
    needs: [
      "The address, and a photograph of the face, hall, or ground",
      "How high the work goes, and how long the steel must stay",
      "Whether people still use the ground floor, a gate, or a hoist route",
      "Which trade will stand on the lifts first",
    ],
    intro:
      "You can hire the scaffold for the weeks you need it, or buy the stock if your programme will keep it busy. Either way we walk the site, name the arrangement, erect it, and strike it when that part of the work is finished.",
    sections: [
      {
        heading: "What we actually stand",
        paragraphs: [
          "On an occupied elevation the steel stays close to the wall so painters, plasterers, and glaziers can work the window line without a ladder as the only plan. On a rising frame the lifts follow the floor plate, with bays that can open for a truck or a hoist. Inside a hall we fill the bay with a grid and board the level under the roof. In a yard we stand an independent deck on its base. For a column or a gate that moves twice in a day, a wheeled tower is usually enough.",
          "The photographs on this page are from our own sites: an internal grid, a climbing frame, a residential elevation, a house being finished, a yard deck, a tower beside formwork, a tied run along a block wall, and a wheeled tower in a warehouse. That is the work, not a catalogue of systems we do not run.",
        ],
      },
      {
        heading: "One crew from the first standard to the strike",
        paragraphs: [
          "Other trades do not add boards, pull ties, or sheet a bay because it suits the next hour. If the programme changes, call us. A scaffold that has been quietly rebuilt by three gangs is no longer the one we handed over.",
          "Sheeting, if you want dust kept in, is a separate decision. A sheeted bay catches wind. We only add it when the ties and bracing are there for it.",
        ],
      },
    ],
    gallery: [
      { src: "/images/frame-side.jpg", alt: "Tied scaffold along a multi-storey concrete and block frame" },
      { src: "/images/elevation.jpg", alt: "Tube-and-coupler elevation along balconies and windows" },
      { src: "/images/house-finish.jpg", alt: "Finishing scaffold on a two-storey house" },
      { src: "/images/deck-day.jpg", alt: "Freestanding scaffold deck on a hard standing" },
      { src: "/images/mobile-tower.jpg", alt: "Crew working from a mobile tower beside column formwork" },
      { src: "/images/block-run.jpg", alt: "Tied scaffold along a block wall with a boarded working lift" },
      { src: "/images/block-end.jpg", alt: "End of a tied scaffold run along a block wall, with a ladder bay" },
      { src: "/images/warehouse-tower.jpg", alt: "Mobile scaffold tower on castors inside a warehouse" },
    ],
  },
  {
    slug: "surface-coatings",
    title: "Surface preparation and coatings",
    seoTitle: "Sandblasting and Protective Coatings | B&H Proscaff Dar es Salaam",
    description:
      "B&H Proscaff prepares steel and concrete and applies protective coatings in Dar es Salaam, including work from the same scaffold our access crew is standing.",
    summary: "Blast, profile, and coat — on steel, tanks, and elevations — often from the scaffold already on the face.",
    image: "/images/house-finish.jpg",
    imageAlt: "Finishing work on a house elevation, with a working lift at the upper floor",
    icon: "coatings",
    points: [
      "Abrasive preparation where the specification calls for a clean, keyed surface",
      "Protective coatings on structural steel, scaffold stock, tanks, and civil faces",
      "Access from our own scaffold when the elevation is already stood",
      "Containment discussed before anyone starts a dusty process on a live street",
      "A hold-point between preparation and the first coat",
      "Recoat of hired steel before it goes back into service, when that is in the job",
    ],
    needs: [
      "What is being coated, and the specification if you have one",
      "Whether the work is on a live elevation or in a yard",
      "How dust and overspray must be kept off neighbours",
      "Whether our scaffold is already the access",
    ],
    intro:
      "A coating is only as good as the surface under it. We prepare steel and concrete, then put the system on — often from the same elevation our crew is already standing. If the face is occupied, we talk about dust and sheeting before the first blast.",
    sections: [
      {
        heading: "Preparation is the job",
        paragraphs: [
          "Skipping the profile to save a day is how a coat peels in the first rains. We will not paint over mill scale, rust, or a dusty plaster and call it a finish. If the specification is missing, we still say what we are going to do to the surface, in writing, before we start.",
        ],
      },
      {
        heading: "On a live elevation",
        paragraphs: [
          "A house being finished, as in the photograph, is a different problem from a tank in a yard. People walk underneath. Windows stay in. We plan the access, the drop sheets, and the hours so the coating does not become a complaint from the floor below.",
        ],
      },
    ],
  },
  {
    slug: "cradle",
    title: "Cradle",
    seoTitle: "Cradle Hire in Dar es Salaam | B&H Proscaff",
    description:
      "Suspended cradles for façade cleaning, repairs, and coatings in Dar es Salaam, when a tied scaffold is the wrong amount of steel for a tall face.",
    summary: "A cradle on the façade when a full scaffold would take longer than the work on the glass or the cladding.",
    image: "/images/cradle.jpg",
    imageAlt: "High-rise building under construction, the kind of tall elevation where suspended access is often used",
    imageCredit: "Photograph: Pexels (free licence).",
    icon: "cradle",
    points: [
      "Cradles for cleaning, repairs, coatings, and installation on a tall face",
      "A building that can actually take the suspension — we will say no if it cannot",
      "Operator briefing and a simple rescue conversation before anyone goes over the edge",
      "Coordination with the building manager on hours, drop zones, and wind",
      "Inspection of the equipment before it is hung",
      "A recommendation to stand a tied scaffold instead when the work is wide and long",
    ],
    needs: [
      "The height of the face, and photographs of the roof or suspension points",
      "What the crew will do from the cradle, and for how many days",
      "Who manages the building, so we can agree drop zones",
      "Wind exposure and neighbouring properties",
    ],
    intro:
      "Some elevations are too high, too occupied, or too short in duration for a full tied scaffold. A cradle hangs the working platform from above. It is the right tool for a strip of façade, not for a house that needs three weeks of plaster.",
    sections: [
      {
        heading: "The building has to accept it",
        paragraphs: [
          "We look at the roof, the parapet, and the drop before we promise a cradle. If there is nowhere honest to hang from, the answer is scaffold or a different machine. We do not invent an anchorage from a photograph of a similar tower.",
        ],
      },
      {
        heading: "Not a shortcut around a proper elevation",
        paragraphs: [
          "If painters need the whole face for a month, a cradle will cost more time than it saves. Tell us the duration. We would rather stand the steel than leave people swinging past the same window twice a day.",
        ],
      },
    ],
  }

]

export function servicePath(slug: string) {
  return `/services/${slug}`
}

export function resolveServiceSlug(slug: string | undefined) {
  if (!slug) return undefined
  return SERVICE_ALIASES[slug] ?? slug
}

export function getService(slug: string | undefined) {
  const resolved = resolveServiceSlug(slug)
  if (!resolved) return undefined
  return SERVICES.find((service) => service.slug === resolved)
}

export function serviceNumber(index: number) {
  return String(index + 1).padStart(2, "0")
}

export function relatedServices(slug: string) {
  const resolved = resolveServiceSlug(slug)
  const index = SERVICES.findIndex((service) => service.slug === resolved)
  if (index === -1) return []
  return [1, 2].map((step) => SERVICES[(index + step) % SERVICES.length])
}
