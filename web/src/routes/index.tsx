import { BrowserRouter } from "react-router";
import AuthRoutes from "./AuthRoutes";
import EmployeeRoutes from "./EmployeeRoutes"

const Routes = () => {
  return (
    <BrowserRouter>
      <EmployeeRoutes />
      <AuthRoutes />
    </BrowserRouter>
  )
}

export default Routes