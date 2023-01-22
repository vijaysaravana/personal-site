// TODO: Add Athletic Skills, Office Skills,
// Data Engineering, Data Science, ML Engineering, ... ?

const skills = [
  {
    title: 'Javascript',
    competency: 4,
    category: ['Web Development', 'Languages'],
  },
  {
    title: 'Node.JS',
    competency: 4,
    category: ['Web Development'],
  },
  {
    title: 'Bash',
    competency: 3,
    category: ['Tools', 'Languages'],
  },
  {
    title: 'Amazon Web Services',
    competency: 4,
    category: ['Web Development', 'Tools'],
  },
  {
    title: 'Heroku',
    competency: 3,
    category: ['Web Development', 'Tools'],
  },
  {
    title: 'MongoDB',
    competency: 4,
    category: ['Web Development', 'Databases'],
  },
  {
    title: 'MySQL',
    competency: 4.5,
    category: ['Web Development', 'Databases', 'Languages'],
  },
  {
    title: 'Redis',
    competency: 5,
    category: ['Web Development', 'Databases'],
  },
  {
    title: 'Flask',
    competency: 5,
    category: ['Framework'],
  },
  {
    title: 'Git',
    competency: 5,
    category: ['Tools'],
  },
  {
    title: 'Numpy',
    competency: 3,
    category: ['Tools'],
  },
  {
    title: 'Jupyter',
    competency: 3,
    category: ['Tools'],
  },
  {
    title: 'HTML + CSS',
    competency: 4,
    category: ['Web Development', 'Languages'],
  },
  {
    title: 'Python',
    competency: 4,
    category: ['Languages'],
  },
  {
    title: 'C++',
    competency: 4,
    category: ['Languages'],
  },
  {
    title: 'C',
    competency: 4,
    category: ['Languages'],
  },
  {
    title: 'Java',
    competency: 5,
    category: ['Web Development', 'Languages'],
  },
  {
    title: 'Flyte',
    competency: 4,
    category: ['Web Development', 'Framework'],
  },
  {
    title: 'Kubernetes',
    competency: 3,
    category: ['Web Development', 'Framework'],
  },
  {
    title: 'Hibernate',
    competency: 5,
    category: ['Web Development', 'Framework'],
  },
  {
    title: 'Java JAX-RS/Jersey',
    competency: 5,
    category: ['Web Development', 'Framework'],
  },
  {
    title: 'Spring Boot',
    competency: 4,
    category: ['Web Development', 'Framework'],
  },
  {
    title: 'gRPC',
    competency: 4,
    category: ['Framework'],
  },
  {
    title: 'Selenium',
    competency: 4,
    category: ['Web Development'],
  },
  {
    title: 'Tensorflow',
    competency: 3,
    category: ['Framework'],
  },
  {
    title: 'Perforce',
    competency: 5,
    category: ['Tools'],
  },
].map((skill) => ({ ...skill, category: skill.category.sort() }));

// this is a list of colors that I like. The length should be == to the
// number of categories. Re-arrange this list until you find a pattern you like.
const colors = [
  '#6968b3',
  '#37b1f5',
  '#40494e',
  '#515dd4',
  '#e47272',
  '#cc7b94',
  '#3896e2',
  '#c3423f',
  '#d75858',
  '#747fff',
  '#64cb7b',
];

const categories = [
  ...new Set(skills.reduce((acc, { category }) => acc.concat(category), [])),
]
  .sort()
  .map((category, index) => ({
    name: category,
    color: colors[index],
  }));

export { categories, skills };
