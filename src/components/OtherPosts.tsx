"use client";

import { Post } from "@/service/posts";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

type Props = {
  next: Post;
  prev: Post;
};

export default function OtherPosts({ next, prev }: Props) {
  const router = useRouter();

  const handleNextClick = () => {
    router.push(`/posts/${next.path}`);
  };
  const handlePrevClick = () => {
    router.push(`/posts/${prev.path}`);
  };
  return (
    <section className="flex">
      <div
        className="relative py-16 w-full text-center text-white cursor-pointer group"
        onClick={handlePrevClick}
      >
        <Image
          src={`/images/posts/${prev.path}.png`}
          alt={prev.title}
          layout="fill"
          objectFit="cover"
          className="brightness-50"
        />
        <h5 className="relative text-2xl font-bold z-10">{prev.title}</h5>
        <p className="relative font-semibold z-10">{prev.description}</p>
        <FaArrowLeft
          size={32}
          className="absolute left-8 top-0 bottom-0 my-auto text-yellow-400  duration-150 group-hover:translate-x-2"
        />
      </div>
      <div
        className="relative py-16 w-full text-center text-white cursor-pointer group"
        onClick={handleNextClick}
      >
        <Image
          src={`/images/posts/${next.path}.png`}
          alt={next.title}
          layout="fill"
          objectFit="cover"
          className="brightness-50"
        />
        <h5 className="relative text-2xl font-bold z-10">{next.title}</h5>
        <p className="relative font-semibold z-10">{next.description}</p>
        <FaArrowRight
          size={32}
          className="absolute right-8 top-0 bottom-0 my-auto text-yellow-400 duration-150 group-hover:-translate-x-2"
        />
      </div>
    </section>
  );
}
