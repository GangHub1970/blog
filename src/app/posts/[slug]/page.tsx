import Markdown from "@/components/Markdown";
import PostInfo from "@/components/PostInfo";
import { getPost } from "@/service/posts";
import Image from "next/image";
import React from "react";

type Props = {
  params: {
    slug: string;
  };
};

export default async function Postpage({ params: { slug } }: Props) {
  const postData = await getPost(slug);

  return (
    <div className="my-8 rounded-t-xl overflow-hidden">
      <Image
        src={`/images/posts/${slug}.png`}
        alt={slug}
        width={1152}
        height={400}
        className="h-80 object-cover"
      />
      <div className="p-8 bg-gray-100">
        <PostInfo post={postData} />
        <Markdown path={slug} />
      </div>
    </div>
  );
}
