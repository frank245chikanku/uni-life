
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  ArrowRight,
  CheckCircle2,
  Eye,
  EyeOff,
  LockKeyhole,
  Search,
  ShieldCheck,
  UserRound,
  UserCog,
  MessageCircle,
} from "lucide-react";

type AccessType = "student" | "admin" | null;
type StudentAction = "new" | "existing" | null;

const API_URL =
  import.meta.env.VITE_API_URL ||
  "http://localhost:7000";

const Query = () => {
  const navigate = useNavigate();

  const [accessType, setAccessType] =
    useState<AccessType>(null);

  const [studentAction, setStudentAction] =
    useState<StudentAction>(null);

  const [queryId, setQueryId] =
    useState("");

  const [securityCode, setSecurityCode] =
    useState("");

  const [adminUsername, setAdminUsername] =
    useState("");

  const [adminPassword, setAdminPassword] =
    useState("");

  const [showSecurityCode, setShowSecurityCode] =
    useState(false);

  const [showAdminPassword, setShowAdminPassword] =
    useState(false);

  const [adminLoading, setAdminLoading] =
    useState(false);

  const [error, setError] =
    useState("");

  const resetPage = () => {
    setAccessType(null);
    setStudentAction(null);
    setQueryId("");
    setSecurityCode("");
    setAdminUsername("");
    setAdminPassword("");
    setShowSecurityCode(false);
    setShowAdminPassword(false);
    setAdminLoading(false);
    setError("");
  };

  const selectAccess = (type: AccessType) => {
    setAccessType(type);
    setStudentAction(null);
    setError("");


    if (type === "admin") {
      localStorage.removeItem("adminToken");
      localStorage.removeItem("adminAuthenticated");
      localStorage.removeItem("adminName");
      localStorage.removeItem("adminId");
    }
  };

  const selectStudentAction = (
    action: StudentAction
  ) => {
    setStudentAction(action);
    setError("");
  };

  const handleStudentContinue = () => {
    setError("");

    if (studentAction === "new") {
      navigate("/query/send");
      return;
    }

    if (studentAction === "existing") {
      if (!queryId.trim()) {
        setError("Please enter your Query ID.");
        return;
      }

      if (!securityCode.trim()) {
        setError("Please enter your security code.");
        return;
      }

      navigate("/query/check", {
        state: {
          queryId: queryId.trim(),
          securityCode: securityCode.trim(),
        },
      });
    }
  };

 
  const handleAdminLogin = async () => {
    if (adminLoading) {
      return;
    }

    setError("");

    if (!adminUsername.trim()) {
      setError(
        "Please enter your administrator username."
      );
      return;
    }

    if (!adminPassword) {
      setError(
        "Please enter your administrator password."
      );
      return;
    }

    setAdminLoading(true);

    
    localStorage.removeItem("adminToken");
    localStorage.removeItem("adminAuthenticated");
    localStorage.removeItem("adminName");
    localStorage.removeItem("adminId");

    try {
      const response = await fetch(
        `${API_URL}/api/admin/login`,
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify({
            username: adminUsername.trim(),
            password: adminPassword,
          }),
        }
      );

      let data: {
        success?: boolean;
        message?: string;
        token?: string;
        admin?: {
          id?: string;
          username?: string;
        };
      };

      try {
        data = await response.json();
      } catch {
        setError(
          "The server returned an invalid response."
        );
        return;
      }

     
      if (
        !response.ok ||
        data.success !== true
      ) {
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
       * Only store the JWT after the backend
       * has successfully authenticated the admin.
       */
      localStorage.setItem(
        "adminToken",
        data.token
      );

      /*
       * Optional compatibility information.
       * The JWT remains the actual authentication
       * mechanism.
       */
      if (data.admin?.username) {
        localStorage.setItem(
          "adminName",
          data.admin.username
        );
      }

      if (data.admin?.id) {
        localStorage.setItem(
          "adminId",
          data.admin.id
        );
      }

      localStorage.setItem(
        "adminAuthenticated",
        "true"
      );

      /*
       * Only now is the administrator allowed
       * to enter the protected dashboard.
       */
      navigate("/admin/queries", {
        replace: true,
      });
    } catch (error) {
      console.error(
        "Administrator sign in error:",
        error
      );

      localStorage.removeItem("adminToken");
      localStorage.removeItem(
        "adminAuthenticated"
      );

      setError(
        "Unable to connect to the server. Please make sure the UNI Life Guide server is running."
      );
    } finally {
      setAdminLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#f7f9fc] text-[#06264A]">
      <main className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-12">

        {/* HEADER */}

        <div className="mx-auto mb-8 max-w-3xl text-center">

          <div className="mb-3 flex items-center justify-center gap-2">
            <MessageCircle
              size={18}
              strokeWidth={2}
              className="text-[#155A96]"
            />

            <span className="text-xs font-semibold uppercase tracking-[0.12em] text-[#155A96]">
              Query Centre
            </span>
          </div>

          <h1 className="text-2xl font-bold tracking-tight text-[#06264A] sm:text-3xl">
            How can we help?
          </h1>

          <p className="mx-auto mt-2 max-w-xl text-sm leading-6 text-slate-500">
            Submit a question, check an existing query.
          </p>

        </div>

        <div className="mx-auto max-w-4xl">

          {/* ACCESS SELECTION */}

          {!accessType && (
            <section className="rounded-xl border border-slate-200 bg-white shadow-sm">

              <div className="border-b border-slate-100 px-5 py-4 sm:px-6">

                <h2 className="text-sm font-bold text-[#06264A]">
                  Select your access
                </h2>

                <p className="mt-1 text-xs text-slate-500">
                  Choose the option that applies to you.
                </p>

              </div>

              <div className="grid gap-4 p-5 sm:p-6 md:grid-cols-2">

                {/* STUDENT */}

                <button
                  type="button"
                  onClick={() =>
                    selectAccess("student")
                  }
                  className="
                    group
                    rounded-xl
                    border
                    border-slate-200
                    bg-white
                    p-5
                    text-left
                    transition
                    duration-200
                    hover:border-[#b8c9dc]
                    hover:shadow-sm
                  "
                >

                  <div className="flex items-center justify-between">

                    <div
                      className="
                        flex
                        h-10
                        w-10
                        items-center
                        justify-center
                        rounded-lg
                        bg-[#edf3fa]
                        text-[#155A96]
                      "
                    >
                      <UserRound size={19} />
                    </div>

                    <ArrowRight
                      size={17}
                      className="
                        text-slate-300
                        transition
                        group-hover:translate-x-1
                        group-hover:text-[#155A96]
                      "
                    />

                  </div>

                  <h3 className="mt-5 text-sm font-bold text-[#06264A]">
                    Student
                  </h3>

                  <p className="mt-1.5 text-xs leading-5 text-slate-500">
                    Submit a new query or check the status
                    and response of an existing query.
                  </p>

                </button>

                {/* ADMIN */}

                <button
                  type="button"
                  onClick={() =>
                    selectAccess("admin")
                  }
                  className="
                    group
                    rounded-xl
                    border
                    border-slate-200
                    bg-white
                    p-5
                    text-left
                    transition
                    duration-200
                    hover:border-[#b8c9dc]
                    hover:shadow-sm
                  "
                >

                  <div className="flex items-center justify-between">

                    <div
                      className="
                        flex
                        h-10
                        w-10
                        items-center
                        justify-center
                        rounded-lg
                        bg-[#edf3fa]
                        text-[#155A96]
                      "
                    >
                      <UserCog size={19} />
                    </div>

                    <ArrowRight
                      size={17}
                      className="
                        text-slate-300
                        transition
                        group-hover:translate-x-1
                        group-hover:text-[#155A96]
                      "
                    />

                  </div>

                  <h3 className="mt-5 text-sm font-bold text-[#06264A]">
                    Administrator
                  </h3>

                  <p className="mt-1.5 text-xs leading-5 text-slate-500">
                    Access the query management area to
                    review and respond to student enquiries.
                  </p>

                </button>

              </div>

              <div
                className="
                  flex
                  items-center
                  gap-2
                  border-t
                  border-slate-100
                  px-5
                  py-3
                  sm:px-6
                "
              >

                <LockKeyhole
                  size={13}
                  className="text-slate-400"
                />

                <p className="text-[11px] text-slate-400">
                  Student and administrator access are
                  securely separated.
                </p>

              </div>

            </section>
          )}

          {/* STUDENT */}

          {accessType === "student" && (
            <section className="rounded-xl border border-slate-200 bg-white shadow-sm">

              <div
                className="
                  flex
                  items-center
                  justify-between
                  border-b
                  border-slate-100
                  px-5
                  py-4
                  sm:px-6
                "
              >

                <div className="flex items-center gap-3">

                  <div
                    className="
                      flex
                      h-9
                      w-9
                      items-center
                      justify-center
                      rounded-lg
                      bg-[#edf3fa]
                      text-[#155A96]
                    "
                  >
                    <UserRound size={17} />
                  </div>

                  <div>

                    <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-[#155A96]">
                      Student
                    </p>

                    <h2 className="text-sm font-bold text-[#06264A]">
                      Query Centre
                    </h2>

                  </div>

                </div>

                <button
                  type="button"
                  onClick={resetPage}
                  className="
                    text-xs
                    font-medium
                    text-slate-400
                    transition
                    hover:text-[#155A96]
                  "
                >
                  Change
                </button>

              </div>

              <div className="p-5 sm:p-6">

                <p className="mb-5 text-sm text-slate-500">
                  What would you like to do?
                </p>

                <div className="grid gap-3 sm:grid-cols-2">

                  {/* NEW QUERY */}

                  <button
                    type="button"
                    onClick={() =>
                      selectStudentAction("new")
                    }
                    className={`
                      rounded-lg
                      border
                      p-4
                      text-left
                      transition
                      ${
                        studentAction === "new"
                          ? "border-[#155A96] bg-[#f4f8fc]"
                          : "border-slate-200 hover:border-[#c6d4e5]"
                      }
                    `}
                  >

                    <div className="flex items-center justify-between">

                      <div
                        className={`
                          flex
                          h-9
                          w-9
                          items-center
                          justify-center
                          rounded-lg
                          ${
                            studentAction === "new"
                              ? "bg-[#155A96] text-white"
                              : "bg-[#edf3fa] text-[#155A96]"
                          }
                        `}
                      >
                        <MessageCircle size={17} />
                      </div>

                      {studentAction === "new" && (
                        <CheckCircle2
                          size={16}
                          className="text-[#155A96]"
                        />
                      )}

                    </div>

                    <h3 className="mt-4 text-sm font-bold text-[#06264A]">
                      Submit a Query
                    </h3>

                    <p className="mt-1 text-xs leading-5 text-slate-500">
                      Send a question to the Uni-Guide
                      support team.
                    </p>

                  </button>

                  {/* EXISTING QUERY */}

                  <button
                    type="button"
                    onClick={() =>
                      selectStudentAction("existing")
                    }
                    className={`
                      rounded-lg
                      border
                      p-4
                      text-left
                      transition
                      ${
                        studentAction === "existing"
                          ? "border-[#155A96] bg-[#f4f8fc]"
                          : "border-slate-200 hover:border-[#c6d4e5]"
                      }
                    `}
                  >

                    <div className="flex items-center justify-between">

                      <div
                        className={`
                          flex
                          h-9
                          w-9
                          items-center
                          justify-center
                          rounded-lg
                          ${
                            studentAction === "existing"
                              ? "bg-[#155A96] text-white"
                              : "bg-[#edf3fa] text-[#155A96]"
                          }
                        `}
                      >
                        <Search size={17} />
                      </div>

                      {studentAction === "existing" && (
                        <CheckCircle2
                          size={16}
                          className="text-[#155A96]"
                        />
                      )}

                    </div>

                    <h3 className="mt-4 text-sm font-bold text-[#06264A]">
                      Check a Query
                    </h3>

                    <p className="mt-1 text-xs leading-5 text-slate-500">
                      Use your Query ID and security code
                      to view your query.
                    </p>

                  </button>

                </div>

                {/* NEW QUERY CONTINUE */}

                {studentAction === "new" && (
                  <div
                    className="
                      mt-5
                      border-t
                      border-slate-100
                      pt-5
                    "
                  >

                    <div className="mb-4">

                      <h3 className="text-sm font-bold text-[#06264A]">
                        Submit a new query
                      </h3>

                      <p className="mt-1 text-xs leading-5 text-slate-500">
                        Continue to the query form. You will
                        receive a unique Query ID after
                        submitting your question.
                      </p>

                    </div>

                    <button
                      type="button"
                      onClick={handleStudentContinue}
                      className="
                        inline-flex
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
                        sm:w-auto
                      "
                    >
                      Continue
                      <ArrowRight size={15} />
                    </button>

                  </div>
                )}

                {/* EXISTING QUERY */}

                {studentAction === "existing" && (
                  <div
                    className="
                      mt-5
                      border-t
                      border-slate-100
                      pt-5
                    "
                  >

                    <div className="mb-4">

                      <div className="flex items-center gap-2">

                        <LockKeyhole
                          size={15}
                          className="text-[#155A96]"
                        />

                        <h3 className="text-sm font-bold text-[#06264A]">
                          Check your query
                        </h3>

                      </div>

                      <p className="mt-1 text-xs leading-5 text-slate-500">
                        Enter the details provided when you
                        submitted your query.
                      </p>

                    </div>

                    <div className="grid gap-4 sm:grid-cols-2">

                      {/* QUERY ID */}

                      <div>

                        <label
                          htmlFor="queryId"
                          className="
                            mb-1.5
                            block
                            text-xs
                            font-semibold
                            text-[#06264A]
                          "
                        >
                          Query ID
                        </label>

                        <div className="relative">

                          <Search
                            size={15}
                            className="
                              absolute
                              left-3
                              top-1/2
                              -translate-y-1/2
                              text-slate-400
                            "
                          />

                          <input
                            id="queryId"
                            type="text"
                            value={queryId}
                            onChange={(e) =>
                              setQueryId(
                                e.target.value.toUpperCase()
                              )
                            }
                            placeholder="QRY-10482"
                            autoComplete="off"
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
                            "
                          />

                        </div>

                      </div>

                      {/* SECURITY CODE */}

                      <div>

                        <label
                          htmlFor="securityCode"
                          className="
                            mb-1.5
                            block
                            text-xs
                            font-semibold
                            text-[#06264A]
                          "
                        >
                          Security Code
                        </label>

                        <div className="relative">

                          <LockKeyhole
                            size={15}
                            className="
                              absolute
                              left-3
                              top-1/2
                              -translate-y-1/2
                              text-slate-400
                            "
                          />

                          <input
                            id="securityCode"
                            type={
                              showSecurityCode
                                ? "text"
                                : "password"
                            }
                            value={securityCode}
                            onChange={(e) =>
                              setSecurityCode(
                                e.target.value
                              )
                            }
                            placeholder="Security code"
                            autoComplete="off"
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
                            "
                          />

                          <button
                            type="button"
                            onClick={() =>
                              setShowSecurityCode(
                                (previous) =>
                                  !previous
                              )
                            }
                            className="
                              absolute
                              right-3
                              top-1/2
                              -translate-y-1/2
                              text-slate-400
                              hover:text-[#155A96]
                            "
                            aria-label={
                              showSecurityCode
                                ? "Hide security code"
                                : "Show security code"
                            }
                          >
                            {showSecurityCode ? (
                              <EyeOff size={15} />
                            ) : (
                              <Eye size={15} />
                            )}
                          </button>

                        </div>

                      </div>

                    </div>

                    {error && (
                      <p className="mt-3 text-xs font-medium text-red-500">
                        {error}
                      </p>
                    )}

                    <button
                      type="button"
                      onClick={handleStudentContinue}
                      className="
                        mt-5
                        inline-flex
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
                        sm:w-auto
                      "
                    >
                      View Query
                      <ArrowRight size={15} />
                    </button>

                  </div>
                )}

              </div>

            </section>
          )}

          {/* ADMINISTRATOR */}

          {accessType === "admin" && (
            <section className="rounded-xl border border-slate-200 bg-white shadow-sm">

              <div
                className="
                  flex
                  items-center
                  justify-between
                  border-b
                  border-slate-100
                  px-5
                  py-4
                  sm:px-6
                "
              >

                <div className="flex items-center gap-3">

                  <div
                    className="
                      flex
                      h-9
                      w-9
                      items-center
                      justify-center
                      rounded-lg
                      bg-[#edf3fa]
                      text-[#155A96]
                    "
                  >
                    <ShieldCheck size={18} />
                  </div>

                  <div>

                    <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-[#155A96]">
                      Administrator
                    </p>

                    <h2 className="text-sm font-bold text-[#06264A]">
                      Query Centre
                    </h2>

                  </div>

                </div>

                <button
                  type="button"
                  onClick={resetPage}
                  disabled={adminLoading}
                  className="
                    text-xs
                    font-medium
                    text-slate-400
                    transition
                    hover:text-[#155A96]
                    disabled:cursor-not-allowed
                    disabled:opacity-50
                  "
                >
                  Change
                </button>

              </div>

              <div className="mx-auto max-w-md p-5 sm:p-6">

                <div className="mb-5">

                  <h3 className="text-sm font-bold text-[#06264A]">
                    Administrator sign in
                  </h3>

                  <p className="mt-1 text-xs leading-5 text-slate-500">
                    Sign in to review, manage and respond
                    to student queries.
                  </p>

                </div>

                <div className="space-y-4">

                  {/* USERNAME */}

                  <div>

                    <label
                      htmlFor="adminUsername"
                      className="
                        mb-1.5
                        block
                        text-xs
                        font-semibold
                        text-[#06264A]
                      "
                    >
                      Username
                    </label>

                    <div className="relative">

                      <UserRound
                        size={15}
                        className="
                          absolute
                          left-3
                          top-1/2
                          -translate-y-1/2
                          text-slate-400
                        "
                      />

                      <input
                        id="adminUsername"
                        type="text"
                        value={adminUsername}
                        onChange={(e) =>
                          setAdminUsername(
                            e.target.value
                          )
                        }
                        placeholder="Enter username"
                        autoComplete="username"
                        disabled={adminLoading}
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

                  {/* PASSWORD */}

                  <div>

                    <label
                      htmlFor="adminPassword"
                      className="
                        mb-1.5
                        block
                        text-xs
                        font-semibold
                        text-[#06264A]
                      "
                    >
                      Password
                    </label>

                    <div className="relative">

                      <LockKeyhole
                        size={15}
                        className="
                          absolute
                          left-3
                          top-1/2
                          -translate-y-1/2
                          text-slate-400
                        "
                      />

                      <input
                        id="adminPassword"
                        type={
                          showAdminPassword
                            ? "text"
                            : "password"
                        }
                        value={adminPassword}
                        onChange={(e) =>
                          setAdminPassword(
                            e.target.value
                          )
                        }
                        placeholder="Enter password"
                        autoComplete="current-password"
                        disabled={adminLoading}
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
                          setShowAdminPassword(
                            (previous) =>
                              !previous
                          )
                        }
                        disabled={adminLoading}
                        className="
                          absolute
                          right-3
                          top-1/2
                          -translate-y-1/2
                          text-slate-400
                          hover:text-[#155A96]
                          disabled:cursor-not-allowed
                        "
                        aria-label={
                          showAdminPassword
                            ? "Hide password"
                            : "Show password"
                        }
                      >
                        {showAdminPassword ? (
                          <EyeOff size={15} />
                        ) : (
                          <Eye size={15} />
                        )}
                      </button>

                    </div>

                  </div>

                  {/* ERROR */}

                  {error && (
                    <div className="rounded-lg border border-red-100 bg-red-50 px-3 py-2.5">
                      <p className="text-xs font-medium text-red-600">
                        {error}
                      </p>
                    </div>
                  )}

                  {/* LOGIN BUTTON */}

                  <button
                    type="button"
                    onClick={handleAdminLogin}
                    disabled={adminLoading}
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

                    {adminLoading ? (
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

                <div
                  className="
                    mt-5
                    flex
                    items-start
                    gap-2.5
                    border-t
                    border-slate-100
                    pt-4
                  "
                >

                  <LockKeyhole
                    size={13}
                    className="mt-0.5 shrink-0 text-slate-400"
                  />

                  <p className="text-[11px] leading-5 text-slate-400">
                    Administrator access is restricted to
                    authorised Uni-Guide personnel.
                  </p>

                </div>

              </div>

            </section>
          )}

        </div>

        {/* FOOTER */}

        <div
          className="
            mx-auto
            mt-5
            flex
            max-w-4xl
            items-center
            justify-center
            gap-2
            text-center
          "
        >

          <LockKeyhole
            size={12}
            className="text-slate-400"
          />

          <p className="text-[10px] text-slate-400">
            Your query information is handled through
            separate student and administrator access.
          </p>

        </div>

      </main>
    </div>
  );
};

export default Query;
