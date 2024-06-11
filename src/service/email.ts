export async function sendEmail(formData: FormData) {
  const response = await fetch("/api/contact", {
    method: "post",
    body: formData,
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || "Unknown error");
  }

  const data = await response.json();
  return data;
}
