export type University = {
  id: number
  rank: number
  name: string
  country: string
  city: string
  region: string
  score: number
  studentCount: number
  facultyCount: number
  foundedYear: number
  description: string
  website: string
  address: string
  logo: string
  banner: string // Changed from optional to required
  color: string
  majors: {
    name: string
    description: string
    duration: string
    degree: string
  }[]
  qualifications: {
    level: string
    requirements: string[]
    duration: string
  }[]
  metrics: {
    academicReputation: number
    employerReputation: number
    facultyStudentRatio: number
    citations: number
    internationalFaculty: number
    internationalStudents: number
    researchOutput: number
  }
}

export const universities: University[] = [
  {
    id: 1,
    rank: 1,
    name: "Harvard University",
    country: "United States",
    city: "Cambridge",
    region: "north-america",
    score: 100,
    studentCount: 23731,
    facultyCount: 2400,
    foundedYear: 1636,
    description:
      "Harvard University is a private Ivy League research university in Cambridge, Massachusetts. Established in 1636, Harvard is the oldest institution of higher learning in the United States and among the most prestigious in the world. The university is named for its first benefactor, clergyman John Harvard.",
    website: "harvard.edu",
    address: "Massachusetts Hall, Cambridge, MA 02138, United States",
    logo: "/harvard.png",
    banner:
      "https://college.harvard.edu/sites/default/files/styles/billboard_image_medium/public/2019-05/widener.jpg?itok=yAwoS2cM",
    color: "#A51C30",
    majors: [
      {
        name: "Computer Science",
        description: "Study of computation, automation, and information processing",
        duration: "4 years",
        degree: "Bachelor of Science"
      },
      {
        name: "Business Administration",
        description: "Comprehensive study of business management and administration",
        duration: "4 years",
        degree: "Bachelor of Business Administration"
      },
      {
        name: "Law",
        description: "Study of legal systems, principles, and practices",
        duration: "3 years",
        degree: "Juris Doctor"
      },
      {
        name: "Medicine",
        description: "Study of human health, disease, and medical practice",
        duration: "4 years",
        degree: "Doctor of Medicine"
      }
    ],
    qualifications: [
      {
        level: "Undergraduate",
        requirements: [
          "High school diploma or equivalent",
          "Strong academic record",
          "Standardized test scores (SAT/ACT)",
          "Letters of recommendation",
          "Personal statement"
        ],
        duration: "4 years"
      },
      {
        level: "Graduate",
        requirements: [
          "Bachelor's degree from accredited institution",
          "Strong academic record",
          "Standardized test scores (GRE/GMAT)",
          "Letters of recommendation",
          "Statement of purpose",
          "Research experience (for research programs)"
        ],
        duration: "2-4 years"
      },
      {
        level: "Professional",
        requirements: [
          "Relevant undergraduate degree",
          "Professional experience",
          "Letters of recommendation",
          "Personal statement",
          "Interview"
        ],
        duration: "3-4 years"
      }
    ],
    metrics: {
      academicReputation: 100,
      employerReputation: 100,
      facultyStudentRatio: 92,
      citations: 99,
      internationalFaculty: 85,
      internationalStudents: 88,
      researchOutput: 98,
    },
  },
  {
    id: 2,
    rank: 2,
    name: "Massachusetts Institute of Technology",
    country: "United States",
    city: "Cambridge",
    region: "north-america",
    score: 99.5,
    studentCount: 11520,
    facultyCount: 1069,
    foundedYear: 1861,
    description:
      "The Massachusetts Institute of Technology (MIT) is a private research university in Cambridge, Massachusetts. Founded in 1861, MIT has since played a key role in the development of modern technology and science, ranking among the top academic institutions in the world.",
    website: "mit.edu",
    address: "77 Massachusetts Ave, Cambridge, MA 02139, United States",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/mit-university-logo-vector-01-A82BjBJwg6wWTRmhpQ1D8Ms0mA5U9M.png",
    banner:
      "https://alum.mit.edu/sites/default/files/images/MIT_77MassAve_EmilyDahl.jpg",
    color: "#A31F34",
    majors: [
      {
        name: "Computer Science",
        description: "Focus on algorithms, artificial intelligence, and software engineering",
        duration: "4 years",
        degree: "Bachelor of Science"
      },
      {
        name: "Electrical Engineering",
        description: "Study of electrical systems, electronics, and power generation",
        duration: "4 years",
        degree: "Bachelor of Science"
      },
      {
        name: "Mechanical Engineering",
        description: "Design and analysis of mechanical systems and thermal processes",
        duration: "4 years",
        degree: "Bachelor of Science"
      },
      {
        name: "Physics",
        description: "Study of matter, energy, and their interactions",
        duration: "4 years",
        degree: "Bachelor of Science"
      }
    ],
    qualifications: [
      {
        level: "Undergraduate",
        requirements: [
          "Strong background in mathematics and science",
          "High school diploma with excellent grades",
          "SAT/ACT scores",
          "Letters of recommendation",
          "Personal statement"
        ],
        duration: "4 years"
      },
      {
        level: "Graduate",
        requirements: [
          "Bachelor's degree in related field",
          "GRE scores",
          "Research experience",
          "Letters of recommendation",
          "Statement of purpose"
        ],
        duration: "2-5 years"
      }
    ],
    metrics: {
      academicReputation: 100,
      employerReputation: 100,
      facultyStudentRatio: 90,
      citations: 99,
      internationalFaculty: 94,
      internationalStudents: 92,
      researchOutput: 99,
    },
  },
  {
    id: 3,
    rank: 3,
    name: "Stanford University",
    country: "United States",
    city: "Stanford",
    region: "north-america",
    score: 98.7,
    studentCount: 17381,
    facultyCount: 2288,
    foundedYear: 1885,
    description:
      "Stanford University, officially Leland Stanford Junior University, is a private research university in Stanford, California. The university was founded in 1885 by Leland and Jane Stanford in memory of their only child, Leland Stanford Jr., who had died of typhoid fever at age 15 the previous year.",
    website: "stanford.edu",
    address: "450 Serra Mall, Stanford, CA 94305, United States",
    logo: "https://identity.stanford.edu/wp-content/uploads/sites/3/2020/07/block-s-right.png",
    banner: "https://visit.stanford.edu/assets/cardinal/images/explore-campus/campus-planning.jpg",
    color: "#8C1515",
    majors: [
      {
        name: "Computer Science",
        description: "Focus on artificial intelligence, human-computer interaction, and systems",
        duration: "4 years",
        degree: "Bachelor of Science"
      },
      {
        name: "Business Administration",
        description: "Comprehensive study of business management and entrepreneurship",
        duration: "4 years",
        degree: "Bachelor of Science"
      },
      {
        name: "Engineering",
        description: "Interdisciplinary engineering program with focus on innovation",
        duration: "4 years",
        degree: "Bachelor of Science"
      },
      {
        name: "Medicine",
        description: "Medical education with emphasis on research and patient care",
        duration: "4 years",
        degree: "Doctor of Medicine"
      }
    ],
    qualifications: [
      {
        level: "Undergraduate",
        requirements: [
          "High school diploma",
          "Strong academic record",
          "SAT/ACT scores",
          "Letters of recommendation",
          "Personal statement"
        ],
        duration: "4 years"
      },
      {
        level: "Graduate",
        requirements: [
          "Bachelor's degree",
          "GRE/GMAT scores",
          "Research experience",
          "Letters of recommendation",
          "Statement of purpose"
        ],
        duration: "2-4 years"
      }
    ],
    metrics: {
      academicReputation: 100,
      employerReputation: 99,
      facultyStudentRatio: 94,
      citations: 98,
      internationalFaculty: 87,
      internationalStudents: 85,
      researchOutput: 97,
    },
  },
  {
    id: 4,
    rank: 4,
    name: "University of Cambridge",
    country: "United Kingdom",
    city: "Cambridge",
    region: "europe",
    score: 98.5,
    studentCount: 23247,
    facultyCount: 1600,
    foundedYear: 1209,
    description:
      "The University of Cambridge is a collegiate research university in Cambridge, United Kingdom. Founded in 1209, the University of Cambridge is the second-oldest university in the English-speaking world and the world's fourth-oldest surviving university. It grew out of an association of scholars who left the University of Oxford after a dispute with the townspeople.",
    website: "cam.ac.uk",
    address: "The Old Schools, Trinity Ln, Cambridge CB2 1TN, United Kingdom",
    logo: "https://static.cdnlogo.com/logos/u/49/university-of-cambridge.png",
    banner:
      "https://www.visitcambridge.org/app/uploads/2021/11/corpus-christi-1600x0-c-default.jpg",
    color: "#A3C1AD",
    majors: [
      {
        name: "Natural Sciences",
        description: "Study of physics, chemistry, and biological sciences",
        duration: "3 years",
        degree: "Bachelor of Arts"
      },
      {
        name: "Engineering",
        description: "Focus on mechanical, electrical, and civil engineering",
        duration: "4 years",
        degree: "Master of Engineering"
      },
      {
        name: "Computer Science",
        description: "Study of algorithms, programming, and computer systems",
        duration: "3 years",
        degree: "Bachelor of Arts"
      },
      {
        name: "Mathematics",
        description: "Pure and applied mathematics with research opportunities",
        duration: "3 years",
        degree: "Bachelor of Arts"
      }
    ],
    qualifications: [
      {
        level: "Undergraduate",
        requirements: [
          "A-level qualifications",
          "Strong academic record",
          "Personal statement",
          "Interview",
          "Entrance examination"
        ],
        duration: "3-4 years"
      },
      {
        level: "Graduate",
        requirements: [
          "Bachelor's degree",
          "Research proposal",
          "Letters of recommendation",
          "Interview",
          "English proficiency"
        ],
        duration: "1-3 years"
      }
    ],
    metrics: {
      academicReputation: 99,
      employerReputation: 98,
      facultyStudentRatio: 89,
      citations: 96,
      internationalFaculty: 96,
      internationalStudents: 95,
      researchOutput: 95,
    },
  },
  {
    id: 5,
    rank: 5,
    name: "University of Oxford",
    country: "United Kingdom",
    city: "Oxford",
    region: "europe",
    score: 98.4,
    studentCount: 24515,
    facultyCount: 1791,
    foundedYear: 1096,
    description:
      "The University of Oxford is a collegiate research university in Oxford, England. There is evidence of teaching as early as 1096, making it the oldest university in the English-speaking world and the world's second-oldest university in continuous operation. The university is made up of 39 constituent colleges, and a range of academic departments.",
    website: "ox.ac.uk",
    address: "Wellington Square, Oxford OX1 2JD, United Kingdom",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/294a76cd1bd62b3786cdd4e79344f100-bkRfsX6t0omMg6cpbXVtF4BfKcdWlw.png",
    banner:
      "https://cdn.getyourguide.com/img/location/5c10eb21206c9.jpeg/99.jpg",
    color: "#002147",
    majors: [
      {
        name: "PPE (Philosophy, Politics, Economics)",
        description: "Interdisciplinary study of social sciences and humanities",
        duration: "3 years",
        degree: "Bachelor of Arts"
      },
      {
        name: "Medicine",
        description: "Medical education with clinical practice",
        duration: "6 years",
        degree: "Bachelor of Medicine"
      },
      {
        name: "Law",
        description: "Study of legal systems and jurisprudence",
        duration: "3 years",
        degree: "Bachelor of Civil Law"
      },
      {
        name: "Computer Science",
        description: "Study of computation and information processing",
        duration: "3 years",
        degree: "Bachelor of Science"
      }
    ],
    qualifications: [
      {
        level: "Undergraduate",
        requirements: [
          "A-level qualifications",
          "Entrance examination",
          "Interview",
          "Personal statement",
          "Academic references"
        ],
        duration: "3-4 years"
      },
      {
        level: "Graduate",
        requirements: [
          "Bachelor's degree",
          "Research proposal",
          "Letters of recommendation",
          "Interview",
          "English proficiency"
        ],
        duration: "1-3 years"
      }
    ],
    metrics: {
      academicReputation: 100,
      employerReputation: 99,
      facultyStudentRatio: 88,
      citations: 97,
      internationalFaculty: 95,
      internationalStudents: 94,
      researchOutput: 96,
    },
  },
  {
    id: 6,
    rank: 6,
    name: "California Institute of Technology",
    country: "United States",
    city: "Pasadena",
    region: "north-america",
    score: 97.9,
    studentCount: 2237,
    facultyCount: 300,
    foundedYear: 1891,
    description:
      "The California Institute of Technology (Caltech) is a private research university in Pasadena, California. The university is known for its strength in science and engineering, and is one among a small group of institutes of technology in the United States which is primarily devoted to the instruction of pure and applied sciences.",
    website: "caltech.edu",
    address: "1200 E California Blvd, Pasadena, CA 91125, United States",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/27d99d317a36dee6a2fc82b102d090cc-4DENeX6bfsHIXappQvbXAY5XOG3oor.png",
    banner:
      "https://media.nbclosangeles.com/2019/09/GettyImages-488587347.jpg?quality=85&strip=all&resize=1200%2C675",
    color: "#FF6C0C",
    majors: [
      {
        name: "Physics",
        description: "Study of fundamental physical laws and quantum mechanics",
        duration: "4 years",
        degree: "Bachelor of Science"
      },
      {
        name: "Computer Science",
        description: "Focus on algorithms, systems, and theoretical computer science",
        duration: "4 years",
        degree: "Bachelor of Science"
      },
      {
        name: "Engineering",
        description: "Interdisciplinary engineering with focus on research",
        duration: "4 years",
        degree: "Bachelor of Science"
      },
      {
        name: "Mathematics",
        description: "Pure and applied mathematics with research emphasis",
        duration: "4 years",
        degree: "Bachelor of Science"
      }
    ],
    qualifications: [
      {
        level: "Undergraduate",
        requirements: [
          "Strong background in mathematics and science",
          "SAT/ACT scores",
          "Letters of recommendation",
          "Personal statement",
          "Interview"
        ],
        duration: "4 years"
      },
      {
        level: "Graduate",
        requirements: [
          "Bachelor's degree in related field",
          "GRE scores",
          "Research experience",
          "Letters of recommendation",
          "Statement of purpose"
        ],
        duration: "2-5 years"
      }
    ],
    metrics: {
      academicReputation: 96,
      employerReputation: 92,
      facultyStudentRatio: 100,
      citations: 100,
      internationalFaculty: 89,
      internationalStudents: 82,
      researchOutput: 93,
    },
  },
  {
    id: 7,
    rank: 7,
    name: "ETH Zurich",
    country: "Switzerland",
    city: "Zurich",
    region: "europe",
    score: 97.1,
    studentCount: 22193,
    facultyCount: 510,
    foundedYear: 1855,
    description:
      "ETH Zurich (Swiss Federal Institute of Technology in Zurich) is a public research university in the city of Zürich, Switzerland. Founded by the Swiss Federal Government in 1854 with the stated mission to educate engineers and scientists, the school focuses primarily on science, technology, engineering, and mathematics.",
    website: "ethz.ch",
    address: "Rämistrasse 101, 8092 Zürich, Switzerland",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image.imageformat.lightbox-lBhL7eJKEiVYymadfenwxJeWiVhFh0.png",
    banner:
      "https://ethz.ch/en/campus/access/zentrum/_jcr_content/par/fullwidthimage/image.imageformat.1286.152068286.jpg",
    color: "#1D4289",
    majors: [
      {
        name: "Computer Science",
        description: "Focus on software engineering and systems design",
        duration: "3 years",
        degree: "Bachelor of Science"
      },
      {
        name: "Mechanical Engineering",
        description: "Study of mechanical systems and manufacturing processes",
        duration: "3 years",
        degree: "Bachelor of Science"
      },
      {
        name: "Electrical Engineering",
        description: "Focus on power systems and electronics",
        duration: "3 years",
        degree: "Bachelor of Science"
      },
      {
        name: "Mathematics",
        description: "Applied mathematics with focus on engineering applications",
        duration: "3 years",
        degree: "Bachelor of Science"
      }
    ],
    qualifications: [
      {
        level: "Undergraduate",
        requirements: [
          "High school diploma",
          "Entrance examination",
          "Language proficiency",
          "Mathematics and science background",
          "Interview"
        ],
        duration: "3 years"
      },
      {
        level: "Graduate",
        requirements: [
          "Bachelor's degree",
          "Research proposal",
          "Letters of recommendation",
          "Language proficiency",
          "Interview"
        ],
        duration: "2 years"
      }
    ],
    metrics: {
      academicReputation: 98,
      employerReputation: 94,
      facultyStudentRatio: 87,
      citations: 93,
      internationalFaculty: 98,
      internationalStudents: 90,
      researchOutput: 94,
    },
  },
  {
    id: 8,
    rank: 8,
    name: "University of Chicago",
    country: "United States",
    city: "Chicago",
    region: "north-america",
    score: 96.8,
    studentCount: 17002,
    facultyCount: 2390,
    foundedYear: 1890,
    description:
      "The University of Chicago is a private research university in Chicago, Illinois. Founded in 1890, the university is known for its rigorous academic and intellectual traditions. The university consists of the College, various graduate programs, and interdisciplinary committees organized into five academic research divisions.",
    website: "uchicago.edu",
    address: "5801 S Ellis Ave, Chicago, IL 60637, United States",
    logo: "https://i0.wp.com/biocars.uchicago.edu/wp-content/uploads/2019/05/logo.png?fit=1200%2C1200&ssl=1&w=640",
    banner: "https://news.uchicago.edu/sites/default/files/styles/full_width/public/images/image/20180315/20171016campusfall1761_0.jpg?itok=hoPJRrK_",
    color: "#800000",
    majors: [
      {
        name: "Economics",
        description: "Study of economic theory and policy analysis",
        duration: "4 years",
        degree: "Bachelor of Arts"
      },
      {
        name: "Law",
        description: "Legal education with focus on critical thinking",
        duration: "3 years",
        degree: "Juris Doctor"
      },
      {
        name: "Computer Science",
        description: "Study of algorithms and computational theory",
        duration: "4 years",
        degree: "Bachelor of Science"
      },
      {
        name: "Physics",
        description: "Study of physical laws and quantum mechanics",
        duration: "4 years",
        degree: "Bachelor of Science"
      }
    ],
    qualifications: [
      {
        level: "Undergraduate",
        requirements: [
          "High school diploma",
          "SAT/ACT scores",
          "Letters of recommendation",
          "Personal statement",
          "Interview"
        ],
        duration: "4 years"
      },
      {
        level: "Graduate",
        requirements: [
          "Bachelor's degree",
          "GRE scores",
          "Letters of recommendation",
          "Statement of purpose",
          "Writing sample"
        ],
        duration: "2-5 years"
      }
    ],
    metrics: {
      academicReputation: 99,
      employerReputation: 92,
      facultyStudentRatio: 93,
      citations: 94,
      internationalFaculty: 84,
      internationalStudents: 86,
      researchOutput: 92,
    },
  },
  {
    id: 9,
    rank: 9,
    name: "Imperial College London",
    country: "United Kingdom",
    city: "London",
    region: "europe",
    score: 96.5,
    studentCount: 19400,
    facultyCount: 3765,
    foundedYear: 1907,
    description:
      "Imperial College London is a public research university in London, United Kingdom. Its history began with Prince Albert, consort of Queen Victoria, who developed his vision for a cultural area that included the Royal Albert Hall, Victoria & Albert Museum, Natural History Museum and royal colleges.",
    website: "imperial.ac.uk",
    address: "South Kensington Campus, London SW7 2AZ, United Kingdom",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/imperial-college-london-logo-png_seeklogo-381211-z60bph18NWdLl4lLg0sTGBOzhyC4fR.png",
    banner:
      "https://www.imperial.ac.uk/stories/south-kensington-campus-evolution/assets/2fDjW3VjdA/main-aerial-shot-wide-2560x1440.jpeg",
    color: "#003E74",
    majors: [
      {
        name: "Engineering",
        description: "Focus on mechanical, electrical, and civil engineering",
        duration: "4 years",
        degree: "Master of Engineering"
      },
      {
        name: "Medicine",
        description: "Medical education with clinical practice",
        duration: "6 years",
        degree: "Bachelor of Medicine"
      },
      {
        name: "Business",
        description: "Study of business management and entrepreneurship",
        duration: "3 years",
        degree: "Bachelor of Science"
      },
      {
        name: "Computer Science",
        description: "Focus on software engineering and AI",
        duration: "4 years",
        degree: "Master of Engineering"
      }
    ],
    qualifications: [
      {
        level: "Undergraduate",
        requirements: [
          "A-level qualifications",
          "Entrance examination",
          "Interview",
          "Personal statement",
          "Academic references"
        ],
        duration: "3-4 years"
      },
      {
        level: "Graduate",
        requirements: [
          "Bachelor's degree",
          "Research proposal",
          "Letters of recommendation",
          "Interview",
          "English proficiency"
        ],
        duration: "1-3 years"
      }
    ],
    metrics: {
      academicReputation: 97,
      employerReputation: 95,
      facultyStudentRatio: 90,
      citations: 92,
      internationalFaculty: 97,
      internationalStudents: 96,
      researchOutput: 91,
    },
  },
  {
    id: 10,
    rank: 10,
    name: "University of Tokyo",
    country: "Japan",
    city: "Tokyo",
    region: "asia",
    score: 96.1,
    studentCount: 28171,
    facultyCount: 2400,
    foundedYear: 1877,
    description:
      "The University of Tokyo, abbreviated as Todai, is a public research university located in Tokyo, Japan. Established in 1877, it is the first of Japan's National Seven Universities. The university has 10 faculties, 15 graduate schools and enrolls about 30,000 students, 2,100 of whom are international students.",
    website: "u-tokyo.ac.jp",
    address: "7 Chome-3-1 Hongo, Bunkyo City, Tokyo 113-8654, Japan",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/png-transparent-university-of-tokyo-kavli-institute-for-the-physics-and-mathematics-of-the-universe-research-university-tokyo-leaf-symmetry-university-thumbnail-k9YPiW48RO9LlHqpur3Bv3RYst1GpJ.png",
    banner: "https://www.u-tokyo.ac.jp/content/400027399.jpg",
    color: "#0C2D83",
    majors: [
      {
        name: "Engineering",
        description: "Focus on mechanical, electrical, and civil engineering",
        duration: "4 years",
        degree: "Bachelor of Engineering"
      },
      {
        name: "Medicine",
        description: "Medical education with clinical practice",
        duration: "6 years",
        degree: "Doctor of Medicine"
      },
      {
        name: "Law",
        description: "Study of legal systems and jurisprudence",
        duration: "4 years",
        degree: "Bachelor of Laws"
      },
      {
        name: "Economics",
        description: "Study of economic theory and policy",
        duration: "4 years",
        degree: "Bachelor of Economics"
      }
    ],
    qualifications: [
      {
        level: "Undergraduate",
        requirements: [
          "High school diploma",
          "Entrance examination",
          "Interview",
          "Language proficiency",
          "Academic references"
        ],
        duration: "4 years"
      },
      {
        level: "Graduate",
        requirements: [
          "Bachelor's degree",
          "Research proposal",
          "Letters of recommendation",
          "Interview",
          "Language proficiency"
        ],
        duration: "2 years"
      }
    ],
    metrics: {
      academicReputation: 99,
      employerReputation: 91,
      facultyStudentRatio: 86,
      citations: 88,
      internationalFaculty: 75,
      internationalStudents: 72,
      researchOutput: 95,
    },
  },
  {
    id: 11,
    rank: 11,
    name: "National University of Singapore",
    country: "Singapore",
    city: "Singapore",
    region: "asia",
    score: 95.8,
    studentCount: 38596,
    facultyCount: 2400,
    foundedYear: 1905,
    description:
      "The National University of Singapore (NUS) is the first autonomous research university in Singapore. Founded in 1905, it is the oldest higher education institution in Singapore. NUS is a comprehensive research university, offering a wide range of disciplines, including the sciences, medicine and dentistry, design and environment, law, arts and social sciences, engineering, business, computing and music.",
    website: "nus.edu.sg",
    address: "21 Lower Kent Ridge Rd, Singapore 119077",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/firefox_ASBPX4EeXC-removebg-preview-8wUH802hoASgdnonKb9lFUVxi4oZ1D.png",
    banner: "https://gov-web.s3.ap-northeast-1.amazonaws.com/uploads/2018/04/NUS-ERC.jpg",
    color: "#003D7C",
    majors: [
      {
        name: "Computer Science",
        description: "Focus on software engineering and AI",
        duration: "4 years",
        degree: "Bachelor of Computing"
      },
      {
        name: "Business",
        description: "Study of business management and entrepreneurship",
        duration: "4 years",
        degree: "Bachelor of Business Administration"
      },
      {
        name: "Engineering",
        description: "Focus on mechanical, electrical, and civil engineering",
        duration: "4 years",
        degree: "Bachelor of Engineering"
      },
      {
        name: "Medicine",
        description: "Medical education with clinical practice",
        duration: "5 years",
        degree: "Bachelor of Medicine"
      }
    ],
    qualifications: [
      {
        level: "Undergraduate",
        requirements: [
          "High school diploma",
          "Entrance examination",
          "Interview",
          "English proficiency",
          "Academic references"
        ],
        duration: "4 years"
      },
      {
        level: "Graduate",
        requirements: [
          "Bachelor's degree",
          "Research proposal",
          "Letters of recommendation",
          "Interview",
          "English proficiency"
        ],
        duration: "2 years"
      }
    ],
    metrics: {
      academicReputation: 96,
      employerReputation: 93,
      facultyStudentRatio: 85,
      citations: 87,
      internationalFaculty: 90,
      internationalStudents: 83,
      researchOutput: 90,
    },
  },
  {
    id: 12,
    rank: 12,
    name: "Peking University",
    country: "China",
    city: "Beijing",
    region: "asia",
    score: 95.5,
    studentCount: 42128,
    facultyCount: 3264,
    foundedYear: 1898,
    description:
      "Peking University is a major research university in Beijing, China, and a member of the elite C9 League of Chinese universities. Founded as the Imperial University of Peking in 1898, it is the first modern national university established in China. It also served as the highest administration for education in China at the beginning of its founding.",
    website: "pku.edu.cn",
    address: "5 Yiheyuan Rd, Haidian District, Beijing, China, 100871",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Peking_University_seal.svg-mR9vAdzpaTvk9yMuTh8S1nkzXSv0kK.png",
    banner: "https://english.pku.edu.cn/Uploads/Bden/File/2020/11/09/i3300z10re5.png",
    color: "#91191C",
    majors: [
      {
        name: "Chinese Language and Literature",
        description: "Study of Chinese language, literature, and culture",
        duration: "4 years",
        degree: "Bachelor of Arts"
      },
      {
        name: "Computer Science",
        description: "Focus on software engineering and AI",
        duration: "4 years",
        degree: "Bachelor of Science"
      },
      {
        name: "Economics",
        description: "Study of economic theory and policy",
        duration: "4 years",
        degree: "Bachelor of Economics"
      },
      {
        name: "International Relations",
        description: "Study of global politics and international affairs",
        duration: "4 years",
        degree: "Bachelor of Arts"
      }
    ],
    qualifications: [
      {
        level: "Undergraduate",
        requirements: [
          "High school diploma",
          "Entrance examination",
          "Interview",
          "Language proficiency",
          "Academic references"
        ],
        duration: "4 years"
      },
      {
        level: "Graduate",
        requirements: [
          "Bachelor's degree",
          "Research proposal",
          "Letters of recommendation",
          "Interview",
          "Language proficiency"
        ],
        duration: "2-3 years"
      }
    ],
    metrics: {
      academicReputation: 97,
      employerReputation: 94,
      facultyStudentRatio: 84,
      citations: 86,
      internationalFaculty: 70,
      internationalStudents: 68,
      researchOutput: 93,
    },
  },
  {
    id: 13,
    rank: 13,
    name: "University of Melbourne",
    country: "Australia",
    city: "Melbourne",
    region: "australia",
    score: 95.2,
    studentCount: 52000,
    facultyCount: 8500,
    foundedYear: 1853,
    description:
      "The University of Melbourne is a public research university located in Melbourne, Australia. Founded in 1853, it is Australia's second oldest university and the oldest in Victoria. Melbourne's main campus is located in Parkville, an inner suburb north of the Melbourne central business district.",
    website: "unimelb.edu.au",
    address: "Parkville VIC 3010, Australia",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/366298928_690067039828240_7479680550951410573_n.jpg-Z59UAHJUGKBWb3WrJJgUnPHkXggLhP.jpeg",
    banner: "https://www.unimelb.edu.au/__data/assets/image/0012/3798804/video.jpg",
    color: "#0C2340",
    majors: [
      {
        name: "Medicine",
        description: "Medical education with clinical practice",
        duration: "6 years",
        degree: "Doctor of Medicine"
      },
      {
        name: "Law",
        description: "Study of legal systems and jurisprudence",
        duration: "4 years",
        degree: "Bachelor of Laws"
      },
      {
        name: "Engineering",
        description: "Focus on mechanical, electrical, and civil engineering",
        duration: "4 years",
        degree: "Bachelor of Engineering"
      },
      {
        name: "Business",
        description: "Study of business management and entrepreneurship",
        duration: "3 years",
        degree: "Bachelor of Commerce"
      }
    ],
    qualifications: [
      {
        level: "Undergraduate",
        requirements: [
          "High school diploma",
          "ATAR score",
          "Personal statement",
          "Interview",
          "Academic references"
        ],
        duration: "3-4 years"
      },
      {
        level: "Graduate",
        requirements: [
          "Bachelor's degree",
          "Research proposal",
          "Letters of recommendation",
          "Interview",
          "English proficiency"
        ],
        duration: "2 years"
      }
    ],
    metrics: {
      academicReputation: 95,
      employerReputation: 92,
      facultyStudentRatio: 83,
      citations: 85,
      internationalFaculty: 92,
      internationalStudents: 94,
      researchOutput: 89,
    },
  },
  {
    id: 14,
    rank: 14,
    name: "University of Toronto",
    country: "Canada",
    city: "Toronto",
    region: "north-america",
    score: 94.9,
    studentCount: 93081,
    facultyCount: 14963,
    foundedYear: 1827,
    description:
      "The University of Toronto is a public research university in Toronto, Ontario, Canada, located on the grounds that surround Queen's Park. It was founded by royal charter in 1827 as King's College, the first institution of higher learning in the colony of Upper Canada.",
    website: "utoronto.ca",
    address: "27 King's College Cir, Toronto, ON M5S 1A1, Canada",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/university-of-toronto-logo-svg-vector-0Otdn4Ro5PfOBJjc9VvImIq0qrY81z.svg",
    banner: "https://media.istockphoto.com/id/94506078/photo/university-of-toronto.jpg?s=612x612&w=0&k=20&c=LczMUDuYYMCwj_SOFK8iOnzcGAE9RT_RJcZ3rvhg6_s=",
    color: "#002A5C",
    majors: [
      {
        name: "Computer Science",
        description: "Focus on software engineering and AI",
        duration: "4 years",
        degree: "Bachelor of Science"
      },
      {
        name: "Medicine",
        description: "Medical education with clinical practice",
        duration: "4 years",
        degree: "Doctor of Medicine"
      },
      {
        name: "Engineering",
        description: "Focus on mechanical, electrical, and civil engineering",
        duration: "4 years",
        degree: "Bachelor of Applied Science"
      },
      {
        name: "Business",
        description: "Study of business management and entrepreneurship",
        duration: "4 years",
        degree: "Bachelor of Commerce"
      }
    ],
    qualifications: [
      {
        level: "Undergraduate",
        requirements: [
          "High school diploma",
          "Personal statement",
          "Supplementary application",
          "Interview",
          "Academic references"
        ],
        duration: "4 years"
      },
      {
        level: "Graduate",
        requirements: [
          "Bachelor's degree",
          "Research proposal",
          "Letters of recommendation",
          "Interview",
          "English proficiency"
        ],
        duration: "2 years"
      }
    ],
    metrics: {
      academicReputation: 96,
      employerReputation: 91,
      facultyStudentRatio: 82,
      citations: 84,
      internationalFaculty: 88,
      internationalStudents: 89,
      researchOutput: 88,
    },
  },
  {
    id: 15,
    rank: 15,
    name: "Tsinghua University",
    country: "China",
    city: "Beijing",
    region: "asia",
    score: 94.6,
    studentCount: 36300,
    facultyCount: 3485,
    foundedYear: 1911,
    description:
      "Tsinghua University is a major research university in Beijing, and a member of the elite C9 League of Chinese universities. Since its establishment in 1911, it has graduated numerous Chinese leaders in politics, business, academia, and culture.",
    website: "tsinghua.edu.cn",
    address: "30 Shuangqing Rd, Haidian District, Beijing, China, 100084",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Tsinghua_University_Logo.svg-OAi4VxB8M3BksFUR9myrIGgOCWMSC9.png",
    banner: "https://www.tsinghua.edu.cn/__local/1/F9/AB/76A4BA1F070CB4CEF8A6209841F_AE779678_DFFA3.jpg",
    color: "#660874",
    majors: [
      {
        name: "Engineering",
        description: "Focus on mechanical, electrical, and civil engineering",
        duration: "4 years",
        degree: "Bachelor of Engineering"
      },
      {
        name: "Computer Science",
        description: "Focus on software engineering and AI",
        duration: "4 years",
        degree: "Bachelor of Engineering"
      },
      {
        name: "Economics",
        description: "Study of economic theory and policy",
        duration: "4 years",
        degree: "Bachelor of Economics"
      },
      {
        name: "Architecture",
        description: "Study of architectural design and urban planning",
        duration: "5 years",
        degree: "Bachelor of Architecture"
      }
    ],
    qualifications: [
      {
        level: "Undergraduate",
        requirements: [
          "High school diploma",
          "Entrance examination",
          "Interview",
          "Language proficiency",
          "Academic references"
        ],
        duration: "4-5 years"
      },
      {
        level: "Graduate",
        requirements: [
          "Bachelor's degree",
          "Research proposal",
          "Letters of recommendation",
          "Interview",
          "Language proficiency"
        ],
        duration: "2-3 years"
      }
    ],
    metrics: {
      academicReputation: 95,
      employerReputation: 93,
      facultyStudentRatio: 81,
      citations: 83,
      internationalFaculty: 69,
      internationalStudents: 67,
      researchOutput: 92,
    },
  },
  {
    id: 16,
    rank: 16,
    name: "University of California, Berkeley",
    country: "United States",
    city: "Berkeley",
    region: "north-america",
    score: 94.3,
    studentCount: 42501,
    facultyCount: 1629,
    foundedYear: 1868,
    description:
      "The University of California, Berkeley is a public research university in Berkeley, California. Established in 1868 as the state's first land-grant university, it is the oldest campus of the University of California system and a founding member of the Association of American Universities.",
    website: "berkeley.edu",
    address: "Berkeley, CA 94720, United States",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/smH1kaO7SvROZrkTdX9t69JMpQcaWufFdHvmddoegk6guEADpzl56_zV33jXrce9jnJepML46vikk1g0eufsv6kuh7RGYXS3ggyO4aGZqjDJ3wEKVorN6cWzjLWxkhZCDMz2d-f--EizbzWba03VCg-aD9m9ZsIvV34VVQiPs2fBvBrbZjk81.svg",
    banner:
      "https://www.tclf.org/sites/default/files/thumbnails/image/CA_Berkeley_UniversityOfCaliforniaAtBerkeley_byCharlieNguyen-Flickr_2008_001_Sig.jpg",
    color: "#003262",
    majors: [
      {
        name: "Computer Science",
        description: "Focus on software engineering and AI",
        duration: "4 years",
        degree: "Bachelor of Science"
      },
      {
        name: "Engineering",
        description: "Focus on mechanical, electrical, and civil engineering",
        duration: "4 years",
        degree: "Bachelor of Science"
      },
      {
        name: "Business",
        description: "Study of business management and entrepreneurship",
        duration: "4 years",
        degree: "Bachelor of Science"
      },
      {
        name: "Environmental Science",
        description: "Study of environmental systems and sustainability",
        duration: "4 years",
        degree: "Bachelor of Science"
      }
    ],
    qualifications: [
      {
        level: "Undergraduate",
        requirements: [
          "High school diploma",
          "SAT/ACT scores",
          "Personal statement",
          "Letters of recommendation",
          "Interview"
        ],
        duration: "4 years"
      },
      {
        level: "Graduate",
        requirements: [
          "Bachelor's degree",
          "GRE scores",
          "Letters of recommendation",
          "Statement of purpose",
          "Research experience"
        ],
        duration: "2 years"
      }
    ],
    metrics: {
      academicReputation: 98,
      employerReputation: 90,
      facultyStudentRatio: 80,
      citations: 91,
      internationalFaculty: 83,
      internationalStudents: 80,
      researchOutput: 91,
    },
  },
  {
    id: 17,
    rank: 17,
    name: "University of Sydney",
    country: "Australia",
    city: "Sydney",
    region: "australia",
    score: 94.0,
    studentCount: 73000,
    facultyCount: 3400,
    foundedYear: 1850,
    description:
      "The University of Sydney is an Australian public research university in Sydney, Australia. Founded in 1850, it is Australia's first university and is regarded as one of the world's leading universities. The university is known as one of Australia's 6 sandstone universities.",
    website: "sydney.edu.au",
    address: "Camperdown NSW 2006, Australia",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/9/9a/University_of_Sydney_coat_of_arms.png/250px-University_of_Sydney_coat_of_arms.png",
    banner: "https://media.istockphoto.com/id/1486072206/photo/the-facade-of-the-historical-university-of-sydney-quadrangle-in-cloudy-days.jpg?s=612x612&w=0&k=20&c=mn8vpnNrepDqzzdAbh3Rg993Z0JiKDEmrsVN2dzxP3I=",
    color: "#E64626",
    majors: [
      {
        name: "Medicine",
        description: "Medical education with clinical practice",
        duration: "6 years",
        degree: "Doctor of Medicine"
      },
      {
        name: "Law",
        description: "Study of legal systems and jurisprudence",
        duration: "4 years",
        degree: "Bachelor of Laws"
      },
      {
        name: "Engineering",
        description: "Focus on mechanical, electrical, and civil engineering",
        duration: "4 years",
        degree: "Bachelor of Engineering"
      },
      {
        name: "Business",
        description: "Study of business management and entrepreneurship",
        duration: "3 years",
        degree: "Bachelor of Commerce"
      }
    ],
    qualifications: [
      {
        level: "Undergraduate",
        requirements: [
          "High school diploma",
          "ATAR score",
          "Personal statement",
          "Interview",
          "Academic references"
        ],
        duration: "3-4 years"
      },
      {
        level: "Graduate",
        requirements: [
          "Bachelor's degree",
          "Research proposal",
          "Letters of recommendation",
          "Interview",
          "English proficiency"
        ],
        duration: "2 years"
      }
    ],
    metrics: {
      academicReputation: 94,
      employerReputation: 91,
      facultyStudentRatio: 79,
      citations: 82,
      internationalFaculty: 91,
      internationalStudents: 93,
      researchOutput: 87,
    },
  },
  {
    id: 18,
    rank: 18,
    name: "University of Cape Town",
    country: "South Africa",
    city: "Cape Town",
    region: "africa",
    score: 93.7,
    studentCount: 29000,
    facultyCount: 1155,
    foundedYear: 1829,
    description:
      "The University of Cape Town is a public research university located in Cape Town in the Western Cape province of South Africa. UCT was founded in 1829 as the South African College, and is the oldest higher education institute in South Africa.",
    website: "uct.ac.za",
    address: "Rondebosch, Cape Town, 7700, South Africa",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/University_of_Cape_Town_logo.svg-zu1FswFfJpFK2S5RTAwPjhJekeAwxa.png",
    banner:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/UCT_Upper_Campus_landscape_view.jpg/960px-UCT_Upper_Campus_landscape_view.jpg",
    color: "#005883",
    majors: [
      {
        name: "Medicine",
        description: "Medical education with clinical practice",
        duration: "6 years",
        degree: "Bachelor of Medicine"
      },
      {
        name: "Law",
        description: "Study of legal systems and jurisprudence",
        duration: "4 years",
        degree: "Bachelor of Laws"
      },
      {
        name: "Engineering",
        description: "Focus on mechanical, electrical, and civil engineering",
        duration: "4 years",
        degree: "Bachelor of Science"
      },
      {
        name: "Commerce",
        description: "Study of business and economics",
        duration: "3 years",
        degree: "Bachelor of Commerce"
      }
    ],
    qualifications: [
      {
        level: "Undergraduate",
        requirements: [
          "High school diploma",
          "National Senior Certificate",
          "Personal statement",
          "Interview",
          "Academic references"
        ],
        duration: "3-4 years"
      },
      {
        level: "Graduate",
        requirements: [
          "Bachelor's degree",
          "Research proposal",
          "Letters of recommendation",
          "Interview",
          "English proficiency"
        ],
        duration: "2 years"
      }
    ],
    metrics: {
      academicReputation: 92,
      employerReputation: 88,
      facultyStudentRatio: 78,
      citations: 81,
      internationalFaculty: 82,
      internationalStudents: 79,
      researchOutput: 86,
    },
  },
  {
    id: 19,
    rank: 19,
    name: "University of São Paulo",
    country: "Brazil",
    city: "São Paulo",
    region: "south-america",
    score: 93.4,
    studentCount: 94875,
    facultyCount: 6000,
    foundedYear: 1934,
    description:
      "The University of São Paulo is a public university in the Brazilian state of São Paulo. It is the largest Brazilian public university and the country's most prestigious educational institution, the best university in Ibero-America, and holds a high reputation among world universities.",
    website: "usp.br",
    address: "R. da Reitoria, 374 - Cidade Universitária, São Paulo - SP, 05508-220, Brazil",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Webysther_20170627_-_Bras%C3%A3o_USP.svg",
    banner: "https://cdn.britannica.com/96/141196-050-B8A6528A/Paulista-Museum-part-gardens-University-of-Sao.jpg",
    color: "#1C3A70",
    majors: [
      {
        name: "Medicine",
        description: "Medical education with clinical practice",
        duration: "6 years",
        degree: "Doctor of Medicine"
      },
      {
        name: "Law",
        description: "Study of legal systems and jurisprudence",
        duration: "5 years",
        degree: "Bachelor of Laws"
      },
      {
        name: "Engineering",
        description: "Focus on mechanical, electrical, and civil engineering",
        duration: "5 years",
        degree: "Bachelor of Engineering"
      },
      {
        name: "Architecture",
        description: "Study of architectural design and urban planning",
        duration: "5 years",
        degree: "Bachelor of Architecture"
      }
    ],
    qualifications: [
      {
        level: "Undergraduate",
        requirements: [
          "High school diploma",
          "Entrance examination",
          "Interview",
          "Language proficiency",
          "Academic references"
        ],
        duration: "5-6 years"
      },
      {
        level: "Graduate",
        requirements: [
          "Bachelor's degree",
          "Research proposal",
          "Letters of recommendation",
          "Interview",
          "Language proficiency"
        ],
        duration: "2-3 years"
      }
    ],
    metrics: {
      academicReputation: 93,
      employerReputation: 87,
      facultyStudentRatio: 77,
      citations: 80,
      internationalFaculty: 65,
      internationalStudents: 63,
      researchOutput: 85,
    },
  },
  {
    id: 20,
    rank: 20,
    name: "Seoul National University",
    country: "South Korea",
    city: "Seoul",
    region: "asia",
    score: 93.1,
    studentCount: 28378,
    facultyCount: 3195,
    foundedYear: 1946,
    description:
      "Seoul National University is a national research university located in Seoul, South Korea. It is one of the flagship Korean national universities and is considered to be the most prestigious university in the country. Founded in 1946, Seoul National University is the first national university in South Korea.",
    website: "snu.ac.kr",
    address: "1 Gwanak-ro, Gwanak-gu, Seoul, South Korea",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Seoul_national_university_emblem.svg-E3MO6rT8gjOSpVPA201x0Z2Q3JfTyI.png",
    banner: "https://manoa.hawaii.edu/mix/wp-content/uploads/2023/07/Gwanak-Campus-in-Autumn-scaled-2000x1000.jpg",
    color: "#00205B",
    majors: [
      {
        name: "Medicine",
        description: "Medical education with clinical practice",
        duration: "6 years",
        degree: "Doctor of Medicine"
      },
      {
        name: "Law",
        description: "Study of legal systems and jurisprudence",
        duration: "4 years",
        degree: "Bachelor of Laws"
      },
      {
        name: "Engineering",
        description: "Focus on mechanical, electrical, and civil engineering",
        duration: "4 years",
        degree: "Bachelor of Engineering"
      },
      {
        name: "Business",
        description: "Study of business management and entrepreneurship",
        duration: "4 years",
        degree: "Bachelor of Business Administration"
      }
    ],
    qualifications: [
      {
        level: "Undergraduate",
        requirements: [
          "High school diploma",
          "College Scholastic Ability Test",
          "Interview",
          "Language proficiency",
          "Academic references"
        ],
        duration: "4 years"
      },
      {
        level: "Graduate",
        requirements: [
          "Bachelor's degree",
          "Research proposal",
          "Letters of recommendation",
          "Interview",
          "Language proficiency"
        ],
        duration: "2 years"
      }
    ],
    metrics: {
      academicReputation: 91,
      employerReputation: 89,
      facultyStudentRatio: 76,
      citations: 79,
      internationalFaculty: 73,
      internationalStudents: 70,
      researchOutput: 84,
    },
  },
]
