import { motion } from 'motion/react';
import { CheckCircle2, BookOpen, MessageCircle, GraduationCap, ArrowRight, Target, Trophy } from 'lucide-react';
import { COURSES } from '../constants';
import { Link } from 'react-router-dom';
import { useEnquiry } from '../context/EnquiryContext';

const Courses = () => {
  const { openEnquiry } = useEnquiry();
  const icons = {
    BookOpen: <BookOpen className="text-accent" size={32} />,
    MessageCircle: <MessageCircle className="text-accent" size={32} />,
    GraduationCap: <GraduationCap className="text-accent" size={32} />
  };

  const courseImages: { [key: string]: string } = {
    academics: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=800",
    spoken: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=800",
    sabha: "https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&q=80&w=800"
  };

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
            Empowering Your Language Journey
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl lg:text-7xl font-extrabold tracking-tight text-primary mb-8"
          >
            Detailed <span className="text-accent">Course</span> Catalog
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed"
          >
            We offer 1-1 personalized coaching for school exams, conversational fluency, and professional certifications.
          </motion.p>
        </div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 blur-[120px] rounded-full translate-x-1/2 -translate-y-1/2"></div>
      </section>

      {/* Course Cards Flow */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-40">
            {COURSES.map((course, i) => (
              <motion.div 
                key={course.id} 
                className={`flex flex-col lg:flex-row gap-20 items-center animate-reveal ${i % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
              >
                <div className="lg:w-1/2">
                  <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mb-8">
                    {icons[course.icon as keyof typeof icons]}
                  </div>
                  <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-primary">{course.title}</h2>
                  <p className="text-accent font-semibold mb-6 uppercase tracking-wider text-sm">{course.subtitle}</p>
                  
                  <p className="text-gray-600 text-lg mb-10 leading-relaxed">
                    {course.description}
                  </p>

                  <div className="space-y-8 mb-12">
                    {/* Who it is for */}
                    <div className="flex gap-4">
                      <div className="shrink-0 w-10 h-10 rounded-xl bg-primary/5 flex items-center justify-center text-primary">
                        <Target size={20} />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 mb-1">Who is this for?</h4>
                        <p className="text-gray-500 text-sm">{course.whoItIsFor}</p>
                      </div>
                    </div>

                    {/* Benefits Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {course.benefits.map((benefit, j) => (
                        <div key={j} className="flex items-center gap-3 bg-background p-4 rounded-2xl border border-gray-100 shadow-sm">
                          <CheckCircle2 size={18} className="text-accent shrink-0" />
                          <span className="text-sm font-bold text-gray-700">{benefit}</span>
                        </div>
                      ))}
                    </div>

                    {/* Learning Outcomes */}
                    <div className="bg-accent/5 p-8 rounded-3xl border border-accent/10">
                      <h4 className="flex items-center gap-2 font-bold text-accent mb-4">
                        <Trophy size={20} /> Learning Outcomes
                      </h4>
                      <ul className="space-y-3">
                        {course.outcomes.map((outcome, k) => (
                          <li key={k} className="flex items-start gap-2 text-sm text-gray-600 font-medium">
                            <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shrink-0"></span>
                            {outcome}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <button
                    onClick={openEnquiry}
                    className="w-full sm:w-auto bg-primary text-white px-10 py-5 rounded-full font-bold hover:bg-primary/95 transition-all shadow-xl shadow-primary/20 flex items-center justify-center gap-2 active:scale-95 text-lg"
                  >
                    Enroll Now <ArrowRight size={20} />
                  </button>
                </div>
                
                <div className="lg:w-1/2 relative group">
                  <div className="aspect-[4/5] lg:aspect-square rounded-[3rem] overflow-hidden shadow-3xl bg-gray-100">
                    <img
                      src={courseImages[course.id] || `https://picsum.photos/seed/${course.id}/800/600`}
                      alt={course.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                  {/* Decorative element behind image */}
                  <div className="absolute -bottom-6 -right-6 -z-10 w-full h-full border-2 border-accent/20 rounded-[3rem] translate-x-4 translate-y-4 transition-transform duration-500 group-hover:translate-x-2 group-hover:translate-y-2"></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ / Guidance Section */}
      <section className="py-32 bg-background animate-reveal px-4">
        <div className="max-w-5xl mx-auto bg-white rounded-[4rem] p-12 lg:p-24 border border-gray-100 card-shadow text-center">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">Need Personalized Advice?</h2>
            <p className="text-gray-500 text-lg mb-12 max-w-2xl mx-auto">We offer a free 15-minute consultation to assess your current level and recommend the best learning path for you.</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link
                to="/contact"
                className="w-full sm:w-auto bg-primary text-white px-10 py-4 rounded-full font-bold hover:bg-primary/90 transition-all shadow-lg active:scale-95"
              >
                Talk to an Expert
              </Link>
              <button
                onClick={openEnquiry}
                className="w-full sm:w-auto bg-white text-accent border-2 border-accent px-10 py-4 rounded-full font-bold hover:bg-accent/5 transition-all active:scale-95"
              >
                Enquire Online
              </button>
            </div>
        </div>
      </section>
    </div>
  );
};

export default Courses;
