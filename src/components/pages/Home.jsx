import { motion } from 'framer-motion'
import HeroSection from '../sections/HeroSection.jsx'
import AboutTeaser from '../sections/AboutTeaser.jsx'
import FeaturedProjects from '../sections/FeaturedProjects.jsx'
import TimelineSection from '../sections/TimelineSection.jsx'
import ServicesSection from '../sections/ServicesSection.jsx'
import TestimonialsSection from '../sections/TestimonialsSection.jsx'
import AchievementsTeaser from '../sections/AchievementsTeaser.jsx'
import SkillsSnapshot from '../sections/SkillsSnapshot.jsx'
import CtaSection from '../sections/CtaSection.jsx'
import Contact from './Contact.jsx'
import {
  ACHIEVEMENTS,
  FEATURED_PROJECTS,
  SKILLS_SNAPSHOT,
} from '../../data/site.js'

export default function Home({ profile }) {
  return (
    <motion.div
      id="home"
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -14 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      className="w-full space-y-4"
    >
      <HeroSection profile={profile} />
      <AboutTeaser profile={profile} />
      <SkillsSnapshot skills={SKILLS_SNAPSHOT} />
      <FeaturedProjects projects={FEATURED_PROJECTS} />
      <TimelineSection />
      <AchievementsTeaser achievements={ACHIEVEMENTS} />
      <ServicesSection />
      <TestimonialsSection />
      <Contact profile={profile} />
      <CtaSection profile={profile} />
    </motion.div>
  )
}
