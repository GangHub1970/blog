import React from "react";
import { Post } from "@/service/posts";
import { IoIosCalendar } from "react-icons/io";

type Props = {
  post: Post;
};

export default function PostInfo({ post }: Props) {
  return (
    <section className="flex flex-col items-start">
      <div className="flex justify-end items-center gap-2 w-full text-sm text-blue-500">
        <IoIosCalendar size={20} />
        <p>{post.date}</p>
      </div>
      <h3 className="text-3xl font-bold">{post.title}</h3>
      <h4 className="font-semibold border-b-[3px] border-blue-500">
        {post.description}
      </h4>
    </section>
  );
}
