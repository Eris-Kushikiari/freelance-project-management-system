"use client";

import { useUser } from "./UserContext";

export default function Dashboard() {
  const { user } = useUser();

  return (
    <section className="rounded-[28px] border border-white/10 bg-white/5 p-7 text-slate-200 shadow-[0_25px_70px_rgba(2,6,23,0.65)] backdrop-blur">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-lg font-semibold text-white">Session</h3>
          <p className="mt-1 text-sm text-slate-400">
            {user
              ? "Hydrated by getSession + onAuthStateChange."
              : "Sign in to hydrate this panel instantly."}
          </p>
        </div>
        <span
          className={`rounded-full px-3 py-1 text-xs font-semibold ${
            user
              ? "bg-emerald-500/20 text-emerald-200"
              : "bg-white/10 text-slate-400"
          }`}
        >
          {user ? "Active" : "Idle"}
        </span>
      </div>
      {user ? (
        <>
          <dl className="mt-5 space-y-3 text-sm text-slate-200">
            <div className="flex items-center justify-between gap-6">
              <dt className="text-slate-400">User ID</dt>
              <dd className="font-mono text-xs">{user.id}</dd>
            </div>
            <div className="flex items-center justify-between gap-6">
              <dt className="text-slate-400">Email</dt>
              <dd>{user.email}</dd>
            </div>
            <div className="flex items-center justify-between gap-6">
              <dt className="text-slate-400">Last sign in</dt>
              <dd>
                {user.last_sign_in_at
                  ? new Date(user.last_sign_in_at).toLocaleString()
                  : "—"}
              </dd>
            </div>
          </dl>
        </>
      ) : (
        <div className="mt-6 rounded-2xl border border-dashed border-white/10 bg-slate-900/50 p-5 text-sm text-slate-400">
          Session metadata will show up here after a successful sign in.
        </div>
      )}
    </section>
  );
}