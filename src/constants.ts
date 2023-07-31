import colors from 'public/inspiration_icons/wheel.png';
import constitution from 'public/inspiration_icons/constitution.png';
import css from 'public/inspiration_icons/css.png';
import design from 'public/inspiration_icons/design.png';
import font from 'public/inspiration_icons/font.png';
import literature from 'public/inspiration_icons/literature.png';
import pictures from 'public/inspiration_icons/pictures.png';
import programming from 'public/inspiration_icons/programming.png';
import travel from 'public/inspiration_icons/travel.png';
import code from 'public/inspiration_icons/code.png';

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

export const COOKBOOKS_TO_SHOW = 4;

export const REGISTERS_PER_PAGE = 6;

export const INSPIRATION_CARDS = [
  {
    title: 'Colors',
    image: colors,
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
      },
      {
        text: 'Gradient Generator',
        link: 'https://www.joshwcomeau.com/gradient-generator/'
      }
    ]
  },
  {
    title: 'CSS',
    image: css,
    links: [
      {
        text: 'Codrops: CSS Reference',
        link: 'https://tympanus.net/codrops/css_reference/'
      },
      {
        text: 'CSS vocabs',
        link: 'http://apps.workflower.fi/vocabs/css/en'
      },
      {
        text: 'Modern CSS Solutions',
        link: 'https://moderncss.dev/'
      },
      {
        text: 'Selectors Level 4',
        link: 'https://drafts.csswg.org/selectors-4/#overview'
      }
    ]
  },
  {
    title: 'Design',
    image: design,
    links: [
      {
        text: 'Figma Mastery',
        link: 'https://www.howtodesignbetter.com/figma-mastery'
      },
      {
        text: 'UX Challenges',
        link: 'https://uxtools.co/challenges'
      },
      {
        text: 'Project 365',
        link: 'https://project365.design/'
      },
      {
        text: 'Collect UI',
        link: 'https://collectui.com/designs'
      },
    ]
  },
  {
    title: 'English',
    image: literature,
    links: [
      {
        text: 'Free4Talk',
        link: 'https://www.free4talk.com/'
      },
      {
        text: 'ReadTheory',
        link: 'https://readtheory.org/'
      },
      {
        text: 'Ororo',
        link: 'https://ororo.tv/en'
      },
      {
        text: 'Speech notes',
        link: 'https://speechnotes.co/'
      },
      {
        text: 'Engoo',
        link: 'https://engoo.com/'
      }
    ]
  },
  {
    title: 'Italian',
    image: constitution,
    links: [
      {
        text: 'Lingua',
        link: 'https://lingua.com/it/'
      },
      {
        text: 'The Fable Cottage',
        link: 'https://www.thefablecottage.com/languages/italian'
      },
      {
        text: 'The Italian experiment',
        link: 'https://www.theitalianexperiment.com/stories'
      },
      {
        text: 'Speech notes',
        link: 'https://speechnotes.co/'
      },
      {
        text: '@italianoautomatico',
        link: 'https://youtube.com/@italianoautomatico'
      }
    ]
  },
  {
    title: 'Fonts',
    image: font,
    links: [
      {
        text: 'Font share',
        link: 'https://www.fontshare.com/'
      },
      {
        text: 'Free faces',
        link: 'https://www.freefaces.gallery/'
      },
      {
        text: 'Randoma11y',
        link: 'https://randoma11y.com/'
      }
    ]
  },
  {
    title: 'Pictures',
    image: pictures,
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
      },
      {
        text: 'Free icons',
        link: 'https://freeicons.io/'
      }
    ]
  },
  {
    title: 'Travel',
    image: travel,
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
        text: 'Better life',
        link: 'https://www.oecdbetterlifeindex.org/'
      }
    ]
  },
  {
    title: 'Development',
    image: programming,
    links: [
      {
        text: 'Websites a programmer should visit',
        link: 'https://github.com/sdmg15/Best-websites-a-programmer-should-visit'
      },
      {
        text: 'Public APIs',
        link: 'https://github.com/public-apis/public-apis'
      },
      {
        text: 'Code talks',
        link: 'https://codetalks.tv/'
      },
      {
        text: 'Any APIs',
        link: 'https://any-api.com/'
      },
      {
        text: 'Roadmap',
        link: 'https://roadmap.sh/'
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
    title: 'Coding',
    image: code,
    links: [
      {
        text: 'Exercism',
        link: 'https://exercism.org/'
      },
      {
        text: 'Hacker rank',
        link: 'https://www.hackerrank.com/'
      },
      {
        text: 'Daily coding problem',
        link: 'https://www.dailycodingproblem.com/'
      },
      {
        text: 'Code signal',
        link: 'https://codesignal.com/'
      },
      {
        text: '30 seconds of code',
        link: 'https://www.30secondsofcode.org/'
      },
      {
        text: 'Free frontend',
        link: 'https://freefrontend.com/'
      },
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
