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
          "grid grid-cols-2 gap-5 w-full mt-8 gap-y-8",
          "xs:mt-10 xs:gap-y-11",
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
                  <div className="relative w-full rounded-xl px-[22px] xs:px-[29px]">
                    <Image src={imgSpeaker} alt="" layout="responsive" />
                    <Link href="#">
                      <div
                        className={clsx(
                          "absolute bottom-0 right-[22px] bg-[#0A66C2] w-6 h-6 flex items-center justify-center rounded-tl-xl rounded-br-xl cursor-pointer",
                          "xs:right-[29px] xs:w-7 xs:h-7",
                        )}
                      >
                        <div className="relative w-4 h-4 xs:w-[14.25px] xs:h-[14.25px]">
                          <Image
                            src={iconLinkedin}
                            layout="responsive"
                            alt=""
                          />
                        </div>
                      </div>
                    </Link>
                  </div>
                  <span className="mt-3 text-lg font-medium">
                    Esther Howard
                  </span>
                  <span className="text-16/22 mt-0.5">Position</span>
                  <span className="text-16/22">Organization</span>
                </div>
              </div>
            )
          })}
      </div>
    </div>
  )
}

export default Speaker
