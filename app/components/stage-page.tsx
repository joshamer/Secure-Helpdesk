import Link from "next/link";

type StagePageProps = {
  eyebrow: string;
  title: string;
  description: string;
  children: React.ReactNode;
};

export function StagePage({
  eyebrow,
  title,
  description,
  children,
}: StagePageProps) {
  return (
    <main className="min-h-screen bg-slate-50 px-6 py-12 text-slate-950">
      <section className="mx-auto w-full max-w-5xl">
        <header className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-normal text-teal-700">
            {eyebrow}
          </p>
          <h1 className="mt-3 text-4xl font-bold tracking-normal sm:text-5xl">
            {title}
          </h1>
          <p className="mt-5 text-lg leading-8 text-slate-600">
            {description}
          </p>
        </header>

        <section className="mt-10 rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
          {children}
        </section>

        <Link
          className="mt-8 inline-flex font-semibold text-teal-700 hover:text-teal-900"
          href="/"
        >
          Back home
        </Link>
      </section>
    </main>
  );
}
