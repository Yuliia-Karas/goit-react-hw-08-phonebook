import { AppBar, Box, Button, Toolbar } from '@mui/material';
import { Nav } from './AuthNav.styled';

export const AuthNav = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Nav to="/register">
            <Button variant="contained">Register</Button>
          </Nav>
          <Nav to="/login">
            {' '}
            <Button variant="contained">Log In</Button>
          </Nav>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
