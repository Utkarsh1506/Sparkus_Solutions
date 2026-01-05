'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle2 } from 'lucide-react';
import { Section, HeroGradientBg } from '@/components/AnimatedElements';
import { FloatingScribbles } from '@/components/ScribbleAnimations';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
    budget: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', company: '', message: '', budget: '' });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactMethods = [
    {
      icon: Mail,
      label: 'Email',
      value: 'hello@sparkus.solutions',
      href: 'mailto:hello@sparkus.solutions',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+1 (555) 123-4567',
      href: 'tel:+15551234567',
    },
    {
      icon: MapPin,
      label: 'Office',
      value: 'San Francisco, CA',
      href: '#',
    },
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero */}
      <Section className="relative min-h-screen flex items-center pt-32">
        <HeroGradientBg />
        <FloatingScribbles />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-20"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Let's <span className="gradient-text">Create Magic</span> Together
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            Ready to transform your idea into reality? Get in touch and let's discuss your project.
          </p>
        </motion.div>
      </Section>

      {/* Contact Methods */}
      <Section className="bg-gradient-to-b from-dark-bg to-dark-secondary">
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {contactMethods.map((method, index) => {
            const IconComponent = method.icon;
            return (
              <motion.a
                key={index}
                href={method.href}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass-effect rounded-2xl p-8 text-center hover:border-accent/50 transition-all group"
              >
                <div className="text-accent mb-4 flex justify-center group-hover:scale-110 transition-transform">
                  <IconComponent size={48} strokeWidth={1.5} />
                </div>
                <h3 className="font-bold text-lg mb-2">{method.label}</h3>
                <p className="text-gray-300 group-hover:text-white transition-colors">{method.value}</p>
              </motion.a>
            );
          })}
        </div>
      </Section>

      {/* Contact Form */}
      <Section className="bg-dark-bg">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-8">Send us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-semibold mb-2">Full Name *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-dark-secondary border border-white/10 text-white placeholder-gray-500 focus:border-accent focus:outline-none transition-all"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">Email *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-dark-secondary border border-white/10 text-white placeholder-gray-500 focus:border-accent focus:outline-none transition-all"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">Company</label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-dark-secondary border border-white/10 text-white placeholder-gray-500 focus:border-accent focus:outline-none transition-all"
                  placeholder="Your company name"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">Project Budget</label>
                <select
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-dark-secondary border border-white/10 text-white focus:border-accent focus:outline-none transition-all"
                >
                  <option value="">Select a range</option>
                  <option value="<50k">&lt; $50K</option>
                  <option value="50k-100k">$50K - $100K</option>
                  <option value="100k-500k">$100K - $500K</option>
                  <option value=">500k">&gt; $500K</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">Project Details *</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 rounded-lg bg-dark-secondary border border-white/10 text-white placeholder-gray-500 focus:border-accent focus:outline-none transition-all resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="btn-primary w-full flex items-center justify-center gap-2"
              >
                {submitted ? (
                  <>
                    <CheckCircle2 size={20} />
                    Message Sent!
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    Send Message
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="glass-effect rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4">What We Need to Know</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex gap-3">
                  <span className="text-accent">✓</span>
                  <span>Your business goals and vision</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent">✓</span>
                  <span>Target audience and market</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent">✓</span>
                  <span>Current challenges and pain points</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent">✓</span>
                  <span>Timeline and budget expectations</span>
                </li>
              </ul>
            </div>

            <div className="glass-effect rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4">Next Steps</h3>
              <ol className="space-y-3 text-gray-300">
                <li className="flex gap-3">
                  <span className="font-bold text-accent">1.</span>
                  <span>We review your inquiry</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-accent">2.</span>
                  <span>Schedule a discovery call</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-accent">3.</span>
                  <span>Present proposal & timeline</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-accent">4.</span>
                  <span>Begin building!</span>
                </li>
              </ol>
            </div>

            <div className="glass-effect rounded-2xl p-8 bg-gradient-to-br from-accent/10 to-transparent border-l-4 border-accent">
              <p className="text-lg">
                <span className="font-bold">💡 Tip:</span> The more detail you provide, the better we can understand your needs and provide accurate estimates.
              </p>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* FAQ */}
      <Section className="bg-gradient-to-b from-dark-secondary to-dark-bg">
        <div className="text-center mb-16">
          <h2 className="section-title">Frequently Asked Questions</h2>
        </div>

        <div className="max-w-3xl mx-auto space-y-6">
          {[
            {
              q: 'How long does a typical project take?',
              a: 'Projects typically range from 4 to 16 weeks depending on complexity. We provide detailed timelines during the discovery phase.',
            },
            {
              q: 'What is your pricing model?',
              a: 'We offer flexible engagement models: project-based, dedicated team, or hourly consulting. Pricing depends on scope and requirements.',
            },
            {
              q: 'Do you sign NDAs?',
              a: 'Absolutely. We take confidentiality seriously and sign NDAs as standard practice.',
            },
            {
              q: 'Can you work with existing teams?',
              a: 'Yes! We often augment existing teams or work alongside your developers, depending on your needs.',
            },
            {
              q: 'What if I need to make changes mid-project?',
              a: 'We embrace agile methodology. Changes are incorporated into sprint planning and discussed in our weekly syncs.',
            },
            {
              q: 'Do you provide ongoing support after launch?',
              a: 'Yes. We offer post-launch support packages including monitoring, maintenance, and feature development.',
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="glass-effect rounded-xl p-6"
            >
              <h3 className="font-bold text-lg mb-2">{item.q}</h3>
              <p className="text-gray-300">{item.a}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Final CTA */}
      <Section className="bg-dark-bg text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-4">Let's Talk Today</h2>
          <p className="text-gray-300 max-w-2xl mx-auto mb-8">
            We typically respond within 24 hours. Looking forward to hearing from you!
          </p>
          <a href="mailto:hello@sparkus.solutions" className="btn-primary">
            Get in Touch
          </a>
        </motion.div>
      </Section>
    </div>
  );
}
