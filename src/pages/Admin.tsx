import { useState } from 'react';
import { useStore, Service } from '../lib/store';
import { Plus, Trash2, Image as ImageIcon, MessageSquare, LayoutDashboard } from 'lucide-react';
import { cn } from '../lib/utils';

export default function Admin() {
  const { services, updateService, leads } = useStore();
  const [activeTab, setActiveTab] = useState<'services' | 'leads'>('services');

  return (
    <div className="min-h-screen bg-black pt-32 pb-24 px-6 font-sans">
      <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row gap-16 text-white">
        {/* Sidebar */}
        <div className="md:w-72 shrink-0 flex flex-col gap-4">
          <h1 className="text-xl font-black tracking-tight mb-8 text-white drop-shadow">Admin Portal</h1>
          <button 
            onClick={() => setActiveTab('services')}
            className={cn(
              "flex items-center gap-4 px-6 py-5 rounded-2xl text-left transition-all duration-300",
              activeTab === 'services' ? "bg-white text-black shadow-[0_0_30px_rgba(255,255,255,0.2)]" : "text-white/60 hover:text-white hover:bg-white/5"
            )}
          >
            <LayoutDashboard className="w-6 h-6" />
            <span className="text-sm font-bold uppercase tracking-widest">Services</span>
          </button>
          <button 
            onClick={() => setActiveTab('leads')}
            className={cn(
              "flex items-center gap-4 px-6 py-5 rounded-2xl text-left transition-all duration-300",
              activeTab === 'leads' ? "bg-white text-black shadow-[0_0_30px_rgba(255,255,255,0.2)]" : "text-white/60 hover:text-white hover:bg-white/5"
            )}
          >
            <MessageSquare className="w-6 h-6" />
            <span className="text-sm font-bold uppercase tracking-widest flex-1">Inbox</span>
            {leads.length > 0 && (
              <span className={cn("px-3 py-1 text-xs font-black rounded-full", activeTab === 'leads' ? "bg-black text-white" : "bg-white text-black")}>
                {leads.length}
              </span>
            )}
          </button>
        </div>

        {/* Main Content */}
        <div className="flex-1 min-h-[600px]">
          {activeTab === 'services' && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
              <div className="mb-16 border-b border-white/10 pb-8">
                <h2 className="text-5xl font-black mb-4 tracking-tight">Services Manager</h2>
                <p className="text-white/50 text-lg">Modifications sync instantly with the live storefront.</p>
              </div>
              
              <div className="flex flex-col gap-12">
                {services.map(service => (
                  <ServiceEditor key={service.id} service={service} onUpdate={(updates) => updateService(service.id, updates)} />
                ))}
              </div>
            </div>
          )}

          {activeTab === 'leads' && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
              <div className="mb-16 border-b border-white/10 pb-8">
                <h2 className="text-5xl font-black mb-4 tracking-tight">Lead Inbox</h2>
                <p className="text-white/50 text-lg">Incoming requests from clients.</p>
              </div>
              
              {leads.length === 0 ? (
                <div className="text-center py-32 bg-[#111] rounded-[3rem] border border-white/5 shadow-2xl">
                  <MessageSquare className="w-16 h-16 mx-auto mb-6 text-white/20" />
                  <p className="text-sm uppercase tracking-widest font-bold text-white/50">Inbox Empty</p>
                </div>
              ) : (
                <div className="flex flex-col gap-8">
                  {leads.map(lead => (
                    <div key={lead.id} className="bg-[#111] border border-white/10 p-10 rounded-[2rem] shadow-xl hover:-translate-y-1 transition-transform duration-300">
                      <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-6 mb-8 pb-8 border-b border-white/5">
                        <div>
                          <h3 className="font-black text-3xl tracking-tight mb-3">{lead.firstName} {lead.lastName}</h3>
                          <div className="flex flex-wrap gap-4 text-base font-medium">
                            <a href={`tel:${lead.phone}`} className="text-white hover:text-white/60 transition-colors">{lead.phone}</a>
                            <span className="text-white/20">•</span>
                            <a href={`mailto:${lead.email}`} className="text-white/60 hover:text-white transition-colors">{lead.email}</a>
                          </div>
                        </div>
                        <div className="text-[10px] uppercase tracking-widest font-bold text-white/50 border border-white/10 px-4 py-2 rounded-full bg-white/5">
                          {new Date(lead.date).toLocaleDateString()}
                        </div>
                      </div>
                      <div className="mb-8">
                        <span className="text-xs uppercase tracking-widest text-white/50 font-bold block mb-3">Service Requested:</span>
                        <div className="inline-block bg-white text-black font-bold px-6 py-3 rounded-xl text-sm shadow-[0_0_15px_rgba(255,255,255,0.2)]">
                          {lead.service || "Not Specified"}
                        </div>
                      </div>
                      {lead.message && (
                        <div>
                          <span className="text-xs uppercase tracking-widest text-white/50 font-bold block mb-3">Message:</span>
                          <div className="bg-[#050505] p-8 rounded-[1.5rem] text-base text-white/80 leading-relaxed border border-white/5">
                            "{lead.message}"
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function ServiceEditor({ service, onUpdate }: { key?: string | number, service: Service, onUpdate: (updates: Partial<Service>) => void }) {
  const [isSaved, setIsSaved] = useState(false);

  const triggerSaveIndicator = () => {
    setIsSaved(true);
    setTimeout(() => setIsSaved(false), 2000);
  };

  const handleUpdate = (updates: Partial<Service>) => {
    onUpdate(updates);
    triggerSaveIndicator();
  };

  const updateBullet = (index: number, value: string) => {
    const newBullets = [...service.bullets];
    newBullets[index] = value;
    handleUpdate({ bullets: newBullets });
  };

  const addBullet = () => {
    handleUpdate({ bullets: [...service.bullets, 'New bullet'] });
  };

  const removeBullet = (index: number) => {
    const newBullets = service.bullets.filter((_, i) => i !== index);
    handleUpdate({ bullets: newBullets });
  };

  return (
    <div className="bg-[#111] border border-white/10 p-10 rounded-[2rem] w-full relative shadow-xl">
      <div className="flex justify-between items-center mb-10 pb-8 border-b border-white/10">
        <h3 className="text-3xl font-black tracking-tight">{service.title}</h3>
        <span className={cn(
          "text-[10px] font-bold uppercase tracking-widest px-4 py-2 rounded-full bg-white text-black transition-opacity duration-300 shadow-[0_0_15px_rgba(255,255,255,0.3)]",
          isSaved ? "opacity-100" : "opacity-0"
        )}>
          Saved
        </span>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div className="space-y-8">
          <div>
            <label className="block text-xs uppercase tracking-widest font-bold text-white/50 mb-3">Service Title</label>
            <input 
              type="text" 
              value={service.title} 
              onChange={(e) => handleUpdate({ title: e.target.value })}
              className="w-full bg-[#050505] border border-white/10 p-5 rounded-2xl text-white focus:outline-none focus:border-white/50 transition-colors shadow-inner"
            />
          </div>

          <div>
            <label className="flex items-center gap-3 text-xs uppercase tracking-widest font-bold text-white/50 mb-3">
              <ImageIcon className="w-4 h-4" /> Cover Image URL
            </label>
            <input 
              type="text" 
              value={service.image} 
              onChange={(e) => handleUpdate({ image: e.target.value })}
              className="w-full bg-[#050505] border border-white/10 p-5 rounded-2xl text-white/80 focus:outline-none focus:border-white/50 transition-colors text-sm font-mono shadow-inner"
            />
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between mb-6">
            <label className="block text-xs uppercase tracking-widest font-bold text-white/50">Core Features</label>
            <button 
              onClick={addBullet}
              className="text-[10px] font-bold uppercase tracking-widest flex items-center gap-2 bg-white text-black px-4 py-2 rounded-full hover:scale-105 transition-transform shadow-[0_0_15px_rgba(255,255,255,0.2)]"
            >
              <Plus className="w-3 h-3" /> Add Feature
            </button>
          </div>
          
          <div className="space-y-4">
            {service.bullets.map((bullet, idx) => (
              <div key={idx} className="flex items-center gap-4 group/bullet">
                <input 
                  type="text" 
                  value={bullet} 
                  onChange={(e) => updateBullet(idx, e.target.value)}
                  className="flex-1 bg-[#050505] border border-white/10 p-4 rounded-xl text-white focus:outline-none focus:border-white/50 text-base shadow-inner transition-colors"
                />
                <button 
                  onClick={() => removeBullet(idx)}
                  className="w-12 h-12 rounded-xl flex items-center justify-center bg-white/5 text-white/40 hover:text-white hover:bg-red-500/80 transition-all shrink-0"
                  title="Remove Feature"
                >
                  <Trash2 className="w-5 h-5" />
                </button>
              </div>
            ))}
            {service.bullets.length === 0 && (
              <div className="text-xs uppercase tracking-widest text-white/30 font-bold py-12 bg-[#050505] rounded-2xl border border-dashed border-white/10 text-center shadow-inner">
                Empty
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
