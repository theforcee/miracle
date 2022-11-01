import clsx from "clsx"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { headerRoutes, RouteTypes } from "../../../utils/constants"
import Button from "../Button"

import logo from "/public/logo.svg"

const heightDefault = 100
const heightScrolled = 80
const HeaderDefaultLayout = (props: any) => {
  const { asPath } = useRouter()
  const [scrollPosition, setScrollPosition] = useState<number>(0)
  const [opacity, setOpacity] = useState<number>(0)
  const [height, setHeight] = useState<number>(heightDefault)
  const maxYOffset = 1000
  const [open, setOpen] = useState<boolean>(false)

  useEffect(() => {
    if (scrollPosition > maxYOffset) return
    let newOpacity = scrollPosition / maxYOffset - 0.2
    const newHeight =
      heightDefault -
      scrollPosition / (maxYOffset / (heightDefault - heightScrolled))

    setOpacity(newOpacity)
    setHeight(newHeight)
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

  const handleOpenHeader = () => {
    setOpen((prevState) => !prevState)
  }

  const renderHeaderMobile = () => {
    if (!open) return <></>

    return (
      <div className="fixed top-0 left-0 w-full h-screen overflow-y-auto bg-[#091930] flex flex-col p-5 pb-8 z-50">
        <div className="flex justify-between items-center">
          <div className="relative w-[38px]">
            <Image src={logo} alt="" layout="responsive" />
          </div>
          <div
            className={clsx("uppercase font-medium flex")}
            onClick={handleOpenHeader}
          >
            <span className="cursor-pointer">Close</span>
          </div>
        </div>
        <div className="flex flex-col gap-9 text-white justify-center w-full text-left text-lg font-medium mt-[84px] xs:text-center">
          {headerRoutes.map((item: RouteTypes, index: number) => (
            <Link key={index} href={item.uri}>
              <a
                className={clsx(
                  "hover:tracking-wider duration-500 text-2xl uppercase",
                  {
                    "text-main": asPath === item.uri,
                  },
                )}
                target={item.target}
              >
                {item.label}
              </a>
            </Link>
          ))}
        </div>
      </div>
    )
  }

  return (
    <div
      className={clsx("w-full fixed top-0 -translate-x-1/2 left-1/2 z-50")}
      style={{
        background: `rgba(28, 45, 96,${opacity})`,
        height: height,
      }}
    >
      <nav
        className={clsx(
          "h-full w-full mx-auto flex items-center justify-between max-w-[1110px] overflow-hidden px-6",
          "lg:px-0",
        )}
      >
        <Link href="/">
          <a className="relative w-[38px] md:w-[57px]">
            <Image src={logo} layout="responsive" alt="" />
          </a>
        </Link>
        <div
          className={clsx(
            "gap-6 uppercase font-medium text-13/18 hidden sm:gap-10 md:text-base md:gap-12 xs:flex xs:items-center",
          )}
        >
          {headerRoutes.map((item: RouteTypes, index: number) => (
            <Link key={index} href={item.uri}>
              <a
                target={item.target}
                className={clsx({
                  "text-main": asPath === item.uri,
                  "pointer-events-none": item.disabled,
                })}
              >
                {item.label}
              </a>
            </Link>
          ))}
          <Link href="#">
            <a>
              <Button size="normal">Buy Ticket</Button>
            </a>
          </Link>
        </div>
        <div
          className={clsx("uppercase font-medium flex xs:hidden")}
          onClick={handleOpenHeader}
        >
          <span className="cursor-pointer">Menu</span>
        </div>
      </nav>
      {renderHeaderMobile()}
    </div>
  )
}

export default HeaderDefaultLayout
