"use client";

interface NavbarProps {
  onToggleSidebar: () => void;
}

export function Navbar({ onToggleSidebar }: NavbarProps) {
  return (
    <header className="flex py-5 flex-shrink-0 items-center justify-between border-b border-white/10 bg-white/[0.03] px-4 sm:px-6 gap-4">
      {/* Left: Sidebar toggle + Breadcrumb */}
      <div className="flex items-center gap-3 sm:gap-4 min-w-0 flex-1">
        {/* Hamburger button (mobile only) */}
        <button
          onClick={onToggleSidebar}
          className="md:hidden flex items-center justify-center h-10 w-10 rounded-lg border border-white/20 bg-white/[0.1] text-slate-200 hover:bg-white/[0.15] active:bg-white/[0.2] transition-colors"
          aria-label="Toggle sidebar"
        >
          <i className="ti ti-menu-2 text-lg" aria-hidden="true" />
        </button>

        {/* Breadcrumb */}
        <div className="flex items-center gap-1.5 text-xs sm:text-sm text-slate-500 hidden sm:flex">
          <span className="truncate">App</span>
          <span>/</span>
          <span className="font-medium text-slate-200 truncate">Dashboard</span>
        </div>
      </div>

      {/* Right: Search + Bell + Avatar */}
      <div className="flex items-center gap-2 sm:gap-3">
        {/* Search (hidden on mobile) */}
        <div className="hidden sm:flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.06] px-3 py-1.5 text-xs text-slate-400">
          <i className="ti ti-search text-sm" aria-hidden="true" />
          <span>Search…</span>
        </div>

        {/* Avatar */}
        <div className="flex h-9 w-9 sm:h-8 sm:w-8 items-center justify-center rounded-full bg-blue-500 text-xs font-semibold text-white flex-shrink-0">
          JD
        </div>
      </div>
    </header>
  );
}