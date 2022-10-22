import clsx from "clsx"
import Image from "next/image"
import Link from "next/link"
import Button from "../../../Base/Button"
import iconEliteStartups from "/public/images/landing-page/icon-elite-startups.svg"
import iconLeadingVoice from "/public/images/landing-page/icon-leading-voice.svg"
import iconTopWeb3 from "/public/images/landing-page/icon-top-web3.svg"

const tickets = [
  { icon: iconLeadingVoice, title: "Leading Voice Insight" },
  { icon: iconEliteStartups, title: "Elite Startups x Partners" },
  { icon: iconTopWeb3, title: "Top Web3 Builders" },
]

const Ticket = () => {
  return (
    <div
      className={clsx(
        "flex flex-col flex-wrap justify-center items-center gap-4 px-7 mt-8",
        "xs:flex-row xs:gap-5 xs:mt-[47px]",
        "md:px-0",
      )}
    >
      {tickets.map((item) => (
        <div
          key={item.title}
          className={clsx(
            "flex flex-col justify-center items-center w-[272px] h-[272px] bg-miracleTransparent-10 rounded-xl",
            "xs:w-[320px] xs:h-[320px] ",
            "sm:bg-transparent",
            "md:w-[356px] md:h-[356px]",
          )}
        >
          <div
            className={clsx(
              "relative w-16 h-16 flex justify-center items-center",
              "xs:w-20 xs:h-20",
            )}
          >
            <Image src={item.icon} alt={item.title} />
          </div>
          <span
            className={clsx(
              "mt-[27px] max-w-[200px] text-22/30 text-center font-medium",
              "xs:text-[31.5px] xs:leading-[43.76px] xs:max-w-[215px]",
            )}
          >
            {item.title}
          </span>
          <div className="mt-5 xs:mt-[28.45px]">
            <Link href="#">
              <Button size="small">Buy Ticket</Button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Ticket
