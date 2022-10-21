import React from "react"
import Attendees from "./Attendees"
import Banner from "./Banner"
import FAQ from "./FAQ"
import Organizer from "./Organizer"
import Speaker from "./Speaker"
import Ticket from "./Ticket"

const LandingPage = () => {
  return (
    <div className="max-w-[1110px] m-auto pt-20">
      <Banner />
      <Ticket />
      <Attendees />
      <Speaker />
      <Organizer />
      <FAQ />
    </div>
  )
}

export default LandingPage
