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

export const URLS = {
  HOME: "/",
  SCHEDULE: "/schedule",
  SPONSOR: "/sponsor",
  DEMO_DAY: "/demo-day",
  TRAVEL: "/travel",
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
    uri: URLS.HOME,
    disabled: false,
  },
  {
    label: "Schedule",
    target: "_self",
    uri: URLS.SCHEDULE,
    disabled: true,
  },
  {
    label: "Sponsor",
    target: "_self",
    uri: URLS.SPONSOR,
    disabled: true,
  },
  {
    label: "Demo Day",
    target: "_self",
    uri: URLS.DEMO_DAY,
    disabled: false,
  },
  {
    label: "Travel",
    target: "_self",
    uri: URLS.TRAVEL,
    disabled: true,
  },
]
