import Link from "next/link";
import { MainNavigation } from "./main-navigation";

export function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-950">
      <div className="lg:grid lg:min-h-screen lg:grid-cols-[280px_1fr]">
        <aside className="border-b border-slate-200 bg-slate-950 px-5 py-5 text-white lg:border-b-0 lg:border-r lg:border-slate-800">
          <Link className="flex items-center gap-3" href="/">
            <span className="grid size-11 place-items-center rounded-lg bg-teal-400 font-bold text-slate-950">
              SH
            </span>
            <span>
              <span className="block text-base font-bold">
                Secure Helpdesk
              </span>
              <span className="block text-sm text-slate-300">
                IT support dashboard
              </span>
            </span>
          </Link>

          <MainNavigation />
        </aside>

        <div className="min-w-0">
          <header className="sticky top-0 z-10 border-b border-slate-200 bg-white/95 px-6 py-4 backdrop-blur">
            <div className="mx-auto flex max-w-6xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-normal text-teal-700">
                  Stage 2
                </p>
                <p className="text-lg font-bold text-slate-950">
                  Navigation and Layout
                </p>
              </div>

              <Link
                className="inline-flex min-h-11 items-center justify-center rounded-lg bg-teal-700 px-4 font-semibold text-white shadow-sm transition hover:bg-teal-800"
                href="/new-ticket"
              >
                New Ticket
              </Link>
            </div>
          </header>

          <main className="mx-auto w-full max-w-6xl px-6 py-10">
            {children}
          </main>
        </div>
      </div>
    </div>
  );
}
