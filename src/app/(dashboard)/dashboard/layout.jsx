import DashboardHeader from "@/components/dashboard/DashboardHeader";
import Sidebar from "@/components/dashboard/Sidebar";

function DashboardLayout({ children }) {
  return (
    <main className="w-screen h-screen flex items-start justify-start">
      {/* Sidebar */}
      <aside className="min-w-[17%] h-full bg-white">
        <Sidebar />
      </aside>

      {/* Main Dashboard View */}
      <section className="w-full flex items-start justify-start flex-col flex-1">
        <DashboardHeader />
        <div className="w-full h-[calc(100vh-64px)]">{children}</div>
      </section>
    </main>
  );
}

export default DashboardLayout;
