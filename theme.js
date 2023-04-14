import { createTheme } from '@mui/material/styles';
import { blue, orange, red, yellow } from '@mui/material/colors';

export const mainTheme = createTheme({
    palette: {
      primary: orange,
      secondary: red,
    },
  });

export const buttonTheme = createTheme({
    palette: {
        primary: blue,
        secondary: yellow,
      },
})