import React, { useState } from 'react';
import { Box, Button, TextField, Icon, IconButton, InputAdornment } from '@mui/material';
import { Alert } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const Login: React.FC = () => {
  const bduser = 'anibal';
  const bdpasswd = 'pera1234';

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (username === bduser && password === bdpasswd) {
      navigate('/home');
    } else {
      setError(true);
    }
  };

  const handleClickShowPassword = () => setShowPassword(!showPassword);

  return (
    <Box
      component='form'
      onSubmit={handleSubmit}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
        width: '100%',
        maxWidth: 400,
        margin: 'auto',
        padding: 4,
        borderRadius: 1,
        backgroundColor: 'background.paper',
        boxShadow: 3
      }}
    >
      <Icon sx={{ fontSize: 40, color: 'primary', alignSelf: 'center' }}>login</Icon>

      <TextField
        label='Usuario'
        variant='outlined'
        fullWidth
        required
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <TextField
        label='Contraseña'
        variant='outlined'
        type={showPassword ? 'text' : 'password'}
        fullWidth
        required
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                edge="end"
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          ),
        }}
      />

      <Button variant='contained' color='secondary' fullWidth type='submit'>
        Ingresar
      </Button>

      {error && <Alert severity='warning'>Usuario o contraseña incorrectos</Alert>}
    </Box>
  );
};

export default Login;
