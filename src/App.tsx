import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import BookNow from './pages/BookNow';
import Footer from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';
import ScrollToTop from './components/ScrollToTop';

function AppContent() {
  const location = useLocation();
  const isBookNowPage = location.pathname === '/book-now';

  return (
    <>
      {!isBookNowPage && <Header />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/book-now" element={<BookNow />} />
      </Routes>
      {!isBookNowPage && <Footer />}
      <WhatsAppFloat />
      <ScrollToTop />
    </>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
