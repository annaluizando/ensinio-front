import "@/app/styles/fonts.css";

export const theme = {
  colors: {
    white: "#E7E7E9",
    gray: "#423D51",
    black: "#130C25",
    purple_dark: "#432E98",
    purple_light: "#AFA0EC",
    purple_pure: "#5F41D9",
    teal_light: "#99F3F5",
    teal_pure: "#00E1E7",
    gradient: "linear-gradient(-55deg, #16D4D9 -9.84%, #5F41D9 68.64%)",
  },
  font: {
    familys: {
      primary: "'Inter', sans-serif",
      secondary: "'Degular', sans-serif",
    },
    sizes: {
      x_small: "0.938rem", // 15px
      small: "1rem", // 16px
      medium: "1.25rem", // 20px
      large: "2rem",  // 32px
      x_large: "2.75rem", // 44px
    },
    weights: {
      thin: 300,
      regular: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      extrabold: 800,
    },
    cases: {
      upper: {
        textTransform: "uppercase",
      },
    },
    spacings: {
        normal: "normal",
        wide: "0.15rem", // 2.4px
    }
  },
  media: {
    small: "(max-width: 526px)",
    medium: "(max-width: 768px)",
  },
};


export type ColorTheme = keyof typeof theme.colors
export type FontSize = keyof typeof theme.font.sizes
export type FontWeight = keyof typeof theme.font.weights
export type FontFamily = keyof typeof theme.font.familys
export type TextCase = keyof typeof theme.font.cases
export type TextSpacing = keyof typeof theme.font.spacings