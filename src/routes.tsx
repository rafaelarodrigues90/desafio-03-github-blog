import { ThemeProvider } from "styled-components";

import { GlobalStyles } from "./styles/global-styles";

import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
} from "react-router-dom";

import { Home } from "./pages/Home";
import { Post } from "./pages/Post";
import { Header } from "./components/Header";
import { theme } from "./styles/theme";

export const Routes = () => {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <Header />
        <Switch>
          <Route path="/" element={<Home />} />
          <Route path="/post/:postNumber" element={<Post />} />
        </Switch>
        <GlobalStyles />
      </ThemeProvider>
    </Router>
  );
};
