import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: "Gilroy";
    font-style: normal;
    font-weight: normal; /* or 400 */
    src: url("../../fonts/Gilroy-Regular.woff2") format("woff2");
  }
  @font-face {
    font-family: "Gilroy";
    font-style: normal;
    font-weight: 500; /* medium */
    src: url("../../fonts/Gilroy-Medium.woff2") format("woff2");
  }
  @font-face {
    font-family: "Gilroy";
    font-style: normal;
    font-weight: 600; /* semi-bold */
    src: url("../../fonts/Gilroy-SemiBold.woff2") format("woff2");
  }
  @font-face {
    font-family: "Gilroy";
    font-style: normal;
    font-weight: bold; /* or 700 */
    src: url("../../fonts/Gilroy-Bold.woff2") format("woff2");
  }
  * {
    font-family: 'Gilroy';
  }
`;

export default GlobalStyle;
