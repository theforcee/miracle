import clsx from "clsx"
import Image from "next/image"
import GradientBorder from "../../../Base/GradientBorder"
import { landingPageStyles } from "../../styles"
import imgEternal from "/public/images/demo-day/project-eternal.png"
import imgGummy from "/public/images/demo-day/project-gummy.png"
import imgHashbon from "/public/images/demo-day/project-hashbon.png"
import imgTooNft from "/public/images/demo-day/project-toonft.png"
import imgTrouble from "/public/images/demo-day/project-trouble.png"
import imgVictory from "/public/images/demo-day/project-victory.png"

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
    <GradientBorder
      className="py-5 md:py-6 px-5 rounded-xl after:rounded-xl cursor-pointer transition hover:-translate-y-2"
      borderAnimation
    >
      <div className="self-start">
        <div className="relative w-full">
          <Image src={project.image} alt="" layout="responsive" />
        </div>
        <span
          className={clsx(
            "text-20/26 font-semibold mt-1 block",
            "md:text-22/28 md:mt-2",
          )}
        >
          {project.title}
        </span>
        <p className="text-15/21 md:text-16/22 mt-1 font-light">
          {project.desc}
        </p>
      </div>
    </GradientBorder>
  )
}

const TopProject = () => {
  return (
    <div className="mt-[60px] xs:mt-20 md:mt-[120px]">
      <h3 className={landingPageStyles.heading3}>ILAP Top 6 Projects</h3>
      <div
        className={clsx(
          "grid grid-cols-1 gap-6 mt-8 ",
          "xs:mt-10 xs:grid-cols-2",
          "md:mt-[60px] md:grid-cols-3",
        )}
      >
        {projects.map((project: any) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  )
}

export default TopProject
