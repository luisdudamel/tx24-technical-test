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
    inactivePlaceholderText: string;
    inactivePlaceholderBackground: string;
    stepIconBackground: string;
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
    footerBackground: "#fff4f9",
    inactivePlaceholderText: "rgba(148, 148, 148, 1)",
    inactivePlaceholderBackground: "rgba(230, 230, 230, 1)",
    stepIconBackground: "#ff1282",
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
    inactivePlaceholderText: "rgba(148, 148, 148, 1)",
    inactivePlaceholderBackground: "rgba(133, 133, 133, 0.35)",
    stepIconBackground: "#363442",
  },
};
