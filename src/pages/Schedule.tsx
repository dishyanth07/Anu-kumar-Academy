import { motion } from 'motion/react';
import { Calendar, Clock, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';
import { SCHEDULE_SLOTS } from '../constants';
import { useEnquiry } from '../context/EnquiryContext';

const Schedule = () => {
  const { openEnquiry } = useEnquiry();

  return (
    <div className="pt-24 pb-20">
      {/* Header */}
      <section className="py-24 bg-background overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-widest text-accent uppercase bg-accent/10 rounded-full"
          >
            Flexible Timings
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl lg:text-7xl font-extrabold tracking-tight text-primary mb-8"
          >
            Class <span className="text-accent">Schedule</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed"
          >
            We understand your busy lifestyle. Choose from our standard slots or request a custom timing that fits your routine.
          </motion.p>
        </div>
      </section>

      {/* Schedule Table/Cards */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {SCHEDULE_SLOTS.map((slot, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-background p-8 rounded-[2.5rem] border border-gray-100 card-shadow text-center flex flex-col"
              >
                <div className="w-12 h-12 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Clock size={24} className="text-accent" />
                </div>
                <div className="mb-4">
                  <h4 className="text-xl font-bold text-primary">{slot.time}</h4>
                  <p className="text-gray-400 text-xs font-bold uppercase tracking-widest mt-1">{slot.days}</p>
                </div>
                <div className="mt-auto">
                    <span className={`inline-block px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest ${
                        slot.status === 'Filling Fast' ? 'bg-orange-100 text-orange-600' : 
                        slot.status === 'Limited Slots' ? 'bg-red-100 text-red-600' :
                        'bg-accent/10 text-accent'
                    }`}>
                        {slot.status}
                    </span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Flexible Note */}
          <div className="mt-20 bg-primary rounded-[3rem] p-12 lg:p-20 text-white relative overflow-hidden flex flex-col lg:flex-row items-center gap-12">
            <div className="relative z-10 lg:w-2/3">
              <div className="flex items-center gap-2 text-accent mb-6 font-bold tracking-widest uppercase text-sm">
                 <Sparkles size={20} /> Customizable Schedule
              </div>
              <h2 className="text-3xl lg:text-5xl font-bold mb-6">Can't find a suitable slot?</h2>
              <p className="text-white/60 text-lg leading-relaxed">
                Don't worry! We specialize in **1-1 Personalized Coaching**, which means we can often create a custom time slot just for you. Weekends and early morning slots are also available on request.
              </p>
            </div>
            <div className="relative z-10 lg:w-1/3 flex justify-center">
              <button
                onClick={openEnquiry}
                className="bg-accent text-white px-10 py-5 rounded-full font-bold hover:bg-white hover:text-primary transition-all shadow-xl shadow-accent/20 active:scale-95 flex items-center gap-2"
              >
                Request Custom Time <ArrowRight size={20} />
              </button>
            </div>
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 blur-3xl rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Support Features */}
      <section className="py-24 animate-reveal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
                {[
                    { title: "No Class Expiry", desc: "Missed a class? Compensatory slots are available upon prior notice." },
                    { title: "Pause Anywhere", desc: "Traveling? You can pause your course and resume from exactly where you left." },
                    { title: "Rolling Admissions", desc: "Start your journey any day of the year. No need to wait for a new batch." }
                ].map((feature, i) => (
                    <div key={i}>
                        <div className="flex justify-center mb-6">
                            <CheckCircle2 size={32} className="text-accent" />
                        </div>
                        <h4 className="text-xl font-bold mb-3">{feature.title}</h4>
                        <p className="text-gray-500 text-sm leading-relaxed">{feature.desc}</p>
                    </div>
                ))}
            </div>
        </div>
      </section>
    </div>
  );
};

export default Schedule;
