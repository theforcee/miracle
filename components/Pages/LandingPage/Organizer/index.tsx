import Image from "next/image"
import React from "react"
import BorderAnimation from "../../../Base/BorderAnimation"
import logoIcetea from "/public/images/logo-icetea.svg"

const OrganizorBox = () => {
  return (
    <div className="w-[206px]">
      <BorderAnimation>
        <div className="relative">
          <Image src={logoIcetea} alt="" />
        </div>
      </BorderAnimation>
    </div>
    // <div className="flex flex-col items-center border border-white rounded-[10px] px-[25.5px] py-[33px]">
  )
}

const Organizer = () => {
  return (
    <div className="flex flex-col items-center mt-[66px]">
      <h3 className="text-4xl font-medium">Co-Organizer</h3>
      <div className="flex flex-wrap gap-5 mt-20 w-full justify-center">
        {Array(3)
          .fill(1)
          .map((item, index) => {
            return <OrganizorBox key={item + index} />
          })}
      </div>
      <h3 className="mt-[18px] text-4xl font-medium">Sponsor </h3>
      <div className="flex flex-wrap gap-5 mt-[84px] w-full justify-center">
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
