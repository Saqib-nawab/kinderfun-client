// src/App.tsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Rhymes from "./pages/Rhymes";
import Activities from "./pages/Activities";
import BlogCategories from "./pages/BlogCategories";
import Contact from "./pages/Contact";

const App: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow mt-16 md:mt-20">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/rhymes" element={<Rhymes />} />
          <Route path="/activities" element={<Activities />} />
          <Route path="/blog" element={<BlogCategories />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;
