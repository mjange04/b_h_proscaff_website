export type ServiceIconName =
  | "elevation"
  | "frame"
  | "internal"
  | "deck"
  | "tower"
  | "scissor"

export type ServiceSection = {
  heading: string
  paragraphs: string[]
}

export type Service = {
  slug: string
  title: string
  seoTitle: string
  description: string
  summary: string
  image: string
  imageAlt: string
  icon: ServiceIconName
  points: string[]
  needs: string[]
  intro: string
  sections: ServiceSection[]
}

export const SERVICES: Service[] = [
  {
    slug: "elevation-scaffolds",
    title: "Elevation scaffolds",
    seoTitle: "Elevation and Façade Scaffolding in Dar es Salaam | B&H Proscaff",
    description:
      "Tied elevation scaffolds for façades, balconies, and window lines in Dar es Salaam. B&H Proscaff erects, alters, and strikes the access.",
    summary: "Tied access along existing walls, balconies, and window lines.",
    image: "/images/elevation.jpg",
    imageAlt:
      "Tube-and-coupler scaffold running the length of a residential block, with lifts at the balconies and windows",
    icon: "elevation",
    points: [
      "Boarded lifts to the height the outside trade actually needs",
      "Ties into sound structure, agreed before the first standard goes up",
      "Guard rails and toe boards on the working lifts",
      "Ladder or stair access that leaves a lived-in entrance usable",
      "Alterations when a bay has to open for a window, a hoist, or a gate",
      "Strike and removal when that elevation is finished",
    ],
    needs: [
      "The address, and a photograph of the elevation if you have one",
      "How high the work goes, storey by storey",
      "Whether people are living or trading on the ground floor",
      "How many weeks you expect the steel to stay",
    ],
    intro:
      "An elevation scaffold is tied back to a building that is already standing, so painters, plasterers, glaziers, and repair crews can work along the outside without a ladder as their only plan. The footprint stays close to the wall, which matters when a tree, a boundary, or a live pavement is in the way.",
    sections: [
      {
        heading: "Where this scaffold belongs",
        paragraphs: [
          "Use it when the work is on the face of a finished or occupied building: external paint, making-good after leaks, balcony repairs, window replacement, or a full re-plaster. It is also the arrangement we stand on low-rise houses while render, glazing, and balcony finishes are underway.",
          "It is the wrong tool when the building is still a climbing concrete frame and the floor plate changes every week. That job wants access that rises with the structure, not a finished elevation tied once and left.",
        ],
      },
      {
        heading: "How we set it out",
        paragraphs: [
          "We walk the face and note doors that must stay open, cables, air-conditioning units, and soft ground at the base. Lifts are spaced for the trade, not for a drawing that ignores the balcony slab already there. Ties go into parts of the building that can hold them, and we say so if a wall is too weak.",
          "Sheeting, if you want the dust kept in, is a separate decision. A sheeted bay catches wind. We only add it when the ties and the bracing are there for it.",
        ],
      },
    ],
  },
  {
    slug: "frame-access",
    title: "Access for rising frames",
    seoTitle: "Multi-Storey Frame Scaffolding in Dar es Salaam | B&H Proscaff",
    description:
      "Scaffolding around reinforced-concrete frames as floors go up. B&H Proscaff provides external access for blockwork, openings, and finishes in Dar es Salaam.",
    summary: "External access that follows a concrete frame as the floors climb.",
    image: "/images/frame-side.jpg",
    imageAlt:
      "Scaffold standing against a multi-storey concrete and block building, with reinforcement still exposed on the upper floor",
    icon: "frame",
    points: [
      "Lifts that follow the floor plate, not a guess at the final height",
      "Access to beam sides, window openings, and external blockwork",
      "Bays that can come down where a truck, hoist, or gate must pass",
      "Guard rails on the lifts other trades will actually use",
      "Alterations as the next slab changes the working height",
      "A crew that returns to adapt the scaffold, rather than leaving fittings for the site to rearrange",
    ],
    needs: [
      "Which floors are in progress, and which elevation we are serving first",
      "Where vehicles and a hoist have to reach the building",
      "How long each working lift needs to stay before the next pour",
      "Who on site we take instructions from when the programme moves",
    ],
    intro:
      "A rising frame does not want one scaffold designed for the finished building and ignored until handover. It wants access that is already there when blockwork, window openings, and external finishes reach that floor — and that can move when the next slab changes the height.",
    sections: [
      {
        heading: "Built around the programme",
        paragraphs: [
          "We agree which bays stay for the month and which are temporary. A scaffold that blocks the only gate is not a service, even if the elevation looks complete. Loading and vehicle routes are part of the layout, not an afterthought once the steel is up.",
          "The photographs in this section show tied access across concrete frames and block infill, with the upper structure still open. That is the stage we plan for: people working on the outside while the building is unfinished above them.",
        ],
      },
      {
        heading: "What we will not leave to chance",
        paragraphs: [
          "Other trades do not add boards, pull ties, or sheet a bay because it is convenient that afternoon. If the work changes, call us and the same crew alters it. A scaffold that has been quietly rebuilt by three different gangs is no longer the one we handed over.",
        ],
      },
    ],
  },
  {
    slug: "internal-scaffolds",
    title: "Internal grid scaffolds",
    seoTitle: "Internal and Birdcage Scaffolding | B&H Proscaff Dar es Salaam",
    description:
      "Internal grid scaffolds for halls, shells, and overhead work. B&H Proscaff sets boarded levels inside the building, with a clear way down.",
    summary: "A dense grid inside a hall or shell, boarded where the overhead work is.",
    image: "/images/internal-grid.jpg",
    imageAlt:
      "A dense red scaffold grid filling the inside of a large hall, with working levels set high under the roof",
    icon: "internal",
    points: [
      "Standards and ledgers set out to the bay, not a single tower in the middle of a wide room",
      "A boarded level at the height the overhead task needs",
      "A clear route from that level back to the floor",
      "Room below the deck for materials to move, agreed on the walk-round",
      "Bracing and ties suited to an enclosed structure",
      "Strike planned so the hall can be cleared, not left as a store of loose tube",
    ],
    needs: [
      "What is overhead: roof steel, a soffit, services, or a high internal wall",
      "The clear height, and anything already fixed that we must miss",
      "Whether the floor is a slab, compacted fill, or still open",
      "When other trades need the ground clear again",
    ],
    intro:
      "Some of the work is not on the façade. It is under a roof, along a high internal wall, or across a hall where one tower cannot cover the task. We fill the bay with a grid and board the level where people need to stand, with a proper way down.",
    sections: [
      {
        heading: "A hall is not a façade",
        paragraphs: [
          "Inside, there may be no wall in the right place to tie to, the floor may still be a working route, and the thing you are reaching is a ceiling rather than a window. The grid is there so the working level is continuous enough for the task, and so people are not climbing from one loose board to the next.",
          "The photograph on this page is that kind of scaffold: system steel filling a hall, levels set high, the floor still usable as a route for materials. Tell us if the deck also has to carry more than people and hand tools. The layout changes if it does.",
        ],
      },
      {
        heading: "Order of work",
        paragraphs: [
          "We want to know what is already fixed in the volume — ducts, lights, a temporary roof, a crane beam — before we set the grid. Moving a forest of standards after the first lift is up is slower than walking the hall properly the first time.",
        ],
      },
    ],
  },
  {
    slug: "freestanding-decks",
    title: "Freestanding working decks",
    seoTitle: "Freestanding Scaffold Decks and Independent Towers | B&H Proscaff",
    description:
      "Independent scaffold decks for yards and hard standings in Dar es Salaam, with guard rails, bracing, and a base suited to the ground.",
    summary: "An independent deck on hard ground, when there is no wall to tie to.",
    image: "/images/deck-day.jpg",
    imageAlt:
      "A freestanding scaffold with a long guarded deck on a concrete hard standing in a work yard",
    icon: "deck",
    points: [
      "A structure that stands on its base, not on a tie to a façade",
      "Base plates, and sole boards where the ground is not already a sound slab",
      "Bracing so the frame does not rack when people move on the deck",
      "Guard rails and a boarded platform at the working height",
      "Ladder access to that deck",
      "A straight refusal if the ground is too soft for the height you want",
    ],
    needs: [
      "A photograph of the ground in daylight",
      "The height of the thing you need to reach",
      "How many people will be on the deck, and with what tools",
      "How long it stays, and whether it must move",
    ],
    intro:
      "When there is no wall to tie to — a yard, a slab, a gap beside plant — the scaffold has to stand on its own. We build an independent deck with guard rails, bracing, and a base that matches the ground, then take it down when the overhead job is done.",
    sections: [
      {
        heading: "Ground first",
        paragraphs: [
          "A freestanding scaffold is only as honest as what it sits on. A concrete hard standing is a different problem from loose soil after rain. We look at the ground before we promise a height. If it needs sole boards, pads, or a smaller deck, that is the answer we will give you.",
          "These decks suit inspections, overhead work in a yard, and short tasks beside vehicles or plant. They are not a substitute for a tied elevation on a building, and we will say so if that is what the job actually is.",
        ],
      },
      {
        heading: "Left complete",
        paragraphs: [
          "The top is a platform with guard rails, not a single board on the last ledger. If the task changes height, we alter the deck. People on site do not remove bracing because it is in the way of a truck — call, and we will open a bay properly or move the whole stand.",
        ],
      },
    ],
  },
  {
    slug: "mobile-towers",
    title: "Mobile access towers",
    seoTitle: "Mobile Scaffold Towers in Dar es Salaam | B&H Proscaff",
    description:
      "Wheeled scaffold towers for columns, gates, and short tasks in Dar es Salaam. Castors locked before anyone climbs. Moved only when the platform is clear.",
    summary: "A wheeled tower for a column, a gate, or a task that moves during the day.",
    image: "/images/mobile-tower.jpg",
    imageAlt:
      "Crew in hard hats working from a wheeled scaffold tower beside column formwork on a building site",
    icon: "tower",
    points: [
      "A boarded platform with guard rails, not an open frame",
      "Castors locked before anyone climbs",
      "The tower moved only when people and loose materials are off it",
      "A wider base or outriggers when the height calls for them",
      "Useful beside columns, gates, junctions, and local repairs",
      "Struck or parked when the shift is done, rather than left as a climbing frame",
    ],
    needs: [
      "The working height and a photo of where it will stand",
      "Whether the tower has to move, and across what surface",
      "How many hours or days the task lasts",
      "Whether a tied elevation would be the safer, cheaper answer",
    ],
    intro:
      "A full elevation is the wrong amount of steel for a job that lasts a day and moves twice. A mobile tower gives a guarded platform on castors for a column, a junction, a sign, or a local repair — and it stays locked while anyone is on it.",
    sections: [
      {
        heading: "Short work, complete tower",
        paragraphs: [
          "The value of a tower is speed, not a licence to improvise. We hand it over complete: boards, rails, a locked castor, and a base wide enough for the height. The photograph here shows that kind of use beside column formwork, with the crew on a boarded lift and the wheels on the slab.",
          "We move it when the platform is clear. We do not roll a tower while someone is still on the deck, and we do not ask a castor to travel across soft ground or a slope it was not stood for.",
        ],
      },
      {
        heading: "When to choose steel instead",
        paragraphs: [
          "If the work runs the length of a building, or people need to be there for weeks, a tied scaffold is usually the better hire. Tell us the duration. We would rather put up the right arrangement than leave a tower doing a job it was not meant to hold.",
        ],
      },
    ],
  },
  {
    slug: "scissor-platforms",
    title: "Scissor platform hire",
    seoTitle: "Scissor Lift Hire in Dar es Salaam | B&H Proscaff",
    description:
      "Scissor platform hire from Salasala for firm, level ground in Dar es Salaam. B&H Proscaff hands the machine over with a short briefing, or recommends a scaffold instead.",
    summary: "A scissor platform for firm, level ground, when a scaffold would take longer than the task.",
    image: "/images/scissor-lift.jpg",
    imageAlt:
      "Green scissor lift with a guarded platform, black scissor stack, and wheels, photographed against a plain wall",
    icon: "scissor",
    points: [
      "Hire for work within the machine’s height, on ground we have looked at",
      "A handover covering travel, descent, and the area people on foot must keep clear",
      "Not offered for soft soil, a slope, or a slab we have not seen",
      "A clear answer if a tied scaffold is the better tool",
      "Agreed collection or delivery from our Salasala base",
      "The platform returned as briefed, not left as an unattended climb",
    ],
    needs: [
      "The height of the work and how long you need the machine",
      "A photograph of the floor or hard standing",
      "Indoor or outdoor, and whether it must pass a doorway",
      "Who will operate it, so the briefing reaches that person",
    ],
    intro:
      "A scissor platform is not a scaffold, and we do not describe it as one. It is the right hire when the ground is firm and level, the work sits within the machine’s reach, and you need to be up and down in the same shift. If the ground or the duration says scaffold, that is what we will tell you.",
    sections: [
      {
        heading: "Handover, not just delivery",
        paragraphs: [
          "Before the platform is used we agree the route it will travel and the height you need. The briefing is short and practical: how it rises and comes down, what the ground must be like, and where people on foot should not stand. We would rather spend ten minutes there than collect a machine that has been driven onto a soft edge.",
          "Send the height and a photo of the ground when you call. From Salasala we can say whether we should bring the platform or bring steel.",
        ],
      },
      {
        heading: "What this hire is not",
        paragraphs: [
          "It is not a way to avoid guard rails on a building face, and it is not a crane. If the task is a long elevation, an internal hall, or anything on uneven ground, look at the scaffold pages. We hire the platform for the jobs it is actually good at.",
        ],
      },
    ],
  },
]

export function servicePath(slug: string) {
  return `/services/${slug}`
}

export function getService(slug: string | undefined) {
  if (!slug) return undefined
  return SERVICES.find((service) => service.slug === slug)
}

export function serviceNumber(index: number) {
  return String(index + 1).padStart(2, "0")
}

export function relatedServices(slug: string) {
  const index = SERVICES.findIndex((service) => service.slug === slug)
  if (index === -1) return []
  return [1, 2].map((step) => SERVICES[(index + step) % SERVICES.length])
}
