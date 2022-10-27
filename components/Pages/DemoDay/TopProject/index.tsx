import Image from "next/image"
import React from "react"
import GradientBorder from "../../../Base/GradientBorder"
import { landingPageStyles } from "../../styles"
import imgGummy from "/public/images/demo-day/project-gummy.png"
import imgEternal from "/public/images/demo-day/project-eternal.png"
import imgTrouble from "/public/images/demo-day/project-trouble.png"
import imgVictory from "/public/images/demo-day/project-victory.png"
import imgTooNft from "/public/images/demo-day/project-toonft.png"
import imgHashbon from "/public/images/demo-day/project-hashbon.png"

const projects = [
  {
    id: 1,
    image: imgGummy,
    title: "Gummys",
    desc: "Eternal Glory is a Multichain GameFi Platform with many different type of gameplays.",
  },
  {
    id: 2,
    image: imgEternal,
    title: "Eternal Glory",
    desc: "A fighting action game in the battle royale genre where users gather points popping out from the wormholes in their’s universe.",
  },
  {
    id: 3,
    image: imgTrouble,
    title: "Trouble Punk | Cyber Galz",
    desc: "A Free-to-Play, AAA-rated, Play-and-Earn, Multiplayer, First/Third Person Shooter game built on Unreal Engine 5",
  },
  {
    id: 4,
    image: imgVictory,
    title: "Victory Point",
    desc: "An unprecedented blockchain-based platform that will revolutionize the WebToon industry by creating an innovative, next-generation NFT ecosystem.  ",
  },
  {
    id: 5,
    image: imgTooNft,
    title: "TooNFT",
    desc: "An unprecedented blockchain-based platform that will revolutionize the WebToon industry by creating an innovative, next-generation NFT ecosystem.  ",
  },
  {
    id: 6,
    image: imgHashbon,
    title: "Hashbon Pass",
    desc: "Hashbon Pass by Hashbon FiRe is an ERC-721 series token and a decentralized protocol for reusable identity verification.",
  },
]

type IProjectCardProps = {
  project: any
}

const ProjectCard = (props: IProjectCardProps) => {
  const { project } = props
  return (
    <GradientBorder className="flex flex-col py-6 px-5 rounded-xl cursor-pointer">
      <div className="relative w-full">
        <Image src={project.image} alt="" layout="responsive" />
      </div>
      <span className="text-22/28 font-semibold mt-2 block">
        {project.title}
      </span>
      <p className="text-16/22 mt-1 font-light">{project.desc}</p>
    </GradientBorder>
  )
}

const TopProject = () => {
  return (
    <div className="mt-[120px]">
      <h3 className={landingPageStyles.heading3}>ILAP Top 6 Projects</h3>
      <div className="grid grid-cols-3 gap-6 mt-[60px]">
        {projects.map((project: any) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  )
}

export default TopProject
