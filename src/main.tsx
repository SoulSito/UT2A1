import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import CssBaseline from '@mui/material/CssBaseline'
import ThemeProvider from '@mui/material/styles/ThemeProvider'
import createTheme from '@mui/material/styles/createTheme'


const customTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#3f51b5',
    },
    secondary: {
      main: '#f50057',
    },
    error: {
        main: '#7400b8',
    },
    success: {
        main: '#64dfdf',
    },
    warning: {
        main: '#f48c06',
    },
  },
})

createRoot(document.getElementById('root')!).render(
 <StrictMode>
 <ThemeProvider theme={customTheme}>
 <CssBaseline />
 <App />
 </ThemeProvider>
 </StrictMode>,
)
