// src/App.tsx
import React from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Activities from "./pages/Activities";
import BlogCategories from "./pages/BlogCategories";
import BlogDetail from "./pages/BlogDetail";
import CategoryBlogs from "./pages/CategoryBlogs";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Rhymes from "./pages/Rhymes";

import blogsData from "./data/blogs.json";
import Shop from "./pages/Shop";

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col justify-between w-screen">
      {" "}
      {/* Ensures the entire page layout is structured properly */}
      <Navbar />
      {/* Main content area grows to fill vertical space */}
      <main className="flex-grow mt-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/rhymes" element={<Rhymes />} />
          <Route path="/activities" element={<Activities />} />
          <Route path="/shop" element={<Shop />} />
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
      {/* <SocialModal /> */}
      <Footer />
    </div>
  );
};

export default App;
