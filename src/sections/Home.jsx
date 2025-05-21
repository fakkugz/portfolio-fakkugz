import { useState, useRef } from 'react';
import { Box, Grid, Typography, Paper, Button, IconButton, TextField, InputAdornment } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import SendIcon from '@mui/icons-material/Send';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import Lottie from 'lottie-react';
import animationData from '../assets/lotties/Animation - 1744859974921.json';
import circle from '../assets/diseño-avatar.webm';
import avatar from '../assets/Avatar.webp';
import useDecodeText from '../assets/hooks/useDecodeText'
import { motion } from 'framer-motion';
import { Snackbar, Alert } from '@mui/material';
import { useThemeContext } from '../context/ThemeContext';



const Home = () => {

    const [snackbarOpen, setSnackbarOpen] = useState(false);
    const [snackbarError, setSnackbarError] = useState(false);
    const { isDarkMode } = useThemeContext();

    const handleSendEmail = () => {
        window.location.href = 'mailto:fakku5@live.com.ar';
    };

    const handleCopyEmail = async () => {
        try {
            await navigator.clipboard.writeText('fakku5@live.com.ar');
            setSnackbarOpen(true);
        } catch (err) {
            setSnackbarError(true);
        }
    };

    // ANIMACION DEL AVATAR

    const boxRef = useRef(null);
    const centerRef = useRef({ x: 0, y: 0 });
    const allowTracking = useRef(false);
    const timeoutRef = useRef(null);

    const [rotation, setRotation] = useState({ rotateX: 0, rotateY: 0 });
    const [isLeaving, setIsLeaving] = useState(false);

    const handleMouseEnter = (e) => {
        if (!boxRef.current) return;

        const box = boxRef.current.getBoundingClientRect();
        centerRef.current = {
            x: box.left + box.width / 2,
            y: box.top + box.height / 2,
        };

        const { x: centerX, y: centerY } = centerRef.current;
        const x = e.clientX;
        const y = e.clientY;

        const rotateX = ((y - centerY) / (box.height / 2)) * -15;
        const rotateY = ((x - centerX) / (box.width / 2)) * 15;

        setRotation({ rotateX, rotateY });

        allowTracking.current = false;
        clearTimeout(timeoutRef.current);

        timeoutRef.current = setTimeout(() => {
            allowTracking.current = true;
        }, 500);
    };

    const handleMouseMove = (e) => {
        if (!boxRef.current || !allowTracking.current) return;

        const { x: centerX, y: centerY } = centerRef.current;

        const x = e.clientX;
        const y = e.clientY;

        const rotateX = ((y - centerY) / (boxRef.current.offsetHeight / 2)) * -30;
        const rotateY = ((x - centerX) / (boxRef.current.offsetWidth / 2)) * 30;

        setRotation({ rotateX, rotateY });
        setIsLeaving(false);
    };

    const handleMouseLeave = () => {
        setIsLeaving(true);
        allowTracking.current = false;
        clearTimeout(timeoutRef.current);
        setRotation({ rotateX: 0, rotateY: 0 });
    };

    const name = useDecodeText("Facundo González");
    const title = useDecodeText("// Frontend Developer");

    return (
        <Box sx={{ mt: 9, mx: {xs: 1, sm: 3}, p: { xs: 1, sm: 4} }} id='home'>
            <Grid container spacing={4} sx={{ minHeight: '75vh' }}>
                {/* Izquierda */}
                <Grid size={{ xs: 12, md: 6 }}
                    sx={{
                        p: 2,
                        position: 'relative',
                        overflow: 'hidden',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'flex-start',
                        alignItems: 'center',
                        height: {xs: '430px', md: '490px'},
                        minHeight: '100%',
                        perspective: '1000px',
                        transformStyle: 'preserve-3d',
                    }}
                >
                    <Paper
                        elevation={3}
                        sx={{
                            position: 'relative',
                            width: { xs: '90%', md: '90%' },
                            maxWidth: { xs: '350px', sm: '413px', md: '500px' },
                            minWidth: {xs: '350px', sm: '370px'},
                            p: 1,
                            mb: 4,
                            ml: 1,
                            borderRadius: 6,
                            backdropFilter: 'blur(8px) saturate(1.1)',
                            background: isDarkMode ? 'rgba(255, 255, 255, 0.03)' : 'linear-gradient(135deg, rgba(40, 255, 130, 0.19), rgba(113, 227, 255, 0.29))',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            alignSelf: 'center',
                            transition: 'transform 0.3s ease',
                            overflow: 'hidden',
                            zIndex: 2,
                            '&::before': {
                                content: '""',
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                width: '100%',
                                height: '100%',
                                background: isDarkMode ? 'linear-gradient(135deg, rgba(49, 114, 139, 0.31), rgba(27, 78, 70, 0.74))' : 'linear-gradient(135deg, rgba(113, 255, 231, 0.74), rgba(93, 209, 255, 0.31))',
                                borderRadius: 6,
                                zIndex: -1,
                                pointerEvents: 'none',
                                opacity: 0,
                                transition: 'opacity 0.4s ease-in-out',
                            },
                            '&:hover::before': {
                                opacity: 0.5,
                            },
                        }}
                    >
                        <Box
                            sx={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                width: '100%',
                            }}
                        >
                            <Box
                                sx={{
                                    width: { xs: '45px', md: '45px', lg: '60px'},
                                    height: { xs: '45px', md: '45px', lg: '60px'},
                                    position: 'relative',
                                    overflow: 'hidden',
                                    mr: 0,
                                    filter: 'drop-shadow(0 0 5px rgba(0, 255, 221, 0.1))',
                                }}
                            >
                                <Box
                                    sx={{
                                        width: { xs: '90px', md: '90px', lg: '120px' },
                                        height: 'auto',
                                        position: 'absolute',
                                        top: { xs: -22, md: -22, lg: -30 },
                                        left: { xs: -23, md: -23, lg: -30 },
                                        filter: isDarkMode ?
                                            'brightness(0) saturate(100%) invert(28%) sepia(92%) saturate(7496%) hue-rotate(174deg) brightness(122%) contrast(102%) drop-shadow(0px 1px rgb(0, 116, 110))' :
                                            'brightness(0) saturate(100%) invert(28%) sepia(92%) saturate(7496%) hue-rotate(194deg) brightness(122%) contrast(102%) drop-shadow(0px 1px rgb(0, 116, 110))',
                                    }}
                                >
                                    <Lottie
                                        animationData={animationData}
                                        loop
                                        autoplay
                                        style={{ width: '100%', height: 'auto' }}
                                    />
                                </Box>

                            </Box>
                            <motion.div
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2, duration: 0.6 }}
                            >
                                <Typography
                                    variant="h4"
                                    fontFamily="Zen Dots"
                                    sx={{
                                        fontSize: { xs: '1.4rem', sm: '1.8rem', md: '1.6rem', lg: '2rem' },
                                        color: isDarkMode ? '#eee' : 'rgb(0, 75, 105)'
                                    }}
                                >
                                    {name}
                                </Typography>
                            </motion.div>
                        </Box>

                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1.2, duration: 0.6 }}
                        >
                            <Typography
                                variant="h5"
                                fontFamily="Chakra Petch"
                                fontWeight= {isDarkMode ? '300' : '400'}
                                sx={{
                                    fontSize: { xs: '1.2rem', md: '1.4rem', lg: '1.6rem' },
                                    color: isDarkMode ? '#eee' : 'rgb(0, 75, 105)'
                                }}
                            >
                                {title}
                            </Typography>
                        </motion.div>
                    </Paper>

                    {/* AVATAR */}

                    <Box ref={boxRef} onMouseEnter={handleMouseEnter} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}
                        sx={{
                            position: 'relative',
                            top: '0%',
                            left: '0%',
                            width: {xs: 260, sm: 280, md: 320},
                            height: {xs: 260, sm: 280, md: 320},
                            borderRadius: '50%',
                            overflow: 'visible',
                            zIndex: 0,
                            transition: isLeaving ? 'transform 0.8s ease' : 'transform 0.2s ease',
                            transform: `rotateX(${rotation.rotateX}deg) rotateY(${rotation.rotateY}deg)`,
                            transformStyle: 'preserve-3d',
                        }}
                    >
                        {/* Diseño Giratorio */}
                        <Box
                            component="video"
                            src={circle}
                            autoPlay
                            loop
                            muted
                            playsInline
                            sx={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover',
                                borderRadius: '50%',
                                zIndex: 0,
                                filter: isDarkMode ? 'none' : 'brightness(0.8) contrast(160%) saturate(130%) drop-shadow(0px 0px 1px rgba(0, 0, 0, 0.2))'
                            }}
                        />

                        {/* Glow box atrás */}
                        <Box
                            component="img"
                            src={avatar}
                            alt="Avatar"
                            sx={{
                                position: 'absolute',
                                top: '0%',
                                left: '50%',
                                transform: 'translateX(-50%)',
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover',
                                borderRadius: '50%',
                                zIndex: 2,
                                filter: 'blur(7px) saturate(1.5)',
                                animation: 'pulseGlow 4s ease-in-out infinite',
                            }}
                        />

                        {/* Avatar Fijo */}
                        <Box
                            component="img"
                            src={avatar}
                            alt="Avatar"
                            sx={{
                                position: 'absolute',
                                top: '0%',
                                left: '50%',
                                transform: 'translateX(-50%)',
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover',
                                borderRadius: '50%',
                                zIndex: 2,
                            }}
                        />
                    </Box>

                </Grid>

                {/* Derecha */}
                <Grid size={{ xs: 12, md: 6 }}
                    sx={{
                        color: '#fff',
                        p: 0,
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        minHeight: '100%',
                    }}
                >

                    <Box sx={{ display: 'flex', flexDirection: 'column-reverse', alignItems: 'center' }}>
                        <TextField
                            value="fakku5@live.com.ar"
                            disabled
                            variant="outlined"
                            sx={{
                                mt: 2,
                                mb: 0.5,
                                bgcolor: isDarkMode ? 'rgba(255, 255, 255, 0.8)' : 'rgba(255, 255, 255, 0.6)',
                                borderRadius: 4,
                                color: 'black',
                                boxShadow: '1px 2px 4px rgba(0, 17, 12, 0.6)',
                                '& .MuiOutlinedInput-root': {
                                    borderRadius: 4,
                                    paddingRight: 0.5,
                                    '& fieldset': {
                                        borderColor: 'rgba(255,255,255,0.2)',
                                    },
                                    '&.Mui-disabled': {
                                        '& .MuiInputBase-input.Mui-disabled': {
                                            WebkitTextFillColor: 'black',
                                            fontWeight: '500',
                                            fontSize: '18px',
                                        },
                                    },
                                },
                            }}
                            slotProps={{
                                input: {
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <IconButton
                                                onClick={handleSendEmail}
                                                sx={{
                                                    background: isDarkMode ? 
                                                                'linear-gradient(155deg, rgb(48, 189, 135), rgb(20, 134, 104))' :
                                                                'linear-gradient(155deg, rgb(60, 233, 166), rgb(48, 189, 135))',
                                                    borderRadius: '12px 0 0 12px',
                                                    width: 50,
                                                    height: 50,
                                                    mx: 0.3,
                                                    boxShadow: '1px 1px 3px #888',
                                                    transformOrigin: 'center',
                                                    willChange: 'transform',
                                                    transition: 'all 0.1s ease',
                                                    '&:hover': {
                                                        filter: 'brightness(1.2) saturate(1.3)',
                                                        boxShadow: '3px 3px 8px rgba(0,0,0,0.8)',
                                                        transform: 'scale(1.03)',
                                                    },
                                                }}
                                            >
                                                <SendIcon sx={{ color: 'rgb(4, 53, 40)', fontSize: 23 }} />
                                            </IconButton>
                                            <IconButton
                                                onClick={handleCopyEmail}
                                                sx={{
                                                    background: isDarkMode ? 
                                                                'linear-gradient(155deg, rgb(48, 189, 135), rgb(20, 134, 104))' :
                                                                'linear-gradient(155deg, rgb(60, 233, 166), rgb(48, 189, 135))',
                                                    borderRadius: '0 12px 12px 0',
                                                    width: 50,
                                                    height: 50,
                                                    mx: 0.3,
                                                    boxShadow: '1px 1px 3px #888',
                                                    transition: 'all 0.2s ease',
                                                    '&:hover': {
                                                        filter: 'brightness(1.2) saturate(1.3)',
                                                        boxShadow: '3px 3px 8px rgba(0,0,0,0.8)',
                                                        transform: 'scale(1.03)',
                                                    },
                                                }}
                                            >
                                                <ContentCopyIcon sx={{ color: 'rgb(4, 53, 40)', fontSize: 25 }} />
                                            </IconButton>
                                        </InputAdornment>
                                    ),
                                },
                            }}
                        />
                        <Snackbar
                            open={snackbarOpen}
                            autoHideDuration={3000}
                            onClose={() => setSnackbarOpen(false)}
                            anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
                        >
                            <Alert severity="success" onClose={() => setSnackbarOpen(false)}
                                sx={{
                                    width: '100%',
                                    background: isDarkMode ? 'linear-gradient(135deg, rgba(0, 175, 122, 0.7), rgba(0, 109, 94, 0.7))' :
                                                             'linear-gradient(135deg, rgba(0, 175, 122, 0.9), rgba(0, 109, 94, 0.9))',
                                    color: '#eee',
                                    '& .MuiAlert-icon': {
                                        color: '#dfffef',
                                    },
                                }}>
                                Email copiado al portapapeles
                            </Alert>
                        </Snackbar>

                        {/* Snackbar de error */}
                        <Snackbar
                            open={snackbarError}
                            autoHideDuration={3000}
                            onClose={() => setSnackbarError(false)}
                            anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
                        >
                            <Alert severity="error" onClose={() => setSnackbarError(false)} sx={{ width: '100%' }}>
                                Error al copiar el email
                            </Alert>
                        </Snackbar>
                    </Box>
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'space-around',
                            alignSelf: 'center',
                            gap: 2,
                            mb: 3,
                            width: '20.8rem',
                            height: '3.4rem'
                        }}
                    >
                        <Button
                            variant="text"
                            sx={{
                                minWidth: 'auto',
                                color: isDarkMode ? 'rgb(56, 224, 179)' : 'rgb(0, 102, 75)',
                                transition: 'all 0.2s ease',
                                '& .MuiSvgIcon-root': {
                                    zIndex: 1,
                                    fontSize: '2rem',
                                },
                                '&::before': {
                                    content: '""',
                                    position: 'absolute',
                                    width: '1.5rem',
                                    height: '1.5rem',
                                    borderRadius: '50%',
                                    backgroundColor: 'rgba(255, 255, 255, 0.8)',
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
                                    color: 'rgb(12, 12, 12)',
                                    transform: 'scale(1.2)',
                                    backgroundColor: 'transparent'
                                }
                            }}
                            href="https://github.com/fakkugz"
                            target="_blank"
                        >
                            <GitHubIcon sx={{ fontSize: '2rem' }} />
                        </Button>
                        <Button
                            variant="text"
                            sx={{
                                position: 'relative',
                                minWidth: 'auto',
                                color: isDarkMode ? 'rgb(56, 224, 179)' : 'rgb(0, 102, 75)',
                                transition: 'all 0.2s ease',
                                overflow: 'hidden',
                                mt: '3px',
                                '& .MuiSvgIcon-root': {
                                    zIndex: 1,
                                    fontSize: '2.3rem',
                                    borderRadius: '6px',
                                },
                                '&::before': {
                                    content: '""',
                                    position: 'absolute',
                                    width: '1.4rem',
                                    height: '1.4rem',
                                    borderRadius: '15%',
                                    backgroundColor: 'rgba(255, 255, 255, 0.9)',
                                    boxShadow: '1px 1px 2px rgba(0, 24, 41, 0.7)',
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
                                    color: '#00509d',
                                    transform: 'scale(1.2)',
                                    backgroundColor: 'transparent',
                                },
                            }}
                            href="https://linkedin.com/in/facundoegonzalez"
                            target="_blank"
                        >
                            <LinkedInIcon sx={{ fontSize: '2rem' }} />
                        </Button>

                        <Button
                            variant="text"
                            startIcon={<PictureAsPdfIcon sx={{ zIndex: 1 }} />}
                            sx={{
                                position: 'relative',
                                overflow: 'visible',
                                minWidth: 'auto',
                                color: isDarkMode ? 'rgb(56, 224, 179)' : 'rgb(0, 102, 75)',
                                fontFamily: 'Chakra Petch',
                                fontSize: '1.2rem',
                                textTransform: 'none',
                                px: 1,
                                py: 1,
                                mt: '3px',
                                transition: 'all 0.2s ease',
                                '& .MuiButton-startIcon': {
                                    mr: 1,
                                    '& svg': {
                                        fontSize: '2rem',
                                    }
                                },
                                '&::before': {
                                    content: '""',
                                    position: 'absolute',
                                    width: '11.8rem',
                                    height: '2.4rem',
                                    borderRadius: '5px',
                                    backgroundColor: isDarkMode ? 'rgba(255, 0, 0, 0.4)' : 'rgba(224, 0, 0, 0.8)',
                                    boxShadow: '1px 1px 2px rgba(0, 24, 41, 0.7)',
                                    top: '50%',
                                    right: '-6rem',
                                    transform: 'translateY(-50%) scale(0)',
                                    transition: 'all 0.3s ease',
                                    zIndex: -1,
                                },
                                '&:hover::before': {
                                    right: '50%',
                                    transform: 'translate(50%, -50%) scale(1)',
                                },
                                '&:hover': {
                                    color: 'white',
                                    transform: 'scale(1.07)',
                                    backgroundColor: 'transparent',
                                }
                            }}
                            href="https://drive.google.com/file/d/1pWwp-I0XZJ8wRj53PqMNZ5ulXO2q1lhf/view?usp=drive_link"
                            download="Facundo Gonzalez - CV Front End Developer.pdf"
                            target="_blank"
                        >
                            DESCARGAR CV
                        </Button>

                    </Box>

                    <Paper
                        elevation={4}
                        sx={{
                            backdropFilter: isDarkMode ? 'blur(2px)' : 'blur(8px)',
                            background: isDarkMode ? 
                                        'linear-gradient(rgba(0, 74, 97, 0.7), rgba(0, 74, 97, 0.3))' :
                                        'linear-gradient(rgba(0, 238, 226, 0.4), rgba(4, 187, 243, 0.1))',
                            borderRadius: 6,
                            p: 1,
                            maxWidth: 475,
                            maxHeight: 74,
                            mb: 2,
                            width: '94%',
                            alignSelf: 'center',
                            boxShadow: isDarkMode ? '3px 3px rgba(0, 82, 61, 0.8)' : '3px 3px rgba(0, 173, 130, 0.8)',
                            transition: 'transform 0.3s, box-shadow 0.3s',
                            '&:hover': {
                                transform: 'translate(-2px, -2px)',
                                boxShadow: isDarkMode ? '7px 7px rgba(0, 82, 61, 0.8)' : '7px 7px rgba(0, 155, 116, 0.8)',
                            },
                        }}
                    >
                        <Box sx={{ textAlign: 'center' }}>
                            <Typography
                                sx={{
                                    fontFamily: 'Roboto, sans-serif',
                                    fontSize: { xs: '0.8rem', md: '0.9rem', lg: '1.2rem'},
                                    fontWeight: '400',
                                    color: isDarkMode ? 'rgb(222, 242, 255)' : 'rgb(0, 50, 70)' }}>
                                <span style={{ display: 'inline-block', filter: 'brightness(0.5)' }}>
                                    🎵
                                </span>
                                "¿Qué voy a hacer con tanto framework para mí?"<br />
                                "¡Voy a codear, yo soy un bicho de React!"
                                <span style={{ display: 'inline-block', filter: 'brightness(0.5)' }}>
                                    🎶
                                </span>
                            </Typography>
                        </Box>
                    </Paper>

                    <Paper
                        elevation={4}
                        sx={{
                            backdropFilter: isDarkMode ? 'blur(2px)' : 'blur(8px)',
                            background: isDarkMode ? 
                                        'linear-gradient(rgba(0, 74, 97, 0.7), rgba(0, 74, 97, 0.3))' :
                                        'linear-gradient(rgba(0, 238, 226, 0.4), rgba(4, 187, 243, 0.1))',
                            borderRadius: 6,
                            p: 1,
                            maxWidth: 475,
                            maxHeight: 74,
                            mb: 2,
                            width: '94%',
                            mb: 2,
                            alignSelf: 'center',
                            boxShadow: isDarkMode ? '3px 3px rgba(0, 82, 61, 0.8)' : '3px 3px rgba(0, 173, 130, 0.8)',
                            transition: 'transform 0.3s, box-shadow 0.3s',
                            '&:hover': {
                                transform: 'translate(2px, -2px)',
                                boxShadow: isDarkMode ? '7px 7px rgba(0, 82, 61, 0.8)' : '7px 7px rgba(0, 155, 116, 0.8)',
                            },
                        }}
                    >
                        <Box sx={{ textAlign: 'center' }}>
                            <Typography
                                sx={{
                                    fontFamily: 'Montserrat, sans-serif',
                                    fontSize: { xs: '0.8rem', md: '0.9rem', lg: '1.3rem'},
                                    fontWeight: '400',
                                    color: isDarkMode ? 'rgb(222, 242, 255)' : 'rgb(0, 50, 70)' }}>
                                🎼 "Yo quiero tener un millón de commits<br />así más fuerte poder codear." 🎤
                            </Typography>
                        </Box>
                    </Paper>

                    <Paper
                        elevation={4}
                        sx={{
                            backdropFilter: isDarkMode ? 'blur(2px)' : 'blur(8px)',
                            background: isDarkMode ? 
                                        'linear-gradient(rgba(0, 74, 97, 0.7), rgba(0, 74, 97, 0.3))' :
                                        'linear-gradient(rgba(0, 238, 226, 0.4), rgba(4, 187, 243, 0.1))',
                            borderRadius: 6,
                            p: 1,
                            maxWidth: 475,
                            maxHeight: 74,
                            mb: 2,
                            width: '94%',
                            mb: 2,
                            alignSelf: 'center',
                            boxShadow: isDarkMode ? '3px 3px rgba(0, 82, 61, 0.8)' : '3px 3px rgba(0, 173, 130, 0.8)',
                            transition: 'transform 0.3s, box-shadow 0.3s',
                            '&:hover': {
                                transform: 'translate(-2px, -2px)',
                                boxShadow: isDarkMode ? '7px 7px rgba(0, 82, 61, 0.8)' : '7px 7px rgba(0, 155, 116, 0.8)',
                            },
                        }}
                    >
                        <Box sx={{ textAlign: 'center' }}>
                            <Typography
                                sx={{
                                    fontFamily: 'Poppins, sans-serif',
                                    fontSize: { xs: '0.8rem', md: '0.9rem', lg: '1.2rem'},
                                    fontWeight: '400',
                                    color: isDarkMode ? 'rgb(222, 242, 255)' : 'rgb(0, 50, 70)' }}>
                                <span style={{ display: 'inline-block', filter: 'brightness(0.5)' }}>
                                    🎶
                                </span>
                                "Yo lo codieeeeeeee ieeeeee eeeeee" 😎
                            </Typography>
                        </Box>
                    </Paper>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Home;
