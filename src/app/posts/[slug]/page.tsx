import Markdown from "@/components/Markdown";
import OtherPosts from "@/components/OtherPosts";
import PostInfo from "@/components/PostInfo";
import { getPosts, Post } from "@/service/posts";
import Image from "next/image";
import React from "react";

type Props = {
  params: {
    slug: string;
  };
};

export default async function Postpage({ params: { slug } }: Props) {
  const posts = await getPosts();
  const index = posts.findIndex((post) => post.path === slug);
  const next_index = index + 1 === posts.length ? 0 : index + 1;
  const prev_index = index === 0 ? posts.length - 1 : index - 1;

  return (
    <div className="my-8 rounded-xl overflow-hidden">
      <Image
        src={`/images/posts/${slug}.png`}
        alt={slug}
        width={1152}
        height={400}
        className="h-80 object-cover"
      />
      <div className="p-8 bg-gray-100">
        <PostInfo post={posts[index]} />
        <Markdown path={slug} />
      </div>
      <OtherPosts next={posts[next_index]} prev={posts[prev_index]} />
    </div>
  );
}
