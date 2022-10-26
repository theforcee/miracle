import clsx from "clsx"
import React from "react"
import styles from "./gradientBorder.module.scss"

type GradientBorderTypes = {
  children: any
  className?: string
}

const GradientBorder = (props: GradientBorderTypes) => {
  const { children, className = "" } = props

  return (
    <div className={clsx(styles.box, className)}>
      <div>{children}</div>
    </div>
  )
}

export default GradientBorder
