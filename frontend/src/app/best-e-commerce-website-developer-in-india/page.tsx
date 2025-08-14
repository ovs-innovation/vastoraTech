"use client";

import { useState, ChangeEvent, FormEvent } from "react";
import toast, { Toaster } from "react-hot-toast";

// Define interfaces for our data structures
interface EnrollFormState {
  name: string;
  emailId: string;
  phoneNumber: string;
  location: string;
  service: string;
  customService: string;
  businessName: string;
}

interface TrainingHighlight {
  icon: string;
  title: string;
  desc: string;
}

interface EnrollmentStep {
  icon: string;
  title: string;
  desc: string;
}

interface Module {
  title: string;
  items: string[];
}

interface PortfolioItem {
  id: number;
  img: string;
  category: string;
  title: string;
  sm_des: string;
  link: string;
  tags: string[];
}

interface Testimonial {
  name: string;
  city: string;
  testimonial: string;
}

interface Content {
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

export default function Home() {
  // Add custom styles for enhanced visual appeal
  const customStyles = `
    .hover-shadow:hover {
      transform: translateY(-5px) !important;
      box-shadow: 0 25px 50px rgba(0,0,0,0.15) !important;
      border: 2px solid #0d6efd !important;
    }
    
    .rounded-circle {
      transition: all 0.3s ease;
    }
    
    .rounded-circle:hover {
      transform: scale(1.1);
      box-shadow: 0 15px 35px rgba(13, 110, 253, 0.4) !important;
    }
    
    .timeline-line {
      background: linear-gradient(135deg, #0d6efd 0%, #0b5ed7 100%);
      box-shadow: 0 0 30px rgba(13, 110, 253, 0.4);
    }
  `;
  const [enrollForm, setEnrollForm] = useState<EnrollFormState>({
    name: "",
    emailId: "",
    phoneNumber: "",
    location: "",
    service: "",
    customService: "",
    businessName: "",
  });

  const handleEnrollChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setEnrollForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleEnrollSubmit = async (e: FormEvent) => {
    e.preventDefault();

    try {
      // Prepare the data for API submission
      const formData = {
        name: enrollForm.name,
        emailId: enrollForm.emailId,
        phoneNumber: enrollForm.phoneNumber,
        businessName: enrollForm.businessName || "",
        location: enrollForm.location,
        service: enrollForm.service,
        customService:
          enrollForm.service === "other" ? enrollForm.customService : "",
      };

      // Make API call
      const response = await fetch(
        "https://www.api.vastoratech.com/api/leads/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        // Success - reset form
        toast.success(
          "Thank you! Your information has been submitted successfully. We'll get back to you soon.",
          {
            duration: 5000,
            position: "top-right",
            style: {
              background: "#10B981",
              color: "#fff",
              borderRadius: "10px",
              fontSize: "14px",
            },
          }
        );
        setEnrollForm({
          name: "",
          emailId: "",
          phoneNumber: "",
          location: "",
          service: "",
          customService: "",
          businessName: "",
        });
      } else {
        // Handle error
        const errorData = await response.json();
        console.error("API Error:", errorData);
        toast.error(
          "Sorry, there was an error submitting your form. Please try again.",
          {
            duration: 5000,
            position: "top-right",
            style: {
              background: "#EF4444",
              color: "#fff",
              borderRadius: "10px",
              fontSize: "14px",
            },
          }
        );
      }
    } catch (error) {
      console.error("Network Error:", error);
      toast.error(
        "Sorry, there was a network error. Please check your connection and try again.",
        {
          duration: 5000,
          position: "top-right",
          style: {
            background: "#EF4444",
            color: "#fff",
            borderRadius: "10px",
            fontSize: "14px",
          },
        }
      );
    }
  };

  // Scroll to form function
  const scrollToForm = () => {
    const formSection = document.getElementById("enrollment-form");
    if (formSection) {
      formSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Call function
  const handleCall = () => {
    window.open("tel:+919667092077", "_self");
  };

  // Sample data - you can replace with your actual data
  const content: Content = {
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
        img: "/img/portfolio/project-portfolio-1.png",
        category: "E-commerce",
        title: "TossMart",
        sm_des:
          "Tossmart offers eCommerce services with smart gadgets, electronics, and a smooth online shopping experience.",
        link: "https://tossmart.com/",
        tags: ["E-commerce", "Online Shopping"],
      },
      {
        id: 7,
        img: "/img/portfolio/project-portfolio-7.png",
        category: "E-commerce",
        title: "Botso",
        sm_des:
          "Botso.in is an e-commerce site offering electronic products, mainly cameras and accessories, with easy online shopping.",
        link: "https://botso.in/",
        tags: ["E-commerce", "Electronic Products"],
      },
      {
        id: 3,
        img: "/img/portfolio/project-portfolio-3.png",
        category: "E-learning",
        title: "The Learn Skills",
        sm_des:
          "The website offers various educational resources, courses, and training to help individuals gain new skills.",
        link: "https://thelearnskills.com/",
        tags: ["E-learning", "Online Courses"],
      },
      {
        id: 4,
        img: "/img/portfolio/project-portfolio-4.png",
        category: "Hotel Booking",
        title: "Hotel Sweet Dreams",
        sm_des:
          "Hotel Sweet Dreams offers hotel and banquet booking services with personalized experiences and customer satisfaction focus.",
        link: "https://hotelsweetdreams.ovsinnovation.com/",
        tags: ["Hotel Booking", "Banquet Booking"],
      },

      {
        id: 5,
        img: "/img/portfolio/project-portfolio-5.png",
        category: "Travel",
        title: "Arana Taj Tour",
        sm_des:
          "Arana Taj Tour offers curated travel packages focused on Indian destinations like Agra, Delhi, Jaipur, and Varanasi.",
        link: "https://aranatajtour.com/",
        tags: ["Travel", "Tour Packages"],
      },
      {
        id: 2,
        img: "/img/portfolio/project-portfolio-2.png",
        category: "Beauty",
        title: "CandyFloss",
        sm_des:
          "The website offers personalized salon services tailored to each client's needs and features testimonials from satisfied customers.",
        link: "https://candyflossbeautypalace.com/",
        tags: ["Beauty", "Personalized Services"],
      },
      {
        id: 6,
        img: "/img/portfolio/project-portfolio-6.png",
        category: "Real Estate",
        title: "Prosperra Infra Estate",
        sm_des:
          "Prosperra Infra Estate offers real estate solutions, specializing in commercial and residential properties across India.",
        link: "https://prosperrainfra.com/",
        tags: ["Real Estate", "Commercial Properties"],
      },
      {
        id: 8,
        img: "/img/portfolio/project-portfolio-8.png",
        category: "Engineering",
        title: "Divizz Group",
        sm_des:
          "Divizz Group offers services across civil engineering, design, property valuation, and business consulting through its website.",
        link: "https://divizz.com/",
        tags: ["Civil Engineering", "Design"],
      },
      {
        id: 9,
        img: "/img/portfolio/project-portfolio-9.png",
        category: "Engineering",
        title: "PowerQ",
        sm_des:
          "PowerQ offers Test and Tag services in Melbourne, ensuring business electrical safety with reliable testing and certification.",
        link: "https://powerq.com.au/",
        tags: ["Test and Tag", "Electrical Safety"],
      },
      {
        id: 10,
        img: "/img/portfolio/project-portfolio-10.png",
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
          "Working at OVS Innovation is a great experience. The company values its employees, encourages new ideas, and provides opportunities to grow. The team is supportive, the work environment is positive, and there's a good balance between work and personal life. It's a great place to build your career.",
      },
      {
        name: "Vishakha Agarwal",
        city: "Delhi",
        testimonial:
          "Working at OVS Innovation has been an incredible experience! The team is supportive, innovative, and passionate about digital marketing. I've had the opportunity to learn and grow professionally while contributing to impactful projects.😊",
      },
      {
        name: "Sandhya Singh",
        city: "Bangalore",
        testimonial:
          "OVS Innovation is a fantastic digital marketing agency! Their team is incredibly knowledgeable and creative, delivering outstanding results for our business. They took the time to understand our goals and tailored a comprehensive strategy that boosted our online presence significantly. Their communication and professionalism are top-notch.",
      },
    ],
  };

  return (
    <div className="min-vh-100 bg-light">
      {/* Custom Styles */}
      <style dangerouslySetInnerHTML={{ __html: customStyles }} />

      {/* Sticky Header */}
      <header className="sticky-top bg-white shadow-sm border-bottom">
        <div className="container">
          <div className="d-flex justify-content-between align-items-center py-3">
            <div className="d-flex align-items-center">
              <div>
                <img
                  src="/logo-ovs1.webp"
                  alt="OVS Innovation"
                  className="h-7"
                />
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Clean Professional Hero Section */}
      <section className="bg-white py-5 py-lg-5">
        <div className="container">
          <div className="row align-items-center">
            {/* Left Content */}
            <div className="col-lg-8 mb-5 mb-lg-0">
              <div className="mb-4">
                <h1 className="display-8 fw-bold mb-3">
                  Custom E-Commerce Development Solutions for 10x Business
                  Growth Online
                </h1>
                <p className="lead fw-semibold mb-4">
                  We build secure, scalable, and sales-driven e-commerce
                  websites for startups, brands, and enterprises
                </p>
                <p className="text-muted mb-4">
                  Launch your own online store with advanced features and a
                  seamless shopping experience. Our e-commerce solutions are
                  tailored to your business needs, ensuring faster performance,
                  higher security, and better conversions.
                </p>
              </div>

              <div className="d-flex flex-wrap gap-2 mb-4">
                <span className="badge bg-light text-dark border d-flex align-items-center py-2 px-3">
                  <i className="bi bi-check-circle me-2"></i>
                  CMS-Based Online Store Management
                </span>
                <span className="badge bg-light text-dark border d-flex align-items-center py-2 px-3">
                  <i className="bi bi-telephone me-2"></i>
                  Customized Solution
                </span>
                <span className="badge bg-light text-dark border d-flex align-items-center py-2 px-3">
                  <i className="bi bi-envelope me-2"></i>
                  Payment Gateway
                </span>
                <span className="badge bg-light text-dark border d-flex align-items-center py-2 px-3">
                  <i className="bi bi-file-text me-2"></i>
                  Inventory Management
                </span>
                <span className="badge bg-light text-dark border d-flex align-items-center py-2 px-3">
                  <i className="bi bi-grid me-2"></i>
                  Mobile Commerce
                </span>
              </div>
            </div>

            {/* Right Content - Real Image */}
            <div className="col-lg-4 text-center">
              <div className="position-relative">
                <img
                  src="https://mentorkart.com/PolicyBazaarImages/HeroImage.svg"
                  alt="Professional Digital Marketing Expert"
                  className="img-fluid"
                />
              </div>
            </div>
          </div>

          {/* Bottom Program Details */}
          <div className="mt-5">
            <div className="bg-white rounded-3 shadow p-4 border">
              <div className="row g-4">
                <div className="col-md-4 d-flex">
                  <div className="me-3 text-primary">
                    <i className="bi bi-list fs-2"></i>
                  </div>
                  <div>
                    <h3 className="h5 fw-semibold">
                      Complete E-Commerce Solutions
                    </h3>
                    <p className="text-muted small mb-0">
                      From product listing to payment gateways — we build
                      everything your online store needs to run smoothly.
                    </p>
                  </div>
                </div>

                <div className="col-md-4 d-flex">
                  <div className="me-3 text-primary">
                    <i className="bi bi-calendar fs-2"></i>
                  </div>
                  <div>
                    <h3 className="h5 fw-semibold">
                      Flexible Plans for Every Business
                    </h3>
                    <p className="text-muted small mb-0">
                      Whether you're starting small or going big, our packages
                      fit your budget and growth goals.
                    </p>
                  </div>
                </div>

                <div className="col-md-4 d-flex">
                  <div className="me-3 text-primary">
                    <i className="bi bi-info-circle fs-2"></i>
                  </div>
                  <div>
                    <h3 className="h5 fw-semibold">
                      Free Consultation Before You Start
                    </h3>
                    <p className="text-muted small mb-0">
                      Discuss your vision with us first. No charges, just clear
                      guidance to help you plan better.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-white py-2 py-lg-2">
        <div className="container">
          <div className="text-center">
            <button className="btn btn-primary btn-lg px-4 py-3 rounded-pill shadow-sm mb-3">
              <i className="bi bi-emoji-smile text-white me-2"></i>
              Get Free Demo
            </button>
            <p className="text-muted">
              See our solutions in action - No commitment required
            </p>
          </div>
        </div>
      </section>

      {/* Why OVS Innovation with CTA */}
      <section className="bg-light py-5 py-lg-5">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="h2 mb-3">
              Why Choose OVS Innovation for E-Commerce Development?
            </h2>
            <p className="lead text-muted">
              We're not just a development team. We're your partners in growth.
            </p>
          </div>

          <div className="row">
            {/* Left: Professional Enrollment Steps */}
            <div className="col-lg-6 position-relative mb-5 mb-lg-0">
              <div className="position-absolute start-0 top-0 bottom-0 w-2 bg-primary ms-4 rounded-pill timeline-line"></div>

              <div>
                {content.enrollmentSteps.map((step, index) => (
                  <div key={index} className="position-relative mb-4">
                    <div className="d-flex">
                      <div className="flex-shrink-0 position-relative">
                        <div
                          className="rounded-circle bg-primary text-white d-flex align-items-center justify-content-center shadow-lg p-4"
                          style={{
                            width: "64px",
                            height: "64px",
                            boxShadow: "0 8px 25px rgba(13, 110, 253, 0.3)",
                          }}
                        >
                          {step.icon === "ecommerce" && (
                            <i className="bi bi-cart fs-3"></i>
                          )}
                          {step.icon === "custom" && (
                            <i className="bi bi-gear fs-3"></i>
                          )}
                          {step.icon === "pricing" && (
                            <i className="bi bi-currency-dollar fs-3"></i>
                          )}
                          {step.icon === "support" && (
                            <i className="bi bi-people fs-3"></i>
                          )}
                          {step.icon === "results" && (
                            <i className="bi bi-check-circle fs-3"></i>
                          )}
                          {step.icon === "seo" && (
                            <i className="bi bi-search fs-3"></i>
                          )}
                          {step.icon === "cms" && (
                            <i className="bi bi-layout-text-window fs-3"></i>
                          )}
                        </div>
                      </div>

                      <div className="flex-grow-1 ms-4">
                        <div
                          className="bg-white rounded-3 shadow-lg p-4 border-0 hover-shadow transition-all"
                          style={{
                            transform: "translateY(0)",
                            transition: "all 0.3s ease",
                          }}
                        >
                          <h3 className="h5 mb-3 fw-bold text-dark">
                            {step.title}
                          </h3>
                          <p className="text-muted mb-0 lh-base">{step.desc}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Professional Enrollment Form */}
            <div className="col-lg-6 position-relative" id="enrollment-form">
              <div className="bg-white rounded-3 shadow p-4 p-lg-5 border">
                <div className="text-center mb-4">
                  <h3 className="h2 mb-2">Let's Grow Your Business</h3>
                  <p className="text-muted">
                    Start your digital marketing journey today
                  </p>
                </div>

                <form onSubmit={handleEnrollSubmit} className="row g-3">
                  <div className="col-md-6">
                    <label className="form-label fw-semibold">
                      Full Name <span className="text-danger">*</span>
                    </label>
                    <div className="input-group">
                      <span className="input-group-text">
                        <i className="bi bi-person"></i>
                      </span>
                      <input
                        type="text"
                        name="name"
                        value={enrollForm.name}
                        onChange={handleEnrollChange}
                        className="form-control form-control-lg"
                        placeholder="Enter your full name"
                        required
                      />
                    </div>
                  </div>

                  <div className="col-md-6">
                    <label className="form-label fw-semibold">
                      Email Address <span className="text-danger">*</span>
                    </label>
                    <div className="input-group">
                      <span className="input-group-text">
                        <i className="bi bi-envelope"></i>
                      </span>
                      <input
                        type="email"
                        name="emailId"
                        value={enrollForm.emailId}
                        onChange={handleEnrollChange}
                        className="form-control form-control-lg"
                        placeholder="Enter your business or personal email"
                        required
                      />
                    </div>
                  </div>

                  <div className="col-md-6">
                    <label className="form-label fw-semibold">
                      Phone Number <span className="text-danger">*</span>
                    </label>
                    <div className="input-group">
                      <span className="input-group-text">
                        <i className="bi bi-telephone"></i>
                      </span>
                      <input
                        type="tel"
                        name="phoneNumber"
                        value={enrollForm.phoneNumber}
                        onChange={handleEnrollChange}
                        className="form-control form-control-lg"
                        placeholder="Enter your active number"
                        required
                      />
                    </div>
                  </div>

                  <div className="col-md-6">
                    <label className="form-label fw-semibold">
                      City/Location <span className="text-danger">*</span>
                    </label>
                    <div className="input-group">
                      <span className="input-group-text">
                        <i className="bi bi-geo-alt"></i>
                      </span>
                      <input
                        type="text"
                        name="location"
                        value={enrollForm.location}
                        onChange={handleEnrollChange}
                        className="form-control form-control-lg"
                        placeholder="Where is your business based?"
                        required
                      />
                    </div>
                  </div>

                  <div className="col-12">
                    <label className="form-label fw-semibold">
                      Service You're Interested In{" "}
                      <span className="text-danger">*</span>
                    </label>
                    <div className="input-group">
                      <span className="input-group-text">
                        <i className="bi bi-file-text"></i>
                      </span>
                      <select
                        name="service"
                        value={enrollForm.service || ""}
                        onChange={handleEnrollChange}
                        className="form-select form-select-lg"
                        required
                      >
                        <option value="">Select a service</option>
                        <option value="seo">SEO</option>
                        <option value="social-media-marketing">
                          Social Media Marketing
                        </option>
                        <option value="website-design">Website Design</option>
                        <option value="ecommerce-website">
                          Ecommerce Website
                        </option>
                        <option value="mobile-app-development">
                          Mobile App Development
                        </option>
                        <option value="google-ads">Google Ads</option>
                        <option value="content-marketing">
                          Content Marketing
                        </option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    {enrollForm.service === "other" && (
                      <div className="mt-3">
                        <label className="form-label fw-semibold">
                          Please specify your service{" "}
                          <span className="text-danger">*</span>
                        </label>
                        <div className="input-group">
                          <span className="input-group-text">
                            <i className="bi bi-pencil"></i>
                          </span>
                          <input
                            type="text"
                            name="customService"
                            value={enrollForm.customService || ""}
                            onChange={handleEnrollChange}
                            className="form-control form-control-lg"
                            placeholder="Enter your specific service requirement"
                            required
                          />
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="col-12">
                    <label className="form-label fw-semibold">
                      Your Business/Brand Name{" "}
                      <span className="text-muted small">(Optional)</span>
                    </label>
                    <div className="input-group">
                      <span className="input-group-text">
                        <i className="bi bi-building"></i>
                      </span>
                      <input
                        type="text"
                        name="businessName"
                        value={enrollForm.businessName}
                        onChange={handleEnrollChange}
                        className="form-control form-control-lg"
                        placeholder="Enter your business or brand name"
                      />
                    </div>
                  </div>

                  {/* Submit button */}
                  <div className="col-12">
                    <button
                      type="submit"
                      className="btn btn-primary btn-lg w-100 py-3 fw-bold"
                    >
                      <i className="bi bi-send me-2"></i>
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Services Section */}
      <section className="bg-white py-5 py-lg-5">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="h2 mb-3">Our Services</h2>
            <p className="lead text-muted">
              Comprehensive e-commerce marketing solutions designed to grow your
              online store, drive traffic, and boost conversions.
            </p>
          </div>

          <div className="row g-4">
            {/* Shopify Ecommerce Website Development */}
            <div className="col-lg-4">
              <div className="card h-100 border-0 shadow-sm hover-shadow transition">
                <div className="card-body p-4">
                  <div className="text-center mb-4">
                    <img
                      src="assets/img/landingpage/shopify.png"
                      alt="Shopify"
                      className="img-fluid mb-4"
                      style={{ height: "40px" }}
                    />
                  </div>
                  <h3 className="h4 card-title mb-3">
                    Shopify Ecommerce Website Development
                  </h3>
                  <p className="card-text text-muted mb-4">
                    Shopify is one of the most preferred E-commerce Platform by
                    business owners. It is known for it's extremely easy to use
                    panel. Shopify is an excellent solution if you are a small
                    to medium business and you want a hassle free easy-to-use
                    platform for your E-commerce Business.
                  </p>
                  <ul className="list-unstyled">
                    <li className="mb-2 d-flex">
                      <i className="bi bi-check-circle-fill text-success me-2"></i>
                      <span>Easy to use panel</span>
                    </li>
                    <li className="mb-2 d-flex">
                      <i className="bi bi-check-circle-fill text-success me-2"></i>
                      <span>Small to medium business</span>
                    </li>
                    <li className="mb-2 d-flex">
                      <i className="bi bi-check-circle-fill text-success me-2"></i>
                      <span>Hassle free platform</span>
                    </li>
                    <li className="d-flex">
                      <i className="bi bi-check-circle-fill text-success me-2"></i>
                      <span>E-commerce Business</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* WooCommerce / WordPress Ecommerce Website Design and Development */}
            <div className="col-lg-4">
              <div className="card h-100 border-0 shadow-sm hover-shadow transition">
                <div className="card-body p-4">
                  <div className="text-center mb-4">
                    <img
                      src="assets/img/landingpage/wordpress.png"
                      alt="WooCommerce"
                      className="img-fluid mb-4"
                      style={{ height: "56px" }}
                    />
                  </div>
                  <h3 className="h4 card-title mb-3">
                    Woocommerce / WordPress Ecommerce Website Design and
                    Development
                  </h3>
                  <p className="card-text text-muted mb-4">
                    If you are planning to sell a wide range of products and
                    services to the customers directly through your website
                    portal then a wordpress/woocommerce eCommerce website will
                    be a suitable choice.
                  </p>
                  <ul className="list-unstyled">
                    <li className="mb-2 d-flex">
                      <i className="bi bi-check-circle-fill text-success me-2"></i>
                      <span>Wide range of products</span>
                    </li>
                    <li className="mb-2 d-flex">
                      <i className="bi bi-check-circle-fill text-success me-2"></i>
                      <span>Direct customer sales</span>
                    </li>
                    <li className="mb-2 d-flex">
                      <i className="bi bi-check-circle-fill text-success me-2"></i>
                      <span>Website portal</span>
                    </li>
                    <li className="d-flex">
                      <i className="bi bi-check-circle-fill text-success me-2"></i>
                      <span>Suitable choice</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Custom Ecommerce Website Development */}
            <div className="col-lg-4">
              <div className="card h-100 border-0 shadow-sm hover-shadow transition">
                <div className="card-body p-4">
                  <div className="text-center mb-4">
                    <img
                      src="assets/img/landingpage/mern.png"
                      alt="MERN"
                      className="img-fluid mb-4"
                      style={{ height: "40px" }}
                    />
                  </div>
                  <h3 className="h4 card-title mb-3">
                    Custom Ecommerce Website Development
                  </h3>
                  <p className="card-text text-muted mb-4">
                    At ovsinnovation we offer wide variety of ecommerce
                    solutions for our clients. Reach out to us for a specific
                    requirement.
                  </p>
                  <ul className="list-unstyled">
                    <li className="mb-2 d-flex">
                      <i className="bi bi-check-circle-fill text-success me-2"></i>
                      <span>CMS-Based Online Store Management</span>
                    </li>
                    <li className="mb-2 d-flex">
                      <i className="bi bi-check-circle-fill text-success me-2"></i>
                      <span>Scalable</span>
                    </li>
                    <li className="mb-2 d-flex">
                      <i className="bi bi-check-circle-fill text-success me-2"></i>
                      <span>Custom solutions</span>
                    </li>
                    <li className="d-flex">
                      <i className="bi bi-check-circle-fill text-success me-2"></i>
                      <span>Client focused</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Work Portfolio Section */}
      <section className="bg-light py-5 py-lg-5">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="h2 mb-3">Our Work Portfolio</h2>
            <p className="lead text-muted">
              See how we've transformed businesses with our digital marketing
              expertise
            </p>
          </div>

          {/* Portfolio Cards */}
          <div className="d-flex overflow-auto pb-4 mb-4 scrollbar-hidden">
            {content.portfolio.map((item) => (
              <div
                key={item.id}
                className="flex-shrink-0 me-4"
                style={{ width: "320px" }}
              >
                <div className="card border-0 shadow-sm h-100">
                  <img
                    src={item.img}
                    className="card-img-top"
                    alt={item.title}
                    style={{ height: "200px", objectFit: "cover" }}
                  />
                  <div className="card-body">
                    <span className="badge bg-primary position-absolute top-0 end-0 m-3">
                      {item.category}
                    </span>
                    <h3 className="h5 card-title">{item.title}</h3>
                    <p className="card-text text-muted small">{item.sm_des}</p>
                    <div className="d-flex flex-wrap gap-2 mb-3">
                      {item.tags.map((tag, idx) => (
                        <span key={idx} className="badge bg-light text-dark">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary btn-sm w-100"
                    >
                      <i className="bi bi-box-arrow-up-right me-2"></i>
                      Visit Website
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Portfolio CTA */}
          <div className="text-center mt-5">
            <div className="bg-primary bg-opacity-10 rounded-3 p-5 border border-primary">
              <h3 className="h2 mb-4">Ready to See Similar Results?</h3>
              <p className="text-muted lead mb-4">
                Let's discuss how we can help your business achieve the same
                level of success. Get a free consultation and custom strategy
                tailored to your needs.
              </p>

              <div className="d-flex flex-wrap justify-content-center gap-3">
                <button
                  onClick={scrollToForm}
                  className="btn btn-primary btn-lg px-4 py-3"
                >
                  <i className="bi bi-chat-dots me-2"></i>
                  Get Free Consultation
                </button>
                <button
                  onClick={handleCall}
                  className="btn btn-success btn-lg px-4 py-3"
                >
                  <i className="bi bi-telephone me-2"></i>
                  Call +91 9667092077
                </button>
              </div>

              <div className="d-flex flex-wrap justify-content-center gap-4 mt-4 text-muted">
                <span className="d-flex align-items-center">
                  <i className="bi bi-check-circle-fill text-success me-2"></i>
                  Free Consultation
                </span>
                <span className="d-flex align-items-center">
                  <i className="bi bi-check-circle-fill text-success me-2"></i>
                  Custom Strategy
                </span>
                <span className="d-flex align-items-center">
                  <i className="bi bi-check-circle-fill text-success me-2"></i>
                  No Commitment
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="bg-light py-5 py-lg-5">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-6">
              <h2 className="h2 mb-4">About OVS Innovation</h2>
              <p className="text-muted mb-4">
                OVS Innovation is a web development and digital marketing
                company based in India, established in November 2018. The
                company specializes in enhancing businesses' online presence
                through comprehensive SEO services, including on-page and
                off-page optimization, technical SEO, keyword research, and
                performance tracking.
              </p>
              <p className="text-muted mb-5">
                Their expertise extends to web development, offering custom
                website solutions, e-commerce platforms, CMS integration, and
                UI/UX design. Additionally, OVS Innovation provides digital
                marketing services such as social media marketing, PPC
                advertising, and content marketing to help businesses grow their
                online reach. With a client-centric approach and a focus on
                innovation, the company aims to deliver effective and customized
                solutions that drive business success in the digital landscape.
              </p>

              <div className="row g-4 mb-4">
                <div className="col-md-6 d-flex">
                  <div className="bg-primary text-white p-3 rounded me-3">
                    <i className="bi bi-check-lg fs-3"></i>
                  </div>
                  <div>
                    <h3 className="h5">Proven Results</h3>
                    <p className="text-muted small mb-0">
                      500+ successful projects and satisfied clients
                    </p>
                  </div>
                </div>

                <div className="col-md-6 d-flex">
                  <div className="bg-success text-white p-3 rounded me-3">
                    <i className="bi bi-people fs-3"></i>
                  </div>
                  <div>
                    <h3 className="h5">Expert Team</h3>
                    <p className="text-muted small mb-0">
                      Certified professionals with industry expertise
                    </p>
                  </div>
                </div>

                <div className="col-md-6 d-flex">
                  <div className="bg-purple text-white p-3 rounded me-3">
                    <i className="bi bi-gear fs-3"></i>
                  </div>
                  <div>
                    <h3 className="h5">Custom Solutions</h3>
                    <p className="text-muted small mb-0">
                      Tailored strategies for your unique needs
                    </p>
                  </div>
                </div>

                <div className="col-md-6 d-flex">
                  <div className="bg-warning text-white p-3 rounded me-3">
                    <i className="bi bi-headset fs-3"></i>
                  </div>
                  <div>
                    <h3 className="h5">24/7 Support</h3>
                    <p className="text-muted small mb-0">
                      Always here when you need us
                    </p>
                  </div>
                </div>
              </div>

              <button className="btn btn-primary btn-lg px-4 py-3">
                <i className="bi bi-info-circle me-2"></i>
                Learn More About Us
              </button>
            </div>

            <div className="col-lg-6">
              <div className="row g-4 mb-4">
                <div className="col-md-6">
                  <div className="card text-center h-100 border-0 shadow-sm">
                    <div className="card-body p-4">
                      <div className="display-4 fw-bold text-primary">120+</div>
                      <div className="text-muted">Happy Clients</div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="card text-center h-100 border-0 shadow-sm">
                    <div className="card-body p-4">
                      <div className="display-4 fw-bold text-success">160+</div>
                      <div className="text-muted">Projects Completed</div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="card text-center h-100 border-0 shadow-sm">
                    <div className="card-body p-4">
                      <div className="display-4 fw-bold text-purple">8+</div>
                      <div className="text-muted">Years Experience</div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="card text-center h-100 border-0 shadow-sm">
                    <div className="card-body p-4">
                      <div className="display-4 fw-bold text-warning">24/7</div>
                      <div className="text-muted">Support Available</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card border-0 shadow-sm">
                <div className="card-body p-4">
                  <div className="text-center">
                    <h3 className="h4 mb-4">Our Expert Team</h3>
                    <p className="text-muted mb-4">
                      Meet our passionate team of digital marketing
                      professionals who are committed to your success.
                    </p>
                    <div className="d-flex justify-content-center gap-3 mb-4">
                      <div
                        className="bg-primary rounded-circle d-flex align-items-center justify-content-center text-white fw-bold fs-4"
                        style={{ width: "64px", height: "64px" }}
                      >
                        O
                      </div>
                      <div
                        className="bg-success rounded-circle d-flex align-items-center justify-content-center text-white fw-bold fs-4"
                        style={{ width: "64px", height: "64px" }}
                      >
                        V
                      </div>
                      <div
                        className="bg-purple rounded-circle d-flex align-items-center justify-content-center text-white fw-bold fs-4"
                        style={{ width: "64px", height: "64px" }}
                      >
                        S
                      </div>
                    </div>
                    <p className="text-muted small mb-0">
                      Dedicated to Your Digital Success
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Testimonials */}
      <section className="bg-light py-5 py-lg-5">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="h2 mb-3">What Our Students Say</h2>
            <p className="lead text-muted">
              Hear from our successful graduates who have transformed their
              careers with our program
            </p>
          </div>

          <div className="row g-4">
            {content.testimonials.map((testimonial, index) => (
              <div key={index} className="col-md-4">
                <div className="card h-100 border-0 shadow-sm">
                  <div className="card-body p-4">
                    <p className="text-muted fst-italic mb-4">
                      "{testimonial.testimonial}"
                    </p>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="d-flex align-items-center">
                        <div
                          className="bg-primary rounded-circle d-flex align-items-center justify-content-center text-white fw-bold fs-5 me-3"
                          style={{ width: "48px", height: "48px" }}
                        >
                          {testimonial.name.charAt(0)}
                        </div>
                        <div>
                          <h5 className="mb-0">{testimonial.name}</h5>
                          <p className="text-muted small mb-0">
                            {testimonial.city}
                          </p>
                        </div>
                      </div>
                      <div>
                        {[...Array(5)].map((_, i) => (
                          <i
                            key={i}
                            className="bi bi-star-fill text-warning"
                          ></i>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Toast Notifications */}
      <Toaster />
    </div>
  );
}
