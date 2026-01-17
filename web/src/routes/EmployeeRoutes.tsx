import {Routes, Route} from "react-router"

import NotFound from "../pages/NotFound"
import Refund from "../pages/Refund"

const EmployeeRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Refund />} />
      <Route path="*" element={<NotFound />}/>
    </Routes>
  )
}

export default EmployeeRoutes