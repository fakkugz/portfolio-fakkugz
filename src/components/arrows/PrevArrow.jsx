import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { Box } from '@mui/material';

const PrevArrow = (props) => {
    const { onClick } = props;
    return (
      <Box
        className="slider-arrows"
        onClick={onClick}
        sx={{
          position: 'absolute',
          bottom: 15,
          right: 60,
          zIndex: 2,
          opacity: 0,
          backgroundColor: 'rgba(166, 255, 188, 0.7)',
          border: '1px solid rgba(0, 59, 34, 0.7)',
          borderRadius: '50%',
          width: 36,
          height: 36,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          transition: 'all 0.3s ease',
          '&:hover': {
            backgroundColor: 'rgba(0, 59, 34, 0.8)',
            color: 'white',
            transform: 'scale(1.1)',
          },
        }}
      >
        <ArrowBackIosNewIcon sx={{ fontSize: 20 }} />
      </Box>
    );
  };

  export default PrevArrow;