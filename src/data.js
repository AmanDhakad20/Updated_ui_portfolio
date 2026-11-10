// All portfolio content lives here. Edit this file to update the site.

export const EMAIL = 'amandhakad2002@gmail.com';
export const PHONE = '6367610145';
export const LINKEDIN = 'https://linkedin.com/in/aman-dhakad-5770701bb';

export const NAV = [
  ['About', 'about'],
  ['Experience', 'experience'],
  ['Skills', 'skills'],
  ['Certifications', 'certifications'],
  ['Education', 'education'],
  ['Contact', 'contact'],
];

export const FACTS = [
  ['Current role', 'Software Engineer, LTIMindtree'],
  ['Main stack', 'Java, Spring Boot, React, Angular'],
  ['Certified in', 'Java SE 11, Apache Spark'],
  ['Degree', 'B.Tech, Computer Science, 2024'],
];

export const PROJECTS = [
  {
    title: 'CitiRES Loading Bay',
    color: 'pink',
    when: 'Jan 2026 – Present',
    current: true,
    tags: ['Java', 'React', 'PostgreSQL', 'ICGDS', 'OpenShift', 'Zephyr'],
    bullets: [
      'Building a full-stack logistics application for Citi’s UK office with a 5-member team, covering vehicle booking, dock approval and receiving workflows.',
      'Designed the email notification framework in Java for booking confirmations, workflow notifications, alerts and automated reminders.',
      'Implemented cron-based scheduled jobs for booking reminder emails and workflow-driven notifications.',
      'Developed the core business logic and booking workflows: vehicle booking, approval, status transitions and department-level notifications.',
      'Built React components with Citi’s ICGDS library and connected them to backend REST services.',
      'Automated UI and workflow tests, with test cases and execution maintained in Zephyr.',
      'Works with Git, Lightspeed, Harness and OpenShift for source control, quality validation, CI/CD deployment and runtime management.',
    ],
  },
  {
    title: 'CitiFTP',
    color: 'cyan',
    when: 'Sep 2025 – Dec 2025',
    tags: ['Hadoop', 'Spark', 'AutoSys', 'Tectia', 'Knox', 'Unravel'],
    bullets: [
      'Supported UAT and production operations for a Hadoop–Spark enterprise file-transfer platform used in banking workflows.',
      'Managed AutoSys batch jobs and secure file transfers with Tectia, and analysed production issues through Spark logs, Knox and Unravel.',
      'Ran root cause analysis on data and operational issues and worked with cross-functional teams to resolve them.',
    ],
  },
  {
    title: 'Citi Ops Portal',
    color: 'yellow',
    when: 'Apr 2025 – Sep 2025',
    ticker: true,
    tags: ['Angular', 'Spring Boot', 'Swagger', 'REST'],
    bullets: [
      'Delivered frontend and backend enhancements for an enterprise operations portal and contributed to its modernisation.',
      'Migrated the application from Angular v10 to v19, refactoring components, resolving dependency conflicts and fixing UI/UX issues.',
      'Integrated Spring Boot Actuator for monitoring and Swagger for REST API documentation.',
    ],
  },
];

export const INTERNSHIP = {
  title: 'Criminal Face Recognition System',
  color: 'violet',
  when: 'Jan 2024 – May 2024',
  tags: ['OpenCV', 'Haar Cascade', 'LBPH', 'Excel automation'],
  bullets: [
    'Developed a computer-vision face recognition solution using OpenCV, Haar Cascade and LBPH algorithms.',
    'Automated Excel-based record management and real-time alert generation to support operational workflows.',
  ],
};

export const SKILLS = [
  ['Languages', ['Java', 'JavaScript', 'TypeScript', 'SQL', 'HTML', 'CSS']],
  ['Frameworks', ['Spring Boot', 'Spring MVC', 'React', 'Angular', 'JPA', 'Hibernate']],
  ['Databases', ['PostgreSQL', 'MySQL']],
  ['Tools', ['Git', 'GitHub', 'Lightspeed', 'Harness', 'OpenShift', 'Tectia', 'Knox', 'Hadoop', 'AutoSys', 'ActiveMQ', 'Swagger', 'Postman', 'Maven', 'Tomcat', 'Zephyr']],
  ['Also', ['Microservices', 'RESTful APIs', 'JWT', 'Spring Security', 'ICGDS', 'Cron jobs', 'Automation testing', 'OpenCV', 'Excel automation']],
];

export const CERTS = [
  ['Oracle Certified Professional: Java SE 11 Developer', 'Covers lambda expressions, the Stream API, modular programming, exception handling and concurrency.'],
  ['Databricks Certified Associate Developer for Apache Spark', 'Covers the DataFrame API, Spark SQL, transformations, actions, joins, aggregations and Spark optimisation.'],
];

export const EDU = [
  ['Bachelor of Technology, Computer Science Engineering', 'Jaipur Engineering College And Research Centre', 'CGPA 8.54 / 10', '2024'],
  ['12th, CBSE Boards', 'Kendriya Vidyalaya No. 1', '79.40%', '2019'],
  ['10th, CBSE Boards', 'Kendriya Vidyalaya No. 1', 'CGPA 9.40 / 10', '2017'],
];
