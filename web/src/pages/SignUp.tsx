import Button from "../components/Button"
import Input from "../components/Input"

import { useState } from "react"

const SigIn = () => {
  const [name, setName] = useState<string>("")
  const [email, setEmail] = useState<string>("")
  const [password, setPassword] = useState<string>("")
  const [passwordConfirm, setPasswordConfirm] = useState<string>("")
  const [isLoading, setIsLoading] = useState<boolean>(false)

  function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    console.log(name, email, password, passwordConfirm)

    setEmail("")
    setPassword("")
    setName("")
    setPasswordConfirm("")
  }

  return (
    <form className="w-full flex flex-col gap-4" onSubmit={onSubmit}>
      <Input required legend="Name" value={name} placeholder="Seu nome" onChange={(e) => setName(e.target.value)}/>
      <Input type="email" required legend="E-mail" value={email} placeholder="seu@email.com" onChange={(e) => setEmail(e.target.value)}/>
      <Input type="password" required legend="Senha" value={password} placeholder="123456" onChange={(e) => setPassword(e.target.value)}/>
      <Input type="password" required legend="Confirmação da Senha" value={password} placeholder="123456" onChange={(e) => setPasswordConfirm(e.target.value)}/>
      <Button type="submit" isLoading={isLoading}>Cadastrar</Button>
      <a href="/" className="text-sm font-semibold text-gray-100 mt-10 mb-4 text-center hover:text-green-800 transition ease-linear">Já tenho uma conta</a>
    </form>
  )
}

export default SigIn