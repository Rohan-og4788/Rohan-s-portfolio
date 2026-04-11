const env = import.meta.env

/** Edit values here, or override with VITE_* vars (see `.env.example`). */
export const PROFILE = {
  name: env.VITE_NAME ?? 'Rohan',
  title: env.VITE_TITLE ?? 'Frontend Developer',
  location: env.VITE_LOCATION ?? 'India',
  email: env.VITE_EMAIL ?? 'hello@yourdomain.com',
  github: env.VITE_GITHUB_URL ?? 'https://github.com/your-username',
  linkedin: env.VITE_LINKEDIN_URL ?? 'https://www.linkedin.com/in/your-username/',
  resumeUrl: env.VITE_RESUME_URL ?? '/resume.pdf',
}

export const PROJECTS = [
  {
    title: 'Portfolio (this site)',
    description:
      'Single-page portfolio with React, Tailwind, responsive nav, and smooth in-page navigation.',
    tags: ['React', 'Tailwind', 'Vite'],
    liveUrl: '#home',
    repoUrl: '',
  },
  {
    title: 'Project showcase',
    description:
      'Replace this card with a real project: add a short outcome-focused description and links.',
    tags: ['UI', 'API', 'Responsive'],
    liveUrl: '',
    repoUrl: '',
  },
  {
    title: 'Landing experience',
    description:
      'Another slot for a case study-style project: problem → approach → result.',
    tags: ['Landing', 'UX', 'Performance'],
    liveUrl: '',
    repoUrl: '',
  },
]

export const SKILLS = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Tailwind CSS',
  'Git & GitHub',
  'Responsive UI',
  'Accessibility',
]

export const SECTION_IDS = ['home', 'about', 'projects', 'skills', 'contact']
