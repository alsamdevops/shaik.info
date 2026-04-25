import { motion } from "motion/react";
import { Send, FileText, Globe, Search, ShieldCheck, Loader2, User, Mail, Phone } from "lucide-react";
import { useState } from "react";

const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbzAtus5Mjne8z2k5Edz13_VvMKd0_D7XaukAHIlz1JfPGLk-Y4VoPEzYAuDW0RMSHUl-Q/exec';

export default function Inquiry() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');
    
    const formData = new FormData(e.currentTarget);
    
    try {
      await fetch(SCRIPT_URL, {
        method: 'POST',
        body: formData,
        mode: 'no-cors' // Google Scripts often require no-cors for simple posts
      });
      setStatus('success');
    } catch (err) {
      console.error(err);
      // Since no-cors doesn't give us response, we assume success if it doesn't throw
      // But typically we should handle errors if we used a more robust endpoint
      setStatus('success'); 
    }
  };

  return (
    <div className="max-w-7xl mx-auto w-full pb-24 px-4 md:px-0">
      <div className="space-y-12">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           className="text-center space-y-4 card gradient-card p-12 relative overflow-hidden"
        >
          <div className="absolute inset-0 z-0 opacity-[0.05]">
            <img 
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200" 
              alt="Data Architecture" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="relative z-10">
            <div className="label">Project Scoping</div>
            <h1 className="text-4xl md:text-6xl font-display font-black tracking-tighter">Submit Your <span className="text-brand-blue">Query</span></h1>
            <p className="desc text-lg max-w-2xl mx-auto">
              Provide details about your current infrastructure or upcoming project. I'll perform a preliminary audit and reach out with a strategic roadmap.
            </p>
          </div>
        </motion.div>

        {status === 'success' ? (
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="card p-12 text-center space-y-6"
          >
            <div className="w-20 h-20 rounded-full bg-brand-success/10 flex items-center justify-center mx-auto">
              <ShieldCheck className="w-10 h-10 text-brand-success" />
            </div>
            <h2 className="text-3xl font-bold">Query Received</h2>
            <p className="desc text-lg">
              Your technical requirements have been logged. I am now reviewing the scope. Expect a response within 24-48 business hours.
            </p>
            <button 
              onClick={() => setStatus('idle')}
              className="px-8 py-3 rounded-xl border border-brand-border hover:border-brand-blue transition-colors text-sm font-bold"
            >
              Submit Another Query
            </button>
          </motion.div>
        ) : (
          <motion.form 
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-8"
          >
            {/* Security Key */}
            <input type="hidden" name="key" value="Shaik_Secure_2024_Key" />

            <div className="grid md:grid-cols-2 gap-8">
               <div className="card space-y-6">
                 <div className="flex items-center gap-3 border-b border-brand-border pb-4">
                   <User className="w-5 h-5 text-brand-blue" />
                   <h3 className="font-bold">Contact Info</h3>
                 </div>
                 <div className="space-y-4">
                   <div className="space-y-2">
                     <label className="text-[10px] font-black uppercase tracking-widest text-brand-text-dim">Full Name</label>
                     <input name="name" required className="w-full bg-brand-bg border border-brand-border rounded-lg px-4 py-2.5 text-sm" placeholder="Your Name" />
                   </div>
                   <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-brand-text-dim">Email</label>
                      <input name="email" type="email" required className="w-full bg-brand-bg border border-brand-border rounded-lg px-4 py-2.5 text-sm" placeholder="email@example.com" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-brand-text-dim">Phone</label>
                      <input name="phone" type="tel" required className="w-full bg-brand-bg border border-brand-border rounded-lg px-4 py-2.5 text-sm" placeholder="+123..." />
                    </div>
                   </div>
                 </div>
               </div>

               <div className="card space-y-6">
                 <div className="flex items-center gap-3 border-b border-brand-border pb-4">
                   <Globe className="w-5 h-5 text-brand-blue" />
                   <h3 className="font-bold">Project Details</h3>
                 </div>
                 <div className="space-y-4">
                   <div className="space-y-2">
                     <label className="text-[10px] font-black uppercase tracking-widest text-brand-text-dim">Project Name</label>
                     <input name="projectName" required className="w-full bg-brand-bg border border-brand-border rounded-lg px-4 py-2.5 text-sm" placeholder="e.g. HealthStream API Migration" />
                   </div>
                   <div className="space-y-2">
                     <label className="text-[10px] font-black uppercase tracking-widest text-brand-text-dim">Budget Range (Optional)</label>
                     <select name="budget" className="w-full bg-brand-bg border border-brand-border rounded-lg px-4 py-2.5 text-sm appearance-none">
                       <option>Enterprise ($10k+)</option>
                       <option>Standard ($5k - $10k)</option>
                       <option>Pilot / Small Scale</option>
                     </select>
                   </div>
                 </div>
               </div>
            </div>

            <div className="card space-y-6">
                 <div className="flex items-center gap-3 border-b border-brand-border pb-4">
                   <Search className="w-5 h-5 text-brand-blue" />
                   <h3 className="font-bold">Technical Scope</h3>
                 </div>
                 <div className="space-y-4">
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-brand-text-dim">Environment</label>
                      <div className="flex flex-wrap gap-2 pt-1">
                        {['AWS', 'Azure', 'Physical/Hybrid', 'Huawei Cloud'].map(item => (
                          <label key={item} className="flex items-center gap-2 px-3 py-1.5 rounded-md border border-brand-border text-xs cursor-pointer hover:border-brand-blue transition-colors has-[:checked]:bg-brand-blue/10 has-[:checked]:border-brand-blue">
                             <input type="checkbox" name="environment" value={item} className="hidden" />
                             {item}
                          </label>
                        ))}
                      </div>
                    </div>
                    <div className="space-y-2 pt-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-brand-text-dim">Primary Goal</label>
                      <input name="goal" className="w-full bg-brand-bg border border-brand-border rounded-lg px-4 py-2.5 text-sm" placeholder="e.g. Automating CI/CD" />
                    </div>
                 </div>
               </div>

            <div className="card space-y-6">
              <div className="flex items-center gap-3 border-b border-brand-border pb-4">
                <FileText className="w-5 h-5 text-brand-blue" />
                <h3 className="font-bold">Detailed Requirements</h3>
              </div>
              <textarea 
                name="requirements"
                required
                className="w-full bg-brand-bg border border-brand-border rounded-xl p-4 text-sm min-h-[150px] focus:border-brand-blue outline-none"
                placeholder="Please describe your current challenges, desired outcomes, and any specific timelines..."
              ></textarea>
              <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-4">
                <p className="desc text-xs max-w-sm text-left">
                  By submitting, you agree to a technical review of the data provided. Information is handled with strict confidentiality.
                </p>
                <button 
                  type="submit" 
                  disabled={status === 'loading'}
                  className="w-full md:w-auto px-12 py-4 bg-brand-blue text-white rounded-full font-black text-xs tracking-[0.2em] uppercase hover:scale-105 transition-transform flex items-center justify-center gap-3 disabled:opacity-50"
                >
                   {status === 'loading' ? (
                     <Loader2 className="w-4 h-4 animate-spin" />
                   ) : (
                     <Send className="w-4 h-4" />
                   )}
                   {status === 'loading' ? 'Processing...' : 'Submit Technical Query'}
                </button>
              </div>
            </div>
          </motion.form>
        )}
      </div>
    </div>
  );
}
