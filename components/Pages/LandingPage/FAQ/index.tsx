import React from "react"
import { Disclosure, Transition } from "@headlessui/react"
import clsx from "clsx"
import Image from "next/image"
import iconArrow from "/public/images/icon-arrow-bottom.svg"
import { landingPageStyles } from "../../styles"
import { URLS } from "../../../../utils/constants"

type FaqTypes = {
  id: number
  question: string
  answer: string | JSX.Element
}

const basePath =
  typeof window !== "undefined" && window.location.origin
    ? window.location.origin
    : ""

console.log("currentHref", basePath)
const hyperlinkStyles =
  "text-blue-400 underline font-medium transision-colors hover:text-[#43d2ff]"

const faqs: Array<FaqTypes> = [
  {
    id: 1,
    question: "1. Who should join Miracle Block 2022?",
    answer: (
      <>
        <span className="block mb-2">MB 2022 has something for everyone!</span>
        <span>
          From experts and developers, to those curious or just having an idea
          and want to get inspired by the brightest brains in blockchain, DeFi,
          Web 3, NFTs. Our goal is to have a crowd that will come to our event
          to share, connect, and co-create.
        </span>
      </>
    ),
  },
  {
    id: 2,
    question: "2. Is Miracle Block 2022 an online, offline or hybrid event?",
    answer: `Miracle Block 2022 is an offline event where attendees can connect and expand their networking with face-to-face contact. Selected sessions will be videotaped, edited, and shared via our Membership Community after the event.`,
  },
  {
    id: 3,
    question: "3. When will the event start?",
    answer: `7 - 8th December 2022`,
  },
  {
    id: 4,
    question: "4. How can I access the conference?",
    answer: (
      <ul className="list-disc pl-10">
        <li>
          At the receptionist table, open your ticket in Eventbrite’s order
          which includes a single QR code.
        </li>
        <li>
          Conference staff will scan your QR code to verify your ticket
          ownership.
        </li>
        <li>Done, now enjoy the event with your new friends!</li>
      </ul>
    ),
  },
  {
    id: 5,
    question: "5. When can I buy the ticket?",
    answer: `You can buy your ticket now for Gold tickets. The private dinner tickets are pre-registered and selected with limited seats. For the best reservation and the quickest registration process we recommend that you book your tickets asap. See you soon!
    `,
  },
  {
    id: 6,
    question: "6. If I buy a number of tickets, will I get a discount?",
    answer: (
      <>
        Yes. If you buy 10 tickets or more you will get a 10% discount. For
        bookings support over 15 guests please contact{" "}
        <a
          href="https://t.me/Web3BuilderInfo"
          target="_blank"
          rel="noreferrer"
          className={hyperlinkStyles}
          onClick={(e) => e.stopPropagation()}
        >
          https://t.me/Web3BuilderInfo
        </a>
      </>
    ),
  },
  {
    id: 7,
    question:
      "7. If I can’t join the event after buying the ticket, will I get a refund?",
    answer: (
      <>
        If you have paid for in-person tickets you will still be able to access
        the content after the conference has ended. Please note that the money
        you pay is non-refundable. If you would like to transfer a ticket to
        someone else please contact{" "}
        <a
          href="https://t.me/Web3BuilderInfo"
          target="_blank"
          rel="noreferrer"
          className={hyperlinkStyles}
          onClick={(e) => e.stopPropagation()}
        >
          https://t.me/Web3BuilderInfo
        </a>
      </>
    ),
  },
  {
    id: 8,
    question: "8.  Is there a dress code applied for the event?",
    answer: `Not really but we suggest comfortable smart casual attire.`,
  },
  {
    id: 9,
    question: "9.  Covid / QR-health-pass in Vietnam? ",
    answer: (
      <>
        <span className="block mb-2">
          According to the latest Vietnam entry regulations, Vietnam applies NO
          QUARANTINE and NO COVID TEST for entrants, no matter whether they are
          Vietnamese citizens, or foreigners, entering Vietnam for tourism or
          business.
        </span>
        <span>
          <a
            href="https://www.vietnam-visa.com/entry-quarantine-covid/"
            target="_blank"
            rel="noreferrer"
            className={hyperlinkStyles}
            onClick={(e) => e.stopPropagation()}
          >
            Here
          </a>{" "}
          comes the detailed requirements and application process.
        </span>
      </>
    ),
  },
  {
    id: 10,
    question: "10. Is there anything else to do before and after the event?",
    answer: (
      <>
        <span className="block mb-2">
          For sure! We aim to create a diversified chain of events for web3
          builders and investors in SEA. Therefore there will be side events,
          meetups around the event week. If you’re interested in holding one,
          don’t hesitate to contact us{" "}
          <a
            href={`${basePath}${URLS.SCHEDULE}`}
            target="_blank"
            rel="noreferrer"
            className={hyperlinkStyles}
            onClick={(e) => e.stopPropagation()}
          >
            here
          </a>
          .
        </span>
        <span>
          Besides, Hanoi is a young city and there are plenty of restaurants,
          night life, and more — all within walking distance from the venue
          hall. Stay tuned for more curated info around this soon.
        </span>
      </>
    ),
  },
]

const FAQ = () => {
  return (
    <div className="mt-[72px] xs:mt-20 md:mt-[120px]">
      <h3 className={landingPageStyles.heading3}>FAQ</h3>
      <div
        className={clsx(
          "grid grid-cols-1 gap-[5px] mt-[28px] items-start",
          "xs:mt-10 xs:gap-2",
          "sm:grid-cols-2",
          "md:mt-[60px] md:gap-5",
        )}
      >
        {[
          { start: 0, end: 5 },
          { start: 5, end: 10 },
        ].map((sliceIndex) => (
          <div
            key={sliceIndex.start}
            className="flex-1 grid grid-cols-1 gap-[5px] xs:gap-2 md:gap-5"
          >
            {faqs.slice(sliceIndex.start, sliceIndex.end).map((item) => (
              <Disclosure key={item.id}>
                {({ open }) => (
                  <div
                    className={clsx(
                      "flex flex-col w-full cursor-pointer rounded-[20px] overflow-hidden transition",
                      "bg-miracleTransparent-10 text-white",
                    )}
                  >
                    <Disclosure.Button
                      className={clsx(
                        "text-13/18 font-semibold flex justify-between items-start gap-6 outline-none px-5 pt-4",
                        "xs:text-base",
                        "md:text-lg",
                        open && "pb-0",
                      )}
                    >
                      <span className="flex-1 text-left">{item.question}</span>
                      <div
                        className={clsx(
                          "relative w-8 h-8 flex rounded-full justify-center items-center transition bg-[#44C4EC33]",
                          open && "rotate-180",
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
                      <Disclosure.Panel className="text-xs xs:text-sm md:text-lg opacity-80 whitespace-pre-line break-words px-5 pr-[40px]">
                        {({ close }) => (
                          <div
                            onClick={() => {
                              close()
                            }}
                          >
                            {item.answer}
                          </div>
                        )}
                      </Disclosure.Panel>
                    </Transition>
                    <Disclosure.Button className="h-4"></Disclosure.Button>
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
