import { Project, NavItem } from '@/app/types';
import { Github, Linkedin } from 'lucide-react';

export const NAV_ITEMS: NavItem[] = [
  { label: 'About', href: '/', sectionId: 'about' },
  { label: 'Team', href: '/', sectionId: 'team' },
  { label: 'Location', href: '/', sectionId: 'location' },
  { label: 'Works', href: '/', sectionId: 'works' },
];

export const PROJECTS: Project[] = [
  {
    id: 'climate-ismr',
    title: 'Climate ISMR Prediction Dashboard',
    shortDescription: 'Interactive dashboard visualizing 50 years of Indian Summer Monsoon Rainfall data with ML-powered forecasting.',
    fullDescription: 'An interactive climate analytics dashboard visualizing hundreds of years of Indian Summer Monsoon Rainfall (ISMR) data alongside 7 large-scale climate indices. Built with Next.js and React Simple Maps, it provides researchers with intuitive geospatial tools and data-driven forecasting capabilities.',
    thumbnail: 'https://i.postimg.cc/DwkjXCR7/shapley.png',
    githubUrl: 'https://ismr-visualizer.vercel.app/',
    technologies: ['Next.js', 'TypeScript', 'Python', 'Flask', 'React Simple Maps', 'HuggingFace Transformers', 'Scikit-learn'],
    goals: 'To make 50 years of climate data accessible and actionable for researchers through intuitive geospatial visualization and predictive analytics.',
    challenges: 'Rendering large-scale geospatial datasets efficiently while maintaining smooth interactivity and integrating a real-time Flask prediction backend.',
    outcomes: 'Produced a full-stack climate intelligence tool with directed teleconnection link visualizations and a regression-based ISMR forecasting pipeline.',
    highlights: [
      'Geospatial visualizations with value-scaled markers and directed teleconnection links',
      'Flask REST API backend with regression pipeline for ISMR forecasting',
      '50 years of ISMR data alongside 7 large-scale climate indices',
    ],
  },
  // {
  //   id: 'dem-parameter-extraction',
  //   title: 'DEM Parameter Extraction via ML',
  //   shortDescription: 'Supervised regression pipeline mapping micro-parameters to macroscopic concrete behavior using SVR, ANN, and hybrid models.',
  //   fullDescription: 'A Bachelor Thesis project building a Discrete Element Method simulation framework in ABAQUS, modeling concrete aggregate behavior via Hertz–Mindlin contact laws. A supervised regression pipeline then maps micro-parameters to macroscopic mechanical properties using classical and hybrid ML models.',
  //   thumbnail: 'https://picsum.photos/800/600?random=3',
  //   githubUrl: 'https://github.com/pranathitaddi',
  //   technologies: ['Python', 'ABAQUS', 'SVR', 'ANN', 'Scikit-learn'],
  //   goals: 'To reduce costly physical experiments by training ML models on DEM simulation data to predict macroscopic concrete properties from micro-parameters.',
  //   challenges: 'Parametrically varying micro-parameters across 520-particle simulations and ensuring model generalization with limited training samples.',
  //   outcomes: 'Trained and optimized SVR, ANN, and a hybrid ANN–SVM model with k-fold cross-validation, demonstrating strong predictive accuracy.',
  //   highlights: [
  //     'DEM simulation framework in ABAQUS with Hertz–Mindlin contact laws',
  //     'Hybrid ANN–SVM model with k-fold cross-validation',
  //     '520-particle parametric simulation study',
  //   ],
  // },
  // {
  //   id: 'flood-early-warning',
  //   title: 'Flood Early Warning System',
  //   shortDescription: 'Data-driven flood risk classification for Guwahati using ensemble ML classifiers on rainfall and river discharge data.',
  //   fullDescription: 'A data-driven flood risk classification system for Guwahati built on preprocessed rainfall and river discharge time-series. Multiple ML classifiers were implemented, tuned, and evaluated to identify the best-performing approach for early flood warning.',
  //   thumbnail: 'https://picsum.photos/800/600?random=4',
  //   githubUrl: 'https://github.com/pranathitaddi',
  //   technologies: ['Python', 'Scikit-learn', 'GridSearchCV', 'Random Forest', 'MLP'],
  //   goals: 'To build a reliable, interpretable flood risk classification system that can provide early warnings based on hydrometeorological signals.',
  //   challenges: 'Handling imbalanced flood event data and tuning multiple classifier families fairly under the same cross-validation regime.',
  //   outcomes: 'Achieved 88.19% accuracy with Random Forest and F1 Score of 0.57; evaluated rigorously using F1 Score, Log Loss, and Von Mises metrics.',
  //   highlights: [
  //     'Best accuracy of 88.19% with Random Forest classifier',
  //     'Hyperparameter tuning via GridSearchCV across 5 classifier families',
  //     'Evaluation using F1 Score, Log Loss, and Von Mises metrics',
  //   ],
  // },
];

export const SOCIAL_LINKS = [
  { icon: <Github size={20} />, href: 'https://github.com/pranathitaddi', label: 'GitHub' },
  { icon: <Linkedin size={20} />, href: 'https://linkedin.com/in/pranathi-taddi-662ab027b', label: 'LinkedIn' },
];

export const DEVELOPER_INFO = {
  name: 'Pranathi Taddi',
  role: 'Full Stack AI Developer',
  avatar: '/logo.png',
  location: 'IIT Kharagpur · Hyderabad',
  bio: 'Full stack developer with a focus on data science and ML.',
  extendedBio:
    'Dual Degree (B.Tech + M.Tech) in Civil Engineering with a Minor in CS and an AI/ML interdisciplinary at IIT Kharagpur.',
  currentTeam:
    'Web Team Coordinator at TEDxIITKharagpur.',
};

export const SKILLS = {
  languages: ['Python', 'C++', 'JavaScript', 'TypeScript', 'Java', 'C', 'HTML/CSS'],
  frameworks: ['Next.js', 'Node.js', 'Express.js', 'Redux', 'Flask', 'Django', 'Angular', 'PyTorch', 'TensorFlow', 'Keras', 'Spring Boot'],
  tools: ['Git', 'GitHub', 'MongoDB', 'Firebase', 'Tailwind CSS', 'ShadCN', 'ABAQUS', 'Jupyter', 'Linux'],
};

export const EXPERIENCE = [
  {
    role: 'Web Team Coordinator',
    org: 'TEDxIITKharagpur',
    period: 'Jul 2024 – Present',
    points: [
      'Led full relaunch of official website using Angular',
      'Managed a team of developers delivering responsive UI components and event navigation',
    ],
  },
  {
    role: 'Technical Team Sub-Head',
    org: 'Kshitij, IIT Kharagpur',
    period: 'Aug 2023 – Jan 2024',
    points: [
      'Built Kshitij\'23, a 3D interactive festival website with Three.js and MERN stack',
      'Attracted 7,000+ visitors; co-organized overnight coding contests across India',
    ],
  },
];

export const RESUME_PDF = '/Resume.pdf';