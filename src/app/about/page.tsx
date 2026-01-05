'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Star, Target, Handshake, Award } from 'lucide-react';
import { AnimatedCard, Section, HeroGradientBg } from '@/components/AnimatedElements';
import { CounterAnimation } from '@/components/Animations';
import { FloatingScribbles } from '@/components/ScribbleAnimations';

export default function About() {
  const team = [
    {
      role: 'CTO & Co-Founder',
      title: 'Leading Technical Innovation',
      icon: '👨‍💻',
    },
    {
      role: 'CEO & Co-Founder',
      title: 'Driving Business Growth',
      icon: '👨‍💼',
    },
    {
      role: 'Design Director',
      title: 'Creating Beautiful Experiences',
      icon: '🎨',
    },
    {
      role: 'Engineering Lead',
      title: 'Ensuring Excellence',
      icon: '⚙️',
    },
  ];

  const values = [
    {
      title: 'Excellence',
      description: 'We never settle for good when great is possible.',
      icon: Star,
    },
    {
      title: 'Transparency',
      description: 'Clear communication and honest feedback drive our partnerships.',
      icon: Target,
    },
    {
      title: 'Innovation',
      description: 'We push boundaries and explore new possibilities.',
      icon: Award,
    },
    {
      title: 'Integrity',
      description: 'Trust is everything. We keep our promises.',
      icon: Handshake,
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
            About <span className="gradient-text">SPARKUS</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            A team of passionate builders, designers, and problem-solvers dedicated to creating transformative digital products.
          </p>
        </motion.div>
      </Section>

      {/* Story */}
      <Section className="bg-gradient-to-b from-dark-bg to-dark-secondary">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title mb-8">Our Story</h2>
            <div className="space-y-6 text-gray-300">
              <p>
                SPARKUS was founded on a simple belief: great technology should be accessible to everyone. In 2014, our founders set out to build not just another consultancy, but a partner that truly understands the challenges of turning ideas into products.
              </p>
              <p>
                Over the past decade, we've worked with startups disrupting industries and enterprises modernizing their operations. Every project has taught us something new about what it takes to succeed in today's digital landscape.
              </p>
              <p>
                Today, we're a team of 45+ talented professionals with offices in major tech hubs. But our core mission remains unchanged: empower businesses with technology that matters.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative h-96 glass-effect rounded-2xl p-8"
          >
            <div className="absolute inset-0 flex items-center justify-center text-6xl opacity-20">📖</div>
            <div className="relative z-10 h-full flex flex-col justify-center">
              <p className="text-2xl font-bold mb-4 gradient-text">Since 2014</p>
              <p className="text-gray-300">Building products that transform businesses</p>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Values */}
      <Section className="bg-dark-bg">
        <div className="text-center mb-16">
          <h2 className="section-title">Our Core Values</h2>
          <p className="section-subtitle mx-auto">
            These principles guide every decision we make
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {values.map((value, index) => {
            const IconComponent = value.icon;
            return (
              <AnimatedCard key={index} delay={index * 0.1}>
                <div className="flex items-start gap-4">
                  <div className="text-accent text-4xl flex-shrink-0">
                    <IconComponent size={40} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-3">{value.title}</h3>
                    <p className="text-gray-300 text-lg">{value.description}</p>
                  </div>
                </div>
              </AnimatedCard>
            );
          })}
        </div>
      </Section>

      {/* Team Highlights */}
      <Section className="bg-gradient-to-b from-dark-secondary to-dark-bg">
        <div className="text-center mb-16">
          <h2 className="section-title">Leadership</h2>
          <p className="section-subtitle mx-auto">
            Experienced leaders with a passion for excellence
          </p>
        </div>
        <div className="grid md:grid-cols-4 gap-6">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass-effect rounded-xl p-6 text-center hover:border-accent/50 transition-all"
            >
              <div className="text-5xl mb-4">{member.icon}</div>
              <h3 className="font-bold text-lg mb-2">{member.role}</h3>
              <p className="text-gray-400 text-sm">{member.title}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Stats */}
      <Section className="bg-dark-bg">
        <div className="grid md:grid-cols-4 gap-8 text-center">
          {[
            { label: 'Years of Experience', value: 10 },
            { label: 'Team Members', value: 45, suffix: '+' },
            { label: 'Projects Completed', value: 150, suffix: '+' },
            { label: 'Client Satisfaction', value: 98, suffix: '%' },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">
                <CounterAnimation value={stat.value} suffix={stat.suffix} />
              </div>
              <p className="text-gray-400">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </Section>
    </div>
  );
}
