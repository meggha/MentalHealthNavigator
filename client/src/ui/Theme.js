import { createTheme } from "@mui/material/styles"

const arcBlue = '#0B72B9';
const arcOrange = '#FFBA60';
const red = '#DF1F2D';
const darkRed = `#B11313`;
const pitchBlack = `#000000`;
const white = `#FFFFFF`;
const cosmicCobalt = `#2B3784`;

export default createTheme({
    customizeToolbar: {
        minHeight: 36
    },
    overrides: {
        MuiListItem: {
           root: {
              "&$selected": {
                 backgroundColor: `${darkRed}`,
                 "&:hover": {
                    backgroundColor: "orange",
                 },
              },
           },
        },
    },
    palette: {
        common: {
            red: `${red}`,
            darkRed: `${darkRed}`,
            arcBlue: `${arcBlue}`,
            blue: `${cosmicCobalt}`,
            arcOrange : `${arcOrange}`,
            white: `${white}`,
            pitchBlack: `${pitchBlack}`
        },
        primary: {
            main: `${red}`,
        },
        secondary: {
            main: `${white}`
        },
        dark: {
            main: `${pitchBlack}`
        }
    },
    typography: {
        fontFamily: 'Montserrat',
        tab: {
            fontFamily: 'Montserrat', 
            fontWeight: 300
        },
        h3: {
            fontWeight: 300
        },
        h6: {
            fontWeight: 300,
            fontFamily: 'Montserrat'
        }
    }
})