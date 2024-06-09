import React from "react";
import { Post } from "@/service/posts";
import PostItem from "./PostItem";
import { v4 as uuidv4 } from "uuid";

type Props = {
  posts: Post[];
};

export default function Posts({ posts }: Props) {
  return (
    <article className="grow">
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {posts.map((post) => (
          <PostItem key={uuidv4()} post={post} />
        ))}
      </ul>
    </article>
  );
}
