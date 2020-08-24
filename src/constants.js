export const LANGUAGES = {
  EN: 'en',
  IT: 'it'
};

export const WHAT_CAN_I_DO = [
  'WHAT_I_CAN_DO_1',
  'WHAT_I_CAN_DO_2',
  'WHAT_I_CAN_DO_3',
  'WHAT_I_CAN_DO_4',
  'WHAT_I_CAN_DO_5',
  'WHAT_I_CAN_DO_6',
  'WHAT_I_CAN_DO_7',
  'WHAT_I_CAN_DO_8',
  'WHAT_I_CAN_DO_9'
];

export const BACKEND_URL = 'https://private-a65849-personalpage1.apiary-mock.com/';

export const CHALLENGES_REG_PER_PAGE = 6;

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
  }
];

export const buildThresholdList = (steps) => {
  const thresholds = [0];

  for (let i = 1.0; i <= steps; i++) {
    const ratio = i / steps;
    thresholds.push(ratio);
  }

  return thresholds;
};
