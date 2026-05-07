// All UI strings, per language. Edit text here; Markdown content lives in src/content/.
export const languages = { en: 'English', fr: 'Français' };
export const defaultLang = 'en';

export const ui = {
  en: {
    'nav.about': 'About',
    'nav.aboutMe': 'About me',
    'nav.cv': 'CV',
    'nav.publications': 'Publications & Talks',
    'nav.services': 'Services',
    'nav.servicesOverview': 'Overview',
    'nav.fw': '01 · Fieldwork Support',
    'nav.stats': '02 · Statistical Consulting',
    'nav.surv': '03 · Surveys & Mapping',
    'nav.doc': '04 · Documentation',
    'nav.news': 'News',
    'nav.contact': 'Contact',

    'home.title1': 'Field biology, data,',
    'home.title2': 'and documentation.',
    'home.lede': 'Marine & aquatic biology consulting — fieldwork, statistics, surveys, and scientific documentation. Based in French Polynesia.',
    'home.cta': 'Get in touch',
    'home.whoTitle': 'Andreas Eich —\nmarine biologist',
    'home.servicesTitle': 'Scientific consulting,\nin French Polynesia',
    'home.aboutLink': 'About me →',

    'services.fw': 'Fieldwork support',
    'services.fwSub': 'Scientific diving, surveys, sampling campaigns',
    'services.stats': 'Statistical consulting',
    'services.statsSub': 'Study design, analysis, reproducible R workflows',
    'services.surv': 'Surveys & mapping',
    'services.survSub': 'Drone photogrammetry, underwater 3D modelling',
    'services.doc': 'Documentation',
    'services.docSub': 'Underwater photography & video, science communication',
    'services.intro': 'Marine and aquatic science services — from field data collection through analysis, mapping, and documentation. Available across French Polynesia.',
    'services.cta': 'Interested in working together?',
    'services.ctaLink': 'Get in touch →',
    'services.whatIOffer': 'What I offer',

    'news.intro': 'Notes from the field, methods, and updates — from the reef, the lab, and the desk.',
    'news.continueReading': 'Continue reading →',
    'news.back': '← All news',

    'contact.intro': 'Available for projects across French Polynesia and the wider Pacific. I usually reply within a few days.',
    'contact.emailMe': 'Email me directly',
    'contact.emailNote': 'For consulting enquiries, please include a brief project description, location, and timeline.',
    'contact.elsewhere': 'Elsewhere',

    'footer.tagline': 'Marine & aquatic biology — fieldwork, data, and documentation. Based in French Polynesia.',
    'footer.pages': 'Pages',
    'footer.connect': 'Connect',
    'footer.legal': '© 2026 Andreas Eich — Patente n° G82689 · Papeete, French Polynesia',
    'footer.consulting': 'marine & aquatic biology consulting',

    'breadcrumb.home': 'Home',
  },
  fr: {
    'nav.about': 'À propos',
    'nav.aboutMe': 'Qui suis-je',
    'nav.cv': 'CV',
    'nav.publications': 'Publications & conférences',
    'nav.services': 'Services',
    'nav.servicesOverview': 'Vue d’ensemble',
    'nav.fw': '01 · Soutien terrain',
    'nav.stats': '02 · Conseil en statistiques',
    'nav.surv': '03 · Relevés & cartographie',
    'nav.doc': '04 · Documentation',
    'nav.news': 'Actualités',
    'nav.contact': 'Contact',

    'home.title1': 'Biologie de terrain, données,',
    'home.title2': 'et documentation.',
    'home.lede': 'Conseil en biologie marine et aquatique — terrain, statistiques, relevés et documentation scientifique. Basé en Polynésie française.',
    'home.cta': 'Me contacter',
    'home.whoTitle': 'Andreas Eich —\nbiologiste marin',
    'home.servicesTitle': 'Conseil scientifique,\nen Polynésie française',
    'home.aboutLink': 'En savoir plus →',

    'services.fw': 'Soutien terrain',
    'services.fwSub': 'Plongée scientifique, relevés, campagnes d’échantillonnage',
    'services.stats': 'Conseil en statistiques',
    'services.statsSub': 'Plan d’étude, analyse, workflows R reproductibles',
    'services.surv': 'Relevés & cartographie',
    'services.survSub': 'Photogrammétrie par drone, modélisation 3D sous-marine',
    'services.doc': 'Documentation',
    'services.docSub': 'Photo & vidéo sous-marine, médiation scientifique',
    'services.intro': 'Services en sciences marines et aquatiques — du recueil de données sur le terrain à l’analyse, à la cartographie et à la documentation. Disponible dans toute la Polynésie française.',
    'services.cta': 'Envie de travailler ensemble ?',
    'services.ctaLink': 'Me contacter →',
    'services.whatIOffer': 'Ce que je propose',

    'news.intro': 'Notes de terrain, méthodes et actualités — depuis le récif, le labo et le bureau.',
    'news.continueReading': 'Lire la suite →',
    'news.back': '← Toutes les actualités',

    'contact.intro': 'Disponible pour des projets en Polynésie française et dans le Pacifique. Je réponds en général sous quelques jours.',
    'contact.emailMe': 'M’écrire directement',
    'contact.emailNote': 'Pour une demande de prestation, merci d’indiquer une brève description du projet, le lieu et le calendrier.',
    'contact.elsewhere': 'Ailleurs',

    'footer.tagline': 'Biologie marine et aquatique — terrain, données et documentation. Basé en Polynésie française.',
    'footer.pages': 'Pages',
    'footer.connect': 'Liens',
    'footer.legal': '© 2026 Andreas Eich — Patente n° G82689 · Papeete, Polynésie française',
    'footer.consulting': 'conseil en biologie marine et aquatique',

    'breadcrumb.home': 'Accueil',
  },
} as const;

export type Lang = keyof typeof ui;

export function t(lang: Lang) {
  return (key: keyof typeof ui['en']) => ui[lang][key] ?? ui[defaultLang][key];
}

/** Build a localised URL: localePath('en', 'about') -> '/about/'; localePath('fr', 'about') -> '/fr/about/'. */
export function localePath(lang: Lang, path: string = ''): string {
  const clean = path.replace(/^\/|\/$/g, '');
  const prefix = lang === defaultLang ? '' : `/${lang}`;
  return clean ? `${prefix}/${clean}/` : `${prefix}/`;
}
