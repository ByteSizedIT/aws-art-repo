"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

import { useAuthenticator } from "@aws-amplify/ui-react";
import { signOut } from "aws-amplify/auth";

const SideNav = ({ handleBurgerClick }: { handleBurgerClick: () => void }) => {
  const router = useRouter();

  const user = useAuthenticator((context) => [context.user]);

  async function logOut() {
    await signOut();
    router.push("/");
    handleBurgerClick();
  }

  return (
    <div
      className={`visible md:hidden w-6/12 h-screen bg-gray-400 bg-opacity-90 absolute top-0 right-0 -z-10 flex flex-col p-6 pt-32 gap-5 items-end`}
    >
      <Link
        href="/"
        className="text-black hover:font-bold"
        onClick={handleBurgerClick}
      >
        GALLERY
      </Link>
      <Link
        href="/about"
        className="text-black hover:font-bold"
        onClick={handleBurgerClick}
      >
        ABOUT
      </Link>

      {user.user && (
        <Link
          href="/upload"
          className="text-black hover:font-bold"
          onClick={handleBurgerClick}
        >
          UPLOAD
        </Link>
      )}

      {!user.user && (
        <Link
          href="/authentication/login"
          className="text-black hover:font-bold"
          onClick={handleBurgerClick}
        >
          LOG IN
        </Link>
      )}

      {user.user && (
        <p
          className="text-black  text-base cursor-pointer hover:font-bold"
          onClick={logOut}
        >
          LOG OUT
        </p>
      )}
    </div>
  );
};
export default SideNav;
