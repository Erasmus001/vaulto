"use client";

import { useFormStatus } from "react-dom";
import { Loader } from "@mantine/core";

export function FormButton({ title, handleSubmit }) {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      onClick={handleSubmit}
      className={`py-4 px-8 rounded-xl text-lg transition-colors ease-in-out text-white w-full flex items-center justify-center ${
        pending
          ? "disabled:cursor-not-allowed disabled:bg-black/80"
          : "bg-primary-light hover:bg-primary-deep"
      }`}
    >
      {pending ? <Loader color="white" size={22} /> : title}
    </button>
  );
}

export function FormButtonSubmit({ title, isLoading }) {
  return (
    <button
      type="submit"
      disabled={isLoading}
      className={`py-4 px-8 rounded-xl text-lg transition-colors ease-in-out text-white w-full flex items-center justify-center ${
        isLoading
          ? "disabled:cursor-not-allowed disabled:bg-black/80"
          : "bg-primary-light hover:bg-primary-deep"
      }`}
    >
      {isLoading ? <Loader color="white" size={22} /> : title}
    </button>
  );
}
