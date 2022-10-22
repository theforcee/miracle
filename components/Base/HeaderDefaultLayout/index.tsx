import clsx from "clsx"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { headerRoutes, RouteTypes } from "../../../utils/constants"

import logo from "/public/logo.svg"

const HeaderDefaultLayout = (props: any) => {
  const { asPath } = useRouter()
  const [scrollPosition, setScrollPosition] = useState<number>(0)
  const [opacity, setOpacity] = useState<number>(0)
  const maxYOffset = 1000

  useEffect(() => {
    if (scrollPosition > maxYOffset) return
    let newOpacity = scrollPosition / maxYOffset - 0.4
    setOpacity(newOpacity)
  }, [scrollPosition])

  const handleScroll = () => {
    const position = window.pageYOffset
    setScrollPosition(position)
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true })

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <div
      className={clsx("w-full fixed top-0 -translate-x-1/2 left-1/2 z-50 h-20")}
      style={{
        background: `rgba(50,50,50,${opacity})`,
      }}
    >
      <nav
        className={clsx(
          "h-full w-full mx-auto flex items-center justify-between max-w-[1110px] overflow-hidden px-6",
          "lg:px-0",
        )}
      >
        <Link href="/">
          <a>
            <Image src={logo} layout="fixed" alt="" />
          </a>
        </Link>
        <div className={clsx("flex gap-5 uppercase font-medium")}>
          {headerRoutes.map((item: RouteTypes, index: number) => (
            <Link key={index} href={item.uri}>
              <a
                target={item.target}
                className={clsx({
                  "text-main": asPath === item.uri,
                })}
              >
                {item.label}
              </a>
            </Link>
          ))}
        </div>
      </nav>
    </div>
  )
}

export default HeaderDefaultLayout
