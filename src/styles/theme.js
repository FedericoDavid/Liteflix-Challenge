import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  fonts: {
    heading: `'Bebas Neue', sans-serif`,
    body: `'Bebas Neue', sans-serif`,
  },
  styles: {
    global: {
      // styles for the `body`
      body: {
        bg: "#000",
        margin: 0,
        color: "white",
        overflow: "hidden",
      },
    },
  },
});

export default theme;
