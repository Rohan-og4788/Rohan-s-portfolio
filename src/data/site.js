export const PROFILE = {
  name: 'Rohan Vyavahare',
  title: 'Web Developer & Aspiring Software Engineer',
  roles: ['Web Developer', 'Problem Solver', 'Tech Enthusiast', 'Cloud Explorer'],
  /** Short line under the typing roles — keep it punchy for recruiters. */
  tagline: 'I craft fast, accessible interfaces — and ship with clarity.',
  aboutTeaser: 'I build modern, scalable web applications with strong focus on performance and user experience. Passionate about solving real-world problems using technology.',
  /** Longer story blocks for the landing page (each paragraph is a string). */
  aboutStory: [
    'I’m a B.Tech student who treats the browser like a product: performance, accessibility, and UX details matter as much as the feature list.',
    'From IoT prototypes to polished React apps, I like owning problems end-to-end — sketching the UI, tightening the logic, and validating the outcome.',
    'Right now, I’m focused on deepening full-stack patterns, cloud fundamentals, and writing code that teammates can read six months later.',
  ],
  description: 'B.Tech Student with a passion for building performant web applications, exploring Cloud architectures, and solving problems.',
  location: 'India',
  email: 'hello@rohanvyavahare.com', // Placeholder, user can update
  github: 'https://github.com/Rohan-og4788',
  linkedin: 'https://www.linkedin.com/in/rohanvyavahare/', // Placeholder
  resumeUrl: '/resume.pdf',
  /** Optional profile image URL. If empty, a generated avatar is used on the landing page. */
  photoUrl: '',
}

export const PROJECTS = [
  {
    title: 'Smart Smoke Detection System',
    description: 'An IoT-based smoke detection system combining hardware and software for real-time monitoring and alerting.',
    tags: ['Arduino', 'IoT', 'C++'],
    liveUrl: '', // Add live URL if exists
    repoUrl: 'https://github.com/Rohan-og4788', // Update with actual URL
    highlights: ['Real-time alerts', 'Hardware integration', 'Safety-critical'],
  },
  {
    title: 'Developer Portfolio',
    description: 'A modern, highly animated portfolio website to showcase my skills, projects, and achievements.',
    tags: ['React', 'Tailwind CSS', 'Framer Motion'],
    liveUrl: '/',
    repoUrl: 'https://github.com/Rohan-og4788/Rohan-s-portfolio',
    highlights: ['Smooth Animations', 'Responsive Design', 'Performance Optimized'],
  },
  // Add another project here
]

export const SKILLS = [
  { category: 'Frontend', items: ['HTML', 'CSS', 'JavaScript', 'React', 'Tailwind CSS'] },
  { category: 'Computer Science', items: ['Data Structures & Algorithms (DSA)', 'Basic Machine Learning'] },
  { category: 'Cloud & Hardware', items: ['Cloud (AWS)', 'Arduino / IoT'] },
]

export const ACHIEVEMENTS = [
  {
    title: 'Hackathon Runner-Up',
    description: 'Secured runner-up position demonstrating quick problem-solving and full-stack integration under time pressure.',
    year: '2023',
    icon: '🏆'
  },
  {
    title: 'Software Development Intern',
    description: 'Hands-on experience building scalable applications and optimizing user interfaces.',
    year: '2024',
    icon: '💻'
  },
  {
    title: 'Certifications',
    description: 'Completed comprehensive courses in Full-Stack Development and Cloud Architectures.',
    year: '2024',
    icon: '📜'
  }
]

export const SECTION_IDS = ['home', 'about', 'skills', 'projects', 'achievements', 'contact']

/** Snapshot row for the landing page (labels + rough proficiency for glow bars). */
export const SKILLS_SNAPSHOT = [
  { key: 'html', label: 'HTML', level: 94 },
  { key: 'css', label: 'CSS', level: 90 },
  { key: 'js', label: 'JavaScript', level: 88 },
  { key: 'react', label: 'React', level: 86 },
  { key: 'dsa', label: 'DSA', level: 82 },
  { key: 'aws', label: 'AWS', level: 72 },
  { key: 'arduino', label: 'Arduino', level: 78 },
]

/** First N projects highlighted on the home page — adjust slice or list explicitly. */
export const FEATURED_PROJECTS = PROJECTS.slice(0, 3)
