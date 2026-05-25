export const PROFILE = {
  name: 'Rohan Vyavahare',
  title: 'Frontend Developer | Web Developer | AI Enthusiast',
  roles: [
    'Frontend Developer',
    'Web Developer',
    'AI Enthusiast',
    'B.Tech CS Student',
  ],
  tagline:
    'Building futuristic digital experiences with creativity and technology.',
  aboutTeaser:
    'B.Tech Computer Science student at JSPM University with a runner-up hackathon record, passionate about AI and web development, and driven by futuristic tech and strong problem-solving.',
  aboutStory: [
    'I am a B.Tech Computer Science student at JSPM University, blending reactive web experiences with intelligent systems and IoT prototypes.',
    'Runner-up in collegiate hackathons — I ship fast, think in systems, and care about motion, accessibility, and clean architecture.',
    'Passionate about AI + web development, quantum-inspired security concepts, and cloud-native tooling. I learn continuously and build projects that solve real problems.',
  ],
  education: 'B.Tech Computer Science — JSPM University',
  location: 'Maharashtra, India',
  email: 'rohanvyavahare99@gmail.com',
  github: 'https://github.com/Rohan-og4788',
  linkedin: 'https://www.linkedin.com/in/rohanvyavahare/',
  instagram: 'https://www.instagram.com/',
  resumeUrl: '/resume.pdf',
  photoUrl: '',
  availability: 'OPEN FOR INTERNSHIPS & COLLABORATIONS',
}

export const PROJECTS = [
  {
    title: 'Women Safety Emergency App',
    category: 'Full-Stack / Mobile',
    description:
      'Critical safety application with instant SOS triggers, geo-fenced alerts, and live distress coordinate sharing.',
    problem:
      'Traditional safety apps suffer from high latency during SOS triggers, failing to notify nearby civilians rapidly.',
    features: [
      'One-tap emergency siren and geo-location tracking.',
      'Decentralized notifications for registered nearby civilians.',
      'High-contrast holographic UI for low-light quick action.',
    ],
    tags: ['React', 'Node.js', 'Express', 'Tailwind CSS', 'Geolocation API'],
    liveUrl: '#',
    repoUrl: 'https://github.com/Rohan-og4788',
    highlights: ['Low-latency SOS broadcasts', 'Nearby civilian alerts', 'Real-time safety features'],
    glowColor: 'cyan',
  },
  {
    title: 'Smoke Detection Using Arduino',
    category: 'IoT / Hardware',
    description:
      'IoT fire and smoke detection with ESP8266/Arduino, cloud telemetry, and automated safety alerts.',
    problem:
      'Delayed alerts during home fire accidents lead to disastrous property damage and security lapses.',
    features: [
      'Real-time gas/smoke sensor diagnostics to cloud.',
      'Automated alert notifications upon threshold breach.',
      'Live dashboard for sensor status monitoring.',
    ],
    tags: ['Arduino', 'IoT', 'C++', 'ESP8266', 'Firebase', 'Cloud'],
    liveUrl: '#',
    repoUrl: 'https://github.com/Rohan-og4788',
    highlights: ['IoT fire detection', 'AI + cloud integration', 'Automated safety alerts'],
    glowColor: 'red',
  },
  {
    title: 'Temple Crowd Management Website',
    category: 'Web Application',
    description:
      'Smart portal for crowd prediction, festival rush analysis, and devotee convenience with slot booking.',
    problem:
      'Pilgrimage spots face stampede risks from unmonitored crowd surges and lack of predictive ticketing.',
    features: [
      'Rush prediction algorithms from historical festival data.',
      'Virtual slot booking to reduce queue delays.',
      'Interactive heatmaps for bottleneck spots.',
    ],
    tags: ['React', 'Tailwind CSS', 'MongoDB', 'Node.js', 'Chart.js'],
    liveUrl: '#',
    repoUrl: 'https://github.com/Rohan-og4788',
    highlights: ['Crowd prediction', 'Festival rush analysis', 'Devotee convenience'],
    glowColor: 'amber',
  },
  {
    title: 'Quantum Cybersecurity Shield (Q-SecureX)',
    category: 'Future Tech Concepts',
    description:
      'Futuristic command deck simulating post-quantum cryptography, threat vectors, and AI-powered packet analysis.',
    problem:
      'Quantum computing threatens modern RSA-secured structures with faster mathematical decryption.',
    features: [
      'Holographic packet inspection with threat triggers.',
      'Lattice-inspired key exchange simulation.',
      'Real-time cyber logs and alert UI.',
    ],
    tags: ['React', 'Framer Motion', 'Canvas API', 'Tailwind CSS'],
    liveUrl: '#',
    repoUrl: 'https://github.com/Rohan-og4788',
    highlights: ['Quantum-inspired protection', 'AI threat analysis', 'Cyberpunk terminal UI'],
    glowColor: 'violet',
  },
  {
    title: 'Portfolio Website',
    category: 'Creative Web Tech',
    description:
      'Premium interactive portfolio with terminal, AI chatbot, ambient audio, and cinematic animations.',
    problem:
      'Static resumes fail to demonstrate creative implementation and technical personality.',
    features: [
      '3D particle tech sphere with mouse parallax.',
      'Command-line terminal and recruiter AI assistant.',
      'Glassmorphism, matrix rain, and smooth scroll experience.',
    ],
    tags: ['React', 'Tailwind CSS', 'Framer Motion', 'GSAP', 'Lenis'],
    liveUrl: '/',
    repoUrl: 'https://github.com/Rohan-og4788/Rohan-s-portfolio',
    highlights: ['Dynamic UI', 'Advanced animations', 'Interactive experience'],
    glowColor: 'emerald',
  },
]

export const SKILLS = [
  {
    category: 'Frontend',
    items: [
      { name: 'HTML5', level: 95, color: '#e34f26' },
      { name: 'CSS3', level: 92, color: '#264de4' },
      { name: 'JavaScript (ES6+)', level: 88, color: '#f7df1e' },
      { name: 'React.js', level: 86, color: '#00d8ff' },
      { name: 'Tailwind CSS', level: 90, color: '#38bdf8' },
    ],
  },
  {
    category: 'Backend',
    items: [
      { name: 'Node.js', level: 78, color: '#68a063' },
      { name: 'Express.js', level: 80, color: '#ffffff' },
      { name: 'MongoDB', level: 75, color: '#4db33d' },
      { name: 'Firebase', level: 82, color: '#ffca28' },
    ],
  },
  {
    category: 'Programming Languages',
    items: [
      { name: 'Python', level: 80, color: '#3572a5' },
      { name: 'Java', level: 75, color: '#b07219' },
      { name: 'C++', level: 85, color: '#f34b7d' },
    ],
  },
  {
    category: 'Tools',
    items: [
      { name: 'Git & GitHub', level: 90, color: '#f1502f' },
      { name: 'VS Code', level: 92, color: '#007acc' },
      { name: 'Postman', level: 78, color: '#ff6c37' },
      { name: 'Figma', level: 72, color: '#a259ff' },
    ],
  },
  {
    category: 'AI / ML',
    items: [
      { name: 'Machine Learning', level: 70, color: '#ff6b6b' },
      { name: 'Scikit-Learn', level: 68, color: '#f89939' },
      { name: 'Data Structures & Algorithms', level: 85, color: '#a78bfa' },
    ],
  },
  {
    category: 'Cloud',
    items: [
      { name: 'AWS Cloud Foundations', level: 78, color: '#ff9900' },
      { name: 'Azure Basics', level: 72, color: '#0078d4' },
      { name: 'Arduino / ESP8266 IoT', level: 82, color: '#00979d' },
    ],
  },
]

export const FLOATING_TECH = [
  'HTML', 'CSS', 'JavaScript', 'React', 'Node', 'Python', 'Java', 'C++',
  'MongoDB', 'Firebase', 'AWS', 'Git', 'Tailwind', 'ML',
]

export const TIMELINE = [
  {
    type: 'Internship',
    title: 'Machine Learning Intern',
    organization: 'Skillcraft Technology',
    period: '2024',
    description:
      'Built regression and classification pipelines, analyzed feature distributions, and deployed prediction dashboards.',
    skills: ['Python', 'Pandas', 'Scikit-Learn', 'Matplotlib'],
    icon: '💻',
  },
  {
    type: 'Certification',
    title: 'Infosys Springboard DSA Certificate',
    organization: 'Infosys',
    period: '2024',
    description:
      'Mastered sorting, graphs, trees, recursion, and algorithmic optimization with complexity analysis.',
    skills: ['DSA', 'Java', 'Complexity Analysis'],
    icon: '📜',
  },
  {
    type: 'Certification',
    title: 'Azure 303 Beginner Course',
    organization: 'Microsoft',
    period: '2023',
    description:
      'Foundational Azure subscriptions, virtual machines, and active directory concepts.',
    skills: ['Azure Cloud', 'Virtual Machines', 'Active Directory'],
    icon: '🛡️',
  },
  {
    type: 'Certification',
    title: 'AWS Academy Cloud Foundations',
    organization: 'AWS',
    period: '2023',
    description:
      'EC2, S3, RDS, networking, cloud budgeting, and IAM security fundamentals.',
    skills: ['AWS EC2/S3', 'IAM', 'Cloud Security'],
    icon: '☁️',
  },
]

export const ACHIEVEMENTS = [
  {
    title: 'Hackathon Runner-Up',
    description:
      'Secured 2nd place among 50+ teams with agile prototype builds and cloud-integrated solutions.',
    year: '2024',
    tag: 'Innovation',
    icon: '🏆',
  },
  {
    title: 'Tech Event Participation',
    description:
      'Active in college tech fests and coding events — presenting IoT and full-stack project demos.',
    year: '2024',
    tag: 'Community',
    icon: '🎤',
  },
  {
    title: 'Projects Built',
    description:
      '12+ end-to-end projects spanning safety apps, IoT, crowd systems, cybersecurity UI, and portfolios.',
    year: '2023 – 2025',
    tag: 'Engineering',
    icon: '🚀',
  },
  {
    title: 'Certifications Completed',
    description:
      'Infosys DSA, AWS Cloud Foundations, Azure beginner track, and ML internship credentials.',
    year: '2023 – 2024',
    tag: 'Learning',
    icon: '📜',
  },
]

export const SERVICES = [
  {
    title: 'Web Development',
    description:
      'Full-stack web apps with modern React architectures, APIs, and production-ready deployment patterns.',
    features: ['React & Node.js stacks', 'REST API integration', 'Performance-first builds'],
    icon: '🌐',
    color: 'cyan',
  },
  {
    title: 'Frontend Design',
    description:
      'Pixel-perfect, animated interfaces with glassmorphism, neon accents, and Apple-level motion polish.',
    features: ['Framer Motion transitions', 'Responsive layouts', 'Design systems'],
    icon: '🎨',
    color: 'violet',
  },
  {
    title: 'Responsive Websites',
    description:
      'Mobile-first experiences that feel premium on every screen size and device.',
    features: ['Tailwind CSS grids', 'Touch-friendly UX', 'Cross-browser QA'],
    icon: '📱',
    color: 'emerald',
  },
  {
    title: 'AI-Integrated Solutions',
    description:
      'Connect ML models, chatbots, and smart dashboards into beautiful front-end portals.',
    features: ['Chatbot UIs', 'Data visualization', 'API orchestration'],
    icon: '🤖',
    color: 'violet',
  },
  {
    title: 'Portfolio Creation',
    description:
      'Stand-out developer portfolios with 3D effects, terminals, and recruiter-focused storytelling.',
    features: ['Cinematic animations', 'SEO optimization', 'Contact & resume flows'],
    icon: '✨',
    color: 'cyan',
  },
]

export const TESTIMONIALS = [
  {
    quote:
      'Rohan is a quick learner who handles frontend and backend with equal agility. His Smart Smoke Detector and Quantum Shield projects show deep love for technology.',
    author: 'S. K. Patil',
    role: 'Mentor — B.Tech Academic Coordinator',
    avatar: '👨‍🏫',
  },
  {
    quote:
      'During our hackathon, Rohan built the entire responsive frontend of our safety app in 12 hours. His eye for interactive details made our pitch stand out.',
    author: 'Amit Kale',
    role: 'Teammate — Hackathon Lead Programmer',
    avatar: '💻',
  },
  {
    quote:
      'Rohan brings creative energy to every build. He cares about smooth animations, dashboard clarity, and overall user performance.',
    author: 'Neha Deshmukh',
    role: 'Client — IoT Lab Partner',
    avatar: '👩‍🔬',
  },
]

export const STATS = [
  { value: '12+', label: 'Projects Completed' },
  { value: '4+', label: 'Hackathons' },
  { value: '6+', label: 'Certifications' },
  { value: '15+', label: 'Technologies Learned' },
]

export const SKILLS_SNAPSHOT = [
  { key: 'html', label: 'HTML5', level: 95 },
  { key: 'css', label: 'CSS3 & Tailwind', level: 92 },
  { key: 'js', label: 'JavaScript', level: 88 },
  { key: 'react', label: 'React.js', level: 86 },
  { key: 'dsa', label: 'DSA', level: 85 },
  { key: 'arduino', label: 'IoT & Arduino', level: 82 },
  { key: 'aws', label: 'AWS Cloud', level: 78 },
]

export const FEATURED_PROJECTS = PROJECTS.slice(0, 3)
