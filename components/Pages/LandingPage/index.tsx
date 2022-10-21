import React from "react"
import Banner from "./Banner"
import FAQ from "./FAQ"
import Organizer from "./Organizer"
import Speaker from "./Speaker"

const LandingPage = () => {
  return (
    <div className="max-w-[1110px] m-auto pt-20">
      <Banner />
      <Speaker />
      <Organizer />
      <FAQ />
    </div>
  )
}

export default LandingPage
