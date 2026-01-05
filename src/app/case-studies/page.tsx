'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import { Section, HeroGradientBg } from '@/components/AnimatedElements';
import { FloatingScribbles } from '@/components/ScribbleAnimations';

export default function CaseStudies() {
  const caseStudies = [
    {
      id: 1,
      title: 'SaaSify Platform',
      subtitle: 'Building a Modern SaaS Powerhouse',
      category: 'SaaS',
      challenge:
        'A startup needed a scalable B2B SaaS platform to compete with established players.',
      solution:
        'We built a modern Next.js + Node.js platform with real-time collaboration features, advanced analytics, and seamless integrations.',
      results: [
        { metric: '3x', label: 'Revenue Growth' },
        { metric: '10K+', label: 'Active Users' },
        { metric: '99.9%', label: 'Uptime' },
      ],
      tech: ['Next.js', 'Node.js', 'PostgreSQL', 'AWS', 'TypeScript'],
      color: 'from-accent to-accent-light',
    },
    {
      id: 2,
      title: 'FinTech Mobile App',
      subtitle: 'Disrupting Digital Payments',
      category: 'Mobile',
      challenge:
        'A fintech startup needed a secure, user-friendly mobile app for payments and transfers.',
      solution:
        'Developed a React Native app with biometric authentication, real-time transaction updates, and comprehensive security measures.',
      results: [
        { metric: '500K', label: 'Downloads' },
        { metric: '4.8★', label: 'App Rating' },
        { metric: '50M+', label: 'Transactions' },
      ],
      tech: ['React Native', 'Firebase', 'Stripe API', 'Redux'],
      color: 'from-purple-600 to-pink-600',
    },
    {
      id: 3,
      title: 'Enterprise Analytics Dashboard',
      subtitle: 'Data-Driven Decision Making',
      category: 'Enterprise',
      challenge:
        'A Fortune 500 company struggled with fragmented data across systems.',
      solution:
        'Built a comprehensive analytics dashboard integrating 15+ data sources with real-time insights and predictive analytics.',
      results: [
        { metric: '50%', label: 'Faster Decisions' },
        { metric: '30%', label: 'Cost Reduction' },
        { metric: '100+', label: 'Power Users' },
      ],
      tech: ['React', 'Python', 'Apache Spark', 'AWS', 'D3.js'],
      color: 'from-blue-600 to-cyan-600',
    },
    {
      id: 4,
      title: 'E-Commerce Platform',
      subtitle: 'Scaling to Millions of Users',
      category: 'E-Commerce',
      challenge:
        'Growing retailer needed to handle 10x traffic spike during peak seasons.',
      solution:
        'Migrated to microservices architecture with caching, CDN optimization, and horizontal scaling on AWS.',
      results: [
        { metric: '10x', label: 'Traffic Handled' },
        { metric: '0.8s', label: 'Load Time' },
        { metric: '$5M', label: 'Revenue Increase' },
      ],
      tech: ['Next.js', 'GraphQL', 'Elasticsearch', 'Docker', 'Kubernetes'],
      color: 'from-green-600 to-emerald-600',
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
            Case <span className="gradient-text">Studies</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            Real projects, real results. See how we've transformed businesses across industries.
          </p>
        </motion.div>
      </Section>

      {/* Case Studies */}
      <Section className="bg-gradient-to-b from-dark-bg to-dark-secondary space-y-16">
        {caseStudies.map((study, index) => (
          <motion.div
            key={study.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className={`grid md:grid-cols-2 gap-12 items-center ${
              index % 2 === 1 ? 'md:direction-rtl' : ''
            }`}
          >
            {/* Content */}
            <div className={`${index % 2 === 1 ? 'md:order-last' : ''}`}>
              <span className="text-accent font-semibold text-sm uppercase">{study.category}</span>
              <h2 className="text-4xl font-bold mt-3 mb-2">{study.title}</h2>
              <p className="text-gray-400 text-lg mb-6">{study.subtitle}</p>

              <div className="space-y-6 mb-8">
                <div>
                  <h4 className="font-bold text-white mb-2">Challenge</h4>
                  <p className="text-gray-300">{study.challenge}</p>
                </div>
                <div>
                  <h4 className="font-bold text-white mb-2">Solution</h4>
                  <p className="text-gray-300">{study.solution}</p>
                </div>
              </div>

              {/* Results */}
              <div className="grid grid-cols-3 gap-4 mb-8">
                {study.results.map((result, idx) => (
                  <div key={idx} className="glass-effect rounded-lg p-4 text-center">
                    <p className="text-2xl font-bold gradient-text">{result.metric}</p>
                    <p className="text-xs text-gray-400 mt-1">{result.label}</p>
                  </div>
                ))}
              </div>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2">
                {study.tech.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 rounded-full text-sm bg-accent/10 text-accent border border-accent/30"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Visual */}
            <div className="relative h-96 rounded-2xl overflow-hidden glass-effect border border-white/10">
              <div
                className={`absolute inset-0 bg-gradient-to-br ${study.color} opacity-20`}
              />
              <svg className="absolute w-full h-full opacity-10" viewBox="0 0 400 300">
                <rect x="50" y="50" width="300" height="200" fill="none" stroke="white" strokeWidth="2" />
                <circle cx="200" cy="150" r="80" fill="none" stroke="white" strokeWidth="2" />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <Sparkles size={60} className="mx-auto mb-4 text-white opacity-30" />
                  <p className="font-bold text-lg text-white">{study.title}</p>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </Section>

      {/* CTA */}
      <Section className="bg-dark-bg text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-4">Ready to Build Something Great?</h2>
          <p className="text-gray-300 max-w-2xl mx-auto mb-8">
            Let's discuss how SPARKUS can help you achieve your business goals.
          </p>
          <Link href="/contact" className="btn-primary">
            Schedule a Consultation
          </Link>
        </motion.div>
      </Section>
    </div>
  );
}
