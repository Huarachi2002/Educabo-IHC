import { createTheme } from "@mui/material";

export const PaletaTheme = createTheme({
    palette: {
        mode: 'light',
        primary: {
          main: '#ffffff',
        },
        secondary: {
          main: '#5cb6c7',
        },
        background: {
          default: '#1696af',
          paper: '#ffffff',
        },
        text: {
          primary: '#ffffff',
          secondary: '#006C82',
          black: '#00000',
        },
      },
      typography: {
        fontFamily: 'Rubik',
        h2: {
          fontFamily: 'Rubik',
        },
        h3: {
          fontFamily: 'Rubik',
        },
        h1: {
          fontFamily: 'Handlee',
        },
      },
})