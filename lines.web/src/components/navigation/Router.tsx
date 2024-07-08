import LoginPage from "@/pages/auth/login/LoginPage";
import HomePage from "@/pages/home/HomePage";
import ProfilePage from "@/pages/profile/ProfilePage";
import SplashPage from "@/pages/splash/SplashPage";
import { Navigate, Outlet, createBrowserRouter } from "react-router-dom";

const Authenticate : React.FC = () => {
  //TODO - Authentication hook
  const isAuthenticated = true;

  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
}

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

export default Router