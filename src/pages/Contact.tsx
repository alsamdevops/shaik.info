import { motion } from "motion/react";
import { Mail, Linkedin, Github, MessageSquare, ChevronRight, Send } from "lucide-react";

export default function Contact() {
  return (
    <div className="max-w-5xl mx-auto w-full space-y-12 pb-24 px-4 md:px-0">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="card gradient-card p-12 md:p-24 text-center space-y-8 relative overflow-hidden"
      >
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand-blue to-transparent" />
        
        <div className="space-y-4">
          <div className="label">Get in Touch</div>
          <h1 className="text-4xl md:text-7xl font-display font-black tracking-tighter">Support <span className="text-brand-blue">Portal</span></h1>
          <p className="desc text-lg max-w-2xl mx-auto">
            Ready to design your next scalable architecture? I'm available for consultations and enterprise project management.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto pt-8">
          <a 
            href="mailto:contactaslamsir@gmail.com"
            className="card bg-brand-surface border-brand-blue/20 hover:border-brand-blue flex flex-col items-center gap-4 p-8 group transition-all"
          >
            <div className="w-16 h-16 rounded-full bg-brand-blue/10 flex items-center justify-center group-hover:bg-brand-blue group-hover:text-white transition-colors">
              <Mail className="w-8 h-8" />
            </div>
            <div className="font-bold text-lg">Email Support</div>
            <div className="text-xs text-brand-text-dim text-center">Inquiries & Support</div>
          </a>

          <a 
            href="#"
            className="card bg-brand-surface border-brand-blue/20 hover:border-brand-blue flex flex-col items-center gap-4 p-8 group transition-all"
          >
            <div className="w-16 h-16 rounded-full bg-brand-blue/10 flex items-center justify-center group-hover:bg-brand-blue group-hover:text-white transition-colors">
              <Linkedin className="w-8 h-8" />
            </div>
            <div className="font-bold text-lg">LinkedIn</div>
            <div className="text-xs text-brand-text-dim text-center">Professional Network</div>
          </a>
        </div>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6">
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
        <div className="card p-8 space-y-4 flex flex-col items-center text-center">
          <ChevronRight className="w-10 h-10 text-indigo-400 rotate-90" />
          <h3 className="text-xl font-bold">Training</h3>
          <p className="desc text-sm">Guidance for your dev teams on best practices for DevOps and Cloud.</p>
        </div>
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
