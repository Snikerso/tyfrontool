import { createGlobalStyle } from 'styled-components';
import Virgo from 'assets/fonts/virgo.ttf';
import NunitoRegular from 'assets/fonts/Nunito-Regular.ttf';
import NunitoSemiBold from 'assets/fonts/Nunito-SemiBold.ttf';

const GlobalStyles = createGlobalStyle`
@font-face {
    font-family: 'virgo';
    src: url(${Virgo});
}
@font-face {
    font-family: 'nunito-regular';
    src: url(${NunitoRegular});
}
@font-face {
    font-family: 'nunito-semibold';
    src: url(${NunitoSemiBold});
}

    
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
    }
    `;

export default GlobalStyles;
