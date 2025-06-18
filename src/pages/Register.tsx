import { useState } from 'react';
import Section from '../components/Section';
import Button from '../components/Button';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');
    setSubmitted(false);
    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: 'Register for Early Access',
          message: `I would like to register for early access. Organization: ${formData.organization}`,
        }),
      });
      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: '', email: '', organization: '' });
      } else {
        setError('Failed to send registration. Please try again.');
      }
    } catch {
      setError('Failed to send registration. Please try again.');
    }
    setIsSubmitting(false);
  };

  return (
    <Section title="Join the Waitlist" id="register-form" className="relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary-50 to-transparent pointer-events-none z-0" />
      <div className="max-w-lg mx-auto relative z-10">
        <h2 className="text-3xl font-bold text-neutral-900 mb-4 text-center">Be the First to Try Squirl Signs</h2>
        <p className="text-lg text-neutral-600 mb-8 text-center">
          Sign up for our early access waitlist and we'll notify you as soon as Squirl Signs is available to try. We're excited to have you join our community!
        </p>
        <div className="bg-white p-8 rounded-lg shadow-sm border border-neutral-100">
          <h2 className="text-2xl font-bold text-neutral-900 mb-6 text-center">Join the Waitlist</h2>
          {submitted ? (
            <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-5 rounded-lg text-center">
              <p className="font-medium text-lg">You're on the waitlist!</p>
              <p className="mt-2">We'll let you know as soon as early access is available. Thank you for your interest!</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {error && (
                <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
                  <p>{error}</p>
                </div>
              )}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-1">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-neutral-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-1">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-neutral-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label htmlFor="organization" className="block text-sm font-medium text-neutral-700 mb-1">Organization (optional)</label>
                <input
                  type="text"
                  id="organization"
                  name="organization"
                  value={formData.organization}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-neutral-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition"
                  placeholder="Your organization or school"
                />
              </div>
              <Button type="submit" className="w-full">
                {isSubmitting ? 'Joining...' : 'Join the Waitlist'}
              </Button>
            </form>
          )}
        </div>
      </div>
    </Section>
  );
};

export default Register;
