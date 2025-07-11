import { Box, Paper, Typography } from '@mui/material';
import Html from '../components/logos/Html';
import Css from '../components/logos/Css';
import Js from '../components/logos/Js';
import Ts from '../components/logos/Ts';
import ReactJs from '../components/logos/ReactJs';
import Next from '../components/logos/Next';
import Tailwind from '../components/logos/Tailwind';
import Mui from '../components/logos/Mui';
import Bootstrap from '../components/logos/Bootstrap';
import Python from '../components/logos/Python';
import Github from '../components/logos/Github';
import Premiere from '../components/logos/Premiere';
import After from '../components/logos/After';
import React from 'react';
import { useThemeContext } from '../context/ThemeContext';


const Skills = () => {

    const { isDarkMode } = useThemeContext();

    const iconStyles = {
        fontSize: '100px',
        filter: 'drop-shadow(2px 2px 2px rgba(0, 0, 0, 0.6))',
    };

    const rawIcons = [
        <Html />,
        <Css />,
        <Js />,
        <Ts />,
        <ReactJs />,
        <Next />,
        <Tailwind />,
        <Bootstrap />,
        <Mui fontSize="95px" />,
        <Python />,
        <Github />,
        <Premiere />,
        <After />,
    ];

    const skillsIcons = rawIcons.map(icon =>
        React.cloneElement(icon, {
            size: '100px',
            style: {
                fontSize: '100px',
                filter: 'drop-shadow(2px 2px 2px rgba(0, 0, 0, 0.6))',
            },
        })
    );

    const paperBackgrounds = [
        'linear-gradient(135deg, rgba(187, 69, 0, 0.3), rgba(102, 32, 0, 0.3))',
        'linear-gradient(135deg, rgba(23, 91, 121, 0.3), rgba(4, 23, 99, 0.3))',
        'linear-gradient(135deg, rgba(129, 121, 28, 0.4), rgba(49, 45, 3, 0.4))',
        'linear-gradient(135deg, rgba(28, 55, 129, 0.4), rgba(3, 32, 49, 0.4))',
        'linear-gradient(135deg, rgba(19, 107, 81, 0.3), rgba(19, 44, 33, 0.3))',
        'linear-gradient(135deg, rgba(19, 44, 33, 0.3), rgba(19, 107, 81, 0.3))',
        'linear-gradient(135deg, rgba(19, 94, 107, 0.3), rgba(19, 43, 44, 0.3))',
        'linear-gradient(135deg, rgba(35, 42, 65, 0.4), rgba(17, 36, 144, 0.4))',
        'linear-gradient(135deg, rgba(67, 124, 98, 0.5), rgba(27, 56, 73, 0.5))',
        'linear-gradient(135deg, rgba(112, 114, 15, 0.4), rgba(32, 26, 88, 0.4))',
        'linear-gradient(135deg, rgba(113, 146, 236, 0.2), rgba(66, 172, 204, 0.2))',
        'linear-gradient(135deg, rgba(130, 32, 86, 0.5), rgba(148, 96, 118, 0.5))',
        'linear-gradient(135deg, rgba(44, 59, 108, 0.5), rgba(26, 52, 126, 0.5))',

    ];

    const opacityShadow = isDarkMode ? 0.3 : 0.7

    const paperShadows = [
        `3px 3px 6px rgba(163, 87, 43, ${opacityShadow})`,
        `3px 3px 6px rgba(43, 99, 163, ${opacityShadow})`,
        `3px 3px 6px rgba(161, 163, 43, ${opacityShadow})`,
        `3px 3px 6px rgba(43, 99, 163, ${opacityShadow})`,
        `3px 3px 6px rgba(43, 163, 113, ${opacityShadow})`,
        `3px 3px 6px rgba(43, 163, 113, ${opacityShadow})`,
        `3px 3px 6px rgba(43, 99, 163, ${opacityShadow})`,
        `3px 3px 6px rgba(139, 43, 163, ${opacityShadow})`,
        `3px 3px 6px rgba(43, 109, 163, ${opacityShadow})`,
        `3px 3px 6px rgba(163, 151, 43, ${opacityShadow})`,
        `3px 3px 6px rgba(163, 43, 127, ${opacityShadow})`,
        `3px 3px 6px rgba(163, 43, 109, ${opacityShadow})`,
        `3px 3px 6px rgba(109, 43, 163, ${opacityShadow})`,
    ];

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', py: 5, mt: 7 }}>
            <Typography
                className='appear-scroll'
                variant="h4"
                fontFamily="Chakra Petch"
                mb={4}
                sx={{
                    background: isDarkMode ?
                        'linear-gradient(45deg, rgb(211, 255, 237), rgb(135, 255, 205), rgb(195, 246, 255))' :
                        'rgb(0, 78, 92)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    fontWeight: isDarkMode ? '400' : '500',
                    fontSize: { xs: '30px', sm: '34px' }
                }}
            >
                --- /* Skills */ ---
            </Typography>

            <Box
                sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: { xs: 2, sm: 6 },
                    width: { xs: '95%', md: '80%' },
                    mt: 4,
                }}
            >
                {skillsIcons.map((icon, index) => (
                    <Paper
                        className='appear-scroll'
                        key={index}
                        elevation={4}
                        sx={{
                            p: 2,
                            mx: { xs: 0.5, md: 2 },
                            borderRadius: '25%',
                            width: { xs: 90, md: 150 },
                            height: { xs: 90, md: 150 },
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            border: '1px solid rgba(0, 187, 115, 0.4)',
                            boxShadow: isDarkMode ? '1px 1px 3px rgba(0, 0, 0, 0.2)' : '5px 5px 7px rgba(0, 0, 0, 0.5)',
                            background: paperBackgrounds[index % paperBackgrounds.length],
                            backdropFilter: 'blur(6px)',
                            transition: 'all 0.3s ease',
                            '&:hover': {
                                transform: 'scale(1.1)',
                                boxShadow: paperShadows[index % paperShadows.length]
                            },
                        }}
                    >
                        {icon}
                    </Paper>
                ))}
            </Box>
        </Box>
    );
};

export default Skills;
