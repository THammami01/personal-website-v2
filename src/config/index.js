/* eslint-disable max-len */
import featuredProjects from './featured';
import projects from './projects';

module.exports = {
  email: 'tarekhammamix01@gmail.com',
  featuredProjects,
  projects,
  skills: [
    'Python',
    'NodeJS',
    'TypeScript',
    'React',
    'Next.js',
    'MongoDB',
    'Bash',
    'Docker',
    'AWS',
  ],
  socialMedia: [
    {
      name: 'Telegram',
      url: 'https://t.me/THammami01',
    },
    {
      name: 'GitHub',
      url: 'https://github.com/THammami01',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/THammami01/',
    },
    {
      name: 'Stack Overflow',
      url: 'https://stackoverflow.com/users/11542205/tarek-hammami',
    },
  ],

  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    {
      name: 'Work',
      url: '/#projects',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },
    {
      name: 'Blog',
      url: 'https://dev.to/thammami01',
      isExternal: true,
    },
  ],
  colors: {
    green: '#64ffda',
    navy: '#0a192f',
    darkNavy: '#020c1b',
  },
};
