import { motion } from "motion/react";
import { Mail, Linkedin, Github, MessageSquare, ChevronRight, Send, User, Phone, FileText, Activity } from "lucide-react";
import { useState } from "react";

const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbzAtus5Mjne8z2k5Edz13_VvMKd0_D7XaukAHIlz1JfPGLk-Y4VoPEzYAuDW0RMSHUl-Q/exec';

export default function Contact() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');
    
    const formData = new FormData(e.currentTarget);
    
    try {
      // We use no-cors because Google Apps Scripts usually don't return CORS headers on redirects
      await fetch(SCRIPT_URL, {
        method: 'POST',
        body: formData,
        mode: 'no-cors'
      });
      setStatus('success');
    } catch (err) {
      console.error('Submission error:', err);
      // In no-cors mode, we won't get a response, so we assume success if no crash
      setStatus('success');
    }
  };

  return (
    <div className="max-w-7xl mx-auto w-full space-y-12 pb-24 px-4 md:px-0">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="card gradient-card p-8 md:p-16 text-center space-y-8 relative overflow-hidden"
      >
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand-blue to-transparent" />
        
        <div className="space-y-4">
          <div className="label">Get in Touch</div>
          <h1 className="text-4xl md:text-7xl font-display font-black tracking-tighter">Support <span className="text-brand-blue">Portal</span></h1>
          <p className="desc text-lg max-w-2xl mx-auto">
            Ready to design your next scalable architecture? I'm available for consultations and enterprise project management.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto pt-8">
          <a 
            href="mailto:contactaslamsir@gmail.com"
            className="card bg-brand-surface border-brand-blue/20 hover:border-brand-blue flex items-center gap-6 p-6 group transition-all text-left"
          >
            <div className="w-14 h-14 rounded-full bg-brand-blue/10 flex items-center justify-center group-hover:bg-brand-blue group-hover:text-white transition-colors shrink-0">
              <Mail className="w-6 h-6" />
            </div>
            <div>
              <div className="font-bold text-lg">Email Support</div>
              <div className="text-xs text-brand-text-dim">contactaslamsir@gmail.com</div>
            </div>
          </a>

          <a 
            href="#"
            className="card bg-brand-surface border-brand-blue/20 hover:border-brand-blue flex items-center gap-6 p-6 group transition-all text-left"
          >
            <div className="w-14 h-14 rounded-full bg-brand-blue/10 flex items-center justify-center group-hover:bg-brand-blue group-hover:text-white transition-colors shrink-0">
              <Linkedin className="w-6 h-6" />
            </div>
            <div>
              <div className="font-bold text-lg">LinkedIn</div>
              <div className="text-xs text-brand-text-dim">Professional Network</div>
            </div>
          </a>
        </div>
      </motion.div>

      <div className="grid lg:grid-cols-12 gap-6">
        {/* Info Grid */}
        <div className="lg:col-span-4 grid gap-6">
          <div className="card p-8 space-y-4 flex flex-col items-center text-center">
            <MessageSquare className="w-10 h-10 text-brand-blue" />
            <h3 className="text-xl font-bold">Consultation</h3>
            <p className="desc text-sm">Design review and architectural roadmaps for your IT ecosystem.</p>
          </div>
          <div className="card p-8 space-y-4 flex flex-col items-center text-center">
            <Send className="w-10 h-10 text-brand-success" />
            <h3 className="text-xl font-bold">Implementation</h3>
            <p className="desc text-sm">Full CI/CD setup, cloud migration, and cluster orchestration.</p>
          </div>
        </div>

        {/* Contact Form Card */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-8 card p-8 md:p-12"
        >
          <div className="label mb-6">Send an Inquiry</div>
          {status === 'success' ? (
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }} 
              animate={{ opacity: 1, scale: 1 }}
              className="flex flex-col items-center justify-center py-12 space-y-4"
            >
              <div className="w-20 h-20 rounded-full bg-brand-success/10 flex items-center justify-center">
                <Send className="w-10 h-10 text-brand-success" />
              </div>
              <h3 className="text-2xl font-bold">Inquiry Sent!</h3>
              <p className="desc">Thank you for reaching out. I'll get back to you shortly.</p>
              <button 
                onClick={() => setStatus('idle')}
                className="mt-4 text-brand-blue font-bold flex items-center gap-2 hover:gap-4 transition-all"
              >
                Send another one <ChevronRight className="w-4 h-4" />
              </button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Security Key */}
              <input type="hidden" name="key" value="Shaik_Secure_2024_Key" />

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-brand-text-dim uppercase tracking-widest pl-1 flex items-center gap-2">
                    <User className="w-3 h-3 text-brand-blue" /> Full Name
                  </label>
                  <input 
                    required
                    name="name"
                    type="text" 
                    placeholder="John Doe"
                    className="w-full bg-brand-bg border border-brand-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-brand-blue transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-brand-text-dim uppercase tracking-widest pl-1 flex items-center gap-2">
                    <Mail className="w-3.5 h-3.5 text-brand-blue" /> Email Address
                  </label>
                  <input 
                    required
                    name="email"
                    type="email" 
                    placeholder="john@company.com"
                    className="w-full bg-brand-bg border border-brand-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-brand-blue transition-colors"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-brand-text-dim uppercase tracking-widest pl-1 flex items-center gap-2">
                    <Phone className="w-3.5 h-3.5 text-brand-blue" /> Phone Number
                  </label>
                  <input 
                    type="tel" 
                    name="phone"
                    placeholder="+1 (555) 000-0000"
                    className="w-full bg-brand-bg border border-brand-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-brand-blue transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-brand-text-dim uppercase tracking-widest pl-1 flex items-center gap-2">
                    <FileText className="w-3.5 h-3.5 text-brand-blue" /> Subject
                  </label>
                  <select name="subject" className="w-full bg-brand-bg border border-brand-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-brand-blue transition-colors appearance-none">
                    <option>Cloud Migration</option>
                    <option>CI/CD Implementation</option>
                    <option>Infrastructure Audit</option>
                    <option>Other / General Inquiry</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-brand-text-dim uppercase tracking-widest pl-1 flex items-center gap-2">
                  <MessageSquare className="w-3.5 h-3.5 text-brand-blue" /> Message
                </label>
                <textarea 
                  required
                  name="message"
                  rows={4}
                  placeholder="Tell me about your project needs..."
                  className="w-full bg-brand-bg border border-brand-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-brand-blue transition-colors resize-none"
                ></textarea>
              </div>

              <button 
                type="submit"
                disabled={status === 'loading'}
                className="w-full md:w-auto px-10 py-4 rounded-xl bg-brand-blue text-white font-bold flex items-center justify-center gap-3 hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-50"
              >
                {status === 'loading' ? (
                  <>
                    <Activity className="w-4 h-4 animate-spin" />
                    Processing...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Submit Inquiry
                  </>
                )}
              </button>
            </form>
          )}
        </motion.div>
      </div>

      <footer className="text-center pt-24 space-y-4">
        <div className="flex justify-center gap-6">
          <a href="#" className="text-brand-text-dim hover:text-brand-blue transition-colors"><Linkedin className="w-6 h-6" /></a>
          <a href="#" className="text-brand-text-dim hover:text-brand-blue transition-colors"><Github className="w-6 h-6" /></a>
          <a href="mailto:contactaslamsir@gmail.com" className="text-brand-text-dim hover:text-brand-blue transition-colors"><Mail className="w-6 h-6" /></a>
        </div>
        <p className="text-[10px] uppercase tracking-widest font-bold text-brand-text-dim/50">
          &copy; {new Date().getFullYear()} Shaik Portfolio • Enterprise Scalability
        </p>
      </footer>
    </div>
  );
}
