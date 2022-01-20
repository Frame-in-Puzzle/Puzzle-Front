import GlobalStyle from "../src/Styles/GlobalStyle";
import { Global, ThemeProvider } from "@emotion/react";
import { theme } from "../src/Styles/theme";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  layout: "fullscreen",
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <Global styles={GlobalStyle} />
      <Story />
    </ThemeProvider>
  ),
];
