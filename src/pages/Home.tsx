import { HandHelping, Lightbulb, Users } from 'lucide-react';
import Hero from '../components/Hero';
import Section from '../components/Section';

const Home = () => {
  return (
    <div>
      
      <Hero 
        title="Breaking Communication Barriers with AI-Powered ASL Translation"
        subtitle="Squirl Signs uses cutting-edge AI technology to translate American Sign Language in real-time, creating a more inclusive and accessible world for everyone."
        ctaText="Register for Early Access"
        ctaLink="/register"
        showImage={true}
      />
      
      <Section
        title="Our Mission"
        subtitle="At Squirl Signs, we are using advanced machine learning and AI to bridge the communication gap for deaf individuals."
        align="center"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
          <MissionCard 
            icon={<HandHelping className="w-6 h-6" />}
            title="Accessibility"
            content="We are committed to making communication truly inclusive. Our technology removes barriers by enabling seamless interaction between Deaf signers and non-signers across all industries."
          />
          <MissionCard 
            icon={<Lightbulb className="w-6 h-6" />}
            title="Innovation"
            content="We harness the power of AI to redefine accessibility. Through ongoing research and development, we’re building cutting-edge tools for real-time sign language interpretation."
          />
          <MissionCard 
            icon={<Users className="w-6 h-6" />}
            title="Community"
            content="Our work is guided by those it serves. We collaborate closely with the Deaf community to ensure our solutions are practical, respectful, and rooted in lived experience."
          />
        </div>
      </Section>
      
      <VideoSection />
      
      <TestimonialSection />
      
      <CallToAction />
    </div>
  );
};

// Helper components
const MissionCard = ({ icon, title, content }: { icon: React.ReactNode; title: string; content: string }) => (
  <div className="bg-white p-8 rounded-lg shadow-sm border border-neutral-100">
    <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary-100 text-primary-600 mb-5">
      {icon}
    </div>
    <h3 className="text-xl font-semibold text-neutral-900 mb-3">{title}</h3>
    <p className="text-neutral-600">{content}</p>
  </div>
);

const VideoSection = () => (
  <section className="py-16 md:py-24 bg-neutral-50">
    <div className="container mx-auto px-4 md:px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-6">See Squirl Signs in Action</h2>
        <p className="text-lg text-neutral-600 mb-10">
          Watch how our technology translates ASL in real-time, making communication seamless and accessible.
        </p>
      </div>
      
      <div className="max-w-5xl mx-auto bg-neutral-900 rounded-xl overflow-hidden shadow-xl" style={{ aspectRatio: '1538/1078' }}>
        <video className="w-full h-full" controls>
          <source src="/squirl-demo.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  </section>
);

const TestimonialSection = () => (
  <section className="py-16 md:py-24">
    <div className="container mx-auto px-4 md:px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-6">What People Are Saying</h2>
        <p className="text-lg text-neutral-600 mb-12">
          See what those impacted by our technology have to say.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <Testimonial 
          content="This technology has the potential in order to promote communication. It would enable me to communicate with hearing people in my community without constantly using texting or interpreters"
          author="Yi Tjuhanda"
          role="Student, University of Toronto"
        />
        <Testimonial 
          content="AI-driven audio-to-sign translation would be an absolute game changer because real-time information is often inaccessible to Deaf people. Right now, they rely on text, but English isn’t their first language—it’s not the best solution for many of them."
          author="Dr. Nathan Sanders"
          role="Professor, University of Toronto"
        />
        <Testimonial 
          content="Things that are helpful are helpful... It would be great if there was a solution. For groceries, train, the bank, and more, this may be well-embraced"
          author="Kelly MacKenzie"
          role="Executive Director, Silent Voice Canada"
        />
      </div>
    </div>
  </section>
);

const Testimonial = ({ content, author, role }: { content: string; author: string; role: string }) => (
  <div className="bg-white p-8 rounded-lg shadow-sm border border-neutral-100">
    <div className="mb-4 text-primary-600">
      {/* Quote icon */}
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9.33333 17.3333C10.0667 17.3333 10.6667 17.6 11.1333 18.1333C11.6 18.6 11.8667 19.2 11.8667 19.9333C11.8667 20.6667 11.6 21.2667 11.1333 21.7333C10.6667 22.2 10.0667 22.4667 9.33333 22.4667C8.13333 22.4667 7.13333 21.9333 6.4 20.8667C5.66667 19.8 5.33333 18.4667 5.33333 16.8667C5.33333 15.2 6 13.4 7.33333 11.4667C8.66667 9.53333 10.4 8 12.5333 6.93333L14.1333 9.33333C12.8 10 11.7333 10.8667 10.9333 11.8667C10.1333 12.8667 9.73333 13.8 9.73333 14.6667C9.73333 15 9.86667 15.3333 10.1333 15.6667C10.4 16 10.6667 16.4 10.9333 16.8C10.4 16.8667 9.86667 17 9.33333 17.3333ZM20.6667 17.3333C21.4 17.3333 22 17.6 22.4667 18.1333C22.9333 18.6 23.2 19.2 23.2 19.9333C23.2 20.6667 22.9333 21.2667 22.4667 21.7333C22 22.2 21.4 22.4667 20.6667 22.4667C19.4667 22.4667 18.4667 21.9333 17.7333 20.8667C17 19.8 16.6667 18.4667 16.6667 16.8667C16.6667 15.2 17.3333 13.4 18.6667 11.4667C20 9.53333 21.7333 8 23.8667 6.93333L25.4667 9.33333C24.1333 10 23.0667 10.8667 22.2667 11.8667C21.4667 12.8667 21.0667 13.8 21.0667 14.6667C21.0667 15 21.2 15.3333 21.4667 15.6667C21.7333 16 22 16.4 22.2667 16.8C21.7333 16.8667 21.2 17 20.6667 17.3333Z" fill="currentColor"/>
      </svg>
    </div>
    <p className="text-neutral-700 mb-6 italic">{content}</p>
    <div>
      <p className="font-semibold text-neutral-900">{author}</p>
      <p className="text-neutral-500 text-sm">{role}</p>
    </div>
  </div>
);

const CallToAction = () => (
  <section className="py-16 md:py-24 bg-primary-600 text-white">
    <div className="container mx-auto px-4 md:px-6 text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-6">Want to get involved?</h2>
      <p className="text-lg text-primary-100 mb-10 max-w-3xl mx-auto">
        Join us in our mission to create a more inclusive world where everyone can communicate freely, regardless of hearing ability.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <a href="/contact" className="inline-block bg-white text-[#641584] font-semibold py-3 px-6 rounded-lg shadow hover:bg-purple-100 border border-[#641584] transition-colors">
          Contact Us
        </a>
        <a href="/register" className="inline-block bg-[#641584] text-white font-semibold border border-[#641584] py-3 px-6 rounded-lg hover:bg-[#4a1062] transition-colors">
          Register for Early Access
        </a>
      </div>
    </div>
  </section>
);

export default Home;