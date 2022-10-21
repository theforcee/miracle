import clsx from "clsx"
import React from "react"
import styles from "./border.module.scss"

type BorderAnimationTypes = {
  children: any
  className?: string
}

const BorderAnimation = (props: BorderAnimationTypes) => {
  const { children, className = "" } = props

  return (
    <div className={clsx(styles.box, className)}>
      <div>{children}</div>
    </div>
  )
}

export default BorderAnimation
