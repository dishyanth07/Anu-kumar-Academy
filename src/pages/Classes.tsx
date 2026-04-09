import { motion } from 'motion/react';
import { Laptop, Home as HomeIcon, MapPin, CheckCircle2, Video, Users, Navigation } from 'lucide-react';
import { useEnquiry } from '../context/EnquiryContext';

const Classes = () => {
  const { openEnquiry } = useEnquiry();

  const classModes = [
    {
      icon: <Laptop size={32} className="text-accent" />,
      title: "Online Classes",
      subtitle: "Learn Anywhere",
      desc: "Interactive live sessions via Zoom or Google Meet using digital whiteboards and shared resources.",
      features: ["Recordings available", "Flexible time slots", "Digital study materials", "Screen sharing support"],
      platform: "Zoom / Google Meet",
      bestFor: "Students and professionals seeking maximum flexibility."
    },
    {
      icon: <MapPin size={32} className="text-accent" />,
      title: "Offline Classes",
      subtitle: "Traditional Learning",
      desc: "Focussed group learning at our dedicated Academy center with face-to-face interaction.",
      features: ["Physical study materials", "Direct mentorship", "Focus environment", "Group discussions"],
      platform: "Academy Center",
      bestFor: "Local students who thrive in a structured classroom setting."
    },
    {
      icon: <HomeIcon size={32} className="text-accent" />,
      title: "Home Tuition",
      subtitle: "Premium 1-1 Attention",
      desc: "The most personalized learning experience where the teacher visits your doorstep.",
      features: ["1-1 dedicated focus", "Zero travel time", "Comfort of home", "Tailored curriculum"],
      platform: "Nearby Availability",
      bestFor: "Parents who want direct supervision for their children."
    }
  ];

  return (
    <div className="pt-24 pb-20">
      {/* Header */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-widest text-accent uppercase bg-accent/10 rounded-full"
          >
            Flexible Learning Modes
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl lg:text-7xl font-extrabold tracking-tight text-primary mb-8"
          >
            Choose Your <span className="text-accent">Mode</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed"
          >
            Whether you prefer the comfort of home or the structure of a classroom, we have the perfect setup for you.
          </motion.p>
        </div>
      </section>

      {/* Class Modes Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {classModes.map((mode, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="group bg-background rounded-[3rem] p-10 border border-gray-100 card-shadow transition-all hover:border-accent hover:-translate-y-2 flex flex-col"
              >
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-10 shadow-sm group-hover:bg-accent group-hover:text-white transition-all">
                  {mode.icon}
                </div>
                
                <h3 className="text-2xl font-bold mb-2">{mode.title}</h3>
                <p className="text-accent font-bold uppercase tracking-widest text-[10px] mb-6">{mode.subtitle}</p>
                
                <p className="text-gray-500 text-sm mb-8 leading-relaxed">
                  {mode.desc}
                </p>

                <div className="space-y-4 mb-10">
                  {mode.features.map((feature, j) => (
                    <div key={j} className="flex items-center gap-3 text-sm font-semibold text-gray-700">
                      <CheckCircle2 size={16} className="text-accent shrink-0" />
                      {feature}
                    </div>
                  ))}
                </div>

                <div className="mt-auto pt-8 border-t border-gray-100">
                  <div className="mb-6">
                    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block mb-1">Availability</span>
                    <span className="text-sm font-bold text-primary flex items-center gap-2">
                       {i === 0 ? <Video size={16} /> : i === 1 ? <Users size={16} /> : <Navigation size={16} />}
                       {mode.platform}
                    </span>
                  </div>
                  <button
                    onClick={openEnquiry}
                    className="w-full bg-white text-primary border-2 border-primary/10 px-6 py-4 rounded-2xl font-bold hover:bg-primary hover:text-white transition-all active:scale-95"
                  >
                    Select This Mode
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-32 bg-background animate-reveal">
        <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-4xl lg:text-5xl font-bold mb-8">Not sure which one to pick?</h2>
            <p className="text-gray-500 text-lg mb-12">Most of our working students prefer <strong>Online classes</strong>, while parents often choose <strong>Home Tuition</strong> for younger children. We can discuss your needs in a quick call.</p>
            <button
               onClick={openEnquiry}
               className="bg-accent text-white px-10 py-5 rounded-full font-bold hover:bg-black transition-all shadow-xl shadow-accent/20 active:scale-95"
            >
              Consult with our Teacher
            </button>
        </div>
      </section>
    </div>
  );
};

export default Classes;
