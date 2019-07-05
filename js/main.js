"use strict";

const language_configurarion = {
    'en': {
        'title': 'Web Developer',
        'about': 'About me',
        'aboutContent': `Hi, my name is <strong>Henry Zarza</strong>, I'm a computer engineering, web developer and student of languages.
            I love the programming, algorithms, languages, music, series, read, practice yoga and walk. <br />
            I like the web development because I consider that's a space where I can exploit and let fly my creativity
            and imagination. My favorite programming language is <strong>JavaScript</strong>, in my opinion it's very
            flexible, robust and has great projection so it lends itself to work in many fields of computer science.`,
        'btnSocial': 'Meet me in',
        'titlePeople': 'People',
        'contentPeople': `These persons have done a very positive impact in my life,
            teaching me that for more complicated than sees the life and the things,
            always with effort, dedication, humility and believing in one itself there
            is nothing that could not be achieved.`,
        'contentPhrases': `Nobody hopes that you know everything, only amuse yourself and never stop learning. <br>
            The real growth comes when we leave our zone of comfort.`
    },
    'es': {
        'title': 'Desarrollador Web',
        'about': 'Acerca de mí',
        'aboutContent': `Hola, me llamo <strong>Henry Zarza</strong>, soy ingeniero informático, desarrollador web y estudiante de idiomas.
            Me apasiona la programación, los algoritmos, los idiomas, la música,
            las series, leer, el yoga y caminar. <br />
            Me gusta la programación web porque considero que puedo explotar y dejar volar mi creatividad e imaginación.
            Mi lenguaje de programación preferido es <strong>JavaScript</strong>, a mí parecer es un lenguaje muy flexible,
            robusto, con gran proyección y que se presta para trabajar en muchos campos de la informática.`,
        'btnSocial': 'Encuéntrame en',
        'titlePeople': 'Personas',
        'contentPeople': `Estas personas han hecho un impacto muy positivo en mi vida, enseñándome
            que por más complicada que se vea la vida y las cosas, siempre con esfuerzo, dedicación,
            humildad y creyendo en uno mismo no hay nada que no se pueda lograr.`,
        'contentPhrases': `Nadie espera que lo sepas todo, solo diviértete y nunca pares de aprender. <br>
            El verdadero crecimiento viene cuando dejamos nuestra zona de confort.`
    }
}

const skills = document.querySelectorAll(`.skills__item`);
const triggerSkill = document.querySelector('#js-toggleSkill');

function changeLanguage(language) {
    let typeLanguage = language;

    if (typeof language == 'object')
        typeLanguage = language.target.value;

    localStorage.setItem('language', typeLanguage);
    document.querySelectorAll('[data-language]').forEach(element => {
        element.innerHTML = language_configurarion[typeLanguage][element.dataset.language];
    });
}

function toggleSkill(open) {
    if (open) {
        const container = document.querySelector('.skills');
        let iteratorWidth = container.offsetWidth / skills.length;
        skills.forEach((element, index) => {
            let positionX = iteratorWidth * index;
            let positionY = element.dataset.position;
            element.style.transform = `translate(${positionX}px, ${positionY}) scale(1)`;
        });
    } else
        setPositionSkillsItem();
}

function setPositionSkillsItem() {
    const skillPrincipal = document.querySelector('.skills__item--principal');
    skills.forEach(element => {
        element.style.transform = `translate(${skillPrincipal.offsetLeft}px, ${skillPrincipal.offsetTop}px) scale(0)`;
    });
}

skills.forEach((element) => {
    element.style.borderColor = element.dataset.color;
});

triggerSkill.addEventListener('click', (event) => {
    event.target.classList.toggle('skills__item--principal--active');
    toggleSkill(event.target.classList.contains('skills__item--principal--active'));
});

document.getElementsByName('rdb_language').forEach(element => element.addEventListener('change', changeLanguage));

window.onload = () => {

    window.addEventListener('resize', (e) => {
        if (triggerSkill.classList.contains('skills__item--principal--active'))
            toggleSkill(true);
    });

    if (window.innerWidth > 576)
        drawCanvas();

    const language = localStorage.getItem('language');
    if (language) {
        document.getElementsByName('rdb_language').forEach(elem => {
            if (elem.value == language)
                elem.checked = true;
        });
        changeLanguage(language);
    }

    setPositionSkillsItem();
}
