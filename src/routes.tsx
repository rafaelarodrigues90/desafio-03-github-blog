import { ThemeProvider } from "styled-components";

import { GlobalStyles } from "./styles/global-styles";

import { BrowserRouter as Router } from "react-router-dom";

import { Header } from "./components/Header";
import { theme } from "./styles/theme";

export const Routes = () => {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <Header />
        <GlobalStyles />
      </ThemeProvider>
    </Router>
  );
};
