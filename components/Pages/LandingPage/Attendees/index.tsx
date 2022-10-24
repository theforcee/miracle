import clsx from "clsx"
import Image from "next/image"
import { landingPageStyles } from "../styles"
import iconCLevel from "/public/images/landing-page/icon-c-level.svg"
import iconInvestors from "/public/images/landing-page/icon-investors.svg"
import iconMediaPartners from "/public/images/landing-page/icon-media-partners.svg"
import iconSpeakes from "/public/images/landing-page/icon-speakers.svg"

const attendees = [
  { icon: iconCLevel, title: "500", subtitle: "C-level attendees" },
  { icon: iconSpeakes, title: "+15", subtitle: "Speakers" },
  { icon: iconInvestors, title: "+50", subtitle: "Investors" },
  { icon: iconMediaPartners, title: "+20", subtitle: "Media partners" },
]

const Attendees = () => {
  return (
    <div className="mt-[60px] xs:mt-20 md:mt-[57px]">
      <h3 className={landingPageStyles.heading3}>Attendees</h3>
      <div className="flex flex-wrap justify-center gap-5 mt-7 xs:mt-12 md:mt-20 ">
        {attendees.map((item: any) => (
          <div
            key={item.title}
            className={clsx(
              "flex flex-col items-center justify-center w-[164px] h-[164px] bg-miracleTransparent-10 rounded-xl",
              "xs:w-[200px] xs:h-[200px]",
              "md:w-[262px] md:h-[262px]",
            )}
          >
            <div
              className={clsx(
                "relative w-[42px] h-[42px] flex items-center justify-center",
                "xs:w-[66px] xs:h-[66px]",
                "md:w-[84px] md:h-[84px]",
              )}
            >
              <Image src={item.icon} alt={item.title} />
            </div>
            <span
              className={clsx(
                "text-32/38 font-semibold mt-3",
                "xs:text-3xl",
                "md:text-4xl",
              )}
            >
              {item.title}
            </span>
            <span className={clsx("text-14/20 font-medium", "text-18/22")}>
              {item.subtitle}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Attendees
