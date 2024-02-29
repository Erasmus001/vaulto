/* eslint-disable react/no-unescaped-entities */

import Link from "next/link";
import { signinUserWithEmailAndPassword } from "@/actions/server-actions/auth";
import { FormButton } from "@/components/ui/FormButton";

export default function SigninPage() {
  return (
    <div className="min-w-screen min-h-screen py-5 flex items-center justify-center bg-[#f4f6f8] flex-col gap-y-6">
      <div className="w-full flex items-center justify-center flex-col gap-y-10 max-w-lg bg-white border p-7 py-10 rounded-xl shadow">
        <div className="flex items-center justify-center flex-col gap-5">
          <h1 className="text-3xl font-semibold">Welcome back</h1>
        </div>

        {/* //* Form */}
        <form
          className="w-full flex items-center justify-center flex-col gap-4"
          autoComplete="on"
          action={signinUserWithEmailAndPassword}
        >
          <div className="w-full flex items-start justify-start flex-col gap-2 mt-3">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="identity"
              placeholder="johndoe@example.com"
              className="w-full fllex items-start justify-start gap-3 p-3 border rounded-md"
              autoComplete="email"
              aria-autocomplete="both"
            />
          </div>
          <div className="w-full flex items-start justify-start flex-col gap-2 mt-3">
            <div className="w-full flex items-center justify-between">
              <label htmlFor="password">Password</label>
              <Link
                href={"/forgot-password"}
                className="text-base text-black/70 underline"
              >
                Forgot password?
              </Link>
            </div>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="***********"
              className="w-full fllex items-start justify-start gap-3 p-3 border rounded-md"
              autoComplete="password"
              aria-autocomplete="both"
            />
          </div>
          <div className="w-full mt-2">
            <FormButton title={"Sign in"} />
          </div>
        </form>
      </div>
      <div className="w-full space-y-2 flex items-center justify-center flex-col mt-5">
        <p>
          Don't have an account?{" "}
          <span>
            <Link
              href={"/signup"}
              className="text-base text-black/70 underline"
            >
              Sign up
            </Link>
          </span>
        </p>
      </div>
    </div>
  );
}
