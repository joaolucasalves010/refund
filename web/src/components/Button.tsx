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
    iconSmall: "h-8 w-8"
  },
}

const Button = ({children, isLoading, type="button", variant="base", ...rest}: Props) => {
    return (
      <button {...rest
      } className={
        classMerge([
          "flex items-center justify-center bg-green-100 rounded-lg text-white font-boldc cursor-pointer hover:bg-green-200 transition ease-linear disabled:opacity-50",
          isLoading && "disabled:cursor-not-allowed",
          variants.button[variant]
        ])
      } type={type} disabled={isLoading} {...rest}>{children}</button>
    ) 
}

export default Button