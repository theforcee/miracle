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

const schedules1 = {
  morning: [
    { time: "8:30 - 9:00", content: "Tea Networking", desc: "Web3 gaming" },
    { time: "9:00 - 9:10", content: "Opening Speech" },
    {
      time: "9:10 - 9:50",
      content: "Panel Talk 1",
      desc: "Trust technology & digital identity",
    },
    { time: "9:50-10:00", content: "ILAP Introduction" },
    { time: "10:00-10:45", content: "ILAP 3 Startups Showcase + Q&A + Deals" },
    { time: "10:45-11:00", content: "Break" },
    { time: "11:00-11:45", content: "ILAP 3 Startups Showcase + Q&A + Deals" },
    { time: "11:45-12:05", content: "Key note" },
    { time: "12:25-13:40", content: "Fireside chat: Sandeep (Polygon)" },
    { time: "12:25-13:40", content: "Lunch Break" },
  ],
  afternoon: [
    { time: "13:40-14:00", content: "Key Note 1", desc: "Web3 gaming" },
    {
      time: "14:00-14:40",
      content: "Panel Talk 2",
      desc: "Media & Entertainments (esports, comics, music...)",
    },
    {
      time: "14:40-15:20",
      content: "Panel Talk 3",
      desc: "Metaverse infrastructure",
    },
    {
      time: "15:20-15:40",
      content: "Key Note 2",
      desc: "NFTs Recent Innovation & its meaning",
    },
    {
      time: "15:40-15:55",
      content: "Tea Networking",
      desc: "Trust technology & digital identity",
    },
    {
      time: "15:55-16:35",
      content: "Panel Talk 4",
      desc: "How to build & Scale project",
    },
    {
      time: "16:35-17:15",
      content: "Panel Talk 5",
      desc: "Survive bear and thrive in bull for both VCs & projects",
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

const ScheduleSection = (props: any) => {
  const { scheduleArr, title } = props
  return (
    <div>
      <span className="text-20/30 font-semibold xs:text-2xl md:text-28/30">
        {title}
      </span>
      <ul className="mt-2 md:mt-[22px]">
        {scheduleArr.map((schedule: any) => (
          <li
            key={schedule.time}
            className={clsx(
              "flex items-center first:border-t-0 border-t-[0.5px] border-[#858585b2] min-h-[60px] py-2",
              "md:items-start md:min-h-[80px] md:py-4",
            )}
          >
            <span className="w-[110px] text-16/22 md:text-lg font-bold md:w-[140px] md:font-semibold">
              {schedule.time}
            </span>
            <div className="flex flex-col flex-1">
              <span className="text-16/22 md:text-lg font-bold md:font-semibold">
                {schedule.content}
              </span>
              <span className="text-14/18 md:text-16/22 font-medium md:font-normal text-[#FFFFFFB2] mt-0.5">
                {schedule.desc}
              </span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
const Schedule1 = () => {
  return (
    <div className="mt-[60px] xs:mt-20 md:mt-[120px]">
      <h3 className={landingPageStyles.heading3}>Schedule</h3>
      <div className="mt-4 grid grid-cols-1 gap-x-[85px] gap-y-5 md:grid-cols-2 xs:mt-6 md:mt-10">
        <ScheduleSection
          scheduleArr={schedules1.morning}
          title="Morning session"
        />
        <ScheduleSection
          scheduleArr={schedules1.afternoon}
          title="Afternoon session"
        />
      </div>
    </div>
  )
}

export default Schedule1
