import { useAuthStore } from "../Store/AuthStore";
import { Navigate, Outlet } from "react-router-dom";

export default function ProtectedRoutes() {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);

  console.log("🔐 ProtectedRoutes check - isAuthenticated:", isAuthenticated);

  if (!isAuthenticated) {
    console.log("❌ Not authenticated, redirecting to /login");
    return <Navigate to="/login" replace />;
  }

  console.log("✅ Authenticated! Allowing access to dashboard");
  return <Outlet />;
}