/* =============== SHOW MENU =============== */
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close');

/* Menu show */
if(navToggle){
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
    });
}

/* Menu hidden */
if(navClose){
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    });
}

/* =============== REMOVE MENU MOBILE =============== */
const navLink = document.querySelectorAll('.nav__link');

const linkAction = () => {
    const navMenu = document.getElementById('nav-menu');
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu');
}
navLink.forEach(n => n.addEventListener('click', linkAction));

/* =============== CHANGE BACKGROUND HEADER =============== */
const scrollHeader = () => {
    const header = document.getElementById('header');
    // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 50) header?.classList.add('scroll-header'); 
    else header?.classList.remove('scroll-header');
}
window.addEventListener('scroll', scrollHeader);

/* =============== SCROLL SECTIONS ACTIVE LINK =============== */
const sections = document.querySelectorAll('section[id]');

const scrollActive = () => {
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id'),
              sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']');

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            sectionsClass?.classList.add('active-link');
        }else{
            sectionsClass?.classList.remove('active-link');
        }
    });
}
window.addEventListener('scroll', scrollActive);

/* =============== SHOW SCROLL UP =============== */ 
const scrollUp = () => {
    const scrollUp = document.getElementById('scroll-up');
    // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup class
    if(this.scrollY >= 350) scrollUp?.classList.add('show-scroll');
    else scrollUp?.classList.remove('show-scroll');
}
window.addEventListener('scroll', scrollUp);

/* =============== DARK LIGHT THEME =============== */ 
const themeButton = document.getElementById('theme-button');
const darkTheme = 'dark-theme';
const iconTheme = 'fa-sun';

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme');
const selectedIcon = localStorage.getItem('selected-icon');

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light';
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'fa-sun' : 'fa-moon';

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme);
  themeButton.classList[selectedIcon === 'fa-sun' ? 'add' : 'remove'](iconTheme);
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme);
    themeButton.classList.toggle(iconTheme);
    
    // Switch between moon and sun icon classes manually
    if(themeButton.classList.contains('fa-sun')) {
        themeButton.classList.remove('fa-moon');
    } else {
        themeButton.classList.add('fa-moon');
    }

    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme());
    localStorage.setItem('selected-icon', getCurrentIcon());
});

/* =============== MODAL LOGIC =============== */
const gameModal = document.getElementById('game-modal');
const aureaModal = document.getElementById('aurea-modal');
const factosModal = document.getElementById('factos-modal');

function openGameModal() {
    gameModal?.classList.add('active');
}

function closeGameModal() {
    gameModal?.classList.remove('active');
}

function openAureaModal() {
    aureaModal?.classList.add('active');
}

function closeAureaModal() {
    aureaModal?.classList.remove('active');
}

function openFactosModal() {
    factosModal?.classList.add('active');
}

function closeFactosModal() {
    factosModal?.classList.remove('active');
}

// Close modal when clicking outside of it
window.addEventListener('click', (e) => {
    if (e.target === gameModal) {
        closeGameModal();
    }
    if (e.target === aureaModal) {
        closeAureaModal();
    }
    if (e.target === factosModal) {
        closeFactosModal();
    }
});

/* =============== i18n TRANSLATIONS =============== */
const translations = {
    en: {
        page_title: "Adrian Parra - Full-Stack Web Developer",
        nav_home: "Home",
        nav_about: "About",
        nav_skills: "Skills",
        nav_projects: "Projects",
        nav_experience: "Experience",
        nav_contact: "Contact",
        hero_hi: "Hi, I'm",
        hero_subtitle: "Full-Stack Web Developer",
        hero_desc: "Passionate about creating modern web experiences and e-commerce solutions.",
        btn_view_projects: "View Projects",
        btn_contact_me: "Contact Me",
        about_title: "About Me",
        about_subtitle: "My Introduction",
        about_desc: "I am a dedicated web developer with strong experience in JavaScript development and building robust E-commerce platforms. With a problem-solving mindset and a passion for creating modern, responsive websites, I aim to build digital experiences that are not only visually stunning but also highly functional.",
        about_exp: "Years <br> experience",
        about_proj: "Projects <br> completed",
        about_clients: "Happy <br> clients",
        skills_title: "Skills",
        skills_subtitle: "My technical level",
        skill_responsive: "Responsive Design",
        skill_ecommerce: "E-commerce",
        projects_title: "Projects",
        projects_subtitle: "Most recent work",
        proj1_desc: "A decentralized social verification platform where users can publish statements, debate validity, and build a trust reputation based on community consensus.",
        proj2_desc: "A challenging 2D platformer game where nothing is what it seems. Jump, dodge traps, and survive unexpected surprises.",
        proj3_desc: "Online store developed using Shopify, PHP, and JavaScript. Custom theme and app integration.",
        proj4_desc: "E-commerce website built with Shopify, PHP, and JavaScript. Optimized for high conversions.",
        btn_view_details: "View Details",
        btn_live_demo: "Live Demo",
        exp_title: "Experience Highlights",
        exp_subtitle: "My professional journey",
        exp1_title: "Front-End Development",
        exp1_sub: "Various Agencies",
        exp1_desc: "Developed responsive and engaging user interfaces using modern HTML, CSS, and vanilla JS.",
        exp2_title: "JavaScript Development Projects",
        exp2_sub: "Freelance",
        exp2_desc: "Built complex single-page applications and interactive web tools.",
        exp3_title: "E-commerce Solutions",
        exp3_sub: "Tech Startup",
        exp3_desc: "Led the development of scalable custom e-commerce platforms.",
        exp4_title: "Shopify Store Development",
        exp4_sub: "E-commerce Agency",
        exp_present: "Present",
        exp4_desc: "Creating premium Shopify stores, customizing themes, and developing private apps using PHP and JS.",
        contact_title: "Contact Me",
        contact_subtitle: "Get in touch",
        contact_email: "Email",
        contact_write_me: "Write me",
        contact_connect: "Connect",
        contact_follow: "Follow",
        form_name: "Name",
        form_name_ph: "Insert your name",
        form_mail: "Mail",
        form_mail_ph: "Insert your email",
        form_project: "Project",
        form_project_ph: "Write your project details",
        btn_send: "Send Message",
        footer_copy: "All rights reserved.",
        modal_title: "GIVAP FREND - Details",
        modal_tech: "Technologies Used",
        modal_desc: "Built completely from scratch using <strong>Vanilla JavaScript</strong>, <strong>HTML5</strong>, and <strong>CSS3</strong>. It implements custom game physics, collision detection, sprite rendering, and a state-based game loop without relying on external game engines. Features classic platformer gameplay with hidden traps and deceiving mechanics.",
        aurea_modal_title: "Aurea perfumes - Details",
        aurea_modal_desc: "Online store developed using <strong>Shopify</strong>, <strong>PHP</strong>, and <strong>JavaScript</strong>. Custom theme and app integration.",
        factos_modal_title: "Factos - Details",
        factos_modal_desc: "Platform developed with <strong>JavaScript</strong>, <strong>Supabase</strong>, and <strong>HTML5/CSS3</strong> for decentralized social verification."
    },
    es: {
        page_title: "Adrian Parra - Desarrollador Web Full-Stack",
        nav_home: "Inicio",
        nav_about: "Sobre Mí",
        nav_skills: "Habilidades",
        nav_projects: "Proyectos",
        nav_experience: "Experiencia",
        nav_contact: "Contacto",
        hero_hi: "Hola, soy",
        hero_subtitle: "Desarrollador Web Full-Stack",
        hero_desc: "Apasionado por crear experiencias web modernas y soluciones de comercio electrónico.",
        btn_view_projects: "Ver Proyectos",
        btn_contact_me: "Contactar",
        about_title: "Sobre Mí",
        about_subtitle: "Mi Introducción",
        about_desc: "Soy un desarrollador web dedicado con gran experiencia en el desarrollo con JavaScript y la construcción de plataformas sólidas de comercio electrónico. Con una mentalidad orientada a la resolución de problemas y pasión por crear sitios web modernos y responsivos, mi objetivo es construir experiencias digitales que no solo sean visualmente impresionantes, sino también altamente funcionales.",
        about_exp: "Años de <br> experiencia",
        about_proj: "Proyectos <br> completados",
        about_clients: "Clientes <br> satisfechos",
        skills_title: "Habilidades",
        skills_subtitle: "Mi nivel técnico",
        skill_responsive: "Diseño Responsivo",
        skill_ecommerce: "E-commerce",
        projects_title: "Proyectos",
        projects_subtitle: "Trabajos más recientes",
        proj1_desc: "Una plataforma de verificación social descentralizada donde los usuarios pueden publicar declaraciones, debatir su validez y construir una reputación de confianza basada en el consenso de la comunidad.",
        proj2_desc: "Un desafiante juego de plataformas en 2D donde nada es lo que parece. Salta, esquiva trampas y sobrevive a sorpresas inesperadas.",
        proj3_desc: "Tienda online desarrollada usando Shopify, PHP y JavaScript. Tema personalizado e integración de aplicaciones.",
        proj4_desc: "Sitio web de comercio electrónico creado con Shopify, PHP y JavaScript. Optimizado para altas conversiones.",
        btn_view_details: "Ver Detalles",
        btn_live_demo: "Demo en vivo",
        exp_title: "Experiencia Destacada",
        exp_subtitle: "Mi trayectoria profesional",
        exp1_title: "Desarrollo Front-End",
        exp1_sub: "Varias Agencias",
        exp1_desc: "Desarrollo de interfaces de usuario interactivas y responsivas usando HTML, CSS y JS nativo moderno.",
        exp2_title: "Proyectos de Desarrollo JavaScript",
        exp2_sub: "Autónomo",
        exp2_desc: "Construcción de aplicaciones complejas de página única (SPA) y herramientas web interactivas.",
        exp3_title: "Soluciones E-commerce",
        exp3_sub: "Startup Tecnológica",
        exp3_desc: "Lideré el desarrollo de plataformas personalizadas escalables de comercio electrónico.",
        exp4_title: "Desarrollo de Tiendas Shopify",
        exp4_sub: "Agencia E-commerce",
        exp_present: "Presente",
        exp4_desc: "Creación de tiendas Shopify premium, personalización de temas y desarrollo de aplicaciones privadas usando PHP y JS.",
        contact_title: "Contactar",
        contact_subtitle: "Ponte en contacto",
        contact_email: "Correo",
        contact_write_me: "Escríbeme",
        contact_connect: "Conectar",
        contact_follow: "Seguir",
        form_name: "Nombre",
        form_name_ph: "Inserta tu nombre",
        form_mail: "Correo",
        form_mail_ph: "Inserta tu correo",
        form_project: "Proyecto",
        form_project_ph: "Escribe los detalles de tu proyecto",
        btn_send: "Enviar Mensaje",
        footer_copy: "Todos los derechos reservados.",
        modal_title: "GIVAP FREND - Detalles",
        modal_tech: "Tecnologías Utilizadas",
        modal_desc: "Desarrollado completamente desde cero utilizando <strong>JavaScript Nativo</strong>, <strong>HTML5</strong> y <strong>CSS3</strong>. Implementa físicas de juego personalizadas, detección de colisiones, renderizado de sprites y un bucle de juego basado en estados sin depender de motores de juegos externos. Presenta mecánicas engañosas y trampas ocultas.",
        aurea_modal_title: "Aurea perfumes - Detalles",
        aurea_modal_desc: "Tienda online desarrollada usando <strong>Shopify</strong>, <strong>PHP</strong> y <strong>JavaScript</strong>. Tema personalizado e integración de aplicaciones.",
        factos_modal_title: "Factos - Detalles",
        factos_modal_desc: "Plataforma desarrollada con <strong>JavaScript</strong>, <strong>Supabase</strong> y <strong>HTML5/CSS3</strong> para verificación social descentralizada."
    }
};

const langToggle = document.getElementById('lang-toggle');
let currentLang = localStorage.getItem('selected-lang') || 'es';

function updateLanguage(lang) {
    document.documentElement.lang = lang;
    if(langToggle) {
        langToggle.textContent = lang === 'es' ? 'EN' : 'ES'; // button shows the alternative language
    }
    
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if(translations[lang][key]) {
            el.innerHTML = translations[lang][key];
        }
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        if(translations[lang][key]) {
            el.placeholder = translations[lang][key];
        }
    });
}

if(langToggle) {
    langToggle.addEventListener('click', () => {
        currentLang = currentLang === 'es' ? 'en' : 'es';
        localStorage.setItem('selected-lang', currentLang);
        updateLanguage(currentLang);
    });
}

// Init language
updateLanguage(currentLang);
