// gitprofile.config.js

const config = {
  github: {
    username: 'neurons-me', // Your GitHub org/user name. (Required)
    sortBy: 'stars', // stars | updated
    limit: 4, // How many projects to display.
    exclude: {
      forks: false, // Forked projects will not be displayed if set to true.
      projects: [], // These projects will not be displayed. example: ['my-project1', 'my-project2']
    },
  },
  social: {
    instagram: 'neurons.me',
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
    'Next.js',
    'Express.js',
    'PostgreSQL',
    'Octave'
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
    }
  ],
 
  // To hide the `My Projects` section, keep it empty.
  externalProjects: [
    {
      title: 'neurons.me',
      description:
        'Unlock the Power of Modulation.',
      imageUrl: '/portfolio/green_neurons_logo.png',
      link: 'https://neurons.me',
    },
    {
      title: 'DelPaís.mx',
      description:
        'Diversos aspectos de la sociedad: cultura, educación, periodismo, música y arte.',
      imageUrl: '/portfolio/representa_mexicana_siembra.delpais.mx.png',
      link: 'https://delpais.mx',
    },
    {
      title: 'FullTrailer',
      description:
        'Empowering FullTrailer Operations and Logistics...',
      imageUrl: '/portfolio/FullTrailer.com.mx_logo-removebg-preview.png',
      link: 'https://fulltrailer.com.mx',
    },
    {
      title: 'OrgBoat',
      description:
        'OrgBoat will give you the tools you need to establish the foundation of any organization.',
      imageUrl: '/portfolio/orgboat_portfolio.png',
      link: 'https://orgboat.me',
    }
  ],
  // Display blog posts from your medium or dev account. (Optional)
  blog: {
    source: 'medium', // medium | dev
    username: 'suign', // to hide blog section, keep it empty
    limit: 6, // How many posts to display. Max is 10.
  },
  googleAnalytics: {
    id: 'G-TQPLSH796Z', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  themeConfig: {
    defaultTheme: 'cupcake',

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
      'procyon'
    ],

    // Custom theme
    customTheme: {
      primary: '#65c3c8',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: 'black',
      'base-100': '#E3E3ED',
      '--rounded-box': '1rem',
      '--rounded-btn': '1rem'
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `<a 
      class="text-primary" href="https://neurons.me"
      target="_blank"
      rel="noreferrer"
    >neurons.me</a>`,
};

export default config;
