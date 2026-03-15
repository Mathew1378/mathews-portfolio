import {
  SiPython, SiMongodb, SiMysql, SiGit
} from 'react-icons/si';
import {
  FaShieldAlt, FaNetworkWired, FaCloud, FaCode,
  FaServer, FaDatabase, FaLock, FaBug, FaCertificate,
  FaEnvelope, FaLinkedin, FaGithub, FaPhone,
  FaMapMarkerAlt, FaDownload, FaExternalLinkAlt, FaEye,
  FaAws, FaJava, FaHtml5, FaCss3Alt, FaUserSecret,
  FaMicrochip, FaRobot, FaLaptopCode
} from 'react-icons/fa';
import {
  HiAcademicCap, HiLightBulb, HiChip, HiGlobeAlt
} from 'react-icons/hi';

// ─────────────── Personal Info ───────────────
export const personalInfo = {
  name: "Mathews T. Kovoor",
  title: "Aspiring Cybersecurity & Software Developer",
  subtitle: "Building Expertise in Networking, Cloud Security & Ethical Hacking",
  typingStrings: [
    'Cybersecurity Enthusiast',
    'Software Developer',
    'Cloud Security Learner',
    'Networking Explorer',
    'Tech Problem Solver',
  ],
  bio: `Aspiring IT & Cybersecurity Professional with a passion for safeguarding digital systems.
    A motivated technology enthusiast aiming to build a career in cybersecurity and software
    development by applying strong problem-solving skills, technical knowledge, and a passion
    for protecting digital systems and developing secure applications.`,
  objective: `Seeking to leverage my knowledge in Cybersecurity, Cloud Security, Networking,
    and Software Development to contribute to organizations focused on building secure and
    innovative digital solutions.`,
  email: "nitinthomas45@gmail.com",
  phone: "+91 8971233168",
  location: "Bengaluru, Karnataka, India",
  resumeUrl: "https://drive.google.com/file/d/1ccHla9ZjRBu0wvGFjd_2c3OI3Wh3BHkd/view?usp=sharing",
  social: {
    linkedin: "https://www.linkedin.com/in/mathew-thomas-kovoor",
    github: "#",
  },
};

// ─────────────── Navigation Links ───────────────
export const navLinks = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'timeline', label: 'Journey' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'contact', label: 'Contact' },
];

// ─────────────── Tech Stack Icons (About Section) ───────────────
export const techStack = [
  { icon: FaJava, name: 'Java', color: '#ED8B00' },
  { icon: SiPython, name: 'Python', color: '#3776AB' },
  { icon: FaHtml5, name: 'HTML', color: '#E34F26' },
  { icon: FaCss3Alt, name: 'CSS', color: '#1572B6' },
  { icon: FaShieldAlt, name: 'Network Security', color: '#4FC3F7' },
  { icon: FaUserSecret, name: 'Ethical Hacking', color: '#00E676' },
  { icon: FaAws, name: 'AWS', color: '#FF9900' },
  { icon: FaCloud, name: 'Cloud Computing', color: '#42A5F5' },
  { icon: SiMysql, name: 'MySQL', color: '#4479A1' },
  { icon: SiMongodb, name: 'MongoDB', color: '#47A248' },
  { icon: SiGit, name: 'Git', color: '#F05032' },
  { icon: FaGithub, name: 'GitHub', color: '#ffffff' },
  { icon: FaLaptopCode, name: 'VS Code', color: '#007ACC' },
  { icon: FaMicrochip, name: 'Arduino IDE', color: '#00979D' },
];

// ─────────────── Skills Data ───────────────
export const skillCategories = [
  {
    title: 'Programming Languages',
    icon: FaCode,
    color: '#a855f7',
    skills: [
      { name: 'Java', level: 75 },
      { name: 'Python', level: 70 },
      { name: 'C', level: 60 },
      { name: 'SQL', level: 65 },
    ],
  },
  {
    title: 'Cybersecurity',
    icon: FaShieldAlt,
    color: '#3b82f6',
    skills: [
      { name: 'Network Security', level: 70 },
      { name: 'Ethical Hacking', level: 65 },
      { name: 'Cryptography', level: 60 },
      { name: 'Vulnerability Assessment', level: 65 },
      { name: 'Secure Coding', level: 60 },
    ],
  },
  {
    title: 'Cloud Technologies',
    icon: FaCloud,
    color: '#06b6d4',
    skills: [
      { name: 'AWS Fundamentals', level: 65 },
      { name: 'Cloud Computing', level: 60 },
      { name: 'Cloud Security', level: 55 },
      { name: 'Virtual Machines', level: 60 },
      { name: 'Linux Server', level: 55 },
      { name: 'Cloud Networking', level: 50 },
    ],
  },
  {
    title: 'Networking',
    icon: FaNetworkWired,
    color: '#ec4899',
    skills: [
      { name: 'TCP/IP', level: 70 },
      { name: 'DNS', level: 65 },
      { name: 'HTTP/HTTPS', level: 70 },
      { name: 'Routing & Switching', level: 60 },
      { name: 'Network Troubleshooting', level: 65 },
    ],
  },
  {
    title: 'Web Development',
    icon: HiGlobeAlt,
    color: '#f59e0b',
    skills: [
      { name: 'HTML5', level: 80 },
      { name: 'CSS3', level: 75 },
      { name: 'JavaScript', level: 60 },
    ],
  },
];

// ─────────────── Projects Data ───────────────
export const projects = [
  {
    title: 'Integrated Library Management System',
    description: 'A comprehensive Java Swing-based desktop application for library management featuring book cataloging, member registration, book issue/return tracking, and fine calculation. Connected to a relational database (MySQL) for persistent data storage and retrieval.',
    technologies: ['Java', 'Swing', 'MySQL', 'JDBC'],
    image: null,
    category: 'Desktop App',
    year: '2023',
    highlights: ['CRUD operations for books & members', 'Relational database connectivity', 'User-friendly GUI interface'],
  },
  {
    title: 'Smart Blind Stick',
    description: 'An IoT-enabled smart walking stick designed to assist visually impaired individuals. Uses ultrasonic sensors to detect obstacles, water sensors for puddle detection, and provides real-time feedback through buzzers and vibration motors for safe navigation.',
    technologies: ['Arduino', 'IoT', 'Ultrasonic Sensor', 'C++'],
    image: null,
    category: 'IoT',
    year: '2025',
    highlights: ['Obstacle detection via ultrasonic sensors', 'Water/puddle sensing', 'Real-time audio & haptic alerts'],
  },
  {
    title: 'Gas Leakage Detection Device',
    description: 'An IoT-based safety device that detects gas leaks in real-time using MQ-2 gas sensors. Triggers audio-visual alarms and can send notifications for immediate action, enhancing household and industrial safety.',
    technologies: ['Arduino', 'IoT', 'MQ-2 Sensor', 'C++'],
    image: null,
    category: 'IoT',
    year: '2025',
    highlights: ['Real-time gas leak detection', 'Buzzer & LED alert system', 'Safety automation'],
  },
  {
    title: 'Hostel Management System',
    description: 'A full-featured web application built with Python Django for managing hostel operations including room allocation, student registration, fee management, and complaint tracking. Integrated with a database management system for efficient data handling.',
    technologies: ['Python', 'Django', 'HTML', 'CSS', 'SQLite'],
    image: null,
    category: 'Web App',
    year: '2026',
    highlights: ['Room allocation & management', 'Student registration portal', 'Fee tracking & reporting'],
  },
];

// ─────────────── Timeline Data ───────────────
export const timelineData = [
  {
    year: '2025 – 2027',
    title: 'Master of Computer Applications (MCA)',
    subtitle: 'Kristu Jayanti University, Bengaluru',
    description: 'Currently pursuing MCA with specialization in IT and Cybersecurity. Gaining advanced knowledge in cloud security, ethical hacking, and software development.',
    icon: HiAcademicCap,
    type: 'education',
  },
  {
    year: '2022 – 2025',
    title: 'Bachelor of Computer Applications (BCA)',
    subtitle: 'CMR University, Bengaluru',
    description: 'Completed BCA with a strong foundation in computer science, programming, databases, networking, and software engineering.',
    icon: HiAcademicCap,
    type: 'education',
  },
  {
    year: '2022',
    title: 'Higher Secondary (12th)',
    subtitle: 'Kendriya Vidyalaya School',
    description: 'Completed 12th standard education, building a foundation in science and mathematics.',
    icon: HiAcademicCap,
    type: 'education',
  },
  {
    year: '2020',
    title: 'Secondary School (10th)',
    subtitle: 'Lake Montfort School',
    description: 'Completed 10th standard education with a focus on core academic disciplines.',
    icon: HiAcademicCap,
    type: 'education',
  },
];

// ─────────────── Certifications ───────────────
export const certifications = [
  {
    title: 'CISCO Certified Support Technician – Cybersecurity',
    issuer: 'Certiport',
    date: '2025',
    icon: FaNetworkWired,
    color: '#1BA0D7',
    credentialUrl: '#',
  },
  {
    title: 'Cynux Cybersecurity CS-100',
    issuer: 'Cynux Era',
    date: '2025',
    icon: FaShieldAlt,
    color: '#00E676',
    credentialUrl: '#',
  },
  {
    title: 'Cloud Computing',
    issuer: 'NPTEL',
    date: '2024',
    icon: FaCloud,
    color: '#42A5F5',
    credentialUrl: '#',
  },
  {
    title: 'Artificial Intelligence',
    issuer: 'Udemy',
    date: '2024',
    icon: FaRobot,
    color: '#FF6F00',
    credentialUrl: '#',
  },
  {
    title: 'Cyber Security',
    issuer: 'Udemy',
    date: '2023',
    icon: FaLock,
    color: '#EF5350',
    credentialUrl: '#',
  },
  {
    title: 'Ethical Hacking',
    issuer: 'Udemy',
    date: '2023',
    icon: FaUserSecret,
    color: '#AB47BC',
    credentialUrl: '#',
  },
];

// ─────────────── Stats ───────────────
export const stats = [
  { value: 4, label: 'Projects Completed', suffix: '' },
  { value: 11, label: 'Technologies Learned', suffix: '+' },
  { value: 6, label: 'Certifications Earned', suffix: '' },
  { value: 3, label: 'Years of Learning', suffix: '+' },
];
