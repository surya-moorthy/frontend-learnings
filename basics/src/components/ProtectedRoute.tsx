import { Navigate, Outlet } from "react-router-dom";

type proRoute = {
    user : string,
    redirectPath : string,
    children : React.ReactNode
}

export default function ProtectedRoute({ user, redirectPath = "/login", children } : proRoute) {
  if (!user) {
    return <Navigate to={redirectPath} replace />;
  }

  return children;
}
