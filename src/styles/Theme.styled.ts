export interface styleTheme {
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
    checkMarkUrl: string;
    selectArrow: string;
  };
}

export const light: styleTheme = {
  name: "light",
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
    checkMarkUrl: "img/icons/checkmark.svg",
    selectArrow: "img/icons/down-arrow.png",
  },
};

export const dark: styleTheme = {
  name: "dark",
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
    checkMarkUrl: "img/icons/checkmark-dark.svg",
    selectArrow: "img/icons/down-arrow-dark.svg",
  },
};

export const themeList: styleTheme[] = [dark, light];
