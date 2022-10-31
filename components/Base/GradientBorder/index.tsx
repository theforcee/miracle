import clsx from "clsx"
import styles from "./gradientBorder.module.scss"

type GradientBorderTypes = {
  children: any
  className?: string
  borderAnimation?: boolean
}

const GradientBorder = (props: GradientBorderTypes) => {
  const { children, className = "", borderAnimation = false } = props

  return (
    <div
      className={clsx(
        borderAnimation ? styles.borderAnimation : styles.gradientBorder,
        className,
      )}
    >
      {children}
    </div>
  )
}

export default GradientBorder
