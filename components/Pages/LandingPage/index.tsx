import Attendees from "./Attendees"
import BannerHome from "./BannerHome"
import Expect from "./Expect"
import FAQ from "./FAQ"
import Organizer from "./Organizer"
import Speaker from "./Speaker"
import Ticket from "./Ticket"

const LandingPage = () => {
  return (
    <div className="w-full">
      <BannerHome />
      <div className="max-w-[1110px] m-auto">
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
