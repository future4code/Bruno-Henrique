import styled from 'styled-components'
import Grid from '@material-ui/core/Grid'
import image from '../../images/labeddit-unsplash.jpg'


export const MainContainer = styled(Grid)`
    height: 100vh;
`;

export const StyledBackground = styled.img`
    background-image: url("https://picsum.photos/900");
    background-size: cover;
    background-position: center;
    
    width: 100%;
    height:100%;
`;

export const FormContainer = styled(Grid)`
    display:flex;
    flex-direction: column;
    justify-content:center;
    align-items: center;
    background-color: #f6f6f6;
`;