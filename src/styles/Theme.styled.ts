interface styleTheme {
  name: string;
  colors: {
    mainColor: string;
    inactiveColor: string;
    appBackground: string;
    buttonText: string;
    mainText: string;
    headerBackground: string;
    footerBackground: string;
  };
}

export const light: styleTheme = {
  name: "light-theme",
  colors: {
    mainColor: "#ff1282",
    inactiveColor: "#c4c4c4",
    appBackground: "white",
    buttonText: "white",
    mainText: "black",
    headerBackground: "white",
    footerBackground: "#fff4f9;",
  },
};

export const dark: styleTheme = {
  name: "dark-theme",
  colors: {
    mainColor: "#00FFF7",
    inactiveColor: "#c4c4c4",
    appBackground: "#363442",
    buttonText: "#363442",
    mainText: "white",
    headerBackground: "#3F3D4D",
    footerBackground: "#3F3D4D",
  },
};
