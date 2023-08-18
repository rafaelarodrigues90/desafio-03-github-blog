import { ThemeProvider } from "styled-components";

import { GlobalStyles } from "./styles/global-styles";

import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
} from "react-router-dom";

import { theme } from "./styles/theme";

export const Routes = () => {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
      </ThemeProvider>
    </Router>
  );
};