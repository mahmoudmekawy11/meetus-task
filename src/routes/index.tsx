import { createBrowserRouter, Navigate } from "react-router-dom";
import Home from "@/pages/Home";
import Login from "@/pages/Login";
import Signup from "@/pages/Signup";
import ProtectedRoute from "@/components/guards/protected-route";
import AuthRoute from "@/components/guards/auth-route";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <ProtectedRoute>
        <Home />
      </ProtectedRoute>
    ),
  },
  {
    path: "/home",
    element: (
      <ProtectedRoute>
        <Home />
      </ProtectedRoute>
    ),
  },
  {
    path: "/login",
    element: (
      <AuthRoute>
        <Login />
      </AuthRoute>
    ),
  },
  {
    path: "/signup",
    element: (
      <AuthRoute>
        <Signup />
      </AuthRoute>
    ),
  },
  {
    path: "*",
    element: <Navigate to="/" replace />,
  },
]);
