// All portfolio content lives here. Edit this one file and every template updates.
window.PORTFOLIO = {
  name: "Mostafa Kailany",
  initials: "MK",
  role: "Application Developer & IT Systems Specialist",
  roles: ["Application Developer", "Backend Engineer", "Mobile Developer", "Automation Builder", "IT Systems Specialist"],
  location: "Amman, Jordan",
  email: "mustafakilany1@gmail.com",
  linkedin: "https://www.linkedin.com/in/mustafa-kilany-615164218/",
  github: "", // add your GitHub URL here to show it
  cvUrl: "", // e.g. "Mostafa-Kailany-CV.pdf" to show a Download CV button
  tagline: "I build mobile apps, APIs and automations, and I keep the systems they run on secure.",
  about: [
    "I work at EY in the Tax Service Line (Global Compliance & Reporting), where I bring IT and tax together. I write Python, VBA and Excel automations that turn very large volumes of financial and regulatory documents into structured, decision-ready data. I was named an AI Champion for MENA and placed Top 4 in the EY Tax Hackathon for MENA.",
    "Alongside EY I'm building Madmoon Deals end to end: the React Native app, the Express and PostgreSQL API, and the admin dashboard. Before that I was an IT Officer at a medical center, administering Windows Server and the network, and built data-heavy backends at a software company, so I'm comfortable on both the infrastructure and the application side.",
    "I graduated in 2025 with a B.Sc. in Computer Science from Al Hussein Technical University (HTU), and I'm currently studying for the Chartered Institute of Taxation's Diploma in Tax Technology (DITT)."
  ],
  stats: [
    { value: 6, suffix: "+", label: "Roles across dev, IT & research" },
    { value: 4, prefix: "Top ", label: "EY Tax Hackathon, MENA" },
    { value: "DITT", label: "Diploma in Tax Technology, CIOT (in progress)" },
    { value: 2, label: "Fluent languages (AR / EN)" }
  ],
  awards: [
    { title: "AI Champion, MENA", org: "Ernst & Young", icon: "★" },
    { title: "Top 4, EY Tax Hackathon MENA", org: "Ernst & Young", icon: "🏆" },
    { title: "Red Hat System Administration I", org: "Red Hat", icon: "🎩" }
  ],
  now: {
    working: { title: "Tax Service Line – GCR Associate", org: "Ernst & Young (EY)" },
    building: { title: "Madmoon Deals", desc: "A marketplace app for Jordan with live auctions and escrow payments" }
  },
  experience: [
    {
      role: "Tax Service Line – GCR Associate",
      org: "Ernst & Young (EY)",
      period: "Feb 2026 – Present",
      current: true,
      type: "Automation · Data",
      skills: ["Python", "VBA", "Excel", "Data Processing", "AI"],
      points: [
        "Build Python, VBA and Excel automations that process and speed up very heavy workloads, cutting manual processing time and improving accuracy.",
        "Convert large volumes of financial and regulatory data from Excel, PDF and other formats into structured working files for data-driven decisions.",
        "Review complex datasets and client records for discrepancies, compliance risks and documentation gaps under strict deadlines.",
        "Recognized as an AI Champion in MENA, and placed Top 4 in the EY Tax Hackathon for MENA with a proposed RAG system for classifying invoices against Jordanian tax law."
      ]
    },
    {
      role: "Freelance Application Developer",
      org: "Madmoon Deals",
      period: "Ongoing",
      current: true,
      type: "Mobile · Backend",
      skills: ["React Native", "TypeScript", "Express.js", "PostgreSQL", "Prisma", "React"],
      points: [
        "Own the full development life cycle of a cross-platform marketplace, from requirements to production-ready features.",
        "Built the React Native client and the Express.js API, covering structured endpoints, data persistence and responsive user flows.",
        "Handle backend integration, testing, debugging and ongoing troubleshooting to keep the platform stable and fast."
      ]
    },
    {
      role: "Research Assistant & Project Manager Assistant",
      org: "Special Communication Commission, Jordanian Armed Forces",
      period: "Jan 2026 – Feb 2026",
      type: "Mobile · Research",
      skills: ["Java", "Android Studio", "Project Management"],
      points: [
        "Contributed to confidential mobile projects, building Android features in Java with Android Studio.",
        "Tested, refined and documented application functionality, and compiled technical research and project reports.",
        "Supported planning, coordinated team activities and tracked timelines and deliverables."
      ]
    },
    {
      role: "IT Officer",
      org: "Sharif Eye Center",
      period: "Sep 2025 – Dec 2025",
      type: "IT · Web",
      skills: ["Windows Server", "Networking", "Firewalls", "Web Development", "Computer Vision"],
      points: [
        "Administered Windows Server, domain configuration, user accounts and access permissions.",
        "Configured firewall permissions and enforced network security requirements across systems.",
        "Built and maintained the clinic's eyewear e-commerce site, including a camera-based virtual try-on feature.",
        "Planned IT activities, monitored system performance and resolved issues on schedule."
      ]
    },
    {
      role: "Backend Developer Apprenticeship",
      org: "Dot.Jo",
      period: "Mar 2025 – Oct 2025",
      type: "Backend",
      skills: ["PHP", "Laravel", "Yii2", "MongoDB", "SQL"],
      points: [
        "Developed backend solutions with Laravel and Yii2 that process large volumes of data efficiently.",
        "Designed, integrated and managed MongoDB and SQL databases, tuning queries for performance.",
        "Evaluated backend architectures for scalability and fixed defects to improve stability."
      ]
    },
    {
      role: "Research Assistant & Project Manager Assistant",
      org: "Al Hussein Technical University (HTU)",
      period: "May 2024 – Apr 2025",
      type: "Research · Python",
      skills: ["Python", "Manim", "Project Management"],
      points: [
        "Used Python and Manim to design and animate educational videos explaining complex physics concepts.",
        "Interviewed instructors to gather requirements and iterate on the technical content.",
        "Coordinated schedules, tracked deliverables and reported progress to Prof. Sameer Arabasi."
      ]
    },
    {
      role: "Customer Service Advisor (Coca-Cola Project)",
      org: "Crystel",
      period: "Oct 2021 – May 2024",
      type: "Client Support",
      hidden: true, // not shown on the site; set to false to show it again
      skills: ["Communication", "Problem Solving"],
      points: [
        "Handled large inbound and outbound English call volumes: orders, inquiries and troubleshooting.",
        "Resolved complaints calmly under pressure and routed escalations to the right teams."
      ]
    }
  ],
  projects: [
    {
      name: "Madmoon Deals",
      status: "Building now",
      featured: true,
      emoji: "🛒",
      summary: "A buy-and-sell marketplace for Jordan: fixed-price listings, offers, live auctions and escrow payments released when the courier confirms delivery.",
      highlights: [
        "Cross-platform mobile app (Android + iOS) in English and Arabic with full RTL",
        "Own REST API: Express + PostgreSQL with Prisma, documented API contract",
        "Escrow payment flow and live auctions with bid holds",
        "Admin dashboard web app (React + Vite) on the same API",
        "CI on every pull request, end-to-end tests with Maestro, load and security checks"
      ],
      stack: ["React Native", "TypeScript", "Express", "PostgreSQL", "Prisma", "React", "Vite", "Firebase"],
      link: ""
    },
    {
      name: "Jordanian Tax Law RAG",
      status: "Concept, Top 4 at the EY Tax Hackathon MENA",
      planned: true,
      emoji: "⚖️",
      summary: "A retrieval-augmented generation (RAG) system my team and I designed and pitched at the EY Tax Hackathon for MENA, where it placed Top 4. It will read invoices with OCR, search a vector database of Jordanian tax law, including transfer pricing (TP) and Country-by-Country (CbC) reporting rules, by cosine similarity, and classify each invoice against the passages it matches.",
      highlights: [
        "Pitched the idea and placed Top 4 in the EY Tax Hackathon for MENA",
        "Design: OCR turns scanned and photographed invoices into text",
        "Design: Jordanian tax law, TP and CbC reporting rules split into passages, embedded and stored in a vector database",
        "Design: each invoice matched to the closest law passages by cosine similarity, with related-party transactions flagged under TP and CbC rules",
        "Every classification will point back to the law passages it relies on",
        "Sources and requirements are collected. Development starts in June 2027"
      ],
      stack: ["Python", "OCR", "Embeddings", "Vector database", "Cosine similarity", "RAG", "LLM", "Transfer pricing", "CbC reporting"],
      link: ""
    },
    {
      name: "Tax Workflow Automation",
      status: "At EY",
      emoji: "⚙️",
      summary: "Automation scripts that turn heavy volumes of Excel and PDF financial and regulatory documents into structured working files, work recognized with the AI Champion title for MENA.",
      highlights: [
        "Python, VBA and Excel pipelines for document extraction and transformation",
        "Large cuts in manual processing time, with better output accuracy",
        "Recognized as an AI Champion for MENA"
      ],
      stack: ["Python", "VBA", "Excel", "Automation", "AI"],
      link: ""
    },
    {
      name: "Virtual Try-On Eyewear Store",
      status: "Shipped",
      emoji: "👓",
      summary: "An e-commerce website for Sharif Eye Center with a camera-based virtual try-on, so customers can see frames on their own face before buying.",
      highlights: [
        "Real-time camera try-on in the browser",
        "Product catalogue, performance and UX optimization",
        "Built and maintained alongside my IT Officer role at the clinic"
      ],
      stack: ["JavaScript", "Web", "Computer Vision", "E-commerce"],
      link: ""
    },
    {
      name: "Physics Explained, Animated",
      status: "Research",
      emoji: "🎞️",
      summary: "Educational animations of complex physics concepts made with Python and Manim for Al Hussein Technical University.",
      highlights: [
        "Programmatic animations written in Python with Manim",
        "Requirements gathered through interviews with instructors",
        "Iterative content updates on a tracked project schedule"
      ],
      stack: ["Python", "Manim", "Research"],
      link: ""
    },
    {
      name: "Data-Heavy Backends",
      status: "Dot.Jo",
      emoji: "🗄️",
      summary: "Backend services in Laravel and Yii2 for processing large volumes of data, with MongoDB and SQL databases designed and tuned for performance.",
      highlights: [
        "Laravel and Yii2 services",
        "MongoDB and SQL schema design and query tuning",
        "Architecture reviews for scalability"
      ],
      stack: ["PHP", "Laravel", "Yii2", "MongoDB", "SQL"],
      link: ""
    }
  ],
  skills: {
    "Mobile": ["React Native", "Android (Java)", "Android Studio", "TypeScript"],
    "Backend": ["Node.js", "Express.js", "PHP", "Laravel", "Yii2", "REST APIs", "Prisma"],
    "Data & Automation": ["Python", "PostgreSQL", "MongoDB", "SQL", "VBA", "Excel", "Manim"],
    "IT & Security": ["Windows Server", "Domain & Users", "Firewalls", "Network Security", "Red Hat Linux"],
    "Ways of Working": ["Full SDLC", "Requirements Gathering", "Project Coordination", "CI / Testing"]
  },
  education: [
    { title: "B.Sc. Computer Science", org: "Al Hussein Technical University (HTU)", period: "2020 – 2025", note: "" },
    { title: "Diploma in Tax Technology (DITT)", org: "Chartered Institute of Taxation (CIOT)", period: "In progress", note: "" },
    { title: "Red Hat System Administration I", org: "Red Hat", period: "Certification", note: "" }
  ],
  languages: [
    { name: "Arabic", level: "Native / Fluent", pct: 100 },
    { name: "English", level: "Fluent", pct: 95 },
    { name: "German", level: "Beginner", pct: 20 }
  ],
  volunteering: [
    "World Diabetes Day: event staff",
    "Nahnoo: supporting children in education",
    "Entro Gate: high-school student educational support"
  ]
};
