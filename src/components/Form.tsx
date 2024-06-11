"use client";

import { sendEmail } from "@/service/email";
import React, { ChangeEvent, Dispatch, FormEvent, useState } from "react";
import { ShowToastType } from "./EmailForm";

type Props = {
  setShowToast: Dispatch<React.SetStateAction<ShowToastType>>;
};

const initialFormData = {
  email: "",
  subject: "",
  message: "",
};

export default function Form({ setShowToast }: Props) {
  const [isSending, setIsSending] = useState(false);
  const [formData, setFormData] = useState(initialFormData);

  const handleFromChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { value, id } = event.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setIsSending(true);
    const formData = new FormData(event.target as HTMLFormElement);
    const response = await sendEmail(formData);

    setFormData(initialFormData);
    setShowToast({
      isShow: true,
      message: response.message,
    });
    setTimeout(() => {
      setShowToast({
        isShow: false,
        message: "",
      });
      setIsSending(false);
    }, 3000);
  };
  return (
    <form
      className="flex flex-col gap-4 p-4 mb-12 max-w-[36rem] w-full outline-none bg-blue-950 rounded-lg"
      onSubmit={handleSubmit}
    >
      <div className="flex flex-col gap-1">
        <label htmlFor="email" className="font-semibold text-white">
          Your Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className="p-1 outline-none rounded-sm"
          value={formData.email}
          onChange={handleFromChange}
        />
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="subject" className="font-semibold text-white">
          Subject
        </label>
        <input
          type="subject"
          id="subject"
          name="subject"
          className="p-1 outline-none rounded-sm"
          value={formData.subject}
          onChange={handleFromChange}
        />
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="message" className="font-semibold text-white">
          Message
        </label>
        <textarea
          rows={10}
          name="message"
          id="message"
          className="p-1 outline-none rounded-sm"
          value={formData.message}
          onChange={handleFromChange}
        />
      </div>
      <button
        type="submit"
        disabled={isSending}
        className="py-2 font-semibold bg-yellow-500 rounded-md"
      >
        {isSending ? "sending..." : "send"}
      </button>
    </form>
  );
}
