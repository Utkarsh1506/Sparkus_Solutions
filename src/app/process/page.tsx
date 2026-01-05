'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Search, 
  Lightbulb, 
  Palette, 
  Code2, 
  CheckCircle, 
  Rocket,
  MessageSquare,
  BarChart3,
  Zap,
  Shield,
} from 'lucide-react';
import { Section, HeroGradientBg } from '@/components/AnimatedElements';
import { FloatingScribbles } from '@/components/ScribbleAnimations';

export default function Process() {
  const phases = [
    {
      phase: 'Discovery',
      duration: '1-2 weeks',
      description: 'Deep understanding of your vision, goals, and market.',
      activities: [
        'Stakeholder interviews',
        'Market analysis',
        'Competitive research',
        'Requirements gathering',
        'Technical assessment',
      ],
      icon: Search,
    },
    {
      phase: 'Strategy & Planning',
      duration: '1-2 weeks',
      description: 'Crafting a detailed roadmap and technical architecture.',
      activities: [
        'Product roadmap creation',
        'Architecture design',
        'Technology selection',
        'Timeline & budget planning',
        'Risk assessment',
      ],
      icon: Lightbulb,
    },
    {
      phase: 'Design',
      duration: '2-4 weeks',
      description: 'Creating beautiful, intuitive user experiences.',
      activities: [
        'User personas & journeys',
        'Wireframing',
        'Visual design',
        'Prototyping',
        'Design system creation',
      ],
      icon: Palette,
    },
    {
      phase: 'Development',
      duration: '4-16 weeks',
      description: 'Building your product with quality and scalability.',
      activities: [
        'Frontend development',
        'Backend API development',
        'Database design & setup',
        'Integration & testing',
        'Performance optimization',
      ],
      icon: Code2,
    },
    {
      phase: 'Quality Assurance',
      duration: '2-4 weeks',
      description: 'Comprehensive testing and refinement.',
      activities: [
        'Functional testing',
        'Security testing',
        'Performance testing',
        'User acceptance testing',
        'Bug fixes & optimization',
      ],
      icon: Shield,
    },
    {
      phase: 'Launch & Support',
      duration: 'Ongoing',
      description: 'Successful deployment and continuous support.',
      activities: [
        'Deployment planning',
        'Infrastructure setup',
        'Launch coordination',
        'Monitoring & maintenance',
        'Ongoing support & updates',
      ],
      icon: Rocket,
    },
  ];

  const principles = [
    {
      title: 'Agile & Iterative',
      desc: 'Regular sprints, continuous feedback, and flexibility to adapt.',
    },
    {
      title: 'Transparent Communication',
      desc: 'Weekly updates, accessible team, and honest conversations.',
    },
    {
      title: 'Quality First',
      desc: 'No shortcuts. Clean code, comprehensive testing, best practices.',
    },
    {
      title: 'Ownership Mindset',
      desc: 'We treat your project like our own, invested in success.',
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
            Our <span className="gradient-text">Process</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            A proven, collaborative methodology refined through years of delivering exceptional results.
          </p>
        </motion.div>
      </Section>

      {/* Phases Timeline */}
      <Section className="bg-gradient-to-b from-dark-bg to-dark-secondary">
        <div className="text-center mb-16">
          <h2 className="section-title">Six Proven Phases</h2>
          <p className="section-subtitle mx-auto">
            Each phase is designed to bring clarity, quality, and momentum
          </p>
        </div>

        <div className="space-y-8">
          {phases.map((phase, index) => {
            const IconComponent = phase.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                {/* Timeline connector */}
                {index < phases.length - 1 && (
                  <div className="absolute left-16 top-32 w-1 h-24 bg-gradient-to-b from-accent to-transparent" />
                )}

                <div className="glass-effect rounded-2xl p-8 border-l-4 border-accent hover:border-accent-light transition-all">
                  <div className="flex gap-6 items-start">
                    {/* Icon circle */}
                    <div className="w-32 h-32 rounded-full bg-gradient-to-br from-accent to-accent-light flex items-center justify-center flex-shrink-0">
                      <IconComponent size={48} className="text-white" strokeWidth={1.5} />
                    </div>

                    {/* Content */}
                    <div className="flex-1 pt-4">
                      <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-4">
                        <div>
                          <h3 className="text-3xl font-bold mb-1">{phase.phase}</h3>
                          <p className="text-accent font-semibold">{phase.duration}</p>
                        </div>
                      </div>

                      <p className="text-gray-300 mb-6 text-lg">{phase.description}</p>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-bold text-white mb-3">Key Activities</h4>
                          <ul className="space-y-2">
                            {phase.activities.map((activity, idx) => (
                              <li key={idx} className="text-gray-300 flex items-center gap-2">
                                <span className="text-accent text-lg">→</span>
                                {activity}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </Section>

      {/* Core Principles */}
      <Section className="bg-dark-bg">
        <div className="text-center mb-16">
          <h2 className="section-title">Core Principles</h2>
          <p className="section-subtitle mx-auto">
            How we work with our clients
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {principles.map((principle, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass-effect rounded-xl p-8 border-l-4 border-accent-light"
            >
              <h3 className="text-2xl font-bold mb-3">{principle.title}</h3>
              <p className="text-gray-300 text-lg">{principle.desc}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Communication & Reporting */}
      <Section className="bg-gradient-to-b from-dark-secondary to-dark-bg">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title mb-8">Communication & Transparency</h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-bold text-lg mb-2">Weekly Syncs</h3>
                <p className="text-gray-300">
                  Regular check-ins to discuss progress, blockers, and upcoming milestones.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">Sprint Reviews</h3>
                <p className="text-gray-300">
                  Bi-weekly demos of completed features for feedback and course correction.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">Progress Dashboards</h3>
                <p className="text-gray-300">
                  Real-time visibility into project status, timelines, and deliverables.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">Detailed Documentation</h3>
                <p className="text-gray-300">
                  Comprehensive docs, code comments, and knowledge transfer sessions.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative h-96 glass-effect rounded-2xl p-8"
          >
            <div className="absolute inset-0 flex items-center justify-center text-7xl opacity-20">📊</div>
            <div className="relative z-10 h-full flex flex-col justify-center">
              <p className="text-2xl font-bold mb-4 gradient-text">Radical Transparency</p>
              <p className="text-gray-300">
                You'll always know exactly where your project stands, what's coming next, and how we're progressing toward your goals.
              </p>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Technology & Tools */}
      <Section className="bg-dark-bg">
        <div className="text-center mb-16">
          <h2 className="section-title">Tools & Practices</h2>
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          {[
            { icon: Zap, label: 'Modern Tech Stack' },
            { icon: BarChart3, label: 'Agile Methodology' },
            { icon: CheckCircle, label: 'Continuous Testing' },
            { icon: Rocket, label: 'CI/CD Pipelines' },
          ].map((tool, index) => {
            const IconComponent = tool.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass-effect rounded-xl p-6 text-center"
              >
                <div className="text-accent mb-3 flex justify-center">
                  <IconComponent size={40} strokeWidth={1.5} />
                </div>
                <p className="font-semibold">{tool.label}</p>
              </motion.div>
            );
          })}
        </div>
      </Section>
    </div>
  );
}
