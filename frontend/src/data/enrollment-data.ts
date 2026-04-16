export interface EnrollFormState {
  name: string;
  emailId: string;
  phoneNumber: string;
  location: string;
  service: string;
  customService: string;
  businessName: string;
}

export interface TrainingHighlight {
  icon: string;
  title: string;
  desc: string;
}

export interface EnrollmentStep {
  icon: string;
  title: string;
  desc: string;
}

export interface Module {
  title: string;
  items: string[];
}

export interface PortfolioItem {
  id: number;
  img: string;
  category: string;
  title: string;
  sm_des: string;
  link: string;
  tags: string[];
}

export interface Testimonial {
  name: string;
  city: string;
  testimonial: string;
}

export interface Content {
  hero: {
    title: string;
    subtitle: string;
    description: string;
    highlights: string[];
  };
  trainingHighlights: TrainingHighlight[];
  enrollmentSteps: EnrollmentStep[];
  modules: Module[];
  portfolio: PortfolioItem[];
  testimonials: Testimonial[];
}

export const enrollmentContent: Content = {
  hero: {
    title: "Become a Sales Consultant",
    subtitle: "Learn from Industry Experts",
    description:
      "Transform your career with our comprehensive sales consultant program. Get hands-on training from industry leaders and secure your dream job.",
    highlights: [
      "Online Classes",
      "Job Placement",
      "Expert Mentors",
      "Case Studies",
    ],
  },
  trainingHighlights: [
    {
      icon: "seo",
      title: "SEO Services",
      desc: "On-page, Off-page, local & technical SEO strategies to boost organic visibility and drive traffic.",
    },
    {
      icon: "social",
      title: "Social Media Marketing",
      desc: "Campaigns on Instagram, Facebook, LinkedIn & Twitter—content, community management & paid ads.",
    },
    {
      icon: "email",
      title: "Email Marketing",
      desc: "Strategic newsletters and drip campaigns to nurture leads and retain customers.",
    },
    {
      icon: "content",
      title: "Content Marketing",
      desc: "Blog posts, captions, infographics, video scripts—designed to engage and convert.",
    },
  ],
  enrollmentSteps: [
    {
      icon: "ecommerce",
      title: "End-to-End E-Commerce Solutions",
      desc: "From design to launch, we handle everything your store needs — website, payments, inventory, and marketing readiness.",
    },
    {
      icon: "cms",
      title: "CMS-Based Online Store Management",
      desc: "Easy-to-use content management system that lets you update products, manage inventory, and control your store without technical knowledge.",
    },
    {
      icon: "custom",
      title: "Custom-Built for Your Business",
      desc: "Every store we create is tailored to your brand, your products, and your audience. No one-size-fits-all templates.",
    },
    {
      icon: "support",
      title: "Ongoing Support & Maintenance",
      desc: "We don't disappear after launch. Our team stays connected to ensure your store runs smoothly.",
    },
    {
      icon: "seo",
      title: "Growth-Ready & SEO-Optimized",
      desc: "Your store is built to rank higher, load faster, and convert better — right from day one.",
    },
  ],
  modules: [
    {
      title: "Sales Fundamentals",
      items: [
        "Sales Psychology",
        "Customer Behavior",
        "Communication Skills",
        "Negotiation Techniques",
      ],
    },
    {
      title: "Advanced Sales Techniques",
      items: [
        "Consultative Selling",
        "Solution Selling",
        "Relationship Building",
        "Closing Strategies",
      ],
    },
    {
      title: "Industry Knowledge",
      items: [
        "Market Analysis",
        "Competitive Intelligence",
        "Product Knowledge",
        "Industry Trends",
      ],
    },
  ],
  portfolio: [
    {
      id: 1,
      img: "/portfolio/project-portfolio-1.png",
      category: "E-commerce",
      title: "TossMart",
      sm_des:
        "Tossmart offers eCommerce services with smart gadgets, electronics, and a smooth online shopping experience.",
      link: "https://tossmart.com/",
      tags: ["E-commerce", "Online Shopping"],
    },
    {
      id: 7,
      img: "/portfolio/project-portfolio-7.png",
      category: "E-commerce",
      title: "Botso",
      sm_des:
        "Botso.in is an e-commerce site offering electronic products, mainly cameras and accessories, with easy online shopping.",
      link: "https://botso.in/",
      tags: ["E-commerce", "Electronic Products"],
    },
    {
      id: 3,
      img: "/portfolio/project-portfolio-3.png",
      category: "E-learning",
      title: "The Learn Skills",
      sm_des:
        "The website offers various educational resources, courses, and training to help individuals gain new skills.",
      link: "https://thelearnskills.com/",
      tags: ["E-learning", "Online Courses"],
    },
    {
      id: 4,
      img: "/portfolio/project-portfolio-4.png",
      category: "Hotel Booking",
      title: "Hotel Sweet Dreams",
      sm_des:
        "Hotel Sweet Dreams offers hotel and banquet booking services with personalized experiences and customer satisfaction focus.",
      link: "https://hotelsweetdreams.ovsinnovation.com/",
      tags: ["Hotel Booking", "Banquet Booking"],
    },
    {
      id: 5,
      img: "/portfolio/project-portfolio-5.png",
      category: "Travel",
      title: "Arana Taj Tour",
      sm_des:
        "Arana Taj Tour offers curated travel packages focused on Indian destinations like Agra, Delhi, Jaipur, and Varanasi.",
      link: "https://aranatajtour.com/",
      tags: ["Travel", "Tour Packages"],
    },
    {
      id: 2,
      img: "/portfolio/project-portfolio-2.png",
      category: "Beauty",
      title: "CandyFloss",
      sm_des:
        "The website offers personalized salon services tailored to each client's needs and features testimonials from satisfied customers.",
      link: "https://candyflossbeautypalace.com/",
      tags: ["Beauty", "Personalized Services"],
    },
    {
      id: 6,
      img: "/portfolio/project-portfolio-6.png",
      category: "Real Estate",
      title: "Prosperra Infra Estate",
      sm_des:
        "Prosperra Infra Estate offers real estate solutions, specializing in commercial and residential properties across India.",
      link: "https://prosperrainfra.com/",
      tags: ["Real Estate", "Commercial Properties"],
    },
    {
      id: 8,
      img: "/portfolio/project-portfolio-8.png",
      category: "Engineering",
      title: "Divizz Group",
      sm_des:
        "Divizz Group offers services across civil engineering, design, property valuation, and business consulting through its website.",
      link: "https://divizz.com/",
      tags: ["Civil Engineering", "Design"],
    },
    {
      id: 9,
      img: "/portfolio/project-portfolio-9.png",
      category: "Engineering",
      title: "PowerQ",
      sm_des:
        "PowerQ offers Test and Tag services in Melbourne, ensuring business electrical safety with reliable testing and certification.",
      link: "https://powerq.com.au/",
      tags: ["Test and Tag", "Electrical Safety"],
    },
    {
      id: 10,
      img: "/portfolio/project-portfolio-10.png",
      category: "Health",
      title: "Health&Herbs",
      sm_des:
        "Health&Herbs offers health consulting, herbal wellness, natural remedies, and holistic lifestyle solutions through its website.",
      link: "https://healthnherbs.in/",
      tags: ["Health Consulting", "Herbal Wellness"],
    },
  ],
  testimonials: [
    {
      name: "Himanshu Singh",
      city: "Mumbai",
      testimonial:
        "Working at Vastora Tech is a great experience. The company values its employees, encourages new ideas, and provides opportunities to grow. The team is supportive, the work environment is positive, and there's a good balance between work and personal life. It's a great place to build your career.",
    },
    {
      name: "Vishakha Agarwal",
      city: "Delhi",
      testimonial:
        "Working at Vastora Tech has been an incredible experience! The team is supportive, innovative, and passionate about digital marketing. I've had the opportunity to learn and grow professionally while contributing to impactful projects.😊",
    },
    {
      name: "Sandhya Singh",
      city: "Bangalore",
      testimonial:
        "Vastora Tech is a fantastic digital marketing agency! Their team is incredibly knowledgeable and creative, delivering outstanding results for our business. They took the time to understand our goals and tailored a comprehensive strategy that boosted our online presence significantly. Their communication and professionalism are top-notch.",
    },
  ],
};
