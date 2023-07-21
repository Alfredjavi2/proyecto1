import React from "react";
import { ColorSchemeProvider, MantineProvider } from "@mantine/core";
import theme from "@layout/Theme/theme";

const ThemeWrapper = ({ children }) => {
  return (
    <ColorSchemeProvider colorScheme="light">
      <MantineProvider theme={theme} withGlobalStyles withNormalizeCSS>
        {children}
      </MantineProvider>
    </ColorSchemeProvider>
  );
};

export default ThemeWrapper;
