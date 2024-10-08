/* eslint-disable react/no-unescaped-entities */

"use client";

import { Fragment } from "react";
import Link from "next/link";

function ResetPasswordPage() {
  async function resetPassword() {}

  return (
    <Fragment>
      <div className="min-w-screen min-h-screen py-5 flex items-center justify-center bg-[#f4f6f8] flex-col gap-y-4">
        <div className="w-full flex items-center justify-center flex-col gap-y-10 max-w-lg bg-white border p-7 py-10 rounded-xl shadow">
          <div className="flex items-center justify-center flex-col gap-5">
            <div className="w-full flex items-center justify-center flex-col gap-y-3">
              <h2 className="text-3xl font-semibold">Reset Password</h2>
              {/* <p className="text-gray-500 text-base">
                
              </p> */}
            </div>
            {/* <h1 className="text-2xl font-semibold">
            What's your email address?{" "}
          </h1> */}
          </div>

          <form
            className="w-full flex items-center justify-center flex-col gap-6"
            autoComplete="on"
            action={resetPassword}
          >
            <div className="w-full flex items-start justify-start flex-col gap-2">
              <label htmlFor="new-password" className="text-sm">
                New password
              </label>
              <input
                type="password"
                id="new-password"
                name="newPassword"
                placeholder="*********"
                className="w-full fllex items-start justify-start gap-3 p-3 border rounded-md"
                autoComplete="password"
              />
            </div>
            <div className="w-full flex items-start justify-start flex-col gap-2">
              <label htmlFor="confirmNewPassword" className="text-sm">
                Confirm new password
              </label>
              <input
                type="password"
                id="confirmNewPassword"
                name="confirmNewPassword"
                placeholder="*********"
                className="w-full fllex items-start justify-start gap-3 p-3 border rounded-md"
                autoComplete="password"
              />
            </div>
            <div className="w-full mt-5">
              <button className="py-4 px-8 rounded-xl text-lg hover:bg-primary-deep transition-colors ease-in-out bg-primary-light text-white w-full">
                Send reset link
              </button>
            </div>
          </form>
        </div>
        <div className="w-full space-y-2 flex items-center justify-center flex-col mt-5">
          <Link href={"/signup"} className="text-base text-black/70 underline">
            Go back
          </Link>
        </div>
      </div>

      {/* {showSuccessMessage && <VerificationSentModal />} */}
    </Fragment>
  );
}


export default ResetPasswordPage;