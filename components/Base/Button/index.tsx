import React from "react"
import clsx from "clsx"
import styles from "./button.module.scss"

type ButtonProps = {
  className?: string
  children: any
  onClick?: () => void
  disabled?: boolean
  size?: "large" | "normal" | "small"
}

const Button = (props: ButtonProps) => {
  const {
    className = "",
    children,
    onClick,
    disabled = false,
    size = "normal",
  } = props

  return (
    <button
      className={clsx(
        styles.button,
        size === "large" &&
          "px-6 py-[10px] text-22/28 font-semibold rounded-[100px] md:text-2xl",
        size === "normal" &&
          "px-6 py-[10px] text-13/18 font-semibold rounded-[100px] md:text-16/20",
        size === "small" &&
          "px-[15.76px] py-[6.57px] text-16/20  font-semibold rounded-[66px] md:text-16/20",
        disabled && "pointer-events-none",
        className,
      )}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default Button
