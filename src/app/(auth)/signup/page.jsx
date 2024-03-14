/* eslint-disable react/no-unescaped-entities */

"use client";

import { Fragment, useState } from "react";
import { FormButtonSubmit } from "@/components/ui/FormButton";
import Link from "next/link";
import { toast } from "sonner";
import { generateUniqueUsername } from "@/lib";
import { useRouter } from "next/navigation";
import { useAuth } from "@/clientContexts/AuthContext";

function SignupPage() {
  const [value, setValue] = useState({
    email: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();
  const { createUser } = useAuth();

  async function handleSignup(event) {
    event.preventDefault();

    const authData = {
      email: value?.email,
      password: value?.password,
      username: `user_${generateUniqueUsername()}`,
      emailVisibility: true,
      passwordConfirm: value?.password,
    };

    setIsLoading(true);
    try {
      const response = await createUser(authData);

      if (response?.status === 201) {
        toast.success(response?.message)

        setTimeout(() => {
          router.push('/signin')
        }, 3000);
      }
    } catch (error) {
      toast.error(error?.message);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <Fragment>
      <div className="min-w-screen min-h-screen py-5 flex items-center justify-center bg-[#f4f6f8] flex-col gap-y-6">
        <div className="w-full flex items-center justify-center flex-col gap-y-10 max-w-lg bg-white border p-7 py-10 rounded-xl shadow">
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
                name="identity"
                placeholder="johndoe@email.com"
                className="w-full fllex items-start justify-start gap-3 p-3 border rounded-md"
                autoComplete="email"
                value={value.email}
                onChange={(event) =>
                  setValue({ ...value, email: event.target.value })
                }
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
                value={value.password}
                onChange={(event) =>
                  setValue({ ...value, password: event.target.value })
                }
              />
            </div>
            <div className="w-full mt-5">
              <FormButtonSubmit
                title="Create free account"
                isLoading={isLoading}
              />
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
    </Fragment>
  );
}

export default SignupPage;