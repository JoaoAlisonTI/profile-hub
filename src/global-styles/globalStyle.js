import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    --primary-color: #6366f1;
    --secondary-color: #64748b;
    --tertiary-color: #111111;
    --bg-color: #f4f4f5;
    --text-color: #000000;
    
    --font-size-title: 2rem;
    --font-size-subtitle: 1.5rem;
    --font-size-paragraph: 1rem;
    --font-size-subparagraph: 0.875rem;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: var(--bg-color);
    color: var(--text-color);
    font-family: Afacad Flux, Sans-serif;
    height: 100vh;
  }

  a {
    text-decoration: none;
  }
`;