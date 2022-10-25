import { HTMLAttributeAnchorTarget } from "react"

type HeadDefaultTypes = {
  image: string
  title: string
  description: string
  keywords: string
}

export const headDefault: HeadDefaultTypes = {
  description: "Where global investors meet Web3 SEA builders",
  image:
    "https://d1j2c9jkfhu70p.cloudfront.net/Miracle_Thumbnail_4e2737e607.png",
  title: "Miracle Block",
  keywords: "",
}

export type RouteTypes = {
  label: string
  uri: string
  target: HTMLAttributeAnchorTarget
  disabled: boolean
}

export const headerRoutes: Array<RouteTypes> = [
  {
    label: "Home",
    target: "_self",
    uri: "/",
    disabled: false,
  },
  {
    label: "Schedule",
    target: "_self",
    uri: "/schedule",
    disabled: true,
  },
  {
    label: "Sponsor",
    target: "_self",
    uri: "/sponsor",
    disabled: true,
  },
  {
    label: "Demo Day",
    target: "_self",
    uri: "/demo-day",
    disabled: false,
  },
  {
    label: "Travel",
    target: "_self",
    uri: "/travel",
    disabled: true,
  },
]
