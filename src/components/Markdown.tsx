import React from "react";
import { getMarkdownPost } from "@/service/posts";
import { MDXRemote } from "next-mdx-remote/rsc";

type Props = {
  path: string;
};

export default async function Markdown({ path }: Props) {
  const markdownPost = await getMarkdownPost(path);

  return (
    <section className="prose max-w-none py-4">
      <MDXRemote
        source={markdownPost}
        options={{
          parseFrontmatter: true,
        }}
      />
    </section>
  );
}
