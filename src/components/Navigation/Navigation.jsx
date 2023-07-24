import { useAuth } from 'hooks/useAuth';
import React from 'react';
import { Nav } from './Navigation.styled';

export default function Navigation() {
  const { isLoggedIn } = useAuth();
  return (
    <div>
      <Nav to="/" />
      {isLoggedIn && <Nav to="/contacts" />}
    </div>
  );
}
