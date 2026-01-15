import Button from "../components/Button"
import Input from "../components/Input"

import { useState } from "react"

const SigIn = () => {
  const [email, setEmail] = useState<string>("")
  const [password, setPassword] = useState<string>("")
  const [isLoaidng, setIsLoading] = useState<boolean>(false)

  function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    console.log(email, password)

    setEmail("")
    setPassword("")
  }

  return (
    <form className="w-full flex flex-col gap-4" onSubmit={onSubmit}>
      <Input type="email" required legend="E-mail" value={email} placeholder="seu@email.com" onChange={(e) => setEmail(e.target.value)}/>
      <Input type="password" required legend="Senha" value={password} placeholder="123456" onChange={(e) => setPassword(e.target.value)}/>
      <Button type="submit">Entrar</Button>
    </form>
  )
}

export default SigIn