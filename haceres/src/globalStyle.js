import { createGlobalStyle } from "styled-components";

export const colors = {
    greyish: "#333",
    componentsGrey: "#3a3a3a",
    whiteish: "#fff",
};

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

/* Theming Class Style */

  .dark {
    background: ${colors.componentsGrey};
    color: ${colors.whiteish};
  }

/* App Style */

  .App {
    margin: 20px auto;
    width: 90%;
    max-width: 700px;
    border: 2px;
    border-style: dashed;
    border-radius: 4px;
  }

  /* Navbar Style */

  .navbar {
    padding: 10px 20px;
    text-align: center;
  }

  .navbar h1 {
    margin: 10px 0;
    grid-column: 2 / 5;
    grid-row: 1;
  }

  .theme-toggler {
    margin-top: 20px;
    grid-column: 5;
    grid-row: 1;
  }

  .theme-toggler input{
    border: 2px;
    border-radius: 4px;
    border-style: dashed;
    padding: 6px 20px;
  }

  .wrapper {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
  }

  /* TodoList Style */

  .Todo-list {
    margin: 20px;
  }

  .Todo-list ul {
    padding: 0;
    list-style-type: none;
  }

  .Todo-list li {
    padding: 10px;
    border-radius: 4px;
    margin: 10px 0;
    cursor: pointer;
    border: 2px;
    border-style: dashed;
  }

  .Todo-list li:hover {
    opacity: 0.7;
    text-decoration: line-through;
  }

  .Todo-list .title {
    font-weight: bold;
    font-size: 1.2em;
  }

  .Todo-list .author {
    font-size: 0.9em;
  }

  .empty {
    margin: 20px;
    text-align: center;
  }

  /* TodoForm Style */

  form {
    padding: 20px;
  }

  input[type='text']{
    width: 100%;
    padding: 10px;
    box-sizing: border-box;
    margin: 6px 0;
    border: 2px;
    border-radius: 4px;
    border-style: dashed;
  }

  input[type='submit']{
    margin: 10px auto;
    border: 2px;
    border-radius: 4px;
    border-style: dashed;
    padding: 6px 20px;
    display: block;
  }

`;

export default GlobalStyle;
