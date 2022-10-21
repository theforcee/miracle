import Image from "next/image"
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
    <div className="mt-[107px]">
      <h3 className="text-4xl font-medium text-center">Attendees</h3>
      <div className="flex flex-wrap justify-center gap-5 mt-20">
        {attendees.map((item: any) => (
          <div
            key={item.title}
            className="flex flex-col items-center justify-center w-[262px] h-[262px] bg-[#A5FAFF1A] rounded-xl "
          >
            <div className="relative w-[84px] h-[84px] flex items-center justify-center">
              <Image src={item.icon} alt={item.title} />
            </div>
            <span className="text-4xl font-semibold mt-3">{item.title}</span>
            <span className="text-18/22 font-medium">{item.subtitle}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Attendees
