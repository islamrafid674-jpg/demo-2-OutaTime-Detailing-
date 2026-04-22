import { motion } from 'motion/react';
import { useStore } from '../lib/store';
import { Link } from 'react-router-dom';

export default function ServicesPage() {
  const { services } = useStore();

  return (
    <div className="min-h-screen bg-black">
      {/* Services Hero */}
      <section className="py-32 md:py-48 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <motion.img 
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.4 }}
            transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
            src="https://images.unsplash.com/photo-1620857187652-32863fb79c4a?auto=format&fit=crop&q=80&w=2500" 
            alt="Services"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-6 text-center z-10 block mt-12">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}>
            <h1 className="text-6xl sm:text-8xl font-black mb-8 tracking-tight text-white drop-shadow-2xl">Our Services</h1>
            <p className="text-white/80 max-w-2xl mx-auto text-xl leading-relaxed font-light">
              Uncompromising quality and attention to detail. We bring premium auto care directly to your driveway.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services List */}
      <section className="pb-32 px-6">
        <div className="max-w-6xl mx-auto space-y-32">
          {services.map((service, idx) => (
            <motion.div 
              key={service.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="group flex flex-col lg:flex-row gap-16 items-center"
            >
              {/* Image Block */}
              <div className={`w-full lg:w-1/2 aspect-[4/3] rounded-[2rem] overflow-hidden relative shadow-2xl ${idx % 2 === 1 ? 'lg:order-2' : ''}`}>
                <div className="absolute inset-0 bg-black/10 z-10 transition-opacity duration-500 group-hover:opacity-0" />
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover relative z-0 transition-transform duration-1000 ease-out group-hover:scale-110" 
                />
              </div>

              {/* Content Block */}
              <div className={`w-full lg:w-1/2 flex flex-col justify-center ${idx % 2 === 1 ? 'lg:order-1' : ''}`}>
                <h2 className="text-5xl font-black tracking-tight mb-12 text-white">{service.title}</h2>

                <div className="bg-[#111] border border-white/5 p-10 rounded-[2rem] mb-12 transform transition-transform duration-500 group-hover:-translate-y-2 shadow-xl">
                  <ul className="space-y-6">
                    {service.bullets.map((bullet, i) => (
                      <li key={i} className="flex items-start gap-5">
                        <div className="w-2 h-2 rounded-full bg-white mt-2 shrink-0 shadow-[0_0_10px_rgba(255,255,255,0.8)]" />
                        <span className="text-white/90 text-lg tracking-wide font-medium">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-8 mt-4">
                  <Link to="/contact" className="bg-white text-black px-12 py-5 rounded-full text-sm font-bold uppercase tracking-widest hover:scale-105 transition-transform duration-300 shadow-[0_0_30px_rgba(255,255,255,0.2)] w-full sm:w-auto text-center">
                    Request Quote
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
