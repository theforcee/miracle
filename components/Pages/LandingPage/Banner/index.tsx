import clsx from "clsx"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"
import Image from "next/image"
import { useEffect, useRef } from "react"
import Button from "../../../Base/Button"
import styles from "./banner.module.scss"

import imgLight from "public/images/light.png"
import imgMagma from "public/images/magma.png"
import imgMiracleBlock from "public/images/miracle-block.png"
import imgMiracleTitle from "public/images/miracle-title.svg"

const Banner = () => {
  const ref = useRef<any>()
  gsap.registerPlugin(ScrollTrigger)

  useEffect(() => {
    const element = ref.current
    gsap.fromTo(
      element.querySelector("#title"),
      {
        transform: "translate(0px, 0px)",
      },
      {
        transform: "translate(0px, -600px)",
        scrollTrigger: {
          trigger: element.querySelector("#banner-intro"),
          start: "top top",
          end: "bottom center",
          scrub: true,
        },
      },
    )
  }, [])

  useEffect(() => {
    const element = ref.current
    gsap.fromTo(
      element.querySelector("#block"),
      {
        transform: "translate(0px, 0)",
      },
      {
        transform: "translate(0px, 0)",
        scrollTrigger: {
          trigger: element.querySelector("#banner-intro"),
          start: "top top",
          end: "bottom center",
          scrub: true,
        },
      },
    )
  }, [])

  useEffect(() => {
    const element = ref.current
    gsap.fromTo(
      element.querySelector("#miracle-block"),
      {
        transform: "scale(1)",
      },
      {
        transform: "scale(0.1)",
        scrollTrigger: {
          trigger: element.querySelector("#banner-intro"),
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      },
    )
  }, [])

  return (
    <div
      ref={(el) => (ref.current = el)}
      id="banner-intro"
      className={clsx("h-[250vh] min-h-[1200px] relative overflow-hidden")}
    >
      <div className="sticky h-full top-0 left-0 overflow-hidden z-[2]">
        <div
          id="title"
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
          <Button className="mt-6">Buy ticket</Button>
        </div>
        <div
          id="block"
          className="relative z-[3] flex flex-col items-center justify-center"
        >
          <div className={styles.miracleBlock} id="miracle-block">
            <Image src={imgMiracleBlock} layout="fill" alt="" />
          </div>
          <p className="text-4xl font-medium">What is Miracle Block</p>
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
      <div id="light" className={styles.bannerDecor}>
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

export default Banner
