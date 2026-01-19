import React from "react"

type Props = React.ComponentProps<"select"> & {
  legend?: string
}

const Select = ({legend, children, ...rest}: Props) => {
  return (
    <fieldset className="flex flex-1 max-h-20 text-gray-200 focus-within:text-green-100">
      {legend && <legend className="uppercase text-xxs mb-2 text-inherit">
        {legend}  
      </legend>}

      <select {...rest} value="" className="w-full h-12 rounded-lg border px-4 border-gray-300 text-sm text-gray-100 bg-transparent outline-none focus:border-2 focus:border-green-100 placeholder-gray-300">
        <option value="" disabled hidden>Selecione</option>
        {children}
      </select>
    </fieldset>
  )
}

export default Select