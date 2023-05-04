import React from 'react';
import { ProjectLink, ProjectDescription, ProjectTitle, ProjectWrapper, } from './ProjectStyles';

const Project = ({ title, description, link }) => {
  return (
      <ProjectWrapper>
        <ProjectTitle>{title}</ProjectTitle>
        <ProjectDescription>{description}</ProjectDescription>
        <ProjectLink href={link} target="_blank">
          Link
        </ProjectLink>
      </ProjectWrapper>
  );
};

export default Project;
