import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  styles: {
    global: {
      body: {
        minHeight: "100vh",
        overflowX: "hidden",
        bg: "#2A303B",
      },
      "*": {
        "&::-webkit-scrollbar": {
          width: 1.5,
        },
        "&::-webkit-scrollbar-track": {
          backgroundColor: "dappTemplate.dark.base",
        },
        "&::-webkit-scrollbar-thumb": {
          backgroundColor: "dappTemplate.light",
          borderRadius: 1.5,
        },
        scrollbarWidth: "auto",
        scrollbarColor: "dappTemplate.light dappTemplate.dark.base",
      },
    },
  },
  colors: {
    footer: "#1D222A",
  },
});

export default theme;
