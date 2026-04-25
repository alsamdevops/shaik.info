import { motion } from "motion/react";
import { PROJECTS, SKILLS } from "../constants";
import { Terminal, Code2, Layers, Cpu, CheckCircle2 } from "lucide-react";

export default function Services() {
  return (
    <div className="max-w-7xl mx-auto w-full space-y-24 pb-24 px-4 md:px-0">
      {/* Services Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center space-y-4 card gradient-card p-12 relative overflow-hidden"
      >
        <div className="absolute inset-0 z-0 opacity-[0.05]">
          <img 
            src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1200" 
            alt="Circuit" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="relative z-10">
          <div className="label">Capabilities & Implementation</div>
          <h1 className="text-4xl md:text-6xl font-display font-black tracking-tighter">Architecture & <span className="text-brand-blue">Solutions</span></h1>
          <p className="desc text-lg max-w-2xl mx-auto">
            A comprehensive suite of DevOps and architectural services tailored for healthcare, ecommerce, and enterprise systems.
          </p>
        </div>
      </motion.div>

      {/* Primary Stack */}
      <section className="space-y-12">
        <div className="flex items-center gap-4 border-b border-brand-border pb-4">
          <Terminal className="w-8 h-8 text-brand-blue" />
          <h2 className="text-3xl font-bold">The Technical Core</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {SKILLS.map((skill, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="card group"
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-transform">
                  <skill.icon className={`w-5 h-5 ${skill.color}`} />
                </div>
                <div>
                  <div className="font-bold">{skill.name}</div>
                  <div className="text-[10px] text-brand-blue uppercase tracking-widest font-black">{skill.level}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Project Modules */}
      <section className="space-y-12">
        <div className="flex items-center gap-4 border-b border-brand-border pb-4">
          <Layers className="w-8 h-8 text-brand-blue" />
          <h2 className="text-3xl font-bold">Domain-Specific Modules</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {PROJECTS.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="card flex items-start gap-6 group hover:border-brand-blue/40"
            >
              <div className="w-14 h-14 shrink-0 rounded-2xl bg-brand-blue/5 border border-brand-blue/10 flex items-center justify-center group-hover:bg-brand-blue group-hover:text-white transition-all">
                <project.icon className="w-7 h-7" />
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <h3 className="text-xl font-bold">{project.title}</h3>
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-brand-blue/10 text-brand-blue border border-brand-blue/20">{project.category}</span>
                </div>
                <p className="desc text-sm">
                  Full infrastructure design including CI/CD pipelines, high-availability clusters, and automated backups for {project.title}.
                </p>
                <div className="flex flex-wrap gap-x-4 gap-y-2 pt-2">
                  <span className="flex items-center gap-1.5 text-[11px] font-bold text-brand-success"><CheckCircle2 className="w-3 h-3" /> Scalable</span>
                  <span className="flex items-center gap-1.5 text-[11px] font-bold text-brand-success"><CheckCircle2 className="w-3 h-3" /> Secure</span>
                  <span className="flex items-center gap-1.5 text-[11px] font-bold text-brand-success"><CheckCircle2 className="w-3 h-3" /> Robust</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Application Expertise */}
      <section className="card gradient-card p-12 text-center space-y-8">
        <Cpu className="w-16 h-16 text-brand-blue mx-auto" />
        <h2 className="text-3xl md:text-4xl font-display font-bold">Web & Mobile Development Support</h2>
        <p className="max-w-3xl mx-auto desc text-lg">
          Beyond infrastructure, I provide architectural guidance for developing robust mobile and web applications, ensuring they are optimized for cloud environments from day one.
        </p>
      </section>
    </div>
  );
}
