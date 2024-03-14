/* eslint-disable react/no-unescaped-entities */
'use client'

import { Fragment } from "react";
import Link from "next/link";
import { FormButton } from "@/components/ui/FormButton";
import { sendForgotPasswordEmail } from "@/actions/server-actions/auth";

export default function ForgotPasswordPage() {
  return (
    <Fragment>
      <div className="min-w-screen min-h-screen py-5 flex items-center justify-center bg-[#f4f6f8] flex-col gap-y-4">
        <div className="w-full flex items-center justify-center flex-col gap-y-10 max-w-lg bg-white border p-7 py-10 rounded-xl shadow">
          <div className="flex items-center justify-center flex-col gap-5">
            <div className="w-full flex items-center justify-center flex-col gap-y-3">
              <h2 className="text-3xl font-semibold">Forgot Password</h2>
            </div>
          </div>

          <form
            className="w-full flex items-center justify-center flex-col gap-6"
            autoComplete="on"
            action={sendForgotPasswordEmail}
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
              />
            </div>
            <div className="w-full mt-5">
              <FormButton title="Send reset link" />
            </div>
          </form>
        </div>
        <div className="w-full space-y-2 flex items-center justify-center flex-col mt-5">
          <Link href={"/signin"} className="text-base text-black/70 underline">
            Go back
          </Link>
        </div>
      </div>

      {/* {showSuccessMessage && <VerificationSentModal />} */}
    </Fragment>
  );
}
