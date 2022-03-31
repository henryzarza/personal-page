import i18next from 'i18next';

i18next.init({
  lng: 'en',
  initImmediate: false
});

i18next.addResources('en', 'MAIN', {
  NAME: 'Henry Zarza',
  PROFESSION: 'Web developer',
  WHO_I_AM: 'Who am I?',
  WHO_I_AM_TEXT:
    "Hello there! My name is Henry, I'm a system engineer from Medellín (Colombia), I'm considered myself dedicated about what I like, I love to push my limits and face new challenges, reading, sharing my knowledge, learning new things, languages, music, walking, rollerblading, swimming, and meditation. Currently, I'm studying English and Italian, as well as improving my knowledge in web development. I'm one of the coorganizers of <strong>MedellinCSS</strong> community.",
  KEEP_TOUCH: "Let's keep in touch:",
  WHAT_CAN_I_DO_TITLE: 'What can I do?',
  WHAT_CAN_I_DO_1:
    "<strong>JavaScript</strong> using some <strong>Web APIs, Service worker, web workers</strong>. Currently, I'm learning <strong>VueJS</strong> framework and <strong>React Native</strong>.",
  WHAT_CAN_I_DO_2:
    "<strong>ReactJS</strong> using some <strong>libraries, GraphQL, Redux, Hooks</strong>, and <strong>Context API</strong>.",
  WHAT_CAN_I_DO_3:
    "<strong>Angular</strong> using some <strong>libraries, NGRX, and RxJS.</strong>",
  WHAT_CAN_I_DO_4:
    "<strong>CSS</strong> using <strong>SCSS, Less, and Stylus</strong> preprocessors. <strong>Libraries</strong> and frameworks (<strong>Bootstrap, Materialize, Foundation, Material Design, Tachyons, and Tailwind</strong>). <strong>CSS modules and styled components</strong>.",
  WHAT_CAN_I_DO_5:
    "<strong>HTML</strong> using several <strong>APIs</strong>, and preprocessors (<strong>Pug, Slim, and Handlebars)</strong>.",
  WHAT_CAN_I_DO_6: "<strong>Git</strong> and <strong>gitflow</strong>.",
  WHAT_CAN_I_DO_7: "<strong>NodeJS</strong> using <strong>Express</strong> framework.",
  WHAT_CAN_I_DO_8:
    "Relational Database management system (<strong>PostgreSQL, MySQL, Oracle 10g - 11g</strong> using <strong>PL/SQL</strong>, <strong>SQL Server</strong> using <strong>Transact SQL)</strong>.",
  WHAT_CAN_I_DO_9: "Testing libraries: <strong>React Testing Library, Mocha, Jest,</strong> e <strong>Test Cafe</strong>.",
  PROJECTS_TITLE: "Personal projects",
  PROJECTS_DESCRIPTION:
    "These are not all the projects in where I've participated and done (for confidentiality and privacy of information I can't show it all). Many of the following projects are small because my goal is learning and testing libraries, frameworks, tools, and other things.",
  SEE_PROJECT: "See project",
  CHALLENGES_TITLE: '#30DaysOfCode',
  CHALLENGES_DESCRIPTION:
    'I decided to do this challenge to practice, improve, and learn new things about HTML, CSS, JavaScript, Web APIs, and between other things. It’s a challenge for me due I have to think “out of the box” and take advantage of my creativity.',
  WATCH_MORE: 'See more',
  DAY: 'Day {{number}} -',
  INSPIRATION_TITLE: 'Inspiration',
  INSPIRATION_DESCRIPTION:
    'Sometimes it is difficult to find the inspiration or good tools, photos, etc, for using when we wanna do something, so I wanna share with you some links that for me are very useful.',
  INSPIRATION_FOOTER:
    "If you know more links, please don't hesitate to share it, I'll be really grateful.",
  INSPIRATION_DESIGN: 'Design',
  INSPIRATION_COLORS: 'Colors',
  INSPIRATION_PICTURES: 'Pictures',
  INSPIRATION_DEVELOPMENT: 'Development',
  FOOTER_TITLE_1:
    '“Nobody hopes you know everything, only amuse yourself and never stop learning.”',
  FOOTER_TITLE_2: '“The real growth comes when we leave our zone of comfort.”',
  MADE_TEXT: 'Made with',
  MADE_BY: 'by Henry Zarza, 2020'
});

i18next.addResources('it', 'MAIN', {
  NAME: 'Henry Zarza',
  PROFESSION: 'Web developer',
  WHO_I_AM: 'Chi sono?',
  WHO_I_AM_TEXT:
    "Ciao! Mi chiamo Henry, sono un ingegnere di sistema di Medellín (Colombia), sono considerato a me stesso come dedicato di ciò che mi piace, amo spingere i miei limiti e affrontare nuove sfide, leggere, condividere le mie conoscenze, imparare nuove cose, lingue, musica, camminare, pattinare, nuotare, e meditare. Sto studiando l'inglese e l'italiano, oltre a migliorare le mie conoscenze nello web development. Sono parte di <strong>MedellinCSS</strong> comunità.",
  KEEP_TOUCH: 'Teniamoci in contatto:',
  WHAT_CAN_I_DO_TITLE: 'Cosa posso fare?',
  WHAT_CAN_I_DO_1:
    '<strong>JavaScript</strong> utilizzando alcune <strong>Web API, Service worker, web worker </strong>. In questo momento sto imparando il framework <strong>VueJS</strong> è <strong>React Native</strong>.',
  WHAT_CAN_I_DO_2:
    "<strong>ReactJS</strong> utilizzando alcune <strong>librerie, GraphQL, Redux, Hooks</strong> e <strong>Context API</strong>.",
  WHAT_CAN_I_DO_3:
    "<strong>Angular</strong> utilizzando alcune <strong>librerie, NGRX, e RxJS.</strong>.",
  WHAT_CAN_I_DO_4:
    "<strong>CSS</strong> utilizzando i preprocessor <strong>SCSS, Less, and Stylus</strong>. <strong>Librerie</strong> e frameworks (<strong>Bootstrap, Materialize, Foundation, Material Design, Tachyons, e Tailwind</strong>). <strong>CSS modules e styled components</strong>.",
  WHAT_CAN_I_DO_5:
    "<strong>HTML</strong> utilizzando alcune <strong>APIs</strong>, e preprocessor (<strong>Pug, Slim, e Handlebars</strong>).",
  WHAT_CAN_I_DO_6: "<strong>Git</strong> e <strong>gitflow</strong>.",
  WHAT_CAN_I_DO_7: "<strong>NodeJS</strong> utilizzando il framework <strong>Express</strong>.",
  WHAT_CAN_I_DO_8:
    "Sistema di gestione di database relazionali come <strong>PostgreSQL, MySQL, Oracle 10g - 11g</strong> con <strong>PL/SQL</strong>, <strong>SQL Server</strong> con <strong>Transact SQL</strong>.",
  WHAT_CAN_I_DO_9:
    "Testing librerie: <strong>React Testing Library, Mocha, Jest,</strong> e <strong>Test Cafe</strong>.",
  PROJECTS_TITLE: "Progetti personali",
  PROJECTS_DESCRIPTION:
    "Questi non sono tutti i progetti in cui ho partecipato e realizzato (per la riservatezza e la privacy delle informazioni non posso mostrarle tutte). Molti dei seguenti progetti sono piccoli, perché il mio obiettivo è quello di imparare e testare biblioteche, frameworks, strumenti e altre cose.",
  SEE_PROJECT: "Guarda progetto",
  CHALLENGES_TITLE: '#30DaysOfCode',
  CHALLENGES_DESCRIPTION:
    'Ho deciso di fare questa sfida per fare pratica, migliorare e imparare nuove cose su HTML, CSS, JavaScript, API Web e tra le altre cose. È una sfida per me dovuta al fatto che devo pensare "fuori dagli schemi" e sfruttare la mia creatività.',
  WATCH_MORE: 'Guarda di più',
  DAY: 'Giorno {{number}} -',
  INSPIRATION_TITLE: 'Ispirazione',
  INSPIRATION_DESCRIPTION:
    "A volte è difficile trovare l'ispirazione o buoni strumenti, foto, ecc, da usare quando vogliamo fare qualcosa, quindi voglio condividere con voi alcuni link che per me sono molto utili.",
  INSPIRATION_FOOTER: 'Se conoscete altri link, non esitate a condividerli, ve ne sarò molto grato',
  INSPIRATION_DESIGN: 'Progettazione',
  INSPIRATION_COLORS: 'Colori',
  INSPIRATION_PICTURES: 'Immagini',
  INSPIRATION_DEVELOPMENT: 'Sviluppo',
  FOOTER_TITLE_1:
    '“Nessuno spera che tu sappia tutto, solo che ti diverti e non smetti mai di imparare.”',
  FOOTER_TITLE_2: '“La vera crescita arriva quando lasciamo la nostra zona di comfort.”',
  MADE_TEXT: 'Fatto con',
  MADE_BY: 'da Henry Zarza, 2020'
});
