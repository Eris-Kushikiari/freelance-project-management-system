"use client";

import Link from "next/link";
import { User } from "@supabase/supabase-js";
import  { SidebarUserFooter }  from "./SidebarUserFooter";

const navItems = [
  { label: "Dashboard", href: "/dashboard", icon: "ti-layout-dashboard" },
  { label: "Projects", href: "/projects", icon: "ti-folder" },
  { label: "Users", href: "/users", icon: "ti-users" },
  { label: "Settings", href: "/settings", icon: "ti-settings" },
];

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
  user: User | null;
  onSignOut: () => void;
}

export function Sidebar({ isOpen, onClose, user, onSignOut }: SidebarProps) {
  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-30 bg-black/50 md:hidden backdrop-blur-sm"
          onClick={onClose}
          aria-hidden="true"
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed md:static inset-y-0 left-0 z-40 w-64 border-r border-white/10 bg-slate-900/95 backdrop-blur flex flex-col transition-transform duration-300 ease-out ${
          isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        }`}
      >
        {/* Header with close button */}
        <div className="flex items-center justify-between border-b border-white/10 px-5 py-5">
          <div className="flex items-center gap-3 flex-1 min-w-0">
            <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-white/10">
              <span className="text-sm font-semibold text-white">M</span>
            </div>
            <span className="text-sm font-semibold text-white truncate">My App</span>
          </div>
          {/* Close button (mobile only) */}
          <button
            onClick={onClose}
            className="md:hidden flex items-center justify-center h-8 w-8 rounded-lg text-slate-400 hover:text-white hover:bg-white/[0.08] transition-colors flex-shrink-0"
            aria-label="Close sidebar"
          >
            <i className="ti ti-x text-lg" aria-hidden="true" />
          </button>
        </div>

        {/* Nav */}
        <nav className="flex-1 px-3 py-4 overflow-y-auto">
          <p className="mb-2 px-3 text-[10px] font-semibold uppercase tracking-widest text-slate-500">
            Main
          </p>
          <ul className="space-y-0.5">
            {navItems.map(({ label, href, icon }) => (
              <li key={href}>
                <Link
                  href={href}
                  onClick={onClose}
                  className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-slate-400
                             transition hover:bg-white/[0.08] hover:text-white
                             aria-[current=page]:bg-white/[0.1] aria-[current=page]:text-white"
                >
                  <i className={`ti ${icon} text-base flex-shrink-0`} aria-hidden="true" />
                  <span className="truncate">{label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* User footer with dropdown */}
        <SidebarUserFooter user={user} onSignOut={onSignOut} />
      </aside>
    </>
  );
}