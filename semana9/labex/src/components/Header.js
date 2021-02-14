import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography  from "@material-ui/core/Typography";
import styled from 'styled-components'

const StyledToolBar = styled(Toolbar)`
    background-color: #0a043c;
`;

const StyledTypografy = styled(Typography)`
    color: #f6f6f6;
`;
export default function Header() {
    
    const labexLogo = (
        <StyledTypografy variant="h4" >
            LabeX
        </StyledTypografy>
    )

    const displayDesktop = () => {
        return <StyledToolBar>{labexLogo}</StyledToolBar>;
    };

    return (
        <header>
            <AppBar position="static">{displayDesktop()}</AppBar>
        </header>
    );
}


