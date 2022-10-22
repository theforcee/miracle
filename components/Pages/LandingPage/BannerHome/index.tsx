import clsx from "clsx"
import Image from "next/image"
import { useEffect, useRef, useState } from "react"
import Button from "../../../Base/Button"
import styles from "./bannerhome.module.scss"

import imgLight from "public/images/light.png"
import imgMagma from "public/images/magma.png"
import imgMiracleBlock from "public/images/miracle-block.png"
import imgMiracleTitle from "public/images/miracle-title.svg"

const BannerHome = () => {
  const [scrollPosition, setScrollPosition] = useState<number>(0)
  const [scale, setScale] = useState<number>(1)

  useEffect(() => {
    const maxYOffset = window.innerHeight
    if (scrollPosition > maxYOffset) return
    let newScale = 1 - scrollPosition / maxYOffset
    if (newScale < 0.2) return
    setScale(newScale)
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
    <div className={clsx("h-[200vh] min-h-[1200px] relative overflow-hidden")}>
      <div className="sticky h-full top-0 left-0 flex flex-col overflow-hidden z-[2]">
        <div
          className={clsx(
            "relative z-[3] top-0 left-0 pt-[110px] text-center flex flex-col items-center",
          )}
        >
          <Image src={imgMiracleTitle} alt="" />
          <span className="mt-6 text-[22px] font-medium">
            Where global investors meet Web3 SEA builders
          </span>
          <span className="font-medium text-xl">
            Thursday, 08 December 2022 - Hanoi, Viet Nam
          </span>
          <Button className="mt-6" size="large">
            Buy Ticket
          </Button>
        </div>
        <div className="flex-1 mt-12 relative z-[3] flex flex-col items-center justify-center">
          <div
            className="relative flex-1 max-w-[800px] origin-bottom"
            style={{
              transform: `scale(${scale})`,
              transition: "transform 230ms ease-in-out",
            }}
          >
            <Image src={imgMiracleBlock} objectFit="contain" alt="" />
          </div>

          <p className="mt-auto text-4xl font-medium">What is Miracle Block</p>
          <div className="grid grid-cols-2 max-w-[770px] mx-auto gap-[50px] mt-10">
            <span>
              Miracle Block 2022 is a premier blockchain event where the leading
              voices, game changers, insiders of the industry gather and share
              their broad-sighted views on the market.
            </span>
            <span>
              We focus on connecting potential startups and accredited
              investors, new talents and veterans together, with an aim to build
              a meaningful networking circle for Web3 builders & supporters.
            </span>
          </div>
        </div>
      </div>
      <div className={styles.bannerDecor}>
        <div className="relative max-w-full">
          <Image src={imgMagma} alt="" layout="fill" priority />
        </div>
        <div className="relative max-w-full">
          <Image
            src={imgLight}
            alt=""
            layout="fill"
            objectFit="cover"
            priority
          />
        </div>
      </div>
    </div>
  )
}

export default BannerHome
