import { createGlobalStyle } from 'styled-components';
import { reset } from 'styled-reset';
export const GlobalStyles = createGlobalStyle`
    ${reset}
    html{
        font-size:10px;
        box-sizing:border-box;
    }
    body{
        font-family:Pretendard;
    }
`;
