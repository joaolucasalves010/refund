import { useEffect, useRef} from "react"

const Loading = () => {

  const spanRef = useRef<HTMLSpanElement | null>(null)

  let dots = 0
  useEffect(() => {
    const interval = setInterval(() => {
      if (dots >= 3) {
        dots = 0
        spanRef.current!.textContent = "Carregando"
      } else {
        dots += 1
        spanRef.current!.textContent += "."
      }
    }, 1200)
  
    return () => clearInterval(interval)
  }, [])
  


  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <span className="text-gray-200 font-semibold text-sm" ref={spanRef}>Carregando</span>
    </div>
  )
}

export default Loading