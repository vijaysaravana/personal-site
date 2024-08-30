// TODO: Add Athletic Skills, Office Skills,
// Data Engineering, Data Science, ML Engineering, ... ?

const skills = [
  {
    title: 'AWS',
    competency: 4,
    category: ['Web Development', 'Tools', 'Cloud'],
  },
  {
    title: 'Amazon SQS',
    competency: 3,
    category: ['Web Development', 'Tools', 'Cloud'],
  },
  {
    title: 'Github Actions',
    competency: 4,
    category: ['Tools', 'Cloud'],
  },
  {
    title: 'MySQL',
    competency: 4.5,
    category: ['Web Development', 'Databases'],
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
    competency: 3,
    category: ['Languages'],
  },
  {
    title: 'Golang',
    competency: 4,
    category: ['Languages'],
  },
  {
    title: 'Java',
    competency: 4,
    category: ['Web Development', 'Languages'],
  },
  {
    title: 'Flyte',
    competency: 4,
    category: ['Web Development', 'Framework', 'Cloud'],
  },
  {
    title: 'Kubernetes',
    competency: 3,
    category: ['Web Development', 'Cloud'],
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
    title: 'gRPC Protobuf',
    competency: 4,
    category: ['Framework'],
  },
  {
    title: 'Selenium',
    competency: 4,
    category: ['Web Development'],
  },
  {
    title: 'Helm',
    competency: 2,
    category: ['Cloud', 'Tools'],
  },
  {
    title: 'Agile',
    competency: 2,
    category: ['Practices'],
  },
  {
    title: 'Kanban',
    competency: 2,
    category: ['Practices'],
  },
  {
    title: 'Docker',
    competency: 4,
    category: ['Cloud', 'Tools'],
  },
].map((skill) => ({ ...skill, category: skill.category.sort() }));

// this is a list of colors that I like. The length should be == to the
// number of categories. Re-arrange this list until you find a pattern you like.
const colors = [
  '#6968b3',
  '#37b1f5',
  '#515dd4',
  '#e47272',
  '#cc7b94',
  '#3896e2',
  '#c3423f',
  '#d75858',
  '#747fff',
  '#64cb7b',
  '#40494e',
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
