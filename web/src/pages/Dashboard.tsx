import { useState, type FormEvent } from "react"
import Input from "../components/Input"
import Button from "../components/Button"
import searchSvg from "../assets/search.svg"
import { CATEGORIES } from "../utlis/categories"
import RefundItem from "../components/RefundItem"

const REFUND_EXAMPLE = {
  id: "123",
  name: "João Lucas",
  category: "Alimentação",
  amount: "34,50",
  categoryImg: CATEGORIES["food"].icon
}

const Dashboard = () => {

  const [name, setName] = useState("")

  const fetchRefunds = (e: FormEvent) => {
    e.preventDefault()
    console.log(name)
  }

  return (
    <div className="bg-gray-500 rounded-xl p-10 md:min-w-[768px]">
      <h1 className="text-gray-100 font-bold text-xl flex-1">Solicitações</h1>
      <form onSubmit={(e) => fetchRefunds(e)} className="flex items-center justify-between pb-6 border-b-[1px] border-b-gray-400 md:flex-row gap-2 mt-6">
        <Input placeholder="Pesquisar pelo nome" onChange={(e) => setName
          (e.target.value)
        } />
        <Button variant="iconSmall">
          <img src={searchSvg} alt="Ícone de busca" className="w-5"/>
        </Button>
      </form>

      <div>
        <RefundItem data={REFUND_EXAMPLE}/>
      </div>

    </div>
  )
}

export default Dashboard