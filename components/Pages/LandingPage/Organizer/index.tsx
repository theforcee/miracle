import clsx from "clsx"
import Image from "next/image"
import React from "react"
import Button from "../../../Base/Button"
import GradientBorder from "../../../Base/GradientBorder"
import { landingPageStyles } from "../../styles"
import logoIcetea from "/public/images/logo-icetea.svg"

const OrganizorBox = () => {
  return (
    <div>
      <GradientBorder className="flex items-center justify-center py-[26.5px] px-5 rounded-[10px] cursor-pointer 3xs:py-[34px] 3xs:px-[26px]">
        <div className="relative w-[120px] 3xs:w-[154px]">
          <Image src={logoIcetea} layout="responsive" alt="" />
        </div>
      </GradientBorder>
    </div>
  )
}

const Organizer = () => {
  return (
    <div className="flex flex-col mt-[60px] xs:mt-20 md:mt-[144px]">
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
          "grid grid-cols-2 gap-5 mt-7 justify-left items-center w-full",
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
      <div className="flex justify-center mt-20">
        <Button className="text-21/27 px-6 py-[10px] rounded-[100px] font-bold">
          Request a package
        </Button>
      </div>
    </div>
  )
}

export default Organizer
