"use client";
import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";

const categoryButtonVariants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: index * 0.1,
      duration: 0.4,
      ease: "easeOut" as const,
    },
  }),
};

// Variants para productos con scroll
const productCardVariants = {
  hidden: {
    opacity: 0,
    y: 30,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut" as const,
    },
  },
};

// Variants para la sección de newsletter
const newsletterVariants = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut" as const,
    },
  },
};

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const formRef = useRef(null);
  const mapRef = useRef(null);
  const questionRef = useRef(null);
  const touchRef = useRef(null);

  const formInView = useInView(formRef, { once: true, amount: 0.3 });
  const mapInView = useInView(mapRef, { once: true, amount: 0.1 });
  const questionInView = useInView(questionRef, {
    once: true,
    amount: 0.3,
  });

  const touchInView = useInView(touchRef, {
    once: true,
    amount: 0.3,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setFormData({ name: "", email: "", subject: "", message: "" });
    alert("Thank you for your message! We'll get back to you soon.");
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-white">
      <section className="relative h-96 bg-gray-900 flex items-center justify-center">
        <div className="absolute inset-0 bg-black/40"></div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center text-white"
        >
          <h1 className="text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Get in touch with our team for any questions or assistance
          </p>
        </motion.div>
      </section>

      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-8 text-black">
                Send us a Message
              </h2>
              <motion.form
               ref={formRef}
            initial="hidden"
            animate={formInView ? "visible" : "hidden"}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.15,
                },
              },
            }}
              onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                  >
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent placeholder:text-gray-500 text-black"
                      placeholder="Your full name"
                    />
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                  >
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent placeholder:text-gray-500 text-black"
                      placeholder="your.email@example.com"
                    />
                  </motion.div>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent  text-gray-500"
                  >
                    <option value=" ">Select a subject</option>
                    <option value="general">General Inquiry</option>
                    <option value="product">Product Information</option>
                    <option value="order">Order Support</option>
                    <option value="custom">Custom Design</option>
                    <option value="warranty">Warranty Claim</option>
                  </select>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent resize-vertical
                    placeholder:text-gray-500"
                    placeholder="Tell us how we can help you..."
                  />
                </motion.div>

                <motion.button
                  variants={categoryButtonVariants}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  className="w-full bg-black text-white py-3 px-6 rounded-lg hover:bg-gris-secondary cursor-pointer transition-colors duration-300 font-medium"
                >
                  Send Message
                </motion.button>
              </motion.form>
            </div>

            <motion.div   ref={touchRef}
            initial="hidden"
            animate={touchInView ? "visible" : "hidden"}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.15,
                },
              },
            }}>
              <h2 className="text-3xl font-bold mb-8 text-black">
                Get in Touch
              </h2>
              <div className="space-y-8">
                <ContactInfo
                  icon="📍"
                  title="Visit Our Showroom"
                  details={[
                    "123 Furniture Street",
                    "Design District, NY 10001",
                    "United States",
                  ]}
                />

                <ContactInfo
                  icon="📞"
                  title="Call Us"
                  details={[
                    "Phone: +1 (555) 123-4567",
                    "Toll Free: 1-800-FURNITURE",
                    "Mon-Fri: 9AM-6PM EST",
                  ]}
                />

                <ContactInfo
                  icon="✉️"
                  title="Email Us"
                  details={[
                    "info@furniture.com",
                    "support@furniture.com",
                    "custom@furniture.com",
                  ]}
                />

                <ContactInfo
                  icon="🕒"
                  title="Business Hours"
                  details={[
                    "Monday - Friday: 9:00 AM - 6:00 PM",
                    "Saturday: 10:00 AM - 4:00 PM",
                    "Sunday: Closed",
                  ]}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="bg-gris-secondary py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">
            Find Our Showroom
          </h2>
          <div className="bg-gris-primary h-96 rounded-lg flex items-center justify-center">
            <div className="text-center text-gray-600">
              <div className="text-4xl mb-4">🗺️</div>
              <p className="text-lg">Interactive Map</p>
              <p className="text-sm">Map integration would go here</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-black">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            <FAQItem
              question="What is your return policy?"
              answer="We offer a 30-day return policy for all furniture items in original condition. Custom pieces are non-returnable unless there's a manufacturing defect."
            />
            <FAQItem
              question="Do you offer delivery and assembly?"
              answer="Yes, we provide white-glove delivery and assembly services for all furniture purchases. Delivery fees vary based on location and item size."
            />
            <FAQItem
              question="Can I customize existing designs?"
              answer="Absolutely! We offer customization options for most of our furniture pieces, including fabric choices, finishes, and dimensions."
            />
            <FAQItem
              question="What materials do you use?"
              answer="We use sustainably sourced hardwoods, premium fabrics, and eco-friendly finishes. All materials meet our high quality and environmental standards."
            />
          </div>
        </div>
      </section>
    </div>
  );
}

function ContactInfo({
  icon,
  title,
  details,
}: {
  icon: string;
  title: string;
  details: string[];
}) {
  return (
    <div className="flex items-start space-x-4">
      <div className="text-2xl">{icon}</div>
      <div>
        <h3 className="font-bold text-lg mb-2 text-black">{title}</h3>
        <div className="space-y-1 text-gray-600">
          {details.map((detail, index) => (
            <p key={index}>{detail}</p>
          ))}
        </div>
      </div>
    </div>
  );
}

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-gray-200 rounded-lg">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-4 text-black text-left flex justify-between items-center hover:bg-gray-300 transition-colors duration-200 bg-grey-50 cursor-pointer"
      >
        <span className="font-medium">{question}</span>
        <span
          className={`transform transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        >
          ▼
        </span>
      </button>
      {isOpen && (
        <div className={`px-6 pb-4 text-gris-primary leading-relaxed `}>
          {answer}
        </div>
      )}
    </div>
  );
}
