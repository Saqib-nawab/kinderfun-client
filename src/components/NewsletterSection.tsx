import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-solid-svg-icons';

const NewsletterSection: React.FC = () => {
  return (
    <section className="bg-background text-text-dark py-12 px-4">
      <div className="max-w-3xl mx-auto text-center">
        {/* Small Icon */}
        <div className="mb-2">
          <FontAwesomeIcon icon={faBell} className="text-secondary text-4xl" />
        </div>

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-2">
          Sign up for our newsletter
        </h2>
        <p className="text-gray-dark mb-6">
          Keep up to date with the latest news and offers
        </p>

        {/* Input + Button (No real logic yet) */}
        <form className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <input
            type="email"
            placeholder="Email Your Address..."
            className="w-full sm:w-auto flex-1 border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-secondary"
          />
          <button
            type="submit"
            className="px-6 py-2 bg-secondary text-white font-semibold rounded-md hover:bg-primary transition"
          >
            Subscribe
          </button>
        </form>
      </div>

      {/* Illustration */}
      <div className="mt-8 flex justify-center">
        <img
          src="https://dummyimage.com/600x200/eee/000" 
          alt="Kids illustration"
          className="w-full max-w-2xl"
        />
      </div>
    </section>
  );
};

export default NewsletterSection;
