/* eslint-disable jsx-a11y/aria-proptypes */
/* eslint-disable react/no-unescaped-entities */
"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export default function SigninPage() {
  const [type, setType] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const emailRef = useRef("");
  const passwordRef = useRef("");

  const router = useRouter();

  async function signin(data) {}

  async function handleSignin(event) {
    event.preventDefault();

    const email = emailRef.current?.value;
    const password = passwordRef.current?.value;

    const data = {
      email,
      password,
    };

    // setIsSubmitting(true);
    const response = await signin(data);

    // toast.error(response?.message);
    // if (response?.status_code === 400) {
    //   return;
    // }

    toast.success(response?.message);
  }
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
          onSubmit={handleSignin}
        >
          <div className="w-full flex items-start justify-start flex-col gap-2 mt-3">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="johndoe@example.com"
              className="w-full fllex items-start justify-start gap-3 p-3 border rounded-md"
              autoComplete="email"
              aria-autocomplete="both"
              ref={emailRef}
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
              ref={passwordRef}
            />
          </div>
          <div className="w-full mt-2">
            <button className="py-4 px-8 rounded-xl text-lg hover:bg-primary-deep transition-colors ease-in-out bg-primary-light text-white w-full">
              Sign in
            </button>
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
