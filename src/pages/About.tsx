import { motion } from 'motion/react';
import { Target, Heart, Award, Sparkles, BookCheck, ShieldCheck, CheckCircle2 } from 'lucide-react';

const About = () => {
  return (
    <div className="pt-24 pb-20">
      {/* Hero */}
      <section className="py-24 bg-background relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-widest text-accent uppercase bg-accent/10 rounded-full"
          >
            Since 2014
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl lg:text-7xl font-extrabold tracking-tight text-primary mb-8"
          >
            Our Teaching <span className="text-accent">Philosophy</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-500 max-w-3xl mx-auto leading-relaxed"
          >
            Founded on the belief that language learning should be natural, personalized, and stress-free. We focus on building deep roots in Hindi through simple, relatable methods.
          </motion.p>
        </div>
        <div className="absolute top-0 left-0 w-96 h-96 bg-accent/5 blur-[120px] rounded-full -translate-x-1/2 -translate-y-1/2"></div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-white animate-reveal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { 
                icon: <Target className="text-accent" />, 
                title: "Individual Focus", 
                desc: "Every student is unique. We don't use a 'one-size-fits-all' approach. Instead, we adapt our pace to match the student's learning style." 
              },
              { 
                icon: <Heart className="text-accent" />, 
                title: "Patient Mentorship", 
                desc: "Learning a new language can be daunting. Our teacher is exceptionally patient, ensuring students feel comfortable asking questions." 
              },
              { 
                icon: <Sparkles className="text-accent" />, 
                title: "Simple Methods", 
                desc: "We break down complex grammar rules into simple, day-to-day examples that students can easily remember and apply." 
              }
            ].map((value, i) => (
              <div key={i} className="text-center group">
                <div className="w-20 h-20 bg-accent/5 rounded-[2.5rem] flex items-center justify-center mx-auto mb-8 group-hover:bg-accent group-hover:text-white transition-all duration-500">
                  {value.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">{value.title}</h3>
                <p className="text-gray-500 leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Details */}
      <section className="py-32 bg-background animate-reveal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-20">
            <div className="lg:w-1/2 order-2 lg:order-1">
              <div className="relative">
                <div className="aspect-[4/5] rounded-[3rem] overflow-hidden shadow-3xl bg-gray-200">
                   <img 
                    src="https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=800" 
                    alt="Tutor Teaching" 
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Floating Stat */}
                <div className="absolute -bottom-8 -right-8 bg-white p-8 rounded-3xl shadow-2xl animate-bounce-slow">
                  <div className="text-4xl font-black text-accent mb-1">10+</div>
                  <div className="text-[10px] uppercase font-bold tracking-widest text-gray-400">Years of Experience</div>
                </div>
              </div>
            </div>
            
            <div className="lg:w-1/2 order-1 lg:order-2">
              <span className="text-accent font-bold uppercase tracking-widest text-sm mb-4 block">How we Teach</span>
              <h2 className="text-4xl lg:text-6xl font-bold mb-8 leading-tight">Focus on Individual Attention</h2>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                At Anu Kumar Academy, we prioritize quality over quantity. That's why we don't have large batches. Each class is designed for a single student or a very small group to ensure that the teacher can address every doubt instantly.
              </p>
              
              <div className="space-y-6">
                {[
                  "Step-by-step progress tracking",
                  "Relatable daily-life examples",
                  "Emphasis on correct pronunciation",
                  "Regular feedback sessions with parents"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center text-accent">
                      <CheckCircle2 size={16} />
                    </div>
                    <span className="font-bold text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-24 bg-white animate-reveal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-primary rounded-[4rem] p-16 lg:p-24 flex flex-col md:flex-row items-center justify-between gap-12 text-white overflow-hidden relative">
            <div className="relative z-10 max-w-xl">
              <h2 className="text-3xl lg:text-5xl font-bold mb-6 italic">"Our mission is to make every student fall in love with Hindi."</h2>
              <p className="text-white/60 font-semibold tracking-widest uppercase">Anu Kumar, Founder</p>
            </div>
            <div className="relative z-10 flex gap-12">
              <div className="text-center">
                <ShieldCheck size={48} className="mx-auto mb-4 text-accent" />
                <h4 className="font-bold text-sm">Verified Methods</h4>
              </div>
              <div className="text-center">
                <Award size={48} className="mx-auto mb-4 text-accent" />
                <h4 className="font-bold text-sm">Expert Guidance</h4>
              </div>
              <div className="text-center">
                <BookCheck size={48} className="mx-auto mb-4 text-accent" />
                <h4 className="font-bold text-sm">Premium Materials</h4>
              </div>
            </div>
            {/* Design accents */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 blur-3xl rounded-full"></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
