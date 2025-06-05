import { Brain, Users, BookOpen, Globe, Lightbulb } from 'lucide-react';
import Section from '../components/Section';
import ServiceCard from '../components/ServiceCard';
import Hero from '../components/Hero';

const Services = () => {
  return (
    <div>
      <Hero 
        title="What We Do"
        subtitle="Discover how our AI-powered technology is breaking communication barriers and creating a more inclusive world."
        ctaText="Contact Us"
        ctaLink="/contact"
        showFeatures={false}
      />
      
      <Section
        title="Our Services"
        subtitle="Innovative solutions powered by AI"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ServiceCard 
            title="Real-time ASL Translation"
            description="Our core technology converts American Sign Language to text instantly, enabling seamless communication between deaf and hearing individuals."
            icon={<img src="/squirl-logo.png" alt="SquirlSigns Logo" className="w-6 h-6" />}
            imageUrl="https://images.pexels.com/photos/7516362/pexels-photo-7516362.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          />
          <ServiceCard 
            title="AI Learning Platform"
            description="An educational tool that helps people learn ASL through interactive exercises and real-time feedback on signing technique."
            icon={<Brain className="w-6 h-6" />}
            imageUrl="https://images.pexels.com/photos/3755755/pexels-photo-3755755.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          />
          <ServiceCard 
            title="Community Building"
            description="We facilitate connections between deaf and hearing communities through events, workshops, and digital platforms."
            icon={<Users className="w-6 h-6" />}
            imageUrl="https://images.pexels.com/photos/7516378/pexels-photo-7516378.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          />
          <ServiceCard 
            title="Educational Resources"
            description="Comprehensive learning materials for organizations looking to improve accessibility and inclusion."
            icon={<BookOpen className="w-6 h-6" />}
            imageUrl="https://images.pexels.com/photos/7516377/pexels-photo-7516377.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          />
          <ServiceCard 
            title="Accessibility Consulting"
            description="Expert guidance on implementing inclusive communication practices in workplaces and educational institutions."
            icon={<Globe className="w-6 h-6" />}
            imageUrl="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          />
          <ServiceCard 
            title="Custom Solutions"
            description="Tailored implementations of our technology for specific organizational needs and environments."
            icon={<Lightbulb className="w-6 h-6" />}
            imageUrl="https://images.pexels.com/photos/7516400/pexels-photo-7516400.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          />
        </div>
      </Section>
      
      <HowItWorksSection />
      
      <UseCasesSection />
      
      <FaqSection />
    </div>
  );
};

// Helper components
const HowItWorksSection = () => {
  const steps = [
    {
      number: "01",
      title: "Capture",
      description: "Our AI camera captures sign language gestures with high precision, even in varying lighting conditions."
    },
    {
      number: "02",
      title: "Analyze",
      description: "Advanced computer vision algorithms track hand movements, facial expressions, and body language."
    },
    {
      number: "03",
      title: "Process",
      description: "Our neural network processes the visual data and interprets the meaning based on context."
    },
    {
      number: "04",
      title: "Translate",
      description: "The interpreted signs are converted to text or speech in real-time, enabling seamless communication."
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-neutral-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">How It Works</h2>
          <p className="text-lg text-neutral-600">
            Our technology combines advanced computer vision with machine learning to deliver accurate, real-time ASL translation.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="text-5xl font-bold text-primary-100 mb-4">{step.number}</div>
              <h3 className="text-xl font-semibold text-neutral-900 mb-3">{step.title}</h3>
              <p className="text-neutral-600">{step.description}</p>
              
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-primary-100 -ml-4" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const UseCasesSection = () => {
  const useCases = [
    {
      title: "Educational Settings",
      description: "Enabling deaf students to participate fully in classroom discussions and activities."
    },
    {
      title: "Workplace Communication",
      description: "Facilitating seamless collaboration between deaf and hearing colleagues in professional environments."
    },
    {
      title: "Public Services",
      description: "Improving accessibility at government offices, healthcare facilities, and other public institutions."
    },
    {
      title: "Social Interactions",
      description: "Breaking down barriers in social settings, allowing for more inclusive gatherings and events."
    },
    {
      title: "Remote Communication",
      description: "Enabling effective virtual meetings and calls between deaf and hearing participants."
    },
    {
      title: "Travel & Tourism",
      description: "Assisting deaf travelers in navigating new environments and communicating with locals."
    },
  ];

  return (
    <Section
      title="Use Cases"
      subtitle="How our technology is making a difference"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {useCases.map((useCase, index) => (
          <div key={index} className="bg-white p-8 rounded-lg shadow-sm border border-neutral-100">
            <h3 className="text-xl font-semibold text-neutral-900 mb-3">{useCase.title}</h3>
            <p className="text-neutral-600">{useCase.description}</p>
          </div>
        ))}
      </div>
    </Section>
  );
};

const FaqSection = () => {
  const faqs = [
    {
      question: "How accurate is the ASL translation?",
      answer: "Our AI achieves over 95% accuracy for common signs and phrases, with continual improvements through machine learning. Accuracy can vary based on signing style, lighting conditions, and the complexity of the signed content."
    },
    {
      question: "What devices are compatible with SquirlSigns?",
      answer: "SquirlSigns works on most modern smartphones, tablets, and computers with cameras. We support iOS, Android, Windows, and macOS through our apps and web interface."
    },
    {
      question: "Is an internet connection required?",
      answer: "While our full service works best with an internet connection, we offer a limited offline mode for essential communications when connectivity isn't available."
    },
    {
      question: "How do you ensure privacy and data security?",
      answer: "Privacy is paramount. We don't store video of signing unless explicitly permitted for training purposes. All data is encrypted, and we comply with GDPR, CCPA, and other privacy regulations."
    },
    {
      question: "Do you offer customized enterprise solutions?",
      answer: "Yes, we provide tailored implementations for businesses, educational institutions, and government organizations. Contact us to discuss your specific needs."
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-neutral-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">Frequently Asked Questions</h2>
          <p className="text-lg text-neutral-600">
            Find answers to common questions about our technology and services.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto divide-y divide-neutral-200">
          {faqs.map((faq, index) => (
            <div key={index} className="py-6">
              <h3 className="text-xl font-semibold text-neutral-900 mb-3">{faq.question}</h3>
              <p className="text-neutral-600">{faq.answer}</p>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-lg text-neutral-700 mb-5">
            Don't see your question here?
          </p>
          <a 
            href="/contact" 
            className="inline-flex items-center justify-center px-6 py-3 bg-primary-600 text-white font-medium rounded-md hover:bg-primary-700 transition"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;