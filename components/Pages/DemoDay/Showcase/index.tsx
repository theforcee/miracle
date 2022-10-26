import Image from "next/image"
import Link from "next/link"
import "swiper/css/navigation"
import { SwiperSlide } from "swiper/react"
import Button from "../../../Base/Button"
import BaseSwiper from "../../../Base/Swiper"
import { landingPageStyles } from "../../styles"
import iconPlay from "/public/images/demo-day/icon-play.svg"
import bannerEternal from "/public/images/demo-day/eternal.png"
import bannerGummy from "/public/images/demo-day/gummy.png"
import bannerHashbon from "/public/images/demo-day/hashbon-pass.png"
import bannerTooNFT from "/public/images/demo-day/tooNft.png"
import bannerTrouble from "/public/images/demo-day/trouble-punk.png"
import bannerVictory from "/public/images/demo-day/victory-point.png"

const showcases = [
  {
    title: "Gummys",
    banner: bannerGummy,
    hashtags: ["#Web3video", "#Streamingplatform"],
    redirect: "https://ilap.icetea.io/voting/trouble-punk-cyber-galz-8108464",
    videoSource: "",
  },
  {
    title: "Eternal Glory",
    banner: bannerEternal,
    hashtags: ["#Gamefi"],
    redirect: "https://ilap.icetea.io/voting/victory-point-4203451",
    videoSource: "",
  },
  {
    title: "Trouble Punk | Cyber Galz",
    banner: bannerTrouble,
    hashtags: ["#Gameplatform"],
    redirect: "https://ilap.icetea.io/voting/toomics-897567 7",
    videoSource: "",
  },
  {
    title: "Victory Point",
    banner: bannerVictory,
    hashtags: ["#Web3game"],
    redirect: "https://ilap.icetea.io/voting/gummys-1385161",
    videoSource: "true",
  },
  {
    title: "TooNFT",
    banner: bannerTooNFT,
    hashtags: ["#Webtoonplatform"],
    redirect: "https://ilap.icetea.io/voting/eternal-glory-945905",
    videoSource: "true",
  },
  {
    title: "Hashbon Pass",
    banner: bannerHashbon,
    hashtags: ["#Digital ID", "#KYC"],
    redirect: "https://ilap.icetea.io/voting/hashbon-pass-629576",
    videoSource: "",
  },
]

const Showcase = () => {
  return (
    <div>
      <h3 className={landingPageStyles.heading3}>ILAP startups showcase</h3>
      <div className="mt-1 flex flex-col items-center text-16/22 font-normal">
        <span>
          Get your brand in the sights of essential community leaders and
          next-generation founders.
        </span>
        <span>
          Request a sponsorship and exhibitor package or reach out to us
          directly!
        </span>
      </div>
      <div className="mt-10" id="showcase">
        <BaseSwiper showNavigation={true}>
          {showcases.map((showcase) => (
            <SwiperSlide style={{ height: "100%" }} key={showcase.title}>
              <div className="relative rounded-xl">
                <Image src={showcase.banner} layout="responsive" alt="" />
                {showcase.videoSource && (
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 cursor-pointer">
                    <div className="relative w-[60px]">
                      <Image src={iconPlay} layout="responsive" alt="" />
                    </div>
                  </div>
                )}
                <div className="absolute bottom-[65px] left-[52px]">
                  <span className={landingPageStyles.heading3}>
                    {showcase.title}
                  </span>
                  <div className="mt-2 font-medium flex flex-wrap">
                    {showcase.hashtags.map((hashtag) => (
                      <span
                        key={hashtag}
                        className="font-semibold text-20/26 px-2 py-1 bg-[#A5FAFF33] rounded-lg mr-4 last:mr-0"
                      >
                        {hashtag}
                      </span>
                    ))}
                  </div>
                  <Link href={showcase.redirect}>
                    <a target="_blank" rel="noreffer">
                      <Button size="large" className="mt-7">
                        View more
                      </Button>
                    </a>
                  </Link>
                </div>
              </div>
              <div className="swiper-lazy-preloader swiper-lazy-preloader-white" />
            </SwiperSlide>
          ))}
        </BaseSwiper>
      </div>
    </div>
  )
}

export default Showcase
