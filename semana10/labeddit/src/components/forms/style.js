import styled from "styled-components";
import Paper from "@material-ui/core/Paper";
import { Avatar, Button, TextField } from '@material-ui/core';

export const StyledPaperLogin = styled(Paper)`
    display:flex;
    flex-direction: column;
    justify-content:space-between;
    background-color: #48489212;
    padding: 20px;
    width: 90%;
    height:100%;
    margin: 0 auto;
`;

export const StyledPaperSignUp = styled(Paper)`
    display:flex;
    flex-direction: column;
    justify-content:space-between;
    background-color: #48489212;
    padding: 20px;
    width: 90%;
    height:100%;
    margin: 5% auto;
`;

export const StyledAvatarIcon = styled(Avatar)`
    background-color: #484892;
`;

export const StyledInput = styled(TextField)`
    margin: 10px 0;
`;

export const StyledButton = styled(Button)`
    margin-top: 30px;
    
`;