// gitprofile.config.js

const config = {
  github: {
    username: 'suign', // Your GitHub org/user name. (Required)
    sortBy: 'stars', // stars | updated
    limit: 4, // How many projects to display.
    exclude: {
      forks: false, // Forked projects will not be displayed if set to true.
      projects: [], // These projects will not be displayed. example: ['my-project1', 'my-project2']
    },
  },
  social: {
    linkedin: 'suign',
    instagram: 'jabella.e',
    medium: 'suign',
    website: 'https://neurons.me'
  },
  resume: {
    fileUrl:
      '', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'JavaScript',
    'TypeScript',
    'ECMAScript',
    'React',
    'React Native',
    'Node.js',
    'Next.js'
  ],
  experiences: [
    {
      company: 'Flaunt Magazine',
      position: 'IT & Accounting',
      from: 'September 2014',
      to: 'Present',
      companyLink: 'https://flauntmagazine.com',
    },
    {
      company: 'neurons.me',
      position: 'Developer',
      from: 'July 2012',
      to: 'Present',
      companyLink: 'https://neurons.me',
    }
  ],
  certifications: [
    {
      name: 'Stanford University Online',
      body: 'Machine Learning',
      year: 'March 22 2022',
      link: 'https://www.coursera.org/account/accomplishments/certificate/M5N8KUD9UT53'
    },
    {
      name: 'Learn C Course',
      body: 'Codecademy',
      year: 'March 2023',
      link: 'https://www.codecademy.com/profiles/suiGn/certificates/8c3029c4a6e5894e74da756e3a7c0ae3'
    },
    {
      name: 'Blockchain with Python Course',
      body: 'Codecademy',
      year: 'March 2023',
      link: 'https://www.codecademy.com/profiles/suiGn/certificates/f21a464d190cb43e78b83ca8d1f0c6b0'
    }
  ], 
  education: [
    {
      institution: 'Escuela de Aviación México',
      degree: 'Piloto Helicoptero Privado',
      from: '2012',
      to: '2013',
    },
    {
      institution: 'Institution Name',
      degree: 'Degree',
      from: '2012',
      to: '2014',
    },
  ],
 
  // To hide the `My Projects` section, keep it empty.
  externalProjects: [
    {
      title: 'FullTrailer',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.',
      imageUrl: 'https://via.placeholder.com/250x250',
      link: 'https://example.com',
    },
    {
      title: 'OrgBoat',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.',
      imageUrl: 'https://via.placeholder.com/250x250',
      link: 'https://example.com',
    },
  ],
  // Display blog posts from your medium or dev account. (Optional)
  blog: {
    source: 'medium', // medium | dev
    username: 'suign', // to hide blog section, keep it empty
    limit: 4, // How many posts to display. Max is 10.
  },
  googleAnalytics: {
    id: 'G-TQPLSH796Z', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  themeConfig: {
    defaultTheme: 'business',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: true,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: true,

    // Hide the ring in Profile picture
    hideAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'procyon',
    ],

    // Custom theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `By <a 
      class="text-primary" href="https://neurons.me"
      target="_blank"
      rel="noreferrer"
    >neurons</a> and ❤️ me`,
};

export default config;
