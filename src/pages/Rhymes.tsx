

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import RingLoader from "../components/RingLoader";

interface VideoItem {
  id: { videoId?: string };
  snippet: {
    title: string;
    description: string;
    thumbnails: { medium: { url: string } };
  };
}

const categories = ["Nursery Rhymes", "Educational Songs", "Storytime"];

const Rhymes: React.FC = () => {
  const [videos, setVideos] = useState<VideoItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [currentCategory, setCurrentCategory] = useState<string>(categories[0]);
  const [nextPageToken, setNextPageToken] = useState<string | null>(null);

  const API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY;
  const CHANNEL_ID = import.meta.env.VITE_YOUTUBE_CHANNEL_ID;

  const fetchVideos = async (isLoadMore = false) => {
    setLoading(true);
    try {
      const baseUrl = `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${CHANNEL_ID}&part=snippet,id&order=date&maxResults=10&q=${encodeURIComponent(
        currentCategory
      )}`;
      const url =
        isLoadMore && nextPageToken
          ? `${baseUrl}&pageToken=${nextPageToken}`
          : baseUrl;
      const response = await fetch(url);
      console.log(response)
      if (!response.ok) throw new Error("Failed to fetch videos");
      const data = await response.json();

      setVideos((prev) => (isLoadMore ? [...prev, ...data.items] : data.items));
      setNextPageToken(data.nextPageToken || null);
      setError(null);
    } catch (err: unknown) {
      setError(
        err instanceof Error ? err.message : "An unknown error occurred"
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    setVideos([]);
    setNextPageToken(null);
    fetchVideos();
  }, [currentCategory]);

  return (
    <div className="w-4/5 mx-auto mt-4 relative">
      <div className="min-h-screen p-4 bg-[var(--background)] text-[var(--text-dark)] font-sans">
        <h1 className="text-4xl font-bold text-[var(--primary)] mb-4">
          Rhymes & Animation
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar with Categories */}
          <aside className="lg:col-span-1">
            <ul className="space-y-4">
              {categories.map((cat) => (
                <li key={cat}>
                  <button
                    onClick={() => setCurrentCategory(cat)}
                    className={`w-full text-left px-4 py-3 rounded-lg shadow-md transition text-dark
                      ${currentCategory === cat
                        ? "bg-[var(--secondary)] text-white"
                        : "bg-[var(--gray-light)] text-black hover:bg-[var(--light-orange)] hover:text-black"
                      }`}
                  >
                    {cat}
                  </button>
                </li>
              ))}
            </ul>
            {/* adding banner image  */}

            <div className="sticky hidden lg:block  top-10 max-w-sm mx-auto bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 mt-4 mb-4 ">
              <img
                className="w-full h-30 object-cover"
                src="https://media.istockphoto.com/id/1353379172/photo/cute-little-african-american-girl-looking-at-camera.jpg?s=612x612&w=0&k=20&c=RCOYytwS2nMGfEb80oyeiCcIiqMQu6wnTluAaxMBye4="
                alt="Shop Products"
              />
              <div className="p-6 flex flex-col items-center">
                <h2 className="text-2xl font-bold text-primary mb-4 text-center">
                  Exciting Products Coming Soon!
                </h2>
                <p className="text-gray-600 mb-6 text-center">
                  Get ready for adorable toys, rhymes, and fun learning essentials!
                </p>
                <Link to="/shop">
                  <button className="px-6 py-3 bg-primary text-black text-lg font-semibold rounded-full hover:bg-secondary transition-all">
                    Shop Now
                  </button>
                </Link>
              </div>
            </div>

          </aside>

          {/* Video Grid */}
          <section className="lg:col-span-3">
            {loading && (
              <div className="flex justify-center items-center h-full">
                <RingLoader size="w-24 h-24" color="border-blue-500" />
              </div>
            )}
            {error && <p>Error: {error}</p>}

            <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {videos.map((video) => {
                const videoId = video.id.videoId;
                if (!videoId) return null;
                return (
                  <div
                    key={videoId}
                    className="bg-white rounded-lg shadow-lg overflow-hidden"
                  >
                    <div className="relative pb-[56.25%]">
                      <iframe
                        className="absolute top-0 left-0 w-full h-full"
                        src={`https://www.youtube.com/embed/${videoId}`}
                        title={video.snippet.title}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                    </div>
                    <div className="p-4">
                      <h2 className="text-xl font-semibold text-[var(--primary)]">
                        {video.snippet.title}
                      </h2>
                      <p className="text-sm text-[var(--gray-dark)] mt-2 line-clamp-3">
                        {video.snippet.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Load More Button */}
            {nextPageToken && !loading && (
              <div className="mt-8 text-center">
                <button
                  onClick={() => fetchVideos(true)}
                  className="px-6 py-2 bg-[var(--secondary)] text-white font-semibold rounded-lg hover:bg-[var(--primary)] transition-all"
                >
                  Load More
                </button>
              </div>
            )}
          </section>
        </div>
      </div>
    </div>
  );
};

export default Rhymes;
