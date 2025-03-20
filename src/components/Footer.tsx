// src/components/Footer.tsx
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faTwitter,
  faLinkedin,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import logo from "../assets/logo.jpg";

//assets
import image1 from "../assets/gal-2-1-2.jpg";
import image2 from "../assets/gal-2-2-2.jpg";

const Footer: React.FC = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://apis.google.com/js/platform.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const channelId = import.meta.env.VITE_YOUTUBE_CHANNEL_ID;
  const subscribeUrl = `https://www.youtube.com/channel/${channelId}?sub_confirmation=1`;

  return (
    <footer className="w-4/5 mx-auto bg-primary text-white py-10 my-4 rounded-3xl shadow-md">
      <div className="max-w-7xl mx-auto px-6">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left: Logo & About */}
          <div>
            <Link to="/" className="flex items-center mb-4">
              <img src={logo} alt="Kinder Fun" className="h-12 w-auto mr-2" />
              <span className="text-xl font-bold">Kinder Fun</span>
            </Link>
            <p className="text-lg font-semibold">
              Giving your child the best start in life
            </p>
            <p className="mt-2">First Floor, 10A Street, City Name</p>
            <p className="flex items-center gap-2 mt-2">
              <FontAwesomeIcon icon={faMapMarkerAlt} className="text-accent" />
              Town, Country 12345
            </p>
            {/* Gallery Images */}
            <div className="mt-4 flex gap-2">
              <img
                src={image1}
                alt="Gallery 1"
                className="w-30 h-30 rounded-lg object-cover"
              />
              <img
                src={image2}
                alt="Gallery 2"
                className="w-30 h-30 rounded-lg object-cover"
              />
            </div>
          </div>

          {/* Center: Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-3 border-l-4 border-accent pl-2">
              Get In Touch
            </h3>
            <p>
              Monday to Friday: <strong>8.30am - 02.00pm</strong>
            </p>
            <p>
              Saturday, Sunday: <strong>Closed</strong>
            </p>
            <p className="flex items-center gap-2 mt-3">
              <FontAwesomeIcon icon={faEnvelope} className="text-accent" />
              <Link
                to="mailto:user@example.com"
                className="hover:text-accent transition"
              >
                user@example.com
              </Link>
            </p>
            <p className="flex items-center gap-2 mt-2">
              <FontAwesomeIcon icon={faPhone} className="text-accent" />
              <Link
                to="tel:+923106241365"
                className="hover:text-accent transition"
              >
                +92 310 6241365
              </Link>
            </p>

            {/* Google Maps */}
            <div className="mt-4">
              <iframe
                title="Kinder Fun Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3321.699873295893!2d72.98427699999999!3d33.639023099999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38df97bcb01f7ee1%3A0x3f628acc2f8d402f!2sLandmark%20III!5e0!3m2!1sen!2sus!4v1741689428752!5m2!1sen!2sus"
                className="w-full h-40 md:h-40 rounded-lg shadow-md"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
              <Link
                to="https://maps.app.goo.gl/ENBTFHnKGJokZaw18"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-accent mt-2 text-sm text-center hover:underline"
              ></Link>
            </div>
          </div>

          {/* Right: Useful Links */}
          <div>
            <h3 className="text-lg font-bold mb-3 border-l-4 border-accent pl-2">
              Useful Services
            </h3>
            <ul className="space-y-2">
              {[
                "Volunteer",
                "Advocate",
                "Partner",
                "Advertise",
                "Membership Options",
                "Contact Us",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <span className="text-accent">•</span>
                  <Link to="#" className="hover:text-accent transition">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
            {/* YouTube Subscribe Button */}
            <div className="mt-4">
              <a
                href={subscribeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-secondary text-white font-bold px-4 py-2 rounded hover:bg-accent transition"
              >
                Subscribe on YouTube
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-10 border-t border-gray-light pt-5 flex flex-col md:flex-row justify-between items-center">
          {/* Copyright */}
          <p className="text-sm">
            &copy; {new Date().getFullYear()}{" "}
            <span className="text-accent font-bold">Kinder Fun</span>. All
            Rights Reserved.
          </p>

          {/* Social Media Links */}
          <div className="flex gap-4 mt-3 md:mt-2">
            {[
              { icon: faFacebookF, link: "#" },
              { icon: faTwitter, link: "#" },
              { icon: faLinkedin, link: "#" },
              { icon: faYoutube, link: "#" },
            ].map(({ icon, link }, index) => (
              <Link
                key={index}
                to={link}
                className="w-8 h-8 flex justify-center items-center bg-secondary text-white rounded-full hover:bg-accent transition"
              >
                <FontAwesomeIcon icon={icon} />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
