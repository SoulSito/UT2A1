import { Typography, Container, Button, Paper, Box } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { RootState } from '../store';
import { authActions } from '../store/authSlice';

function Home() {
  // Accedemos a los datos del usuario desde el estado de Redux
  const userData = useSelector((state: RootState) => state.authenticator);

  // Imprimimos en la consola el rol del usuario
  console.log('Rol del usuario:', userData.userRol);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(authActions.logout());
    navigate('/');
  };

  return (
    <Container sx={{ display: 'flex', justifyContent: 'center', marginTop: '30px' }}>
      <Paper 
        elevation={3} 
        sx={{ 
          padding: '20px', 
          width: '100%', 
          maxWidth: '600px', 
          textAlign: 'center',
          backgroundColor: 'background.default', // Usamos el color de fondo del tema
        }}
      >
        <Box sx={{ mb: 2 }}>
          <Typography variant="h4" color="primary" gutterBottom>
            Bienvenido, {userData.userName}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary">
            Rol: {userData.userRol}
          </Typography>
        </Box>
        <Typography variant="h5" color="secondary" gutterBottom>
          Página Home de Anibal
        </Typography>
        <Button 
          variant="contained" 
          color="secondary" 
          onClick={handleLogout} 
          sx={{ mt: 2 }}
        >
          Salir
        </Button>
      </Paper>
    </Container>
  );
}

export default Home;
