import { useAuth } from "./context/auth.context";
import { Navigate, Outlet } from "react-router-dom";

function ProtectedRoutes() {
  const { isAuthenticated, loading } = useAuth();

  if (loading) return <h1>loading...</h1>;
  if (!loading && !isAuthenticated) return <Navigate to={"/login"} replace />;

  return <Outlet />;
}

export default ProtectedRoutes;
