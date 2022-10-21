import React from "react"
import Attendees from "./Attendees"
import Banner from "./Banner"
import Expect from "./Expect"
import FAQ from "./FAQ"
import Organizer from "./Organizer"
import Speaker from "./Speaker"
import Ticket from "./Ticket"

const LandingPage = () => {
  return (
    <div className="w-full">
      <Banner />
      <div className="max-w-[1110px] m-auto px-6 lg:px-0">
        <Ticket />
        <Attendees />
        <Expect />
        <Speaker />
        <Organizer />
        <FAQ />
      </div>
    </div>
  )
}

export default LandingPage
