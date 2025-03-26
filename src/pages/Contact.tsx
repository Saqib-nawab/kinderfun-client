// src/pages/Contact.tsx
import React from "react";
import MailchimpForm from "../components/ContactForm";

const Contact: React.FC = () => {
  return (
    <div className="w-4/5 mx-auto mt-4 relative">
      <div className="bg-[var(--background)] text-[var(--text-dark)] min-h-screen p-4 font-sans">
        <h1 className="text-4xl font-bold text-[var(--primary)] mb-4">
          Contact Us
        </h1>

        {/* Two-column layout (sidebar + main) */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar (left) */}
          <aside className="lg:col-span-1">
            <p className="bg-[var(--gray-light)] text-black p-4 rounded shadow-md">
              Inquiry form for partnerships and customer support. Please fill
              out the form on the right, and we’ll get back to you soon.
            </p>
          </aside>

          {/* Main content (right) */}
          <section className="lg:col-span-3">
            <MailchimpForm />
          </section>
        </div>
      </div>
    </div>
  );
};

export default Contact;
