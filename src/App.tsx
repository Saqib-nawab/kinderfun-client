// src/App.tsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Rhymes from "./pages/Rhymes";
import Activities from "./pages/Activities";
import BlogCategories from "./pages/BlogCategories"; // Grid of category cards
import CategoryBlogs from "./pages/CategoryBlogs"; // Lists blogs for a selected category
import BlogDetail from "./pages/BlogDetail"; // Displays a single blog in full
import Blog from "./pages/BlogCategories"; // Added Blog component
import Contact from "./pages/Contact";

// Import blogs from JSON data. The JSON exports an object with a property "blogs".
import blogsData from "./data/blogs.json";

const App: React.FC = () => {
  // Map blogs to ensure each blog has a shortDesc property
  const blogsWithShortDesc = blogsData.blogs.map((blog) => ({
    ...blog,
    shortDesc: blog.shortDesc || "",
  }));

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow mt-16 md:mt-20">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/rhymes" element={<Rhymes />} />
          <Route path="/activities" element={<Activities />} />
          {/* Blog categories page: grid of category cards */}
          <Route
            path="/blog"
            element={<BlogCategories blogs={blogsWithShortDesc} />}
          />
          {/* Route to show all blogs for a given category */}
          <Route
            path="/category/:categorySlug"
            element={<CategoryBlogs blogs={blogsWithShortDesc} />}
          />
          {/* Route for individual blog details */}
          <Route
            path="/blogs/:blogId"
            element={<BlogDetail blogs={blogsData.blogs} />}
          />
          {/* New route for Blog component to use the declared component */}
          <Route
            path="/blog-overview"
            element={<Blog blogs={blogsWithShortDesc} />}
          />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;
