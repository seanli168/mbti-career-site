export interface Career {
  title: string;
  description: string;
}

export interface Personality {
  type: string;
  name: string;
  nickname: string;

  summary: string;

  strengths: string[];

  weaknesses: string[];

  careers: Career[];

  workStyle: string;

  idealEnvironment: string;

  salaryPotential: string;

  remoteFriendly: boolean;
}

export const personalities: Personality[] = [
  {
    type: "INTJ",
    name: "Architect",
    nickname: "The Mastermind",
    summary:
      "INTJs are strategic thinkers who enjoy solving complex problems and planning long-term goals.",
    strengths: [
      "Strategic thinking",
      "Independent",
      "Analytical",
      "Long-term planning",
    ],
    weaknesses: [
      "Can be overly critical",
      "May appear distant",
      "Dislikes inefficiency",
    ],
    careers: [
      { title: "Software Architect", description: "Design scalable software systems and technical strategies." },
      { title: "Data Scientist", description: "Analyze large datasets and uncover business insights." },
      { title: "Management Consultant", description: "Solve organizational and business challenges." },
    ],
    workStyle: "Independent, strategic, and focused on long-term results.",
    idealEnvironment: "Structured workplaces with intellectual challenges.",
    salaryPotential: "High",
    remoteFriendly: true,
  },
  {
    type: "INTP",
    name: "Logician",
    nickname: "The Thinker",
    summary:
      "INTPs are curious problem-solvers who enjoy exploring theories and systems.",
    strengths: ["Logical thinking", "Creativity", "Curiosity", "Objectivity"],
    weaknesses: ["Can procrastinate", "May overlook details", "Dislikes routine work"],
    careers: [
      { title: "Software Engineer", description: "Build applications and solve technical challenges." },
      { title: "Research Scientist", description: "Investigate complex questions and develop new ideas." },
      { title: "AI Engineer", description: "Create intelligent systems and machine learning models." },
    ],
    workStyle: "Flexible, intellectual, and innovation-focused.",
    idealEnvironment: "Creative environments with autonomy and freedom.",
    salaryPotential: "High",
    remoteFriendly: true,
  },
  {
    type: "INFJ",
    name: "Advocate",
    nickname: "The Counselor",
    summary:
      "INFJs are insightful and purpose-driven individuals who seek meaningful work.",
    strengths: ["Empathy", "Creativity", "Vision", "Communication"],
    weaknesses: ["Sensitive to criticism", "Perfectionistic", "Can become overwhelmed"],
    careers: [
      { title: "Psychologist", description: "Help people improve their mental well-being." },
      { title: "HR Specialist", description: "Support employee development and workplace culture." },
      { title: "Writer", description: "Communicate ideas through meaningful content." },
    ],
    workStyle: "Purpose-driven and collaborative.",
    idealEnvironment: "Supportive workplaces focused on growth and impact.",
    salaryPotential: "Medium-High",
    remoteFriendly: true,
  },
  {
    type: "INFP",
    name: "Mediator",
    nickname: "The Dreamer",
    summary:
      "INFPs value creativity, authenticity, and meaningful personal expression.",
    strengths: ["Creativity", "Empathy", "Adaptability", "Open-mindedness"],
    weaknesses: ["Can be idealistic", "Avoids conflict", "Struggles with routine"],
    careers: [
      { title: "Writer", description: "Create stories, articles, and creative content." },
      { title: "Graphic Designer", description: "Design visual experiences and creative projects." },
      { title: "Counselor", description: "Support personal development and emotional growth." },
    ],
    workStyle: "Creative, flexible, and value-driven.",
    idealEnvironment: "Supportive and inspiring workplaces.",
    salaryPotential: "Medium",
    remoteFriendly: true,
  },
  {
    type: "ENTJ",
    name: "Commander",
    nickname: "The Leader",
    summary:
      "ENTJs are decisive, natural leaders who excel at organizing and directing teams.",
    strengths: ["Leadership", "Strategic planning", "Confidence", "Efficiency"],
    weaknesses: ["Can be stubborn", "Impatient with inefficiency", "Dominant"],
    careers: [
      { title: "Executive Manager", description: "Lead organizations and strategic initiatives." },
      { title: "Entrepreneur", description: "Start and manage successful ventures." },
      { title: "Lawyer", description: "Lead legal strategy and complex negotiations." },
    ],
    workStyle: "Goal-oriented, decisive, and confident.",
    idealEnvironment: "Dynamic workplaces with clear objectives.",
    salaryPotential: "High",
    remoteFriendly: true,
  },
  {
    type: "ENTP",
    name: "Debater",
    nickname: "The Innovator",
    summary:
      "ENTPs are quick-witted and love debating ideas, exploring possibilities and creative solutions.",
    strengths: ["Innovative", "Charismatic", "Problem-solving", "Energetic"],
    weaknesses: ["Can be argumentative", "Easily bored", "Dislikes routine"],
    careers: [
      { title: "Marketing Strategist", description: "Create innovative marketing campaigns." },
      { title: "Entrepreneur", description: "Develop new business ideas and ventures." },
      { title: "Consultant", description: "Advise businesses with creative solutions." },
    ],
    workStyle: "Fast-paced, innovative, and flexible.",
    idealEnvironment: "Dynamic and challenging workplaces.",
    salaryPotential: "High",
    remoteFriendly: true,
  },
  {
    type: "ENFJ",
    name: "Protagonist",
    nickname: "The Teacher",
    summary:
      "ENFJs are natural leaders and motivators who inspire others to achieve their potential.",
    strengths: ["Charisma", "Leadership", "Empathy", "Organizational skills"],
    weaknesses: ["Can be overly selfless", "Sensitive to criticism", "Overcommitted"],
    careers: [
      { title: "Teacher", description: "Guide students and inspire learning." },
      { title: "Manager", description: "Lead teams with motivation and strategy." },
      { title: "Coach", description: "Help individuals achieve personal goals." },
    ],
    workStyle: "Collaborative, inspirational, and organized.",
    idealEnvironment: "Supportive and people-focused workplaces.",
    salaryPotential: "Medium-High",
    remoteFriendly: true,
  },
  {
    type: "ENFP",
    name: "Campaigner",
    nickname: "The Enthusiast",
    summary:
      "ENFPs are enthusiastic, creative, and love inspiring others with new ideas.",
    strengths: ["Creativity", "Energy", "Empathy", "Charisma"],
    weaknesses: ["Can be scattered", "Easily bored", "Overcommitted"],
    careers: [
      { title: "Public Relations Specialist", description: "Manage public image and campaigns." },
      { title: "Event Planner", description: "Organize engaging events and programs." },
      { title: "Creative Director", description: "Lead creative teams on projects." },
    ],
    workStyle: "Energetic, creative, and people-focused.",
    idealEnvironment: "Varied, inspiring workplaces.",
    salaryPotential: "Medium-High",
    remoteFriendly: true,
  },
  {
    type: "ISTJ",
    name: "Logistician",
    nickname: "The Inspector",
    summary: "ISTJs are reliable, detail-oriented, and excel in structured environments.",
    strengths: ["Responsibility", "Organization", "Logic", "Persistence"],
    weaknesses: ["Rigid", "Insensitive to emotions", "Reluctant to change"],
    careers: [
      { title: "Accountant", description: "Manage finances with precision." },
      { title: "Auditor", description: "Ensure compliance and accuracy." },
      { title: "Project Manager", description: "Plan and execute structured projects." },
    ],
    workStyle: "Methodical, reliable, and thorough.",
    idealEnvironment: "Structured, predictable workplaces.",
    salaryPotential: "Medium-High",
    remoteFriendly: true,
  },
  {
    type: "ISFJ",
    name: "Defender",
    nickname: "The Nurturer",
    summary:
      "ISFJs are caring and responsible, supporting others and maintaining harmony.",
    strengths: ["Loyalty", "Responsibility", "Empathy", "Attention to detail"],
    weaknesses: ["Reluctant to change", "Overly selfless", "Shy"],
    careers: [
      { title: "Nurse", description: "Provide care and support to patients." },
      { title: "Teacher", description: "Guide and nurture students." },
      { title: "Administrative Assistant", description: "Support organizational functions." },
    ],
    workStyle: "Supportive, dependable, and attentive.",
    idealEnvironment: "Stable, harmonious workplaces.",
    salaryPotential: "Medium",
    remoteFriendly: true,
  },
  {
    type: "ISTP",
    name: "Virtuoso",
    nickname: "The Mechanic",
    summary:
      "ISTPs are practical, logical, and excel at hands-on problem-solving.",
    strengths: ["Practicality", "Adaptability", "Problem-solving", "Curiosity"],
    weaknesses: ["Insensitive", "Risk-taking", "Dislikes planning"],
    careers: [
      { title: "Engineer", description: "Design and troubleshoot systems." },
      { title: "Pilot", description: "Operate aircraft with precision." },
      { title: "Technician", description: "Fix and maintain equipment." },
    ],
    workStyle: "Hands-on, flexible, and independent.",
    idealEnvironment: "Dynamic, practical workplaces.",
    salaryPotential: "Medium-High",
    remoteFriendly: true,
  },
  {
    type: "ISFP",
    name: "Adventurer",
    nickname: "The Artist",
    summary: "ISFPs are creative, sensitive, and enjoy hands-on artistic work.",
    strengths: ["Creativity", "Empathy", "Adaptability", "Spontaneity"],
    weaknesses: ["Easily bored", "Avoids conflict", "Sensitive"],
    careers: [
      { title: "Photographer", description: "Create visual storytelling content." },
      { title: "Musician", description: "Perform and create music." },
      { title: "Interior Designer", description: "Design functional and aesthetic spaces." },
    ],
    workStyle: "Flexible, artistic, and expressive.",
    idealEnvironment: "Creative and aesthetically pleasing workplaces.",
    salaryPotential: "Medium",
    remoteFriendly: true,
  },
  {
    type: "ESTJ",
    name: "Executive",
    nickname: "The Supervisor",
    summary:
      "ESTJs are organized, pragmatic leaders who excel at managing projects and people.",
    strengths: ["Organization", "Leadership", "Efficiency", "Decisiveness"],
    weaknesses: ["Rigid", "Insensitive", "Dominant"],
    careers: [
      { title: "Operations Manager", description: "Oversee operations and teams efficiently." },
      { title: "Project Manager", description: "Plan and execute projects on time." },
      { title: "Military Officer", description: "Lead and enforce organizational strategy." },
    ],
    workStyle: "Structured, goal-oriented, and decisive.",
    idealEnvironment: "Organized, high-accountability workplaces.",
    salaryPotential: "Medium-High",
    remoteFriendly: true,
  },
  {
    type: "ESFJ",
    name: "Consul",
    nickname: "The Provider",
    summary:
      "ESFJs are social, caring, and excellent at supporting others and maintaining harmony.",
    strengths: ["Empathy", "Organization", "Sociable", "Supportive"],
    weaknesses: ["Overly sensitive", "Need approval", "Stubborn"],
    careers: [
      { title: "Teacher", description: "Guide students and support learning." },
      { title: "Social Worker", description: "Support individuals and communities." },
      { title: "Event Coordinator", description: "Organize and manage events." },
    ],
    workStyle: "People-focused, organized, and reliable.",
    idealEnvironment: "Friendly, collaborative workplaces.",
    salaryPotential: "Medium",
    remoteFriendly: true,
  },
  {
    type: "ESTP",
    name: "Entrepreneur",
    nickname: "The Persuader",
    summary:
      "ESTPs are energetic, pragmatic, and excel at taking action and solving immediate problems.",
    strengths: ["Energy", "Practicality", "Persuasion", "Adaptability"],
    weaknesses: ["Impulsive", "Risk-taking", "Insensitive"],
    careers: [
      { title: "Sales Manager", description: "Lead sales teams and meet targets." },
      { title: "Entrepreneur", description: "Start and grow new ventures." },
      { title: "Event Planner", description: "Organize large-scale events efficiently." },
    ],
    workStyle: "Action-oriented, pragmatic, and energetic.",
    idealEnvironment: "Fast-paced and results-driven workplaces.",
    salaryPotential: "High",
    remoteFriendly: true,
  },
  {
    type: "ESFP",
    name: "Entertainer",
    nickname: "The Performer",
    summary:
      "ESFPs are outgoing, spontaneous, and enjoy engaging with others creatively.",
    strengths: ["Energy", "Enthusiasm", "Adaptability", "Sociability"],
    weaknesses: ["Impulsive", "Dislike routine", "Easily distracted"],
    careers: [
      { title: "Performer", description: "Engage audiences with performance art." },
      { title: "Event Host", description: "Manage and host live events." },
      { title: "Travel Guide", description: "Lead groups and provide engaging experiences." },
    ],
    workStyle: "Social, energetic, and spontaneous.",
    idealEnvironment: "Dynamic, interactive, and lively workplaces.",
    salaryPotential: "Medium",
    remoteFriendly: true,
  },
];