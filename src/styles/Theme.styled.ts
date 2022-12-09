interface styleTheme {
  name: string;
  colors: {
    mainColor: string;
    inactiveColor: string;
    appBackground: string;
    buttonText: string;
    mainText: string;
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
  },
};

export const dark: styleTheme = {
  name: "light-theme",
  colors: {
    mainColor: "#00FFF7",
    inactiveColor: "#c4c4c4",
    appBackground: "#363442",
    buttonText: "#363442",
    mainText: "white",
  },
};
