import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Registration from "../pages/registration";
import LoginPage from "../pages/login";
import DashboardPage from "../pages/dashbaord";
import HomePage from "../pages/home";
import VerifyEmail from "../pages/verifyEmail";
import RequireAuth from "../authentication/requireAuth";
import RequireAdmin from "../authentication/requireAdmin";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true, element: <RequireAuth>
          <HomePage />
        </RequireAuth>
      },

      {
        path: "/register",
        element: <Registration />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/dashboard",
        element:
          <RequireAuth>
            <RequireAdmin>
              <DashboardPage />
            </RequireAdmin>
          </RequireAuth>
        ,
      },
      {
        path: "/verify/:token",
        element: <VerifyEmail />,
      },
    ]
  },

]);

export default router
