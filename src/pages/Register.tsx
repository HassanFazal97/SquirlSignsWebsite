import { useState } from 'react';
import Button from '../components/Button';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent('Register for Early Access');
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nOrganization: ${formData.organization}\nWhy do you want to try Squirl Signs?: ${formData.message}`
    );
    window.location.href = `mailto:squirl@squirlasl.ca?subject=${subject}&body=${body}`;
  };

  return (
    <div className="min-h-screen bg-neutral-50 flex items-center justify-center py-16 px-4">
      <div className="bg-white rounded-xl shadow-lg max-w-lg w-full p-8 border border-neutral-100">
        <h1 className="text-3xl font-bold text-neutral-900 mb-4 text-center">Register for Early Access</h1>
        <p className="text-neutral-600 mb-8 text-center">Fill out the form below to request access to try out Squirl Signs technology. We’ll get in touch with next steps!</p>
        <form onSubmit={handleSubmit} className="space-y-6">
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
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-1">Why do you want to try Squirl Signs?</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={4}
              className="w-full px-4 py-3 border border-neutral-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition resize-y"
              placeholder="Tell us a bit about your interest or use case..."
            />
          </div>
          <Button type="submit" className="w-full">
            Register
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Register;
