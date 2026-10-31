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
