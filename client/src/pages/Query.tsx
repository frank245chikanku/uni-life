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

const Query = () => {
    const navigate = useNavigate();

    const [accessType, setAccessType] = useState<AccessType>(null);
    const [studentAction, setStudentAction] =
        useState<StudentAction>(null);

    const [queryId, setQueryId] = useState("");
    const [securityCode, setSecurityCode] = useState("");

    const [adminUsername, setAdminUsername] = useState("");
    const [adminPassword, setAdminPassword] = useState("");

    const [showSecurityCode, setShowSecurityCode] =
        useState(false);

    const [showAdminPassword, setShowAdminPassword] =
        useState(false);

    const [error, setError] = useState("");

    const resetPage = () => {
        setAccessType(null);
        setStudentAction(null);
        setQueryId("");
        setSecurityCode("");
        setAdminUsername("");
        setAdminPassword("");
        setError("");
    };

    const selectAccess = (type: AccessType) => {
        setAccessType(type);
        setStudentAction(null);
        setError("");
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

    const handleAdminLogin = () => {
        setError("");

        if (!adminUsername.trim()) {
            setError("Please enter your administrator username.");
            return;
        }

        if (!adminPassword.trim()) {
            setError("Please enter your administrator password.");
            return;
        }

        navigate("/admin/queries");
    };

    return (
        <div className="min-h-screen bg-[#f7f9fc] text-[#06264A]">
            <main className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-12">



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



                                <button
                                    type="button"
                                    onClick={() => selectAccess("student")}
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

                                        <div className="
                      flex
                      h-10
                      w-10
                      items-center
                      justify-center
                      rounded-lg
                      bg-[#edf3fa]
                      text-[#155A96]
                    ">
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
                                    onClick={() => selectAccess("admin")}
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

                                        <div className="
                      flex
                      h-10
                      w-10
                      items-center
                      justify-center
                      rounded-lg
                      bg-[#edf3fa]
                      text-[#155A96]
                    ">
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


                            <div className="
                flex
                items-center
                gap-2
                border-t
                border-slate-100
                px-5
                py-3
                sm:px-6
              ">

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



                    {accessType === "student" && (
                        <section className="rounded-xl border border-slate-200 bg-white shadow-sm">


                            <div className="
                flex
                items-center
                justify-between
                border-b
                border-slate-100
                px-5
                py-4
                sm:px-6
              ">

                                <div className="flex items-center gap-3">

                                    <div className="
                    flex
                    h-9
                    w-9
                    items-center
                    justify-center
                    rounded-lg
                    bg-[#edf3fa]
                    text-[#155A96]
                  ">
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
                      ${studentAction === "new"
                                                ? "border-[#155A96] bg-[#f4f8fc]"
                                                : "border-slate-200 hover:border-[#c6d4e5]"
                                            }
                    `}
                                    >

                                        <div className="flex items-center justify-between">

                                            <div className={`
                        flex
                        h-9
                        w-9
                        items-center
                        justify-center
                        rounded-lg
                        ${studentAction === "new"
                                                    ? "bg-[#155A96] text-white"
                                                    : "bg-[#edf3fa] text-[#155A96]"
                                                }
                      `}>
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
                      ${studentAction === "existing"
                                                ? "border-[#155A96] bg-[#f4f8fc]"
                                                : "border-slate-200 hover:border-[#c6d4e5]"
                                            }
                    `}
                                    >

                                        <div className="flex items-center justify-between">

                                            <div className={`
                        flex
                        h-9
                        w-9
                        items-center
                        justify-center
                        rounded-lg
                        ${studentAction === "existing"
                                                    ? "bg-[#155A96] text-white"
                                                    : "bg-[#edf3fa] text-[#155A96]"
                                                }
                      `}>
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




                                {studentAction === "new" && (
                                    <div className="
                    mt-5
                    border-t
                    border-slate-100
                    pt-5
                  ">

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




                                {studentAction === "existing" && (
                                    <div className="
                    mt-5
                    border-t
                    border-slate-100
                    pt-5
                  ">

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
                                                                (previous) => !previous
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




                    {accessType === "admin" && (
                        <section className="rounded-xl border border-slate-200 bg-white shadow-sm">

                            <div className="
                flex
                items-center
                justify-between
                border-b
                border-slate-100
                px-5
                py-4
                sm:px-6
              ">

                                <div className="flex items-center gap-3">

                                    <div className="
                    flex
                    h-9
                    w-9
                    items-center
                    justify-center
                    rounded-lg
                    bg-[#edf3fa]
                    text-[#155A96]
                  ">
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

                                        <input
                                            id="adminUsername"
                                            type="text"
                                            value={adminUsername}
                                            onChange={(e) =>
                                                setAdminUsername(e.target.value)
                                            }
                                            placeholder="Enter username"
                                            autoComplete="username"
                                            className="
                        w-full
                        rounded-lg
                        border
                        border-slate-200
                        bg-white
                        px-3
                        py-2.5
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
                                                className="
                          w-full
                          rounded-lg
                          border
                          border-slate-200
                          bg-white
                          px-3
                          py-2.5
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
                                                    setShowAdminPassword(
                                                        (previous) => !previous
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


                                    {error && (
                                        <p className="text-xs font-medium text-red-500">
                                            {error}
                                        </p>
                                    )}


                                    <button
                                        type="button"
                                        onClick={handleAdminLogin}
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
                    "
                                    >
                                        <ShieldCheck size={15} />
                                        Sign in
                                        <ArrowRight size={15} />
                                    </button>

                                </div>


                                <div className="
                  mt-5
                  flex
                  items-start
                  gap-2.5
                  border-t
                  border-slate-100
                  pt-4
                ">

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



                <div className="
          mx-auto
          mt-5
          flex
          max-w-4xl
          items-center
          justify-center
          gap-2
          text-center
        ">

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