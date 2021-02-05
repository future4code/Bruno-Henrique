import React from 'react'
import styled from 'styled-components'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'

const StyledCard = styled(Card)`

`

export default function CardComponent(props) {
    return (
        <StyledCard>
            <CardContent>
                <Typography>
                    {props.planet}
                </Typography>
                <Typography>
                    {props.descrition}
                </Typography>
            </CardContent>
        </StyledCard>
    )
}
