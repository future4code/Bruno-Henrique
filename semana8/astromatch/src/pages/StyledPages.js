import styled from 'styled-components'

export const ContainnerMainScreen = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const ProfileImg = styled.img`
    display: block;
    /* width: 100%; */
    max-height: 350px;
    padding-top: 10px;  
`

export const StyledButtons = styled.div`
    display: flex;
    flex-direction:row-reverse;
    justify-content:space-evenly;
    width: 100%;
    margin-top: 10px;
`

export const ListContainer = styled.div`
    display: flex;
    /* flex-direction: column; */
    align-items: center;
    border-bottom: 1px solid gray;
`

export const Avatar = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-right: 10px;
`
