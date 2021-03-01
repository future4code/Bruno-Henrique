import React from 'react'
import styled from 'styled-components'

import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import Avatar from '@material-ui/core/Avatar';
import ArrowDropUpSharpIcon from '@material-ui/icons/ArrowDropUpSharp';
import ArrowDropDownSharpIcon from '@material-ui/icons/ArrowDropDownSharp';
import AccountCircleSharpIcon from '@material-ui/icons/AccountCircleSharp';
import Typography from '@material-ui/core/Typography';

const StyledCard = styled(Card)`
    width: 90%;
    margin: 20px auto;
`;

const Divided = styled.hr`
    max-width: 80%;
`;

const StyledCardActions = styled(CardActions)`
    display:flex;
    justify-content: space-between;
`;

export const PostCard = (props) => {
    
    const handlePostDetails = (history, id) => { 
        history.push(`/postDetails/${id}`)        
    }

    return (
        <StyledCard>
            <CardHeader
                avatar={
                    <Avatar>
                        <AccountCircleSharpIcon />
                    </Avatar>
                }
                title={props.username}
                subheader={props.title}
            />
            <Divided />
            <CardActionArea onClick={() => handlePostDetails(props.history,props.id)}>
                <CardContent>
                    <Typography paragraph>
                        {props.text}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <Divided />
            <StyledCardActions disableSpacing>
                <div>
                    <IconButton>
                        <ArrowDropUpSharpIcon />
                    </IconButton>
                    {props.votesCount}
                    <IconButton>
                        <ArrowDropDownSharpIcon />
                    </IconButton>
                </div>
                <div>
                    <p>{props.commentsCount} comentários</p>
                </div>
            </StyledCardActions>
        </StyledCard>
    )
}
