import React from 'react';
import { Box, Button, Card, CardContent, Container, Typography } from '@mui/material';
import Menu from '../components/Menu';
import { authActions } from '../store/authSlice';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

const Reports: React.FC = () => {
  
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const handleLogout = () => {
    dispatch(authActions.logout());
    navigate('/');
  };

  return(
   <Box sx={{ flexGrow: 1 }}>
  {/* Aquí pasamos `nombreUsuario` como prop */}
  <Menu/>  {/* Usamos el Menu como encabezado */}

  {/* Cuerpo de la página de Reportes */}
  <Container sx={{ display: 'flex', justifyContent: 'center', marginTop: 3 }}>
    <Card sx={{ width: '100%', maxWidth: 600, borderRadius: 3, boxShadow: 3 }}>
      <CardContent>
        <Typography variant="h4" color="primary" gutterBottom>
          Página de Reports de Anibal
        </Typography>
        <Typography variant="body1" color="text.secondary" gutterBottom>
          Aquí puedes ver los informes y generar nuevos reportes. Actualmente no hay reportes disponibles, pero puedes agregar más funcionalidades en el futuro.
        </Typography>
        {/* Botón de logout (si lo necesitas en esta página) */}
        <Button
          variant="contained"
          color="secondary"
          onClick={handleLogout}
          sx={{
            mt: 2,
            padding: '10px 20px',
            borderRadius: '20px',
            fontSize: '16px',
            width: '100%',
          }}
        >
          Salir
        </Button>
      </CardContent>
    </Card>
  </Container>
</Box>
);
};

export default Reports;