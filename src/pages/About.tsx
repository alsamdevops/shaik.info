import { motion } from "motion/react";
import { Server, Cloud, Activity, ShieldCheck, Database } from "lucide-react";

export default function About() {
  return (
    <div className="max-w-4xl mx-auto w-full space-y-12 pb-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center space-y-4"
      >
        <div className="label">The Architect's Story</div>
        <h1 className="text-4xl md:text-6xl font-display font-black tracking-tighter">13+ Years of <span className="text-brand-blue">Evolution</span></h1>
        <p className="desc text-lg max-w-2xl mx-auto">
          From the cold aisles of physical data centers to the virtual nodes of the global cloud, my career has been dedicated to one thing: Stability.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="card space-y-6"
        >
          <div className="w-12 h-12 rounded-2xl bg-brand-blue/10 flex items-center justify-center">
            <Server className="text-brand-blue" />
          </div>
          <h2 className="text-2xl font-bold">Physical Infrastructure</h2>
          <p className="desc text-base">
            My early years were spent mastering server racks, cabling, and bare-metal management. I understand the hardware layer, which gives me a unique advantage in troubleshooting performance bottlenecks that pure cloud architects might overlook.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="card space-y-6"
        >
          <div className="w-12 h-12 rounded-2xl bg-brand-success/10 flex items-center justify-center">
            <Cloud className="text-brand-success" />
          </div>
          <h2 className="text-2xl font-bold">Cloud Modernization</h2>
          <p className="desc text-base">
            I specialize in bridge-building: taking complex architectures out of physical constraints and into dynamic cloud environments like AWS and Azure. I treat infrastructure as code (IaC) to ensure replicable, versioned, and secure environments.
          </p>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="card gradient-card p-8 md:p-12 space-y-8"
      >
        <div className="flex items-center gap-4">
          <ShieldCheck className="w-8 h-8 text-brand-blue" />
          <h2 className="text-3xl font-bold italic">My Philosophy</h2>
        </div>
        <p className="text-xl leading-relaxed text-brand-text-bright font-medium italic">
          "Infrastructure isn't just about servers—it's about confidence. A robust pipeline means a developer can commit with peace of mind. A scalable architecture means a business can grow without the fear of downtime."
        </p>
        <div className="flex flex-wrap gap-8 pt-8 border-t border-brand-border/50">
          <div>
            <div className="text-2xl font-black text-brand-blue">100%</div>
            <div className="label">Security Focus</div>
          </div>
          <div>
            <div className="text-2xl font-black text-brand-success">Zero</div>
            <div className="label">Unplanned Downtime</div>
          </div>
          <div>
            <div className="text-2xl font-black text-indigo-400">Multi</div>
            <div className="label">Domain Expertise</div>
          </div>
        </div>
      </motion.div>

      <section className="space-y-8">
        <h2 className="text-3xl font-bold">Operational Mastery</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { title: 'Incident Response', icon: Activity, desc: 'Rapid mitigation and RCA.' },
            { title: 'Cost Optimization', icon: Database, desc: 'Efficiency in cloud spend.' },
            { title: 'Compliance', icon: ShieldCheck, desc: 'Healthcare grade standards.' }
          ].map((item, idx) => (
            <div key={idx} className="card p-6 flex flex-col items-center text-center gap-4">
              <item.icon className="w-8 h-8 text-brand-text-dim" />
              <h3 className="font-bold">{item.title}</h3>
              <p className="desc text-xs">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
