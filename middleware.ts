// ref https://docs.amplify.aws/nextjs/build-a-backend/server-side-rendering/nextjs-app-router-server-components/#add-middleware-for-server-side-redirect

// middleware.ts
import { NextRequest, NextResponse } from "next/server";

import { fetchAuthSession } from "aws-amplify/auth/server";

import { runWithAmplifyServerContext } from "@/utils/amplify-utils";

export async function middleware(request: NextRequest) {
  const response = NextResponse.next();

  const authenticated = await runWithAmplifyServerContext({
    nextServerContext: { request, response },
    operation: async (contextSpec) => {
      try {
        const session = await fetchAuthSession(contextSpec, {});
        return session.tokens !== undefined;
      } catch (error) {
        console.log(error);
        return false;
      }
    },
  });

  if (authenticated) {
    return response;
  }

  return NextResponse.redirect(new URL("authentication/login", request.url));
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - authentication/login
     * - about
     * - /
     */

    "/((?!api|_next/static|_next/image|favicon.ico|authentication/login|about).+)",
  ],
};

//Regex Pattern:
// api|_next/static|_next/image|favicon.ico|authentication/login|about ensures these paths are excluded via the negative lookahead (?!).
// .+ ensures paths like /uploads and /todos are matched.
// The root path (/) is an empty string in the URL's pathname. .+ requires at least one character after the /, so the homepage cannot match.
