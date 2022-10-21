import clsx from "clsx"
import Image from "next/image"
import React from "react"
import styles from "./banner.module.scss"

import imgLight from "public/images/light.png"
import imgMagma from "public/images/magma.png"
import imgMiracleTitle from "public/images/miracle-title.svg"
import imgMiracleBlock from "public/images/miracle-block.png"
import Button from "../../../Base/Button"

const Banner = () => {
  return (
    <div className={clsx("h-screen")}>
      <div className="">
        <Image src={imgMiracleTitle} alt="" />
        <h2>Where global investors meet Web3 SEA builders</h2>
        <h3>Thursday, 08 December 2022 - Hanoi, Viet Nam</h3>
        <Button>Buy ticket</Button>
      </div>
      <div className="">
        <Image src={imgMiracleBlock} alt="" />
        <p>What is Miracle Block</p>
      </div>
      <div className={styles.bannerDecor}>
        <div className="relative">
          <Image src={imgLight} alt="" priority />
        </div>
        <div className="relative">
          <Image src={imgMagma} alt="" priority />
        </div>
      </div>
    </div>
  )
}

export default Banner
