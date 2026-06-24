"use client";

import { useState, useRef, useEffect } from "react";
import { User } from "@supabase/supabase-js";

interface SidebarUserFooterProps {
  user: User | null;
  onSignOut: () => void;
}

export function SidebarUserFooter({ user, onSignOut }: SidebarUserFooterProps) {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Close menu when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const initials = user?.email
    ?.split("@")[0]
    .split(".")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2) || "JD";

  return (
    <div className="border-t border-white/10">
      <div ref={menuRef} className="relative p-3">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full flex items-center gap-3 rounded-lg px-2 py-2.5 hover:bg-white/[0.06] transition-colors group"
        >
          {/* Avatar */}
          <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-blue-500 text-xs font-semibold text-white">
            {initials}
          </div>

          {/* User Info */}
          <div className="min-w-0 flex-1 text-left">
            <p className="truncate text-xs font-medium text-white">
              {user?.user_metadata?.full_name || "User"}
            </p>
            <p className="truncate text-[10px] text-slate-400">
              {user?.email || "email@example.com"}
            </p>
          </div>

          {/* Dropdown Icon */}
          <i
            className={`ti ti-chevron-down text-sm text-slate-400 group-hover:text-slate-200 transition-transform duration-200 flex-shrink-0 ${
              isOpen ? "rotate-180" : ""
            }`}
            aria-hidden="true"
          />
        </button>

        {/* Dropdown Menu */}
        {isOpen && (
          <div className="absolute bottom-full left-3 right-3 mb-2 rounded-lg border border-white/10 bg-slate-900/95 backdrop-blur shadow-lg overflow-hidden animate-in fade-in slide-in-from-bottom-2 duration-150">
            <button
              onClick={() => {
                setIsOpen(false);
                // Navigate to profile
              }}
              className="w-full flex items-center gap-3 px-3 py-2.5 text-xs text-slate-300 hover:bg-white/[0.08] hover:text-white transition-colors border-b border-white/10"
            >
              <i className="ti ti-user text-sm" aria-hidden="true" />
              <span>Profile</span>
            </button>

            <button
              onClick={() => {
                setIsOpen(false);
                // Navigate to settings
              }}
              className="w-full flex items-center gap-3 px-3 py-2.5 text-xs text-slate-300 hover:bg-white/[0.08] hover:text-white transition-colors border-b border-white/10"
            >
              <i className="ti ti-settings text-sm" aria-hidden="true" />
              <span>Settings</span>
            </button>

            <button
              onClick={() => {
                setIsOpen(false);
                onSignOut();
              }}
              className="w-full flex items-center gap-3 px-3 py-2.5 text-xs text-red-400 hover:bg-red-500/[0.15] hover:text-red-300 transition-colors"
            >
              <i className="ti ti-logout text-sm" aria-hidden="true" />
              <span>Sign out</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}