import { Activity, Heart, ShieldCheck, Lightbulb } from 'lucide-react';
import Section from '../components/Section';
import TeamMember from '../components/TeamMember';
import Hero from '../components/Hero';

const About = () => {
  return (
    <div>
      <Hero 
        title="About Squirl Signs"
        subtitle="Learn about our mission, team, and the values that drive us to create innovative ASL translation technology."
        ctaText="Meet Our Team"
        ctaLink="#team"
      />
      
      <Section
        title="Our Story"
        align="left"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg text-neutral-700 mb-6">
              Squirl Signs began with a simple yet powerful mission: to bridge communication gaps using advanced AI technologies. Our journey started with the vision of making American Sign Language accessible to everyone.
            </p>
            <p className="text-lg text-neutral-700 mb-6">
              Through dedication and innovation, we've developed cutting-edge AI technology that can accurately translate ASL in real-time, breaking down barriers between deaf and hearing communities.
            </p>
            <p className="text-lg text-neutral-700">
              Today, we're a diverse team of engineers, researchers, and marketing professionals working together to create a more inclusive world where communication knows no bounds.
            </p>
          </div>
          <div className="rounded-xl overflow-hidden shadow-lg">
            <img 
              src="https://images.pexels.com/photos/7516363/pexels-photo-7516363.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
              alt="Squirl Signs team collaborating" 
              className="w-full h-auto"
            />
          </div>
        </div>
      </Section>
      
      <ValuesSection />
      
      <Section
        title="Meet Our Team"
        subtitle="The passionate people behind Squirl Signs"
        id="team"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <TeamMember 
            name="Shehriyar Nasri"
            role="Project Director"
            bio="Leading our vision and strategy to create innovative ASL translation solutions."
            imageUrl="/Shehriyar.jpg"
            socialLinks={[
              { type: 'linkedin', url: 'https://www.linkedin.com/company/squirl-signs/' },
              { type: 'twitter', url: 'https://twitter.com' },
            ]}
          />
          <TeamMember 
            name="Pranshu Sharma"
            role="VP Engineering"
            bio="Overseeing the development of our core AI translation technology."
            imageUrl="/Pranshu.jpg"
            socialLinks={[
              { type: 'linkedin', url: 'https://www.linkedin.com/company/squirl-signs/' },
              { type: 'twitter', url: 'https://twitter.com' },
            ]}
          />
          <TeamMember 
            name="Arooba Baig"
            role="VP Marketing"
            bio="Leading our marketing initiatives and community engagement efforts."
            imageUrl="/Arooba.jpg"
            socialLinks={[
              { type: 'linkedin', url: 'https://www.linkedin.com/company/squirl-signs/' },
              { type: 'twitter', url: 'https://twitter.com' },
            ]}
          />
          <TeamMember 
            name="Fiona"
            role="VP Research"
            bio="Driving innovation in ASL translation technology through research and development."
            imageUrl="/Fiona.jpg"
            socialLinks={[
              { type: 'linkedin', url: 'https://www.linkedin.com/company/squirl-signs/' },
              { type: 'twitter', url: 'https://twitter.com' },
            ]}
          />
          <TeamMember 
            name="Fredrick Pu"
            role="ML Engineer"
            bio="Developing advanced machine learning models for ASL translation."
            imageUrl="/freddy.jpg"
            socialLinks={[
              { type: 'linkedin', url: 'https://www.linkedin.com/company/squirl-signs/' },
              { type: 'twitter', url: 'https://twitter.com' },
            ]}
          />
          <TeamMember 
            name="Fazal Hassan"
            role="Software Developer"
            bio="Building robust and scalable solutions for our translation platform."
            imageUrl="/Fazal.jpg"
            socialLinks={[
              { type: 'linkedin', url: 'https://www.linkedin.com/company/squirl-signs/' },
              { type: 'twitter', url: 'https://twitter.com' },
            ]}
          />
          <TeamMember 
            name="New Member 1"
            role="UX Designer"
            bio="Creating intuitive and user-friendly designs for our platform."
            imageUrl="/NewMember1.jpg"
            socialLinks={[
              { type: 'linkedin', url: 'https://www.linkedin.com/company/squirl-signs/' },
              { type: 'twitter', url: 'https://twitter.com' },
            ]}
          />
          <TeamMember 
            name="New Member 2"
            role="Data Scientist"
            bio="Analyzing data to improve our AI models and translation accuracy."
            imageUrl="/NewMember2.jpg"
            socialLinks={[
              { type: 'linkedin', url: 'https://www.linkedin.com/company/squirl-signs/' },
              { type: 'twitter', url: 'https://twitter.com' },
            ]}
          />
          <TeamMember 
            name="New Member 3"
            role="Community Manager"
            bio="Engaging with our community to gather feedback and build relationships."
            imageUrl="/NewMember3.jpg"
            socialLinks={[
              { type: 'linkedin', url: 'https://www.linkedin.com/company/squirl-signs/' },
              { type: 'twitter', url: 'https://twitter.com' },
            ]}
          />
        </div>
      </Section>
      
      <JoinUsSection />
    </div>
  );
};

// Helper components
const ValuesSection = () => {
  const values = [
    {
      icon: <Heart className="w-7 h-7" />,
      title: "Accessibility",
      description: "We believe technology should be accessible to everyone, regardless of ability. This core value drives every decision we make."
    },
    {
      icon: <ShieldCheck className="w-7 h-7" />,
      title: "Trust",
      description: "We build trustworthy technology through transparency, privacy protection, and ongoing engagement with the community we serve."
    },
    {
      icon: <Activity className="w-7 h-7" />,
      title: "Innovation",
      description: "We're constantly pushing the boundaries of what's possible with AI and sign language translation technology."
    },
    {
      icon: <Lightbulb className="w-7 h-7" />,
      title: "Empathy",
      description: "We approach our work with deep empathy for the communities we serve, ensuring our solutions address real human needs."
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-neutral-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">Our Values</h2>
          <p className="text-lg text-neutral-600">
            These core principles guide our mission and shape every aspect of our work.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-sm border border-neutral-100 text-center">
              <div className="w-14 h-14 flex items-center justify-center rounded-full bg-primary-100 text-primary-600 mx-auto mb-5">
                {value.icon}
              </div>
              <h3 className="text-xl font-semibold text-neutral-900 mb-3">{value.title}</h3>
              <p className="text-neutral-600">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const JoinUsSection = () => (
  <section className="py-16 md:py-24 bg-primary-600 text-white">
    <div className="container mx-auto px-4 md:px-6 text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Our Mission</h2>
      <p className="text-lg text-primary-100 mb-10 max-w-3xl mx-auto">
        We're always looking for passionate individuals who share our vision of creating a more accessible and inclusive world.
      </p>
      <a 
        href="/contact" 
        className="inline-flex items-center justify-center px-6 py-3 bg-white text-primary-600 font-medium rounded-md hover:bg-neutral-100 transition"
      >
        Get in Touch
      </a>
    </div>
  </section>
);

export default About;