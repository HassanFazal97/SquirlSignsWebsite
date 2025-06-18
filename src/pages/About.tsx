import { Activity, Heart, ShieldCheck, Lightbulb } from 'lucide-react';
import Section from '../components/Section';
import TeamMember from '../components/TeamMember';
import Hero from '../components/Hero';

const About = () => {
  return (
    <div>
      <Hero 
        title="About Squirl Signs"
        subtitle="Learn about us and what drives us to innovate and break barriers."
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
              Squirl Signs began with a simple observation: despite living in a world filled with smart
              technology, communication remains a daily barrier for millions in the Deaf community. As
              students and young professionals, we saw firsthand how inaccessible everyday services like visiting the doctor, applying for a job, or even ordering coffee could be for sign language users.
              We realized that these challenges weren’t due to a lack of intelligence or capability, but a lack of
              inclusive design. 
            </p>
            <p className="text-lg text-neutral-700 mb-6">
              What started as a small idea quickly became a mission. We teamed up with members of the
              Deaf and hard-of-hearing community, accessibility advocates, and tech developers to explore
              how AI could help bridge the gap. Instead of relying on interpreters or written notes, we
              envisioned a world where Deaf individuals could communicate naturally through sign language
              and be instantly understood.
            </p>
            <p className="text-lg text-neutral-700">
              Squirl ASL is more than a product. It’s a response to years of exclusion, a belief that
              accessibility should be embedded into the foundation of every system, not treated as an
              afterthought. Our journey is still unfolding, but every step is guided by a deep commitment to
              equity, innovation, and respect for the communities we serve.
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
        subtitle="The people behind Squirl Signs"
        id="team"
      >
        {/* CEO/Founder centered above the rest */}
        <div className="flex justify-center mb-12">
          <div style={{maxWidth: '340px', width: '100%'}}>
            <TeamMember 
              name="Shehriyar Nasri"
              role="CEO / Founder"
              bio=""
              imageUrl="/Shehriyar.jpg"
              socialLinks={[
                { type: 'linkedin', url: 'https://www.linkedin.com/in/shehriyar-nasri/' },
                { type: 'twitter', url: 'https://twitter.com' },
              ]}
            />
          </div>
        </div>
        {/* Rest of the team in a grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center items-start mx-auto" style={{maxWidth: '1000px'}}>
          <TeamMember 
            name="Fiona Hanasavha"
            role="Head of Research"
            bio=""
            imageUrl="/Fiona.jpg"
            socialLinks={[
              { type: 'linkedin', url: 'https://www.linkedin.com/company/squirl-signs/' },
            ]}
          />
          <TeamMember 
            name="Luna Alkabra"
            role="Head of Growth and Strategy"
            bio=""
            imageUrl="/luna.jpg"
            socialLinks={[
              { type: 'linkedin', url: 'https://www.linkedin.com/in/luna-alkabra/' },
            ]}
          />
          <TeamMember 
            name="Arooba Baig"
            role="Head of Marketing"
            bio=""
            imageUrl="/Arooba.jpg"
            socialLinks={[
              { type: 'linkedin', url: 'https://www.linkedin.com/in/arooba-baig-665723215/' },
            ]}
          />
          <TeamMember 
            name="Ekaf Eman"
            role="Lead ML Engineer"
            bio=""
            imageUrl="/Ekaf.jpg"
            socialLinks={[
              { type: 'linkedin', url: 'https://www.linkedin.com/company/squirl-signs/' },
            ]}
          />
          <TeamMember 
            name="Shubhkarman Pruthi"
            role="Frontend Developer"
            bio=""
            imageUrl="/shubh.jpg"
            socialLinks={[
              { type: 'linkedin', url: 'https://www.linkedin.com/in/shubh-pruthi/' },
            ]}
          />
          <TeamMember 
            name="Fazal Hassan"
            role="Ux Designer/ Backend Developer"
            bio=""
            imageUrl="/Fazal.jpg"
            socialLinks={[
              { type: 'linkedin', url: 'https://www.linkedin.com/in/fazal-hassan/' },
            ]}
          />
          <TeamMember 
            name="Rima Aboal Way"
            role="Strategic Operations Associate"
            bio=""
            imageUrl="/NewMember3.jpg"
            socialLinks={[
              { type: 'linkedin', url: 'https://www.linkedin.com/in/rima-aboal-way-100085224/?originalSubdomain=ca' },
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
      description: "We are committed to designing technology that is inclusive and usable by all individuals, regardless of ability. Accessibility is at the heart of every decision we make."
    },
    {
      icon: <ShieldCheck className="w-7 h-7" />,
      title: "Trust",
      description: "Our technology is built on a foundation of transparency, data privacy, and meaningful community collaboration to earn and maintain trust."
    },
    {
      icon: <Activity className="w-7 h-7" />,
      title: "Innovation",
      description: "We continuously explore what’s possible, using AI and sign language translation to redefine how people communicate across barriers."
    },
    {
      icon: <Lightbulb className="w-7 h-7" />,
      title: "Empathy",
      description: "We lead with empathy. We listen deeply to the communities we serve to create solutions that reflect real needs and lived experiences."
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