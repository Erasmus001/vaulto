/* eslint-disable react/no-unescaped-entities */

"use client";

import { useRef, useState, Fragment } from "react";
import Link from "next/link";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

export default function SignupPage() {
  const [type, setType] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const emailRef = useRef("");
  const passwordRef = useRef("");

  const router = useRouter();

  async function register(data) {}

  async function handleSignup(event) {
    event.preventDefault();

    const email = emailRef.current?.value;
    const password = passwordRef.current?.value;

    const data = {
      email,
      emailVisibility: true,
      password,
      passwordConfirm: password,
      type,
      username: "",
    };

    setIsSubmitting(true);
    const response = await register(data);
    setIsSubmitting(false);

    toast.error(response?.message);
  }

  return (
    <Fragment>
      <div className="min-w-screen min-h-screen py-5 flex items-center justify-center bg-[#f4f6f8] flex-col gap-y-6">
        <div className="w-full flex items-center justify-center flex-col gap-y-20 max-w-lg bg-white border p-7 py-10 rounded-xl shadow">
          <div className="flex items-center justify-center flex-col gap-5">
            <div className="w-full flex items-center justify-center flex-col gap-y-3">
              <h2 className="text-3xl font-semibold">Let's get started!</h2>
              <p className="text-gray-500 text-base">
                Your information is safe and secure with us.
              </p>
            </div>
          </div>

          {/* //* Form */}
          <form
            className="w-full flex items-center justify-center flex-col gap-6"
            autoComplete="on"
            onSubmit={handleSignup}
          >
            <div className="w-full flex items-start justify-start flex-col gap-2">
              <label htmlFor="email" className="text-sm">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="johndoe@email.com"
                className="w-full fllex items-start justify-start gap-3 p-3 border rounded-md"
                autoComplete="email"
                ref={emailRef}
              />
            </div>
            <div className="w-full flex items-start justify-start flex-col gap-2">
              <label htmlFor="password" className="text-sm">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="***********"
                className="w-full fllex items-start justify-start gap-3 p-3 border rounded-md"
                autoComplete="password"
                ref={passwordRef}
              />
            </div>
            <div className="w-full mt-5">
              <button className="py-4 px-8 rounded-xl text-lg hover:bg-primary-deep transition-colors ease-in-out bg-primary-light text-white w-full">
                Sign up
              </button>
            </div>
          </form>
        </div>
        <div className="w-full space-y-2 flex items-center justify-center flex-col">
          <p>
            Already have an account? {""}
            <span>
              <Link
                href={"/signin"}
                className="text-base text-black/70 underline"
              >
                Sign in
              </Link>
            </span>
          </p>
        </div>
      </div>

      {/* {showSuccessMessage && <VerificationSentModal />} */}
    </Fragment>
  );
}
