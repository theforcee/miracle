import { HTMLAttributeAnchorTarget } from "react"

type HeadDefaultTypes = {
  image: string
  title: string
  description: string
  keywords: string
}

export const headDefault: HeadDefaultTypes = {
  description: "Where global investors meet Web3 SEA builders",
  image: "https://d1j2c9jkfhu70p.cloudfront.net/Thumbnail_2_7bc61c9253.png",
  title: "Miracle Block",
  keywords: "",
}

export type RouteTypes = {
  label: string
  uri: string
  target: HTMLAttributeAnchorTarget
}

export const headerRoutes: Array<RouteTypes> = [
  {
    label: "Home",
    target: "_self",
    uri: "/",
  },
  {
    label: "Schedule",
    target: "_self",
    uri: "/schedule",
  },
  {
    label: "Sponsor",
    target: "_self",
    uri: "/sponsor",
  },
  {
    label: "Demo Day",
    target: "_self",
    uri: "/demo-day",
  },
  {
    label: "Travel",
    target: "_self",
    uri: "/travel",
  },
]
