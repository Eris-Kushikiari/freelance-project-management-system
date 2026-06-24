import Dashboard from "./Dashboard";

export default function DashboardPage() {
  return (
    <div className="flex flex-col gap-6">
      <p className="text-lg text-slate-400">
        Welcome to the dashboard! You have successfully signed in and can now
        access protected content.
      </p>
      <Dashboard />
    </div>
  );
}