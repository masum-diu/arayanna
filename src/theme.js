import { createTheme } from "@mui/material/styles";

const primary = "#787878"; // Violet
const secondary = "#FBB03B"; // Golden
const background = "#ffffff"; // White
const background2 = "#2D323F"; // Timeline Background
const background3 = "#4CC0B6";
const background4 = "#FF6A6A";
const error = "#FF0000";
const success = "#308129";
const black = "#000";
const ash = "#E9E9E9";

const breakpoints = {
  // for responsiveness
  values: {
    xs: 0,
    xms: 380,
    sm: 600, // Phone
    md: 900, // Tablet/Laptop
    lg: 1200, // Desktop
    xl: 1536,
  },
};

const theme = createTheme({
  breakpoints: breakpoints,
  palette: {
    primary: {
      main: primary,
      contrastText: background,
    },
    secondary: {
      main: secondary,
      contrastText: background,
    },
    ash: {
      main: ash,
      dark: "#00000089",
      contrastText: primary,
    },
    white: {
      main: background,
      contrastText: primary,
    },
    background: {
      default: background,
    },
    background3: {
      main: background3,
      contrastText: background,
    },
    background4: {
      main: background4,
      contrastText: background,
    },
    background2: {
      main: background2,
      contrastText: background,
    },
    badge: {
      main: background,
      contrastText: error,
    },
    badge1: {
      main: background,
      contrastText: success,
    },
    black: {
      main: black,
      contrastText: background,
    },
  },
  components: {
    MuiBadge: {
      styleOverrides: {
        badge: {
          borderRadius: "4px",
          // padding: "5px 10px",
          // color: error,
          fontWeight: "bold",
          // background: background,
        },
      },
    },
    MuiDialogActions: {
      styleOverrides: {
        root: {
          marginLeft: "0px",
        },
      },
    },
  },
  typography: {
    fontFamily: "'Gellix', sans-serif",
  },
});

theme.typography.header1 = {
  fontSize: "24px",
  fontWeight: "bold",
  color: black,
  [theme.breakpoints.down("sm")]: {
    fontSize: "16px",
  },
};

theme.typography.login1 = {
  fontSize: "48px",
  fontWeight: "500",
  color: primary,
  [theme.breakpoints.down("md")]: {
    fontSize: "24px",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "18px",
  },
};
theme.typography.legend = {
  fontSize: "16px",
  fontWeight: "500",
  [theme.breakpoints.down("sm")]: {
    fontSize: "12px",
  },
};
theme.typography.tileTime = {
  fontSize: "0.7rem",
  fontWeight: "lighter",
  lineHeight: "0.7rem",
};

theme.typography.normal = {
  fontSize: "16px",
  [theme.breakpoints.down("sm")]: {
    fontSize: "12px",
  },
};

theme.typography.pre = {
  fontSize: "16px",

  [theme.breakpoints.down("sm")]: {
    fontSize: "12px",
  },
};

theme.typography.cardHeader = {
  fontSize: "14px",
  fontWeight: "bold",
  color: black,
  [theme.breakpoints.down("sm")]: {
    fontSize: "12px",
  },
};
theme.typography.cardHeader2 = {
  fontSize: "14px",
  fontWeight:"400",
  
  [theme.breakpoints.down("sm")]: {
    fontSize: "12px",
  },
};
theme.typography.cardHeader3 = {
  fontSize: "14px",
  fontWeight:"400",
  color:"#3A3A3A",
  [theme.breakpoints.down("sm")]: {
    fontSize: "12px",
  },
};
theme.typography.cardHeader1 = {
  fontSize: "16px",
  fontWeight: "bold",
  // fontWeight:"400",
  color: black,
  [theme.breakpoints.down("sm")]: {
    fontSize: "12px",
  },
};

theme.typography.cardLocation = {
  fontSize: "12px",
  fontWeight:"400",
  // color: ,
  [theme.breakpoints.down("sm")]: {
    fontSize: "8px",
  },
};
theme.typography.cardLocation1 = {
  fontSize: "12px",
  // color: ,
  [theme.breakpoints.down("sm")]: {
    fontSize: "10px",
  },
};

theme.typography.tabText = {
  fontSize: "18px",
  fontWeight: "400",
  [theme.breakpoints.down("sm")]: {
    fontSize: "12px",
  },
};

export default theme;
