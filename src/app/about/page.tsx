"use client";
import Image from "next/image";
import { TeamMember } from "@/lib/definitions";
import AboutStory from "@/components/about/AboutStory";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";


const teamMembers: TeamMember[] = [
  {
    name: "Sarah Johnson",
    role: "Founder & Creative Director",
    image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg",
    bio: "With over 15 years in furniture design, Sarah leads our creative vision and ensures every piece meets our high standards.",
  },
  {
    name: "Michael Chen",
    role: "Head of Manufacturing",
    image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg",
    bio: "Michael oversees our production process, ensuring quality craftsmanship in every piece we create.",
  },
  {
    name: "Emma Rodriguez",
    role: "Sustainability Manager",
    image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg",
    bio: "Emma leads our commitment to sustainable practices and eco-friendly materials in all our furniture lines.",
  },
];

function ValueCardAnimated({
  title,
  description,
  icon,
  index,
}: {
  title: string;
  description: string;
  icon: string;
  index: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ 
        duration: 0.6, 
        delay: index * 0.2,
        ease: "easeOut" 
      }}
      className="text-center p-6"
    >
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-4 text-black">{title}</h3>
      <p className="text-gris-secondary leading-relaxed">{description}</p>
    </motion.div>
  );
}

// Componente para animaciones de equipo
function TeamCardAnimated({ member, index }: { member: TeamMember; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
      transition={{ 
        duration: 0.5, 
        delay: index * 0.1,
        ease: "easeOut" 
      }}
      className="text-center"
    >
      <div className="relative mb-4">
        <Image
          src={member.image}
          alt={member.name}
          width={300}
          height={300}
          className="w-full h-80 object-cover rounded-lg"
        />
      </div>
      <h3 className="text-xl font-bold mb-2 text-black">{member.name}</h3>
      <p className="text-gris-primary font-medium mb-3">{member.role}</p>
      <p className="text-gris-primary text-sm leading-relaxed">{member.bio}</p>
    </motion.div>
  );
}

// Componente para estadísticas animadas
function StatsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const stats = [
    { number: "30+", label: "Years of Experience" },
    { number: "10,000+", label: "Happy Customers" },
    { number: "500+", label: "Unique Designs" },
    { number: "50+", label: "Countries Served" },
  ];

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: 0.1,
          },
        },
      }}
      className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
    >
      {stats.map((stat, index) => (
        <motion.div
          key={index}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-4xl font-bold mb-2">{stat.number}</div>
          <div className="text-gris-primary">{stat.label}</div>
        </motion.div>
      ))}
    </motion.div>
  );
}

export default function About() {
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
          <h1 className="text-5xl font-bold mb-4">About Us</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Crafting exceptional furniture for over three decades
          </p>
        </motion.div>
      </section>

      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <motion.h2
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6 }}
                className="text-4xl font-bold mb-6 text-black"
              >
                Our Story
              </motion.h2>
              <AboutStory />
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <Image
                src="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg"
                alt="Our workshop"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-center mb-12 text-black"
          >
            Our Values
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ValueCardAnimated
              title="Quality Craftsmanship"
              description="Every piece is meticulously crafted by skilled artisans using traditional techniques combined with modern precision."
              icon="🔨"
              index={0}
            />
            <ValueCardAnimated
              title="Sustainable Materials"
              description="We source responsibly harvested wood and eco-friendly materials to minimize our environmental impact."
              icon="🌱"
              index={1}
            />
            <ValueCardAnimated
              title="Timeless Design"
              description="Our designs transcend trends, creating pieces that remain beautiful and relevant for generations."
              icon="✨"
              index={2}
            />
          </div>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-center mb-12 text-black"
          >
            Meet Our Team
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <TeamCardAnimated key={index} member={member} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-black text-white py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <StatsSection />
        </div>
      </section>
    </div>
  );
}