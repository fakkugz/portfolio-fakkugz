import { Box, Typography, Paper } from '@mui/material';
import tech from '../assets/images/tech.png';
import codo from '../assets/images/codo.png';
import ap4 from '../assets/images/ap4.jpg';
import cievyc from '../assets/images/cievyc.png';
import { useThemeContext } from '../context/ThemeContext';

const educationData = [
    {
        title: 'TALENTO TECH BA',
        year: '(2025)',
        description: 'React JS Developer\n - EN CURSO',
        image: tech,
    },
    {
        title: 'CODO A CODO 4.0',
        year: '(2024)',
        description: 'Full Stack Developer Python',
        description2: 'HTML, CSS, JavaScript (ES6+), Bootstrap, Responsive Design, JSON-Server, SQL, Flask',
        image: codo,
    },
    {
        title: 'UNIVERSIDAD DE SAN LUIS',
        year: '(2023)',
        description: 'Desarrollador Python',
        image: ap4,
    },
    {
        title: 'CIEVYC',
        year: '(2013)',
        description: 'Técnico superior en Dirección de Cine y Televisión',
        image: cievyc,
    },
];

const Education = () => {

    const { isDarkMode } = useThemeContext();

    return (
        <Box id='educación' sx={{ py: 5, mt: 7, mb: 9, px: 2, width: '100%', display: 'flex', justifyContent: 'center' }}>
            <Box sx={{ width: '90%', position: 'relative' }}>
                <Typography
                    className='appear-scroll'
                    variant="h4"
                    fontFamily="Chakra Petch"
                    textAlign="center"
                    mb={6}
                    sx={{
                        background: isDarkMode ? 
                                'linear-gradient(45deg, rgb(211, 255, 237), rgb(135, 255, 205), rgb(195, 246, 255))' :
                                'rgb(0, 78, 92)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        fontWeight: isDarkMode ? '400' : '500',
                        fontSize: {xs: '30px', sm: '34px'}
                    }}
                >
                    --- /* Educación */ ---
                </Typography>

                <Box
                    sx={{
                        position: 'relative',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 6,
                        '&::before': {
                            content: '""',
                            position: 'absolute',
                            top: 0,
                            left: '50%',
                            transform: 'translateX(-50%)',
                            width: '4px',
                            height: '100%',
                            background: 'rgba(0, 187, 115, 0.4)',
                            zIndex: 0,
                        },
                    }}
                >
                    {educationData.map((item, index) => (
                        <Box key={index}
                            sx={{
                                position: 'relative',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                zIndex: 1,
                            }}
                        >
                            <Box
                                sx={{
                                    position: 'absolute',
                                    top: 0,
                                    left: '50%',
                                    transform: 'translate(-50%, -50%)',
                                    width: 20,
                                    height: 20,
                                    borderRadius: '50%',
                                    background: 'linear-gradient(135deg, #00bb73, #006e4c)',
                                    boxShadow: '0 0 10px rgba(0, 187, 115, 0.8)',
                                    border: '2px solid white',
                                    zIndex: 2,
                                }}
                            />
                            <Paper
                                className='appear-scroll'
                                elevation={6}
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'stretch',
                                    gap: 2,
                                    p: 2,
                                    width: '50%',
                                    minWidth: {xs: '350px', sm: '480px'},
                                    borderRadius: '20px',
                                    background: isDarkMode ? 'rgba(255, 255, 255, 0.03)' :
                                                'linear-gradient(-45deg, rgba(0, 49, 37, 0.8),rgba(0, 66, 87, 0.9))',
                                    border: isDarkMode? '1px solid rgba(0, 255, 170, 0.2)' : '1px solid rgba(0, 206, 137, 0.8)',
                                    backdropFilter: 'blur(10px)',
                                    transform: 'translateZ(0)',
                                    willChange: 'transform, opacity',
                                    position: 'relative',
                                    zIndex: 1,
                                }}
                            >
                                <Box sx={{ display: 'flex', alignItems: 'center', gap: 3 }}>
                                    <Box
                                        component="img"
                                        src={item.image}
                                        alt={item.title}
                                        sx={{
                                            width: '30%',
                                            objectFit: 'cover',
                                            borderRadius: '12px',
                                            flexShrink: 0,
                                        }}
                                    />
                                    <Box>
                                        <Typography variant="h5" fontWeight="bold" sx={{ color: '#aaffdd', fontSize: {xs: '1.2rem', sm: '1.6rem'} }}>
                                            {item.title}
                                        </Typography>
                                        <Typography variant="body1" fontWeight="bold" sx={{ color: '#77ffbb', fontSize: {xs: '1rem', sm: '1.3rem'}, mt: 0.5 }}>
                                            {item.year}
                                        </Typography>
                                        <Typography variant="body1" sx={{ color: '#eee', fontSize: {xs: '0.8rem', sm: '1.3rem'}, mt: 0.5 }}>
                                            {item.description}
                                        </Typography>
                                    </Box>
                                </Box>

                                {item.description2 && (
                                    <Typography
                                        variant='body2'
                                        sx={{
                                            color: '#e5fef4',
                                            fontSize: {xs: '0.7rem', sm: '1rem'},
                                            px: 4,
                                            whiteSpace: 'pre-line',
                                            textAlign: 'center'
                                        }}
                                    >
                                        {item.description2}
                                    </Typography>
                                )}
                            </Paper>

                        </Box>
                    ))}
                </Box>
            </Box>
        </Box>
    );
};

export default Education;
