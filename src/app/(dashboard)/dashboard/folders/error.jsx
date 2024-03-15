"use client";

export default function Error({ error }) {
  return (
    <div className="w-full h-full rounded-md border border-gray-200 cursor-pointer flex items-start justify-start flex-col">
      <div>
        <h3> {error || "Oops, something went wrong!"}</h3>
      </div>
      <div>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
}
