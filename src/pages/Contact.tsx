import { motion } from 'motion/react';
import { useForm } from 'react-hook-form';
import { useStore } from '../lib/store';
import { Phone, Mail, MapPin } from 'lucide-react';

export default function Contact() {
  const { services, addLead } = useStore();
  const { register, handleSubmit, reset, formState: { errors, isSubmitSuccessful } } = useForm();
  
  const onSubmit = (data: any) => {
    addLead({
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      phone: data.phone,
      service: data.service,
      message: data.message
    });
    reset();
  };

  return (
    <div className="min-h-screen bg-black">
      <section className="py-32 md:py-48 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-white/5 blur-[150px] rounded-full pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col items-center text-center">
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}>
            <h1 className="text-sm font-bold uppercase tracking-widest text-white/50 mb-6 drop-shadow">Contact Us</h1>
            <h2 className="text-6xl sm:text-8xl font-black mb-8 tracking-tight text-white drop-shadow-lg">Request a Quote.</h2>
            <p className="text-white/70 max-w-2xl mx-auto text-xl leading-relaxed font-light">
              Ready to restore your vehicle's finish? Fill out the form below and we'll get back to you with a custom quote.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="pb-40 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32">
          
          {/* Left Column - Form */}
          <motion.div initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}>
            <div className="bg-[#111] border border-white/5 p-10 sm:p-16 rounded-[3rem] shadow-2xl relative overflow-hidden">
              <h3 className="text-4xl font-black mb-10 tracking-tight text-white">Send a Message</h3>
              
              {isSubmitSuccessful ? (
                <div className="bg-white/5 border border-white/10 p-12 text-center rounded-3xl">
                  <h4 className="text-3xl font-black text-white mb-4 tracking-wide">Message Received</h4>
                  <p className="text-white/60 mb-10 text-lg">We'll be in touch shortly.</p>
                  <button onClick={() => reset()} className="text-sm uppercase tracking-widest font-bold text-white border-b border-white pb-2 hover:text-white/60 hover:border-white/60 transition-colors">
                    Send Another
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-8 relative z-10">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-widest text-white/50 mb-3">First Name</label>
                      <input 
                        {...register("firstName", { required: true })}
                        className="w-full bg-[#050505] border border-white/10 p-5 rounded-2xl text-white focus:outline-none focus:border-white/50 focus:bg-[#151515] transition-colors shadow-inner"
                        placeholder="John"
                      />
                      {errors.firstName && <span className="text-red-400 text-[10px] uppercase font-bold mt-2 block">Required</span>}
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-widest text-white/50 mb-3">Last Name</label>
                      <input 
                        {...register("lastName", { required: true })}
                        className="w-full bg-[#050505] border border-white/10 p-5 rounded-2xl text-white focus:outline-none focus:border-white/50 focus:bg-[#151515] transition-colors shadow-inner"
                        placeholder="Doe"
                      />
                      {errors.lastName && <span className="text-red-400 text-[10px] uppercase font-bold mt-2 block">Required</span>}
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-widest text-white/50 mb-3">Email Address</label>
                      <input 
                        {...register("email", { required: true })}
                        type="email"
                        className="w-full bg-[#050505] border border-white/10 p-5 rounded-2xl text-white focus:outline-none focus:border-white/50 focus:bg-[#151515] transition-colors shadow-inner"
                        placeholder="john@example.com"
                      />
                      {errors.email && <span className="text-red-400 text-[10px] uppercase font-bold mt-2 block">Required</span>}
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-widest text-white/50 mb-3">Phone</label>
                      <input 
                        {...register("phone", { required: true })}
                        className="w-full bg-[#050505] border border-white/10 p-5 rounded-2xl text-white focus:outline-none focus:border-white/50 focus:bg-[#151515] transition-colors shadow-inner"
                        placeholder="(555) 555-5555"
                      />
                      {errors.phone && <span className="text-red-400 text-[10px] uppercase font-bold mt-2 block">Required</span>}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-white/50 mb-3">Services</label>
                    <select 
                      {...register("service")}
                      className="w-full bg-[#050505] border border-white/10 p-5 rounded-2xl text-white focus:outline-none focus:border-white/50 focus:bg-[#151515] transition-colors appearance-none shadow-inner"
                    >
                      <option value="">Select a service...</option>
                      {services.map(s => <option key={s.id} value={s.title}>{s.title}</option>)}
                      <option value="Other">Other / Unsure</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-white/50 mb-3">Write a message</label>
                    <textarea 
                      {...register("message")}
                      rows={5}
                      className="w-full bg-[#050505] border border-white/10 p-5 rounded-2xl text-white focus:outline-none focus:border-white/50 focus:bg-[#151515] transition-colors resize-none shadow-inner"
                      placeholder="How can we help you?"
                    ></textarea>
                  </div>

                  <button type="submit" className="w-full bg-white text-black py-6 rounded-full text-sm font-bold uppercase tracking-widest hover:scale-[1.02] transition-transform duration-300 shadow-[0_0_30px_rgba(255,255,255,0.2)]">
                    Submit Request
                  </button>
                </form>
              )}
            </div>
          </motion.div>

          {/* Right Column - Info */}
          <motion.div initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }} className="space-y-20 pt-10">
            
            <div>
              <h3 className="text-2xl font-black tracking-tight text-white mb-8 pb-6 border-b border-white/10">Instant Booking</h3>
              <p className="text-white/60 mb-8 text-lg font-light leading-relaxed">
                For the fastest service, use our integrated Urable booking system to select your package and find an available time slot.
              </p>
              <button 
                onClick={(e) => {
                  e.preventDefault();
                  alert("Urable Integration: Please provide your unique Urable booking URL to activate this button.");
                }}
                className="inline-block bg-white/10 backdrop-blur-md border border-white/20 text-white px-10 py-5 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-colors shadow-lg"
              >
                Book via Urable
              </button>
            </div>

            <div>
              <h3 className="text-2xl font-black tracking-tight text-white mb-8 pb-6 border-b border-white/10">Contact Information</h3>
              <ul className="space-y-10">
                <li className="flex gap-8 group">
                  <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center text-white shrink-0 group-hover:bg-white group-hover:text-black transition-colors duration-500">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div className="flex flex-col justify-center">
                    <div className="text-xs font-bold uppercase tracking-widest text-white/50 mb-2">Phone</div>
                    <a href="tel:4698151949" className="text-3xl font-black text-white hover:text-white/80 transition-colors tracking-tight">469-815-1949</a>
                  </div>
                </li>
                <li className="flex gap-8 group">
                  <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center text-white shrink-0 group-hover:bg-white group-hover:text-black transition-colors duration-500">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div className="flex flex-col justify-center">
                    <div className="text-xs font-bold uppercase tracking-widest text-white/50 mb-2">Email</div>
                    <a href="mailto:martin@outatimedetail.com" className="text-xl font-bold text-white hover:text-white/80 transition-colors">martin@outatimedetail.com</a>
                  </div>
                </li>
                <li className="flex gap-8 group">
                  <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center text-white shrink-0 group-hover:bg-white group-hover:text-black transition-colors duration-500">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div className="flex flex-col justify-center">
                    <div className="text-xs font-bold uppercase tracking-widest text-white/50 mb-2">Address</div>
                    <div className="text-lg font-medium text-white/90">Serving Collin County<br />TX & Surrounding Areas</div>
                  </div>
                </li>
              </ul>
            </div>

          </motion.div>
        </div>
      </section>
    </div>
  );
}
