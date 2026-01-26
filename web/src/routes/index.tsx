import { BrowserRouter } from "react-router";
import AuthRoutes from "./AuthRoutes";
import EmployeeRoutes from "./EmployeeRoutes"
import ManagerRoutes from "./ManagerRoutes"
import Loading from "../components/Loading";

const Routes = () => {
  const isLoading = true
  if (isLoading) {
    return <Loading />
  }

  return (
    <BrowserRouter>
      {/* <ManagerRoutes /> */}
      {/* <EmployeeRoutes /> */}
      <AuthRoutes />
    </BrowserRouter>
  )
}

export default Routes