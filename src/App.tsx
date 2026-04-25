/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { HashRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Linkedin, Mail, Phone } from "lucide-react";
import Navbar from "./components/layout/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Inquiry from "./pages/Inquiry";
import Projects from "./pages/Projects";

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
            <Route path="/projects" element={<Projects />} />
            <Route path="/inquiry" element={<Inquiry />} />
          </Routes>
        </main>

        <footer className="mt-8 pt-8 max-w-7xl mx-auto w-full border-t border-brand-border space-y-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-brand-text-dim text-[11px]">
            <div>&copy; {new Date().getFullYear()} Shaik | Senior DevOps Architect Portfolio | Built with AI Studio</div>
            <div className="flex gap-6 items-center">
              <a href="https://www.linkedin.com/in/aslamdevops" target="_blank" rel="noopener noreferrer" className="hover:text-brand-blue transition-colors flex items-center gap-1">
                <Linkedin className="w-3 h-3" /> LINKEDIN
              </a>
              <a href="tel:+917997533193" className="hover:text-brand-blue transition-colors flex items-center gap-1">
                <Phone className="w-3 h-3" /> +91 7997533193
              </a>
              <a href="mailto:contactaslamsir@gmail.com" className="hover:text-brand-blue transition-colors flex items-center gap-1">
                <Mail className="w-3 h-3" /> EMAIL
              </a>
            </div>
            <div className="flex gap-4 font-bold tracking-widest">
              <span>ARCHITECTURE</span>
              <span>AUTOMATION</span>
              <span>SCALABILITY</span>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

