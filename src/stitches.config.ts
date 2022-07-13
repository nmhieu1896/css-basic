import { createStitches } from "@stitches/react";

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  theme: {
    colors: {
      gray500: "hsl(206,10%,76%)",
      blue500: "hsl(206,100%,50%)",
      purple500: "hsl(252,78%,60%)",
      green500: "hsl(148,60%,60%)",
      red500: "hsl(352,100%,62%)",
      primary: "#993F98",
      primary400: "#AD65AD",
      secondary: "#3ec9c1",
      tertiary: "#757275",
      tertiary300: "#8B898B",
      tertiary100: "#C9C8C9",
      // -------
      black1: "#000",
      grey1: "#eeedee",
    },
    fontSizes: {
      12: "calc(12rem / 16)",
      14: "calc(14rem / 16)",
      16: "calc(16rem / 16)",
      18: "calc(18rem / 16)",
      20: "calc(20rem / 16)",
      28: "calc(28rem / 16)",
      36: "calc(36rem / 16)",
    },
  },
  media: {
    tablet: "(min-width: 550px)",
    laptop: "(min-width: 1100px)",
    desktop: "(min-width: 1450px)",
  },
  utils: {
    marginX: (value: number) => ({ marginLeft: value, marginRight: value }),
  },
});
