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
        ctaText="Story"
        ctaLink="#our-story"
        secondaryCtaText="Values"
        secondaryCtaLink="#our-values"
        tertiaryCtaText="Team"
        tertiaryCtaLink="#team"
      />      
      <Section
        title="Our Story"
        align="left"
        id="our-story"
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
                { type: 'linkedin', url: 'https://www.linkedin.com/in/shehriyar-nasri/' }
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
            imageUrl="data:image/jpeg;base64,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"
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
            imageUrl="https://media.licdn.com/dms/image/v2/D4E03AQHwNCcF7x0nfA/profile-displayphoto-shrink_800_800/B4EZOYVjIHHkAo-/0/1733427606494?e=1755734400&v=beta&t=sneQ--c2e5DO2IZBKd2Pz5NuMXbyzGNb34IOIPoxdSk"
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
    <section className="py-16 md:py-24 bg-neutral-50" id="our-values">
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