import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Router from './common/Router';
import ScrollToTop from './common/ScrollToTop';
import GlobalStyle from './assets/style/GlobalStyle';
import Footer from './components/Footer';
import Header from './components/Header';

export default function App() {
  return (
    <>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <GlobalStyle />
        <ScrollToTop />
        <Header />
        <Router />
        <Footer />
      </BrowserRouter>
    </>
  );
}
