import clsx from "clsx"
import Attendees from "./Attendees"
import BannerHome from "./BannerHome"
import Expect from "./Expect"
import FAQ from "./FAQ"
import Organizer from "./Organizer"
import Speaker from "./Speaker"
import { landingPageStyles } from "./styles"
import Ticket from "./Ticket"

const LandingPage = () => {
  return (
    <div className="w-full">
      <BannerHome />
      <div
        className={clsx("max-w-[1110px] m-auto", landingPageStyles.paddingX)}
      >
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
