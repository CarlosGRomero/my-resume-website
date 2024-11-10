import React, { useEffect, useState } from 'react';
import './App.css';

function Resume() {
  const [resume, setResume] = useState(null);

  useEffect(() => {
    fetch('http://ec2-3-144-20-250.us-east-2.compute.amazonaws.com:5000/api/resume')
      .then(response => response.json())
      .then(data => setResume(data));
  }, []);

  if (!resume) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{resume.name}</h2>
      <p><strong>Profession:</strong> {resume.profession}</p>

      <h3>Experience</h3>
      {resume.experience.map((job, index) => (
        <div key={index}>
          <h4>{job.company}</h4>
          <p><strong>Role:</strong> {job.role}</p>
          <p><strong>Duration:</strong> {job.duration}</p>
          <p>{job.description}</p>
        </div>
      ))}

      <h3>Education</h3>
      {resume.education.map((edu, index) => (
        <div key={index}>
          <h4>{edu.institution}</h4>
          <p><strong>Degree:</strong> {edu.degree}</p>
          <p><strong>Duration:</strong> {edu.duration}</p>
        </div>
      ))}

      <h3>Skills</h3>
      <ul>
        {resume.skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </div>
  );
}

export default Resume;
