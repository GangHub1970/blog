import { getPost } from "@/service/posts";
import React from "react";

type Props = {
  params: {
    slug: string;
  };
};

export default async function Postpage({ params: { slug } }: Props) {
  const post = await getPost(slug);

  return <div>{post}</div>;
}
