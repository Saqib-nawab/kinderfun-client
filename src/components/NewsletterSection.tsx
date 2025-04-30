import { faBell } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import news_banner from "../assets/news_banner.png";
const NewsletterSection: React.FC = () => {
  return (
    <section className="bg-background text-text-dark py-12 px-4">
      <div className="max-w-3xl mx-auto text-center">
        {/* Icon */}
        <div className="mb-2">
          <FontAwesomeIcon icon={faBell} className="text-secondary text-4xl" />
        </div>

        {/* Heading & Subheading */}
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-2">
          Sign up for our newsletter
        </h2>
        <p className="text-gray-dark mb-6">
          Keep up to date with the latest news and offers
        </p>

        {/* Mailchimp Form */}
        <form
          action="https://gmail.us11.list-manage.com/subscribe/post?u=a999554dca1f40559a9cbd859&id=c3e96c417a&f_id=00a2a3e0f0"
          method="post"
          id="mc-embedded-subscribe-form"
          name="mc-embedded-subscribe-form"
          target="_blank"
          className="flex flex-col sm:flex-row items-center justify-center gap-4 relative"
        >
          <input
            type="email"
            name="EMAIL"
            id="mce-EMAIL"
            placeholder="Your Email Address..."
            required
            className="w-full sm:w-auto flex-1 border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-secondary"
          />

          <input
            type="submit"
            name="subscribe"
            id="mc-embedded-subscribe"
            value="Subscribe"
            className="px-6 py-2 bg-secondary text-white font-semibold rounded-md hover:bg-primary transition cursor-pointer"
          />

          {/* Hidden anti-spam field */}
          <div
            style={{
              position: "absolute",
              left: "-5000px",
              width: 0,
              height: 0,
              overflow: "hidden",
            }}
            aria-hidden="true"
          >
            <input
              type="text"
              name="b_a999554dca1f40559a9cbd859_c3e96c417a"
              tabIndex={-1}
              value=""
              readOnly
            />
          </div>
        </form>
      </div>

      {/* Illustration */}
      <div className="mt-8 flex justify-center">
        <img
          src={news_banner}
          alt="Kids illustration"
          className="w-full max-w-2xl border-4 border-blue-200 rounded-xl transition-transform transform hover:shadow-2xl"
        />
      </div>
    </section>
  );
};

export default NewsletterSection;
