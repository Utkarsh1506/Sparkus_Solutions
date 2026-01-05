'use client';

import React, { Suspense } from 'react';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Code2, 
  RefreshCw, 
  Palette, 
  Cloud, 
  Lock, 
  BarChart3,
  Zap,
  Users,
  Rocket,
  CheckCircle2
} from 'lucide-react';
import { HeroGradientBg, AnimatedCard, Section } from '@/components/AnimatedElements';
import { CounterAnimation } from '@/components/Animations';
import { ScribbleAnimation, FloatingScribbles } from '@/components/ScribbleAnimations';

// Dynamic imports for better performance
const LottieAnimation = dynamic(() => import('@/components/LottieAnimations').then(mod => ({ default: mod.LottieAnimation })), {
  loading: () => <div className="w-24 h-24 bg-gradient-to-br from-accent to-accent-light rounded-full opacity-20" />,
  ssr: false,
});

export default function Home() {

  const services = [
    {
      icon: Code2,
      title: 'Product Engineering',
      description: 'End-to-end custom software development tailored to your business needs.',
    },
    {
      icon: RefreshCw,
      title: 'Digital Transformation',
      description: 'Modernize your legacy systems and adopt cutting-edge technologies.',
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Beautiful, intuitive interfaces that users love and engage with.',
    },
    {
      icon: Cloud,
      title: 'Cloud Architecture',
      description: 'Scalable, secure cloud solutions for your growing business.',
    },
    {
      icon: Lock,
      title: 'Security & Compliance',
      description: 'Robust security frameworks and compliance standards implementation.',
    },
    {
      icon: BarChart3,
      title: 'Data & Analytics',
      description: 'Extract actionable insights from your data to drive decisions.',
    },
  ];

  const stats = [
    { label: 'Years Experience', value: 10 },
    { label: 'Projects Delivered', value: 150, suffix: '+' },
    { label: 'Happy Clients', value: 80, suffix: '+' },
    { label: 'Team Members', value: 45, suffix: '+' },
  ];

  const differentiators = [
    {
      title: 'Startup Agility',
      description: 'Move fast, iterate quickly, and adapt to market changes with our lean methodology.',
    },
    {
      title: 'Enterprise Expertise',
      description: 'Scale to millions of users with proven patterns and best practices.',
    },
    {
      title: 'Creative Problem-Solving',
      description: 'Think outside the box and find innovative solutions to complex challenges.',
    },
    {
      title: 'Dedicated Partnership',
      description: 'Your success is our success. We invest in long-term relationships.',
    },
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <Section className="relative min-h-screen flex items-center pt-32">
        <HeroGradientBg />
        <FloatingScribbles />
        <div className="relative z-20 w-full grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <motion.div
              initial={{ opacity: 1, y: 0 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
            >
              <motion.div
                initial={{ opacity: 0.9, scale: 1 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.05 }}
                className="inline-block mb-4"
              >
                <span className="px-4 py-2 rounded-full bg-accent/10 border border-accent/30 text-accent text-sm font-semibold">
                  ✨ Building the Future of Technology
                </span>
              </motion.div>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-[1.1]">
                <span className="gradient-text">Transform Your Ideas</span>
                <br />
                Into Industry-Leading Products
              </h1>
              <p className="text-lg md:text-xl text-gray-300 max-w-2xl mb-10 leading-relaxed">
                Bold, modern technology. Creative yet professional. We partner with startups and enterprises to build products that matter.
              </p>
            </motion.div>

            <motion.div
              className="flex gap-4 flex-wrap"
              initial={{ opacity: 1, y: 0 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              <Link href="/contact" className="btn-primary inline-flex items-center gap-2">
                Start Your Project
                <Rocket size={18} />
              </Link>
              <Link href="/case-studies" className="btn-secondary inline-flex items-center gap-2">
                View Our Work
                <Zap size={18} />
              </Link>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
              {stats.map((stat, index) => (
                <div key={index} className="text-center glass-effect rounded-xl py-6 border border-white/5">
                  <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                    <CounterAnimation value={stat.value} suffix={stat.suffix} />
                  </div>
                  <p className="text-sm md:text-base text-gray-400">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative h-full w-full">
            <div className="glass-effect rounded-2xl p-6 h-full flex items-center justify-center border border-white/10">
              <Suspense fallback={<div className="w-48 h-48 bg-accent/20 rounded-full blur-3xl" />}>
                <LottieAnimation animationType="loading" width={320} height={320} />
              </Suspense>
            </div>
            <div className="absolute -top-6 -left-6">
              <ScribbleAnimation width={140} height={140} />
            </div>
            <div className="absolute -bottom-10 right-0">
              <ScribbleAnimation width={120} height={120} delay={0.2} />
            </div>
          </div>
        </div>
      </Section>

      {/* Services Overview */}
      <Section className="bg-gradient-to-b from-dark-bg via-dark-secondary to-dark-bg">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span className="px-4 py-2 rounded-full bg-accent/10 border border-accent/30 text-accent text-sm font-semibold inline-block mb-4">
              What We Do
            </span>
            <h2 className="section-title">Our Services</h2>
            <p className="section-subtitle mx-auto">
              Comprehensive solutions designed to accelerate your business growth
            </p>
          </motion.div>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <AnimatedCard key={index} delay={index * 0.1}>
                <div className="text-accent mb-6 transform group-hover:scale-110 transition-transform duration-300">
                  <IconComponent size={56} strokeWidth={1.5} />
                </div>
                <h3 className="text-2xl font-bold mb-4 group-hover:text-accent transition-colors">{service.title}</h3>
                <p className="text-gray-300 leading-relaxed">{service.description}</p>
              </AnimatedCard>
            );
          })}
        </div>
      </Section>

      {/* Why Sparkus */}
      <Section className="bg-dark-bg">
        <div className="grid md:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <span className="px-4 py-2 rounded-full bg-accent/10 border border-accent/30 text-accent text-sm font-semibold inline-block mb-4">
              Why Us
            </span>
            <h2 className="section-title mb-10">Why Choose Sparkus?</h2>
            <div className="space-y-6">
              {differentiators.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="glass-effect rounded-2xl p-6 border-l-4 border-accent flex gap-4 hover:shadow-xl hover:shadow-accent/10 transition-all duration-300"
                >
                  <div className="text-accent text-2xl flex-shrink-0 pt-1">
                    <Zap size={28} strokeWidth={2} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-gray-300 leading-relaxed">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative h-[500px] glass-effect rounded-3xl p-8 overflow-hidden group hover:shadow-2xl hover:shadow-accent/20 transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-accent-light/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  animate={{ 
                    scale: [1, 1.05, 1],
                    rotate: [0, 5, -5, 0]
                  }}
                  transition={{ 
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <Rocket size={120} className="text-accent opacity-20" strokeWidth={1.5} />
                </motion.div>
              </div>
              <div className="relative z-10 h-full flex flex-col justify-center text-center">
                <p className="text-3xl font-bold mb-4 gradient-text">Innovation at Speed</p>
                <p className="text-gray-300 text-lg">Building tomorrow, today</p>
              </div>
              <svg className="absolute w-full h-full opacity-5" viewBox="0 0 200 200">
                <circle cx="100" cy="100" r="80" fill="none" stroke="currentColor" strokeWidth="1" />
                <circle cx="100" cy="100" r="60" fill="none" stroke="currentColor" strokeWidth="1" />
                <circle cx="100" cy="100" r="40" fill="none" stroke="currentColor" strokeWidth="1" />
              </svg>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Process Preview */}
      <Section className="bg-gradient-to-b from-dark-secondary via-dark-bg to-dark-secondary">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span className="px-4 py-2 rounded-full bg-accent/10 border border-accent/30 text-accent text-sm font-semibold inline-block mb-4">
              How We Work
            </span>
            <h2 className="section-title">Our Process</h2>
            <p className="section-subtitle mx-auto">
              A proven methodology refined over 10 years of delivering exceptional results
            </p>
          </motion.div>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-accent to-accent-light transform -translate-x-1/2" />

          {/* Timeline Items */}
          <div className="space-y-12">
            {[
              { step: 'Discovery', desc: 'Deep dive into your business goals and challenges', icon: Users },
              { step: 'Strategy', desc: 'Craft a comprehensive plan aligned with your vision', icon: CheckCircle2 },
              { step: 'Development', desc: 'Build with cutting-edge tech and best practices', icon: Code2 },
              { step: 'Launch', desc: 'Deploy with confidence and comprehensive support', icon: Rocket },
            ].map((item, index) => {
              const IconComponent = item.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`flex gap-8 items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
                >
                  <div className="flex-1">
                    <div className="glass-effect rounded-2xl p-8 group hover:border-accent/50 transition-all duration-300">
                      <span className="text-accent font-bold text-sm uppercase tracking-wider">Step 0{index + 1}</span>
                      <h3 className="text-2xl font-bold mt-3 mb-3 group-hover:text-accent transition-colors">{item.step}</h3>
                      <p className="text-gray-300 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                  <div className="hidden md:flex items-center justify-center">
                    <motion.div 
                      className="w-20 h-20 rounded-2xl bg-gradient-to-br from-accent to-accent-light flex items-center justify-center text-white shadow-lg shadow-accent/30"
                      whileHover={{ scale: 1.15, rotate: 5 }}
                      transition={{ duration: 0.3, type: "spring" }}
                    >
                      <IconComponent size={36} strokeWidth={2} />
                    </motion.div>
                  </div>
                  <div className="flex-1 hidden md:block" />
                </motion.div>
              );
            })}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Link href="/process" className="btn-primary">
            Learn More About Our Process
          </Link>
        </motion.div>
      </Section>

      {/* Featured Case Studies Preview */}
      <Section className="bg-dark-bg">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span className="px-4 py-2 rounded-full bg-accent/10 border border-accent/30 text-accent text-sm font-semibold inline-block mb-4">
              Success Stories
            </span>
            <h2 className="section-title">Featured Work</h2>
            <p className="section-subtitle mx-auto">
              A selection of transformative projects we're proud of
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {[
            {
              title: 'SaaSify Platform',
              category: 'SaaS',
              result: '3x Revenue Growth',
              color: 'from-accent to-accent-light',
            },
            {
              title: 'FinTech Mobile App',
              category: 'Mobile',
              result: '500K Users',
              color: 'from-purple-600 to-pink-600',
            },
          ].map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
            >
              <div className={`relative h-[400px] rounded-3xl bg-gradient-to-br ${project.color} p-8 overflow-hidden hover:shadow-2xl transition-all duration-500`}>
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent)]" />
                <div className="relative h-full flex flex-col justify-between text-white">
                  <div>
                    <span className="text-sm font-semibold opacity-90 uppercase tracking-wider">{project.category}</span>
                    <h3 className="text-4xl font-bold mt-4">{project.title}</h3>
                  </div>
                  <div className="transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    <p className="text-2xl font-semibold mb-2">{project.result}</p>
                    <div className="w-12 h-1 bg-white rounded-full" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link href="/case-studies" className="btn-primary">
            View All Case Studies
          </Link>
        </motion.div>
      </Section>

      {/* Final CTA */}
      <Section className="relative bg-gradient-to-b from-dark-secondary via-dark-bg to-dark-bg py-40">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-accent/20 rounded-full blur-3xl opacity-40" />
          <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-accent-light/20 rounded-full blur-3xl opacity-40" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative z-10 text-center"
        >
          <span className="px-4 py-2 rounded-full bg-accent/10 border border-accent/30 text-accent text-sm font-semibold inline-block mb-6">
            Let's Work Together
          </span>
          <h2 className="text-5xl md:text-7xl font-bold mb-8">
            Ready to Transform <br />
            <span className="gradient-text">Your Idea?</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed">
            Let's discuss how SPARKUS can help you build the product you envision. From concept to launch, we're here every step of the way.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/contact" className="btn-primary inline-flex items-center gap-2">
              Schedule a Consultation
              <Rocket size={18} />
            </Link>
            <Link href="/about" className="btn-secondary inline-flex items-center gap-2">
              Learn More
              <Users size={18} />
            </Link>
          </div>
        </motion.div>
      </Section>
    </div>
  );
}
