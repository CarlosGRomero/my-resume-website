const express = require('express');
const app = express();
const port = 5000;

app.use(cors());

app.get('/api/resume', (req, res) => {
  res.json({
    name: "John Doe",
    profession: "Software Developer",
    experience: [
      {
        company: "Company One",
        role: "Frontend Developer",
        duration: "Jan 2020 - Present",
        description: "Developed and maintained web applications using React and Redux."
      },
      {
        company: "Company Two",
        role: "Backend Developer",
        duration: "Jun 2018 - Dec 2019",
        description: "Built RESTful APIs using Node.js and Express."
      }
    ],
    education: [
      {
        institution: "University XYZ",
        degree: "B.Sc. in Computer Science",
        duration: "2014 - 2018"
      }
    ],
    skills: ["JavaScript", "React", "Node.js", "Express", "HTML", "CSS"]
  });
});

app.listen(port, () => {
  console.log(`Backend is running on http://localhost:${port}`);
});
