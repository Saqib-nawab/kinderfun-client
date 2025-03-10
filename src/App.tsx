import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Rhymes from "./pages/Rhymes";
import Activities from "./pages/Activities";
import Blog from "./pages/Blog";
import Subscription from "./pages/Subscription";
import Shop from "./pages/Shop";
import Contact from "./pages/Contact";
import Privacy from "./pages/Privacy";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rhymes" element={<Rhymes />} />
        <Route path="/activities" element={<Activities />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/subscription" element={<Subscription />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy" element={<Privacy />} />
      </Routes>
    </Router>
  );
};

export default App;
