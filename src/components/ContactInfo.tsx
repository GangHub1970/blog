import React from "react";
import { IoLogoGithub } from "react-icons/io";

export default function ContactInfo() {
  return (
    <article className="flex flex-col items-center gap-1 m-4">
      <h2 className="text-2xl font-bold">Contact me</h2>
      <h5 className="text-sm">info@dream-coding.com</h5>
      <a
        href="https://github.com/GangHub1970"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-blue-500 duration-100"
      >
        <IoLogoGithub size={40} />
      </a>
      <p className="mt-4 text-2xl font-bold">Or Send me an email</p>
    </article>
  );
}
