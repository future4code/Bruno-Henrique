import styled from 'styled-components'

export const ContainerApp = styled.div`
    border: 1px solid black;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 50%;
    height: 90vh;
    margin: 0 auto;
`;

export const StyledBtn = styled.button`
    width: 150px;
    padding: 10px;
`;

export const ContainerHeader = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    height: 70px;
    font-size: 2em;
    background-color: #b61827;
    color: white;          
`;

export const ContainerMain = styled.div`
    flex-grow: 1;
    width: 100%;
`;

export const ContainerFooter = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 100%;
    height: 60px;
    background-color: gray;
`;