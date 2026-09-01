
import {
  FormEvent,
  useEffect,
  useState,
} from "react";

import { useNavigate } from "react-router-dom";

import {
  ArrowRight,
  Eye,
  EyeOff,
  LockKeyhole,
  ShieldCheck,
  UserRound,
} from "lucide-react";

const API_URL =
  import.meta.env.VITE_API_URL ||
  "http://localhost:7000";

const AdminSignIn = () => {
  const navigate = useNavigate();

  const [username, setUsername] =
    useState("");

  const [password, setPassword] =
    useState("");

  const [showPassword, setShowPassword] =
    useState(false);

  const [error, setError] =
    useState("");

  const [loading, setLoading] =
    useState(false);

  /*
   * IMPORTANT:
   * Remove any previous administrator session
   * when the sign-in page is opened.
   *
   * This prevents an old valid JWT from making
   * it appear that a failed login succeeded.
   */
  useEffect(() => {
    localStorage.removeItem("adminToken");
    localStorage.removeItem("adminAuthenticated");
    localStorage.removeItem("adminName");
    localStorage.removeItem("adminId");
  }, []);

  const handleSubmit = async (
    e: FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    if (loading) {
      return;
    }

    setError("");

    if (!username.trim()) {
      setError(
        "Please enter your administrator username."
      );

      return;
    }

    if (!password) {
      setError(
        "Please enter your administrator password."
      );

      return;
    }

    setLoading(true);

    try {
      const response = await fetch(
        `${API_URL}/api/admin/login`,
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify({
            username: username.trim(),
            password,
          }),
        }
      );

      let data: {
        success?: boolean;
        message?: string;
        token?: string;
      };

      try {
        data = await response.json();
      } catch {
        setError(
          "The server returned an invalid response."
        );

        return;
      }

      /*
       * Login is successful ONLY when:
       *
       * 1. HTTP response is successful
       * 2. Backend explicitly says success === true
       * 3. Backend provides an authentication token
       */
      if (
        !response.ok ||
        data.success !== true
      ) {
        // Make absolutely sure no previous token survives
        localStorage.removeItem("adminToken");

        setError(
          data.message ||
            "Invalid administrator credentials."
        );

        return;
      }

      if (!data.token) {
        localStorage.removeItem("adminToken");

        setError(
          "Sign in failed because the server did not provide an authentication token."
        );

        return;
      }

      /*
       * Store the token ONLY after the backend
       * has confirmed the credentials.
       */
      localStorage.setItem(
        "adminToken",
        data.token
      );

      navigate("/admin/queries", {
        replace: true,
      });
    } catch (error) {
      console.error(
        "Administrator sign in error:",
        error
      );

      localStorage.removeItem("adminToken");

      setError(
        "Unable to connect to the server. Please make sure the UNI Life Guide server is running."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#f7f9fc] text-[#06264A]">
      <main className="flex min-h-screen items-center justify-center px-4 py-10 sm:px-6">
        <div className="w-full max-w-md">

          <div className="mb-7 text-center">
            <div className="mb-3 flex items-center justify-center">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#edf3fa] text-[#155A96]">
                <ShieldCheck
                  size={22}
                  strokeWidth={2}
                />
              </div>
            </div>

            <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#155A96]">
              UNI Life Guide
            </p>

            <h1 className="mt-2 text-2xl font-bold tracking-tight text-[#06264A]">
              Administrator Sign In
            </h1>

            <p className="mx-auto mt-2 max-w-sm text-sm leading-6 text-slate-500">
              Sign in to manage and respond to
              student queries.
            </p>
          </div>

          <section className="rounded-xl border border-slate-200 bg-white shadow-sm">

            <div className="border-b border-slate-100 px-5 py-4 sm:px-6">
              <div className="flex items-center gap-3">

                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#edf3fa] text-[#155A96]">
                  <LockKeyhole size={17} />
                </div>

                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-[#155A96]">
                    Secure Access
                  </p>

                  <h2 className="mt-0.5 text-sm font-bold text-[#06264A]">
                    Query Centre
                  </h2>
                </div>

              </div>
            </div>

            <form
              onSubmit={handleSubmit}
              className="p-5 sm:p-6"
            >

              <div className="mb-5">
                <h3 className="text-sm font-bold text-[#06264A]">
                  Welcome back
                </h3>

                <p className="mt-1 text-xs leading-5 text-slate-500">
                  Enter your administrator details
                  to continue.
                </p>
              </div>

              <div className="space-y-4">

                <div>
                  <label
                    htmlFor="admin-username"
                    className="mb-1.5 block text-xs font-semibold text-[#06264A]"
                  >
                    Username
                  </label>

                  <div className="relative">

                    <UserRound
                      size={15}
                      className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                    />

                    <input
                      id="admin-username"
                      type="text"
                      value={username}
                      onChange={(e) =>
                        setUsername(
                          e.target.value
                        )
                      }
                      placeholder="Enter username"
                      autoComplete="username"
                      disabled={loading}
                      className="
                        w-full
                        rounded-lg
                        border
                        border-slate-200
                        bg-white
                        py-2.5
                        pl-9
                        pr-3
                        text-sm
                        text-[#06264A]
                        outline-none
                        transition
                        placeholder:text-slate-400
                        focus:border-[#155A96]
                        focus:ring-2
                        focus:ring-[#155A96]/10
                        disabled:cursor-not-allowed
                        disabled:bg-slate-50
                      "
                    />

                  </div>
                </div>

                <div>
                  <label
                    htmlFor="admin-password"
                    className="mb-1.5 block text-xs font-semibold text-[#06264A]"
                  >
                    Password
                  </label>

                  <div className="relative">

                    <LockKeyhole
                      size={15}
                      className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                    />

                    <input
                      id="admin-password"
                      type={
                        showPassword
                          ? "text"
                          : "password"
                      }
                      value={password}
                      onChange={(e) =>
                        setPassword(
                          e.target.value
                        )
                      }
                      placeholder="Enter password"
                      autoComplete="current-password"
                      disabled={loading}
                      className="
                        w-full
                        rounded-lg
                        border
                        border-slate-200
                        bg-white
                        py-2.5
                        pl-9
                        pr-10
                        text-sm
                        text-[#06264A]
                        outline-none
                        transition
                        placeholder:text-slate-400
                        focus:border-[#155A96]
                        focus:ring-2
                        focus:ring-[#155A96]/10
                        disabled:cursor-not-allowed
                        disabled:bg-slate-50
                      "
                    />

                    <button
                      type="button"
                      onClick={() =>
                        setShowPassword(
                          (previous) =>
                            !previous
                        )
                      }
                      disabled={loading}
                      className="
                        absolute
                        right-3
                        top-1/2
                        -translate-y-1/2
                        text-slate-400
                        transition
                        hover:text-[#155A96]
                        disabled:cursor-not-allowed
                      "
                      aria-label={
                        showPassword
                          ? "Hide password"
                          : "Show password"
                      }
                    >
                      {showPassword ? (
                        <EyeOff size={15} />
                      ) : (
                        <Eye size={15} />
                      )}
                    </button>

                  </div>
                </div>

                {error && (
                  <div className="rounded-lg border border-red-100 bg-red-50 px-3 py-2.5">
                    <p className="text-xs font-medium text-red-600">
                      {error}
                    </p>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="
                    flex
                    w-full
                    items-center
                    justify-center
                    gap-2
                    rounded-lg
                    bg-[#06264A]
                    px-4
                    py-2.5
                    text-xs
                    font-semibold
                    text-white
                    transition
                    hover:bg-[#155A96]
                    focus:outline-none
                    focus:ring-2
                    focus:ring-[#155A96]/20
                    disabled:cursor-not-allowed
                    disabled:opacity-60
                  "
                >
                  {loading ? (
                    <>
                      <span className="h-3.5 w-3.5 animate-spin rounded-full border-2 border-white/30 border-t-white" />

                      Signing in...
                    </>
                  ) : (
                    <>
                      <ShieldCheck size={15} />

                      Sign in

                      <ArrowRight size={15} />
                    </>
                  )}
                </button>

              </div>

              <div className="mt-5 flex items-start gap-2.5 border-t border-slate-100 pt-4">

                <LockKeyhole
                  size={13}
                  className="mt-0.5 shrink-0 text-slate-400"
                />

                <p className="text-[11px] leading-5 text-slate-400">
                  Administrator access is restricted
                  to authorised UNI Life Guide personnel.
                </p>

              </div>

            </form>
          </section>

          <div className="mt-5 text-center">
            <p className="text-[10px] text-slate-400">
              UNI Life Guide · Query Management
            </p>
          </div>

        </div>
      </main>
    </div>
  );
};

export default AdminSignIn;

