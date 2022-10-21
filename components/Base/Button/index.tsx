import React from "react"
import clsx from "clsx"
import styles from "./button.module.scss"

type ButtonProps = {
  className?: string
  children: any
  onClick?: () => void
  disabled?: boolean
}

const buttonStyles = {
  hoverAnimated: "duration-500 hover:tracking-widest",
}

const Button = (props: ButtonProps) => {
  const { className = "", children, onClick, disabled = false } = props

  return (
    <div
      className={clsx(
        styles.button,
        "flex h-[50px] rounded-[100px] items-center tracking-wider text-2xl font-semibold px-6 cursor-pointer",
        !disabled && buttonStyles.hoverAnimated,
        disabled && "pointer-events-none",
        className,
      )}
      // onClick={!disabled ? onClick : () => {}}
      onClick={onClick}
    >
      {children}
    </div>
  )
}

export default Button
