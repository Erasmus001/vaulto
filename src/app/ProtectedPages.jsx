"use client";

import { useAuth } from "@/clientContexts/AuthContext";
import { useRouter } from "next/navigation";
import { Fragment, useEffect } from "react";

export function ProtectedPages({ children }) {
  const { isAuth } = useAuth();
  const router = useRouter();

  useEffect(() => {
    const checkAuthState = () => {
      if (!isAuth) {
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
