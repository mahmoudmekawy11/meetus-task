import { Navigate } from "react-router-dom";
import { useAuthStore } from "@/store/auth-store";

interface AuthRouteProps {
  children: React.ReactNode;
}

const AuthRoute = ({ children }: AuthRouteProps) => {
  const { isAuthenticated } = useAuthStore();

  if (isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  return <>{children}</>;
};

export default AuthRoute;
