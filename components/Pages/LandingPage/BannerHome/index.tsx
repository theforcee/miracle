import clsx from "clsx"
import Image from "next/image"
import { useEffect, useRef } from "react"
import Button from "../../../Base/Button"
import styles from "./bannerhome.module.scss"

import gsap from "gsap"
import ScrollTrigger from "gsap/dist/ScrollTrigger"
import imgLight from "public/images/light.png"
import imgMagma from "public/images/magma.png"
import imgMiracleBlockVertical from "public/images/miracle-block-vertical.svg"
import imgMiracleBlock from "public/images/miracle-block.png"
import imgMiracleTitle from "public/images/miracle-title.svg"
import { landingPageStyles } from "../styles"

const BannerHome = () => {
  const ref = useRef<any>()
  gsap.registerPlugin(ScrollTrigger)

  useEffect(() => {
    const element = ref.current
    const elBlock = element.querySelector("#miracle-block")
    const elImage = element.querySelector("#miracle-image")
    const isMobile = window.innerWidth < 640
    const minScale = isMobile ? 0.2 : 0.15
    const space = isMobile ? 50 : 20
    // console.log(elBlock.offsetHeight, elImage.offsetHeight, window.innerWidth)

    gsap.fromTo(
      elImage,
      {
        transform: "scale(1)",
        y: 0,
      },
      {
        transform: `scale(${minScale})`,
        y: elBlock.offsetHeight - elImage.offsetHeight - space,
        scrollTrigger: {
          trigger: elBlock,
          start: "top center",
          end: "bottom top",
          scrub: true,
          // markers: true,
        },
      },
    )

    !isMobile &&
      gsap.fromTo(
        elBlock,
        {
          marginLeft: -100,
        },
        {
          marginLeft: 0,
          scrollTrigger: {
            trigger: elBlock,
            start: "top center",
            end: "bottom top",
            scrub: true,
          },
        },
      )

    // window.addEventListener("resize", () => {})
  }, [])

  return (
    <div
      ref={ref}
      className={clsx(
        "h-[200vh] min-h-[1200px] relative overflow-hidden",
        landingPageStyles.paddingX,
      )}
    >
      <div className="relative h-full top-0 left-0 flex flex-col overflow-hidden z-[2]">
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
          <div className="max-w-[276px] flex flex-col sm:max-w-full">
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
          <div className="flex-1 flex max-w-[800px]" id="miracle-block">
            <div id="miracle-image" className="relative origin-bottom h-fit">
              <Image src={imgMiracleBlock} objectFit="contain" alt="" />
            </div>
          </div>

          <h3 className={clsx(landingPageStyles.heading3)}>
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
