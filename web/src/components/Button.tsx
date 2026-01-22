import React from "react"
import classMerge from "../utlis/classMerge"

type Props = React.ComponentProps<"button"> & {
  isLoading?: boolean
  variant?: "base" | "icon" | "iconSmall"
}

const variants = {
  button: {
    base: "h-12",
    icon: "h-12 w-12",
    iconSmall: "h-10 w-10"
  },
}

const Button = ({children, isLoading, type="button", variant="base"}: Props) => {
    return (
      <button className={
        classMerge([
          "flex items-center justify-center bg-green-100 rounded-lg text-white font-boldc cursor-pointer hover:bg-green-200 transition ease-linear disabled:opacity-50 disabled:cursor-not-allowed",
          variants.button[variant]
        ])
      } type={type} disabled={isLoading}>{children}</button>
    ) 
}

export default Button