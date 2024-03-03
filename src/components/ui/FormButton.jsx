"use client";

import { useFormStatus } from "react-dom";

export function FormButton({ title, handleSubmit }) {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      onClick={handleSubmit}
      className={`py-4 px-8 rounded-xl text-lg transition-colors ease-in-out text-white w-full ${
        pending
          ? "disabled:cursor-not-allowed disabled:bg-black/40"
          : "bg-primary-light hover:bg-primary-deep"
      }`}
    >
      {pending ? "Signing in..." : title}
    </button>
  );
}
