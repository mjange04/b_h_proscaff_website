export type Project = {
  id: string
  title: string
  caption: string
  alt: string
  image: string
  aspect: "portrait" | "landscape"
  serviceSlug: string
  span: string
}

export const PROJECTS: Project[] = [
  {
    id: "block-run",
    title: "Tied access along a block wall",
    caption:
      "A working lift along a block elevation, with a steel beam in the run and the boards set for the next course of work.",
    alt: "Tied tube-and-coupler scaffold along a block wall, with a boarded working lift and a steel beam sitting in the structure",
    image: "/images/block-run.jpg",
    aspect: "portrait",
    serviceSlug: "scaffolding",
    span: "lg:col-span-4",
  },
  {
    id: "block-end",
    title: "The same elevation from the end",
    caption:
      "Ladder access at the end of the run, boards at the working lift, and the wall left clear at ground level.",
    alt: "End of a tied scaffold along a block wall, with a boarded upper lift, a ladder bay, and a worker in a hard hat standing beside the steel",
    image: "/images/block-end.jpg",
    aspect: "portrait",
    serviceSlug: "scaffolding",
    span: "lg:col-span-4",
  },
  {
    id: "warehouse-tower",
    title: "Mobile tower in a warehouse",
    caption:
      "A wheeled tower on a concrete floor, stood high enough for the roof steel, with the working platform boarded and the castors on the slab.",
    alt: "Tall mobile scaffold tower on castors inside a brick warehouse, with a boarded working platform under a metal roof",
    image: "/images/warehouse-tower.jpg",
    aspect: "portrait",
    serviceSlug: "scaffolding",
    span: "lg:col-span-4",
  },
  {
    id: "internal-grid",
    title: "Internal grid under a roof",
    caption:
      "System scaffold filling a hall so people can work high under the roof, with the floor kept as a route for materials.",
    alt: "Red internal scaffold grid inside a large hall, with crew working on the upper levels under a metal roof",
    image: "/images/internal-grid.jpg",
    aspect: "portrait",
    serviceSlug: "scaffolding",
    span: "lg:col-span-7",
  },
  {
    id: "mobile-tower",
    title: "Mobile tower at a column",
    caption:
      "A wheeled tower beside column formwork. The platform is boarded, the crew is on the lift, and the castors are on the slab.",
    alt: "Three workers in hard hats using a mobile scaffold tower next to column formwork",
    image: "/images/mobile-tower.jpg",
    aspect: "portrait",
    serviceSlug: "scaffolding",
    span: "lg:col-span-5",
  },
  {
    id: "frame-side",
    title: "Access along a rising frame",
    caption:
      "Tied scaffold along a concrete and block building while the upper floor is still open and the reinforcement is still in the air.",
    alt: "Angled view of scaffolding around a multi-storey blockwork building under a clear sky, with a pile of aggregate in front",
    image: "/images/frame-side.jpg",
    aspect: "portrait",
    serviceSlug: "scaffolding",
    span: "lg:col-span-4",
  },
  {
    id: "frame-front",
    title: "The frame, seen square on",
    caption:
      "The same kind of access from the front: lifts across the elevation, columns still being formed above the infilled floors.",
    alt: "Front view of a multi-storey building under construction, wrapped in scaffolding, with column reinforcement on the roof",
    image: "/images/frame-front.jpg",
    aspect: "portrait",
    serviceSlug: "scaffolding",
    span: "lg:col-span-4",
  },
  {
    id: "house-finish",
    title: "Finishing scaffold on a house",
    caption:
      "A low-rise elevation for render, windows, and balcony work, with a working lift at the upper floor.",
    alt: "Scaffold against a white two-storey house, with a worker on the balcony lift and windows being finished",
    image: "/images/house-finish.jpg",
    aspect: "portrait",
    serviceSlug: "scaffolding",
    span: "lg:col-span-4",
  },
  {
    id: "elevation",
    title: "Elevation on an occupied block",
    caption:
      "Tube-and-coupler access along balconies and windows, kept close to the wall where trees and the path sit tight against the building.",
    alt: "Long run of steel scaffold along the façade of a cream residential building with green window frames",
    image: "/images/elevation.jpg",
    aspect: "portrait",
    serviceSlug: "scaffolding",
    span: "lg:col-span-6",
  },
  {
    id: "deck-day",
    title: "Freestanding deck on a hard standing",
    caption:
      "An independent scaffold with a guarded upper deck, stood on concrete rather than tied to a wall.",
    alt: "Long freestanding scaffold deck on a concrete slab in a yard, with trees and site vehicles behind it",
    image: "/images/deck-day.jpg",
    aspect: "landscape",
    serviceSlug: "scaffolding",
    span: "lg:col-span-6",
  },
  {
    id: "deck-dusk",
    title: "A yard deck in late light",
    caption:
      "Another freestanding deck in a plant yard, photographed toward evening. The guard rails and the top platform are the point of the structure.",
    alt: "Freestanding scaffold platform in a yard at dusk, with trucks and a tree behind the guard rails",
    image: "/images/deck-dusk.jpg",
    aspect: "landscape",
    serviceSlug: "scaffolding",
    span: "lg:col-span-7",
  },
  {
    id: "formwork-slab",
    title: "Slab formwork on a roof pour",
    caption:
      "Shutters, beams, and stacked panels on the deck, with the crew setting the next opening before the concrete goes in.",
    alt: "Workers setting timber and panel formwork on a slab, with a stack of shutters in the foreground",
    image: "/images/formwork.jpg",
    aspect: "landscape",
    serviceSlug: "formwork",
    span: "lg:col-span-6",
  },
  {
    id: "formwork-falsework",
    title: "Falsework under a slab",
    caption:
      "Props and timber carrying the deck until the slab can take itself. The photograph is the arrangement, not a catalogue of leftover timber.",
    alt: "Slab falsework around concrete columns, with props and a shuttered soffit under a blue sky",
    image: "/images/formwork-falsework.jpg",
    aspect: "landscape",
    serviceSlug: "formwork",
    span: "lg:col-span-6",
  },
  {
    id: "coating-blast",
    title: "Abrasive preparation on steel",
    caption:
      "Helmet, hose, and a pipe that has to take a coat. Preparation is the job; the finish comes after the profile is honest.",
    alt: "Operator in a red blast helmet preparing a steel pipe with an abrasive nozzle",
    image: "/images/coating-blast.jpg",
    aspect: "portrait",
    serviceSlug: "surface-coatings",
    span: "lg:col-span-4",
  },
  {
    id: "coating-finish",
    title: "A tank after the coat",
    caption:
      "The same class of vessel once the system is on: rails, ladder, and a black finish ready to go back into service.",
    alt: "Horizontal black-coated tank on plinths, with a caged ladder and top rails",
    image: "/images/coating-finish.jpg",
    aspect: "portrait",
    serviceSlug: "surface-coatings",
    span: "lg:col-span-4",
  },
  {
    id: "event-stage",
    title: "Outdoor stage on a grass venue",
    caption:
      "Scaffold towers, LED screens, and a deck going up on the field. The structure is for the show, then it comes down.",
    alt: "Event stage under construction on grass, with red scaffold towers, grey LED screens, and a white tent",
    image: "/images/event-stage.jpg",
    aspect: "portrait",
    serviceSlug: "event-stages",
    span: "lg:col-span-6",
  },
  {
    id: "cradle-glass",
    title: "Cradle on a glass tower",
    caption:
      "A roof-hung platform on a tall glass face, when a tied scaffold would be the wrong amount of steel for the work.",
    alt: "Suspended cradle at the top of a glass office tower, with drop lines down the façade",
    image: "/images/cradle-glass.jpg",
    aspect: "portrait",
    serviceSlug: "cradle",
    span: "lg:col-span-3",
  },
  {
    id: "cradle-tank",
    title: "Cradle on a tank face",
    caption:
      "A suspended platform on a tall tank when a full tied scaffold would take longer than the work on the cladding.",
    alt: "Three workers on a suspended cradle against a tall silver storage tank",
    image: "/images/cradle.jpg",
    aspect: "portrait",
    serviceSlug: "cradle",
    span: "lg:col-span-3",
  },
  {
    id: "scissor",
    title: "Scissor platform",
    caption:
      "From the hire fleet. For firm, level ground, when standing a scaffold would take longer than the task itself.",
    alt: "Green mobile scissor lift with a railed platform and a black lifting stack",
    image: "/images/scissor-lift.jpg",
    aspect: "portrait",
    serviceSlug: "scissor-platforms",
    span: "lg:col-span-5",
  },
]

export function getProject(id: string) {
  return PROJECTS.find((project) => project.id === id)
}
