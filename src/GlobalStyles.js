import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    --primary-color: #00b4d8;
    --secondary-color: #006d77;
    --dark-color: #292929;
    --light-color: #f8f8f8;
    --font-family: 'HelveticaNeueLTPro-Roman', sans-serif;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: var(--font-family);
  }

  body {
    background-color: #F2F0ED;
  }

  body::-webkit-scrollbar {
    width: 0.5em;
  }

  body::-webkit-scrollbar-track {
    background-color: #f5f5f5;
  }

  body::-webkit-scrollbar-thumb {
    background-color: #c2c2c2;
    border-radius: 20px;
  }

  body::-webkit-scrollbar-thumb:hover {
    background-color: #a6a6a6;
  }
`;

export default GlobalStyles;
