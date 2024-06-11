// app/api/contact/route.ts
import { NextResponse } from "next/server";
const nodemailer = require("nodemailer");

export async function POST(request: Request) {
  const username = process.env.NEXT_PUBLIC_EMAIL_USERNAME;
  const password = process.env.NEXT_PUBLIC_EMAIL_PASSWORD;
  const myEmail = process.env.NEXT_PUBLIC_PERSONAL_EMAIL;

  const formData = await request.formData();
  const name = formData.get("name");
  const email = formData.get("email");
  const message = formData.get("message");

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: username,
      pass: password,
    },
  });

  try {
    await transporter.sendMail({
      from: username,
      to: myEmail,
      replyTo: email,
      subject: `Website activity from ${email}`,
      html: `
        <p>Name: ${name} </p>
        <p>Email: ${email} </p>
        <p>Message: ${message} </p>
        `,
    });

    return NextResponse.json({ message: "✅ 메일을 성공적으로 보냈습니다." });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: "❗️ 메일 전송에 실패했습니다. 다시 시도해 주세요.",
      },
      { status: 500 }
    );
  }
}
