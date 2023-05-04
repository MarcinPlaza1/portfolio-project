import styled from 'styled-components';

const ProjectLayout = styled.div`
  margin-top: 100px;
`;

const ProjectWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 689px;
  height: 472px;
  background-image: url(${(props) => props.image});
  background-size: cover;
  background-position: center;
  overflow: hidden;
  transition: transform 0.3s ease-in-out;
  margin: 10px 10px 48px 10px;
  border-radius: 12px;
  background-color: rgb(115, 124, 142);;
`;

const ProjectTitle = styled.h3`
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  color: var(--light-color);
  margin: 20px 20px 4px 20px;
`;

const ProjectDescription = styled.p`
  font-size: 16px;
  font-weight: lighter;
  color: var(--light-color);
  margin: 0 20px;
`;

const ProjectLink = styled.a`
  font-size: 16px;
  font-weight: bold;
  color: var(--light-color);
  text-decoration: none;
  margin: 20px;
`;

export { ProjectLink, ProjectDescription, ProjectTitle, ProjectWrapper, ProjectLayout };
