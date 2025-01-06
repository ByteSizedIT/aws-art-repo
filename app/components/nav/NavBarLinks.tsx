"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

import { useAuthenticator } from "@aws-amplify/ui-react";
import { signOut } from "aws-amplify/auth";

const NavBarLinks = () => {
  const path = usePathname();
  const router = useRouter();

  const user = useAuthenticator((context) => [context.user]);

  async function logOut() {
    await signOut();
    router.push("/");
  }

  return (
    <div className="hidden md:flex items-center gap-10 z-10">
      <Link
        href="/"
        className={`${
          path === "/" ? "text-black" : "text-gray-500"
        } hover:text-black`}
      >
        GALLERY
      </Link>

      <Link
        href="/about"
        className={`${
          path === "/about" ? "text-black" : "text-gray-500"
        } hover:text-black`}
      >
        ABOUT
      </Link>

      {/* TODO: Make upload link conditional to admin.authState === true not just authstate */}
      {user.user && (
        <Link
          href="/upload"
          className={`${
            path === "/upload" ? "text-black" : "text-gray-500"
          } hover:text-black`}
        >
          UPLOAD
        </Link>
      )}

      {!user.user && (
        <Link
          href="/authentication/login"
          className={`${
            path === "/authentication/login" ? "text-black" : "text-gray-500"
          } hover:text-black`}
        >
          LOG IN
        </Link>
      )}

      {user.user && (
        <p
          className="text-gray-500 hover:text-black text-base cursor-pointer"
          onClick={logOut}
        >
          LOG OUT
        </p>
      )}
    </div>
  );
};
export default NavBarLinks;
