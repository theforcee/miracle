import clsx from "clsx"
import Image from "next/image"
import Link from "next/link"
import styles from "./ticket.module.scss"
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
    <div className="flex gap-5">
      {tickets.map((item) => (
        <div
          key={item.title}
          className="flex flex-col justify-center items-center w-[356px] h-[356px]"
        >
          <div className="relative w-20 h-20 flex justify-center items-center">
            <Image src={item.icon} alt={item.title} />
          </div>
          <span className="mt-[27px] max-w-[215px] text-[31.5px] leading-[43.76px] text-center font-medium">
            {item.title}
          </span>
          <div className="mt-[28.45px]">
            <Link href="#">
              <button
                className={clsx(
                  styles.btnMainGradient,
                  "text-16/20 font-semibold",
                )}
              >
                Buy Ticket
              </button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Ticket
