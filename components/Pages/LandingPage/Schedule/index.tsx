import clsx from "clsx"
import React from "react"
import { landingPageStyles } from "../../styles"
import styles from "./schedule.module.scss"

const schedules = {
  morning: [
    { time: "8:30 - 9:00", content: "Tea Networking" },
    { time: "9:00 - 9:10", content: "Opening Speech" },
    { time: "9:10 - 9:50", content: "Panel Talk 1: Web3 landscape" },
    { time: "10:00-10:45", content: "ILAP Introduction" },
    { time: "10:45-11:00", content: "Break" },
    { time: "12:25-13:40", content: "Trust technology & digital identity" },
    {
      time: "11:45-12:05",
      content:
        "ILAP 3 Startups Showcase + Q&A + Deals: Trust technology & digital identity",
    },
    { time: "12:25-13:40", content: "Trust technology & digital identity" },
  ],
  afternoon: [
    { time: "13:40-14:00", content: "Key Note 1: Web3 gaming" },
    {
      time: "14:00-14:40",
      content:
        "Panel Talk 2: Media & Entertainments (esports, comics, music...)",
    },
    { time: "14:40-15:20", content: "Panel Talk 3: Metaverse infrastructure" },
    {
      time: "15:20-15:40",
      content: "Key Note 2: NFTs Recent Innovation & its meaning",
    },
    { time: "15:40-15:55", content: "Tea Networking" },
    {
      time: "15:55-16:35",
      content: "Panel Talk 4: How to build & Scale project",
    },
    {
      time: "16:35-17:15",
      content:
        "Panel Talk 5: Survive bear and thrive in bull for both VCs & projects",
    },
  ],
}

const Schedule = () => {
  return (
    <div className="mt-[120px] overflow-hidden">
      <h3 className={landingPageStyles.heading3}>Schedule</h3>
      <div
        className={clsx(styles.morningSection, "mt-[60px] flex rounded-2xl")}
      >
        <span className="text-2xl font-semibold h-[70px] w-[280px] pl-6 flex items-center">
          Morning session
        </span>
        <div className="flex-1 py-[18px] pr-[26px]">
          {schedules.morning.map((schedule) => (
            <React.Fragment key={schedule.time}>
              <div className="first:hidden h-[0.5px] bg-white opacity-60"></div>
              <div className="flex text-lg py-1.5">
                <span className="w-[130px] font-semibold ml-6">
                  {schedule.time}
                </span>
                <span className="flex-1 font-medium">{schedule.content}</span>
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
      <div
        className={clsx(styles.afternoonSection, "mt-[60px] flex rounded-2xl ")}
      >
        <span className="text-2xl font-semibold h-[70px] w-[280px] pl-6 flex items-center">
          Afternoon session
        </span>
        <div className="flex-1 py-[18px] pr-[26px]">
          {schedules.afternoon.map((schedule) => (
            <React.Fragment key={schedule.time}>
              <div className="first:hidden h-[0.5px] bg-white opacity-60"></div>
              <div className="flex text-lg py-1.5">
                <span className="w-[130px] font-semibold ml-6">
                  {schedule.time}
                </span>
                <span className="flex-1 font-medium">{schedule.content}</span>
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Schedule
