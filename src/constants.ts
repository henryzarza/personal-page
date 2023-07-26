export const WHAT_DO_I_KNOW_LIST = [
  "<strong>JavaScript</strong> using some <strong>Web APIs, Service worker, web workers</strong>. Currently, I'm improving my <strong>VueJS</strong> skills and learning <strong>Svelte</strong>.",
  "<strong>ReactJS</strong> using some <strong>libraries, GraphQL, Redux, Hooks</strong>, and <strong>Context API</strong>. I'm improving my <strong>React Native</strong> skills",
  "<strong>Angular</strong> using some <strong>libraries, NGRX, and RxJS.</strong>",
  "<strong>CSS</strong> using <strong>SCSS, Less, and Stylus</strong> preprocessors. <strong>Libraries</strong> and frameworks (<strong>Bootstrap, Materialize, Foundation, Material Design, Tachyons, Tailwind, and Chakra UI</strong>). <strong>CSS modules and styled components</strong>.",
  "<strong>HTML</strong> using several <strong>APIs</strong>, and preprocessors (<strong>Pug, Slim, and Handlebars)</strong>.",
  "<strong>Git</strong> and <strong>gitflow</strong>.",
  "<strong>NodeJS</strong> using <strong>Express</strong> framework. I'm learning <strong>Nest</strong>",
  "Database management system (<strong>PostgreSQL, MySQL, Oracle 10g - 11g</strong> using <strong>PL/SQL</strong>, <strong>SQL Server</strong> using <strong>Transact SQL)</strong>, and MongoDB.",
  "Testing libraries: <strong>React Testing Library, Mocha, Jest,</strong>, and <strong>Test Cafe</strong>. I'm learning <strong>Playwright</strong>",
];

export const PROJECTS_TO_SHOW = 3;

export const REGISTERS_PER_PAGE = 6;

// TODO: to be defined
export const INSPIRATION_CARDS = [
  {
    title: 'INSPIRATION_DESIGN',
    links: [
      {
        text: 'Dribbble',
        link: 'https://dribbble.com/'
      },
      {
        text: 'Figma',
        link: 'https://www.figma.com/'
      },
      {
        text: 'Behance',
        link: 'https://www.behance.net/'
      },
      {
        text: 'Project 365',
        link: 'https://project365.design/'
      }
    ]
  },
  {
    title: 'INSPIRATION_DEVELOPMENT',
    links: [
      {
        text: 'Free frontend',
        link: 'https://freefrontend.com/'
      },
      {
        text: 'Github web sites',
        link: 'https://github.com/sdmg15/Best-websites-a-programmer-should-visit'
      },
      {
        text: 'Tympanus',
        link: 'https://tympanus.net/'
      },
      {
        text: 'Code talks',
        link: 'https://codetalks.tv/'
      },
      {
        text: 'CSS vocabs',
        link: 'http://apps.workflower.fi/vocabs/css/en'
      }
    ]
  },
  {
    title: 'INSPIRATION_COLORS',
    links: [
      {
        text: 'Coolor',
        link: 'http://coolors.co/'
      },
      {
        text: 'Colormind',
        link: 'http://colormind.io/'
      },
      {
        text: 'Gradient magic',
        link: 'https://www.gradientmagic.com/'
      },
      {
        text: 'Name that color',
        link: 'http://chir.ag/projects/name-that-color/'
      }
    ]
  },
  {
    title: 'INSPIRATION_PICTURES',
    links: [
      {
        text: 'Unsplash',
        link: 'https://unsplash.com/'
      },
      {
        text: 'Freepik',
        link: 'https://www.freepik.com/'
      },
      {
        text: 'Flaticon',
        link: 'https://www.flaticon.com/'
      }
    ]
  },
  {
    title: 'INSPIRATION_CAREER',
    links: [
      {
        text: 'Roadmap',
        link: 'https://roadmap.sh/'
      },
      {
        text: 'Codrops',
        link: 'https://tympanus.net/codrops/css_reference/'
      },
      {
        text: '30 seconds of code',
        link: 'https://www.30secondsofcode.org/'
      },
      {
        text: 'Code tidbits',
        link: 'https://www.samanthaming.com/tidbits/'
      },
      {
        text: 'Data structures & Algorithms',
        link: 'https://techdevguide.withgoogle.com/paths/data-structures-and-algorithms/'
      }
    ]
  },
  {
    title: 'INSPIRATION_TRIPS',
    links: [
      {
        text: 'Nomadlist',
        link: 'https://nomadlist.com/'
      },
      {
        text: 'Numbeo',
        link: 'https://www.numbeo.com/cost-of-living/'
      },
      {
        text: 'Do you need visa?',
        link: 'https://www.doyouneedvisa.com/'
      },
      {
        text: 'A soft murmur',
        link: 'https://asoftmurmur.com/'
      }
    ]
  }
];

export const buildThresholdList = (steps: number) => {
  const thresholds = [0];

  for (let i = 1; i <= steps; i++) {
    const ratio = i / steps;
    thresholds.push(ratio);
  }

  return thresholds;
};
