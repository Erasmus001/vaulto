"use client";

import { useAuth } from "@/clientContexts/AuthContext";
import { useRouter } from "next/navigation";

export default function DashboardHeader() {
  const { logout } = useAuth();
  
  const router = useRouter();

  function handleLogout() {
    logout();

    router.replace("/signin");
  }
  return (
    <header className="w-full flex items-center justify-end h-16 border-b border-gray-200 px-10">
      <button
        className="p-2 px-5 rounded-md border border-gray-200"
        onClick={handleLogout}
      >
        Log out
      </button>
    </header>
  );
}
