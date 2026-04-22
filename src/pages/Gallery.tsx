import { motion } from 'motion/react';
import { Camera, Star } from 'lucide-react';

const IMAGES = [
  "https://images.unsplash.com/photo-1552930294-6b595f4c2974?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1620857187652-32863fb79c4a?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1601362840469-51e4d8d58785?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1542323382-76e9a65f9797?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1549317661-bc32c53f6061?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1550508544-783637a2472b?auto=format&fit=crop&q=80&w=800",
];

export default function Gallery() {
  return (
    <div className="min-h-screen bg-black pt-32">
      <section className="py-24 text-center px-6">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}>
          <Camera className="w-12 h-12 text-white/50 mx-auto mb-8 drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]" />
          <h1 className="text-6xl sm:text-8xl font-black mb-6 tracking-tight text-white">Our Work</h1>
          <p className="text-white/60 max-w-2xl mx-auto text-xl leading-relaxed font-light">
            A showcase of precision detailing and paint correction. Witness the absolute perfection.
          </p>
        </motion.div>
      </section>

      <section className="py-20 px-6 pb-40">
        <div className="max-w-7xl mx-auto auto-rows-[300px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {IMAGES.map((url, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9, filter: 'blur(10px)' }}
              whileInView={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
              viewport={{ once: true, margin: "100px" }}
              transition={{ duration: 0.8, delay: (idx % 3) * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className={`rounded-[2rem] overflow-hidden group relative shadow-2xl ${idx === 0 || idx === 3 ? 'sm:col-span-2' : ''}`}
            >
              <img 
                src={url} 
                alt="Detailing Gallery" 
                className="w-full h-full object-cover transition-transform duration-[1.5s] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.05]"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-700 flex items-center justify-center border border-white/20 rounded-[2rem]">
                 <Star className="w-10 h-10 text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.8)]" />
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
