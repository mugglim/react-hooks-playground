import { createGlobalStyle } from 'styled-components';
import resetCSS from './reset';

const GlobalStyle = createGlobalStyle`
    ${resetCSS}
`;

export default GlobalStyle;
