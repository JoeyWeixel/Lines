const Router = createBrowserRouter({
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
});

export default Router