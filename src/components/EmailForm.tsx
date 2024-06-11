"use client";

import React, { ChangeEvent, useState } from "react";

export default function EmailForm() {
  const [formData, setFormData] = useState({
    email: "",
    subject: "",
    message: "",
  });

  const handleFromChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { value, id } = event.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };
  return (
    <article className="p-4 mx-auto my-20 max-w-[36rem] w-full bg-blue-950 rounded-lg">
      <form className="flex flex-col gap-4">
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
      </form>
    </article>
  );
}
