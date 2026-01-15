import {Routes, Route} from "react-router"

import SigIn from "../pages/SigIn"
import AuthLayout from "../components/AuthLayout"

const AuthRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<AuthLayout />}>
        <Route path="/" element={<SigIn />}/>
      </Route>
    </Routes>
  )
}

export default AuthRoutes