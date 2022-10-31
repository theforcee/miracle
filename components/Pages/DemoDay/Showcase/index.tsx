import clsx from "clsx"
import Image from "next/image"
import Link from "next/link"
import { useRef, useState } from "react"
import "swiper/css/navigation"
import { SwiperSlide } from "swiper/react"
import Button from "../../../Base/Button"
import BaseSwiper from "../../../Base/Swiper"
import { landingPageStyles } from "../../styles"
import bannerEternal from "/public/images/demo-day/eternal.png"
import bannerGummy from "/public/images/demo-day/gummy.png"
import bannerHashbon from "/public/images/demo-day/hashbon-pass.png"
import iconPlay from "/public/images/demo-day/icon-play.svg"
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
    // banner: bannerVictory,
    hashtags: ["#Web3game"],
    redirect: "https://ilap.icetea.io/voting/gummys-1385161",
    videoSource: "/images/demo-day/victory-point-office.mp4",
  },
  {
    title: "TooNFT",
    // banner: bannerTooNFT,
    hashtags: ["#Webtoonplatform"],
    redirect: "https://ilap.icetea.io/voting/eternal-glory-945905",
    videoSource: "/images/demo-day/victory-point-office2.mp4",
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
  const videoRefs = useRef([])

  const handlePlayVideo = (index: any) => {
    const currentVideo = videoRefs?.current[index]

    if (!currentVideo.paused) currentVideo.pause()
    else currentVideo.play()
  }

  const handleSlideChange = (swiper: any) => {
    const prevIndex = swiper.previousIndex - 1
    const realIndex = swiper.realIndex

    // Stop previous video was played
    if (prevIndex >= 0) {
      if (showcases[prevIndex].videoSource) {
        const prevVideo = videoRefs.current[prevIndex]
        prevVideo.pause()
      }
    }

    // Start play video from start
    if (showcases[realIndex].videoSource) {
      console.log("doi chay video xiu", swiper)
      swiper.autoplay.stop()
      const currentVideo = videoRefs.current[realIndex]
      currentVideo.currentTime = 0
      currentVideo.play()
    } else {
      swiper.autoplay.start()
    }
  }

  return (
    <div>
      <h3 className={landingPageStyles.heading3}>ILAP startups showcase</h3>
      <div
        className={clsx(
          "mt-1 flex flex-col items-center text-14/20 text-center font-light",
          "xs:text-15/21",
          "md:text-16/22 md:font-normal md:text-left",
        )}
      >
        <span>
          Get your brand in the sights of essential community leaders and
          next-generation founders.
        </span>
        <span>
          Request a sponsorship and exhibitor package or reach out to us
          directly!
        </span>
      </div>
      <div className="mt-5 md:mt-10" id="showcase">
        <BaseSwiper showNavigation={true} handleSlideChange={handleSlideChange}>
          {showcases.map((showcase, index) => (
            <SwiperSlide style={{ height: "100%" }} key={showcase.title}>
              <div className="relative rounded-xl overflow-hidden group">
                {showcase.banner && (
                  <Image src={showcase.banner} layout="responsive" alt="" />
                )}
                {showcase.videoSource && (
                  <div className="w-full">
                    <video
                      ref={(element) => {
                        videoRefs.current[index] = element
                      }}
                    >
                      <source src="/images/demo-day/victory-point-office.mp4" />
                    </video>
                  </div>
                )}
                {showcase.videoSource && (
                  <div
                    className="group-hover:visible invisible absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 cursor-pointer"
                    onClick={() => {
                      handlePlayVideo(index)
                    }}
                  >
                    <div className="relative w-[60px]">
                      <Image src={iconPlay} layout="responsive" alt="" />
                    </div>
                  </div>
                )}
              </div>
              <div className="swiper-lazy-preloader swiper-lazy-preloader-white" />
              <div
                className={clsx(
                  "mt-4",
                  "md:absolute md:bottom-[65px] md:left-[52px]",
                )}
              >
                <span
                  className={clsx(
                    "text-22/28 font-medium text-center xs:text-3xl md:text-4xl",
                  )}
                >
                  {showcase.title}
                </span>
                <div className="mt-2 font-medium flex flex-wrap">
                  {showcase.hashtags.map((hashtag) => (
                    <span
                      key={hashtag}
                      className={clsx(
                        "font-semibold text-16/22 px-2 py-1 bg-[#A5FAFF33] rounded-lg mr-4 last:mr-0",
                        "xs:text-18/22 md:text-20/26",
                      )}
                    >
                      {hashtag}
                    </span>
                  ))}
                </div>
                <Link href={showcase.redirect}>
                  <a target="_blank" rel="noreffer">
                    <Button
                      className={clsx(
                        "mt-5 px-6 py-[10px] text-18/22 font-semibold rounded-[100px]",
                        "xs:text-xl md:text-2xl md:mt-7",
                      )}
                    >
                      View more
                    </Button>
                  </a>
                </Link>
              </div>
            </SwiperSlide>
          ))}
        </BaseSwiper>
      </div>
    </div>
  )
}

export default Showcase
