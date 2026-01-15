import React from "react"

type Props = React.ComponentProps<"button"> & {
  isLoading?: boolean
}

const Button = ({children, isLoading, type="button"}: Props) => {
    return (
      <button className="flex items-center justify-center bg-green-100 rounded-lg text-white font-boldc cursor-pointer hover:bg-green-200 transition ease-linear disabled:opacity-50 disabled:cursor-not-allowed h-12" type={type} disabled={isLoading}>{children}</button>
    )
}

export default Button