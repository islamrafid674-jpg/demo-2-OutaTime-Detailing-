import { motion } from 'motion/react';
import { Star, MapPin, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <div className="min-h-screen bg-black">
      <section className="py-32 lg:py-48 relative border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div initial={{ opacity: 0, x: -40, filter: 'blur(10px)' }} animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }} transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}>
              <h1 className="text-sm font-bold uppercase tracking-widest text-white/50 mb-6 drop-shadow">About Us</h1>
              <h2 className="text-6xl sm:text-7xl font-black tracking-tight leading-[1.1] mb-8 text-white">
                Customer Focused <br/>
                <span className="text-white/70 italic">Detailing Services.</span>
              </h2>
              <div className="space-y-6 text-white/70 text-xl font-light leading-relaxed">
                <p>
                  Outatime Detailing LLC is your premier destination for top-quality car detailing services that will breathe new life into your vehicle. We are committed to upholding the highest standards of professionalism and are fully insured for your peace of mind. We take pride in using premium, eco-friendly products to ensure a flawless finish that exceeds your expectations.
                </p>
                <p>
                  We use <strong className="text-white font-bold">100% deionized water</strong> which ensures no water spots, even in the Texas sun! We not only guarantee an impeccable result but also provide enhanced protection for your vehicle's surfaces.
                </p>
                <p>
                  Contact us to view available services and to discuss your vehicle's needs. All services can be customized to deliver a solution that works best for you and your vehicle.
                </p>
              </div>
              <div className="mt-14 flex flex-col sm:flex-row gap-6">
                <Link to="/services" className="bg-white text-black px-12 py-5 rounded-full text-sm font-bold uppercase tracking-widest hover:scale-105 transition-transform duration-300 shadow-[0_0_30px_rgba(255,255,255,0.3)] text-center">
                  View Services
                </Link>
                <Link to="/contact" className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-12 py-5 rounded-full text-sm font-bold uppercase tracking-widest hover:bg-white/20 transition-colors text-center">
                  Contact Us
                </Link>
              </div>
            </motion.div>
            
            <motion.div initial={{ opacity: 0, scale: 0.9, filter: 'blur(10px)' }} animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }} transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }} className="relative">
              <div className="aspect-[4/5] bg-[#111] overflow-hidden rounded-[3rem] shadow-2xl relative border border-white/10">
                <img 
                  src="https://images.unsplash.com/photo-1601362840469-51e4d8d58785?auto=format&fit=crop&q=80&w=1200" 
                  alt="About" 
                  className="w-full h-full object-cover opacity-60"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent flex items-end justify-center pb-16">
                  <div className="text-center">
                    <h3 className="text-5xl font-black mb-2 tracking-widest text-white drop-shadow-xl">OUTATIME</h3>
                    <div className="w-16 h-1 bg-white mx-auto my-6 rounded-full shadow-[0_0_10px_rgba(255,255,255,0.8)]" />
                    <h4 className="text-2xl font-bold uppercase tracking-widest text-white">Martin Bedard</h4>
                    <p className="text-sm tracking-widest text-white/60 mt-2 uppercase">Owner & Detailer</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-32 bg-[#050505]">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
          <TrustBlock icon={<Star className="w-12 h-12" />} title="Certified" sub="Koch Chemie USA" delay={0.1} />
          <TrustBlock icon={<MapPin className="w-12 h-12" />} title="Mobile" sub="Collin County, TX" delay={0.2} />
          <TrustBlock icon={<ShieldCheck className="w-12 h-12" />} title="Insured" sub="Fully Covered" delay={0.3} />
        </div>
      </section>
    </div>
  );
}

import React from 'react';

function TrustBlock({ icon, title, sub, delay }: { icon: React.ReactNode, title: string, sub: string, delay: number }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }} 
      whileInView={{ opacity: 1, y: 0 }} 
      viewport={{ once: true }} 
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }} 
      className="bg-[#111] p-12 rounded-[2rem] border border-white/5 flex flex-col items-center text-center shadow-xl hover:-translate-y-2 transition-transform duration-500"
    >
      <div className="w-24 h-24 rounded-full bg-white/5 flex items-center justify-center text-white mb-8 shadow-[0_0_30px_rgba(255,255,255,0.05)]">
        {icon}
      </div>
      <h3 className="text-2xl font-black uppercase tracking-widest mb-3 text-white">{title}</h3>
      <p className="text-white/60 text-lg">{sub}</p>
    </motion.div>
  );
}
