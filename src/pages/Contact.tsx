import { motion } from 'motion/react';
import { Phone, Mail, MessageCircle, MapPin, Clock, ArrowRight, Share2 } from 'lucide-react';
import { PHONE_NUMBER, EMAIL, WHATSAPP_LINK, ACADEMY_NAME } from '../constants';
import { useEnquiry } from '../context/EnquiryContext';

const Contact = () => {
  const { openEnquiry } = useEnquiry();

  const contactMethods = [
    {
      icon: <Phone size={24} className="text-accent" />,
      title: "Call Us",
      value: PHONE_NUMBER,
      link: `tel:${PHONE_NUMBER.replace(/\s+/g, '')}`,
      desc: "Mon-Sat, 9AM-8PM"
    },
    {
      icon: <MessageCircle size={24} className="text-[#25D366]" />,
      title: "WhatsApp",
      value: "Direct Chat",
      link: WHATSAPP_LINK,
      desc: "Instant Response"
    },
    {
      icon: <Mail size={24} className="text-accent" />,
      title: "Email Us",
      value: EMAIL,
      link: `mailto:${EMAIL}`,
      desc: "24/7 Support"
    }
  ];

  return (
    <div className="pt-24 pb-20">
      {/* Header */}
      <section className="py-24 bg-background overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 text-xs font-bold tracking-widest text-accent uppercase bg-accent/10 rounded-full"
          >
            Get In Touch
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl lg:text-7xl font-extrabold tracking-tight text-primary mb-8"
          >
            Let's Start <span className="text-accent">Talking</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed"
          >
            Have questions about our courses or timings? Reach out to us directly or fill our enquiry form.
          </motion.p>
        </div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 blur-[120px] rounded-full translate-x-1/2 -translate-y-1/2"></div>
      </section>

      <section className="py-24 bg-white px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
            
            {/* Contact Details */}
            <div className="space-y-12">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-primary underline decoration-accent/20 underline-offset-8">Information</h2>
                <p className="text-gray-500 text-lg leading-relaxed mb-10">
                  Ready to elevate your Hindi skills? Choose your preferred method of communication below to get started.
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {contactMethods.map((method, i) => (
                    <a
                      key={i}
                      href={method.link}
                      target={i === 1 ? "_blank" : undefined}
                      rel={i === 1 ? "noopener noreferrer" : undefined}
                      className="group p-8 rounded-[2.5rem] bg-background border border-gray-100 card-shadow transition-all hover:border-accent/40 active:scale-95"
                    >
                      <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:bg-accent group-hover:text-white transition-all">
                        {method.icon}
                      </div>
                      <h4 className="font-bold text-gray-400 uppercase tracking-widest text-[10px] mb-1">{method.title}</h4>
                      <p className="text-base sm:text-lg font-bold text-primary mb-1 underline decoration-primary/10 decoration-2 group-hover:decoration-accent transition-all break-all">{method.value}</p>
                      <p className="text-xs text-gray-400 font-medium">{method.desc}</p>
                    </a>
                  ))}
                  
                  <div className="p-8 rounded-[2.5rem] bg-accent text-white card-shadow lg:translate-y-8">
                     <Share2 size={32} className="mb-6 opacity-20" />
                     <h4 className="font-bold uppercase tracking-widest text-[10px] mb-1 opacity-60">Follow Us</h4>
                     <p className="text-lg font-bold mb-4">Social Media</p>
                     <p className="text-xs text-white/60 mb-6">Stay updated with our latest blog posts and tips.</p>
                     <div className="flex gap-4">
                        <div className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 transition-all cursor-pointer"></div>
                        <div className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 transition-all cursor-pointer"></div>
                     </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Enquiry Prompt */}
            <div className="relative animate-reveal">
              <div className="bg-primary rounded-[3.5rem] p-12 lg:p-16 text-white overflow-hidden relative shadow-3xl">
                <div className="relative z-10">
                  <h3 className="text-3xl lg:text-4xl font-bold mb-6">Quick Enquiry</h3>
                  <p className="text-white/60 text-lg mb-10 leading-relaxed">
                    Prefer us to call you back? Fill our detailed enquiry form and our admission desk will contact you within 24 hours.
                  </p>
                  
                  <div className="space-y-6 mb-12">
                     <div className="flex items-center gap-4 text-white/80">
                        <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center text-accent"><Clock size={16}/></div>
                        <span className="text-sm font-semibold">Response Time: 24 Hours</span>
                     </div>
                     <div className="flex items-center gap-4 text-white/80">
                        <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center text-accent"><MapPin size={16}/></div>
                        <span className="text-sm font-semibold">Available: Online / Offline / Home</span>
                     </div>
                  </div>

                  <button
                    onClick={openEnquiry}
                    className="w-full bg-accent text-white px-10 py-5 rounded-3xl font-bold hover:bg-white hover:text-primary transition-all shadow-xl shadow-accent/20 active:scale-95 flex items-center justify-center gap-2 text-lg"
                  >
                    Open Enquiry Form <ArrowRight size={22} />
                  </button>
                </div>
                {/* Visual patterns */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 blur-[100px] rounded-full"></div>
              </div>
              
              {/* Trust Badge below box */}
              <div className="mt-10 flex items-center justify-center gap-2 text-gray-400 font-bold tracking-widest uppercase text-[10px]">
                 <span className="w-10 h-[1px] bg-gray-200"></span>
                 Official Admissions Center of {ACADEMY_NAME}
                 <span className="w-10 h-[1px] bg-gray-200"></span>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
