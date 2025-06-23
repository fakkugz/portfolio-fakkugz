import { Snackbar, Alert, Button } from '@mui/material';

const FormWithToast = ({ openToast, setOpenToast }) => {

  const handleClose = () => {
    setOpenToast(false);
  };

  return (
      <Snackbar
        open={openToast}
        autoHideDuration={5000}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert onClose={handleClose} severity="success" variant="filled"
               sx={{
                        width: '100%',
                        background: 'linear-gradient(135deg, rgba(0, 93, 109, 0.7), rgba(0, 151, 113, 0.7))',
                        color: '#eee',
                        '& .MuiAlert-icon': {
                            color: '#dfffef',
                        }
               }}>
          ¡Mensaje enviado con éxito!
        </Alert>
      </Snackbar>
  );
};

export default FormWithToast;
