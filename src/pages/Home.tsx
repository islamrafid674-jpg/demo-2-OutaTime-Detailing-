import { motion } from 'motion/react';
import { ArrowRight, Star, ShieldCheck, MapPin, Droplets } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useStore } from '../lib/store';

export default function Home() {
  const { services } = useStore();
  const highlightedServices = services.slice(0, 3);

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative min-h-[100vh] flex items-center justify-center pt-20 overflow-hidden bg-black">
        <div className="absolute inset-0 z-0">
          <motion.img 
            initial={{ scale: 1.1, filter: 'blur(10px)', opacity: 0 }}
            animate={{ scale: 1, filter: 'blur(0px)', opacity: 0.6 }}
            transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
            src="https://www.musclehandcarwash.com.au/wp-content/uploads/2025/05/Shine-Shield-10-Major-Benefits-Of-Waxing-Right-After-A-Car-Wash.jpg" 
            alt="Premium Detailing"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/30" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full mt-24">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            className="max-w-4xl"
          >
            <h1 className="text-6xl sm:text-7xl lg:text-9xl font-black mb-6 tracking-tight leading-[0.9] text-white">
              Automotive <br/>
              <span className="text-white/80 italic font-medium">Perfection.</span>
            </h1>
            
            <p className="text-xl sm:text-2xl text-white/80 mb-12 max-w-2xl font-light leading-relaxed">
              Unrivaled gloss, absolute precision, and unparalleled convenience. Experience Collin County's premier mobile detailing.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6">
              <Link to="/contact" className="bg-white text-black px-12 py-5 rounded-full text-sm font-bold uppercase tracking-widest hover:scale-105 transition-transform duration-300 shadow-[0_0_30px_rgba(255,255,255,0.3)] text-center">
                 Book Appointment
              </Link>
              <Link to="/services" className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-12 py-5 rounded-full text-sm font-bold uppercase tracking-widest hover:bg-white/20 transition-colors text-center">
                Explore Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-24 bg-black relative z-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <TrustCard 
              icon={<ShieldCheck className="w-8 h-8" />} 
              title="Fully Insured" 
              delay={0.1} 
            />
            <TrustCard 
              icon={<Star className="w-8 h-8" />} 
              title="Koch Chemie Certified" 
              delay={0.2} 
            />
            <TrustCard 
              icon={<MapPin className="w-8 h-8" />} 
              title="Mobile Service" 
              sub="(comes to customer)"
              delay={0.3} 
            />
            <TrustCard 
              icon={<Droplets className="w-8 h-8" />} 
              title="High-Quality Products" 
              delay={0.4} 
            />
          </div>
        </div>
      </section>

      {/* Highlighted Services Grid */}
      <section className="py-32 bg-[#050505]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}>
              <h2 className="text-6xl sm:text-7xl font-black tracking-tight text-white mb-6">Signature Services</h2>
              <p className="text-xl text-white/60 max-w-2xl font-light">
                Meticulous care designed to protect and revitalize your investment. View our most requested packages below.
              </p>
            </motion.div>
            <Link to="/services" className="shrink-0 group flex items-center gap-4 text-white hover:text-white/80 transition-colors">
              <span className="text-base font-bold uppercase tracking-widest">All Services</span>
              <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:scale-110 group-hover:bg-white group-hover:text-black transition-all">
                <ArrowRight className="w-5 h-5" />
              </div>
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {highlightedServices.map((service, index) => (
              <motion.div 
                key={service.id}
                initial={{ opacity: 0, y: 50 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: true }} 
                transition={{ duration: 0.8, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="bg-[#111] rounded-[2rem] overflow-hidden group hover:-translate-y-2 transition-transform duration-500 shadow-2xl"
              >
                <div className="aspect-[4/3] overflow-hidden relative">
                  <div className="absolute inset-0 bg-black/20 z-10" />
                  <img src={service.image} alt={service.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 ease-out" />
                </div>
                <div className="p-10 flex flex-col">
                  <h4 className="text-3xl font-black mb-8 tracking-tight text-white">{service.title}</h4>
                  <ul className="space-y-4 mb-10 flex-1">
                    {service.bullets.map((b, i) => (
                      <li key={i} className="text-base text-white/70 flex items-start gap-4">
                        <div className="w-1.5 h-1.5 rounded-full bg-white mt-2.5 shrink-0" />
                        <span className="leading-relaxed">{b}</span>
                      </li>
                    ))}
                  </ul>
                  <Link to="/contact" className="w-full bg-white/5 hover:bg-white/10 border border-white/10 text-white text-center py-4 rounded-xl font-bold uppercase tracking-widest transition-colors">
                    Request Quote
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Services Grid */}
      <section className="py-32 bg-black border-y border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="mb-20">
            <h3 className="text-5xl font-black tracking-tight text-white text-center">Enhanced Services</h3>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            <EnhancedCard 
              title="Trim Restoration" 
              image="https://images.unsplash.com/photo-1620857187652-32863fb79c4a?auto=format&fit=crop&q=80&w=800" 
            />
            <EnhancedCard 
              title="Engine Bay Detail" 
              image="https://images.unsplash.com/photo-1632709282361-ad7ce786de8c?auto=format&fit=crop&q=80&w=800" 
            />
            <EnhancedCard 
              title="Rock Chip Repair" 
              image="https://images.unsplash.com/photo-1601362840469-51e4d8d58785?auto=format&fit=crop&q=80&w=800" 
            />
            <EnhancedCard 
              title="Add-Ons" 
              image="https://images.unsplash.com/photo-1552930294-6b595f4c2974?auto=format&fit=crop&q=80&w=800" 
            />
          </div>
        </div>
      </section>

    </div>
  );
}

import React from 'react';

function TrustCard({ icon, title, sub, delay }: { icon: React.ReactNode, title: string, sub?: string, delay: number }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }} 
      whileInView={{ opacity: 1, y: 0 }} 
      viewport={{ once: true }} 
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
      className="bg-[#111] border border-white/5 p-8 rounded-3xl flex flex-col items-center text-center hover:bg-white/5 transition-colors duration-500"
    >
      <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center text-white mb-6">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-white tracking-wide">{title}</h3>
      {sub && <p className="text-white/50 text-sm mt-2">{sub}</p>}
    </motion.div>
  );
}

function EnhancedCard({ title, image }: { title: string, image: string }) {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="relative rounded-[2rem] overflow-hidden flex items-end justify-center text-center min-h-[350px] cursor-pointer transition-all duration-500 hover:-translate-y-2 group shadow-2xl border border-white/10"
    >
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent group-hover:from-black/80 transition-colors duration-500 z-10" />
      <img src={image} alt={title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1.5s] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-110" />
      <div className="relative z-20 p-8 w-full">
        <h4 className="text-3xl font-black tracking-tight text-white drop-shadow-xl">{title}</h4>
      </div>
    </motion.div>
  );
}
