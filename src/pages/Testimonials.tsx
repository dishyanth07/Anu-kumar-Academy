import { motion } from 'motion/react';
import { Star, Quote, Heart, ArrowRight } from 'lucide-react';
import { TESTIMONIALS } from '../constants';
import { useEnquiry } from '../context/EnquiryContext';

const Testimonials = () => {
  const { openEnquiry } = useEnquiry();

  return (
    <div className="pt-24 pb-20">
      {/* Header */}
      <section className="py-24 bg-background relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 text-xs font-bold tracking-widest text-accent uppercase bg-accent/10 rounded-full"
          >
            <Heart size={14} className="fill-current" /> Success Stories
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl lg:text-7xl font-extrabold tracking-tight text-primary mb-8"
          >
            What Our <span className="text-accent">Community</span> Says
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-500 max-w-3xl mx-auto leading-relaxed"
          >
            Real results from parents and students who have experienced our unique 1-1 teaching methodology.
          </motion.p>
        </div>
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 blur-[120px] rounded-full translate-x-1/2 -translate-y-1/2"></div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {TESTIMONIALS.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-background p-10 rounded-[3rem] border border-gray-100 card-shadow relative group"
              >
                <div className="absolute top-10 right-10 text-accent/10 group-hover:text-accent/20 transition-colors">
                  <Quote size={64} className="fill-current" />
                </div>
                
                <div className="flex text-yellow-400 mb-6 gap-1">
                  {[...Array(t.stars)].map((_, i) => <Star key={i} size={18} fill="currentColor" />)}
                </div>

                <p className="text-gray-600 text-lg italic mb-10 leading-relaxed relative z-10">
                  "{t.text}"
                </p>

                <div className="flex items-center gap-4 mt-auto">
                  <div className="w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center font-bold text-accent text-xl border border-gray-100">
                    {t.avatar}
                  </div>
                  <div>
                    <h4 className="font-bold text-primary">{t.name}</h4>
                    <p className="text-gray-400 text-[10px] font-bold uppercase tracking-widest">{t.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Join CTA */}
          <div className="mt-32 text-center animate-reveal">
            <h2 className="text-4xl lg:text-5xl font-bold mb-8 text-primary">Ready to be our next success story?</h2>
            <p className="text-gray-500 text-lg mb-12 max-w-2xl mx-auto">Join hundreds of satisfied learners and start your journey with a expert mentor.</p>
            <button
               onClick={openEnquiry}
               className="bg-accent text-white px-12 py-5 rounded-full font-bold hover:bg-black transition-all shadow-2xl shadow-accent/20 active:scale-95 flex items-center justify-center mx-auto gap-2 text-lg"
            >
              Start Your Journey <ArrowRight size={22} />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;
