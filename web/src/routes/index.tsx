import { BrowserRouter } from "react-router";
import AuthRoutes from "./auth-routes";

const Routes = () => {
  return (
    <BrowserRouter>
      <AuthRoutes />
    </BrowserRouter>
  )
}

export default Routes