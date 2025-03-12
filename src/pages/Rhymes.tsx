// src/pages/Rhymes.tsx
import React, { useState, useEffect } from 'react';

interface VideoItem {
  id: {
    videoId?: string;
    channelId?: string;
  };
  snippet: {
    title: string;
    description: string;
    thumbnails: {
      default: { url: string };
      medium: { url: string };
      high: { url: string };
    };
  };
}

const Rhymes: React.FC = () => {
  const [videos, setVideos] = useState<VideoItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

const API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY;
const CHANNEL_ID = import.meta.env.VITE_YOUTUBE_CHANNEL_ID;

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await fetch(
          `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${CHANNEL_ID}&part=snippet,id&order=date&maxResults=10`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch videos");
        }
        const data = await response.json();
        console.log("videos data",data);
        setVideos(data.items);
      } catch (err: unknown) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("An unknown error occurred");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchVideos();
  }, [API_KEY, CHANNEL_ID]);

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4">Rhymes & Animation</h1>
      <p className="mb-6">
        Categorized video content including Nursery Rhymes, Educational Songs, and Storytime.
      </p>

      {loading && <p>Loading videos...</p>}
      {error && <p>Error: {error}</p>}
      {!loading && !error && (
        <ul className="space-y-4">
          {videos.map((video) => {
            // Use video.id.videoId if available, else fallback to a different unique key
            const videoId = video.id.videoId || video.id.channelId || Math.random().toString();
            return (
              <li key={videoId} className="border p-4 rounded shadow">
                <h2 className="text-xl font-semibold">{video.snippet.title}</h2>
                <p className="text-sm text-gray-600">{video.snippet.description}</p>
                <img
                  src={video.snippet.thumbnails.medium.url}
                  alt={video.snippet.title}
                  className="mt-2"
                />
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default Rhymes;