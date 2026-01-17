const NotFound = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div className="flex flex-col">
        <h1 className="text-2xl font-semibold mb-10">Op's! Essa página não existe. 😑</h1>
        <a href="/" className="transition-transform ease-linear duration-300 hover:scale-110 hover:text-green-100 text-center">Voltar para o início</a>
      </div>
    </div>
  )
}

export default NotFound