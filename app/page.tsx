'use client';

import { motion } from 'framer-motion';
import {
  Check,
  ChevronRight,
  Zap,
  AlertCircle,
  TrendingUp,
  MessageSquare,
  QrCode,
  Lock,
  BarChart3,
  Users,
  Webhook,
  HeadsetIcon,
  ArrowRight,
  Sparkles,
} from 'lucide-react';
import Link from 'next/link';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-50">
      {/* ============ NAVBAR ============ */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200"
      >
        <div className="container-custom py-4 flex items-center justify-between">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-2"
          >
            <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-lg">FS</span>
            </div>
            <span className="font-bold text-lg text-slate-900">FeedSolve</span>
          </motion.div>

          <div className="hidden md:flex items-center gap-8">
            {['Product', 'Pricing', 'Demo', 'Login'].map((item) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                whileHover={{ color: '#0f5fff' }}
                className="text-sm font-medium text-slate-700 hover:text-primary transition"
              >
                {item}
              </motion.a>
            ))}
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="button-primary"
          >
            Try Now
          </motion.button>
        </div>
      </motion.nav>

      {/* ============ HERO SECTION ============ */}
      <section className="relative overflow-hidden py-20 md:py-32 gradient-hero">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-emerald-300 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
        </div>

        <div className="container-custom relative z-10">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <motion.div variants={itemVariants} className="space-y-6">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 bg-white/50 backdrop-blur px-4 py-2 rounded-full border border-slate-200"
              >
                <Sparkles className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-slate-700">
                  The feedback loop that actually works
                </span>
              </motion.div>

              <motion.h1
                variants={itemVariants}
                className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-gradient"
              >
                Stop losing complaints.
                <br />
                Start closing them.
              </motion.h1>

              <motion.p
                variants={itemVariants}
                className="text-xl text-slate-600 leading-relaxed max-w-xl"
              >
                Collect feedback from customers, suppliers, and partners — and track every issue
                to resolution with a simple link and QR code.
              </motion.p>

              <motion.div
                variants={itemVariants}
                className="flex flex-col sm:flex-row gap-4 pt-4"
              >
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(15, 95, 255, 0.3)' }}
                  whileTap={{ scale: 0.95 }}
                  className="button-primary flex items-center justify-center gap-2"
                >
                  Try Now
                  <ArrowRight className="w-4 h-4" />
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="button-secondary flex items-center justify-center gap-2"
                >
                  See How It Works
                  <ChevronRight className="w-4 h-4" />
                </motion.button>
              </motion.div>

              <motion.p variants={itemVariants} className="text-sm text-slate-600 pt-2">
                ✓ No credit card required • Setup in under 2 minutes
              </motion.p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="hidden md:flex justify-center relative"
            >
              <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="relative w-full h-96 rounded-2xl overflow-hidden shadow-2xl"
              >
                <img
                  src="https://d2xsxph8kpxj0f.cloudfront.net/310519663221674421/EgXHS3Tz3WCT72WjdEHYCB/feedsolve-hero-bg-7PhhtRTPj3uxJZRy83vUqe.webp"
                  alt="Hero visual"
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ============ QUICK START SECTION ============ */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
              Go from zero to live in minutes
            </h2>
            <p className="text-lg text-slate-600">
              Three simple steps to start collecting and resolving feedback
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8"
          >
            {[
              { step: 1, title: 'Create your account', desc: 'Sign up with email or Google' },
              { step: 2, title: 'Create your first board', desc: 'Name it "Customer Feedback" or anything you like' },
              { step: 3, title: 'Share your link or QR code', desc: 'Start collecting feedback instantly' },
            ].map((item) => (
              <motion.div
                key={item.step}
                variants={itemVariants}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-100 to-emerald-100 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur"></div>
                <div className="relative bg-white p-8 rounded-xl border border-slate-200 hover:border-primary transition-all duration-300">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    transition={{ duration: 0.5 }}
                    className="w-12 h-12 bg-gradient-primary text-white rounded-full flex items-center justify-center font-bold text-lg mb-4 shadow-lg"
                  >
                    {item.step}
                  </motion.div>
                  <h3 className="font-bold text-lg mb-2 text-slate-900">{item.title}</h3>
                  <p className="text-slate-600 text-sm">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <p className="text-lg font-semibold text-slate-900">
              You'll be collecting real feedback in under 2 minutes.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ============ PROBLEM SECTION ============ */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-slate-50 to-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="order-2 md:order-1"
            >
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663221674421/EgXHS3Tz3WCT72WjdEHYCB/feedsolve-problem-illustration-Lr542GW6c254XyrdV8Ecpd.webp"
                alt="Feedback chaos"
                className="w-full rounded-2xl shadow-2xl"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-6 order-1 md:order-2"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gradient">
                Feedback is everywhere.
                <br />
                Resolution is nowhere.
              </h2>

              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="space-y-4"
              >
                {[
                  'Complaints lost in WhatsApp chats',
                  'Feedback buried in emails',
                  'No tracking, no ownership',
                  'Customers never get updates',
                ].map((point, idx) => (
                  <motion.div key={idx} variants={itemVariants} className="flex gap-3">
                    <AlertCircle className="w-5 h-5 text-destructive flex-shrink-0 mt-1" />
                    <p className="text-slate-600">{point}</p>
                  </motion.div>
                ))}
              </motion.div>

              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                viewport={{ once: true }}
                className="text-lg font-semibold text-slate-900 pt-4"
              >
                You're collecting feedback. You're just not resolving it.
              </motion.p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ============ SOLUTION SECTION (THE LOOP) ============ */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
              A complete feedback loop. No gaps.
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-12 flex justify-center"
          >
            <img
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663221674421/EgXHS3Tz3WCT72WjdEHYCB/feedsolve-workflow-visual-Fyi7FQfMLUPEWYU3BBXUgY.webp"
              alt="Feedback loop"
              className="w-full max-w-2xl rounded-2xl shadow-xl"
            />
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-4 gap-6"
          >
            {[
              {
                title: 'Collect',
                desc: 'Share a link or QR code. Anyone can submit — no login required.',
                icon: Zap,
              },
              {
                title: 'Track',
                desc: 'Every submission gets a unique tracking code.',
                icon: TrendingUp,
              },
              {
                title: 'Resolve',
                desc: 'Assign issues, update status, and manage everything in one place.',
                icon: Check,
              },
              {
                title: 'Communicate',
                desc: 'Submitters can check progress anytime using their tracking code.',
                icon: MessageSquare,
              },
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  whileHover={{ y: -10, boxShadow: '0 20px 40px rgba(15, 95, 255, 0.15)' }}
                  className="bg-gradient-to-br from-slate-50 to-white p-6 rounded-xl border border-slate-200 hover:border-primary transition-all duration-300 card-hover"
                >
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Icon className="w-8 h-8 text-primary mb-4" />
                  </motion.div>
                  <h3 className="font-bold text-lg mb-2 text-slate-900">{item.title}</h3>
                  <p className="text-sm text-slate-600">{item.desc}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ============ LIVE DEMO SECTION ============ */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-blue-50 to-emerald-50">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="container-custom max-w-2xl mx-auto text-center space-y-6"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gradient">
            See how it works in seconds
          </h2>
          <p className="text-lg text-slate-600">
            Track a real example and see how updates look from the submitter's side.
          </p>
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(15, 95, 255, 0.3)' }}
            whileTap={{ scale: 0.95 }}
            className="button-primary inline-flex items-center gap-2"
          >
            Track Demo Issue (#FSV-1024)
            <ArrowRight className="w-4 h-4" />
          </motion.button>
        </motion.div>
      </section>

      {/* ============ USE CASES SECTION ============ */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-custom">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-center mb-12 text-gradient"
          >
            Built for real-world operations
          </motion.h2>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-8"
          >
            {[
              {
                title: 'Manufacturing',
                desc: 'Track supplier quality issues, defects, and production problems in one place.',
              },
              {
                title: 'Restaurants & Hotels',
                desc: 'Collect table feedback with QR codes and respond to customers quickly.',
              },
              {
                title: 'Logistics',
                desc: 'Manage delivery complaints, delays, and driver issues with full visibility.',
              },
              {
                title: 'Real Estate',
                desc: 'Handle tenant maintenance requests and track resolution progress.',
              },
            ].map((useCase, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="bg-gradient-to-br from-slate-50 to-white p-8 rounded-xl border border-slate-200 hover:border-primary hover:shadow-lg transition-all duration-300 card-hover"
              >
                <h3 className="font-bold text-lg mb-2 text-slate-900">{useCase.title}</h3>
                <p className="text-slate-600">{useCase.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ============ DIFFERENTIATION SECTION ============ */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-slate-50 to-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
              Not another form builder
            </h2>
            <p className="text-xl text-slate-600 mb-8">
              Google Forms and Typeform help you <strong>collect</strong> feedback. FeedSolve makes
              sure it gets <strong>resolved</strong>.
            </p>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-4"
            >
              {[
                'Track every issue from start to finish',
                'Assign responsibility to your team',
                'Update status and communicate back',
                'Let submitters follow progress',
              ].map((point, idx) => (
                <motion.div key={idx} variants={itemVariants} className="flex gap-3 items-start">
                  <Check className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                  <p className="text-slate-900 font-medium">{point}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ============ OUTCOME SECTION ============ */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-custom">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-center mb-12 text-gradient"
          >
            From chaos to clarity
          </motion.h2>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-12"
          >
            <motion.div variants={itemVariants} className="space-y-4">
              <h3 className="text-2xl font-bold text-destructive mb-4">Before FeedSolve</h3>
              {['Feedback scattered everywhere', 'No accountability', 'Issues forgotten', 'No visibility'].map(
                (item, idx) => (
                  <div key={idx} className="flex gap-3">
                    <AlertCircle className="w-5 h-5 text-destructive flex-shrink-0 mt-1" />
                    <p className="text-slate-600">{item}</p>
                  </div>
                )
              )}
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-4">
              <h3 className="text-2xl font-bold text-accent mb-4">After FeedSolve</h3>
              {['Every issue tracked', 'Clear ownership', 'Structured resolution', 'Full transparency'].map(
                (item, idx) => (
                  <div key={idx} className="flex gap-3">
                    <Check className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                    <p className="text-slate-900 font-medium">{item}</p>
                  </div>
                )
              )}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ============ PRICING SECTION ============ */}
      <section id="pricing" className="py-16 md:py-24 bg-gradient-to-b from-slate-50 to-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
              Simple pricing. No surprises.
            </h2>
            <p className="text-lg text-slate-600">Start free. Upgrade as you grow.</p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-4 gap-6 mb-8"
          >
            {[
              {
                name: 'FREE',
                price: '$0',
                features: [
                  '1 Feedback Board',
                  '50 Submissions / month',
                  '1 Team Member',
                  'QR Code Access',
                  'Tracking Codes',
                ],
                highlighted: false,
              },
              {
                name: 'STARTER',
                price: '$19',
                features: [
                  '3 Feedback Boards',
                  '500 Submissions / month',
                  '3 Team Members',
                  'Full Resolution Workflow',
                  'Email Notifications',
                ],
                highlighted: false,
              },
              {
                name: 'GROWTH',
                price: '$49',
                features: [
                  '10 Feedback Boards',
                  '5,000 Submissions / month',
                  '10 Team Members',
                  'Public Replies to Submitters',
                  'Advanced Analytics',
                  'Custom Branding',
                ],
                highlighted: true,
              },
              {
                name: 'BUSINESS',
                price: '$129',
                features: [
                  'Unlimited Boards',
                  'Unlimited Submissions',
                  'Unlimited Team Members',
                  'API Access',
                  'Integrations / Webhooks',
                  'Priority Support',
                ],
                highlighted: false,
              },
            ].map((plan, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className={`relative p-6 rounded-2xl border-2 transition-all duration-300 ${
                  plan.highlighted
                    ? 'border-primary bg-gradient-to-br from-blue-50 to-emerald-50 shadow-2xl'
                    : 'border-slate-200 bg-white hover:border-primary hover:shadow-lg'
                }`}
              >
                {plan.highlighted && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-primary text-white px-4 py-1 rounded-full text-xs font-bold shadow-lg"
                  >
                    Most Popular
                  </motion.div>
                )}

                <h3 className="font-bold text-lg mb-2 text-slate-900">{plan.name}</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-gradient">{plan.price}</span>
                  <span className="text-slate-600"> / month</span>
                </div>

                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, fidx) => (
                    <li key={fidx} className="flex gap-2 text-sm">
                      <Check className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-slate-600">{feature}</span>
                    </li>
                  ))}
                </ul>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-full font-semibold py-3 px-4 rounded-lg transition-all duration-300 ${
                    plan.highlighted
                      ? 'button-primary'
                      : 'border-2 border-slate-300 text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  Try Now
                </motion.button>
              </motion.div>
            ))}
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center text-sm text-slate-600"
          >
            Pricing is based on feedback boards, not per user. No hidden fees. Cancel anytime.
          </motion.p>
        </div>
      </section>

      {/* ============ FAQ SECTION ============ */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-custom">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-center mb-12 text-gradient"
          >
            Frequently Asked Questions
          </motion.h2>

          <div className="max-w-2xl mx-auto space-y-4">
            {[
              {
                q: 'Do submitters need an account?',
                a: 'No. Anyone can submit feedback without logging in.',
              },
              {
                q: 'Can feedback be anonymous?',
                a: 'Yes. You can enable anonymous submissions per board.',
              },
              {
                q: 'How long does setup take?',
                a: 'Less than 2 minutes.',
              },
              {
                q: 'Do I need a demo or sales call?',
                a: 'No. Just click "Try Now" and start immediately.',
              },
              {
                q: 'Can I upgrade later?',
                a: 'Yes. You can upgrade anytime as your usage grows.',
              },
            ].map((item, idx) => (
              <motion.details
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="group bg-gradient-to-r from-slate-50 to-white p-6 rounded-lg border border-slate-200 hover:border-primary hover:shadow-md transition-all duration-300 cursor-pointer"
              >
                <summary className="font-semibold text-slate-900 flex items-center justify-between">
                  {item.q}
                  <ChevronRight className="w-5 h-5 text-primary group-open:rotate-90 transition-transform" />
                </summary>
                <motion.p
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  transition={{ duration: 0.3 }}
                  className="text-slate-600 mt-4"
                >
                  {item.a}
                </motion.p>
              </motion.details>
            ))}
          </div>
        </div>
      </section>

      {/* ============ FINAL CTA SECTION ============ */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-blue-500 via-blue-600 to-emerald-500 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full mix-blend-multiply filter blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full mix-blend-multiply filter blur-3xl"></div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="container-custom relative z-10 max-w-2xl mx-auto text-center space-y-6"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Your first resolved issue is 2 minutes away.
          </h2>
          <p className="text-lg text-white/90">Start collecting and resolving feedback today.</p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-primary font-bold py-3 px-8 rounded-lg hover:shadow-2xl transition-all duration-300 inline-flex items-center gap-2"
          >
            Try Now
            <ArrowRight className="w-4 h-4" />
          </motion.button>

          <p className="text-sm text-white/80">No credit card required</p>
        </motion.div>
      </section>

      {/* ============ FOOTER ============ */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="container-custom">
          <div className="grid md:grid-cols-5 gap-8 mb-8">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-2 mb-4">
                <div className="w-6 h-6 bg-gradient-primary rounded flex items-center justify-center">
                  <span className="text-white font-bold text-xs">FS</span>
                </div>
                <span className="font-bold">FeedSolve</span>
              </div>
            </motion.div>

            {[
              { title: 'Product', links: ['Features', 'Pricing'] },
              { title: 'Company', links: ['Contact'] },
              { title: 'Legal', links: ['Privacy Policy', 'Terms'] },
            ].map((col, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
              >
                <h4 className="font-semibold mb-4">{col.title}</h4>
                <ul className="space-y-2">
                  {col.links.map((link) => (
                    <li key={link}>
                      <a href="#" className="text-slate-400 hover:text-white transition">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
            className="border-t border-slate-700 pt-8 text-center text-sm text-slate-400"
          >
            <p>© 2026 FeedSolve. All rights reserved.</p>
          </motion.div>
        </div>
      </footer>
    </div>
  );
}
