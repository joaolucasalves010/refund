import {Routes, Route} from "react-router"

import SigIn from "../pages/SigIn"
import SignUp from "../pages/SignUp"

import AuthLayout from "../components/AuthLayout"
import NotFound from "../pages/NotFound"

const AuthRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<AuthLayout />}>
        <Route path="/sigin" element={<SigIn />}/>
        <Route path="/signup" element={<SignUp />}/>
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default AuthRoutes