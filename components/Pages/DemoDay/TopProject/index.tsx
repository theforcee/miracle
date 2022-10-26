import Image from "next/image"
import React from "react"
import GradientBorder from "../../../Base/GradientBorder"
import { landingPageStyles } from "../../styles"
import imgHashbon from "/public/images/demo-day/hashbon-pass.png"

const projects = [
  {
    id: 1,
    image: imgHashbon,
    title: "",
    desc: "",
  },
]

const ProjectCard = () => {
  return (
    <GradientBorder className="relative w-full">
      <Image src={imgHashbon} alt="" layout="responsive" />
    </GradientBorder>
  )
}

const TopProject = () => {
  return (
    <div>
      <h3 className={landingPageStyles.heading3}>ILAP Top 6 Projects</h3>
      <ProjectCard />
    </div>
  )
}

export default TopProject
