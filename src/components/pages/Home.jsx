import { motion } from 'framer-motion'
import HeroSection from '../sections/HeroSection.jsx'
import AboutBrief from '../sections/AboutBrief.jsx'
import FeaturedProjects from '../sections/FeaturedProjects.jsx'
import CtaSection from '../sections/CtaSection.jsx'
import { FEATURED_PROJECTS } from '../../data/site.js'

const HOME_PROJECTS = FEATURED_PROJECTS.slice(0, 2)

export default function Home({ profile }) {
  return (
    <motion.div
      id="home"
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -14 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      className="w-full"
    >
      <HeroSection profile={profile} compact />
      <AboutBrief profile={profile} />
      <FeaturedProjects projects={HOME_PROJECTS} compact />
      <CtaSection profile={profile} compact />
    </motion.div>
  )
}
