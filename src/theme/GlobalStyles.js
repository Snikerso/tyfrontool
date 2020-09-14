import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`

    *,*::before,*::after{
        box-sizing:border-box;
        margin:0;
        }
    html {
        font-size: 62.5%; 
    }
    body{
        font-size:1.6rem;
        margin:0;    
        font-family: harry;
    }
    `;

export default GlobalStyles;
