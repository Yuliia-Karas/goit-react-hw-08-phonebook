import { Button } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import { HomeContainer, LinkContainer, Greeting, Text } from './Home.styled';

export default function Home() {
  return (
    <HomeContainer>
      <Greeting>Welcome to Phonebook!</Greeting>
      <Text> Pease Log in with your Phonebook account to continue </Text>
      <LinkContainer>
        <Link to="/register">
          <Button variant="outlined">Register</Button>
        </Link>
        <Link to="/login">
          <Button variant="outlined">Log in</Button>
        </Link>
      </LinkContainer>
    </HomeContainer>
  );
}
