import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight, MessageCircle, CheckCircle2, Star, BookOpen, GraduationCap, Users } from 'lucide-react';
import { COURSES, TESTIMONIALS, WHATSAPP_LINK } from '../constants';
import { useEnquiry } from '../context/EnquiryContext';

const Home = () => {
  const { openEnquiry } = useEnquiry();
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 bg-background overflow-hidden px-4">
        <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-6 py-2 mb-8 text-xs font-bold tracking-widest text-accent uppercase bg-accent/10 rounded-full border border-accent/20"
          >
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
            Expert Hindi Coaching
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.8 }}
            className="text-5xl lg:text-8xl font-bold tracking-tight text-primary mb-8 leading-[1.05]"
          >
            Learn Hindi with <br />
            <span className="text-accent underline decoration-accent/10 underline-offset-8">Confidence</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-xl lg:text-2xl text-gray-500 mb-10 max-w-2xl leading-relaxed"
          >
            Personalized Online, Offline & Home Tuition <br />
            for School Students and Professionals.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="flex flex-wrap items-center justify-center gap-6 mb-12 text-sm font-semibold text-primary/60 bg-white/50 backdrop-blur-sm px-8 py-3 rounded-2xl border border-gray-100"
          >
            <span className="flex items-center gap-1.5"><CheckCircle2 size={16} className="text-accent" /> 1-1 Classes</span>
            <span className="hidden sm:inline text-gray-300">|</span>
            <span className="flex items-center gap-1.5"><CheckCircle2 size={16} className="text-accent" /> Flexible Timing</span>
            <span className="hidden sm:inline text-gray-300">|</span>
            <span className="flex items-center gap-1.5"><CheckCircle2 size={16} className="text-accent" /> Beginner Friendly</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-5 w-full sm:w-auto"
          >
            <button
              onClick={openEnquiry}
              className="w-full sm:w-auto bg-primary text-white px-10 py-5 rounded-full font-bold hover:bg-primary/95 transition-all shadow-2xl shadow-primary/20 flex items-center justify-center gap-2 active:scale-95 text-lg"
            >
              Enquire Now <ArrowRight size={20} />
            </button>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-white text-primary border border-gray-100 px-10 py-5 rounded-full font-bold hover:bg-gray-50 transition-all flex items-center justify-center gap-2 active:scale-95 text-lg shadow-sm"
            >
              <MessageCircle size={22} className="text-[#25D366]" /> WhatsApp
            </a>
          </motion.div>
        </div>
        
        {/* Background Gradients */}
        <div className="absolute -top-24 -right-24 -z-10 w-[500px] h-[500px] bg-accent/5 blur-[120px] rounded-full"></div>
        <div className="absolute -bottom-24 -left-24 -z-10 w-[500px] h-[500px] bg-accent/5 blur-[120px] rounded-full"></div>
      </section>

      {/* Highlights Section */}
      <section className="py-24 bg-white animate-reveal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              { icon: <Users className="text-accent" />, title: "1-1 Personalized Classes", desc: "Dedicated attention to every student's unique learning pace and specific requirements." },
              { icon: <GraduationCap className="text-accent" />, title: "Flexible Scheduling", desc: "Morning, evening, and weekend slots designed to fit into your busy lifestyle." },
              { icon: <BookOpen className="text-accent" />, title: "Hybrid Learning", desc: "Seamlessly switch between Online, Offline, or Home Tuition as per your needs." }
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10 }}
                className="p-10 rounded-[2rem] bg-background border border-gray-100 card-shadow transition-all group"
              >
                <div className="w-14 h-14 bg-accent/10 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-accent group-hover:text-white transition-all">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                <p className="text-gray-500 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Courses Preview */}
      <section className="py-32 bg-background animate-reveal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-primary">Discover Our Programs</h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">Expertly curated Hindi courses designed to take you from basics to professional fluency.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {COURSES.map((course, i) => (
              <div key={i} className="group bg-white p-10 rounded-[2.5rem] border border-gray-100 card-shadow transition-all hover:-translate-y-2 hover:border-accent/20">
                <div className="flex justify-between items-start mb-6">
                  <h3 className="text-2xl font-bold leading-tight">{course.title} <br/><span className="text-sm font-medium text-accent">{course.subtitle}</span></h3>
                </div>
                <p className="text-gray-500 text-sm mb-10 leading-relaxed">{course.description}</p>
                <ul className="space-y-4 mb-10">
                  {course.benefits.slice(0, 3).map((benefit, j) => (
                    <li key={j} className="flex items-center text-sm font-medium text-gray-700">
                      <CheckCircle2 size={18} className="text-accent mr-3 shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
                <Link to="/courses" className="inline-flex items-center gap-2 text-accent font-bold group-hover:gap-3 transition-all">
                  Course Details <ArrowRight size={18} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-32 bg-white overflow-hidden animate-reveal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-24">
            <div className="lg:w-1/2">
              <span className="text-accent font-bold tracking-widest uppercase text-sm mb-4 block">Excellence in Education</span>
              <h2 className="text-4xl lg:text-6xl font-bold mb-10 leading-[1.15]">Why Anu Kumar Academy?</h2>
              <div className="space-y-10">
                {[
                  { title: "Personalized Roadmap", desc: "No generic plans. We create a learning journey based on your current level and future goals." },
                  { title: "Native Fluency Focus", desc: "Go beyond textbooks. Learn how Hindi is naturally spoken across different regions of India." },
                  { title: "Result-Oriented", desc: "Clear milestones and regular assessments to ensure you're making measurable progress." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-6 group">
                    <div className="shrink-0 w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center text-accent font-bold group-hover:bg-accent group-hover:text-white transition-all">
                      {i + 1}
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-3">{item.title}</h4>
                      <p className="text-gray-500 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:w-1/2 relative">
              <div className="aspect-square rounded-[3rem] bg-accent/5 flex items-center justify-center p-12 relative">
                <div className="grid grid-cols-2 gap-6 w-full relative z-10">
                  <div className="aspect-square bg-white rounded-3xl shadow-2xl p-8 flex flex-col justify-center items-center text-center">
                    <span className="text-4xl font-extrabold text-accent mb-2">10+</span>
                    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Experience</span>
                  </div>
                  <div className="aspect-square bg-primary text-white rounded-3xl shadow-2xl p-8 flex flex-col justify-center items-center text-center translate-y-10">
                    <span className="text-4xl font-extrabold mb-2">500+</span>
                    <span className="text-[10px] font-bold text-white/60 uppercase tracking-widest">Graduates</span>
                  </div>
                  <div className="aspect-square bg-white rounded-3xl shadow-2xl p-8 flex flex-col justify-center items-center text-center -translate-y-10">
                    <span className="text-4xl font-extrabold text-accent mb-2">100%</span>
                    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Satisfaction</span>
                  </div>
                  <div className="aspect-square bg-accent text-white rounded-3xl shadow-2xl p-8 flex flex-col justify-center items-center text-center">
                    <span className="text-4xl font-extrabold mb-2">4.9</span>
                    <div className="flex text-yellow-300 mb-1">
                      <Star size={12} fill="currentColor" />
                      <Star size={12} fill="currentColor" />
                      <Star size={12} fill="currentColor" />
                      <Star size={12} fill="currentColor" />
                      <Star size={12} fill="currentColor" />
                    </div>
                    <span className="text-[10px] font-bold text-white/60 uppercase tracking-widest">Rating</span>
                  </div>
                </div>
                {/* Decorative blob */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-accent/10 blur-[80px] -z-10 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Preview */}
      <section className="py-32 bg-background animate-reveal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">Voices of Success</h2>
            <p className="text-gray-500 text-lg">Don't just take our word for it—see what our students thrive.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-16">
            {TESTIMONIALS.slice(0, 3).map((t, i) => (
              <div key={i} className="bg-white p-10 rounded-[2.5rem] border border-gray-100 card-shadow relative">
                <div className="flex text-yellow-400 mb-6">
                  {[...Array(t.stars)].map((_, i) => <Star key={i} size={18} fill="currentColor" />)}
                </div>
                <p className="text-gray-600 text-lg italic mb-10 leading-relaxed">"{t.text}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center font-bold text-accent">
                    {t.avatar}
                  </div>
                  <div>
                    <h4 className="font-bold text-primary">{t.name}</h4>
                    <p className="text-gray-400 text-xs font-semibold uppercase tracking-wider">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link to="/testimonials" className="inline-flex items-center gap-2 bg-white text-primary border border-gray-200 px-8 py-3 rounded-full font-bold hover:bg-gray-50 transition-all shadow-sm">
              Read More Success Stories <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 px-4 animate-reveal">
        <div className="max-w-6xl mx-auto bg-primary rounded-[4rem] p-16 lg:p-24 text-center text-white relative overflow-hidden shadow-3xl">
          <div className="relative z-10">
            <h2 className="text-5xl lg:text-7xl font-bold mb-10 leading-tight">Your Hindi Future <br/> Starts Here</h2>
            <p className="text-white/70 text-xl mb-14 max-w-2xl mx-auto">
              Join Anu Kumar Academy today and transform how you communicate, learn, and grow.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <button
                onClick={openEnquiry}
                className="w-full sm:w-auto bg-accent text-white px-12 py-5 rounded-full font-bold hover:bg-accent/90 transition-all shadow-2xl shadow-accent/40 active:scale-95 text-lg"
              >
                Get Started Now
              </button>
              <Link
                to="/contact"
                className="w-full sm:w-auto bg-white/10 backdrop-blur-md text-white border border-white/20 px-12 py-5 rounded-full font-bold hover:bg-white/20 transition-all active:scale-95 text-lg"
              >
                Speak with Us
              </Link>
            </div>
          </div>
          {/* Decorative accents */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-accent/20 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/10 blur-[120px] rounded-full translate-y-1/2 -translate-x-1/2"></div>
        </div>
      </section>
    </div>
  );
};

export default Home;
