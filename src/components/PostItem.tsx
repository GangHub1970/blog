import React from "react";
import { Post } from "@/service/posts";
import Image from "next/image";

type Props = {
  post: Post;
};

export default function PostItem({
  post: { title, date, description, category, path },
}: Props) {
  return (
    <li className="rounded-md overflow-hidden shadow-md">
      <Image
        src={`/images/posts/${path}.png`}
        alt={`${title} thumbnail`}
        width="420"
        height="420"
      />
      <div className="flex flex-col items-center gap-1 pt-2 pb-4 px-3">
        <p className="w-full text-end text-sm text-gray-600">{date}</p>
        <p className="text-lg font-semibold">{title}</p>
        <p className="text-center">{description}</p>
        <p className="px-2 rounded-lg bg-green-100">{category}</p>
      </div>
    </li>
  );
}
