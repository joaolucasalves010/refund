import {Routes, Route} from "react-router"
import SigIn from "../pages/SigIn"

const AuthRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<SigIn />}/>
    </Routes>
  )
}

export default AuthRoutes