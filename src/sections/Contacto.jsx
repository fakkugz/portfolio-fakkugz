import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Typography, Grid, TextField, Button, IconButton, InputAdornment, Box, Paper, Divider } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { Snackbar, Alert } from '@mui/material';
import { useThemeContext } from '../context/ThemeContext';

const Contacto = () => {

    const { isDarkMode } = useThemeContext();

    const form = useRef();

    const sendEmail = (e) => {
        emailjs.sendForm('service_5njsxl9', 'template_hwgg9hw', form.current, 'iSEL9bBOsDkKEJIr8')
            .then((result) => {
                console.log('Email enviado', result.text);
                form.current.reset();
            }, (error) => {
                console.log(error.text);
            });
    };

    const [snackbarOpen, setSnackbarOpen] = useState(false);
    const [snackbarError, setSnackbarError] = useState(false);

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

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        sendEmail();
        setFormData({
            name: '',
            email: '',
            message: '',
        });
    };

    return (
        <Box id='contacto' sx={{ width: "80%", mx: "auto", mb: 1, mt: 8, pt: 4 }}>
            <Typography
                className='appear-scroll'
                variant="h4"
                fontFamily="Chakra Petch"
                textAlign="center"
                mb={4}
                sx={{
                    background: isDarkMode ? 
                                'linear-gradient(45deg, rgb(211, 255, 237), rgb(135, 255, 205), rgb(195, 246, 255))' :
                                'rgb(0, 78, 92)',
                    fontWeight: isDarkMode ? '400' : '500',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    fontSize: {xs: '30px', sm: '34px'}
                }}
            >
                --- /* Contacto */ ---
            </Typography>

            <Grid container spacing={4} >
                <Grid size={{ xs: 12, md: 6 }}>
                    <Paper
                        className='appear-scroll'
                        elevation={3}
                        sx={{
                            width: 'auto',
                            height: 'auto',
                            overflow: 'hidden',
                            p: 3,
                            borderRadius: 6,
                            border: '1px solid transparent',
                            background: isDarkMode ? 'rgba(255, 255, 255, 0.03)' :
                                                'linear-gradient(-45deg, rgba(0, 102, 77, 0.6),rgba(0, 99, 129, 0.7))',
                            backdropFilter: 'blur(4px) saturate(1.1)',
                            transition: 'all 0.2s ease',
                            transform: 'translateZ(0)',
                            willChange: 'transform, opacity',
                            '&:hover': {
                                border: '1px solid rgba(0, 47, 255, 0.08)',
                                backdropFilter: 'blur(8px) saturate(1.3)'
                            },
                        }}
                    >
                        <form ref={form} onSubmit={handleSubmit}>
                            <TextField
                                fullWidth
                                label="Nombre"
                                name="name"
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                margin="normal"
                                required
                                variant="outlined"
                                slotProps={{
                                    input: {
                                        sx: { background: 'linear-gradient(165deg, rgb(240, 240, 240), rgb(207, 255, 239))' },
                                    },
                                }}
                                sx={{
                                    '& .MuiOutlinedInput-root': {
                                        '& fieldset': {
                                            borderColor: 'rgba(0, 94, 70, 0.4)',
                                        },
                                        '&:hover fieldset': {
                                            borderColor: 'rgba(0, 255, 191, 0.6)',
                                        },
                                        '&.Mui-focused fieldset': {
                                            borderColor: '#00e0b8',
                                        },
                                    },
                                    '& .MuiInputLabel-root': {
                                        color: '#222',
                                        transition: 'all 0.2s ease',
                                    },
                                    '& .MuiInputLabel-root.Mui-focused, & .MuiInputLabel-shrink': {
                                        backgroundColor: '#aefce3',
                                        px: 0.7,
                                        borderRadius: 1,
                                        fontWeight: 'bold',
                                        color: '#007a65',
                                        transform: 'translate(9px, -9px) scale(0.75)',
                                    },
                                }}
                            />

                            <TextField
                                fullWidth
                                label="Correo"
                                name="email"
                                type="email"
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                margin="normal"
                                required
                                variant="outlined"
                                slotProps={{
                                    input: {
                                        sx: { background: 'linear-gradient(165deg, rgb(240, 240, 240), rgb(207, 255, 239))' },
                                    },
                                }}
                                sx={{
                                    '& .MuiOutlinedInput-root': {
                                        '& fieldset': {
                                            borderColor: 'rgba(0, 255, 191, 0.4)',
                                        },
                                        '&:hover fieldset': {
                                            borderColor: 'rgba(0, 255, 191, 0.6)',
                                        },
                                        '&.Mui-focused fieldset': {
                                            borderColor: '#00e0b8',
                                        },
                                    },
                                    '& .MuiInputLabel-root': {
                                        color: '#222',
                                        transition: 'all 0.2s ease',
                                    },
                                    '& .MuiInputLabel-root.Mui-focused, & .MuiInputLabel-shrink': {
                                        backgroundColor: '#aefce3',
                                        px: 0.9,
                                        borderRadius: 1,
                                        fontWeight: 'bold',
                                        color: '#007a65',
                                        transform: 'translate(9px, -9px) scale(0.75)',
                                    },
                                }}
                            />

                            <TextField
                                fullWidth
                                label="Mensaje"
                                name="message"
                                value={formData.message}
                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                multiline
                                rows={4}
                                margin="normal"
                                required
                                variant="outlined"
                                slotProps={{
                                    input: {
                                        sx: {
                                            background: 'linear-gradient(165deg, rgb(240, 240, 240), rgb(207, 255, 239))'
                                        },
                                    },
                                }}
                                sx={{
                                    '& .MuiOutlinedInput-root': {
                                        '& fieldset': {
                                            borderColor: 'rgba(0, 255, 191, 0.4)',
                                        },
                                        '&:hover fieldset': {
                                            borderColor: 'rgba(0, 255, 191, 0.6)',
                                        },
                                        '&.Mui-focused fieldset': {
                                            borderColor: '#00e0b8',
                                        },
                                    },
                                    '& .MuiInputLabel-root': {
                                        color: '#222',
                                        transition: 'all 0.2s ease',
                                    },
                                    '& .MuiInputLabel-root.Mui-focused, & .MuiInputLabel-shrink': {
                                        backgroundColor: '#aefce3',
                                        px: 0.8,
                                        borderRadius: 1,
                                        fontWeight: 'bold',
                                        color: '#007a65',
                                        transform: 'translate(10px, -9px) scale(0.75)',
                                    },
                                    '& .MuiInputBase-root': {
                                        '& input': {
                                            '&::placeholder': {
                                                opacity: 1,
                                                color: '#888',
                                            },
                                        },
                                    },
                                }}
                            />


                            <Button
                                type="submit"
                                variant="contained"
                                sx={{
                                    mt: 2,
                                    background: isDarkMode ? 'linear-gradient(135deg, rgb(55, 173, 134), rgb(0, 92, 69))' :
                                                'linear-gradient(135deg, rgb(57, 182, 140), rgb(0, 150, 112))',
                                    color: '#fff',
                                    fontWeight: 600,
                                    textTransform: 'none',
                                    transition: 'all 0.3s ease',
                                    '&:hover': {
                                        filter: 'contrast(1.2) brightness(1.1)',
                                    },
                                }}
                            >
                                Enviar
                            </Button>
                        </form>
                    </Paper>
                </Grid>

                <Grid size={{ xs: 12, md: 6 }}>
                    <Box
                        className='appear-scroll'
                        sx={{
                            height: '100%',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                            py: 5
                        }}
                    >
                        <Box>
                            <Box display="flex" flexDirection="column" alignItems="flex-start" gap={1}>
                                {/* WhatsApp */}
                                <Button
                                    variant="text"
                                    sx={{
                                        position: 'relative',
                                        display: 'flex',
                                        alignItems: 'center',
                                        color: isDarkMode ? '#ddd' : 'rgb(0, 49, 58)',
                                        textTransform: 'none',
                                        fontSize: '1.5rem',
                                        fontWeight: 500,
                                        fontFamily: 'Chakra Petch',
                                        '&:hover': {
                                            backgroundColor: 'rgba(37, 211, 102, 0.2)',
                                        }
                                    }}
                                    href="https://wa.me/541131202402"
                                    target="_blank"
                                >
                                    <Box sx={{ position: 'relative', width: '2.8rem', height: '2.8rem', display: 'flex', alignItems: 'center', justifyContent: 'center', mr: 1 }}>
                                        <Box
                                            component="span"
                                            sx={{
                                                position: 'absolute',
                                                width: '2.8rem',
                                                height: '2.8rem',
                                                borderRadius: '25%',
                                                background: 'linear-gradient(135deg, rgb(70, 226, 109), rgb(20, 134, 54))',
                                                zIndex: 0,
                                            }}
                                        />
                                        <WhatsAppIcon sx={{ zIndex: 1, fontSize: '2.3rem', color: 'white' }} />
                                    </Box>
                                    11-3120-2402
                                </Button>

                                {/* GitHub */}
                                <Button
                                    variant="text"
                                    sx={{
                                        position: 'relative',
                                        display: 'flex',
                                        alignItems: 'center',
                                        color: isDarkMode ? '#ddd' : 'rgb(0, 49, 58)',
                                        textTransform: 'none',
                                        fontSize: '1.7rem',
                                        fontWeight: 500,
                                        fontFamily: 'Chakra Petch',
                                        '&:hover': {
                                            backgroundColor: 'rgba(0, 0, 0, 0.2)',
                                        }
                                    }}
                                    href="https://github.com/fakkugz"
                                    target="_blank"
                                >
                                    <Box sx={{ position: 'relative', width: '2.4rem', height: '2.4rem', display: 'flex', alignItems: 'center', justifyContent: 'center', mr: 1 }}>
                                        <Box
                                            component="span"
                                            sx={{
                                                position: 'absolute',
                                                width: '2.4rem',
                                                height: '2.4rem',
                                                borderRadius: '50%',
                                                backgroundColor: '#eee',
                                                zIndex: 0,
                                            }}
                                        />
                                        <GitHubIcon sx={{ zIndex: 1, fontSize: '2.2rem', color: 'black' }} />
                                    </Box>
                                    /fakkugz
                                </Button>

                                {/* LinkedIn */}
                                <Button
                                    variant="text"
                                    sx={{
                                        position: 'relative',
                                        display: 'flex',
                                        alignItems: 'center',
                                        color: isDarkMode ? '#ddd' : 'rgb(0, 49, 58)',
                                        textTransform: 'none',
                                        fontSize: '1.7rem',
                                        fontWeight: 500,
                                        fontFamily: 'Chakra Petch',
                                        '&:hover': {
                                            backgroundColor: 'rgba(14, 118, 168, 0.2)',
                                        }
                                    }}
                                    href="https://linkedin.com/in/facundoegonzalez"
                                    target="_blank"
                                >
                                    <Box sx={{ position: 'relative', width: '2.6rem', height: '2.6rem', display: 'flex', alignItems: 'center', justifyContent: 'center', mr: 1 }}>
                                        <Box
                                            component="span"
                                            sx={{
                                                position: 'absolute',
                                                width: '2.3rem',
                                                height: '2.3rem',
                                                borderRadius: '10%',
                                                backgroundColor: '#fff',
                                                boxShadow: '1px 1px 2px rgba(0, 24, 41, 0.7)',
                                                zIndex: 0,
                                            }}
                                        />
                                        <LinkedInIcon sx={{ zIndex: 1, fontSize: '2.7rem', color: 'rgb(14, 118, 168)' }} />
                                    </Box>
                                    /facundoegonzalez
                                </Button>
                            </Box>
                        </Box>

                        <Divider sx={{ mt: 1, bgcolor: 'rgba(255, 255, 255, 0.2)', width: '70%' }} />

                        <TextField
                            value="fakku5@live.com.ar"
                            disabled
                            variant="outlined"
                            sx={{
                                mt: 2,
                                mb: 0.5,
                                bgcolor: 'rgba(255, 255, 255, 0.8)',
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
                                                    background: 'linear-gradient(155deg, rgb(48, 189, 135), rgb(20, 134, 104))',
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
                                                    background: 'linear-gradient(205deg, rgb(48, 189, 135), rgb(20, 134, 104))',
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
                        <Button
                            variant="text"
                            startIcon={<PictureAsPdfIcon sx={{ zIndex: 1 }} />}
                            sx={{
                                position: 'relative',
                                overflow: 'visible',
                                minWidth: 'auto',
                                color: isDarkMode ? '#eee' : 'rgb(0, 80, 59)',
                                fontFamily: 'Chakra Petch',
                                fontSize: '1.2rem',
                                textTransform: 'none',
                                px: 1,
                                py: 1,
                                mt: 1,
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
                                    width: '12.5rem',
                                    height: '2.4rem',
                                    borderRadius: '10px',
                                    backgroundColor: isDarkMode ? 'rgba(255, 0, 0, 0.4)' : 'rgba(255, 0, 0, 0.8)',
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
                            href="https://drive.google.com/file/d/13QoyiWB2BbXPoIuaKabt-wwLeiPn_6hs/view?usp=drive_link"
                            download="Facundo Gonzalez - CV Front End Developer.pdf"
                            target="_blank"
                        >
                            DESCARGAR CV
                        </Button>
                    </Box>
                </Grid>
            </Grid>
            <Snackbar
                open={snackbarOpen}
                autoHideDuration={3000}
                onClose={() => setSnackbarOpen(false)}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
            >
                <Alert severity="success" onClose={() => setSnackbarOpen(false)}
                    sx={{
                        width: '100%',
                        background: 'linear-gradient(135deg, rgba(0, 175, 122, 0.7), rgba(0, 109, 94, 0.7))',
                        color: '#eee',
                        '& .MuiAlert-icon': {
                            color: '#dfffef', // ícono
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
            <Typography sx={{ color: isDarkMode ? '#ddd' : '#000', mt: 7, textAlign: 'center' }}>
                With 💚 by FakkuGZ
            </Typography>
        </Box>
    );
};

export default Contacto;
