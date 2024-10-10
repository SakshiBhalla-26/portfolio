const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://SakshiBhalla-26.github.io/portfolio',
  title: 'JS.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Sakshi Bhalla',
  role: 'Developer',
  description:
    'Aspiring CSE Graduate . Skilled in front-end and back-end development, with knowledge in HTML, CSS, JavaScript, MySQL, and Java. I have built various projects , showcasing my ability to develop practical solutions. I am eager to enhance my skills and acquire new ones , apply them in a dynamic environment and contribute to innovative projects.',
  resume: 'https://drive.google.com/file/d/1O54PyVNrrNj-mWSiB-JcpfkqXEoxeJ0b/view?usp=drive_link',
  social: {
    linkedin: 'https://www.linkedin.com/in/sakshi-bhalla-463ab8247',
    github: 'https://github.com/SakshiBhalla-26',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Project 1',
    description:
      'A quiz app having questions fetched fro external api. Also feature of saving high scores in local storage',
    stack: ['HTML', 'CSS', 'JavaScript'],
    sourceCode: 'https://github.com/SakshiBhalla-26/Quiz-App',
    livePreview: ' https://sakshibhalla-26.github.io/Quiz-App/',
  },
  {
    name: 'Project 2',
    description:
      'A simple To-Do list app with feature to save data in local storage ',
    stack: ['HTML', 'CSS', 'JavaScript'],
    sourceCode: 'https://github.com/SakshiBhalla-26/todoapp',
    livePreview: ' https://sakshibhalla-26.github.io/todoapp/',
  },
  {
    name: 'Project 3',
    description:
      'An airline management system which involves scheduling of flights,ticket reservation,flight cancellation and adding assengers',
    stack: ['Core Java', 'MySQL'],
    sourceCode: 'https://github.com/SakshiBhalla-26/AirlineManagementSystem',
    
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Core JAVA',
  'MySQL',
  'ES6',
  'Git'
  
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'sakshibhalla518@gmail.com',
}

export { header, about, projects, skills, contact }
