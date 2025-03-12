import React from 'react';

const Videos: React.FC = () => {
  return (
    <div>
      {/* Big Video Section */}
      <div className="bg-white rounded-lg border border-gray-300 shadow p-4 mt-5 mb-6">
        <iframe
          width="100%"
          height="400"
          src="https://www.youtube.com/embed/K9ohimZIUU0?autoplay=1&controls=0&mute=1"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          className="rounded-lg"
        ></iframe>
      </div>

      {/* Two Videos Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {/* Video 1 */}
        <div className="bg-white rounded-lg border border-gray-300 shadow p-4">
          <iframe
            width="100%"
            height="315"
            src="https://www.youtube.com/embed/K9ohimZIUU0?si=8v_VAaZMwISnPhbw"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            className="rounded-lg"
          ></iframe>
        </div>

        {/* Video 2 */}
        <div className="bg-white rounded-lg border border-gray-300 shadow p-4">
          <iframe
            width="100%"
            height="315"
            src="https://www.youtube.com/embed/K9ohimZIUU0?si=8v_VAaZMwISnPhbw"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            className="rounded-lg"
          ></iframe>
        </div>
      </div>

      {/* Separation Line */}
      <hr className="border-secondary mb-6" />
    </div>
  );
};

export default Videos;
