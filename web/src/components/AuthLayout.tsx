import { Outlet } from "react-router"

import logoSvg from "../assets/logo.svg"

const AuthLayout = () => {
  return (
    <div className="w-screen h-screen bg-gray-400 flex flex-col justify-center items-center p-8">
      <main className="bg-gray-500 p-8 flex flex-col items-center w-full md:max-w-[462px]">
        <img src={logoSvg} alt="Logo" className="my-8"/>
        <Outlet />
      </main>
    </div>
  )
}

export default AuthLayout