import { ThemeProvider as MuiThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, useThemeContext } from './context/ThemeContext.jsx';
import Background from './components/Background.jsx';
import NavBar from './components/NavBar.jsx';
import Home from './sections/Home.jsx';
import Proyectos from './sections/Proyectos.jsx';
import Skills from './sections/Skills.jsx';
import Educacion from './sections/Educacion.jsx';
import Contacto from './sections/Contacto.jsx';
import ScrollToTopButton from './components/ScrollToTopButton';


const AppContent = () => {
  const { isDarkMode } = useThemeContext();

  const theme = createTheme({
    typography: {
      fontFamily: `"Quicksand", sans-serif`,
    },
    palette: {
      mode: isDarkMode ? 'dark' : 'light',
    },
  });

  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <Background />
      <ScrollToTopButton />
      <NavBar />
      <Home />
      <Proyectos />
      <Skills />
      <Educacion />
      <Contacto />
    </MuiThemeProvider>
  );
};

const App = () => {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
};

export default App;
