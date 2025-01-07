"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

import { Authenticator, useAuthenticator } from "@aws-amplify/ui-react";

import "@aws-amplify/ui-react/styles.css";

export default function Login() {
  const { user } = useAuthenticator((context) => [context.user]);

  const router = useRouter();

  useEffect(() => {
    if (user) router.push("/");
  }, [user, router]);

  return (
    <div className="flex flex-1 justify-center">
      <Authenticator className="flex flex-1 justify-center" />
    </div>
  );
}
