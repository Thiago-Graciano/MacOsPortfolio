const navLinks = [
  {
    id: 1,
    name: "Projetos",
    type: "finder",
  },
  {
    id: 3,
    name: "Contato",
    type: "contact",
  },
  {
    id: 4,
    name: "Cúrriculo",
    type: "resume",
  },
];

const navIcons = [
  {
    id: 1,
    img: "/icons/wifi.svg",
  },
  {
    id: 2,
    img: "/icons/search.svg",
  },
  {
    id: 3,
    img: "/icons/user.svg",
  },
  {
    id: 4,
    img: "/icons/mode.svg",
  },
];

const dockApps = [
  {
    id: "finder",
    name: "Portfolio", // was "Finder"
    icon: "finder.png",
    canOpen: true,
  },
  {
    id: "safari",
    name: "Articles", // was "Safari"
    icon: "safari.png",
    canOpen: true,
  },
  {
    id: "photos",
    name: "Gallery", // was "Photos"
    icon: "photos.png",
    canOpen: true,
  },
  {
    id: "contact",
    name: "Contact", // or "Get in touch"
    icon: "contact.png",
    canOpen: true,
  },
  {
    id: "terminal",
    name: "Skills", // was "Terminal"
    icon: "terminal.png",
    canOpen: true,
  },
  {
    id: "trash",
    name: "Archive", // was "Trash"
    icon: "trash.png",
    canOpen: false,
  },
];

const blogPosts = [
  {
    id: 1,
    date: "18 Maio, 2025",
    title:
      "🚀 Hoje tive a oportunide de participar com a Unect Jr. de uma pauta sobre Gestão de Projetos e Responsabilização",
    image: "/images/ProjetosIcon1.png",
    link: "https://www.linkedin.com/posts/thiago-graciano-eng_gestaodeprojetos-scrum-kanban-activity-7473516281032339456-zlEh?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEV5JwQBFypcFEJpN0HDJVravK6OSoBR7Fg",
  },
  {
    id: 2,
    date: "13 Ago, 2026",
    title: "🚀 Oficialmente capacitado em React Native!",
    image: "/images/capacitacaoReactNativeIcon.png",
    link: "https://lnkd.in/p/dEvhXDWk",
  },
  {
    id: 3,
    date: "21 Abr, 2026",
    title: "Finalizei meu primeiro projeto real como dev: o T. Ars Bot. 🤖",
    image: "/images/TarsIcon1.png",
    link: "https://lnkd.in/p/dvH8kVyT",
  },
];

const techStack = [
  {
    category: "Frontend",
    items: ["HTML5", "JavaScript", "Next.js", "TypeScript"],
  },
  {
    category: "Mobile",
    items: ["React Native", "Expo"],
  },
  {
    category: "Styling",
    items: ["Tailwind CSS", "CSS"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Express", "Python", "Java", "C#"],
  },
  {
    category: "Database",
    items: ["MongoDB", "PostgreSQL"],
  },
  {
    category: "Dev Tools",
    items: ["Git", "GitHub", "Docker"],
  },
];

const socials = [
  {
    id: 1,
    text: "Github",
    icon: "/icons/github.svg",
    bg: "#f4656b",
    link: "https://github.com/Thiago-Graciano",
  },
  {
    id: 2,
    text: "Email",
    icon: "/icons/atom.svg",
    bg: "#4bcb63",
    link: "mailto:msgraciano28@gmail.com",
  },
  {
    id: 3,
    text: "WhatsApp",
    icon: "/icons/twitter.svg",
    bg: "#ff866b",
    link: "https://wa.link/fh9ur6",
  },
  {
    id: 4,
    text: "LinkedIn",
    icon: "/icons/linkedin.svg",
    bg: "#05b6f6",
    link: "https://www.linkedin.com/in/thiago-graciano-eng/",
  },
];

const photosLinks = [
  {
    id: 1,
    icon: "/icons/gicon1.svg",
    title: "Library",
  },
  {
    id: 2,
    icon: "/icons/gicon2.svg",
    title: "Memories",
  },
  {
    id: 3,
    icon: "/icons/file.svg",
    title: "Places",
  },
  {
    id: 4,
    icon: "/icons/gicon4.svg",
    title: "People",
  },
  {
    id: 5,
    icon: "/icons/gicon5.svg",
    title: "Favorites",
  },
];

const gallery = [
  {
    id: 1,
    img: "/images/gal1.png",
  },
  {
    id: 2,
    img: "/images/gal2.png",
  },
  {
    id: 3,
    img: "/images/gal3.png",
  },
  {
    id: 4,
    img: "/images/gal4.png",
  },
];

export {
  navLinks,
  navIcons,
  dockApps,
  blogPosts,
  techStack,
  socials,
  photosLinks,
  gallery,
};

const WORK_LOCATION = {
  id: 1,
  type: "work",
  name: "Projetos",
  icon: "/icons/work.svg",
  kind: "folder",
  children: [
    // ▶ Project 1
    {
      id: 5,
      name: "Thumblify",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-10 left-5", // icon position inside Finder
      windowPosition: "top-[5vh] left-5", // optional: Finder window position
      children: [
        {
          id: 1,
          name: "Thumblify.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "O Thumblify é uma plataforma de geração de thumbnails com inteligência artificial, criada para tornar a criação de conteúdo visual mais rápida, simples e acessível.",
            "Em vez de depender de ferramentas complexas de design, os usuários podem gerar thumbnails personalizadas a partir de suas próprias ideias utilizando inteligência artificial.",
            "A plataforma combina uma interface moderna e intuitiva com recursos de geração por IA, transformando conceitos em visuais atrativos em poucos passos.",
            "O projeto foi desenvolvido utilizando React, Tailwind CSS, Node.js, Express, MongoDB, Cloudinary e a API do Google Gemini.",
          ],
        },
        {
          id: 2,
          name: "Thumblify.com",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://github.com/Thiago-Graciano/Thumblify",
          position: "top-10 right-20",
        },
        {
          id: 4,
          name: "Thumblify.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 right-80",
          imageUrl: "https://raw.githubusercontent.com/Thiago-Graciano/Thumblify/6518078ada5e8ffd8d1d1cee7a4e61d0e788435b/frontend/src/assets/favicon.svg",
        },
        {
          id: 5,
          name: "Ref.com",
          icon: "/images/plain.png",
          kind: "file",
          fileType: "fig",
          href: "https://greatstack.dev/p/thumblify",
          position: "top-60 right-20",
        },
      ],
    },

    // ▶ Project 2
    {
      id: 6,
      name: "App de Finanças",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-40 left-5",
      windowPosition: "top-[20vh] left-7",
      children: [
        {
          id: 1,
          name: "App de Finanças.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 right-10",
          description: [
            "O App de Finanças é uma aplicação mobile desenvolvida para ajudar usuários a organizar e acompanhar sua vida financeira de forma simples e intuitiva.",
            "O aplicativo permite registrar receitas e despesas, visualizar o histórico de transações e acompanhar a evolução das finanças através de gráficos e indicadores.",
            "A proposta é transformar o controle financeiro em uma experiência prática, oferecendo ao usuário uma visão clara de seus gastos e ganhos.",
            "O projeto foi desenvolvido com React Native, utilizando Redux, AsyncStorage, React Navigation e Axios.",
          ],
        },
        {
          id: 2,
          name: "Repositório no Github.link",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://github.com/Thiago-Graciano/Capacitacao-React-Native",
          position: "top-20 left-20",
        },
        {
          id: 4,
          name: "App de Finanças.gif",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 left-80",
          imageUrl: "/images/PresentationGIF.gif",
        },
        {
          id: 5,
          name: "Design.fig",
          icon: "/images/plain.png",
          kind: "file",
          fileType: "fig",
          href: "https://www.figma.com/design/O7hp0vwYIswS6xfKC51TFj/App-Finan%C3%A7as?node-id=0-1&p=f&t=1aAPDHw9MZhvxsRd-0",
          position: "top-60 left-5",
        },
      ],
    },

    // ▶ Project 3
    {
      id: 7,
      name: "uTask 3.0",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-10 left-80",
      windowPosition: "top-[33vh] left-7",
      children: [
        {
          id: 1,
          name: "uTask 3.0.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "O uTask 3.0 é uma aplicação desenvolvida para facilitar a organização de tarefas e aumentar a produtividade no dia a dia.",
            "A plataforma permite criar, gerenciar e acompanhar tarefas de forma simples, ajudando o usuário a manter suas atividades organizadas e seus objetivos em dia.",
            "A proposta é oferecer uma experiência prática e intuitiva para transformar uma lista de tarefas em um fluxo de trabalho mais organizado e eficiente.",
            "O projeto foi desenvolvido com foco em uma interface moderna, responsiva e uma experiência de uso simples e objetiva.",
          ],
        },
        {
          id: 2,
          name: "uTask 3.0.com",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://github.com/Thiago-Graciano/uTask-3.0",
          position: "top-10 right-20",
        },
        {
          id: 4,
          name: "uTask 3.0.gif",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 right-80",
          imageUrl: "/images/kanban-dark-mode.gif",
        },
        {
          id: 5,
          name: "Design.fig",
          icon: "/images/plain.png",
          kind: "file",
          fileType: "fig",
          href: "https://google.com",
          position: "top-60 right-20",
        },
      ],
    },

    // ▶ Project 5
    {
      id: 8,
      name: "T. Ars Bot",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-10 left-42",
      windowPosition: "top-[20vh] left-7",
      children: [
        {
          id: 1,
          name: "T. Ars Bot.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 right-10",
          description: [
            "O T. Ars é um bot para Discord desenvolvido para oferecer diferentes funcionalidades e facilitar a interação e o gerenciamento de comunidades.",
            "O projeto reúne comandos e recursos automatizados que tornam a experiência no servidor mais dinâmica, prática e divertida.",
            "A ideia é centralizar diferentes ferramentas em um único bot, permitindo que os usuários interajam com os recursos diretamente através do Discord.",
            "O projeto foi desenvolvido com foco em automação, integração com a plataforma Discord e criação de funcionalidades personalizadas.",
          ],
        },
        {
          id: 2,
          name: "Repositório no Github.link",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://github.com/Thiago-Graciano/T.-Ars-bot",
          position: "top-20 left-20",
        },
        {
          id: 4,
          name: "T. Ars Bot.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 left-80",
          imageUrl: "/images/1776819277575.jpg",
        },
      ],
    },
  ],
};

const ABOUT_LOCATION = {
  id: 2,
  type: "about",
  name: "Sobre mim",
  icon: "/icons/info.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "eu.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-10 left-5",
      imageUrl: "/images/Thiago-Unect2-400x400.png",
    },
    {
      id: 2,
      name: "eu-casual.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-28 right-72",
      imageUrl: "/images/ThiagoCasual.png",
    },
    {
      id: 3,
      name: "conference-me.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-52 left-80",
      imageUrl: "/images/ThiagoConference.png",
    },
    {
      id: 4,
      name: "Sobre-mim.txt",
      icon: "/images/txt.png",
      kind: "file",
      fileType: "txt",
      position: "top-60 left-5",
      subtitle: "Conheça o desenvolvedor por trás do código",
      image: "/images/Thiago-Unect1-400x400.png",
      description: [
        "Olá! Eu sou o Thiago 👋, desenvolvedor Fullstack e estudante de Engenharia de Computação, apaixonado por tecnologia e por transformar ideias em projetos reais.",
        "Tenho experiência com desenvolvimento web e mobile, principalmente com React, TypeScript, React Native, JavaScript e Node.js.",
        "Também me interesso por UI/UX, automação e inteligência artificial, buscando unir tecnologia e criatividade para criar experiências modernas e funcionais.",
      ],
    },
  ],
};

const RESUME_LOCATION = {
  id: 3,
  type: "resume",
  name: "Currículo",
  icon: "/icons/file.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "Curriculo.pdf",
      icon: "/images/pdf.png",
      kind: "file",
      fileType: "pdf",
      // you can add `href` if you want to open a hosted resume
      // href: "/your/resume/path.pdf",
    },
  ],
};

const TRASH_LOCATION = {
  id: 4,
  type: "trash",
  name: "Lixeira",
  icon: "/icons/trash.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "trash1.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-10 left-10",
      imageUrl: "/images/trash-1.png",
    },
    {
      id: 2,
      name: "trash2.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-40 left-80",
      imageUrl: "/images/trash-2.png",
    },
  ],
};

export const locations = {
  work: WORK_LOCATION,
  about: ABOUT_LOCATION,
  resume: RESUME_LOCATION,
  trash: TRASH_LOCATION,
};

const INITIAL_Z_INDEX = 1000;

const WINDOW_CONFIG = {
  finder: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  contact: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  resume: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  safari: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  photos: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  terminal: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  txtfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  imgfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
};

export { INITIAL_Z_INDEX, WINDOW_CONFIG };