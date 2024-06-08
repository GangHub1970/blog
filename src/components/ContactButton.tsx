"use client";

import React from "react";
import { useRouter } from "next/navigation";

export default function ContactButton() {
  const router = useRouter();

  const handleClick = () => {
    router.push("/contact");
  };
  return (
    <button
      onClick={handleClick}
      className="px-3 py-1 rounded-lg font-semibold bg-yellow-500"
    >
      Contact Me
    </button>
  );
}
