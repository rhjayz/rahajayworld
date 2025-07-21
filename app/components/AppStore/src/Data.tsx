export interface DataProps {
  id: number;
  category: string;
  title: string;
  pointOfInterest: number;
  backgroundColor: string;
  description: string;
  status: boolean;
  skill: {icon: string,title: string}[];
  worked?: string[];
  image: string[];
}

export const items:DataProps[] = [
  // Photo by ivan Torres on Unsplash
  {
    id: 1,
    category: "Dekstop",
    title: "Doung - Donut Cashier Application",
    pointOfInterest: 80, 
    backgroundColor: "#814A0E",
    description: "The Doung application is a software program designed to assist administrators in managing donut sales and minimizing errors during product input and transaction processes. Additionally, this application streamlines sales reporting, making it easier for administrators to generate and manage reports efficiently.",
    worked: ['Developing a login page', 'Implementing donut management features', 'Guest management features', 'Transaction features', 'Generating reports using JasperReports'],
    status: true,
    skill: [{ icon: 'icons8-apache-netbeans', title: 'netbeans' }, {icon: 'icons8-java', title:'java'}],
    image: ['doung/pic1'],
  },
  // Photo by Dennis Brendel on Unsplash
  {
    id: 2,
    category: "Web",
    title: "Lawyerweb - Web profile for Lawyer",
    pointOfInterest: 120,
    backgroundColor: "#959684",
    description: "Lawyerweb is a professional profile website specifically designed to introduce lawyers to the public while building a strong personal brand and professional reputation. In addition to serving as a branding platform, Lawyerweb also features the latest news and insights related to the legal world, case developments, and current issues concerning the legal profession. This platform acts as a bridge between lawyers and the community, offering an informative, credible, and easily accessible space for those seeking legal knowledge or professional services.",
    worked: ['Home page', 'About Page', 'News Page', 'Contact Page'],
    status: true,
    skill: [
      { icon: 'file-type-html', title: 'html' },
      { icon: 'file-type-css', title: 'css' },
      { icon: 'javascript-js', title: 'javascript' },
      { icon: 'bootstrap', title: 'bootstrap' }
    ],
    image: ['lawyerweb/pic1_lawyerweb'],
  },
  // Photo by Alessandra Caretto on Unsplash
  {
    id: 3,
    category: "Web",
    title: "Webspace - Consultant IT",
    pointOfInterest: 260,
    backgroundColor: "#5DBCD2",
    description: "Webspace is an IT consulting company specializing in professional website development services. We assist clients across various industries in designing, building, and managing effective and functional websites tailored to their business needs. With a solution-oriented approach, Webspace is committed to delivering added value through digital technology and targeted web strategies.",
    worked: ['Landing Page'],
    status: true,
    skill: [
      { icon: 'file-type-html', title: 'html' },
      { icon: 'file-type-css', title: 'css' },
      { icon: 'javascript-js', title: 'javascript' },
      { icon: 'bootstrap', title: 'bootstrap' },
      { icon: 'laravel', title:'laravel'},
    ],
    image: ['webspace/pic1_webspace'],
  },
  // Photo by Taneli Lahtinen on Unsplash
  {
    id: 4,
    category: "Web",
    title: "BBook - Guest Management System",
    pointOfInterest: 200,
    backgroundColor: "#8F986D",
    description: "Bbook is a guest management system designed to simplify and streamline the process of recording guest attendance. It features integrated photo capture capabilities, allowing guests to be visually identified and their presence accurately documented. With Bbook, managing guest data becomes more practical, secure, and efficient — making it ideal for formal events, government institutions, corporate environments, and large-scale gatherings.",
    worked: ['Login Page','Register Page','Dashboard','Management Guest','Report','Configuration Database'],
    status: true,
    skill:[
      { icon: 'file-type-html', title: 'html' },
      { icon: 'file-type-css', title: 'css' },
      { icon: 'javascript-js', title: 'javascript' },
      { icon: 'bootstrap', title: 'bootstrap' },
      { icon: 'laravel', title: 'laravel' },
      {icon: 'mysql-original-wordmark', title: 'mysql'},
    ],
      
    image: ['bbook/pic1_bbook'],
  },
  // Photo by Simone Hutsch on Unsplash
  {
    id: 5,
    category: "Web",
    title: "Bcash - Website cashier for u",
    pointOfInterest: 150,
      backgroundColor: "#FA6779",
    description: "Bcash is a web-based application designed to streamline transaction processes in restaurants. Equipped with features to facilitate order management, payments, and financial tracking, Bcash aims to improve operational efficiency and deliver a better experience for both customers and restaurant managers.",
    status: true,
    worked: [
      'Supports multi-role access: Admin, Cashier, and Customer',
      'Includes login and registration features for user authentica tion',
      'Menu management: add, edit, and delete food and beverage items',
      'Table management: organize and monitor table availability',
      'User management: assign roles and manage user data',
      'Order and transaction system: create orders and process payments',
      'Annual revenue reports: view income summary per year',
      'Order reports: track and analyze ordering trends and details'
    ],
    skill:[
      { icon: 'file-type-html', title: 'html' },
      { icon: 'file-type-css', title: 'css' },
      { icon: 'javascript-js', title: 'javascript' },
      { icon: 'bootstrap', title: 'bootstrap' },
      { icon: 'laravel', title: 'laravel' },
      {icon: 'mysql-original-wordmark', title: 'mysql'},
    ],
    image: ['bcash/pic1_bcash'],
  },
  // Photo by Siora Photography on Unsplash
  {
    id: 6,
    category: "web",
    title: "Republiklan - Advetisment Website",
    pointOfInterest: 60,
    backgroundColor: "#282F49",
    description: "This is a web-based platform designed to advertise vehicle products such as cars and motorcycles. It allows sellers to list their vehicles with details like images, specifications, and prices, while admins can manage and monitor all listings through a dedicated dashboard.",
    status: false,
    worked: [
      'Developed authentication system including login, registration, and role-based access control',
      'Designed and implemented the front-end UI for authentication pages',
      'Built customer module with full CRUD operations (Create, Read, Update, Delete)',
      'Created receipt (nota) module for managing transaction records using full CRUD operations',
    ],
    skill: [
      { icon: 'file-type-html', title: 'html' },
      { icon: 'file-type-css', title: 'css' },
      { icon: 'javascript-js', title: 'javascript' },
      { icon: 'bootstrap', title: 'bootstrap' },
      { icon: 'codeigniter-plain', title: 'Codeigniter' },
      {icon: 'mysql-original-wordmark', title: 'mysql'},
    ],
    image: ['republiklan/pic1_republiklan'],
  },
  // Photo by Yerlin Matu on Unsplash
  {
    id: 7,
    category: "web",
    title: "Republiklan - Advetisment Website",
    pointOfInterest: 200,
    backgroundColor: "#AC7441",
    description: "Bankai",
    status: false,
    skill: [{ icon: 'icons8-apache-netbeans', title: 'netbeans' }, {icon: 'icons8-java', title:'java'}],
    image: ['doung/pic1'],
  },
  // Photo by Ali Abdul Rahman on Unsplash
  {
    id: 8,
    category: "Holidays",
    title: "Seriously the Only Escape is the Stratosphere",
    pointOfInterest: 260,
    backgroundColor: "#CC555B",
    description: "This is a web-based platform designed to advertise vehicle products such as cars and motorcycles. It allows sellers to list their vehicles with details like images, specifications, and prices, while admins can manage and monitor all listings through a dedicated dashboard.",
    status: false,
    worked: [
      'Developed authentication system including login, registration, and role-based access control',
      'Designed and implemented the front-end UI for authentication pages',
      'Built customer module with full CRUD operations (Create, Read, Update, Delete)',
      'Created receipt (nota) module for managing transaction records using full CRUD operations',
    ],
    skill: [{ icon: 'icons8-apache-netbeans', title: 'netbeans' }, {icon: 'icons8-java', title:'java'}],
    image: ['republiklan/pic1_republiklan'],
  }
];

export const openSpring = { type: "spring", stiffness: 200, damping: 30 };
