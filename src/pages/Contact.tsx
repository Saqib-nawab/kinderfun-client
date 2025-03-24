// src/pages/Contact.tsx
import React from "react";

const Contact: React.FC = () => {
  return (
    <div className="mx-auto w-4/5 p-4 min-h-screen bg-background text-text-dark">
      <h1 className="text-3xl font-bold mb-4 text-primary">Contact Us</h1>
      <p className="text-gray-dark mb-8">
        Inquiry form for partnerships and customer support.
      </p>
      {/* You can add your form or additional contact details here */}
    </div>
  );
};

export default Contact;
