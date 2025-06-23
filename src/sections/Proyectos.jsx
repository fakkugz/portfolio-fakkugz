import { Box, Paper, Typography, Divider, Stack, Button } from '@mui/material';
import nova1 from '../assets/images/nova1.png';
import nova2 from '../assets/images/nova2.png';
import nova3 from '../assets/images/nova3.png';
import next1 from '../assets/images/next1.png';
import next2 from '../assets/images/next2.png';
import next3 from '../assets/images/next3.png';
import port1 from '../assets/images/port1.png';
import port2 from '../assets/images/port2.png';
import port3 from '../assets/images/port3.png';
import GitHubIcon from '@mui/icons-material/GitHub';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Html from '../components/logos/Html';
import Css from '../components/logos/Css';
import ReactJs from '../components/logos/ReactJs';
import Mui from '../components/logos/Mui';
import Bootstrap from '../components/logos/Bootstrap';
import Redux from '../components/logos/Redux';
import Zustand from '../components/logos/Zustand';
import Ts from '../components/logos/Ts';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from "react-slick";
import NextArrow from '../components/arrows/NextArrow';
import PrevArrow from '../components/arrows/PrevArrow';
import { useThemeContext } from '../context/ThemeContext';



const Proyectos = () => {

    const { isDarkMode } = useThemeContext();

    const proyectos = [
        {
            id: 1,
            title: "NovaShop Ecommerce",
            img: [nova1, nova2, nova3],
            description: "Aplicación web de comercio electrónico. Listado de productos, filtros, carrito, productos favoritos, autenticación e historial. FakeStore API como fuente de datos.",
            css: "mui",
            context: "redux",
            typescript: true,
            github: "https://github.com/fakkugz/novashop-ecommerce",
            liveview: "https://fakkugz.github.io/novashop-ecommerce/",
        },
        {
            id: 2,
            title: "NexTask Administrador",
            img: [next1, next2, next3],
            description: "Aplicación web para la gestión de tareas. Organiza tus tareas de manera intuitiva mediante categorías, drag and drop, aplica filtros, edita, completa o elimina tareas.",
            css: "bootstrap",
            context: "zustand",
            github: "https://github.com/fakkugz/nextask-administrador",
            liveview: "https://fakkugz.github.io/nextask-administrador/",
        },
        {
            id: 3,
            title: "Portfolio Web Personal",
            img: [port1, port2, port3],
            description: "Presentación de proyectos, habilidades y contacto. Diseño responsivo, navegación fluida, animaciones y secciones organizadas para mostrar experiencia y trabajos realizados.",
            css: "mui",
            github: "https://github.com/fakkugz/portfolio-fakkugz",
            liveview: "https://fakkugz.github.io/portfolio-fakkugz/",
        }
    ];

    const sliderSettings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
    };

    return (
        <Box id='proyectos' sx={{ mt: 6, p: 4, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            <Typography className='appear-scroll' variant="h4" fontFamily="Chakra Petch" mb={4}
                sx={{
                    background: isDarkMode ? 
                                'linear-gradient(45deg, rgb(211, 255, 237), rgb(135, 255, 205), rgb(195, 246, 255))' :
                                'rgb(0, 78, 92)',
                    fontWeight: isDarkMode ? '400' : '500',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    fontSize: {xs: '22px', sm: '34px'}
                }}>
                --- /* Proyectos principales */ ---
            </Typography>

            <Stack spacing={4}>
                {proyectos.map((proyecto) => (
                    <Paper
                        className='appear-scroll'
                        key={proyecto.id}
                        elevation={3}
                        sx={{
                            display: 'flex',
                            flexDirection: { xs: 'column', lg: 'row' },
                            width: { xs: '360px', sm: '420px', md: '515px', lg: '860px'},
                            height: { xs:'auto', lg: '290px'},
                            overflow: 'hidden',
                            borderRadius: 6,
                            background: isDarkMode ? 'rgba(255, 255, 255, 0.03)' :
                                        'linear-gradient(165deg, rgba(0, 74, 97, 0.7),rgba(0, 74, 97, 0.9), rgba(0, 104, 47, 0.5))',
                            backdropFilter: 'blur(8px) saturate(1.1)',
                            transition: 'all 0.2s ease',
                            '&:hover': {
                                backdropFilter: 'blur(8px) saturate(1.3)'
                            },
                            '&:hover .slider-arrows': { opacity: 1 }
                        }}
                    >
                        <Box sx={{ width: { xs: '100%', lg:'60%' }}}>
                            <Box sx={{ position: 'relative' }}>
                                <Slider {...sliderSettings}>
                                    {proyecto.img.map((imgSrc, index) => (
                                        <Box
                                            key={index}
                                            sx={{
                                                width: '100%',
                                                height: { xs: '202px', sm: '236px', md: '290px'},
                                                overflow: 'hidden',
                                                position: 'relative',
                                            }}
                                        >
                                            <Box
                                                component="img"
                                                src={imgSrc}
                                                alt={`Imagen ${index + 1} de ${proyecto.title}`}
                                                sx={{
                                                    position: 'relative',
                                                    height: '100%',
                                                }}
                                            />
                                        </Box>
                                    ))}
                                </Slider>
                            </Box>
                        </Box>

                        {/* Contenido derecho */}
                        <Box sx={{ p: 1.5, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                            <Typography variant="h5" fontFamily="Chakra Petch"
                                        sx={{ 
                                            fontSize: { xs: '18px', md: '24px'},
                                            color: 'white'}}>
                                {proyecto.title}
                            </Typography>

                            <Divider sx={{ mt: {xs: 0.5, md: 1}, bgcolor: 'rgba(255,255,255,0.5)' }} />

                            <Typography variant="body1"
                                        sx={{
                                            my: {xs: 0.5, md: 1},
                                            color: 'rgb(235, 255, 248)',
                                            pr: 1,
                                            fontSize: { xs: '12px', md: '16px'}
                                        }}>
                                {proyecto.description}
                            </Typography>

                            <Stack direction="row" spacing={2} sx={{ alignSelf: 'center' }}>
                                <Button
                                    variant="text"
                                    sx={{
                                        minWidth: 'auto',
                                        color: isDarkMode ? 'rgb(56, 224, 179)' : 'rgb(0, 40, 78)',
                                        transition: 'all 0.2s ease',
                                        '& .MuiSvgIcon-root': {
                                            zIndex: 1,
                                            fontSize: '1.8rem',
                                        },
                                        '&::before': {
                                            content: '""',
                                            position: 'absolute',
                                            width: '1.3rem',
                                            height: '1.3rem',
                                            borderRadius: '50%',
                                            backgroundColor: 'rgba(166, 255, 188, 0.7)',
                                            boxShadow: '2px 2px 2px rgba(0, 24, 41, 0.7)',
                                            top: '50%',
                                            left: '-1rem',
                                            transform: 'translateY(-50%) scale(0)',
                                            transition: 'all 0.3s ease',
                                            zIndex: 0,
                                        },
                                        '&:hover::before': {
                                            left: '50%',
                                            transform: 'translate(-50%, -50%) scale(1.5)',
                                        },
                                        '&:hover': {
                                            color: 'rgb(0, 59, 25)',
                                            transform: 'scale(1.2)',
                                            backgroundColor: 'transparent'
                                        }
                                    }}
                                    href={proyecto.github}
                                    target="_blank"
                                >
                                    <GitHubIcon />
                                </Button>

                                <Button
                                    variant="text"
                                    endIcon={
                                        <ArrowForwardIcon
                                            sx={{
                                                ml: -0.5,
                                                opacity: 0,
                                                transform: 'translateX(-14px)',
                                                transition: 'all 0.3s ease',
                                            }}
                                        />
                                    }
                                    sx={{
                                        position: 'relative',
                                        minWidth: 'auto',
                                        color: isDarkMode ? 'rgb(56, 224, 179)' : 'rgb(0, 40, 78)',
                                        transition: 'all 0.2s ease',
                                        overflow: 'hidden',
                                        fontSize: '1.1rem',
                                        fontFamily: 'Chakra Petch',
                                        textTransform: 'none',
                                        '&::before': {
                                            content: '""',
                                            position: 'absolute',
                                            width: '5.3rem',
                                            height: '1.4rem',
                                            borderRadius: '20px',
                                            backgroundColor: 'rgb(0, 59, 34)',
                                            boxShadow: '1px 1px 2px rgba(0, 24, 41, 0.7)',
                                            border: '1px solid rgba(166, 255, 188, 0.7)',
                                            top: '50%',
                                            left: '-4rem',
                                            transform: 'translateY(-50%) scale(0)',
                                            transition: 'all 0.3s ease',
                                            zIndex: -1,
                                        },
                                        '&:hover::before': {
                                            left: '50%',
                                            transform: 'translate(-50%, -50%) scale(1.3)',
                                        },
                                        '&:hover': {
                                            color: '#eee',
                                            transform: 'scale(1.1)',
                                            borderRadius: '25px',
                                            background: 'transparent',
                                        },
                                        '&:hover .MuiSvgIcon-root': {
                                            opacity: 1,
                                            transform: 'translateX(1px)',
                                            animation: 'arrowPulse 1.5s infinite',
                                            animationDelay: '0.3s',
                                        },
                                    }}
                                    href={proyecto.liveview}
                                    target="_blank"
                                >
                                    Live View
                                </Button>

                            </Stack>

                            <Divider sx={{ my: {xs: 0.5, md: 1}, bgcolor: 'rgba(255,255,255,0.5)' }} />

                            {/* Iconos de tecnologías */}
                            <Stack
                                direction="row"
                                spacing={3}
                                sx={{
                                    mt: 0.2,
                                    alignSelf: 'center',
                                    fontSize: {xs: '1.5rem', md: '1.7rem'},
                                    filter: isDarkMode ? 'drop-shadow(4px 4px 2px rgba(0, 0, 0, 0.2))' :
                                                         'drop-shadow(3px 3px 3px rgba(0, 0, 0, 0.8))',
                                    '& > *': {
                                        transition: 'all 0.3s ease',
                                    },
                                    '& > :nth-of-type(1):hover': {
                                        transform: 'scale(1.2)',
                                        filter: 'drop-shadow(3px 3px 2px rgba(255, 165, 0, 0.2))',
                                    },
                                    '& > :nth-of-type(2):hover': {
                                        transform: 'scale(1.2)',
                                        filter: 'drop-shadow(3px 3px 2px rgba(135, 206, 250, 0.2))',
                                    },
                                    '& > :nth-of-type(3):hover': {
                                        transform: 'scale(1.2)',
                                        filter: 'drop-shadow(3px 3px 2px rgba(200, 162, 255, 0.2))',
                                    },
                                    '& > :nth-of-type(4):hover': {
                                        transform: 'scale(1.2)',
                                        filter: 'drop-shadow(3px 3px 2px rgba(127, 255, 212, 0.2))',
                                    },
                                    '& > :nth-of-type(5):hover': {
                                        transform: 'scale(1.2)',
                                        filter: proyecto.context === 'redux' ?
                                            'drop-shadow(3px 3px 2px rgba(234, 127, 255, 0.2))' :
                                            'drop-shadow(3px 3px 2px rgba(255, 236, 127, 0.2))',
                                    },
                                    '& > :nth-of-type(6):hover': {
                                        transform: 'scale(1.2)',
                                        filter: 'drop-shadow(3px 3px 2px rgba(135, 206, 250, 0.2))',
                                    }
                                }}
                            >
                                <Html />
                                <Css />
                                {proyecto.css === "mui" ? <Mui /> : <Bootstrap />}
                                <ReactJs />
                                {proyecto.context === "redux" && <Redux />}
                                {proyecto.context === "zustand" && <Zustand style={{ width: '1em', height: '1em' }}/>}
                                {proyecto.typescript && <Ts />}
                            </Stack>

                        </Box>
                    </Paper>
                ))}
            </Stack>
        </Box>
    );
};

export default Proyectos;
