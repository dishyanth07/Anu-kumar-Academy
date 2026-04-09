import { motion, AnimatePresence } from 'motion/react';
import { X, ExternalLink } from 'lucide-react';
import { GOOGLE_FORM_URL } from '../constants';

interface EnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const EnquiryModal = ({ isOpen, onClose }: EnquiryModalProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 lg:p-8">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-primary/40 backdrop-blur-sm"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-4xl h-[90vh] bg-white rounded-[2rem] shadow-2xl overflow-hidden flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-100">
              <div>
                <h3 className="text-xl font-bold text-primary">Enquiry Form</h3>
                <p className="text-sm text-gray-500 font-medium text-accent">We will contact you within 24 hours 😊</p>
              </div>
              <div className="flex items-center gap-2">
                <a
                  href={GOOGLE_FORM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-gray-400 hover:text-accent transition-colors"
                  title="Open in new tab"
                >
                  <ExternalLink size={20} />
                </a>
                <button
                  onClick={onClose}
                  className="p-2 text-gray-400 hover:text-red-500 transition-colors"
                >
                  <X size={24} />
                </button>
              </div>
            </div>

            {/* Iframe Content */}
            <div className="flex-grow bg-gray-50 relative">
              <iframe
                src={GOOGLE_FORM_URL}
                className="w-full h-full border-none"
                title="Google Form Enquiry"
              >
                Loading…
              </iframe>
              
              {/* Fallback if iframe blocked or slow */}
              <div className="absolute inset-0 -z-10 flex items-center justify-center bg-gray-50">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-accent"></div>
              </div>
            </div>
            
            {/* Footer / Mobile Hint */}
            <div className="p-4 bg-white border-t border-gray-100 text-center md:hidden">
              <p className="text-[10px] text-gray-400 uppercase tracking-widest font-bold">
                Scroll to view entire form
              </p>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default EnquiryModal;
