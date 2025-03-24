// src/pages/CategoryBlogs.tsx
import React from "react";
import { useParams, Link } from "react-router-dom";

interface Blog {
  id: string;
  title: string;
  image: string;
  description: string;
  category: string;
}

interface CategoryBlogsProps {
  blogs: Blog[];
}

const CategoryBlogs: React.FC<CategoryBlogsProps> = ({ blogs }) => {
  // Get the category slug from the route parameters.
  const { categorySlug } = useParams<{ categorySlug: string }>();

  // Filter blogs that belong to the selected category.
  const filteredBlogs = blogs.filter((blog) => blog.category === categorySlug);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-[var(--primary)]">
        {categorySlug ? categorySlug.replace(/-/g, " ") : "Unknown"} Blogs
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredBlogs.map((blog) => (
          <div
            key={blog.id}
            className="border rounded-lg p-4 hover:shadow-lg transition cursor-pointer"
          >
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-48 object-cover rounded"
            />
            <h2 className="text-xl font-semibold mt-4">{blog.title}</h2>
            <p className="mt-2">
              {blog.description.substring(0, 100)}
              {blog.description.length > 100 ? "..." : ""}
            </p>
            {/* Link to the detailed blog view */}
            <Link
              to={`/blogs/${blog.id}`}
              className="mt-4 inline-block text-[var(--secondary)] underline"
            >
              Read More
            </Link>
          </div>
        ))}
      </div>
      {/* Optionally add a link to go back to the blog categories page */}
      <div className="mt-8">
        <Link
          to="/blog"
          className="inline-block bg-[var(--primary)] text-[var(--text-white)] px-4 py-2 rounded hover:bg-[var(--secondary)] transition"
        >
          Back to Categories
        </Link>
      </div>
    </div>
  );
};

export default CategoryBlogs;
