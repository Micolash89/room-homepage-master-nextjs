import Image from "next/image";
import Header from "@/components/Header";
import { TeamMember } from "@/lib/definitions";

const teamMembers: TeamMember[] = [
  {
    name: "Sarah Johnson",
    role: "Founder & Creative Director",
    image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg",
    bio: "With over 15 years in furniture design, Sarah leads our creative vision and ensures every piece meets our high standards."
  },
  {
    name: "Michael Chen",
    role: "Head of Manufacturing",
    image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg",
    bio: "Michael oversees our production process, ensuring quality craftsmanship in every piece we create."
  },
  {
    name: "Emma Rodriguez",
    role: "Sustainability Manager",
    image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg",
    bio: "Emma leads our commitment to sustainable practices and eco-friendly materials in all our furniture lines."
  }
];

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-96 bg-gray-900 flex items-center justify-center">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 text-center text-white">
          <h1 className="text-5xl font-bold mb-4">About Us</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Crafting exceptional furniture for over three decades
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Founded in 1990, our furniture company began as a small workshop with a simple mission: 
                  to create beautiful, functional furniture that enhances people{"'"}s lives. What started as 
                  a passion project has grown into a trusted name in premium furniture design.
                </p>
                <p>
                  We believe that furniture is more than just functional objects – they{"'"}re the foundation 
                  of memories, the backdrop to life{"'"}s most important moments. Every piece we create is 
                  designed with this philosophy in mind, combining timeless aesthetics with modern functionality.
                </p>
                <p>
                  Today, we continue to honor our founding principles while embracing innovation and 
                  sustainability. Our commitment to quality craftsmanship and customer satisfaction 
                  remains unwavering as we look toward the future.
                </p>
              </div>
            </div>
            <div className="relative">
              <Image
                src="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg"
                alt="Our workshop"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-gray-50 py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ValueCard
              title="Quality Craftsmanship"
              description="Every piece is meticulously crafted by skilled artisans using traditional techniques combined with modern precision."
              icon="🔨"
            />
            <ValueCard
              title="Sustainable Materials"
              description="We source responsibly harvested wood and eco-friendly materials to minimize our environmental impact."
              icon="🌱"
            />
            <ValueCard
              title="Timeless Design"
              description="Our designs transcend trends, creating pieces that remain beautiful and relevant for generations."
              icon="✨"
            />
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <TeamCard key={index} member={member} />
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-black text-white py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <StatCard number="30+" label="Years of Experience" />
            <StatCard number="10,000+" label="Happy Customers" />
            <StatCard number="500+" label="Unique Designs" />
            <StatCard number="50+" label="Countries Served" />
          </div>
        </div>
      </section>
    </div>
  );
}

function ValueCard({ title, description, icon }: { title: string; description: string; icon: string }) {
  return (
    <div className="text-center p-6">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-4">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
}

function TeamCard({ member }: { member: TeamMember }) {
  return (
    <div className="text-center">
      <div className="relative mb-4">
        <Image
          src={member.image}
          alt={member.name}
          width={300}
          height={300}
          className="w-full h-80 object-cover rounded-lg"
        />
      </div>
      <h3 className="text-xl font-bold mb-2">{member.name}</h3>
      <p className="text-gray-600 font-medium mb-3">{member.role}</p>
      <p className="text-gray-600 text-sm leading-relaxed">{member.bio}</p>
    </div>
  );
}

function StatCard({ number, label }: { number: string; label: string }) {
  return (
    <div>
      <div className="text-4xl font-bold mb-2">{number}</div>
      <div className="text-gray-300">{label}</div>
    </div>
  );
}