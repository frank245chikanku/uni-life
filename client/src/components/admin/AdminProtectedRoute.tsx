import { ReactNode, useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

const API_URL =
  import.meta.env.VITE_API_URL ||
  "http://localhost:7000";

interface AdminProtectedRouteProps {
  children: ReactNode;
}

const AdminProtectedRoute = ({
  children,
}: AdminProtectedRouteProps) => {
  const [checking, setChecking] = useState(true);
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    const verifyAdmin = async () => {
      const token = localStorage.getItem("adminToken");

      if (!token) {
        setAuthenticated(false);
        setChecking(false);
        return;
      }

      try {
        const response = await fetch(
          `${API_URL}/api/admin/me`,
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (!response.ok) {
          localStorage.removeItem("adminToken");
          setAuthenticated(false);
          setChecking(false);
          return;
        }

        const data = await response.json();

        if (!data.success) {
          localStorage.removeItem("adminToken");
          setAuthenticated(false);
          setChecking(false);
          return;
        }

        setAuthenticated(true);
      } catch (error) {
        console.error(
          "Admin authentication verification failed:",
          error
        );

        setAuthenticated(false);
      } finally {
        setChecking(false);
      }
    };

    verifyAdmin();
  }, []);

  if (checking) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#f7f9fc]">
        <div className="text-center">
          <div className="mx-auto h-7 w-7 animate-spin rounded-full border-2 border-slate-200 border-t-[#06264A]" />

          <p className="mt-3 text-sm text-slate-500">
            Verifying administrator access...
          </p>
        </div>
      </div>
    );
  }

  if (!authenticated) {
    return (
      <Navigate
        to="/admin/signin"
        replace
      />
    );
  }

  return <>{children}</>;
};

export default AdminProtectedRoute;