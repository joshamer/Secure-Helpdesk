import Link from "next/link";

const stageOnePages = [
  {
    title: "Dashboard",
    href: "/dashboard",
    description: "The future home for support metrics and ticket summaries.",
  },
  {
    title: "Tickets",
    href: "/tickets",
    description: "The future queue for help desk requests and ticket status.",
  },
  {
    title: "New Ticket",
    href: "/new-ticket",
    description: "The future form for submitting a new support request.",
  },
  {
    title: "Admin",
    href: "/admin",
    description: "The future protected area for administrator workflows.",
  },
  {
    title: "Security Report",
    href: "/security-report",
    description: "The future documentation page for security decisions.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 px-6 py-12 text-slate-950">
      <section className="mx-auto flex w-full max-w-6xl flex-col gap-10">
        <header className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-normal text-teal-700">
            Stage 1
          </p>
          <h1 className="mt-3 text-4xl font-bold tracking-normal sm:text-6xl">
            Secure IT Help Desk Dashboard
          </h1>
          <p className="mt-5 text-lg leading-8 text-slate-600">
            The basic app pages are in place. Later stages will add dashboard
            layout, ticket data, forms, validation, database storage,
            authentication, roles, audit logs, and deployment.
          </p>
        </header>

        <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {stageOnePages.map((page) => (
            <Link
              className="min-h-44 rounded-lg border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:border-teal-300 hover:shadow-md"
              href={page.href}
              key={page.href}
            >
              <h2 className="text-xl font-semibold text-slate-950">
                {page.title}
              </h2>
              <p className="mt-3 leading-7 text-slate-600">
                {page.description}
              </p>
            </Link>
          ))}
        </section>
      </section>
    </main>
  );
}
