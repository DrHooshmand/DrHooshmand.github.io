import React, { useEffect, useState } from "react";
import { Link, useLocation } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import LightModeIcon from '@mui/icons-material/LightMode';
import List from '@mui/material/List';
import ListIcon from '@mui/icons-material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';

const drawerWidth = 240;
const navItems = [
  ['Home', '/'],
  ['Publications', '/publications'],
  ['Projects', '/projects'],
  ['Courses', '/courses'],
  ['Teaching', '/teaching'],
  ['CV', '/cv'],
  ['Personal', '/personal'],
  ['Contact', '#contact']
];

function Navigation({parentToChild, modeChange}: any) {

  const {mode} = parentToChild;
  const location = useLocation();

  const [mobileOpen, setMobileOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.getElementById("navigation");
      if (navbar) {
        const scrolled = window.scrollY > navbar.clientHeight;
        setScrolled(scrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleNavigation = (path: string) => {
    if (path.startsWith('#') && location.pathname === '/') {
      // Handle anchor links on home page
      const section = path.substring(1);
      const element = document.getElementById(section);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    // Router navigation will be handled by Link components
  };

  const drawer = (
    <Box className="navigation-bar-responsive" onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <p className="mobile-menu-top"><ListIcon/>Menu</p>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item[0]} disablePadding>
            {item[1].startsWith('#') ? (
              <ListItemButton sx={{ textAlign: 'center' }} onClick={() => handleNavigation(item[1])}>
                <ListItemText primary={item[0]} />
              </ListItemButton>
            ) : (
              <ListItemButton component={Link} to={item[1]} sx={{ textAlign: 'center' }}>
                <ListItemText primary={item[0]} />
              </ListItemButton>
            )}
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar component="nav" id="navigation" className={`navbar-fixed-top${scrolled ? ' scrolled' : ''}`}>
        <Toolbar className='navigation-bar'>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          {mode === 'dark' ? (
            <LightModeIcon onClick={() => modeChange()} style={{ color: '#ffffff', cursor: 'pointer', fontSize: '24px' }}/>
          ) : (
            <DarkModeIcon onClick={() => modeChange()} style={{ color: '#ffffff', cursor: 'pointer', fontSize: '24px' }}/>
          )}
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navItems.map((item) => (
              item[1].startsWith('#') ? (
                <Button key={item[0]} onClick={() => handleNavigation(item[1])} sx={{ color: '#fff' }}>
                  {item[0]}
                </Button>
              ) : (
                <Button key={item[0]} component={Link} to={item[1]} sx={{ color: '#fff', textDecoration: 'none' }}>
                  {item[0]}
                </Button>
              )
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
}

export default Navigation;