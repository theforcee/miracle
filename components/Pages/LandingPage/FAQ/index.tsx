import React from "react"
import { Disclosure, Transition } from "@headlessui/react"
import clsx from "clsx"
import Image from "next/image"
import iconArrow from "/public/images/logo-icetea.svg"

type FaqTypes = {
  id: number
  question: string
  answer: string
}

const faqs: Array<FaqTypes> = [
  {
    id: 1,
    question: "What is Firebird?",
    answer: `Firebird is a stand-alone chain built with Cosmos SDK designed specifically for Web3 games and metaverse. It allows developers to create scalable and user-friendly real-time dApps with cheap costs and fast speed without ever compromising security. With Firebird, we focus on blockchain performance to boost users’ gaming experience and aim to create an efficient chain that enables fast and low-cost transactions, facilitating easy trading for in-game assets.`,
  },
  {
    id: 2,
    question: "When is the mainnet launch?",
    answer: "Firebird mainnet is expected to launch in December 2022.",
  },
  {
    id: 3,
    question: "What can I do with my PKF tokens?",
    answer: `PKF utility:
    - Payment for transaction fees (computation & storage)
    - Staking for validators to earn a share of block rewards
    - Staking to participate in the on-chain governance process and earn rewards for voting on proposals`,
  },
  {
    id: 4,
    question: "What is the contract address for PKF?",
    answer:
      "Official $PKF ERC-20 contract address: 0x8b39b70e39aa811b69365398e0aace9bee238aeb",
  },
  {
    id: 5,
    question: "Why did Firebird build with Cosmos SDK?",
    answer: `Cosmos is an internet of blockchains. Cosmos will make it simple to develop blockchain technology by overcoming the primary problems of earlier blockchain efforts and enabling chain interoperability.  Additionally, Cosmos SDK seeks to address the modern blockchain infrastructure's scalability, usability, and sovereignty.
    By leveraging the aforementioned benefits of Cosmos, Firebird provides a platform that makes it possible to construct blockchain applications, Web3 games and services that are robust, secure, interoperable, and easy to use.`,
  },
  {
    id: 6,
    question:
      "Does Firebird have a bug bounty program available at the moment?",
    answer: `Firebird will have a bug bounty program after the testnet “Firefly” is launched.
    More information about this program will be released soon. Let’s stay tuned to our channels for exclusive events and updates!`,
  },
  {
    id: 7,
    question: "Where can I learn more about Firebird?",
    answer: `Visit our blog, whitepaper, GitHub, and join social channels (Twitter, Telegram, Discord, Reddit) to learn more details about Firebird, access constantly updated information, and get support 24/7.`,
  },
  {
    id: 8,
    question: "What makes Firebird different from other chains?",
    answer: `Firebird can solve most of the problems that blockchain gaming is now facing, like performance, scalability, interoperability, etc. Additionally, utilizing Icetea ecosystem, Firebird can support the full life cycle of a typical blockchain project (including preparation, blockchain development, token sales, NFT sales, game launch, player attraction, and metaverse experiences). 
    The Firebird team is currently investigating further distinctive features to provide efficient services and the best user experience in the future.`,
  },
]

const FAQ = () => {
  return (
    <div>
      {faqs.map((item) => (
        <Disclosure key={item.id}>
          {({ open }) => (
            <div
              className={clsx(
                "flex flex-col w-full cursor-pointer rounded-[20px] overflow-hidden transition-colors",
                open ? "bg-black text-white" : "bg-white text-black",
              )}
            >
              <Disclosure.Button
                className={clsx(
                  "text-2xl font-semibold flex justify-between items-start gap-2 outline-none py-6 px-8",
                )}
              >
                <span className="flex-1 block text-left">{item.question}</span>
                <div className="relative w-5 h-5">
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
                <Disclosure.Panel className="text-lg opacity-80 whitespace-pre-line break-words">
                  {({ close }) => (
                    <span
                      className="pb-6 px-8 block"
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
  )
}

export default FAQ
