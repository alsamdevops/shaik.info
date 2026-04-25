import { motion } from "motion/react";
import { Link, useLocation } from "react-router-dom";
import { Mail } from "lucide-react";

export default function Navbar() {
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="flex justify-between items-center mb-8 max-w-7xl mx-auto w-full px-4 md:px-0">
      <Link 
        to="/" 
        className="text-xl font-display font-black tracking-tighter text-brand-blue"
      >
        SHAIK.INFO
      </Link>
      
      <div className="hidden md:flex gap-8 text-[13px] font-bold text-brand-text-dim">
        {[
          { name: 'Home', path: '/' },
          { name: 'About', path: '/about' },
          { name: 'Services', path: '/services' },
          { name: 'Projects', path: '/projects' },
          { name: 'Inquiry', path: '/inquiry' },
          { name: 'Contact', path: '/contact' }
        ].map((item) => (
          <Link 
            key={item.name} 
            to={item.path} 
            className={`hover:text-brand-text-bright transition-colors uppercase ${isActive(item.path) ? 'text-brand-blue' : ''}`}
          >
            {item.name}
          </Link>
        ))}
      </div>

      <Link
        to="/contact"
        className="px-5 py-2 rounded-full bg-brand-blue text-white text-[12px] font-extrabold shadow-lg shadow-brand-blue/20 hover:scale-105 transition-transform flex items-center gap-2"
      >
        <Mail className="w-3.5 h-3.5" />
        SUPPORT PORTAL
      </Link>
    </nav>
  );
}
