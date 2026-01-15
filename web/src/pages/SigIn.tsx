import Button from "../components/Button"
import Input from "../components/Input"

const SigIn = () => {
  return (
    <form onSubmit={((e) => e.preventDefault())} className="w-full flex flex-col gap-4">
      <Input type="email" required legend="E-mail" placeholder="seu@email.com"/>
      <Input type="password" required legend="Senha" placeholder="123456"/>
      <Button>Entrar</Button>
    </form>
  )
}

export default SigIn