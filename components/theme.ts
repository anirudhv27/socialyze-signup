// 1. import `extendTheme` function
import { extendTheme, ThemeConfig } from "@chakra-ui/react";

// 2. Add your color mode config
const config: ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

// 3. extend the theme
const theme = extendTheme({
  config,
  colors: {
    darkCyan: {
      50: "#EDFDFD",
      100: "#EDFDFD",
      200: "#C4F1F9",
      300: "#9DECF9",
      400: "#76E4F7",
      500: "#0BC5EA",
    },
  },
});

export default theme;
