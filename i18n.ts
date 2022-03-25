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
    'Hello there! My name is Henry, I’m a system engineer from Medellín (Colombia), I’m considered to myself as dedicated and passionate about what I like, I love to push my limits every day and face new challenges. I like reading, sharing my knowledge, learning new things, languages, watching series, music, walking, rollerblading, swimming, meditation, and practicing yoga. Right now, I’m studying English and Italian, as well as improving my knowledge in web development.',
  KEEP_TOUCH: 'Let’s keep in touch:',
  WHAT_I_CAN_DO_TITLE: 'What can I do?',
  WHAT_I_CAN_DO_1:
    '<strong>JavaScript</strong> using some <strong>Web APIs, Service worker, web workers</strong>. Right now, I am learning <strong>VueJS</strong> framework.',
  WHAT_I_CAN_DO_2:
    '<strong>ReactJS</strong> using some libraries, <strong>GraphQL, Redux, Hooks, and Context API</strong>. Right now, I am learning <strong>React Native.</strong>',
  WHAT_I_CAN_DO_3:
    '<strong>Angular</strong> using some <strong>libraries, NGRX, and RxJS.</strong>',
  WHAT_I_CAN_DO_4:
    '<strong>CSS</strong> using <strong>SCSS, Less, and Stylus</strong> preprocessors. Libraries and frameworks like <strong>Bootstrap, Materialize, Foundation, and Material Design</strong>. <strong>CSS modules and styled components.</strong>',
  WHAT_I_CAN_DO_5:
    '<strong>HTML</strong> using several <strong>APIs</strong>, and preprocessors as <strong>Pug, Slim, and Handlebars.</strong>',
  WHAT_I_CAN_DO_6: '<strong>Git</strong> and <strong>gitflow.</strong>',
  WHAT_I_CAN_DO_7: '<strong>NodeJS</strong> using <strong>Express</strong> framework.',
  WHAT_I_CAN_DO_8:
    'Relational Database management system such as <strong>PostgreSQL, MySQL, Oracle 10g - 11g</strong> using <strong>PL/SQL</strong>, <strong>SQL Server</strong> using <strong>Transact SQL.</strong>',
  WHAT_I_CAN_DO_9:
    '<strong>PHP</strong> using some frameworks like <strong>Yii 2, Laravel, and Lumen.</strong>',
  PROJECTS_TITLE: 'Personal projects',
  PROJECTS_DESCRIPTION:
    'These are not all the projects in where I’ve participated and carried out (for confidentiality and privacy of information I can’t show it all). Many of the following projects are small due to my goal is to learn and test libraries, frameworks, tools, and other things.',
  WATCH_PROJECT: 'See project',
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
  WHO_I_AM: 'Chi Sono?',
  WHO_I_AM_TEXT:
    "Ehilà! Mi chiamo Henry, sono un ingegnere di sistema di Medellín (Colombia), sono considerato a me stesso come dedicato e appassionato di ciò che mi piace, amo spingere i miei limiti ogni giorno e affrontare nuove sfide. Mi piace leggere, condividere le mie conoscenze, imparare nuove cose, lingue, guardare serie, musica, camminare, pattinare, nuotare, meditare e praticare yoga. In questo momento sto studiando l'inglese e l'italiano, oltre a migliorare le mie conoscenze nello sviluppo del web.",
  KEEP_TOUCH: 'Teniamoci in contatto:',
  WHAT_I_CAN_DO_TITLE: 'Cosa posso fare?',
  WHAT_I_CAN_DO_1:
    '<strong>JavaScript</strong> utilizzando alcune <strong>Web API, Service worker, web worker </strong>. In questo momento sto imparando il framework <strong>VueJS</strong>.',
  WHAT_I_CAN_DO_2:
    '<strong>ReactJS</strong> utilizzando alcune librerie, <strong>GraphQL, Redux, Hooks e Context API</strong>. In questo momento sto imparando <strong>React Native.</strong>',
  WHAT_I_CAN_DO_3:
    '<strong>Angular</strong> utilizzando alcune <strong>librerie, NGRX, e RxJS.</strong>.',
  WHAT_I_CAN_DO_4:
    '<strong>CSS</strong> utilizzando i preprocessor <strong>SCSS, Less e Stylus</strong>. Librerie e framework come <strong>Bootstrap, Materialize, Foundation, e Material Design</strong>. <strong>CSS module e style components.</strong>',
  WHAT_I_CAN_DO_5:
    '<strong>HTML</strong> utilizzando alcune <strong>APIs</strong>, e preprocessor come <strong>Pug, Slim, e Handlebars.</strong>',
  WHAT_I_CAN_DO_6: '<strong>Git</strong> e <strong>gitflow.</strong>',
  WHAT_I_CAN_DO_7: '<strong>NodeJS</strong> utilizzando il framework <strong>Express</strong>.',
  WHAT_I_CAN_DO_8:
    'Sistema di gestione di database relazionali come <strong>PostgreSQL, MySQL, Oracle 10g - 11g</strong> con <strong>PL/SQL</strong>, <strong>SQL Server</strong> con <strong>Transact SQL.</strong>',
  WHAT_I_CAN_DO_9:
    '<strong>PHP</strong> utilizzando alcune frameworks come <strong>Yii 2, Laravel, e Lumen.</strong>',
  PROJECTS_TITLE: 'Progetti personali',
  PROJECTS_DESCRIPTION:
    'Questi non sono tutti i progetti in cui ho partecipato e realizzato (per la riservatezza e la privacy delle informazioni non posso mostrarle tutte). Molti dei seguenti progetti sono piccoli, perché il mio obiettivo è quello di imparare e testare biblioteche, framework, strumenti e altre cose.',
  WATCH_PROJECT: 'Guarda progetto',
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
