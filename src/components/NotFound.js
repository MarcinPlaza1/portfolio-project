// src/NotFoundPage.js
import React from 'react';
import styled from 'styled-components';
import ConsoleOutput from './ConsoleOutput';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  height: 100vh;
  width: 100%;
  margin-left: 800px;
`;

const Title = styled.h1`
  color: rgb(232, 59, 70);
  font-size: 2em;
  white-space: pre-wrap;
  font-family: sans-serif;
  margin: 0px 2rem 2rem 0px;
  flex: 0 0 auto;
  max-height: 50%;
  overflow: auto;
  display: flex;
  align-items: flex-start;
`;

const NotFoundPage = () => {
  const error = 'ERROR: 404 (Not Found)\nIt seems that the code of this page has been lost somewhere.';

  return (
    <Wrapper>
      <Title>Failed to compile</Title>
      <ConsoleOutput error={error} />
    </Wrapper>
  );
};

export default NotFoundPage;
