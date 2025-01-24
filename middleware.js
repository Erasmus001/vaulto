import { NextResponse } from "next/server";
import { pb } from "./pocketbase/pocket-config";

// This function can be marked `async` if using `await` inside
export function middleware(request) {
  console.log(request?.nextUrl);
  // return NextResponse.redirect(new URL("/signin", request.url));
}
export const config = {
  matcher: ["/dashboard/:path"],
};
