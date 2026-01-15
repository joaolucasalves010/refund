import {Routes, Route} from "react-router"

import SigIn from "../pages/SigIn"
import SignUp from "../pages/SignUp"

import AuthLayout from "../components/AuthLayout"

const AuthRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<AuthLayout />}>
        <Route path="/" element={<SigIn />}/>
        <Route path="/signup" element={<SignUp />}/>
      </Route>
    </Routes>
  )
}

export default AuthRoutes