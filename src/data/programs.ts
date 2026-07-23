export interface Program {
  code: string
  name: string
  level: 'Undergraduate' | 'Graduate'
  duration: string
  description: string
}

export const programs: Program[] = [
  {
    code: 'BCA',
    name: 'Bachelor of Computer Applications',
    level: 'Undergraduate',
    duration: '3 years',
    description: 'Foundations of programming, data structures, databases, and web development, with a capstone project in your final year.',
  },
  {
    code: 'BBA',
    name: 'Bachelor of Business Administration',
    level: 'Undergraduate',
    duration: '3 years',
    description: 'Core business disciplines — finance, marketing, operations, and management — with an emphasis on case-study learning.',
  },
  {
    code: 'B.Tech',
    name: 'Bachelor of Technology',
    level: 'Undergraduate',
    duration: '4 years',
    description: 'Engineering fundamentals across mechanical, electrical, and computer science tracks, with hands-on lab and project work.',
  },
  {
    code: 'MBA',
    name: 'Master of Business Administration',
    level: 'Graduate',
    duration: '2 years',
    description: 'Advanced management theory paired with a required internship and a specialization of your choice in year two.',
  },
  {
    code: 'MCA',
    name: 'Master of Computer Applications',
    level: 'Graduate',
    duration: '2 years',
    description: 'Advanced software engineering, systems design, and applied machine learning, culminating in a thesis project.',
  },
  {
    code: 'M.Tech',
    name: 'Master of Technology',
    level: 'Graduate',
    duration: '2 years',
    description: 'Research-focused engineering study with lab placements and a published thesis requirement.',
  },
]
