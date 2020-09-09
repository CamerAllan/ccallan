
import defaultTheme from "@chakra-ui/core/dist/theme"

// theme.js
export default {
    ...defaultTheme,
    fonts: {
        body: "Courier New, Courier, monospace",
        heading: "Courier New, Courier, monospace",
        mono: "Courier New, Courier, monospace",
    },
    colors: {
        ...defaultTheme.colors,
        transparent: "transparent",
        black: "#333",
        grey: "#CCC",
        white: "#FAFAFA",
        primary: "#3D8E91",
        secondary: "#F0624B",
        tertiary: "#F7A21B",
    }
};