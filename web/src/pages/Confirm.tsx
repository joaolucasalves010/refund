import okSvg from "../assets/ok.svg"
import Button from "../components/Button"

const Confirm = () => {

  // lg:min-h-[388px]

  return (
    <div className="bg-gray-500 p-10 lg:min-w-[512px] rounded-2xl flex flex-col justify-center items-center">
      <h1 className="font-bold text-green-100 text-2xl text-center">Solicitação enviada!</h1> 
      <img src={okSvg} alt="Icone de ok" className="py-6 w-28" />
      <p className="text-gray-200 text-sm text-center mb-10">Agora é apenas aguardar! Sua solicitação será analisada e, em <br /> breve, o setor financeiro irá entrar em contato com você.</p>
      <a href="/" className="w-full h-12 bg-green-100 text-white font-bold text-sm flex justify-center items-center p-5 rounded-lg transition ease-linear hover:opacity-90">Nova solicitação</a>
    </div>
  )
}

export default Confirm