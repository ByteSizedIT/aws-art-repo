"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

import { Authenticator, useAuthenticator } from "@aws-amplify/ui-react";

import "@aws-amplify/ui-react/styles.css";

function CustomAuthenticator() {
  const { user } = useAuthenticator((context) => [context.user]);

  const router = useRouter();

  useEffect(() => {
    if (user) router.push("/");
  }, [user, router]);

  return (
    <div className="flex flex-1 justify-center">
      {" "}
      <Authenticator />{" "}
    </div>
  );
}

export default function Login() {
  return <CustomAuthenticator />;
}
