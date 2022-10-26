import clsx from "clsx"
import React from "react"
import { landingPageStyles } from "../styles"
import Showcase from "./Showcase"
import TopProject from "./TopProject"

const DemoDay = () => {
  return (
    <div className="w-full">
      <div
        className={clsx(
          "max-w-[1110px] m-auto pt-[114px]",
          landingPageStyles.paddingX,
        )}
      >
        <Showcase />
        <TopProject />
      </div>
    </div>
  )
}

export default DemoDay
