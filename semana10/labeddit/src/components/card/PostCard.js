import React from 'react'
import styled from 'styled-components'

import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import AccountCircleSharpIcon from '@material-ui/icons/AccountCircleSharp';
import Typography from '@material-ui/core/Typography';

const StyledCard = styled(Card)`
    width: 90%;
    margin: 20px auto;
`;

export const PostCard = () => {
    return (
        <StyledCard>
            <CardHeader
                avatar={
                    // <Avatar>
                    <AccountCircleSharpIcon />
                    // </Avatar>
                }
                title="Usuario"
                subheader="Titulo do post"
            />
            <CardContent>
                <Typography paragraph>
                    This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.
                </Typography>
            </CardContent>
        </StyledCard>
    )
}
