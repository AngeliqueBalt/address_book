import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';

import '@fontsource-variable/gabarito';
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';

const theme = createTheme({
  typography: {
    fontFamily: "'Gabarito Variable', system-ui, Avenir, Helvetica, Arial, sans-serif",
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
      html, body, * {
        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
      }
      
      html, body, #root {
        height: 100%;
        width: 100%;
      }
      `,
    },
  },
});

const root = document.getElementById('root')!;
createRoot(root).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
);
