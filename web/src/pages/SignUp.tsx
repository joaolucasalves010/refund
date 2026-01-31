import Button from "../components/Button"
import Input from "../components/Input"

import { z, ZodError } from "zod"
import { useState } from "react"

const signUpSchema = z.object({
  name: z.string().trim().min(1, {message: "Informe o nome"}),
  email: z.email({message: "E-mail inválido"}),
  password: z.string().min(6, {message: "Senha deve ter no minimo 6 dígitos"}),
  passwordConfirm: z.string({message: "Confirme a senha!"})
}).refine((data) => data.password === data.passwordConfirm, {
  message: "As senhas não são iguais",
  path: ["passwordConfirm"],
})


const SigIn = () => {
  const [name, setName] = useState<string>("")
  const [email, setEmail] = useState<string>("")
  const [password, setPassword] = useState<string>("")
  const [passwordConfirm, setPasswordConfirm] = useState<string>("")
  const [isLoading, setIsLoading] = useState<boolean>(false)

  function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    
    try {
      setIsLoading(true)

      const data = signUpSchema.parse({
        name,
        email,
        password,
        passwordConfirm
      })
      
      console.log(data)

    } catch (error){
      if (error instanceof ZodError) {
        return alert(error.issues[0].message)
      }

      alert("Não foi possível cadastrar!")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <form className="w-full flex flex-col gap-4" onSubmit={onSubmit}>
      <Input required legend="Name" value={name} placeholder="Seu nome" onChange={(e) => setName(e.target.value)}/>
      <Input type="email" required legend="E-mail" value={email} placeholder="seu@email.com" onChange={(e) => setEmail(e.target.value)}/>
      <Input type="password" required legend="Senha" value={password} placeholder="123456" onChange={(e) => setPassword(e.target.value)}/>
      <Input type="password" required legend="Confirmação da Senha" value={passwordConfirm} placeholder="123456" onChange={(e) => setPasswordConfirm(e.target.value)}/>
      <Button type="submit" isLoading={isLoading}>Cadastrar</Button>
      <a href="/" className="text-sm font-semibold text-gray-100 mt-10 mb-4 text-center hover:text-green-800 transition ease-linear">Já tenho uma conta</a>
    </form>
  )
}

export default SigIn