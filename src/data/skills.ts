export interface Skill {
  name: string;
  icon?: string;
  level?: number; // 1-5
}

export interface SkillCategory {
  label: { fr: string; en: string };
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    label: { fr: 'Langages', en: 'Languages' },
    skills: [
      { name: 'Java', level: 5 },
      { name: 'TypeScript', level: 5 },
      { name: 'JavaScript', level: 5 },
      { name: 'Python', level: 4 },
      { name: 'Shell', level: 3 },
      { name: 'HTML / CSS / SCSS', level: 5 },
    ],
  },
  {
    label: { fr: 'Frameworks Backend', en: 'Backend Frameworks' },
    skills: [
      { name: 'Spring Boot', level: 5 },
      { name: 'Hibernate / JPA', level: 5 },
      { name: 'Flask / Gunicorn', level: 4 },
      { name: 'SQLAlchemy', level: 3 },
    ],
  },
  {
    label: { fr: 'Frameworks Frontend', en: 'Frontend Frameworks' },
    skills: [
      { name: 'Angular', level: 5 },
      { name: 'Vue.js 3', level: 5 },
      { name: 'Quasar', level: 4 },
      { name: 'ExtJS', level: 4 },
      { name: 'Swing', level: 4 },
    ],
  },
  {
    label: { fr: 'Cloud & DevOps', en: 'Cloud & DevOps' },
    skills: [
      { name: 'GCP (GKE, CloudRun, PubSub)', level: 4 },
      { name: 'Docker', level: 5 },
      { name: 'Kubernetes', level: 4 },
      { name: 'Terraform', level: 3 },
      { name: 'GitLab CI/CD', level: 5 },
      { name: 'Jenkins', level: 4 },
    ],
  },
  {
    label: { fr: 'Bases de données & SIG', en: 'Databases & GIS' },
    skills: [
      { name: 'PostgreSQL / PostGIS', level: 5 },
      { name: 'MariaDB / MySQL', level: 4 },
      { name: 'Oracle', level: 3 },
      { name: 'MongoDB', level: 3 },
      { name: 'MapServer / GeoServer', level: 4 },
    ],
  },
  {
    label: { fr: 'Méthodologies', en: 'Methodologies' },
    skills: [
      { name: 'Agile / Scrum / XP', level: 5 },
      { name: 'Microservices', level: 5 },
      { name: 'CI/CD', level: 5 },
      { name: 'Maven / Gradle', level: 5 },
    ],
  },
];
