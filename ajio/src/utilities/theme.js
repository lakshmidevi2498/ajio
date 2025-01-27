import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1366,
      xl: 1600,
    },
  },
  palette: {
    one: {
      textbg: "#000000",
      text: "#176D93",
      text2: "#866528",
      links: "#4b9c9a",
      bag: "#2c4152",
      btn: "406786",
      orange: "#FDF8EB",
      textcolor: "#666666",
      input: "#FFfDED"
    },
  },

  typography: {
    caption1: {
      fontFamily: "SourceSansPro",
    },
    text1: {
      fontFamily: "cursive",
    },
  },

  components: {
    MuiButton: {
      variants: [
        {
          props: { variant: 'outlined' },
          style: {
            backgroundColor: 'white',
            color: '#866528',
            fontWeight: 'bold',
            textTransform: "initial",
            fontSize: { xs: "12px" },
            border:"2px solid #866528",
            ':hover': {
            },
          },
        },
        {
          props: { variant: 'secondary' },
          style: {
            backgroundColor: '#ff5722',
            color: '#ffffff',
            fontWeight: 'bold',
            ':hover': {
              backgroundColor: '#e64a19',
            },
          },
        },
        {
          props: { variant: 'contained' },
          style: {
            textTransform: "initial",
            fontSize: { xs: "12px" },
            backgroundColor: "#866528",
            fontWeight: 'bold',
            color:"white",
            ':hover': {
              backgroundColor: "#866528",
            },
          },
        },
      ],
    },
    MuiInput: {
      styleOverrides: {
        underline: {
          '&:before': {
            borderBottomColor: "lightgray", 
          },
          '&:hover:before': {
            borderBottomColor: "lightgray",  
          },
          '&:after': {
            borderBottomColor: "#866528",  
          },
        },
      },
    },
  },
});

export default theme;
