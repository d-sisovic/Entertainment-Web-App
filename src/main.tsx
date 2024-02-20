import React from "react";
import App from "./App.tsx";
import ReactDOM from "react-dom/client";
import Home from "./components/home/Home.tsx";
import { ErrorBoundary } from "react-error-boundary";
import Login from "./components/auth/login/Login.tsx";
import { RoutePaths } from "./ts/enums/route-paths.enum.ts";
import Register from "./components/auth/register/Register.tsx";
import NotFoundPage from "./components/not-found/NotFoundPage.tsx";
import { RouterProvider, createHashRouter } from "react-router-dom";
import PrivateRoute from "./components/private-route/PrivateRoute.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ErrorBoundaryComponent from "./components/ui/error-boundary/ErrorBoundaryComponent.tsx";
import "./index.scss";

const queryClient = new QueryClient();

const routes = [
  {
    element: <ErrorBoundary fallback={<ErrorBoundaryComponent />}><App /></ErrorBoundary>,
    children: [
      {
        path: RoutePaths.HOME,
        element: <PrivateRoute component={<Home />} />,
        // children: [
        //   {
        //     path: RoutePaths.LINK,
        //     element: <LinkWrapper />
        //   },
        //   {
        //     path: RoutePaths.PROFILE,
        //     element: <Profile />
        //   }
        // ]
      },
      {
        path: RoutePaths.LOGIN,
        element: <Login />
      },
      {
        path: RoutePaths.REGISTER,
        element: <Register />
      }
    ],
    errorElement: <NotFoundPage />
  }
];

const router = createHashRouter(routes);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>
);
