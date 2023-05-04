import styled, { css, keyframes } from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 50px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 500px;
`;

const floatLabel = css`
  top: -20px;
  font-size: 12px;
  color: #0078d7;
`;

export const Label = styled.label`
  position: absolute;
  pointer-events: none;
  top: 14px;
  left: 21px;
  font-size: 16px;
  font-weight: bold;
  color: #aaa;
  text-transform: uppercase;
  transition: all 0.2s ease-out;

  ${props => props.active && floatLabel}
`;

export const InputWrapper = styled.div`
  position: relative;
  width: 100%;
  margin-bottom: 24px;
`;

export const Input = styled.input`
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  box-sizing: border-box;
  border: none;
  border-bottom: 2px solid #0078d7;
  background-color: #f5f5f5;
  font-size: 16px;
  color: #333;

  &:focus {
    outline: none;
    border-bottom: 2px solid #333;
  }

  &:focus + ${Label}, &:not(:placeholder-shown) + ${Label} {
    ${floatLabel}
  }
`;

export const TextArea = styled.textarea`
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  box-sizing: border-box;
  border: none;
  border-bottom: 2px solid #0078d7;
  background-color: #f5f5f5;
  font-size: 16px;
  color: #333;
  resize: none;

  &:focus {
    outline: none;
    border-bottom: 2px solid #333;
  }

  &:focus + ${Label}, &:not(:placeholder-shown) + ${Label} {
    ${floatLabel}
  }
`;

const pulseAnimation = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
`;

export const Button = styled.button`
  display: inline-block;
  padding: 12px 24px;
  margin-top: 16px;
  font-size: 16px;
  font-weight: bold;
  color: #fff;
  text-transform: uppercase;
  background-color: #0078d7;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  animation: ${pulseAnimation} 2s infinite;

  &:hover {
    background-color: #005cb2;
    animation: none;
  }
`;
