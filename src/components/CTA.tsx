import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

export default function CTA() {
  return (
    <section className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://cdn.prod.website-files.com/5ce681ae5375caf5729444b1/63eaaeb975600d0144baefb1_car-detailing-houston-4.jpg')] bg-cover bg-center object-cover origin-center opacity-60" />
      <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" />
      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
        <motion.h3 
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
          className="text-5xl sm:text-7xl font-black text-white mb-10 tracking-tight drop-shadow-2xl"
        >
          Ready for a pristine finish?
        </motion.h3>
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.1 }}>
           <Link to="/contact" className="inline-block bg-white text-black px-12 py-5 rounded-full text-base font-bold uppercase tracking-widest hover:scale-105 transition-transform duration-300 shadow-[0_0_30px_rgba(255,255,255,0.3)]">
              Get a Quote Today
           </Link>
        </motion.div>
      </div>
    </section>
  );
}
