"use client";

export function Button({ pending, title, onClickHandler, bgColor, type }) {
  return (
    <button
      type={type || "button"}
      disabled={pending}
      className={`py-2.5 px-5 rounded-md text-base transition-colors ease-in-out text-white w-full ${
        pending
          ? "disabled:cursor-not-allowed disabled:bg-black/40"
          : "bg-primary-light hover:bg-primary-deep"
      } ${bgColor ? bgColor : "bg-primary-light hover:bg-primary-deep"}`}
      onClick={onClickHandler}
    >
      {pending ? "..." : title}
    </button>
  );
}

export function ModalButton({ pending, title, onClickHandler, bgColor, type }) {
  return (
    <button
      type={type || "button"}
      disabled={pending}
      className={`py-4 px-5 rounded-md text-base transition-colors ease-in-out text-white w-full ${
        pending
          ? "disabled:cursor-not-allowed disabled:bg-black/40"
          : "bg-primary-light hover:bg-primary-deep"
      } ${bgColor ? bgColor : "bg-primary-light hover:bg-primary-deep"}`}
      onClick={onClickHandler}
    >
      {pending ? "..." : title}
    </button>
  );
}
