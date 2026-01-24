import leftSvg from "../assets/left.svg"
import right from "../assets/right.svg"

import Button from "./Button"

type Props = {
  current: number,
  total: number
}

const Pagination = ({total, current, ...rest}: Props) => {
  return (
    <div className="flex justify-center items-center gap-4 flex-1">
      <Button variant="iconSmall">
        <img src={leftSvg} alt="Ícone de voltar" />
      </Button>
      <span className="text-sm text-gray-200">
        {current}/{total}
      </span>
      <Button variant="iconSmall">
        <img src={right} alt="Ícone de avançar" />
      </Button>
    </div>
  )
}

export default Pagination