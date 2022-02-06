import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import Router from './common/Router';
import ScrollToTop from './common/ScrollToTop';
import Footer from './components/Footer';
import Header from './components/Header';

import GlobalStyle from './assets/style/GlobalStyle';
import theme from './assets/style/theme';

export default function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <BrowserRouter basename={process.env.PUBLIC_URL}>
          <GlobalStyle />
          <ScrollToTop />
          <Header />
          <Router />
          <Footer />
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}
