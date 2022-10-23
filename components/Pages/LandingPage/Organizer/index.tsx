import clsx from "clsx"
import Image from "next/image"
import React from "react"
import BorderAnimation from "../../../Base/BorderAnimation"
import { landingPageStyles } from "../styles"
import logoIcetea from "/public/images/logo-icetea.svg"

const OrganizorBox = () => {
  return (
    <div>
      <BorderAnimation>
        <div className="relative">
          <Image src={logoIcetea} alt="" />
        </div>
      </BorderAnimation>
    </div>
  )
}

const Organizer = () => {
  return (
    <div className="flex flex-col mt-[60px] xs:mt-20 md:mt-[120px]">
      <h3 className={landingPageStyles.heading3}>Co-Organizer</h3>
      <div
        className={clsx(
          "grid grid-cols-2 gap-5 mt-7 justify-left items-center w-full m-auto",
          "xs:mt-8",
          "sm:grid-cols-3",
          "md:mt-10 md:w-4/5",
          "lg:w-3/5",
        )}
      >
        {Array(3)
          .fill(1)
          .map((item, index) => {
            return <OrganizorBox key={item + index} />
          })}
      </div>
      <h3 className={clsx(landingPageStyles.heading3, "mt-7 xs:mt-8 md:mt-10")}>
        Sponsor
      </h3>
      <div
        className={clsx(
          "grid grid-cols-2 gap-5 mt-10 justify-left items-center w-full",
          "xs:mt-8 sm:grid-cols-3",
          "md:mt-10 md:grid-cols-4",
          "lg:grid-cols-5",
        )}
      >
        {Array(15)
          .fill(1)
          .map((item, index) => {
            return <OrganizorBox key={item + index} />
          })}
      </div>
    </div>
  )
}

export default Organizer
