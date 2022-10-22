import clsx from "clsx"
import Image from "next/image"
import { useEffect, useState } from "react"
import Button from "../../../Base/Button"
import styles from "./bannerhome.module.scss"

import imgLight from "public/images/light.png"
import imgMagma from "public/images/magma.png"
import imgMiracleBlock from "public/images/miracle-block.png"
import imgMiracleBlockVertical from "public/images/miracle-block-vertical.svg"
import imgMiracleTitle from "public/images/miracle-title.svg"
import { landingPageStyles } from "../styles"

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
    <div
      className={clsx(
        "h-[200vh] min-h-[1200px] relative overflow-hidden",
        landingPageStyles.paddingX,
      )}
    >
      <div className="sticky h-full top-0 left-0 flex flex-col overflow-hidden z-[2]">
        <div
          className={clsx(
            "z-[3] top-0 left-0 pt-[110px] text-center flex flex-col items-center",
          )}
        >
          <div className="relative hidden sm:block">
            <Image src={imgMiracleTitle} alt="" />
          </div>
          <div className="relative sm:hidden">
            <Image src={imgMiracleBlockVertical} alt="" />
          </div>
          <div className="max-w-[276px] flex flex-col">
            <span className="mt-6 font-medium text-16/22 md:text-22/34">
              Where global investors meet Web3 SEA builders
            </span>
            <span className="font-medium text-16/18 mt-2 md:mt-0 md:text-xl">
              Thursday, 08 December 2022 - Hanoi, Viet Nam
            </span>
          </div>
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

          <h3
            className={clsx(
              landingPageStyles.heading3,
              "mt-[-209px] md:mt-[-171px]",
            )}
          >
            What is Miracle Block
          </h3>
          <div
            className={clsx(
              "grid grid-cols-1 max-w-[770px] mx-auto gap-4 mt-8 text-16/22",
              "sm:grid-cols-2 sm:gap-[50px]",
              "md:mt-10",
            )}
          >
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
