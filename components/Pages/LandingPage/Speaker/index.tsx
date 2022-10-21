import Image from "next/image"
import Link from "next/link"
import iconLinkedin from "/public/images/social/icon-linkedin.svg"
import imgSpeaker from "/public/images/speaker.png"

const Speaker = () => {
  return (
    <div className="flex flex-col items-center mt-[120px]">
      <h3 className="mt-[18px] text-4xl font-medium">Speaker line-up</h3>
      <p className="text-16px text-center max-w-[726px]">
        Share their clear - sighted view on the market via noteworthy live
        panel, fireside chats, keynotes and pitching showcases, paving the way
        to networking circle.
      </p>
      <div className="grid grid-cols-5 gap-y-6 mt-[62px] w-full">
        {Array(15)
          .fill(1)
          .map((item, index) => {
            return (
              <div key={item + index} className="flex flex-col items-center">
                <div
                  className="flex flex-col items-center w-full"
                  style={{ background: "url(/images/bg-speaker.png)" }}
                >
                  <div className="relative w-[148px] h-[148px] rounded-full">
                    <Image src={imgSpeaker} alt="" />
                  </div>
                  <span className="mt-3 font-medium">Esther Howard</span>
                  <span>Position</span>
                  <span>Organization</span>
                </div>
                <div className="relative w-4 h-4 mt-2 cursor-pointer">
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
