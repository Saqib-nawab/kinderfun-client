import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faChalkboardTeacher, faAppleWhole, faShieldAlt } from '@fortawesome/free-solid-svg-icons';

const EnrollSection: React.FC = () => {
  return (
    <section className="bg-background text-text-dark py-12 px-4">
      {/* Section Title & Subtitle */}
      <div className="max-w-7xl mx-auto text-center mb-8">
        <h2 className="text-4xl font-bold text-primary">
          Enroll Your Child In A Session Now!
        </h2>
        <p className="text-gray-dark mt-2">
          Preschool has an 'open door policy' and also offers a free trial session to all children.
        </p>
      </div>

      {/* Cards Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Card 1 */}
        <div className="bg-white rounded-lg shadow p-6 flex flex-col items-center text-center">
          <FontAwesomeIcon icon={faBook} className="text-secondary text-4xl mb-4" />
          <h3 className="text-xl font-bold mb-2">Active Learning</h3>
          <p className="text-gray-dark">
            Engaging educational cartoons and hands-on activities to spark curiosity and creativity in young minds.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-white rounded-lg shadow p-6 flex flex-col items-center text-center">
          <FontAwesomeIcon icon={faChalkboardTeacher} className="text-secondary text-4xl mb-4" />
          <h3 className="text-xl font-bold mb-2">Expert Guidance</h3>
          <p className="text-gray-dark">
            Our friendly instructors help children explore new concepts through fun storytelling and rhymes.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-white rounded-lg shadow p-6 flex flex-col items-center text-center">
          <FontAwesomeIcon icon={faAppleWhole} className="text-secondary text-4xl mb-4" />
          <h3 className="text-xl font-bold mb-2">Healthy Snacks</h3>
          <p className="text-gray-dark">
            Children stay energized with nutritious treats, so they can fully enjoy our cartoon-based learning sessions.
          </p>
        </div>

        {/* Card 4 */}
        <div className="bg-white rounded-lg shadow p-6 flex flex-col items-center text-center">
          <FontAwesomeIcon icon={faShieldAlt} className="text-secondary text-4xl mb-4" />
          <h3 className="text-xl font-bold mb-2">Safe Environment</h3>
          <p className="text-gray-dark">
            We prioritize safety, ensuring kids have a secure space to learn, sing, and play without worry.
          </p>
        </div>
      </div>
    </section>
  );
};

export default EnrollSection;
