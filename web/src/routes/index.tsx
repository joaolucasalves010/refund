import { BrowserRouter } from "react-router";
import AuthRoutes from "./AuthRoutes";
import EmployeeRoutes from "./EmployeeRoutes"
import ManagerRoutes from "./ManagerRoutes"

const Routes = () => {
  return (
    <BrowserRouter>
      <ManagerRoutes />
      {/* <EmployeeRoutes /> */}
      {/* <AuthRoutes /> */}
    </BrowserRouter>
  )
}

export default Routes