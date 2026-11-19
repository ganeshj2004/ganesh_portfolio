export const projects = [
  {
    id: 1,
    title: "Party Decoration Booking Platform",
    category: "Full Stack Development",
    subtitle: "Event Management & Reservation System",
    description:
      "A full-stack event booking platform featuring booking management, real-time booking status tracking, admin dashboard, and secure authentication.",
    fullDescription:
      "Engineered an end-to-end reservation ecosystem for event decoration services. The system features a responsive booking interface for clients to select themes and reserve dates, coupled with an administrative control panel for schedule management, real-time status progression (Pending, Confirmed, Completed), and secure JWT-based access for admins and clients.",
    technologies: ["React.js", "Node.js", "Express.js", "MySQL", "JWT", "Bootstrap 5"],
    highlights: [
      "Client booking workflow with date/package selection",
      "Real-time reservation status tracking engine",
      "Administrative dashboard for order orchestration",
      "Stateless session management using JWT authentication",
      "Relational schema in MySQL ensuring transactional integrity"
    ],
    image: "/images/project-booking.svg",
    github: "", // Empty: button will be cleanly omitted
    liveDemo: "", // Empty: button will be cleanly omitted
    featured: true
  },
  {
    id: 2,
    title: "Exam Result Publishing Portal",
    category: "Institutional Web Platform",
    subtitle: "High-Throughput Academic Portal",
    description:
      "A secure multi-role examination result portal with result uploads, database management, and controlled access for students and administrators.",
    fullDescription:
      "Developed a centralized, highly reliable examination publishing architecture built to withstand traffic surges during score release periods. Implements rigorous RBAC separating Admin, Faculty, Evaluator, and Student views, and handles structured score uploads into PostgreSQL with immediate student lookup capabilities.",
    technologies: ["Python", "PostgreSQL", "HTML5", "CSS3", "JavaScript", "RBAC"],
    highlights: [
      "Granular 4-tier Role-Based Access Control (RBAC)",
      "Bulk score ingestion and schema validation",
      "Served over 1,000 students simultaneously with zero downtime",
      "Mobile-first responsive score sheet card layouts"
    ],
    image: "/images/project-portal.svg",
    github: "", // Empty: button will be cleanly omitted
    liveDemo: "", // Empty: button will be cleanly omitted
    featured: true
  },
  {
    id: 3,
    title: "Pandemic Mortality Prediction using AI",
    category: "AI & Machine Learning",
    subtitle: "IIT Madras – Shaastra Competition",
    description:
      "Predicted COVID-19 deaths in India using AI models trained on historical data as part of the prestigious IIT Madras Shaastra competition.",
    fullDescription:
      "A machine learning initiative developed for the IIT Madras Shaastra competitive track. Leveraged historical epidemiological datasets across Indian states, engineered trend indicators, and evaluated multiple regression and forecasting algorithms to accurately anticipate mortality rates and peak infection periods.",
    technologies: ["Python", "Machine Learning", "Pandas", "Scikit-Learn", "Data Analytics"],
    highlights: [
      "Competed at IIT Madras Shaastra tech competition",
      "Time-series feature engineering and multi-state data cleaning",
      "Predictive modeling on real-world historical pandemic records",
      "Analytical evaluation of death rate trajectories across cohorts"
    ],
    image: "/images/project-ai.svg",
    github: "", // Empty: button will be cleanly omitted
    liveDemo: "", // Empty: button will be cleanly omitted
    featured: true
  }
];

