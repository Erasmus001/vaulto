'use client'

import { Skeleton } from "@mantine/core";

export default function Error({ error, reset }) {
  return (
    <div className="w-full rounded-md border border-gray-200 cursor-pointer flex items-start justify-start flex-col">
      <div>
        <h3>Oops, something went wrong!</h3>
      </div>
      <div>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
}
