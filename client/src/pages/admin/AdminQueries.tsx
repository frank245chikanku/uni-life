import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  ArrowRight,
  CheckCircle2,
  Clock3,
  LockKeyhole,
  LogOut,
  MessageCircle,
  Search,
  ShieldCheck,
  UserCheck,
  Users,
} from "lucide-react";



type QueryStatus = "Pending" | "Resolving" | "Resolved";

type Query = {
  id: string;
  subject: string;
  category: string;
  date: string;
  status: QueryStatus;


  assignedTo?: string;

  assignedAt?: string;
};

type StatusFilter = "All" | QueryStatus;



const QUERY_STORAGE_KEY = "uniLifeGuideAdminQueries";



const initialQueries: Query[] = [
  {
    id: "QRY-10482",
    subject: "How can I manage academic pressure?",
    category: "Academic Integrity",
    date: "29 Aug 2026",
    status: "Pending",
  },
  {
    id: "QRY-10479",
    subject: "I need guidance about my career options",
    category: "Career Uncertainty",
    date: "29 Aug 2026",
    status: "Pending",
  },
  {
    id: "QRY-10476",
    subject: "I am struggling with university expenses",
    category: "Financial Strain",
    date: "28 Aug 2026",
    status: "Pending",
  },
  {
    id: "QRY-10471",
    subject: "Dealing with pressure from friends",
    category: "Peer Pressure",
    date: "28 Aug 2026",
    status: "Pending",
  },
  {
    id: "QRY-10468",
    subject: "Understanding discrimination at university",
    category: "Discrimination & Bias",
    date: "27 Aug 2026",
    status: "Pending",
  },
  {
    id: "QRY-10461",
    subject: "How can I start a small business?",
    category: "Entrepreneurship Uncertainty",
    date: "26 Aug 2026",
    status: "Pending",
  },
];



const loadQueries = (): Query[] => {
  try {
    const stored = localStorage.getItem(
      QUERY_STORAGE_KEY
    );

    if (!stored) {
      return initialQueries;
    }

    const parsed = JSON.parse(stored);

    if (!Array.isArray(parsed)) {
      return initialQueries;
    }

    return parsed;
  } catch {
    return initialQueries;
  }
};

const saveQueries = (queries: Query[]) => {
  try {
    localStorage.setItem(
      QUERY_STORAGE_KEY,
      JSON.stringify(queries)
    );
  } catch {

  }
};



const getAdminId = () => {
  const storedId = localStorage.getItem("adminId");

  if (storedId?.trim()) {
    return storedId.trim();
  }

  const newId =
    "admin-" +
    Math.random().toString(36).substring(2) +
    Date.now().toString(36);

  localStorage.setItem("adminId", newId);

  return newId;
};



const AdminQueries = () => {
  const navigate = useNavigate();

  const [queries, setQueries] =
    useState<Query[]>(loadQueries);

  const [searchTerm, setSearchTerm] = useState("");

  const [statusFilter, setStatusFilter] =
    useState<StatusFilter>("All");


  const [adminId] = useState(getAdminId);



  useEffect(() => {
    saveQueries(queries);
  }, [queries]);



  useEffect(() => {
    const handleStorageChange = (
      event: StorageEvent
    ) => {
      if (
        event.key !== QUERY_STORAGE_KEY ||
        !event.newValue
      ) {
        return;
      }

      try {
        const updatedQueries = JSON.parse(
          event.newValue
        );

        if (Array.isArray(updatedQueries)) {
          setQueries(updatedQueries);
        }
      } catch {

      }
    };

    window.addEventListener(
      "storage",
      handleStorageChange
    );

    return () => {
      window.removeEventListener(
        "storage",
        handleStorageChange
      );
    };
  }, []);

  const pendingCount = queries.filter(
    (query) => query.status === "Pending"
  ).length;

  const resolvingCount = queries.filter(
    (query) => query.status === "Resolving"
  ).length;

  const resolvedCount = queries.filter(
    (query) => query.status === "Resolved"
  ).length;


  const filteredQueries = useMemo(() => {
    const search = searchTerm
      .trim()
      .toLowerCase();

    return queries.filter((query) => {
      const matchesSearch =
        !search ||
        query.id.toLowerCase().includes(search) ||
        query.subject.toLowerCase().includes(search) ||
        query.category.toLowerCase().includes(search);

      const matchesStatus =
        statusFilter === "All" ||
        query.status === statusFilter;

      return matchesSearch && matchesStatus;
    });
  }, [
    queries,
    searchTerm,
    statusFilter,
  ]);


  const updateQueryStatus = (queryId: string) => {
    setQueries((currentQueries) => {
      const targetQuery = currentQueries.find(
        (query) => query.id === queryId
      );

      /* Query does not exist */
      if (!targetQuery) {
        return currentQueries;
      }


      if (targetQuery.status === "Pending") {
        return currentQueries.map((query) => {
          if (query.id !== queryId) {
            return query;
          }

          return {
            ...query,


            status: "Resolving",


            assignedTo: adminId,


            assignedAt: new Date().toLocaleString(),
          };
        });
      }



      if (targetQuery.status === "Resolving") {

        if (targetQuery.assignedTo !== adminId) {
          return currentQueries;
        }

        return currentQueries.map((query) => {
          if (query.id !== queryId) {
            return query;
          }

          return {
            ...query,


            status: "Resolved",


            assignedTo: undefined,
            assignedAt: undefined,
          };
        });
      }


      if (targetQuery.status === "Resolved") {
        return currentQueries;
      }

      return currentQueries;
    });
  };


  const handleLogout = () => {
    localStorage.removeItem(
      "adminAuthenticated"
    );

    localStorage.removeItem("adminName");

    navigate("/query");
  };


  return (
    <div className="min-h-screen bg-[#f7f9fc] text-[#06264A]">


      <header className="border-b border-slate-200 bg-white">

        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">


          <div className="flex items-center gap-3">

            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#edf3fa] text-[#155A96]">
              <ShieldCheck size={18} />
            </div>

            <div>

              <p className="text-[10px] font-semibold uppercase tracking-[0.13em] text-[#155A96]">
                UNI Life Guide
              </p>

              <h1 className="text-sm font-bold text-[#06264A]">
                Query Centre
              </h1>

            </div>

          </div>


          <div className="flex items-center gap-3">

            <div className="hidden items-center gap-2 sm:flex">

              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#edf3fa] text-[#155A96]">
                <UserCheck size={15} />
              </div>

              <div>

                <p className="text-xs font-semibold text-[#06264A]">
                  Administrator
                </p>

                <p className="text-[10px] text-slate-400">
                  Query management
                </p>

              </div>

            </div>

            <button
              type="button"
              onClick={handleLogout}
              className="
                flex
                h-9
                w-9
                items-center
                justify-center
                rounded-lg
                border
                border-slate-200
                text-slate-500
                transition
                hover:border-red-200
                hover:bg-red-50
                hover:text-red-500
              "
              aria-label="Sign out"
              title="Sign out"
            >
              <LogOut size={16} />
            </button>

          </div>

        </div>

      </header>



      <main className="mx-auto max-w-7xl px-4 py-7 sm:px-6 lg:px-8 lg:py-9">



        <div className="mb-7 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">

          <div>

            <div className="mb-2 flex items-center gap-2">

              <MessageCircle
                size={16}
                className="text-[#155A96]"
              />

              <span className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[#155A96]">
                Administrator
              </span>

            </div>

            <h2 className="text-2xl font-bold tracking-tight text-[#06264A] sm:text-3xl">
              Query Management
            </h2>

            <p className="mt-1.5 max-w-2xl text-sm leading-6 text-slate-500">
              Monitor incoming queries, manage active
              work, and keep responses moving to
              completion.
            </p>

          </div>


          <div className="flex items-center gap-2 text-xs text-slate-400">

            <span className="h-2 w-2 rounded-full bg-green-500" />

            Query Centre active

          </div>

        </div>



        <section className="mb-6 rounded-xl border border-[#dbe6f1] bg-white px-4 py-3.5 shadow-sm sm:px-5">

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">

            <div className="flex items-start gap-3">

              <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#edf3fa] text-[#155A96]">
                <LockKeyhole size={15} />
              </div>

              <div>

                <p className="text-xs font-semibold text-[#06264A]">
                  Shared query status
                </p>

                <p className="mt-0.5 max-w-2xl text-[11px] leading-5 text-slate-500">
                  Click Start Resolving to take a query.
                  The query remains Resolving until the
                  administrator handling it clicks
                  Mark Resolved.
                </p>

              </div>

            </div>

            <div className="shrink-0 text-[10px] font-medium text-slate-400">
              Pending → Resolving → Resolved
            </div>

          </div>

        </section>



        <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">

          <SummaryCard
            title="Total Queries"
            value={queries.length}
            description="All submitted queries"
            icon={<MessageCircle size={17} />}
            iconClass="bg-[#edf3fa] text-[#155A96]"
          />

          <SummaryCard
            title="Pending"
            value={pendingCount}
            description="Waiting for an admin"
            icon={<Clock3 size={17} />}
            iconClass="bg-amber-50 text-amber-600"
          />

          <SummaryCard
            title="Resolving"
            value={resolvingCount}
            description="Currently being handled"
            icon={<UserCheck size={17} />}
            iconClass="bg-blue-50 text-[#155A96]"
          />

          <SummaryCard
            title="Resolved"
            value={resolvedCount}
            description="Completed queries"
            icon={<CheckCircle2 size={17} />}
            iconClass="bg-green-50 text-green-600"
          />

        </div>



        <section className="mt-6 overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">


          <div className="border-b border-slate-100 px-4 py-4 sm:px-5">

            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">

              <div>

                <h3 className="text-sm font-bold text-[#06264A]">
                  Query Work Queue
                </h3>

                <p className="mt-1 text-xs text-slate-500">
                  One query can only be actively handled
                  by one administrator at a time.
                </p>

              </div>


              <div className="relative w-full lg:w-80">

                <Search
                  size={15}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                />

                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) =>
                    setSearchTerm(e.target.value)
                  }
                  placeholder="Search ID, subject or category..."
                  className="
                    w-full
                    rounded-lg
                    border
                    border-slate-200
                    bg-white
                    py-2.5
                    pl-9
                    pr-3
                    text-xs
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


            <div className="mt-4 flex flex-wrap gap-2">

              {(
                [
                  "All",
                  "Pending",
                  "Resolving",
                  "Resolved",
                ] as const
              ).map((status) => (

                <button
                  key={status}
                  type="button"
                  onClick={() =>
                    setStatusFilter(status)
                  }
                  className={`
                    rounded-lg
                    px-3
                    py-1.5
                    text-[11px]
                    font-semibold
                    transition
                    ${statusFilter === status
                      ? "bg-[#06264A] text-white"
                      : "border border-slate-200 bg-white text-slate-500 hover:border-[#b8c9dc] hover:text-[#155A96]"
                    }
                  `}
                >
                  {status}
                </button>

              ))}

            </div>

          </div>


          <div className="hidden overflow-x-auto md:block">

            <table className="w-full min-w-[900px]">

              <thead>

                <tr className="border-b border-slate-100 bg-[#fafbfd]">

                  <th className="px-5 py-3 text-left text-[10px] font-bold uppercase tracking-[0.08em] text-slate-400">
                    Query
                  </th>

                  <th className="px-4 py-3 text-left text-[10px] font-bold uppercase tracking-[0.08em] text-slate-400">
                    Category
                  </th>

                  <th className="px-4 py-3 text-left text-[10px] font-bold uppercase tracking-[0.08em] text-slate-400">
                    Status
                  </th>

                  <th className="px-4 py-3 text-left text-[10px] font-bold uppercase tracking-[0.08em] text-slate-400">
                    Work State
                  </th>

                  <th className="px-5 py-3 text-right text-[10px] font-bold uppercase tracking-[0.08em] text-slate-400">
                    Action
                  </th>

                </tr>

              </thead>

              <tbody>

                {filteredQueries.map((query) => (

                  <tr
                    key={query.id}
                    className="
                      border-b
                      border-slate-100
                      transition
                      hover:bg-[#fafbfd]
                    "
                  >

                    {/* =================================================
                        QUERY
                    ================================================= */}

                    <td className="px-5 py-4">

                      <p className="text-xs font-bold text-[#155A96]">
                        {query.id}
                      </p>

                      <p className="mt-1 max-w-sm text-xs font-medium leading-5 text-[#06264A]">
                        {query.subject}
                      </p>

                      <p className="mt-1 text-[10px] text-slate-400">
                        Submitted {query.date}
                      </p>

                    </td>



                    <td className="px-4 py-4">

                      <span className="text-xs text-slate-500">
                        {query.category}
                      </span>

                    </td>



                    <td className="px-4 py-4">

                      <StatusBadge
                        status={query.status}
                      />

                    </td>



                    <td className="px-4 py-4">

                      {/* Pending */}
                      {query.status === "Pending" && (
                        <div className="flex items-center gap-2">

                          <span className="flex h-7 w-7 items-center justify-center rounded-md bg-amber-50 text-amber-600">
                            <Clock3 size={13} />
                          </span>

                          <div>

                            <p className="text-xs font-semibold text-slate-600">
                              Available
                            </p>

                            <p className="mt-0.5 text-[10px] text-slate-400">
                              Ready to be handled
                            </p>

                          </div>

                        </div>
                      )}

                      {/* Resolving */}
                      {query.status === "Resolving" && (
                        <div className="flex items-center gap-2">

                          <span className="flex h-7 w-7 items-center justify-center rounded-md bg-blue-50 text-[#155A96]">
                            <LockKeyhole size={13} />
                          </span>

                          <div>

                            <p className="text-xs font-semibold text-[#155A96]">
                              Currently being handled
                            </p>

                            <p className="mt-0.5 text-[10px] text-slate-400">
                              Query is locked
                            </p>

                          </div>

                        </div>
                      )}

                      {/* Resolved */}
                      {query.status === "Resolved" && (
                        <div className="flex items-center gap-2">

                          <span className="flex h-7 w-7 items-center justify-center rounded-md bg-green-50 text-green-600">
                            <CheckCircle2 size={13} />
                          </span>

                          <div>

                            <p className="text-xs font-semibold text-green-600">
                              Completed
                            </p>

                            <p className="mt-0.5 text-[10px] text-slate-400">
                              No further action required
                            </p>

                          </div>

                        </div>
                      )}

                    </td>



                    <td className="px-5 py-4 text-right">


                      {query.status === "Pending" && (
                        <button
                          type="button"
                          onClick={() =>
                            updateQueryStatus(query.id)
                          }
                          className="
                            inline-flex
                            items-center
                            gap-1.5
                            rounded-lg
                            bg-[#06264A]
                            px-3
                            py-2
                            text-[11px]
                            font-semibold
                            text-white
                            transition
                            hover:bg-[#155A96]
                            active:scale-[0.98]
                          "
                        >
                          Start Resolving
                          <ArrowRight size={13} />
                        </button>
                      )}


                      {query.status === "Resolving" &&
                        query.assignedTo === adminId && (
                          <button
                            type="button"
                            onClick={() =>
                              updateQueryStatus(query.id)
                            }
                            className="
                              inline-flex
                              items-center
                              gap-1.5
                              rounded-lg
                              bg-[#155A96]
                              px-3
                              py-2
                              text-[11px]
                              font-semibold
                              text-white
                              transition
                              hover:bg-[#06264A]
                              active:scale-[0.98]
                            "
                          >
                            Mark Resolved
                            <CheckCircle2 size={13} />
                          </button>
                        )}



                      {query.status === "Resolving" &&
                        query.assignedTo !== adminId && (
                          <span
                            className="
                              inline-flex
                              items-center
                              gap-1.5
                              rounded-lg
                              border
                              border-blue-100
                              bg-blue-50
                              px-3
                              py-2
                              text-[10px]
                              font-semibold
                              text-[#155A96]
                            "
                          >
                            <LockKeyhole size={12} />
                            Being handled
                          </span>
                        )}


                      {query.status === "Resolved" && (
                        <span
                          className="
                            inline-flex
                            items-center
                            gap-1.5
                            text-[10px]
                            font-semibold
                            text-green-600
                          "
                        >
                          <CheckCircle2 size={13} />
                          Completed
                        </span>
                      )}

                    </td>

                  </tr>

                ))}

              </tbody>

            </table>

          </div>


          <div className="divide-y divide-slate-100 md:hidden">

            {filteredQueries.map((query) => (

              <div
                key={query.id}
                className="p-4"
              >


                <div className="flex items-start justify-between gap-3">

                  <div className="min-w-0">

                    <p className="text-xs font-bold text-[#155A96]">
                      {query.id}
                    </p>

                    <p className="mt-1 text-sm font-semibold leading-5 text-[#06264A]">
                      {query.subject}
                    </p>

                  </div>

                  <StatusBadge
                    status={query.status}
                  />

                </div>


                <div className="mt-3">

                  <span className="rounded-md bg-slate-50 px-2 py-1 text-[10px] font-medium text-slate-500">
                    {query.category}
                  </span>

                </div>



                <div className="mt-4 rounded-lg border border-slate-100 bg-[#fafbfd] px-3 py-3">


                  {query.status === "Pending" && (
                    <div className="flex items-start gap-2">

                      <Clock3
                        size={14}
                        className="mt-0.5 shrink-0 text-amber-600"
                      />

                      <div>

                        <p className="text-[10px] font-semibold uppercase tracking-[0.08em] text-amber-600">
                          Available
                        </p>

                        <p className="mt-1 text-xs text-slate-500">
                          This query is ready to be handled.
                        </p>

                      </div>

                    </div>
                  )}


                  {query.status === "Resolving" && (
                    <div className="flex items-start gap-2">

                      <LockKeyhole
                        size={14}
                        className="mt-0.5 shrink-0 text-[#155A96]"
                      />

                      <div>

                        <p className="text-[10px] font-semibold uppercase tracking-[0.08em] text-[#155A96]">
                          Currently being handled
                        </p>

                        <p className="mt-1 text-xs font-medium text-[#06264A]">
                          This query is locked while it is
                          being resolved.
                        </p>

                      </div>

                    </div>
                  )}

                  {/* Resolved */}
                  {query.status === "Resolved" && (
                    <div className="flex items-start gap-2">

                      <CheckCircle2
                        size={14}
                        className="mt-0.5 shrink-0 text-green-600"
                      />

                      <div>

                        <p className="text-[10px] font-semibold uppercase tracking-[0.08em] text-green-600">
                          Completed
                        </p>

                        <p className="mt-1 text-xs font-medium text-[#06264A]">
                          No further action required.
                        </p>

                      </div>

                    </div>
                  )}

                </div>



                <div className="mt-4">

                  {/* Pending → Resolving */}
                  {query.status === "Pending" && (
                    <button
                      type="button"
                      onClick={() =>
                        updateQueryStatus(query.id)
                      }
                      className="
                        flex
                        w-full
                        items-center
                        justify-center
                        gap-1.5
                        rounded-lg
                        bg-[#06264A]
                        px-3
                        py-2.5
                        text-[11px]
                        font-semibold
                        text-white
                        transition
                        hover:bg-[#155A96]
                        active:scale-[0.98]
                      "
                    >
                      Start Resolving
                      <ArrowRight size={13} />
                    </button>
                  )}

                  {/* Resolving → Resolved */}
                  {query.status === "Resolving" &&
                    query.assignedTo === adminId && (
                      <button
                        type="button"
                        onClick={() =>
                          updateQueryStatus(query.id)
                        }
                        className="
                          flex
                          w-full
                          items-center
                          justify-center
                          gap-1.5
                          rounded-lg
                          bg-[#155A96]
                          px-3
                          py-2.5
                          text-[11px]
                          font-semibold
                          text-white
                          transition
                          hover:bg-[#06264A]
                          active:scale-[0.98]
                        "
                      >
                        Mark Resolved
                        <CheckCircle2 size={13} />
                      </button>
                    )}

                  {query.status === "Resolving" &&
                    query.assignedTo !== adminId && (
                      <div
                        className="
                          flex
                          items-center
                          justify-center
                          gap-1.5
                          rounded-lg
                          border
                          border-blue-100
                          bg-blue-50
                          px-3
                          py-2.5
                          text-[10px]
                          font-semibold
                          text-[#155A96]
                        "
                      >
                        <LockKeyhole size={12} />
                        Being handled
                      </div>
                    )}


                  {query.status === "Resolved" && (
                    <div
                      className="
                        flex
                        items-center
                        justify-center
                        gap-1.5
                        rounded-lg
                        border
                        border-green-100
                        bg-green-50
                        px-3
                        py-2.5
                        text-[10px]
                        font-semibold
                        text-green-600
                      "
                    >
                      <CheckCircle2 size={13} />
                      Query resolved
                    </div>
                  )}

                </div>

              </div>

            ))}

          </div>


          {filteredQueries.length === 0 && (
            <div className="px-5 py-14 text-center">

              <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-lg bg-slate-50 text-slate-400">
                <Search size={18} />
              </div>

              <h4 className="mt-3 text-sm font-bold text-[#06264A]">
                No queries found
              </h4>

              <p className="mt-1 text-xs text-slate-500">
                Try changing your search or status filter.
              </p>

            </div>
          )}

        </section>



        <section className="mt-5 rounded-xl border border-slate-200 bg-white p-4 shadow-sm sm:p-5">

          <div className="flex items-start gap-3">

            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#edf3fa] text-[#155A96]">
              <Users size={16} />
            </div>

            <div>

              <h3 className="text-xs font-bold text-[#06264A]">
                How query handling works
              </h3>

              <p className="mt-1 max-w-3xl text-[11px] leading-5 text-slate-500">
                Every new query starts as Pending. When an
                administrator selects Start Resolving, the
                query changes to Resolving and becomes locked.
                It remains Resolving until the administrator
                handling it selects Mark Resolved. Once
                resolved, the query is permanently closed.
              </p>

            </div>

          </div>


          <div className="mt-5 grid gap-2 sm:grid-cols-3">

            <WorkflowStep
              number="01"
              title="Pending"
              text="Available for an administrator to take."
            />

            <WorkflowStep
              number="02"
              title="Resolving"
              text="Locked while the query is actively being handled."
            />

            <WorkflowStep
              number="03"
              title="Resolved"
              text="Completed and closed."
            />

          </div>

        </section>


        <div className="mt-6 text-center">

          <p className="text-[10px] text-slate-400">
            UNI Life Guide · Administrator Query Centre
          </p>

        </div>

      </main>

    </div>
  );
};



const SummaryCard = ({
  title,
  value,
  description,
  icon,
  iconClass,
}: {
  title: string;
  value: number;
  description: string;
  icon: React.ReactNode;
  iconClass: string;
}) => {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">

      <div className="flex items-start justify-between">

        <div>

          <p className="text-[10px] font-semibold uppercase tracking-[0.1em] text-slate-400">
            {title}
          </p>

          <p className="mt-2 text-2xl font-bold text-[#06264A]">
            {value}
          </p>

        </div>

        <div
          className={`flex h-9 w-9 items-center justify-center rounded-lg ${iconClass}`}
        >
          {icon}
        </div>

      </div>

      <p className="mt-2 text-[10px] text-slate-400">
        {description}
      </p>

    </div>
  );
};


const StatusBadge = ({
  status,
}: {
  status: QueryStatus;
}) => {
  const configuration = {
    Pending: {
      className:
        "border-amber-100 bg-amber-50 text-amber-600",
    },

    Resolving: {
      className:
        "border-blue-100 bg-blue-50 text-[#155A96]",
    },

    Resolved: {
      className:
        "border-green-100 bg-green-50 text-green-600",
    },
  };

  const current = configuration[status];

  return (
    <span
      className={`
        inline-flex
        items-center
        rounded-md
        border
        px-2
        py-1
        text-[10px]
        font-semibold
        ${current.className}
      `}
    >
      {status}
    </span>
  );
};


const WorkflowStep = ({
  number,
  title,
  text,
}: {
  number: string;
  title: string;
  text: string;
}) => {
  return (
    <div className="flex items-start gap-3 rounded-lg border border-slate-100 bg-[#fafbfd] px-3 py-3">

      <span className="text-[10px] font-bold text-slate-400">
        {number}
      </span>

      <div>

        <p className="text-xs font-semibold text-[#06264A]">
          {title}
        </p>

        <p className="mt-0.5 text-[10px] leading-4 text-slate-400">
          {text}
        </p>

      </div>

    </div>
  );
};

export default AdminQueries;

