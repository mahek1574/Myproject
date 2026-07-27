import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function ProtectedRoute({ children, requireAuth = true, allowedRoles = [] }) {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#EAF0EB] dark:bg-[#0f1710]">
        <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-[#6B8F7B]"></div>
      </div>
    );
  }

  if (requireAuth) {
    if (!user) {
      // User is not logged in but trying to access a protected route -> redirect to unified login
      return <Navigate to="/login" replace />;
    }

    if (allowedRoles.length > 0 && !allowedRoles.includes(user.role)) {
      // User is logged in but doesn't have the required role -> redirect to their correct dashboard
      const fallbackDashboard = user.role === "admin" ? "/admin/dashboard" : "/user/dashboard";
      return <Navigate to={fallbackDashboard} replace />;
    }
  } else {
    // requireAuth is false (public authentication pages)
    if (user) {
      // User is already logged in, redirect them to their respective dashboard
      const dashboard = user.role === "admin" ? "/admin/dashboard" : "/user/dashboard";
      return <Navigate to={dashboard} replace />;
    }
  }

  return children;
}
