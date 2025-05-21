import { useState, useRef, useEffect } from 'react';
import { Box, Toolbar, Button, IconButton, Paper, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import Switch from '../components/Switch';
import logo1 from '../assets/images/logo1.png';
import logo2 from '../assets/images/logo2.png';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { Drawer, List, ListItem, ListItemButton, ListItemText } from '@mui/material';
import { useThemeContext } from '../context/ThemeContext';


const sections = ['Proyectos', 'Educación', 'Contacto'];

const NavBar = () => {
  const [hoverPosition, setHoverPosition] = useState({ left: 0, width: 0, visible: false });
  const buttonsRef = useRef([]);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const { isDarkMode } = useThemeContext();

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const handleScrollToSection = (section) => {
    const element = document.getElementById(section.toLowerCase());
    const navbar = document.getElementById('navbar');
    const root = document.getElementById('root');
    if (element && navbar && root) {
      const navbarHeight = navbar.offsetHeight;
      const elementPosition = element.getBoundingClientRect().top + root.scrollTop;
      root.scrollTo({
        top: elementPosition - navbarHeight,
        behavior: 'smooth',
      });
    }
    setDrawerOpen(false);
  };

  useEffect(() => {
    const handleMouseLeave = () => {
      setHoverPosition(prev => ({
        ...prev,
        visible: false,
      }));
    };

    const navbar = document.getElementById('buttons-navbar');
    if (navbar) {
      navbar.addEventListener('mouseleave', handleMouseLeave);
    }

    return () => {
      if (navbar) {
        navbar.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, []);

  return (
    <Paper
      id="navbar"
      elevation={3}
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        mt: 3,
        width: '70%',
        minWidth: '350px',
        mx: 'auto',
        borderRadius: 6,
        backdropFilter: isDarkMode ? 'blur(10px) brightness(1.1) contrast(1.1)' : 'blur(6px) brightness(0.9) contrast(1.1)',
        background: 'linear-gradient(0deg, rgba(206, 255, 226, 0.13), rgba(206, 255, 226, 0.09))',
        color: '#fff',
        overflow: 'hidden',
      }}
    >
      <Toolbar sx={{ position: 'relative', justifyContent: 'space-between', minHeight: { xs: '48px', sm: '48px' }, }}>
        {/* Logo */}
        <Box sx={{ flex: 1, display: 'flex', alignItems: 'center', cursor: 'pointer' }} onClick={() => handleScrollToSection('home')}>
          <Box
            component="img"
            src={isDarkMode ? logo1 : logo2 }
            alt="Logo"
            sx={{
              width: {xs: '55px', sm: '70px'},
              p: 0.5,
              filter: isDarkMode ? 'drop-shadow(2px 2px 3px rgba(0, 0, 0, 0.3))' : 'drop-shadow(2px 2px 3px rgba(156, 255, 234, 0.3))' }}
          />
        </Box>

        {/* Hover animado */}
        <motion.div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            height: '100%',
            backgroundColor: isDarkMode ? 'rgba(59, 255, 190, 0.4)' : 'rgba(13, 158, 110, 0.8)',
            borderRadius: '16px',
            zIndex: 0,
            pointerEvents: 'none',
          }}
          initial={false}
          animate={{
            x: hoverPosition.visible ? hoverPosition.left : -100,
            width: hoverPosition.visible ? hoverPosition.width : 0,
            opacity: hoverPosition.visible ? 1 : 0,
          }}
          transition={{
            duration: 0.4,
            ease: [0.4, 0, 0.2, 1],
          }}
        />

        {/* Secciones mobile */}
        <Box
          id='buttons-navbar'
          sx={{
            display: { xs: 'none', md: 'flex' },
            flex: 2,
            justifyContent: 'center',
            position: 'relative',
          }}
        >
          {sections.map((section, index) => (
            <Button
              key={section}
              ref={(el) => (buttonsRef.current[index] = el)}
              onMouseEnter={() => {
                const button = buttonsRef.current[index];
                const navbar = document.getElementById('navbar');
                if (button && navbar) {
                  const navbarLeft = navbar.getBoundingClientRect().left;
                  const buttonLeft = button.getBoundingClientRect().left;
                  setHoverPosition({
                    left: buttonLeft - navbarLeft - 5,
                    width: button.offsetWidth + 10,
                    visible: true,
                  });
                }
              }}
              onClick={() => handleScrollToSection(section)}
              sx={{
                mx: 2,
                color: isDarkMode ? '#eee' : 'rgb(0, 97, 73)',
                fontFamily: 'Chakra Petch',
                fontSize: '1.2rem',
                textTransform: 'none',
                fontWeight: 500,
                filter: isDarkMode ? 'drop-shadow(1px 1px 2px rgba(0, 0, 0, 0.7))' : 'drop-shadow(1px 1px 2px rgba(255, 255, 255, 0.3))',
                transition: 'all 0.3s ease',
                zIndex: 1,
                '&:hover': {
                  color: '#eee',
                  backgroundColor: 'transparent',
                  transform: 'scale(1.04)',
                },
              }}
            >
              {section}
            </Button>
          ))}
        </Box>

        {/* Botón hamburguesa */}
        <Box sx={{ display: { xs: 'flex', md: 'none' }, flex: 2, justifyContent: 'center' }}>
          <IconButton onClick={handleDrawerToggle} sx={{ color: isDarkMode ? 'rgb(124, 255, 205)' : 'rgb(72, 145, 117)' }}>
            {drawerOpen ? <CloseIcon sx={{ fontSize: '35px' }}/> : <MenuIcon sx={{ fontSize: '35px' }}/>}
          </IconButton>
        </Box>

        {/* Switch derecha */}
        <Box
          sx={{
            flex: 1,
            display: 'flex',
            justifyContent: 'flex-end',
            filter: isDarkMode ? 'drop-shadow(0 0 2px rgba(0, 87, 87, 0.8))' : 'drop-shadow(0 0 2px rgba(87, 255, 255, 0.8))',
            opacity: '0.85'
          }}>
          <Switch />
        </Box>
      </Toolbar>

      {/* Drawer lateral para mobile */}
      <Drawer
        anchor="top"
        open={drawerOpen}
        onClose={handleDrawerToggle}
        slotProps={{
          paper: {
            sx: {
              mx: 'auto',
              mt: 12,
              backdropFilter: 'blur(12px)',
              borderRadius: 4,
              background: 'linear-gradient(180deg, rgba(81, 220, 255, 0.4), rgba(53, 231, 255, 0.39))',
              color: '#fff',
              width: '70%',
              p: 2,
            }
          },
        }}
      >
        <List>
          {sections.map((section) => (
            <ListItem key={section} disablePadding>
              <ListItemButton onClick={() => handleScrollToSection(section)}>
                <ListItemText
                  disableTypography
                  primary={
                    <Typography
                      sx={{
                        fontFamily: 'Chakra Petch',
                        fontSize: '1.5rem',
                        fontWeight: 500,
                        textAlign: 'center',
                        filter: 'drop-shadow(2px 2px 2px rgba(0, 0, 0, 0.7))',
                        color: '#fff',
                      }}
                    >
                      {section}
                    </Typography>
                  }
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </Paper>
  );
};


export default NavBar;
