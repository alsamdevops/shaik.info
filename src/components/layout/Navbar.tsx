import { motion, AnimatePresence } from "motion/react";
import { Link, useLocation } from "react-router-dom";
import { Mail, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

export default function Navbar() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  
  const isActive = (path: string) => location.pathname === path;

  // Close menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Projects', path: '/projects' },
    { name: 'Inquiry', path: '/inquiry' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <nav className="relative z-50 mb-8 max-w-7xl mx-auto w-full px-4 md:px-0">
      <div className="flex justify-between items-center py-4">
        <Link 
          to="/" 
          className="text-xl font-display font-black tracking-tighter text-brand-blue"
        >
          SHAIK.INFO
        </Link>
        
        {/* Desktop Links */}
        <div className="hidden md:flex gap-8 text-[13px] font-bold text-brand-text-dim">
          {navItems.map((item) => (
            <Link 
              key={item.name} 
              to={item.path} 
              className={`hover:text-brand-text-bright transition-colors uppercase ${isActive(item.path) ? 'text-brand-blue' : ''}`}
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Desktop Support CTA */}
        <div className="hidden md:block">
          <Link
            to="/contact"
            className="px-5 py-2 rounded-full bg-brand-blue text-white text-[12px] font-extrabold shadow-lg shadow-brand-blue/20 hover:scale-105 transition-transform flex items-center gap-2"
          >
            <Mail className="w-3.5 h-3.5" />
            SUPPORT PORTAL
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden p-2 text-brand-text-bright"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden overflow-hidden bg-brand-surface border border-brand-border rounded-2xl mt-2 p-4 shadow-2xl"
          >
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <Link 
                  key={item.name} 
                  to={item.path} 
                  className={`py-3 px-4 rounded-xl font-bold uppercase transition-colors ${isActive(item.path) ? 'bg-brand-blue/10 text-brand-blue' : 'text-brand-text-dim hover:bg-brand-surface'}`}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                to="/contact"
                className="mt-4 w-full py-4 bg-brand-blue text-white rounded-xl font-black text-xs tracking-widest text-center shadow-lg shadow-brand-blue/20"
              >
                SUPPORT PORTAL
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
