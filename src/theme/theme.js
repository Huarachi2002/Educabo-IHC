import { createTheme } from "@mui/material";
import { red } from "@mui/material/colors";

export const PaletaTheme = createTheme({
    palette: {
        primary:{
            main: '#1696AF'
        },
        secondary:{
            main: '#F38630'
        },
        colorFont:{
            main: '#FFFFFF'
        },
        colorButtonBlack:{
            main: '#000000'
        },
        colorButton:{
            main: '#006C82'
        },
        background: {
            main: '#17a2b8'
        },
        error: {
            main: red.A400
        }
    }
})