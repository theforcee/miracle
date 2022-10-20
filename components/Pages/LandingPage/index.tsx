import React from "react"
import FAQ from "./FAQ"
import Organizer from "./Organizer"
import Speaker from "./Speaker"
import Sponsor from "./Sponser"

const LandingPage = () => {
  return (
    <div className="bg-miracleGray max-w-[1110px] m-auto pt-20">
      <Speaker />
      <Organizer />
      <Sponsor />
      <FAQ />
    </div>
  )
}

export default LandingPage
