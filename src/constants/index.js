import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";

export const HERO_CONTENT = `Hello! I’m a final-semester student with a strong passion for web development and AI/ML. I’ve gained hands-on experience in technologies such as React.js, Django, MySql. My goal is to become a skilled full-stack app developer, capable of building dynamic, user-friendly web applications. As I approach the completion of my degree, I’m excited to apply my knowledge in both front-end and back-end development to create efficient solutions and contribute to projects that push technological innovation and enhance user experiences.`;

export const ABOUT_TEXT = `I’m a passionate Computer Science graduate with a strong foundation in AI/ML and full-stack development. I've led and developed impactful real-time AI solutions like SecureBellAI, an edge-based, privacy-first smart doorbell, and a robust AI-powered online proctoring system. My skill set includes Python, React, Django, TensorFlow, and YOLO, enabling me to build intelligent, scalable applications. As a quick learner and collaborative team player, I enjoy solving real-world problems with innovative tech and a privacy-focused approach. I'm always eager to contribute to meaningful projects and grow as a developer.`;

export const EXPERIENCES = [
  {
    year: "Jan 2025 - Feb 2025",
    role: "Machine Learning Intern",
    company: "ShulaTech Solution",
    description: `During my internship at Shula Tech Solutions, I had the opportunity to work on real-world projects that helped enhance my skills in machine learning and development. I was involved in a variety of tasks, focusing on AI/ML applications and utilizing technologies like Python, React.js, and Django to build user-friendly and scalable systems.`,
    technologies: [
      
      
      "Python",
      "React",
      "Django",
      "JavaScript",
      "Django ",
      "MySQL",
    ],
  },

];

export const PROJECTS = [
  {
    title: "SecureBellAI – AI-Powered Privacy-Focused Doorbell System",
    image: project1,
    description:
      "This project is a doorbell portal system that combines real-time video processing with facial recognition for security and visitor management. The system captures video from a connected camera, processes the frames to detect faces, estimates head pose and eye gaze, and then uses face recognition to identify known visitors. When a face is recognized, the system logs the event and stores an image capture. The web server (built with Flask) provides endpoints for user signup, login, viewing live feeds, logs, and galleries of captured images. The frontend is implemented using HTML, CSS, and JavaScript to interact with users and display the results.",
      technologies: ["Python", "Flask", "OpenCV", "MediaPipe","YOLO", "MySQL"],
      link: "https://github.com/alankritdabral/SecureBellAI",
  },
  {
    title: "Audio-Video Exam Proctoring System",
    image: project2,
    description:
      "The AI-Based Online Exam Proctoring System is an innovative solution designed to ensure the integrity and fairness of online examinations. Using advanced artificial intelligence algorithms, the system monitors candidate behavior in real time by processing video and audio streams. It detects suspicious activities such as the absence of a face, multiple faces in the frame, abnormal head movements, unusual eye gaze patterns, and unauthorized objects in the test environment. Detailed logs and PDF reports are generated to document all detected events, helping examiners review any irregularities post-assessment.",
    technologies: ["Python", "Flask", "OpenCV", "Dlib", "YOLO", "MySQL"],
    link: "https://github.com/alankritdabral/Audio-Video-Exam-Proctoring-System",
  },
  {
    title: "Personal Portfolio Website",
    image: project3,
    description:
      "My first serious personal portfolio project, created as part of the Studi Independen Infinite Learning program. The website showcases my skills, projects, and contact information.",
    technologies: ["HTML", "CSS", "JavaScript", "ReactJS", "Tailwind"],
    link:"https://portfolio-7bbu.vercel.app/"
  },
];


export const CONTACT = {
  address:
    "Dehradun, Uttarakhand, India",
  phoneNo: "9105567268",
  email: "alankritdabral9331@gmail.com",
};
