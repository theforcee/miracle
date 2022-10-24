import React from "react"
import { Disclosure, Transition } from "@headlessui/react"
import clsx from "clsx"
import Image from "next/image"
import iconArrow from "/public/images/icon-arrow-bottom.svg"
import { landingPageStyles } from "../styles"

type FaqTypes = {
  id: number
  question: string
  answer: string
}

const faqs: Array<FaqTypes> = [
  {
    id: 1,
    question: "1. Who should join Miracle Block 2022?",
    answer: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.`,
  },
  {
    id: 2,
    question: "2. Is Miracle Block 2022 an online, offline or hybrid event? ",
    answer: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.`,
  },
  {
    id: 3,
    question: "3. Where is the MB2022 livestream location?",
    answer: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.`,
  },
  {
    id: 4,
    question: "4. When will the event start?",
    answer: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.`,
  },
  {
    id: 5,
    question: "5. What is the most special thing about this event? ",
    answer: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.`,
  },
  {
    id: 6,
    question: "6. How do I register for one of the events?",
    answer: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.`,
  },
  {
    id: 7,
    question:
      "7. If I can’t join the event after buying the ticket, will I get refund?",
    answer: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.`,
  },
  {
    id: 8,
    question: "8.  Is there a dress code applied for the event?",
    answer: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.`,
  },
  {
    id: 9,
    question: "9.  Who is speaking at the event?",
    answer: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.`,
  },
  {
    id: 10,
    question: "10. Covid / QR-health-pass in Vietnam?",
    answer: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.`,
  },
]

const FAQ = () => {
  return (
    <div className="mt-[72px] xs:mt-20 md:mt-[120px]">
      <h3 className={landingPageStyles.heading3}>FAQ</h3>
      <div
        className={clsx(
          "flex flex-col gap-[5px] mt-[28px]",
          "xs:mt-10 xs:gap-2",
          "sm:flex-row",
          "md:mt-[60px] md:gap-5",
        )}
      >
        {[
          { start: 0, end: 5 },
          { start: 5, end: 10 },
        ].map((sliceIndex) => (
          <div
            key={sliceIndex.start}
            className="flex-1 flex flex-col gap-[5px] xs:gap-2 md:gap-5"
          >
            {faqs.slice(sliceIndex.start, sliceIndex.end).map((item) => (
              <Disclosure key={item.id}>
                {({ open }) => (
                  <div
                    className={clsx(
                      "flex flex-col w-full cursor-pointer rounded-[20px] overflow-hidden transition",
                      "bg-miracleTransparent-10 text-white px-5 py-4",
                    )}
                  >
                    <Disclosure.Button
                      className={clsx(
                        "text-13/18 font-semibold flex justify-between items-start gap-6 outline-none",
                        "xs:text-base",
                        "md:text-lg",
                      )}
                    >
                      <span className="flex-1 text-left">{item.question}</span>
                      <div
                        className={clsx(
                          "relative w-8 h-8 flex rounded-full justify-center items-center transition",
                          "bg-[#44C4EC33]",
                        )}
                      >
                        <Image src={iconArrow} alt="" />
                      </div>
                    </Disclosure.Button>
                    <Transition
                      className="overflow-hidden"
                      enter="transition transition-[max-height] duration-500 ease-in"
                      enterFrom="transform max-h-0"
                      enterTo="transform max-h-screen"
                      leave="transition transition-[max-height] duration-500 ease-out"
                      leaveFrom="transform max-h-screen"
                      leaveTo="transform max-h-0"
                    >
                      <Disclosure.Panel className="text-xs xs:text-sm md:text-lg opacity-80 whitespace-pre-line break-words pr-">
                        {({ close }) => (
                          <span
                            className="block"
                            onClick={() => {
                              close()
                            }}
                          >
                            {item.answer}
                          </span>
                        )}
                      </Disclosure.Panel>
                    </Transition>
                  </div>
                )}
              </Disclosure>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}

export default FAQ
