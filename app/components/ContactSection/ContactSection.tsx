import React, { useState, FormEvent } from "react";

interface Status {
  error: boolean;
  message: string;
}

const ContactSection: React.FC = () => {
  const [isSending, setIsSending] = useState<boolean>(false);
  const [status, setStatus] = useState<Status | null>(null);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSending(true);
    const form = new FormData(e.currentTarget);
    const payload = {
      name: form.get("name") as string,
      email: form.get("email") as string,
      message: form.get("message") as string,
    };

    console.log(payload);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const result: Status = await res.json();
      setStatus(result);
      console.log(result);
    } catch (error) {
      setStatus({ error: true, message: "Failed to send email." });
      console.log(error);
    } finally {
      setIsSending(false);
      console.log(false);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
        <label className="flex flex-col text-white">
          Name
          <input
            type="text"
            name="name"
            required
            className="mt-1 p-2 rounded bg-white text-black focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </label>
        <label className="flex flex-col text-white">
          Email
          <input
            type="email"
            name="email"
            required
            className="mt-1 p-2 rounded bg-white text-black focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </label>
        <label className="flex flex-col text-white">
          Message
          <textarea
            name="message"
            rows={4}
            required
            className="mt-1 p-2 rounded bg-white text-black focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </label>
        <button
          type="submit"
          disabled={isSending}
          className="bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded transition"
        >
          {isSending ? "Sending..." : "Send Message"}
        </button>
        {status && (
          <p
            className={`mt-2 ${
              status.error ? "text-red-400" : "text-green-300"
            }`}
          >
            {status.message}
          </p>
        )}
      </form>
    </>
  );
};

export default ContactSection;
