var language_configurarion = {
    'en': { 
        'title': 'Web Developer',
        'about': 'About me',
        'aboutContent': `Hi, my name is <strong>Henry Zarza</strong>, I'm currently in tenth semester of computer engineering 
            at Politéctico Colombiano Jaime Isaza Cadavid. I live in Medellín, Colombia.
            I'm passionate and enthusiastic about coding and algorithms, I especially like web development due I
            consider that's a space where I can exploit and let fly my creativity and imagination.
            My favorite programming language is <strong>JavaScript</strong>, in my opinion it's very
            flexible, robust and has great projection so it lends itself to work in many fields of computer science. <br>
            In my free time what I like to do the most is learn new things, look for interesting webpages,
            practice yoga, do exercise, read, listen music, walking and watch series.`,
        'btnSocial': 'Meet me in',
        'titlePerson': 'Persons',
        'contentPerson': `These persons have done a very positive impact in my life, appearing and
            teaching me that for more complicated than sees the life and the things,
            always with effort, dedication, humility and believing in one itself there
            is nothing that could not be achieved.`,
        'titleKnowledge': 'Knowledge',
        'contentPhrases': `Nobody hopes that you know everything, only amuse yourself and never stop learning. <br>
            The real growth comes when we leave our zone of comfort.`,
        'titleSwatch0': 'Language and others',
        'titleSwatch1': 'Frameworks and libraries',
        'titleSwatch2': 'Data Base',
        'titleSwatch3': 'Learning'
    },
    'es': { 
        'title': 'Desarrollador Web',
        'about': 'Acerca de mí',
        'aboutContent': `Hola, me llamo <strong>Henry Zarza</strong>, actualmente me encuentro en décimo semestre de
            ingeniería informática en el Politécnico Colombiano Jaime Isaza Cadavid. Vivo en la ciudad
            de Medellín en Colombia. Soy un apasionado y entusiasta por la programación y los algoritmos,
            me gusta especialmente la programación web, pues considero que es un espacio en el que puedo
            explotar y dejar volar mi creatividad e imaginación. Mi lenguaje de programación
            preferido es <strong>JavaScript</strong>, a mi parecer es un lenguaje muy flexible, robusto,
            con gran proyección y que se presta para trabajar en muchos campos de la informática. <br>
            En mi tiempo libre lo que más me gusta hacer es aprender cosas nuevas, buscar páginas interesantes,
            practicar yoga, hacer ejercicio, leer, escuchar música, caminar y ver series.`,
        'btnSocial': 'Encuéntrame en',
        'titlePerson': 'Personas',
        'contentPerson': `Estas personas han hecho un impacto muy positivo en mi vida, mostrándome y enseñándome
            que por más complicada que se vea la vida y las cosas, siempre con esfuerzo, dedicación,
            humildad y creyendo en uno mismo no hay nada que no se pueda lograr.`,
        'titleKnowledge': 'Conocimientos',
        'contentPhrases': `Nadie espera que lo sepas todo, solo diviértete y nunca pares de aprender. <br>
            El verdadero crecimiento viene cuando dejamos nuestra zona de confort.`,
        'titleSwatch0': 'Lenguajes y otros',
        'titleSwatch1': 'Frameworks y librerías',
        'titleSwatch2': 'Base de Datos',
        'titleSwatch3': 'Aprendiendo'
    }
}

function changeLanguage(language) {
    localStorage.setItem('language', language);
    document.querySelectorAll('[data-language]').forEach(element => {
        element.innerHTML = language_configurarion[language][element.dataset.language];
    });
}

document.getElementsByName('rdb_language').forEach(element => element.addEventListener('change', (event) => {
    changeLanguage(event.target.value);
}));

document.querySelectorAll('.swatch').forEach((element, index) => {
    document.querySelectorAll(`#swatch-${index} li`).forEach((innerElement, innerIndex) => {
        innerElement.style.backgroundColor = innerElement.dataset.color;
        innerElement.style.transform = 'rotate(' + (20 - (innerIndex*3)) + 'deg)';
    });

    document.querySelectorAll(`#swatch-${index} li`).forEach(elem => elem.addEventListener('click', (e) => {
        document.querySelectorAll(`#swatch-${index} li`).forEach(el => el.classList.remove('active'));
        e.target.classList.add('active');
    }));
});

window.onload = () => {
    if (window.innerWidth > 576)
      drawCanvas();
    
    var language = localStorage.getItem('language');
    if (language) {
        document.getElementsByName('rdb_language').forEach(elem => {
            if (elem.value == language)
                elem.checked = true;
        });
        changeLanguage(language);
    }
}