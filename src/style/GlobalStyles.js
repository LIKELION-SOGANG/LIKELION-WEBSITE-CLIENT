import { createGlobalStyle } from 'styled-components';
import { reset } from 'styled-reset';
export const GlobalStyles = createGlobalStyle`
    ${reset}
    html{
        font-size: 10px;
    }
    body{
        font-family:Pretendard;
        
    }
`;
