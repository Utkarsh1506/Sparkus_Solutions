'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  Code2,
  RefreshCw,
  Palette,
  Cloud,
  Lock,
  BarChart3,
  GitBranch,
  Shield,
  Database,
  Server,
} from 'lucide-react';
import { AnimatedCard, Section, HeroGradientBg } from '@/components/AnimatedElements';
import { FloatingScribbles } from '@/components/ScribbleAnimations';

export default function Services() {
  const services = [
    {
      icon: Code2,
      title: 'Product Engineering',
      description: 'End-to-end custom software development from concept to launch.',
      features: [
        'Full-stack development',
        'Scalable architecture',
        'API design & integration',
        'MVP to production',
      ],
    },
    {
      icon: RefreshCw,
      title: 'Digital Transformation',
      description: 'Modernize legacy systems and embrace digital-first strategies.',
      features: [
        'Legacy system modernization',
        'Process optimization',
        'Technology migration',
        'Change management',
      ],
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Beautiful, intuitive interfaces that users love.',
      features: [
        'User research',
        'Design systems',
        'Prototyping',
        'Accessibility compliance',
      ],
    },
    {
      icon: Cloud,
      title: 'Cloud Architecture',
      description: 'Build scalable, reliable infrastructure on cloud platforms.',
      features: [
        'AWS, Azure, GCP',
        'Infrastructure as code',
        'DevOps automation',
        'Cost optimization',
      ],
    },
    {
      icon: Lock,
      title: 'Security & Compliance',
      description: 'Protect your assets with enterprise-grade security.',
      features: [
        'Security audits',
        'HIPAA, GDPR compliance',
        'Penetration testing',
        'Incident response',
      ],
    },
    {
      icon: BarChart3,
      title: 'Data & Analytics',
      description: 'Transform data into actionable business intelligence.',
      features: [
        'Data engineering',
        'BI dashboards',
        'Predictive analytics',
        'ML pipeline development',
      ],
    },
  ];

  const technologies = [
    {
      category: 'Frontend',
      items: ['React', 'Next.js', 'Vue.js', 'TypeScript', 'Tailwind CSS'],
    },
    {
      category: 'Backend',
      items: ['Node.js', 'Python', 'Go', 'Java', 'PostgreSQL', 'MongoDB'],
    },
    {
      category: 'Cloud & DevOps',
      items: ['AWS', 'Azure', 'Docker', 'Kubernetes', 'CI/CD'],
    },
    {
      category: 'Mobile',
      items: ['React Native', 'Flutter', 'Swift', 'Kotlin'],
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
            Services That <span className="gradient-text">Drive Growth</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            Comprehensive solutions tailored to your business needs, from strategy to scale.
          </p>
        </motion.div>
      </Section>

      {/* Services Grid */}
      <Section className="bg-gradient-to-b from-dark-bg to-dark-secondary">
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true, margin: '-100px' }}
              >
                <div className="glass-effect rounded-2xl p-8 h-full hover:border-accent/50 transition-all duration-300">
                  <div className="text-accent mb-4">
                    <IconComponent size={48} strokeWidth={1.5} />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                  <p className="text-gray-300 mb-6">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="text-gray-400 text-sm flex items-center gap-2">
                        <span className="text-accent">→</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>
      </Section>

      {/* Technology Stack */}
      <Section className="bg-dark-bg">
        <div className="text-center mb-16">
          <h2 className="section-title">Technology Stack</h2>
          <p className="section-subtitle mx-auto">
            We leverage cutting-edge tools and platforms
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass-effect rounded-xl p-6"
            >
              <h3 className="font-bold text-lg mb-4 text-accent">{tech.category}</h3>
              <div className="space-y-2">
                {tech.items.map((item, idx) => (
                  <p key={idx} className="text-gray-300 text-sm">
                    {item}
                  </p>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Engagement Models */}
      <Section className="bg-gradient-to-b from-dark-secondary to-dark-bg">
        <div className="text-center mb-16">
          <h2 className="section-title">Engagement Models</h2>
          <p className="section-subtitle mx-auto">
            Choose the model that works best for your team
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: 'Project-Based',
              desc: 'Fixed scope, timeline, and budget for discrete projects.',
              price: 'Custom',
            },
            {
              title: 'Dedicated Team',
              desc: 'Full-time developers dedicated to your product.',
              price: 'Monthly',
            },
            {
              title: 'Hourly Consulting',
              desc: 'Expert advice and support on demand.',
              price: 'Hourly',
            },
          ].map((model, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass-effect rounded-2xl p-8 border-l-4 border-accent hover:border-accent-light transition-all"
            >
              <h3 className="text-xl font-bold mb-3">{model.title}</h3>
              <p className="text-gray-300 mb-6">{model.desc}</p>
              <p className="text-accent font-semibold text-lg">{model.price}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Process Overview */}
      <Section className="bg-dark-bg">
        <div className="text-center mb-12">
          <h2 className="section-title">How We Work</h2>
        </div>

        <div className="relative space-y-8">
          {[
            { step: 'Discovery & Planning', desc: 'We dive deep to understand your vision and requirements.' },
            { step: 'Design & Prototyping', desc: 'Create mockups and prototypes for your approval.' },
            { step: 'Development', desc: 'Build with best practices and continuous communication.' },
            { step: 'Testing & Refinement', desc: 'Rigorous QA and optimization for performance.' },
            { step: 'Launch & Support', desc: 'Seamless deployment and ongoing support.' },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              viewport={{ once: true }}
              className="flex gap-6 items-start"
            >
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-accent to-accent-light flex items-center justify-center text-white font-bold flex-shrink-0">
                {index + 1}
              </div>
              <div className="flex-1 pt-2">
                <h3 className="font-bold text-lg mb-1">{item.step}</h3>
                <p className="text-gray-400">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>
    </div>
  );
}
