import React from "react";
import Image from "next/image";
import ProfileImage from "../../public/images/profile.png";
import ContactButton from "./ContactButton";

export default function Info() {
  return (
    <article className="flex flex-col items-center justify-center gap-4">
      <Image
        src={ProfileImage}
        alt="프로필 이미지"
        className=" w-60 h-60 rounded-full"
      />
      <section className="text-center">
        <p className="text-3xl font-bold">Hi, I&apos;m Ellie</p>
        <p className="font-semibold">Full-stack engineer</p>
        <p>꿈을 코딩하는 사람, 드림코딩 엘리</p>
      </section>
      <ContactButton />
    </article>
  );
}
