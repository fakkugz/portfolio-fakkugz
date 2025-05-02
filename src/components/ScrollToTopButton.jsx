import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import { Fab, Zoom } from '@mui/material';
import { useEffect, useState } from 'react';
import { useThemeContext } from '../context/ThemeContext';

const ScrollToTopButton = () => {

  const [visible, setVisible] = useState(false);
  const { isDarkMode } = useThemeContext();

  useEffect(() => {
    const root = document.getElementById('root');

    const handleScroll = () => {
      if (root) {
        setVisible(root.scrollTop > 300);
      }
    };

    if (root) {
      root.addEventListener('scroll', handleScroll);
    }

    return () => {
      if (root) {
        root.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  const handleClick = () => {
    const root = document.getElementById('root');
    if (root) {
      root.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <Zoom in={visible}>
      <Fab
        onClick={handleClick}
        color="primary"
        size="small"
        sx={{
          position: 'fixed',
          bottom: 32,
          right: 32,
          zIndex: 1300,
          backgroundColor: isDarkMode ? 'rgba(0, 223, 204, 0.8)' : 'rgba(0, 136, 72, 0.8)',
          color: '#fff',
          '&:hover': {
            backgroundColor: isDarkMode ? 'rgba(0, 223, 204, 1)' : 'rgba(0, 136, 72, 1)',
          },
        }}
      >
        <ArrowUpwardIcon />
      </Fab>
    </Zoom>
  );
};

export default ScrollToTopButton;
