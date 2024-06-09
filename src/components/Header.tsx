"use client";

import React from "react";
import { Roboto } from "next/font/google";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";

const roboto = Roboto({
  weight: "700",
  subsets: ["latin"],
});

export default function Header() {
  const router = useRouter();
  const pathname = usePathname();

  const handleLogoClick = () => {
    router.push("/");
  };
  return (
    <header className="flex justify-between items-center py-4 px-8">
      <h1
        className={`text-2xl font-bold cursor-pointer ${roboto.className}`}
        onClick={handleLogoClick}
      >
        Gang&apos;s Blog
      </h1>
      <nav className="flex gap-4">
        <Link className={`${pathname === "/" ? "text-blue-500" : ""}`} href="/">
          home
        </Link>
        <Link
          className={`${pathname === "/about" ? "text-blue-500" : ""}`}
          href="/about"
        >
          about
        </Link>
        <Link
          className={`${pathname === "/posts" ? "text-blue-500" : ""}`}
          href="/posts"
        >
          posts
        </Link>
        <Link
          className={`${pathname === "/contact" ? "text-blue-500" : ""}`}
          href="/contact"
        >
          contact
        </Link>
      </nav>
    </header>
  );
}
