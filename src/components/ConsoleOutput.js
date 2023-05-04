// src/ConsoleOutput.js
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const ConsoleWrapper = styled.div`
  position: relative;
  background-color: #1e1e1e;
  color: #fff;
  padding: 10px;
  white-space: pre-wrap;
  overflow-y: scroll;
  max-height: 200px;
  width: 50%;
  box-sizing: border-box;
  border-radius: 5px;
`;

const ConsoleHeader = styled.div`
  background-color: #252526;
  padding: 6px;
  font-size: 0.8rem;
  color: #ccc;
  border-radius: 5px 5px 0 0;
  margin-bottom: 5px;
  font-family: 'Fira Code', monospace;
`;

const ErrorText = styled.span`
  color: #e36049;
  font-family: 'Fira Code', monospace;
`;

const FileName = styled.span`
  position: absolute;
  top: 12px;
  right: 10px;
  color: #ccc;
  font-family: 'Fira Code', monospace;
  font-size: 0.8rem;
`;

const ConsoleOutput = ({ error }) => {
  const [consoleText, setConsoleText] = useState('');

  useEffect(() => {
    const originalError = console.error;
    console.error = (...args) => {
      originalError(...args);
      setConsoleText((prev) => {
        if (!prev.includes(args.join(' '))) {
          return `${prev}\n${args.join(' ')}`;
        }
        return prev;
      });
    };

    if (!consoleText.includes(error)) {
      console.error(error);
    }

    return () => {
      console.error = originalError;
    };
  }, [consoleText, error]);

  return (
    <ConsoleWrapper>
      <ConsoleHeader>Console</ConsoleHeader>
      <ErrorText>
        ❌ {error.split('\n')[0]}
        <br />
        {error.split('\n')[1]}
      </ErrorText>
      <FileName>src/Contact.js:1</FileName>
    </ConsoleWrapper>
  );
};

export default ConsoleOutput;
