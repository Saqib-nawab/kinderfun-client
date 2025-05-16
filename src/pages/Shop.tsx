import React from "react";

const Shop: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[var(--background)] text-[var(--text-dark)] font-sans p-6">
      <h1 className="text-5xl font-bold text-[var(--primary)] mb-6 text-center">
        Our Shop is Coming Soon! 🎉
      </h1>
      <p className="text-lg text-[var(--gray-dark)] text-center mb-10 max-w-xl">
        We’re working hard behind the scenes to bring you the best fun-filled shopping experience! 
        Stay tuned for adorable rhymes, toys, storybooks, and more. 🚀
      </p>
      <button className="px-8 py-3 bg-[var(--secondary)] text-white rounded-lg text-lg font-semibold hover:bg-[var(--primary)] transition-all">
        Back to Home
      </button>

    </div>
  );
};

export default Shop;
