import { Experience, Education } from '../types';

export const experiences: Experience[] = [
  {
    id: '1',
    title: 'Technical Support Executive',
    company: 'Techmero Solutions Pvt. Ltd.',
    duration: 'May 2024 – Present',
    current: true,
    description: [
      'Provide technical support for cloud infrastructure and DevOps tools',
      'Troubleshoot CI/CD pipeline issues and deployment failures',
      'Assist clients with AWS service configurations and best practices',
      'Document solutions and create knowledge base articles',
      'Collaborate with development teams to improve system reliability'
    ]
  },
  {
    id: '2',
    title: 'Technical Support Executive',
    company: 'Dots & Coms',
    duration: 'June 2023 – May 2024',
    description: [
      'Managed cloud infrastructure and provided technical support',
      'Implemented monitoring solutions for client applications',
      'Automated routine maintenance tasks using scripts',
      'Resolved complex technical issues and system outages',
      'Trained junior team members on DevOps practices'
    ]
  },
  {
    id: '3',
    title: 'Student Associate',
    company: 'Vadodara Startup Studio',
    duration: '2022 – 2023',
    description: [
      'Supported startup founders with technical infrastructure setup',
      'Conducted research on emerging technologies and trends',
      'Assisted in organizing technical workshops and events',
      'Contributed to open-source projects and community initiatives'
    ]
  },
  {
    id: '4',
    title: 'Security Researcher',
    company: 'Independent',
    duration: 'March 2020 – July 2021',
    description: [
      'Conducted vulnerability assessments and penetration testing',
      'Researched security flaws in web applications and networks',
      'Published security advisories and responsible disclosure reports',
      'Participated in bug bounty programs and CTF competitions',
      'Developed security tools and automation scripts'
    ]
  }
];

export const education: Education[] = [
  {
    id: '1',
    degree: 'B.Tech in Cyber Security',
    institution: 'Parul Institute of Technology',
    duration: '2022 – 2026',
    description: 'Specializing in cybersecurity, cloud security, and DevSecOps practices. Relevant coursework includes network security, cryptography, and secure software development.'
  },
  {
    id: '2',
    degree: 'Diploma in Information Technology',
    institution: 'Parul University',
    duration: '2019 – 2022',
    description: 'Foundation in computer science, programming, and system administration. Focused on networking, database management, and web technologies.'
  }
];