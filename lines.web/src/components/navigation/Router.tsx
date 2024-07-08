import LoginPage from "@/pages/auth/login/LoginPage";
import HomePage from "@/pages/home/HomePage";
import ProfilePage from "@/pages/profile/ProfilePage";
import SplashPage from "@/pages/splash/SplashPage";
import { Outlet, createBrowserRouter, useNavigate } from "react-router-dom";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <SplashPage />
  },
  {
    path: "/login",
    element: <LoginPage />
  },
  {
    path: "/authenticated",
    element: <Authenticate />,
    children: [
      {
        path: "/home",
        element: <HomePage />
      },
      {
        path: "/profile",
        element: <ProfilePage />
      },
    ]
  },
]);

const Authenticate : (React.FC | void) = () => {
  const navigate = useNavigate();
  //TODO - Authentication hook
  const isAuthenticated = true;

  return isAuthenticated ? <Outlet /> : navigate("/login");
}

export default Router