// import * as React from 'react';
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
// import IconButton from '@mui/material/IconButton';
// import Typography from '@mui/material/Typography';
// import Menu from '@mui/material/Menu';
// import MenuIcon from '@mui/icons-material/Menu';
// import Container from '@mui/material/Container';
// import Avatar from '@mui/material/Avatar';
// import Tooltip from '@mui/material/Tooltip';
// import MenuItem from '@mui/material/MenuItem';
// import AdbIcon from '@mui/icons-material/Adb';
// import { Link, Outlet } from 'react-router-dom';

// const pages = [
//   { title: 'Home', path: '/' },
//   { title: 'Register', path: '/register' },
//   { title: 'Login', path: '/login' },
//   { title: 'Contacts', path: '/contacts' },
// ];

// const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

// function SharedLayout() {


//   const [setAnchorElNav] = React.useState(null);
//   const [anchorElNav, setAnchorElNav] = React.useState(null);
//   const [anchorElUser, setAnchorElUser] = React.useState(null);

//   const handleOpenNavMenu = event => {
//     setAnchorElNav(event.currentTarget);
//   };
//   const handleOpenUserMenu = event => {
//     setAnchorElUser(event.currentTarget);
//   };

//   const handleCloseNavMenu = () => {
//     setAnchorElNav(null);
//   };

//   const handleCloseUserMenu = () => {
//     setAnchorElUser(null);
//   };

//   return (
//     <div>
//       <AppBar position="static">
//         <Container maxWidth="xl">
//           <Toolbar disableGutters>
            /* <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} /> */
            /* <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              LOGO
            </Typography> */

            /* <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: 'block', md: 'none' },
                }}
              >
                {pages.map(page => (
                  <MenuItem key={page.title} onClick={handleCloseNavMenu}>
                    <Link to={page.path} >
                      {page.title}
                    </Link>
                  </MenuItem>
                ))}
              </Menu>
            </Box> */
            /* <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} /> */
            /* <Typography
              variant="h5"
              noWrap
              component="a"
              href=""
              sx={{
                mr: 2,
                display: { xs: 'flex', md: 'none' },
                flexGrow: 1,
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              LOGO
            </Typography> */
            // <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            //   {pages.map(page => (
            //     <Link
            //       to={page.path}
            //       key={page.title}
            //       onClick={handleCloseNavMenu}
            //       sx={{ my: 2, color: 'white', display: 'block' }}
            //     >
            //       {page.title}
            //     </Link>
            //   ))}
            // </Box>

            /* <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: '45px' }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map(setting => (
                  <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">{setting}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box> */
//           </Toolbar>
//         </Container>
//       </AppBar>
//       <main>
//         <Outlet />
//       </main>
//     </div>
//   );
// }
// export default SharedLayout;

import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import AppBar from 'components/AppBar/AppBar';

export default function SharedLayout() {
  return (
    <div>
      <AppBar />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </div>
  );
}