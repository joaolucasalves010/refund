import { useState } from "react"
import Input from "../components/Input"
import Select from "../components/Select"
import Upload from "../components/Upload"
import Button from "../components/Button"
import { CATEGORIES, CATEGORIES_KEYS } from "../utlis/categories"
import { useNavigate, useParams } from "react-router"
import fileSvg from "../assets/file.svg"

const Refund = () => {
  const [name, setName] = useState<string>("")
  const [category, setCategory] = useState<string>("")
  const [amount, setAmount] = useState<string>("")
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [filename, setFilename] = useState<File | null>(null)

  const navigate = useNavigate()
  const params = useParams<{id: string}>()

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (params.id) {
      return navigate(-1)
    }

    console.log(`Categoria: ${category}`)
    console.log(`Nome: ${name}`)
    console.log(`Quantia: ${amount}`)
    console.log(`Nome do arquivo: ${filename?.name}`)

    navigate("/confirm", {state: {fromSubmit: true}})
  }


  return (
    <form onSubmit={onSubmit} className="bg-gray-500 w-full rounded-xl flex flex-col p-10 gap-6 lg:min-w-[512px]:">
      <header>
        <h1 className="text-xl font-bold text-gray-100">Solicitação de reembolso</h1>
        <p className="text-sm text-gray-200 mt-2 mb-4">Dados da despesa para solicitar reembolso.</p>
      </header>

      <Input 
        required
        legend="Nome da solicitação"
        onChange={(e) => setName(e.target.value)}
        value={name}
        disabled={!!params.id}
      />
      <div className="flex gap-4">
        <Select legend="Categoria" onChange={(e) => setCategory(e.target.value)} disabled={!!params.id}>
          {CATEGORIES_KEYS.map((category) => (
            <option key={category}>
              {CATEGORIES[category].name}
            </option>
          ))}
        </Select>
        <Input legend="Valor" required onChange={(e) => setAmount(e.target.value)} type="number" value={amount} disabled={!!params.id}/>
      </div>

      {
        params.id ? (
  
          <a href="https://github.com/joaolucasalves010" className="text-sm text-green-100 font-semibold flex items-center justify-center 
          gap-2 my-6 hover:opacity-70 transition ease-linear">
            <img src={fileSvg} alt="Ícone de arquivo" />
            Abrir Comprovante
          </a>
        ) : (
          <Upload 
            filename={filename && filename.name}
            onChange={(e) => e.target.files && setFilename(e.target.files[0])}
          />
        )
      }

      
      <Button type="submit" isLoading={isLoading}>
        {params.id ? "Voltar" : "Enviar"}
      </Button>
    </form>
  )
}

export default Refund