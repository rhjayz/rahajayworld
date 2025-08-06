export interface DataProps {
  id: number;
  category: string;
  title: string;
  pointOfInterest: number;
  backgroundColor: string;
  description: string;
  status: boolean;
  skill: { icon: string; title: string }[];
  worked?: string[];
  image: string[];
  link: string;
}

export const items: DataProps[] = [
  // Photo by ivan Torres on Unsplash
  {
    id: 1,
    category: "Dekstop",
    title: "Doung - Donut Cashier Application",
    pointOfInterest: 80,
    backgroundColor: "#814A0E",
    description:
      "The Doung application is a software program designed to assist administrators in managing donut sales and minimizing errors during product input and transaction processes. Additionally, this application streamlines sales reporting, making it easier for administrators to generate and manage reports efficiently.",
    worked: [
      "Developing a login page",
      "Implementing donut management features",
      "Guest management features",
      "Transaction features",
      "Generating reports using JasperReports",
    ],
    status: true,
    skill: [
      { icon: "icons8-apache-netbeans", title: "netbeans" },
      { icon: "icons8-java", title: "java" },
    ],
    image: ["doung/pic1"],
    link: "",
  },
  // Photo by Dennis Brendel on Unsplash
  {
    id: 2,
    category: "Web",
    title: "Lawyerweb - Web profile for Lawyer",
    pointOfInterest: 120,
    backgroundColor: "#959684",
    description:
      "Lawyerweb is a professional profile website specifically designed to introduce lawyers to the public while building a strong personal brand and professional reputation. In addition to serving as a branding platform, Lawyerweb also features the latest news and insights related to the legal world, case developments, and current issues concerning the legal profession. This platform acts as a bridge between lawyers and the community, offering an informative, credible, and easily accessible space for those seeking legal knowledge or professional services.",
    worked: ["Home page", "About Page", "News Page", "Contact Page"],
    status: true,
    skill: [
      { icon: "file-type-html", title: "html" },
      { icon: "file-type-css", title: "css" },
      { icon: "javascript-js", title: "javascript" },
      { icon: "bootstrap", title: "bootstrap" },
    ],
    image: ["lawyerweb/pic1_lawyerweb"],
    link: "",
  },
  // Photo by Alessandra Caretto on Unsplash
  {
    id: 3,
    category: "Web",
    title: "Webspace - Consultant IT",
    pointOfInterest: 260,
    backgroundColor: "#5DBCD2",
    description:
      "Webspace is an IT consulting company specializing in professional website development services. We assist clients across various industries in designing, building, and managing effective and functional websites tailored to their business needs. With a solution-oriented approach, Webspace is committed to delivering added value through digital technology and targeted web strategies.",
    worked: ["Landing Page"],
    status: true,
    skill: [
      { icon: "file-type-html", title: "html" },
      { icon: "file-type-css", title: "css" },
      { icon: "javascript-js", title: "javascript" },
      { icon: "bootstrap", title: "bootstrap" },
      { icon: "laravel", title: "laravel" },
    ],
    image: ["webspace/pic1_webspace"],
    link: "",
  },
  // Photo by Taneli Lahtinen on Unsplash
  {
    id: 4,
    category: "Web",
    title: "BBook - Guest Management System",
    pointOfInterest: 200,
    backgroundColor: "#8F986D",
    description:
      "Bbook is a guest management system designed to simplify and streamline the process of recording guest attendance. It features integrated photo capture capabilities, allowing guests to be visually identified and their presence accurately documented. With Bbook, managing guest data becomes more practical, secure, and efficient — making it ideal for formal events, government institutions, corporate environments, and large-scale gatherings.",
    worked: [
      "Login Page",
      "Register Page",
      "Dashboard",
      "Management Guest",
      "Report",
      "Configuration Database",
    ],
    status: true,
    skill: [
      { icon: "file-type-html", title: "html" },
      { icon: "file-type-css", title: "css" },
      { icon: "javascript-js", title: "javascript" },
      { icon: "bootstrap", title: "bootstrap" },
      { icon: "laravel", title: "laravel" },
      { icon: "mysql-original-wordmark", title: "mysql" },
    ],

    image: ["bbook/pic1_bbook"],
    link: "",
  },
  // Photo by Simone Hutsch on Unsplash
  {
    id: 5,
    category: "Web",
    title: "Bcash - Website cashier for u",
    pointOfInterest: 150,
    backgroundColor: "#FA6779",
    description:
      "Bcash is a web-based application designed to streamline transaction processes in restaurants. Equipped with features to facilitate order management, payments, and financial tracking, Bcash aims to improve operational efficiency and deliver a better experience for both customers and restaurant managers.",
    status: true,
    worked: [
      "Supports multi-role access: Admin, Cashier, and Customer",
      "Includes login and registration features for user authentica tion",
      "Menu management: add, edit, and delete food and beverage items",
      "Table management: organize and monitor table availability",
      "User management: assign roles and manage user data",
      "Order and transaction system: create orders and process payments",
      "Annual revenue reports: view income summary per year",
      "Order reports: track and analyze ordering trends and details",
    ],
    skill: [
      { icon: "file-type-html", title: "html" },
      { icon: "file-type-css", title: "css" },
      { icon: "javascript-js", title: "javascript" },
      { icon: "bootstrap", title: "bootstrap" },
      { icon: "laravel", title: "laravel" },
      { icon: "mysql-original-wordmark", title: "mysql" },
    ],
    image: ["bcash/pic1_bcash"],
    link: "",
  },
  // Photo by Siora Photography on Unsplash
  {
    id: 6,
    category: "web",
    title: "Republiklan - Advetisment Website",
    pointOfInterest: 60,
    backgroundColor: "#282F49",
    description:
      "This is a web-based platform designed to advertise vehicle products such as cars and motorcycles. It allows sellers to list their vehicles with details like images, specifications, and prices, while admins can manage and monitor all listings through a dedicated dashboard.",
    status: true,
    worked: [
      "Developed authentication system including login, registration, and role-based access control",
      "Designed and implemented the front-end UI for authentication pages",
      "Built customer module with full CRUD operations (Create, Read, Update, Delete)",
      "Created receipt (nota) module for managing transaction records using full CRUD operations",
    ],
    skill: [
      { icon: "file-type-html", title: "html" },
      { icon: "file-type-css", title: "css" },
      { icon: "javascript-js", title: "javascript" },
      { icon: "bootstrap", title: "bootstrap" },
      { icon: "codeigniter-plain", title: "Codeigniter" },
      { icon: "mysql-original-wordmark", title: "mysql" },
    ],
    image: ["republiklan/pic1_republiklan"],
    link: "",
  },
  // Photo by Yerlin Matu on Unsplash
  {
    id: 7,
    category: "web",
    title: "Citengah - Promotion Potensial Village",
    pointOfInterest: 60,
    backgroundColor: "#282F49",
    description:
      "This is a web-based platform designed to advertise vehicle products such as cars and motorcycles. It allows sellers to list their vehicles with details like images, specifications, and prices, while admins can manage and monitor all listings through a dedicated dashboard.",
    status: true,
    worked: [
      "Developed a landing page to promote Citengah Village and its local products",
    ],
    skill: [
      { icon: "wordpress", title: "Wordpress" },
      { icon: "elementor", title: "Elementor" },
    ],
    image: ["citengah/pic1"],
    link: "",
  },
  // Photo by Ali Abdul Rahman on Unsplash
  {
    id: 8,
    category: "web",
    title: "E-Ticketing - Dipass & Buzzit(B2C,B2B)",
    pointOfInterest: 260,
    backgroundColor: "#CC555B",
    description:
      "Dipass is an e-ticketing application developed in collaboration with the Indonesian Ministry of Transportation (Kemenhub). It was built using the Laravel framework with a MySQL database. Buzzit is another e-ticketing application created to simplify bus ticket purchases for PO Bus SAN. Buzzit has two platforms: a B2B version built with CodeIgniter 3 and a B2C version built with Laravel, both integrated with a MySQL database.",
    status: true,
    worked: [
      "(BUZZIT - B2B) CodeIgniter 3",
      "Developed multi-role access system for the Buzzit application",
      "Built admin and agent features with full CRUD (Create, Read, Update, Delete) modules",
      "Created monthly and yearly report modules",
      "Implemented role management features",
      "Ensured responsive UI design",
      "Managed and integrated the MySQL database",
      "Deployed and hosted the application",
      "Enhanced and developed all features continuously",
      "",
      "(BUZZIT - B2C) Laravel",
      "Designed database schema for the B2C platform",
      "Managed database operations such as adding fields and defining table relationships",
      "Created necessary views for the application",
      "Collaborated in developing the bus booking and ticket purchasing features",
      "",
      "(DIPASS - E-Ticketing)",
      "Managed database structure and optimization",
      "Created dummy databases for testing purposes",
      "Integrated database with the main application",
    ],
    skill: [
      { icon: "file-type-html", title: "html" },
      { icon: "file-type-css", title: "css" },
      { icon: "javascript-js", title: "javascript" },
      { icon: "bootstrap", title: "bootstrap" },
      { icon: "jquery-plain", title: "Jquery" },
      { icon: "laravel", title: "laravel" },
      { icon: "codeigniter-plain", title: "Codeigniter" },
      { icon: "mysql-original-wordmark", title: "mysql" },
    ],
    image: ["dipassbuzzit/pic1"],
    link: "",
  },
  {
    id: 9,
    category: "mobile",
    title: "Glamore - Restaurant App",
    pointOfInterest: 260,
    backgroundColor: "#CC555B",
    description:
      "Glamore is a personal project developed together with a friend. The project focuses on designing the UI/UX for a restaurant application.",
    status: true,
    worked: [
      "Created the login screen design",
      "Created the registration screen design",
      "Created the home screen design",
    ],
    skill: [{ icon: "figma", title: "Figma" }],
    image: ["glamore/pic1"],
    link: "",
  },
  {
    id: 10,
    category: "web",
    title: "Pintara - Courses Website",
    pointOfInterest: 260,
    backgroundColor: "#CC555B",
    description:
      "Pintara is a personal project developed together with a friend. This project focuses on designing the UI/UX for an online course website.",
    status: true,
    worked: ["Created the landing page design", "Created the home page design"],
    skill: [{ icon: "figma", title: "Figma" }],
    image: ["pintara/pic1"],
    link: "",
  },
  {
    id: 11,
    category: "web",
    title: "ABP - Access Buy Pass",
    pointOfInterest: 260,
    backgroundColor: "#CC555B",
    description:
      "Access Buy Pass (ABP) is a personal project developed together with a friend. This project was built using the Flutter framework for the front end and Laravel (Lumen) for the back end.",
    status: true,
    worked: [
      "Developed API for authentication",
      "Developed API for ticket booking",
      "Developed API for displaying concert information",
      "Manage Database",
    ],
    skill: [
      { icon: "Flutter", title: "Flutter" },
      { icon: "Lumen", title: "Lumen" },
      { icon: "laravel", title: "Laravel" },
      { icon: "mysql-original-wordmark", title: "MySql" },
    ],
    image: ["abp/pic1"],
    link: "",
  },
  {
    id: 12,
    category: "desktop",
    title: "Tic Tac Bim — play when you're bored",
    pointOfInterest: 260,
    backgroundColor: "#CC555B",
    description:
      "Tic Tac Bim is a simple Tic Tac Toe game designed to be played when you're bored. This project has been improved over time and serves as a fun learning experience.",
    status: true,
    worked: [
      "Built the splash screen for initial transition",
      "Created the main menu interface",
      "Developed the gameplay screen and game logic",
      "Designed the production screen for final build presentation",
    ],
    skill: [{ icon: "python", title: "Python" }],
    image: ["tictacbim/pic_1"],
    link: "",
  },
  {
    id: 13,
    category: "web",
    title: "ShortB — short, smart, shareable",
    pointOfInterest: 260,
    backgroundColor: "#CC555B",
    description:
      "ShortB is a link shortening platform that also tracks user clicks and access locations, providing insightful analytics in a simple and shareable way.",
    status: true,
    worked: [
      "Created the landing page with clear branding and purpose",
      "Built login and registration pages with full authentication functionality",
      "Designed the database structure for users, links, and analytics",
      "Developed a user dashboard for managing shortened links",
      "Implemented a form to generate short links with tracking capabilities",
      "Built a user profile page for editing account information",
      "Added reporting features by date and month for user analytics",
    ],
    skill: [
      { icon: "Go", title: "Golang" },
      { icon: "PostgresSQL", title: "PostgresSQL" },
      { icon: "Materialize", title: "Materialize" },
      { icon: "Docker", title: "Docker" },
    ],
    image: ["shortb/pic_1"],
    link: "https://shortenb-production.up.railway.app/",
  },
  {
    id: 14,
    category: "web",
    title: "Forum Raha — Discussion for smart people",
    pointOfInterest: 260,
    backgroundColor: "#CC555B",
    description:
      "Tic Tac Bim is a simple Tic Tac Toe game designed to be played when you're bored. This project has been improved over time and serves as a fun learning experience.",
    status: false,
    worked: [
      "Built the splash screen for initial transition",
      "Created the main menu interface",
      "Developed the gameplay screen and game logic",
      "Designed the production screen for final build presentation",
    ],
    skill: [
      { icon: "react", title: "ReactJS" },
      { icon: "node-js", title: "NodeJS" },
      { icon: "icons8-express-js", title: "ExpressJS" },
      { icon: "sequelize", title: "Sequelize" },
      { icon: "mysql-original-wordmark", title: "MySQL" },
      { icon: "bulma", title: "Bulma" },
    ],
    image: ["forumraha/pic_1"],
    link: "",
  },
  {
    id: 15,
    category: "web",
    title: "Btodo — Simple daily task manager",
    pointOfInterest: 180,
    backgroundColor: "#4CAF50",
    description:
      "Btodo is a simple to-do application designed to help users manage their daily activities with ease and clarity.",
    status: false,
    worked: [
      "Built the login and registration pages with functional layout and input validation",
    ],
    skill: [{ icon: "Flutter", title: "Flutter" }],
    image: ["btodo/pic_1"],
    link: "",
  },
  {
    id: 16,
    category: "web",
    title: "Orderit — Manage dan Fun with ur life",
    pointOfInterest: 260,
    backgroundColor: "#CC555B",
    description:
      "Orderit is a restaurant management application designed to help entrepreneurs efficiently run and scale their food businesses. With features like order processing, inventory management, and staff coordination, Orderit simplifies daily operations and improves productivity. What sets it apart is its ability to manage multiple outlets from one centralized platform, making it ideal for restaurant chains or business owners with several branches.",
    status: false,
    worked: [
      "Built the landing page layout for both web and mobile views",
      "Implemented authentication features (Login, Register, Forgot Password, and Verification) with responsive design and backend functionality",
      "Developed the dashboard interface",
      "Created a custom template from scratch using Bootstrap CSS",
      "Designed and integrated the database for connectivity with the backend",
      "Integrated Git for version control and deployed the frontend to Vercel and the backend to Railway",
    ],
    skill: [
      { icon: "react", title: "ReactJS" },
      { icon: "icons8-vite", title: "Vite" },
      { icon: "typescript-icon", title: "Typescript" },
      { icon: "node-js", title: "NodeJS" },
      { icon: "icons8-express-js", title: "ExpressJS" },
      { icon: "prisma", title: "Prisma" },
      { icon: "icons8-json-web-token", title: "JWT" },
      { icon: "google-cloud", title: "GCP" },
      { icon: "mysql-original-wordmark", title: "MySQL" },
      { icon: "bootstrap", title: "bootstrap" },
      { icon: "Docker", title: "Docker" },
    ],
    image: ["orderit/pic_1"],
    link: "https://orderit-gilt.vercel.app/",
  },
];

export const openSpring = { type: "spring", stiffness: 200, damping: 30 };
