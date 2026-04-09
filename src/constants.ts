export const ACADEMY_NAME = "ANU KUMAR ACADEMY";
export const PHONE_NUMBER = "+91 90947 25434";
export const WHATSAPP_LINK = `https://wa.me/919094725434`;
export const EMAIL = "anukumaracademy@gmail.com";
export const GOOGLE_FORM_URL = "https://forms.gle/ccxANEWjGxxkWTDb7";

export const COURSES = [
  {
    id: "academics",
    title: "Hindi for School Students",
    subtitle: "(CBSE / State Board)",
    description: "In-depth support for school curriculum with a focus on clearing concepts and excelling in board exams.",
    whoItIsFor: "Students from Grade 1 to 12 studying in CBSE or State Board schools.",
    benefits: [
      "Board-aligned Syllabus",
      "Regular Mock Tests",
      "Handwritten Notes",
      "Chapter-wise Revision"
    ],
    outcomes: [
      "Confidence in school examinations",
      "Strong base in Hindi grammar",
      "Improved writing and comprehension skills"
    ],
    icon: "BookOpen"
  },
  {
    id: "spoken",
    title: "Spoken Hindi for Beginners",
    subtitle: "Conversational Excellence",
    description: "Master everyday Hindi through interactive sessions designed for non-native speakers and professionals.",
    whoItIsFor: "Professionals relocating to North India, travelers, and anyone interested in conversational Hindi.",
    benefits: [
      "Interactive Live Sessions",
      "Real-world Scenarios",
      "Accent Correction",
      "Practical Vocabulary"
    ],
    outcomes: [
      "Fluidity in daily conversations",
      "Confidence to speak in social settings",
      "Understanding of colloquial Hindi"
    ],
    icon: "MessageCircle"
  },
  {
    id: "sabha",
    title: "Advanced Sabha Training",
    subtitle: "Prachar Sabha Preparation",
    description: "Specialized training for Dakshina Bharat Hindi Prachar Sabha examinations from Parichaya to Praveen.",
    whoItIsFor: "Students and learners aiming for formal Hindi certifications and government jobs.",
    benefits: [
      "Official Exam Materials",
      "Previous Year Paper Solving",
      "Literary Analysis",
      "Essay Writing Mastery"
    ],
    outcomes: [
      "Successful certification completion",
      "Deep understanding of Hindi literature",
      "Formal academic proficiency"
    ],
    icon: "GraduationCap"
  }
];

export const CLASS_TYPES = [
  {
    id: "online",
    title: "Online Classes",
    description: "Interactive live sessions via Zoom or Google Meet with digital board support.",
    benefits: ["Learn from anywhere", "Recorded lessons available", "Interactive digital tools"],
    availability: "Global"
  },
  {
    id: "offline",
    title: "Offline Classes",
    description: "Small group sessions at our academy centers for focused, classroom-style learning.",
    benefits: ["In-person interaction", "Collaborative environment", "Quiet study space"],
    availability: "Local Areas"
  },
  {
    id: "home",
    title: "Home Tuition",
    description: "Premium 1-1 personalized coaching at your doorstep for maximum convenience.",
    benefits: ["Ultimate convenience", "Personalized focus", "Comfortable environment"],
    availability: "Nearby Availability"
  }
];

export const TESTIMONIALS = [
  {
    name: "Priya S.",
    role: "Parent of 8th Grade Student",
    text: "The way Hindi grammar is explained here is so simple. My daughter's scores improved from 70% to 95% within one term.",
    stars: 5,
    avatar: "PS"
  },
  {
    name: "Rahul K.",
    role: "Software Professional",
    text: "I moved to Delhi for work and struggled with Hindi. These classes helped me master basic speaking skills in just 4 weeks.",
    stars: 5,
    avatar: "RK"
  },
  {
    name: "Meena R.",
    role: "Parent",
    text: "Very professional and patient teaching approach. The individual attention given to each student is commendable.",
    stars: 5,
    avatar: "MR"
  }
];

export const SCHEDULE_SLOTS = [
  { time: "04:00 PM - 05:00 PM", days: "Mon - Fri", status: "Filling Fast" },
  { time: "05:00 PM - 06:30 PM", days: "Mon - Fri", status: "Limited Slots" },
  { time: "06:30 PM - 08:00 PM", days: "Mon - Fri", status: "Evening Batch" },
  { time: "10:00 AM - 01:00 PM", days: "Sat - Sun", status: "Weekend Special" }
];
