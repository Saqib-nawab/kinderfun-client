// src/App.tsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Rhymes from "./pages/Rhymes";
import Activities from "./pages/Activities";
import BlogCategories from "./pages/BlogCategories";
import CategoryBlogs from "./pages/CategoryBlogs";
import BlogDetail from "./pages/BlogDetail";
import Contact from "./pages/Contact";

import blogsData from "./data/blogs.json";

const App: React.FC = () => {
  return (
    <div className="w-4/5 mx-auto mt-4 relative flex flex-col min-h-screen">
      <Navbar />

      {/* Main content area grows to fill vertical space */}
      <main className="flex-grow mt-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/rhymes" element={<Rhymes />} />
          <Route path="/activities" element={<Activities />} />
          <Route
            path="/blog"
            element={
              <BlogCategories
                blogs={blogsData.blogs.map((blog) => ({
                  ...blog,
                  shortDesc: blog.shortDesc || "",
                }))}
              />
            }
          />
          <Route
            path="/category/:categorySlug"
            element={
              <CategoryBlogs
                blogs={blogsData.blogs.map((blog) => ({
                  ...blog,
                  shortDesc: blog.shortDesc || "",
                }))}
              />
            }
          />
          <Route
            path="/blogs/:blogId"
            element={<BlogDetail blogs={blogsData.blogs} />}
          />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
};

export default App;
