import React from 'react';
import Project from '../Project/Project';
import { ProjectsWrapper } from './ProjectContainerStyle';

const projectsData = [
  {
    id: 1,
    title: 'E-commerce shop',
    description: 'E-commerce shop for AxelCraft.pl',
    link: 'https://axelcraft.pl/sklep/',
  },
  {
    id: 2,
    title: 'Landing Page',
    description: 'Landing Page for company Dromech',
    link: 'http://test.dromech.com.pl/',
  },
  {
    id: 3,
    title: 'Learn Assistant',
    description: 'Learn Assistant Application',
    link: 'https://learn-assistant.netlify.app/',
  },
  {
    id: 4,
    title: 'List of AI Services',
    description: 'AI Services',
    link: 'https://ai-services-browser.web.app/',
  },
  {
    id: 5,
    title: 'Admin Panel',
    description: 'Admin Panel, User Panel, Adding Posts in PHP',
    link: 'https://github.com/MarcinPlaza1/admin-panel',
  },
  {
    id: 7,
    title: 'Ticket System',
    description: 'Tikcket System',
    link: 'https://github.com/MarcinPlaza1/ticket-system',
  },
];

const Projects = () => {
  return (
    <ProjectsWrapper>
      {projectsData.map((project) => (
        <Project
          key={project.id}
          title={project.title}
          description={project.description}
          link={project.link}
        />
      ))}
    </ProjectsWrapper>
  );
};

export default Projects;
