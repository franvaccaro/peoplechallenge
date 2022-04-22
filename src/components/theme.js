import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#001218',
    },
    secondary: {
      main: '#009AD8',
      dark: '#bb3e03',
      contrastText: '#ffffff',
    },
    background: {
      paper: '#160911',
    },
    text: {
      primary: '#efecec',
    },
  },
});

export default theme;
