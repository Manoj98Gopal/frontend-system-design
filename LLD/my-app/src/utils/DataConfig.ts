type Section = {
  title: string;
  description: string;
};

export type Sections = {
  section_1: Section;
  section_2: Section;
  section_3: Section;
  section_4: Section;
  section_5: Section;
  section_6: Section;
  section_7: Section;
  section_8: Section;
};

export type Languages = {
  en: Sections;
  ka: Sections;
  hi: Sections;
  sp: Sections;
  fr: Sections;
  ru: Sections;
  ml: Sections;
};

const AboutData: Languages = {
  en: {
    section_1: {
      title: "Who We Are",
      description:
        "We are a passionate team of developers and problem solvers focused on building scalable and user-friendly digital products. Our approach combines strong technical expertise with a deep understanding of user needs to deliver impactful solutions."
    },
    section_2: {
      title: "Our Journey",
      description:
        "Our journey started with a simple goal — to create meaningful digital experiences. Over time, we have worked on multiple projects across industries, continuously learning, adapting, and improving our skills to stay ahead in the fast-evolving tech landscape."
    },
    section_3: {
      title: "What We Do",
      description:
        "We specialize in frontend and full stack development, building modern web applications using technologies like React, Next.js, and scalable backend systems. Our focus is on performance, usability, and maintainability."
    },
    section_4: {
      title: "Our Approach",
      description:
        "We follow a user-first approach, ensuring that every product we build is intuitive, efficient, and scalable. From planning to deployment, we focus on writing clean code, maintaining consistency, and delivering high-quality results."
    },
    section_5: {
      title: "Our Mission",
      description:
        "Our mission is to help businesses grow by delivering reliable and high-performance digital solutions. We aim to bridge the gap between technology and real-world problems through innovation and simplicity."
    },
    section_6: {
      title: "Our Vision",
      description:
        "Our vision is to become a trusted technology partner for businesses worldwide by consistently delivering scalable, efficient, and impactful solutions that drive success."
    },
    section_7: {
      title: "Why Choose Us",
      description:
        "We focus on quality, performance, and long-term scalability. Our experience with modern technologies and best practices allows us to deliver solutions that are not only functional but also future-ready."
    },
    section_8: {
      title: "Our Values",
      description:
        "We believe in continuous learning, transparency, and collaboration. Our work is driven by a commitment to excellence and a desire to create meaningful impact through technology."
    }
  },
  ka: {
    section_1: {
      title: "ನಾವು ಯಾರು",
      description:
        "ನಾವು ಅಭಿವೃದ್ಧಿಪಾರರು ಮತ್ತು ಸಮಸ್ಯೆ ಪರಿಹಾರಕರ ತಂಡವಾಗಿದ್ದು, ವಿಸ್ತರಿಸಬಹುದಾದ ಮತ್ತು ಬಳಕೆದಾರ ಸ್ನೇಹಿ ಡಿಜಿಟಲ್ ಉತ್ಪನ್ನಗಳನ್ನು ನಿರ್ಮಿಸಲು ಕಟಿಬದ್ಧರಾಗಿದ್ದೇವೆ."
    },
    section_2: {
      title: "ನಮ್ಮ ಪ್ರಯಾಣ",
      description:
        "ಅರ್ಥಪೂರ್ಣ ಡಿಜಿಟಲ್ ಅನುಭವಗಳನ್ನು ನಿರ್ಮಿಸುವ ಗುರಿಯಿಂದ ನಮ್ಮ ಪ್ರಯಾಣ ಆರಂಭವಾಯಿತು. ಕಾಲಕ್ರಮೇಣ ನಾವು ವಿವಿಧ ಕ್ಷೇತ್ರಗಳಲ್ಲಿ ಕೆಲಸ ಮಾಡಿದ್ದೇವೆ."
    },
    section_3: {
      title: "ನಾವು ಏನು ಮಾಡುತ್ತೇವೆ",
      description:
        "ನಾವು React, Next.js ಮುಂತಾದ ತಂತ್ರಜ್ಞಾನಗಳನ್ನು ಬಳಸಿ ಆಧುನಿಕ ವೆಬ್ ಅಪ್ಲಿಕೇಶನ್‌ಗಳನ್ನು ನಿರ್ಮಿಸುತ್ತೇವೆ."
    },
    section_4: {
      title: "ನಮ್ಮ ವಿಧಾನ",
      description:
        "ನಾವು ಬಳಕೆದಾರ ಕೇಂದ್ರಿತ ವಿಧಾನವನ್ನು ಅನುಸರಿಸುತ್ತೇವೆ ಮತ್ತು ಉತ್ತಮ ಗುಣಮಟ್ಟದ ಪರಿಹಾರಗಳನ್ನು ನೀಡುತ್ತೇವೆ."
    },
    section_5: {
      title: "ನಮ್ಮ ಧ್ಯೇಯ",
      description:
        "ವ್ಯಾಪಾರಗಳಿಗೆ ವಿಶ್ವಾಸಾರ್ಹ ಡಿಜಿಟಲ್ ಪರಿಹಾರಗಳನ್ನು ನೀಡುವುದು ನಮ್ಮ ಧ್ಯೇಯವಾಗಿದೆ."
    },
    section_6: {
      title: "ನಮ್ಮ ದೃಷ್ಟಿ",
      description:
        "ಜಾಗತಿಕ ಮಟ್ಟದಲ್ಲಿ ವಿಶ್ವಾಸಾರ್ಹ ತಂತ್ರಜ್ಞಾನ ಪಾಲುದಾರರಾಗುವುದು ನಮ್ಮ ದೃಷ್ಟಿಯಾಗಿದೆ."
    },
    section_7: {
      title: "ನಮ್ಮನ್ನು ಏಕೆ ಆಯ್ಕೆ ಮಾಡಬೇಕು",
      description:
        "ನಾವು ಗುಣಮಟ್ಟ ಮತ್ತು ದೀರ್ಘಕಾಲೀನ ಪರಿಹಾರಗಳಿಗೆ ಆದ್ಯತೆ ನೀಡುತ್ತೇವೆ."
    },
    section_8: {
      title: "ನಮ್ಮ ಮೌಲ್ಯಗಳು",
      description: "ನಾವು ಸಹಕಾರ, ಪಾರದರ್ಶಕತೆ ಮತ್ತು ನಿರಂತರ ಕಲಿಕೆಯನ್ನು ನಂಬುತ್ತೇವೆ."
    }
  },
  ml: {
    section_1: {
      title: "ഞങ്ങൾ ആരാണ്",
      description:
        "ഞങ്ങൾ സ്കെയിലബിൾയും ഉപയോക്തൃ സൗഹൃദവുമായ ഡിജിറ്റൽ ഉൽപ്പന്നങ്ങൾ നിർമ്മിക്കുന്നതിൽ ശ്രദ്ധ കേന്ദ്രീകരിച്ചിരിക്കുന്ന ഡെവലപ്പർമാരുടെയും പ്രശ്നപരിഹാരകരുടെയും ഒരു ഉത്സാഹഭരിതമായ സംഘമാണ്. സാങ്കേതിക പരിജ്ഞാനവും ഉപയോക്തൃ ആവശ്യങ്ങളുടെ ആഴത്തിലുള്ള ബോധവും സംയോജിപ്പിച്ച് പ്രഭാവമുള്ള പരിഹാരങ്ങൾ നൽകുകയാണ് ഞങ്ങളുടെ ലക്ഷ്യം."
    },

    section_2: {
      title: "ഞങ്ങളുടെ യാത്ര",
      description:
        "അർത്ഥവത്തായ ഡിജിറ്റൽ അനുഭവങ്ങൾ സൃഷ്ടിക്കാനുള്ള ഒരു ലളിതമായ ലക്ഷ്യത്തോടെ ഞങ്ങളുടെ യാത്ര ആരംഭിച്ചു. സമയം കഴിയുന്നതോറും വിവിധ മേഖലകളിലെ നിരവധി പ്രോജക്റ്റുകളിൽ പ്രവർത്തിച്ച്, പുതിയ കാര്യങ്ങൾ പഠിക്കുകയും മാറ്റങ്ങൾക്ക് അനുസരിച്ച് വളരുകയും ചെയ്തു."
    },

    section_3: {
      title: "ഞങ്ങൾ എന്ത് ചെയ്യുന്നു",
      description:
        "React, Next.js പോലുള്ള ആധുനിക സാങ്കേതികവിദ്യകൾ ഉപയോഗിച്ച്, ഉയർന്ന പ്രകടനക്ഷമതയുള്ള വെബ് ആപ്ലിക്കേഷനുകൾ നിർമ്മിക്കുന്നതിൽ ഞങ്ങൾ വിദഗ്ധരാണ്. ഉപയോഗ സൗകര്യവും സ്ഥിരതയും നിലനിൽപ്പുമാണ് ഞങ്ങളുടെ പ്രധാന ശ്രദ്ധ."
    },

    section_4: {
      title: "ഞങ്ങളുടെ സമീപനം",
      description:
        "ഉപയോക്താവിനെ മുൻനിർത്തിയുള്ള സമീപനം പിന്തുടരുകയാണ് ഞങ്ങൾ. പദ്ധതിയിടൽ മുതൽ വിന്യാസം വരെ, ക്ലീൻ കോഡ്, സ്ഥിരത, ഉയർന്ന ഗുണമേന്മ എന്നിവ ഉറപ്പാക്കുന്നു."
    },

    section_5: {
      title: "ഞങ്ങളുടെ ദൗത്യം",
      description:
        "വിശ്വാസ്യതയും ഉയർന്ന പ്രകടനക്ഷമതയും ഉള്ള ഡിജിറ്റൽ പരിഹാരങ്ങൾ നൽകുന്നതിലൂടെ ബിസിനസുകൾ വളരാൻ സഹായിക്കുന്നതാണ് ഞങ്ങളുടെ ദൗത്യം. സാങ്കേതികവിദ്യയും യഥാർത്ഥ പ്രശ്നങ്ങളും തമ്മിലുള്ള ദൂരമൊടുക്കുകയാണ് ഞങ്ങൾ ലക്ഷ്യമിടുന്നത്."
    },

    section_6: {
      title: "ഞങ്ങളുടെ ദർശനം",
      description:
        "ലോകമെമ്പാടുമുള്ള ബിസിനസുകൾക്ക് വിശ്വസനീയമായ സാങ്കേതിക പങ്കാളിയായി മാറുകയാണ് ഞങ്ങളുടെ ദർശനം. സ്ഥിരതയുള്ളതും പ്രഭാവമുള്ളതുമായ പരിഹാരങ്ങൾ നൽകുന്നതിനാൽ വളർച്ചയ്ക്ക് പിന്തുണ നൽകുന്നു."
    },

    section_7: {
      title: "എന്തുകൊണ്ട് ഞങ്ങളെ തിരഞ്ഞെടുക്കണം",
      description:
        "ഗുണമേന്മ, പ്രകടനം, ദീർഘകാല സ്കെയിലബിലിറ്റി എന്നിവയിൽ ഞങ്ങൾ കൂടുതൽ ശ്രദ്ധിക്കുന്നു. ആധുനിക സാങ്കേതികവിദ്യകളും മികച്ച പ്രാക്ടീസുകളും ഉപയോഗിച്ച് ഭാവിയിലേക്ക് തയ്യാറായ പരിഹാരങ്ങൾ നൽകുന്നു."
    },

    section_8: {
      title: "ഞങ്ങളുടെ മൂല്യങ്ങൾ",
      description:
        "നിരന്തര പഠനം, വ്യക്തത, സഹകരണം എന്നിവയാണ് ഞങ്ങൾ വിശ്വസിക്കുന്നത്. മികച്ച ഫലങ്ങൾ നേടുന്നതിനും സാങ്കേതികവിദ്യയിലൂടെ പ്രഭാവമുള്ള മാറ്റങ്ങൾ സൃഷ്ടിക്കുന്നതിനും ഞങ്ങൾ പ്രതിബദ്ധരാണ്."
    }
  },
  hi: {
    section_1: {
      title: "हम कौन हैं",
      description:
        "हम डेवलपर्स और समस्या समाधानकर्ताओं की एक टीम हैं जो स्केलेबल और यूज़र-फ्रेंडली डिजिटल प्रोडक्ट्स बनाती है।"
    },
    section_2: {
      title: "हमारी यात्रा",
      description:
        "हमारी यात्रा एक सरल लक्ष्य से शुरू हुई — अर्थपूर्ण डिजिटल अनुभव बनाना।"
    },
    section_3: {
      title: "हम क्या करते हैं",
      description:
        "हम React और Next.js जैसी तकनीकों का उपयोग करके आधुनिक वेब एप्लिकेशन बनाते हैं।"
    },
    section_4: {
      title: "हमारा दृष्टिकोण",
      description:
        "हम उपयोगकर्ता-केंद्रित दृष्टिकोण अपनाते हैं और उच्च गुणवत्ता के समाधान प्रदान करते हैं।"
    },
    section_5: {
      title: "हमारा मिशन",
      description:
        "हमारा मिशन व्यवसायों को उच्च गुणवत्ता वाले डिजिटल समाधान प्रदान करना है।"
    },
    section_6: {
      title: "हमारी दृष्टि",
      description: "हमारी दृष्टि एक विश्वसनीय टेक्नोलॉजी पार्टनर बनना है।"
    },
    section_7: {
      title: "हमें क्यों चुनें",
      description: "हम गुणवत्ता, प्रदर्शन और स्केलेबिलिटी पर ध्यान देते हैं।"
    },
    section_8: {
      title: "हमारे मूल्य",
      description: "हम पारदर्शिता, सहयोग और निरंतर सीखने में विश्वास रखते हैं।"
    }
  },
  sp: {
    section_1: {
      title: "Quiénes Somos",
      description:
        "Somos un equipo apasionado de desarrolladores enfocados en crear productos digitales escalables y fáciles de usar."
    },
    section_2: {
      title: "Nuestro Viaje",
      description:
        "Nuestro viaje comenzó con el objetivo de crear experiencias digitales significativas."
    },
    section_3: {
      title: "Qué Hacemos",
      description:
        "Desarrollamos aplicaciones web modernas utilizando tecnologías como React y Next.js."
    },
    section_4: {
      title: "Nuestro Enfoque",
      description:
        "Seguimos un enfoque centrado en el usuario para ofrecer soluciones eficientes y escalables."
    },
    section_5: {
      title: "Nuestra Misión",
      description:
        "Ayudar a las empresas a crecer mediante soluciones digitales confiables."
    },
    section_6: {
      title: "Nuestra Visión",
      description: "Ser un socio tecnológico confiable a nivel global."
    },
    section_7: {
      title: "Por Qué Elegirnos",
      description:
        "Nos enfocamos en calidad, rendimiento y soluciones escalables."
    },
    section_8: {
      title: "Nuestros Valores",
      description:
        "Creemos en la transparencia, la colaboración y el aprendizaje continuo."
    }
  },
  fr: {
    section_1: {
      title: "Qui Nous Sommes",
      description:
        "Nous sommes une équipe passionnée de développeurs créant des produits numériques évolutifs et conviviaux."
    },
    section_2: {
      title: "Notre Parcours",
      description:
        "Notre parcours a commencé avec l'objectif de créer des expériences numériques significatives."
    },
    section_3: {
      title: "Ce Que Nous Faisons",
      description:
        "Nous développons des applications web modernes avec React et Next.js."
    },
    section_4: {
      title: "Notre Approche",
      description: "Nous adoptons une approche centrée sur l'utilisateur."
    },
    section_5: {
      title: "Notre Mission",
      description:
        "Aider les entreprises à croître grâce à des solutions numériques fiables."
    },
    section_6: {
      title: "Notre Vision",
      description: "Devenir un partenaire technologique de confiance."
    },
    section_7: {
      title: "Pourquoi Nous Choisir",
      description: "Nous nous concentrons sur la qualité et la performance."
    },
    section_8: {
      title: "Nos Valeurs",
      description: "Nous croyons en la transparence et la collaboration."
    }
  },
  ru: {
    section_1: {
      title: "Кто мы",
      description:
        "Мы команда разработчиков, создающая масштабируемые и удобные цифровые продукты."
    },
    section_2: {
      title: "Наш путь",
      description:
        "Наш путь начался с простой цели — создавать значимые цифровые решения."
    },
    section_3: {
      title: "Что мы делаем",
      description:
        "Мы разрабатываем современные веб-приложения с использованием React и Next.js."
    },
    section_4: {
      title: "Наш подход",
      description:
        "Мы следуем пользовательскому подходу и создаем качественные решения."
    },
    section_5: {
      title: "Наша миссия",
      description: "Помогать бизнесу расти с помощью надежных цифровых решений."
    },
    section_6: {
      title: "Наше видение",
      description: "Стать надежным технологическим партнером."
    },
    section_7: {
      title: "Почему выбирают нас",
      description:
        "Мы фокусируемся на качестве, производительности и масштабируемости."
    },
    section_8: {
      title: "Наши ценности",
      description:
        "Мы верим в прозрачность, сотрудничество и постоянное развитие."
    }
  }
};

export default AboutData;
