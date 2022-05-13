import React from 'react';
import styled from 'styled-components';
import TodoList from '../TodoList/TodoList';

const AppWraper = () => {
    return (
        <Container>

            <LogoWraper>
                <Logo>
                    <img src="/img/logo.png" alt="logo" />
                </Logo>
                <AddButton>Add New</AddButton>
            </LogoWraper>

            <TodoList />

        </Container>
    );
};

export default AppWraper;


const Container = styled.div`
padding: 2rem 13rem 0rem;

@media (max-width: 1200px){
    padding: 2rem 8rem 0rem;
}
@media (max-width: 900px){
    padding: 2rem 4rem 0rem;
}
@media (max-width: 800px){
    padding: 2rem 3rem 0rem;
}
@media (max-width: 700px){
    padding: 2rem 2rem 0rem;
}
`;

const LogoWraper = styled.div`
display: flex;
align-items: center;
justify-content: center;
padding-bottom: 1rem;

@media (max-width: 600px){
    justify-content: space-between;
}
`;

const Logo = styled.div`

img{
    width: 100%;
}
`;

const AddButton = styled.button`
margin-left: 100px;
border: none;
font-family: var(--font-primary);
background: var(--theme-secondary);
padding: 7px 15px;
font-size: 14px;
font-weight: 600;
color: #fff;
border-radius: 2px;
cursor: pointer;
transition: all .2s;

@media (max-width: 600px){
    margin-left: 0px;
}
    &:hover{
        background: var(--theme-primary);
    }
`;