"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { title: "Home", href: "/" },
  { title: "Dashboard", href: "/dashboard" },
  { title: "Tickets", href: "/tickets" },
  { title: "New Ticket", href: "/new-ticket" },
  { title: "Admin", href: "/admin" },
  { title: "Security Report", href: "/security-report" },
];

export function MainNavigation() {
  const pathname = usePathname();

  return (
    <nav
      aria-label="Main navigation"
      className="mt-6 flex gap-2 overflow-x-auto pb-1 lg:flex-col lg:overflow-visible lg:pb-0"
    >
      {navItems.map((item) => {
        const isActive = pathname === item.href;

        return (
          <Link
            aria-current={isActive ? "page" : undefined}
            className={`whitespace-nowrap rounded-lg px-3 py-2 text-sm font-semibold transition ${
              isActive
                ? "bg-white text-slate-950"
                : "text-slate-300 hover:bg-slate-800 hover:text-white"
            }`}
            href={item.href}
            key={item.href}
          >
            {item.title}
          </Link>
        );
      })}
    </nav>
  );
}
