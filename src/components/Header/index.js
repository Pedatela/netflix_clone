import React from 'react';

import { Container, Logo, User } from './styles';

function Header({ black }) {
    return (
        <Container black={black}>
            <Logo>
                <img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt="logo"></img>
            </Logo>
            <User>
                <img src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png" alt="user" />
            </User>
        </Container>
    );
}

export default Header;