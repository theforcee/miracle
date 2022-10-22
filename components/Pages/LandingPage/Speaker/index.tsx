import clsx from "clsx"
import Image from "next/image"
import Link from "next/link"
import { landingPageStyles } from "../styles"
import iconLinkedin from "/public/images/social/icon-linkedin.svg"
import imgSpeaker from "/public/images/speaker.png"

const Speaker = () => {
  return (
    <div className="flex flex-col items-center mt-[60px] xs:mt-20 md:mt-[120px]">
      <h3 className={landingPageStyles.heading3}>Speaker line-up</h3>
      <p className="mt-4 text-16/22 text-center max-w-[726px] xs:mt-[18px]">
        Share their clear - sighted view on the market via noteworthy live
        panel, fireside chats, keynotes and pitching showcases, paving the way
        to networking circle.
      </p>
      <div
        className={clsx(
          "grid grid-cols-2 gap-5  w-full mt-8",
          "xs:mt-10 xs:gap-y-6",
          "sm:grid-cols-3",
          "md:grid-cols-4 md:mt-[62px]",
          "lg:grid-cols-5",
        )}
      >
        {Array(15)
          .fill(1)
          .map((item, index) => {
            return (
              <div key={item + index} className="flex flex-col items-center">
                <div
                  className="flex flex-col items-center w-full"
                  style={{
                    background: "url(/images/bg-speaker.png)",
                    backgroundSize: "contain",
                  }}
                >
                  <div className="relative w-full rounded-full px-[22px] xs:px-[29px]">
                    <Image src={imgSpeaker} alt="" layout="responsive" />
                  </div>
                  <span className="mt-3 text-lg font-medium">
                    Esther Howard
                  </span>
                  <span className="text-16/22">Position</span>
                  <span className="text-16/22">Organization</span>
                </div>
                <div className="relative w-3 h-3 xs:w-4 xs:h-4 mt-2 cursor-pointer">
                  <Link href="#">
                    <Image src={iconLinkedin} alt="" />
                  </Link>
                </div>
              </div>
            )
          })}
      </div>
    </div>
  )
}

export default Speaker
