import { createGlobalStyle } from "styled-components";

// :root {
// --color-black: #000000;
// --color-yellow-green: #e2ff6f;
// --color-light-gray: #fcfcfc;
// }
const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Gabarito:wght@500&family=Poppins:wght@300&display=swap');
*,
::after,
::before {
  box-sizing: border-box;
}
* {
  margin: 0;
  padding: 0;
}
html,
body {
  height: 100%;
}

body {
  font-family: 'Poppins',sans-serif;
  background-color: ${({ theme }) => theme.colors.colorblack};
  overflow-x: hidden;
  line-height: 1.5;
  color: var(--color-light-gray)
}
`;
export default GlobalStyle;
