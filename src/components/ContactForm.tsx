// src/components/ContactForm.tsx
import React, { useState } from "react";

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({ email: "", message: "" });
  const [status, setStatus] = useState<string>("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Submitting...");
    try {
      const res = await fetch("https://formspree.io/f/xeoaznqk", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setStatus("Thank you for your message. We will get back to you soon!");
        setFormData({ email: "", message: "" });
      } else {
        setStatus("Something went wrong. Please try again later.");
      }
    } catch {
      setStatus("Something went wrong. Please try again later.");
    }
  };

  return (
    <div className="my-8 flex justify-center">
      <div className="bg-white p-6 shadow-md w-full max-w-xl">
        <h2 className="text-2xl font-bold mb-4 text-primary">Contact Us</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="email" className="block mb-1">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your email address"
              required
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-secondary"
            />
          </div>
          <div>
            <label htmlFor="message" className="block mb-1">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your message"
              required
              rows={4}
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-secondary"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full px-6 py-2 bg-secondary text-white font-semibold rounded-md hover:bg-primary transition cursor-pointer"
          >
            Send Message
          </button>
        </form>
        {status && <p className="mt-4 text-center">{status}</p>}
      </div>
    </div>
  );
};

export default ContactForm;
