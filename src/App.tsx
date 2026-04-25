/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { HashRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "./components/layout/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen selection:bg-brand-blue/30 selection:text-brand-blue flex flex-col p-4 md:p-6">
        <Navbar />
        
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        <footer className="mt-8 pt-8 max-w-7xl mx-auto w-full flex flex-col md:flex-row justify-between items-center gap-4 text-brand-text-dim text-[11px] border-t border-brand-border">
          <div>&copy; {new Date().getFullYear()} Shaik | Senior DevOps Architect</div>
          <div className="flex gap-4 font-bold tracking-widest">
            <span>ARCHITECTURE</span>
            <span>AUTOMATION</span>
            <span>SCALABILITY</span>
          </div>
        </footer>
      </div>
    </Router>
  );
}

