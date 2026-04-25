import { motion } from "motion/react";
import { ChevronRight } from "lucide-react";
import { PROJECTS, SKILLS } from "../constants";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-12 gap-4 auto-rows-[minmax(100px,auto)] md:auto-rows-[100px]">
      {/* Hero Card */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="card md:col-span-6 md:row-span-3 flex flex-col justify-center relative overflow-hidden group"
      >
        <div className="absolute inset-0 z-0 opacity-20 group-hover:opacity-30 transition-opacity">
          <img 
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1200" 
            alt="Infrastructure Background" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="relative z-10">
          <div className="label">13+ Years Mastered</div>
          <h1 className="title text-3xl md:text-5xl">Senior DevOps Architect</h1>
          <p className="desc text-base">
            Specializing in high-scale infrastructure for Healthcare & Ecommerce. Transitioning legacy data centers to robust, automated cloud ecosystems.
          </p>
        </div>
      </motion.section>

      {/* Stats Card 1 */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="card md:col-span-3 md:row-span-2 gradient-card flex flex-col items-center justify-center text-center cursor-pointer hover:scale-105 transition-transform"
        onClick={() => navigate('/about')}
      >
        <div className="text-5xl font-black text-brand-blue mb-1">13+</div>
        <div className="label mb-1">Years Exp</div>
        <div className="desc text-[11px]">Physical & Cloud</div>
      </motion.div>

      {/* Tools Card */}
      <motion.section 
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="card md:col-span-3 md:row-span-4"
      >
        <div className="label">The Stack</div>
        <div className="mt-4 space-y-4">
          <div>
            <p className="text-[13px] font-bold text-brand-text-bright mb-3">Orchestration & CI/CD</p>
            <div className="flex flex-wrap gap-1.5">
              {SKILLS.slice(0, 5).map(skill => (
                <span key={skill.name} className="px-2.5 py-1 bg-brand-blue/10 border border-brand-blue/20 rounded-md text-[11px] font-bold text-brand-blue">
                  {skill.name}
                </span>
              ))}
            </div>
          </div>
          <div>
            <p className="text-[13px] font-bold text-brand-text-bright mb-3">Automation</p>
            <div className="flex flex-wrap gap-1.5">
              {SKILLS.slice(5).map(skill => (
                <span key={skill.name} className="px-2.5 py-1 bg-brand-blue/10 border border-brand-blue/20 rounded-md text-[11px] font-bold text-brand-blue">
                  {skill.name}
                </span>
              ))}
              <span className="px-2.5 py-1 bg-brand-blue/10 border border-brand-blue/20 rounded-md text-[11px] font-bold text-brand-blue">Ansible</span>
              <span className="px-2.5 py-1 bg-brand-blue/10 border border-brand-blue/20 rounded-md text-[11px] font-bold text-brand-blue">Groovy</span>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Cloud Card */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="card md:col-span-3 md:row-span-3"
      >
        <div className="label">Dual-Core Expertise</div>
        <div className="mt-4 space-y-5">
          <div>
            <div className="flex justify-between items-center mb-2">
              <span className="text-[12px] font-medium">Cloud (AWS/Azure) & Physical Networking</span>
              <span className="text-[12px] font-bold text-brand-success font-mono">96%</span>
            </div>
            <div className="h-1 bg-brand-border rounded-full overflow-hidden">
              <motion.div 
                initial={{ width: 0 }}
                whileInView={{ width: '96%' }}
                className="h-full bg-brand-success" 
              />
            </div>
          </div>
          <div>
            <div className="flex justify-between items-center mb-2">
              <span className="text-[12px] font-medium">Physical DC</span>
              <span className="text-[12px] font-bold text-brand-blue font-mono">88%</span>
            </div>
            <div className="h-1 bg-brand-border rounded-full overflow-hidden">
              <motion.div 
                initial={{ width: 0 }}
                whileInView={{ width: '88%' }}
                className="h-full bg-brand-blue" 
              />
            </div>
          </div>
          <p className="desc text-[11px] mt-2">
            Proven track record in managing robust server environments.
          </p>
        </div>
      </motion.section>

      {/* Project Card */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="card md:col-span-6 md:row-span-5 cursor-pointer group relative overflow-hidden"
        onClick={() => navigate('/services')}
      >
        <div className="absolute inset-0 z-0 opacity-[0.03] group-hover:opacity-[0.07] transition-opacity">
          <img 
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1200" 
            alt="Nodes" 
            className="w-full h-full object-cover scale-110"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="relative z-10 h-full flex flex-col">
          <div className="label">Portfolio Highlights</div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
            {PROJECTS.slice(0, 8).map((project, idx) => (
              <div key={idx} className="p-2.5 rounded-xl bg-white/[0.03] border border-brand-border flex items-center gap-3 group-hover:border-brand-blue/30 transition-colors">
                <div className="w-8 h-8 rounded-lg bg-brand-blue flex items-center justify-center text-[11px] font-black">
                  {project.title.split(' ').map(w => w[0]).join('').slice(0, 2).toUpperCase()}
                </div>
                <div className="text-[12px] font-bold truncate">{project.title}</div>
              </div>
            ))}
          </div>
          <div className="mt-auto pt-6 flex items-center gap-2 text-brand-blue font-bold text-xs uppercase tracking-widest group-hover:gap-4 transition-all">
            View All Services & Projects <ChevronRight className="w-4 h-4" />
          </div>
        </div>
      </motion.section>

      {/* Stats Card 2 */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="card md:col-span-3 md:row-span-2 gradient-card flex flex-col items-center justify-center text-center"
      >
        <div className="text-4xl font-black text-white mb-1">50+</div>
        <div className="label mb-1">Deploys/Day</div>
        <div className="desc text-[11px]">Automated Pipelines</div>
      </motion.div>

      {/* Contact Card */}
      <motion.section 
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="card md:col-span-3 md:row-span-2 contact-card flex flex-col justify-center gap-2 group cursor-pointer relative overflow-hidden"
        onClick={() => navigate('/contact')}
      >
        <div className="absolute inset-0 z-0 opacity-20 mix-blend-overlay">
           <img 
            src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=600" 
            alt="Business" 
            className="w-full h-full object-cover grayscale"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="relative z-10">
          <div className="text-[10px] uppercase font-black tracking-widest opacity-80">Next Step</div>
          <div className="text-2xl font-bold tracking-tight text-white">Build Together</div>
          <div className="text-[12px] opacity-90 leading-tight text-white/90">
            Let's design your next scalable architecture.
            <div className="mt-3 inline-flex items-center gap-1.5 font-bold group-hover:translate-x-1 transition-transform">
              Start Now <ChevronRight className="w-3.5 h-3.5" />
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
}
