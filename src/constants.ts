// TODO: to be defined
export const WHAT_CAN_I_DO_TEXTS = [];

// export const BACKEND_URL = 'https://private-a65849-personalpage1.apiary-mock.com/';

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
