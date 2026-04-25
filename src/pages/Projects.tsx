import { motion } from "motion/react";
import { ExternalLink, Layers, Cpu, Cloud, Workflow, Server, ChevronRight } from "lucide-react";

const CATEGORIES = [
  {
    id: "kubernetes",
    title: "Kubernetes & Orchestration",
    icon: Layers,
    image: "https://images.unsplash.com/photo-1667372333374-0d3c013b28da?auto=format&fit=crop&q=80&w=1200",
    description: "Designing and maintaining production-grade EKS/GKE clusters with automated scaling and service mesh integration using ArgoCD."
  },
  {
    id: "aws",
    title: "AWS Cloud Infrastructure",
    icon: Cloud,
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1200",
    description: "Multi-region architecture design, ensuring 99.99% availability for enterprise healthcare and ecommerce platforms."
  },
  {
    id: "cicd",
    title: "CI/CD & Jenkins Pipeline",
    icon: Workflow,
    image: "https://images.unsplash.com/photo-1618401471353-b98aadebc25a?auto=format&fit=crop&q=80&w=1200",
    description: "High-velocity Jenkins pipelines that power rapid delivery using declarative syntax and shared libraries."
  }
];

const SHOWCASE_PROJECTS = [
  {
    title: "Infrastructure as Code",
    subtitle: "Terraform Module Architecture",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc48?auto=format&fit=crop&q=80&w=800",
    tags: ["Terraform", "HCL", "Providers"]
  },
  {
    title: "Cluster Guard",
    subtitle: "ArgoCD & Kubernetes Security",
    image: "https://images.unsplash.com/photo-1607799279861-4dd421887fb3?auto=format&fit=crop&q=80&w=800",
    tags: ["ArgoCD", "K8s", "GitOps"]
  },
  {
    title: "SwiftPipe",
    subtitle: "Automated Jenkins Pipeline Architecture",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800",
    tags: ["Jenkins", "Docker", "Ansible"]
  }
];

export default function Projects() {
  return (
    <div className="max-w-7xl mx-auto w-full space-y-24 pb-24 px-4 md:px-0">
      {/* Header section with background blur image */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative h-[400px] rounded-3xl overflow-hidden flex items-center justify-center text-center p-8 gradient-card"
      >
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1600" 
            alt="Technical Architecture" 
            className="w-full h-full object-cover opacity-20"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="relative z-10 space-y-6 max-w-3xl">
          <div className="label">Portfolio Showcase</div>
          <h1 className="text-4xl md:text-7xl font-display font-black tracking-tighter uppercase italic">
            Engineered <span className="text-brand-blue">Excellence</span>
          </h1>
          <p className="desc text-xl">
            A portfolio of architectural achievements, showing real-world implementations of DevOps principles at scale.
          </p>
        </div>
      </motion.div>

      {/* Main Pillars */}
      <div className="grid lg:grid-cols-3 gap-8">
        {CATEGORIES.map((cat, idx) => (
          <motion.div
            key={cat.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="group relative overflow-hidden rounded-3xl aspect-[4/5] card p-0 border border-brand-border hover:border-brand-blue/50 transition-all flex flex-col"
          >
            <div className="absolute inset-0 z-0">
              <img 
                src={cat.image} 
                alt={cat.title} 
                className="w-full h-full object-cover group-hover:scale-110 transition-all duration-1000"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-brand-bg via-brand-bg/60 to-brand-bg/10 z-10" />
            
            <div className="relative z-20 mt-auto p-8 space-y-4">
              <div className="w-12 h-12 rounded-xl bg-brand-blue/20 backdrop-blur-md flex items-center justify-center border border-brand-blue/30 text-brand-blue">
                <cat.icon className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold tracking-tight">{cat.title}</h3>
              <p className="text-sm text-brand-text-dim leading-relaxed opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all">
                {cat.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Detailed Gallery */}
      <section className="space-y-12">
        <div className="flex items-end justify-between border-b border-brand-border pb-8">
          <div className="space-y-2">
            <div className="label">Case Studies</div>
            <h2 className="text-3xl font-display font-black tracking-tight">Technical Implementations</h2>
          </div>
          <div className="hidden md:flex gap-4">
            <div className="p-4 rounded-2xl bg-brand-surface border border-brand-border">
              <div className="text-xl font-black text-brand-blue">450+</div>
              <div className="text-[10px] uppercase font-bold text-brand-text-dim">Servers Migrated</div>
            </div>
            <div className="p-4 rounded-2xl bg-brand-surface border border-brand-border">
                <div className="text-xl font-black text-brand-success">Zero</div>
                <div className="text-[10px] uppercase font-bold text-brand-text-dim">Security Breaches</div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SHOWCASE_PROJECTS.map((project, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="card p-0 overflow-hidden group border border-brand-border hover:border-brand-blue transition-all"
            >
              <div className="relative aspect-video">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover" 
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-brand-bg/20 group-hover:bg-transparent transition-colors" />
                <div className="absolute bottom-4 left-4 flex gap-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-[9px] font-black uppercase tracking-widest bg-brand-bg/80 backdrop-blur-md px-2 py-1 rounded border border-white/10">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="p-6 space-y-1 relative">
                <div className="flex items-center justify-between">
                  <h3 className="font-bold text-lg">{project.title}</h3>
                  <ExternalLink className="w-4 h-4 text-brand-blue opacity-50 group-hover:opacity-100 transition-opacity" />
                </div>
                <p className="text-xs text-brand-text-dim leading-relaxed">{project.subtitle}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Network Spotlight */}
      <motion.section 
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="card gradient-card p-12 flex flex-col md:flex-row items-center gap-12"
      >
        <div className="flex-1 space-y-6">
          <div className="flex items-center gap-3">
            <div className="px-3 py-1 bg-brand-blue/10 border border-brand-blue/20 rounded text-[10px] font-bold text-brand-blue uppercase tracking-widest italic">
              Network Engineering
            </div>
          </div>
          <h2 className="text-3xl md:text-5xl font-display font-black tracking-tighter">
            Physical Cloud <span className="text-brand-blue">Networking</span>
          </h2>
          <p className="desc text-lg">
            Designing redundant physical network architectures and hybrid cloud connectivity. Bridging on-premise hardware with elastic cloud providers through managed networking.
          </p>
          <div className="flex gap-8">
              <div>
                <div className="text-lg font-bold">Hybrid</div>
                <div className="text-[10px] text-brand-text-dim uppercase font-bold">Direct Connect / VPN</div>
              </div>
              <div>
                <div className="text-lg font-bold">Resilience</div>
                <div className="text-[10px] text-brand-text-dim uppercase font-bold">BGP Routing & Failover</div>
              </div>
          </div>
        </div>
        <div className="w-full md:w-1/3 aspect-square rounded-3xl overflow-hidden border border-brand-border shadow-2xl shadow-brand-blue/20">
          <img 
            src="https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80&w=800" 
            alt="Physical Infrastructure" 
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            referrerPolicy="no-referrer"
          />
        </div>
      </motion.section>

      {/* Call to Action */}
      <section className="text-center py-12 space-y-8 bg-brand-surface rounded-[40px] border border-brand-border">
        <div className="space-y-4 px-8">
           <h3 className="text-4xl font-display font-black tracking-tight">Have a technical <span className="text-brand-blue">challenge?</span></h3>
           <p className="desc max-w-xl mx-auto">Let's audit your current pipeline and see where we can inject efficiency and scale.</p>
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="/inquiry" className="px-10 py-4 bg-brand-blue text-white rounded-full font-black text-xs tracking-[0.2em] uppercase hover:scale-105 transition-transform">
             Start Inquiry
          </a>
          <a href="/contact" className="px-10 py-4 border border-brand-border hover:border-brand-blue rounded-full font-black text-xs tracking-[0.2em] uppercase transition-colors">
             Direct Message
          </a>
        </div>
      </section>
    </div>
  );
}
