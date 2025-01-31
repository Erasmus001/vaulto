"use client";

import { useAuth } from "@/clientContexts/AuthContext";
import { usePathname, useRouter } from "next/navigation";
import { Fragment, useEffect } from "react";

export function ProtectedPages({ children }) {
  const { isAuth } = useAuth();

  const router = useRouter();
  const path = usePathname();

  useEffect(() => {
    const checkAuthState = () => {
      if (path !== "/" && !isAuth) {
        router.replace("/signin");
      }

      // if (isAuth) {
      //   router.replace("/dashboard/overview");
      // }
    };

    checkAuthState();
  }, [isAuth, router]);

  return <Fragment>{children}</Fragment>;
}
